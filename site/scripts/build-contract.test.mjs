import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtemp, readFile, readdir, rm, stat } from "node:fs/promises";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { extname, join, relative, sep } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const siteRoot = fileURLToPath(new URL("../", import.meta.url));
const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const canonicalOrigin = "https://fouranu.com";
const editorialAuthor = {
  name: "Rédaction Four à Nu",
  route: "/auteurs/redaction-four-a-nu/",
};
const fixedIndexableRoutes = [
  "/",
  "/a-propos/",
  editorialAuthor.route,
  "/contact/",
  "/corrections/",
  "/confidentialite/",
  "/fours-a-pizza/",
  "/methode/",
  "/mentions-legales/",
  "/ooni/",
  "/transparence/",
];
const indexableRobots =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const articleRoutePattern = /^\/(?:ooni|gozney)\/[^/]+\/$/;

async function filesRecursively(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesRecursively(path)));
    if (entry.isFile()) files.push(path);
  }
  return files;
}

async function htmlPages(directory = dist) {
  const files = (await filesRecursively(directory))
    .filter((file) => file.endsWith(".html"))
    .sort();
  return Promise.all(
    files.map(async (file) => ({
      file,
      route: routeForFile(file, directory),
      html: await readFile(file, "utf8"),
    })),
  );
}

function routeForFile(file, directory) {
  const path = relative(directory, file).split(sep).join("/");
  if (path === "404.html") return null;
  if (path === "index.html") return "/";
  return `/${path.replace(/index\.html$/, "")}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\s${escapeRegex(name)}="([^"]*)"`, "i"))?.[1];
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function pairedElements(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>([\\s\\S]*?)<\\/${name}>`, "gi"))];
}

function metaContent(html, key) {
  const tag = tags(html, "meta").find(
    (candidate) => attribute(candidate, "name") === key || attribute(candidate, "property") === key,
  );
  return tag ? attribute(tag, "content") : undefined;
}

function linkHref(html, relation) {
  const matches = tags(html, "link").filter((tag) => attribute(tag, "rel") === relation);
  return matches.map((tag) => attribute(tag, "href"));
}

function decodeHtml(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 16)))
    .replace(/&#(\d+);/g, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 10)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name] ?? entity);
}

function visibleText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function jsonLdDocuments(html) {
  return pairedElements(html, "script")
    .filter((match) => attribute(`<script${match[1]}>`, "type") === "application/ld+json")
    .map((match) => JSON.parse(match[2]));
}

function schemaNodes(documents) {
  return documents.flatMap((document) => document["@graph"] ?? [document]);
}

async function routeExists(route, directory = dist) {
  const url = new URL(route, canonicalOrigin);
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
  const candidate = extname(relativePath)
    ? join(directory, relativePath)
    : join(directory, relativePath, "index.html");
  try {
    return (await stat(candidate)).isFile();
  } catch {
    return false;
  }
}

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const finishRow = () => {
    row.push(field);
    if (row.some((value) => value.length > 0)) rows.push(row);
    row = [];
    field = "";
  };

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    if (quoted) {
      if (character === '"' && input[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      assert.equal(field, "", "guillemet CSV inattendu");
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      finishRow();
    } else if (character === "\r") {
      if (input[index + 1] === "\n") index += 1;
      finishRow();
    } else {
      field += character;
    }
  }
  assert.equal(quoted, false, "champ CSV non fermé");
  if (field.length > 0 || row.length > 0) finishRow();
  return rows;
}

test("chaque page expose des métadonnées uniques, cohérentes et sémantiques", async () => {
  const pages = await htmlPages();
  assert.equal(pages.length, 23);
  const titles = new Set();
  const descriptions = new Set();

  for (const page of pages) {
    const label = relative(dist, page.file);
    assert.match(page.html, /<!doctype html>/i, label);
    assert.match(page.html, /<html lang="fr">/, label);
    assert.match(page.html, /<meta charset="UTF-8">/, label);
    assert.match(page.html, /<meta name="viewport" content="width=device-width, initial-scale=1">/, label);
    assert.equal(metaContent(page.html, "robots"), "noindex, follow", label);
    assert.equal(tags(page.html, "title").length, 1, label);
    assert.equal(tags(page.html, "meta").filter((tag) => attribute(tag, "name") === "description").length, 1, label);
    assert.equal(metaContent(page.html, "keywords"), undefined, label);

    const title = visibleText(pairedElements(page.html, "title")[0][2]);
    const description = decodeHtml(metaContent(page.html, "description"));
    assert.ok(title.length >= 15, `${label}: titre trop vague`);
    assert.ok(description.length >= 45, `${label}: description trop vague`);
    assert.ok(!titles.has(title), `${label}: titre dupliqué`);
    assert.ok(!descriptions.has(description), `${label}: description dupliquée`);
    titles.add(title);
    descriptions.add(description);

    assert.equal(pairedElements(page.html, "h1").length, 1, `${label}: un seul h1 attendu`);
    assert.match(page.html, /<main id="contenu">/, label);
    assert.match(page.html, /<a class="skip-link" href="#contenu">Aller au contenu<\/a>/, label);
    assert.match(page.html, /<header class="site-header">/, label);
    assert.match(page.html, /<footer class="site-footer">/, label);

    const headings = [...page.html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
    assert.equal(headings[0], 1, `${label}: la hiérarchie doit commencer par h1`);
    for (let index = 1; index < headings.length; index += 1) {
      assert.ok(headings[index] <= headings[index - 1] + 1, `${label}: saut de niveau de titre`);
    }

    for (const anchor of pairedElements(page.html, "a")) {
      const opening = `<a${anchor[1]}>`;
      assert.ok(
        visibleText(anchor[2]).length > 0 || Boolean(attribute(opening, "aria-label")),
        `${label}: lien sans nom accessible`,
      );
      const href = attribute(opening, "href");
      if (href?.startsWith("/")) {
        assert.equal(await routeExists(href), true, `${label}: lien interne cassé ${href}`);
      }
    }
    for (const image of tags(page.html, "img")) {
      assert.notEqual(attribute(image, "alt"), undefined, `${label}: image sans attribut alt`);
    }
    for (const table of pairedElements(page.html, "table")) {
      assert.match(table[2], /<th\b/i, `${label}: tableau sans en-tête`);
    }

    const canonicalLinks = linkHref(page.html, "canonical");
    if (page.route === null) {
      assert.deepEqual(canonicalLinks, [], "la vraie 404 ne déclare pas de canonique fictive");
      assert.equal(metaContent(page.html, "og:url"), undefined);
    } else {
      assert.deepEqual(canonicalLinks, [`${canonicalOrigin}${page.route}`], label);
      const canonical = new URL(canonicalLinks[0]);
      assert.equal(canonical.search, "", label);
      assert.equal(canonical.hash, "", label);
      assert.equal(metaContent(page.html, "og:url"), canonical.toString(), label);
    }

    assert.equal(metaContent(page.html, "og:title"), metaContent(page.html, "twitter:title"), label);
    assert.equal(metaContent(page.html, "og:description"), metaContent(page.html, "twitter:description"), label);
    assert.equal(metaContent(page.html, "og:title"), decodeHtml(title), label);
    assert.equal(metaContent(page.html, "og:description"), metaContent(page.html, "description"), label);
    assert.equal(metaContent(page.html, "og:site_name"), "Four à Nu", label);
    assert.equal(metaContent(page.html, "og:locale"), "fr_FR", label);
    assert.equal(metaContent(page.html, "og:image"), `${canonicalOrigin}/og/four-a-nu-default.png`, label);
    assert.equal(metaContent(page.html, "og:image:type"), "image/png", label);
    assert.equal(metaContent(page.html, "og:image:width"), "1200", label);
    assert.equal(metaContent(page.html, "og:image:height"), "630", label);
    assert.ok(metaContent(page.html, "og:image:alt")?.length > 20, label);
    assert.equal(metaContent(page.html, "twitter:card"), "summary_large_image", label);
    assert.equal(metaContent(page.html, "twitter:image"), metaContent(page.html, "og:image"), label);
    assert.equal(metaContent(page.html, "twitter:image:alt"), metaContent(page.html, "og:image:alt"), label);
    assert.deepEqual(
      tags(page.html, "link")
        .filter((tag) => attribute(tag, "rel") === "alternate")
        .filter((tag) => attribute(tag, "type") === "application/rss+xml")
        .map((tag) => attribute(tag, "href")),
      ["/rss.xml"],
      `${label}: flux RSS non déclaré ou ambigu`,
    );
    assert.ok(Buffer.byteLength(page.html) < 80_000, `${label}: HTML supérieur à 80 Ko`);

    const scripts = pairedElements(page.html, "script");
    assert.ok(
      scripts.every((script) => attribute(`<script${script[1]}>`, "type") === "application/ld+json"),
      `${label}: JavaScript client inattendu`,
    );
  }
});

test("les données structurées restent vérifiables et sans faux avis", async () => {
  const pages = await htmlPages();
  const home = pages.find((page) => page.route === "/");
  const homeNodes = schemaNodes(jsonLdDocuments(home.html));
  const website = homeNodes.find((node) => node["@type"] === "WebSite");
  const organization = homeNodes.find((node) => node["@type"] === "Organization");
  assert.equal(website.name, "Four à Nu");
  assert.equal(website.alternateName, "Four a Nu");
  assert.equal(website.url, `${canonicalOrigin}/`);
  assert.equal(organization["@id"], `${canonicalOrigin}/#organization`);

  const authorPage = pages.find((page) => page.route === editorialAuthor.route);
  assert.ok(authorPage, "page de signature éditoriale absente");
  const profile = schemaNodes(jsonLdDocuments(authorPage.html))
    .find((node) => node["@type"] === "ProfilePage");
  assert.ok(profile, "ProfilePage de la rédaction absent");
  assert.equal(profile.url, `${canonicalOrigin}${editorialAuthor.route}`);
  assert.equal(profile.mainEntity?.["@type"], "Organization");
  assert.equal(profile.mainEntity?.name, editorialAuthor.name);
  assert.equal(profile.mainEntity?.url, `${canonicalOrigin}${editorialAuthor.route}`);

  const articlePages = pages.filter((page) => articleRoutePattern.test(page.route ?? ""));
  assert.equal(articlePages.length, 11);

  for (const page of pages) {
    const documents = jsonLdDocuments(page.html);
    const serialized = JSON.stringify(documents);
    assert.doesNotMatch(serialized, /AggregateRating|"@type":"Review"/);

    if (page.route && page.route !== "/") {
      const breadcrumb = schemaNodes(documents).find((node) => node["@type"] === "BreadcrumbList");
      assert.ok(breadcrumb, `${page.route}: BreadcrumbList absent`);
      assert.deepEqual(
        breadcrumb.itemListElement.map((item) => item.position),
        breadcrumb.itemListElement.map((_, index) => index + 1),
      );
      assert.equal(
        breadcrumb.itemListElement.at(-1).item,
        `${canonicalOrigin}${page.route}`,
        `${page.route}: dernière étape du fil d'Ariane incohérente`,
      );
    }

    if (articlePages.includes(page)) {
      const article = schemaNodes(documents).find((node) => node["@type"] === "Article");
      const h1 = visibleText(pairedElements(page.html, "h1")[0][2]);
      assert.ok(article, `${page.route}: Article JSON-LD absent`);
      assert.equal(article.url, `${canonicalOrigin}${page.route}`);
      assert.equal(article.headline, h1);
      assert.equal(article.inLanguage, "fr");
      assert.equal(article.author.name, editorialAuthor.name);
      assert.equal(article.author["@type"], "Organization");
      assert.equal(article.author.url, `${canonicalOrigin}${editorialAuthor.route}`);
      assert.equal(metaContent(page.html, "article:author"), editorialAuthor.name);
      assert.equal(article.datePublished, metaContent(page.html, "article:published_time"));
      assert.equal(article.dateModified, metaContent(page.html, "article:modified_time"));
      assert.equal(new Date(article.datePublished).toISOString(), article.datePublished);
      assert.equal(new Date(article.dateModified).toISOString(), article.dateModified);
      assert.ok(
        tags(page.html, "a").some((tag) =>
          attribute(tag, "rel") === "author" &&
          attribute(tag, "href") === editorialAuthor.route
        ),
        `${page.route}: lien de signature visible absent`,
      );
    }
  }
});

test("les onze analyses rendent toutes leurs preuves citées depuis le registre synchronisé", async () => {
  const canonicalCsv = await readFile(join(repositoryRoot, "research/evidence.csv"), "utf8");
  const componentCsv = await readFile(join(siteRoot, "src/data/evidence.csv"), "utf8");
  assert.equal(componentCsv, canonicalCsv, "la copie de build du registre a dérivé de research/evidence.csv");

  const rows = parseCsv(componentCsv);
  const headers = rows.shift();
  assert.equal(headers.length, 17);
  const records = new Map(
    rows.map((values) => [
      values[0],
      Object.fromEntries(headers.map((header, index) => [header, values[index]])),
    ]),
  );
  assert.equal(records.size, 118);

  const markdownFiles = (await readdir(join(siteRoot, "src/content/analyses")))
    .filter((file) => file.endsWith(".md"))
    .sort();
  assert.equal(markdownFiles.length, 11);

  for (const markdownFile of markdownFiles) {
    const slug = markdownFile.replace(/\.md$/, "");
    const markdown = await readFile(join(siteRoot, "src/content/analyses", markdownFile), "utf8");
    const articleId = markdown.match(/^articleId:\s*((?:OONI|GOZNEY)-\d{3})$/m)?.[1];
    const brand = markdown.match(/^brand:\s*(ooni|gozney)$/m)?.[1];
    assert.ok(articleId, `${slug}: articleId absent ou invalide`);
    assert.ok(brand, `${slug}: marque absente ou invalide`);
    assert.ok(
      articleId.startsWith(`${brand.toUpperCase()}-`),
      `${slug}: articleId incohérent avec la marque`,
    );
    const expectedIds = [...new Set(markdown.match(/\bEV-\d{4}\b/g) ?? [])];
    assert.ok(expectedIds.length >= 1, `${slug}: aucune preuve citée`);
    for (const evidenceId of expectedIds) {
      assert.ok(records.has(evidenceId), `${slug}: ${evidenceId} absent du registre`);
      assert.ok(
        records.get(evidenceId).article_ids.split(";").includes(articleId),
        `${slug}: ${evidenceId} ne référence pas ${articleId} dans article_ids`,
      );
    }

    const html = await readFile(join(dist, brand, slug, "index.html"), "utf8");
    const renderedIds = [...html.matchAll(/data-evidence-id="(EV-\d{4})"/g)].map((match) => match[1]);
    assert.deepEqual(renderedIds, expectedIds, `${slug}: bibliographie incomplète ou réordonnée`);
    assert.ok(
      pairedElements(html, "h2").some((heading) =>
        attribute(`<h2${heading[1]}>`, "id") === "cited-sources-title" &&
        visibleText(heading[2]) === "Sources"
      ),
      `${slug}: titre de bibliographie absent`,
    );

    for (const evidenceId of expectedIds) {
      assert.match(html, new RegExp(`href="#preuve-${evidenceId}"`), `${slug}: ${evidenceId} non cliquable`);
      const item = html.match(
        new RegExp(`<li id="preuve-${evidenceId}"[\\s\\S]*?<\\/li>`),
      )?.[0];
      assert.ok(item, `${slug}: entrée ${evidenceId} absente`);
      const record = records.get(evidenceId);
      if (record.source_url) assert.match(item, /<a href="https?:\/\//, `${slug}: source ${evidenceId} non liée`);
      if (record.source_type === "youtube" && record.timecode_start) {
        assert.match(item, /[?&amp;]t=\d+s/, `${slug}: timecode ${evidenceId} absent du lien`);
      }
    }
  }
});

test("RSS et llms.txt exposent exactement les onze dossiers publiables", async () => {
  const articleRoutes = (await htmlPages())
    .map((page) => page.route)
    .filter((route) => articleRoutePattern.test(route ?? ""))
    .sort();
  assert.equal(articleRoutes.length, 11);

  const rss = await readFile(join(dist, "rss.xml"), "utf8");
  assert.match(rss, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(rss, /<rss version="2\.0" xmlns:dc="http:\/\/purl\.org\/dc\/elements\/1\.1\/">/);
  const rssItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
  assert.equal(rssItems.length, 11);
  const rssRoutes = rssItems.map((item) => {
    assert.match(item, /<title>[^<]+<\/title>/);
    assert.match(item, /<description>[^<]+<\/description>/);
    assert.match(item, /<pubDate>[^<]+<\/pubDate>/);
    assert.match(item, new RegExp(`<dc:creator>${editorialAuthor.name}<\\/dc:creator>`));
    const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
    const guid = item.match(/<guid isPermaLink="true">([^<]+)<\/guid>/)?.[1];
    assert.equal(guid, link, "le GUID RSS doit être l'URL canonique du dossier");
    assert.ok(link);
    const pathname = new URL(link).pathname;
    assert.match(pathname, articleRoutePattern);
    return pathname;
  }).sort();
  assert.deepEqual(rssRoutes, articleRoutes);

  const llms = await readFile(join(dist, "llms.txt"), "utf8");
  assert.match(llms, /^# Four à Nu\n/);
  for (const route of [
    "/fours-a-pizza/",
    "/ooni/",
    "/methode/",
    editorialAuthor.route,
    "/transparence/",
    "/corrections/",
  ]) {
    assert.match(llms, new RegExp(escapeRegex(`${canonicalOrigin}${route}`)));
  }
  const llmsRoutes = [...llms.matchAll(/\]\(https:\/\/fouranu\.com(\/(?:ooni|gozney)\/[^/)]+\/)\)/g)]
    .map((match) => match[1])
    .sort();
  assert.deepEqual(llmsRoutes, articleRoutes);
  assert.doesNotMatch(llms, /J-TEST/);
  assert.match(llms, /ne publie ni note, ni étoile, ni donnée Review ou AggregateRating/i);
});

test("l'illustration d'accueil est responsive, explicite et légère", async () => {
  const home = (await htmlPages()).find((page) => page.route === "/");
  assert.ok(home);
  const picture = pairedElements(home.html, "picture")[0];
  assert.ok(picture, "picture responsive absent de l'accueil");
  const source = tags(picture[2], "source")[0];
  const image = tags(picture[2], "img")[0];
  assert.ok(source);
  assert.ok(image);
  assert.equal(attribute(source, "type"), "image/webp");
  assert.ok(attribute(source, "sizes")?.length > 0, "attribut sizes absent");

  const candidates = attribute(source, "srcset")
    ?.split(",")
    .map((candidate) => candidate.trim().split(/\s+/)) ?? [];
  assert.equal(candidates.length, 2);
  assert.deepEqual(candidates.map(([, width]) => width), ["768w", "1536w"]);
  for (const [route] of candidates) {
    assert.equal(await routeExists(route), true, `variante responsive absente: ${route}`);
  }

  assert.equal(attribute(image, "src"), candidates[1][0]);
  assert.equal(attribute(image, "width"), "1536");
  assert.equal(attribute(image, "height"), "1024");
  assert.ok((attribute(image, "alt") ?? "").length >= 45, "alternative textuelle trop vague");
  assert.equal(attribute(image, "fetchpriority"), "high");
  assert.equal(attribute(image, "loading"), undefined, "le visuel LCP ne doit pas être chargé paresseusement");

  const figure = pairedElements(home.html, "figure").find((match) => match[2].includes(image));
  assert.ok(figure);
  const caption = visibleText(pairedElements(figure[2], "figcaption")[0]?.[2] ?? "");
  assert.match(caption, /assistée par IA/i);
  assert.match(caption, /ne constitue pas une preuve/i);

  const smallVisual = await stat(join(dist, candidates[0][0].replace(/^\//, "")));
  const largeVisual = await stat(join(dist, candidates[1][0].replace(/^\//, "")));
  assert.ok(smallVisual.size < 50_000, "le visuel 768 px dépasse 50 Ko");
  assert.ok(largeVisual.size < 150_000, "le visuel 1536 px dépasse 150 Ko");
});

test("le logo Four à Nu est explicite, dimensionné et léger", async () => {
  const home = (await htmlPages()).find((page) => page.route === "/");
  assert.ok(home);
  const header = pairedElements(home.html, "header")[0];
  assert.ok(header, "en-tête absent de l'accueil");
  const logo = tags(header[2], "img").find(
    (image) => attribute(image, "src") === "/brand/logo-fouranu.png",
  );
  assert.ok(logo, "logo Four à Nu absent de l'en-tête");
  assert.equal(attribute(logo, "width"), "480");
  assert.equal(attribute(logo, "height"), "172");
  assert.equal(attribute(logo, "alt"), "Four à Nu");
  assert.equal(await routeExists("/brand/logo-fouranu.png"), true);

  const logoFile = await stat(join(dist, "brand/logo-fouranu.png"));
  assert.ok(logoFile.size < 200_000, "le logo d'en-tête dépasse 200 Ko");
});

test("robots et sitemap gardent la preview hors index et séparent Search de GPTBot", async () => {
  const robots = await readFile(join(dist, "robots.txt"), "utf8");
  const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
  assert.equal(
    robots,
    [
      "User-agent: OAI-SearchBot",
      "Disallow: /",
      "",
      "User-agent: GPTBot",
      "Disallow: /",
      "",
      "User-agent: *",
      "Allow: /",
      "Disallow: /llms.txt",
      "Disallow: /sitemap.xml",
      "",
    ].join("\n"),
  );
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.doesNotMatch(sitemap, /<url>/);
});

test("les sondes statiques exposent la santé et la révision du build", async () => {
  assert.equal(await readFile(join(dist, "health"), "utf8"), "ok\n");
  const release = JSON.parse(await readFile(join(dist, "release.json"), "utf8"));
  assert.deepEqual(release, {
    sha: "local",
    source: "https://github.com/nclsppr/fouranu/commit/local",
  });
});

test("le build opt-in n'indexe que les URL explicitement éligibles", async () => {
  const temporaryOutput = await mkdtemp(join(tmpdir(), "four-a-nu-indexable-"));
  const astroBin = join(siteRoot, "node_modules/astro/bin/astro.mjs");
  try {
    await execFileAsync(process.execPath, [astroBin, "build", "--outDir", temporaryOutput], {
      cwd: siteRoot,
      env: { ...process.env, PUBLIC_SITE_INDEXABLE: "true" },
      maxBuffer: 10 * 1024 * 1024,
    });

    const robots = await readFile(join(temporaryOutput, "robots.txt"), "utf8");
    assert.equal(
      robots,
      [
        "User-agent: OAI-SearchBot",
        "Allow: /",
        "",
        "User-agent: GPTBot",
        "Disallow: /",
        "",
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${canonicalOrigin}/sitemap.xml`,
        "",
      ].join("\n"),
    );

    const sitemap = await readFile(join(temporaryOutput, "sitemap.xml"), "utf8");
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    const pages = await htmlPages(temporaryOutput);
    const articleRoutes = pages
      .map((page) => page.route)
      .filter((route) => articleRoutePattern.test(route ?? ""));
    assert.equal(articleRoutes.length, 11);
    const expectedRoutes = [...fixedIndexableRoutes, ...articleRoutes].sort();
    assert.equal(expectedRoutes.length, 22);
    assert.deepEqual(
      locations.map((location) => new URL(location).pathname).sort(),
      expectedRoutes,
    );
    assert.equal((sitemap.match(/<lastmod>2026-08-24<\/lastmod>/g) ?? []).length, 22);

    for (const page of pages) {
      const expected = page.route === null ? "noindex, follow" : indexableRobots;
      assert.equal(metaContent(page.html, "robots"), expected, page.route ?? "404");
    }
  } finally {
    await rm(temporaryOutput, { recursive: true, force: true });
  }
});

test("le rendu statique reste léger et précharge seulement les deux fontes critiques", async () => {
  const files = await filesRecursively(dist);
  assert.deepEqual(files.filter((file) => file.endsWith(".js")), []);

  const cssFiles = files.filter((file) => file.endsWith(".css"));
  const css = (await Promise.all(cssFiles.map((file) => readFile(file, "utf8")))).join("\n");
  assert.equal((css.match(/@font-face/g) ?? []).length, 6);

  const woff2Files = files.filter((file) => file.endsWith(".woff2"));
  const woffFiles = files.filter((file) => file.endsWith(".woff"));
  assert.equal(woff2Files.length, 6);
  assert.equal(woffFiles.length, 6);

  for (const page of await htmlPages()) {
    const preloads = tags(page.html, "link").filter((tag) => attribute(tag, "rel") === "preload");
    assert.equal(preloads.length, 2, page.route ?? "404");
    for (const preload of preloads) {
      assert.equal(attribute(preload, "as"), "font");
      assert.equal(attribute(preload, "type"), "font/woff2");
      assert.equal(attribute(preload, "crossorigin"), "anonymous");
      assert.match(attribute(preload, "href"), /^\/_astro\/.*\.woff2$/);
    }
  }

  const socialImage = await stat(join(dist, "og/four-a-nu-default.png"));
  assert.ok(socialImage.size < 100_000, "l'image sociale dépasse 100 Ko");
});

async function availablePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close((error) => {
        if (error) reject(error);
        else resolve(address.port);
      });
    });
  });
}

async function waitForServer(url, processHandle) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (processHandle.exitCode !== null) throw new Error("le serveur de preview s'est arrêté");
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Le socket n'écoute pas encore.
    }
    await delay(50);
  }
  throw new Error("délai dépassé au démarrage de la preview");
}

test("la preview sert une vraie 404 et stabilise les URL de referral", async () => {
  const port = await availablePort();
  const processHandle = spawn(process.execPath, [join(siteRoot, "scripts/serve.mjs")], {
    cwd: siteRoot,
    env: { ...process.env, HOST: "127.0.0.1", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stderr = "";
  processHandle.stderr.on("data", (chunk) => { stderr += chunk; });

  try {
    await waitForServer(`http://127.0.0.1:${port}/health`, processHandle);

    const missing = await fetch(`http://127.0.0.1:${port}/page-inexistante`);
    const missingHtml = await missing.text();
    assert.equal(missing.status, 404);
    assert.match(missing.headers.get("content-type"), /^text\/html/);
    assert.equal(missing.headers.get("cache-control"), "no-cache");
    assert.equal(missing.headers.get("x-content-type-options"), "nosniff");
    assert.equal(
      missing.headers.get("referrer-policy"),
      "strict-origin-when-cross-origin",
    );
    assert.equal(
      visibleText(pairedElements(missingHtml, "h1")[0][2]),
      "Cette page n'est pas sur l'établi.",
    );
    assert.deepEqual(linkHref(missingHtml, "canonical"), []);

    const referral = await fetch(
      `http://127.0.0.1:${port}/?utm_source=chatgpt.com&utm_medium=referral`,
    );
    const referralHtml = await referral.text();
    assert.equal(referral.status, 200);
    assert.deepEqual(linkHref(referralHtml, "canonical"), [`${canonicalOrigin}/`]);

    const slashless = await fetch(`http://127.0.0.1:${port}/ooni`, {
      redirect: "manual",
    });
    assert.equal(slashless.status, 308);
    assert.equal(slashless.headers.get("location"), "/ooni/");

    const fontFile = (await filesRecursively(dist)).find((file) => file.endsWith(".woff2"));
    assert.ok(fontFile, "une fonte WOFF2 construite est attendue");
    const fontPath = relative(dist, fontFile).split(sep).join("/");
    const font = await fetch(`http://127.0.0.1:${port}/${fontPath}`);
    assert.equal(font.status, 200);
    assert.equal(font.headers.get("content-type"), "font/woff2");
    assert.equal(
      font.headers.get("cache-control"),
      "public, max-age=31536000, immutable",
    );

    const retiredArticleImage = await fetch(
      `http://127.0.0.1:${port}/images/articles/koda-2-photogramme-960.webp`,
    );
    assert.equal(retiredArticleImage.status, 404);
  } finally {
    if (processHandle.exitCode === null) processHandle.kill("SIGTERM");
    await Promise.race([
      once(processHandle, "exit"),
      delay(2_000).then(() => {
        if (processHandle.exitCode === null) processHandle.kill("SIGKILL");
      }),
    ]);
    assert.equal(stderr, "", stderr);
  }
});
