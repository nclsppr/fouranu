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
const editorialTeam = {
  name: "Nicolas, Florian & Magali",
  route: "/auteurs/redaction-four-a-nu/",
};
const editorialAuthors = new Map([
  ["Nicolas", "/auteurs/nicolas/"],
  ["Florian", "/auteurs/florian/"],
  ["Magali", "/auteurs/magali/"],
]);
const editorialPortraits = new Map(
  [...editorialAuthors].map(([name]) => {
    const slug = name.toLocaleLowerCase("fr-FR");
    return [
      name,
      {
        small: `/images/authors/${slug}-portrait-192.webp`,
        large: `/images/authors/${slug}-portrait-800.webp`,
      },
    ];
  }),
);

function webpChunkTypes(bytes) {
  assert.equal(bytes.subarray(0, 4).toString("ascii"), "RIFF", "conteneur RIFF attendu");
  assert.equal(bytes.subarray(8, 12).toString("ascii"), "WEBP", "conteneur WebP attendu");

  const chunks = [];
  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const type = bytes.subarray(offset, offset + 4).toString("ascii");
    const size = bytes.readUInt32LE(offset + 4);
    chunks.push(type);
    offset += 8 + size + (size % 2);
  }
  return chunks;
}

const fixedIndexableRoutes = [
  "/",
  "/a-propos/",
  "/auteurs/florian/",
  "/auteurs/magali/",
  "/auteurs/nicolas/",
  editorialTeam.route,
  "/contact/",
  "/corrections/",
  "/confidentialite/",
  "/fours-a-pizza/",
  "/gozney/",
  "/methode/",
  "/mentions-legales/",
  "/ooni/",
  "/transparence/",
];
const indexableRobots =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const articleRoutePattern = /^\/(?:ooni|gozney)\/[^/]+\/$/;
const defaultSocialImage = `${canonicalOrigin}/og/four-a-nu-default-v2.jpg`;
const rangeSocialImages = new Map([
  ["/ooni/", `${canonicalOrigin}/images/articles/ooni-gamme-documentee-1600.webp`],
  ["/gozney/", `${canonicalOrigin}/images/articles/gozney-gamme-1600.webp`],
]);
const editorialCaptionForBrand = (brand) =>
  `Illustration éditoriale d’après une photographie officielle ${brand}.`;
const editorialCaptionPatternForBrand = (brand) =>
  new RegExp(
    `^Illustration éditoriale d’après (?:une photographie officielle|des photographies officielles) ${brand}\\.$`,
  );
const editorialCaptionFromAsset = (asset) =>
  `${asset.attribution.replace("d'après", "d’après")}.`;

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

function hasClass(tag, className) {
  return (attribute(tag, "class") ?? "").split(/\s+/).includes(className);
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

function rasterDimensions(buffer) {
  const pngSignature = "89504e470d0a1a0a";
  if (buffer.subarray(0, 8).toString("hex") === pngSignature) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
      type: "image/png",
    };
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    const startOfFrameMarkers = new Set([
      0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
      0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
    ]);
    let offset = 2;
    while (offset + 8 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2;
        continue;
      }
      const segmentLength = buffer.readUInt16BE(offset + 2);
      if (startOfFrameMarkers.has(marker)) {
        return {
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5),
          type: "image/jpeg",
        };
      }
      assert.ok(segmentLength >= 2, "segment JPEG invalide");
      offset += segmentLength + 2;
    }
  }

  throw new Error("format raster non pris en charge");
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
  assert.equal(pages.length, fixedIndexableRoutes.length + 19 + 1);
  const titles = new Set();
  const descriptions = new Set();

  for (const page of pages) {
    const label = relative(dist, page.file);
    assert.match(page.html, /<!doctype html>/i, label);
    assert.match(
      page.html,
      /<html lang="fr" prefix="og: https:\/\/ogp\.me\/ns# article: https:\/\/ogp\.me\/ns\/article#">/,
      label,
    );
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
    const footer = pairedElements(page.html, "footer")
      .find((candidate) => attribute(`<footer${candidate[1]}>`, "class") === "site-footer");
    assert.ok(footer, `${label}: pied de page absent`);
    assert.match(
      visibleText(footer[2]),
      /Édité avec amour du pâton par NicolasPieper\.com$/,
      `${label}: signature du pied de page absente`,
    );
    const footerCreditLinks = pairedElements(footer[2], "a")
      .filter((anchor) => attribute(`<a${anchor[1]}>`, "href") === "https://nicolaspieper.com/");
    assert.equal(footerCreditLinks.length, 1, `${label}: lien NicolasPieper.com absent ou ambigu`);
    assert.equal(visibleText(footerCreditLinks[0][2]), "NicolasPieper.com", label);
    assert.equal(attribute(`<a${footerCreditLinks[0][1]}>`, "rel"), "author", label);

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

    const socialTitle = visibleText(metaContent(page.html, "og:title"));
    assert.equal(metaContent(page.html, "og:title"), metaContent(page.html, "twitter:title"), label);
    assert.equal(metaContent(page.html, "og:description"), metaContent(page.html, "twitter:description"), label);
    assert.ok(socialTitle.length >= 5, `${label}: titre social vide ou trop vague`);
    assert.ok(socialTitle.length <= 65, `${label}: titre social trop long`);
    assert.doesNotMatch(socialTitle, /\s+\|\s+Four à Nu$/, `${label}: suffixe de marque social superflu`);
    assert.equal(metaContent(page.html, "og:description"), metaContent(page.html, "description"), label);
    assert.equal(metaContent(page.html, "og:site_name"), "Four à Nu", label);
    assert.equal(metaContent(page.html, "og:locale"), "fr_FR", label);
    const socialImage = metaContent(page.html, "og:image");
    if (articleRoutePattern.test(page.route ?? "")) {
      assert.match(
        socialImage ?? "",
        /^https:\/\/fouranu\.com\/images\/articles\/[a-z0-9-]+-1600\.webp$/,
        label,
      );
      assert.equal(metaContent(page.html, "og:image:type"), "image/webp", label);
      assert.equal(metaContent(page.html, "og:image:width"), "1600", label);
      assert.equal(metaContent(page.html, "og:image:height"), "900", label);
    } else if (rangeSocialImages.has(page.route)) {
      assert.equal(socialImage, rangeSocialImages.get(page.route), label);
      assert.equal(metaContent(page.html, "og:image:type"), "image/webp", label);
      assert.equal(metaContent(page.html, "og:image:width"), "1600", label);
      assert.equal(metaContent(page.html, "og:image:height"), "900", label);
    } else {
      assert.equal(socialImage, defaultSocialImage, label);
      assert.equal(metaContent(page.html, "og:image:type"), "image/jpeg", label);
      assert.equal(metaContent(page.html, "og:image:width"), "1200", label);
      assert.equal(metaContent(page.html, "og:image:height"), "630", label);
    }
    assert.match(socialImage ?? "", /^https:\/\//, `${label}: image sociale non absolue`);
    assert.equal(await routeExists(socialImage), true, `${label}: image sociale absente du build`);
    assert.equal(metaContent(page.html, "og:image:secure_url"), socialImage, label);
    assert.deepEqual(linkHref(page.html, "image_src"), [socialImage], label);
    assert.ok(metaContent(page.html, "og:image:alt")?.length > 20, label);
    assert.equal(metaContent(page.html, "twitter:card"), "summary_large_image", label);
    assert.equal(metaContent(page.html, "twitter:image"), socialImage, label);
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

  }
});

test("les surfaces de promesse distinguent l'ambition du corpus documentaire actuel", async () => {
  const pages = await htmlPages();
  const home = pages.find((page) => page.route === "/");
  const about = pages.find((page) => page.route === "/a-propos/");
  assert.ok(home, "accueil absent");
  assert.ok(about, "page À propos absente");
  assert.equal(
    visibleText(pairedElements(home.html, "title")[0][2]),
    "Four à Nu | Fours à pizza, accessoires et pétrins",
  );
  assert.equal(
    decodeHtml(metaContent(home.html, "description")),
    "Four à Nu veut tester tous les fours à pizza vendus en France, en commençant par les marques de référence, puis les accessoires utiles et différents pétrins.",
  );
  assert.equal(
    visibleText(metaContent(home.html, "og:title")),
    "Notre ambition : tester tous les fours à pizza vendus en France",
  );
  assert.match(
    visibleText(home.html),
    /Aujourd’hui, nos guides sont des analyses documentaires sourcées ; chaque futur essai mené par Four à Nu sera clairement signalé\./,
  );
  assert.match(
    visibleText(about.html),
    /Nous n'avons encore publié aucun essai mené par Four à Nu\. Chaque futur essai sera clairement signalé, avec ses conditions, ses mesures et ses limites\./,
  );
  const organization = schemaNodes(jsonLdDocuments(home.html))
    .find((node) => node["@type"] === "Organization");
  assert.equal(
    organization?.description,
    "Média francophone indépendant qui publie des guides sourcés et vise à tester progressivement les fours à pizza vendus en France, les accessoires utiles et différents pétrins.",
  );

  const falseFirstPartyClaim = /(?:nous avons testé|nous testons|nos tests|notre test|notre mesure|après notre essai|testé par Four à Nu)/i;
  for (const page of [home, about]) {
    assert.doesNotMatch(visibleText(page.html), falseFirstPartyClaim, page.route);
  }
});

test("le partage reste local sur les pages canoniques et absent de la 404", async () => {
  const pages = await htmlPages();
  const moduleBodies = new Set();
  let shareRootCount = 0;

  for (const page of pages) {
    const label = page.route ?? "404";
    const shareSections = pairedElements(page.html, "section").filter((section) =>
      /\sdata-share-root(?:\s|$)/i.test(section[1])
    );
    const scripts = pairedElements(page.html, "script");
    const moduleScripts = scripts.filter((script) =>
      attribute(`<script${script[1]}>`, "type") === "module"
    );

    assert.ok(
      scripts.every((script) => attribute(`<script${script[1]}>`, "src") === undefined),
      `${label}: aucun script tiers ou fichier client n'est permis`,
    );
    assert.ok(
      scripts.every((script) =>
        ["application/ld+json", "module"].includes(attribute(`<script${script[1]}>`, "type"))
      ),
      `${label}: type de script inattendu`,
    );

    if (page.route === null) {
      assert.equal(shareSections.length, 0, "la 404 ne doit pas proposer de partage canonique");
      assert.equal(moduleScripts.length, 0, "la 404 ne doit pas charger le module de partage");
      continue;
    }

    assert.equal(shareSections.length, 1, `${label}: un seul composant de partage attendu`);
    assert.equal(moduleScripts.length, 1, `${label}: un seul module inline attendu`);
    shareRootCount += shareSections.length;
    moduleBodies.add(moduleScripts[0][2]);

    const share = shareSections[0];
    const opening = `<section${share[1]}>`;
    const canonical = `${canonicalOrigin}${page.route}`;
    const sharedTitle = decodeHtml(attribute(opening, "data-share-title"));
    const sharedText = decodeHtml(attribute(opening, "data-share-text"));
    assert.equal(attribute(opening, "data-share-url"), canonical, label);
    assert.equal(
      visibleText(sharedTitle),
      visibleText(metaContent(page.html, "og:title")),
      label,
    );
    assert.equal(
      sharedText,
      decodeHtml(metaContent(page.html, "description")),
      label,
    );
    assert.ok(
      pairedElements(share[2], "h2").some((heading) =>
        visibleText(heading[2]) === "Partager cette page"
      ),
      `${label}: titre de partage absent`,
    );

    const controlGroups = pairedElements(share[2], "div").filter((element) =>
      (attribute(`<div${element[1]}>`, "class") ?? "").split(/\s+/).includes("share-actions__controls")
    );
    assert.equal(controlGroups.length, 1, `${label}: groupe de contrôles ambigu`);
    const controlGroup = `<div${controlGroups[0][1]}>`;
    assert.equal(attribute(controlGroup, "role"), "group", label);
    assert.equal(attribute(controlGroup, "aria-label"), "Options de partage", label);

    const links = tags(share[2], "a");
    const whatsappLinks = links.filter((link) =>
      attribute(link, "href")?.startsWith("https://wa.me/?text=")
    );
    assert.equal(whatsappLinks.length, 1, `${label}: lien WhatsApp absent`);
    const whatsappUrl = new URL(decodeHtml(attribute(whatsappLinks[0], "href")));
    assert.equal(whatsappUrl.searchParams.get("text"), `${sharedTitle}\n${canonical}`, label);

    const emailLinks = links.filter((link) =>
      attribute(link, "href")?.startsWith("mailto:?subject=")
    );
    assert.equal(emailLinks.length, 1, `${label}: lien e-mail absent`);
    const emailUrl = new URL(decodeHtml(attribute(emailLinks[0], "href")));
    assert.equal(emailUrl.searchParams.get("subject"), `À lire : ${sharedTitle}`, label);
    assert.equal(emailUrl.searchParams.get("body"), `${sharedText}\n\n${canonical}`, label);
    const buttons = tags(share[2], "button");
    assert.equal(buttons.filter((button) => /\sdata-share-native(?:\s|>)/.test(button)).length, 1, label);
    assert.equal(buttons.filter((button) => /\sdata-share-copy(?:\s|>)/.test(button)).length, 1, label);
    assert.ok(buttons.every((button) => /\shidden(?:\s|>)/.test(button)), `${label}: repli sans JS absent`);
    assert.ok(
      tags(share[2], "p").some((paragraph) =>
        attribute(paragraph, "role") === "status" && attribute(paragraph, "aria-live") === "polite"
      ),
      `${label}: retour d'état accessible absent`,
    );

    const moduleBody = moduleScripts[0][2];
    assert.match(moduleBody, /navigator\.share/, label);
    assert.match(moduleBody, /navigator\.clipboard/, label);
    assert.doesNotMatch(
      moduleBody,
      /\b(?:fetch|XMLHttpRequest|sendBeacon|WebSocket)\b|https?:\/\/|import\s*\(/,
      `${label}: le partage ne doit contacter ou importer aucun tiers`,
    );
  }

  assert.equal(shareRootCount, fixedIndexableRoutes.length + 19);
  assert.equal(moduleBodies.size, 1, "les pages doivent embarquer le même petit module local");
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
  assert.deepEqual(organization.logo, {
    "@type": "ImageObject",
    url: `${canonicalOrigin}/brand/logo-fouranu.png`,
    contentUrl: `${canonicalOrigin}/brand/logo-fouranu.png`,
    width: 480,
    height: 172,
  });

  const authorPage = pages.find((page) => page.route === editorialTeam.route);
  assert.ok(authorPage, "page de signature éditoriale absente");
  const collection = schemaNodes(jsonLdDocuments(authorPage.html))
    .find((node) => node["@type"] === "CollectionPage");
  assert.ok(collection, "CollectionPage des signatures absente");
  assert.equal(collection.url, `${canonicalOrigin}${editorialTeam.route}`);
  assert.equal(collection.name, editorialTeam.name);
  assert.equal(collection.mainEntity?.["@type"], "ItemList");
  assert.deepEqual(
    collection.mainEntity.itemListElement.map((item) => item.position),
    [1, 2, 3],
  );
  assert.deepEqual(
    collection.mainEntity.itemListElement.map((item) => [item.item?.name, item.item?.url]),
    [...editorialAuthors].map(([name, route]) => [name, `${canonicalOrigin}${route}`]),
  );
  const hubPortraits = tags(authorPage.html, "img")
    .filter((tag) => hasClass(tag, "author-portrait--hub"));
  assert.equal(hubPortraits.length, editorialAuthors.size, "le hub doit montrer les trois portraits");
  for (const [name, route] of editorialAuthors) {
    const portrait = editorialPortraits.get(name);
    const portraitTag = hubPortraits.find((tag) => attribute(tag, "alt") === `Portrait de ${name}.`);
    assert.ok(portraitTag, `portrait de ${name} absent du hub`);
    assert.equal(attribute(portraitTag, "src"), portrait.small, `source du portrait de ${name} sur le hub`);
    assert.equal(attribute(portraitTag, "width"), "192", `largeur du portrait de ${name} sur le hub`);
    assert.equal(attribute(portraitTag, "height"), "192", `hauteur du portrait de ${name} sur le hub`);

    const person = collection.mainEntity.itemListElement
      .find((item) => item.item?.name === name)?.item;
    assert.ok(person, `Person de ${name} absente du hub`);
    assert.equal(person["@type"], "Person", `type de ${name} sur le hub`);
    assert.equal(person["@id"], `${canonicalOrigin}${route}#person`, `identifiant de ${name} sur le hub`);
    assert.equal(person.image, `${canonicalOrigin}${portrait.large}`, `image de ${name} sur le hub`);
  }

  const authorProfilePages = new Map();
  for (const [name, route] of editorialAuthors) {
    const portrait = editorialPortraits.get(name);
    const profilePage = pages.find((page) => page.route === route);
    assert.ok(profilePage, `profil de ${name} absent`);
    const profile = schemaNodes(jsonLdDocuments(profilePage.html))
      .find((node) => node["@type"] === "ProfilePage");
    assert.ok(profile, `ProfilePage de ${name} absente`);
    assert.equal(profile.url, `${canonicalOrigin}${route}`);
    assert.equal(profile.name, name);
    assert.equal(profile.description, decodeHtml(metaContent(profilePage.html, "description")));
    assert.equal(profile.mainEntity?.["@type"], "Person");
    assert.equal(profile.mainEntity?.["@id"], `${canonicalOrigin}${route}#person`);
    assert.equal(profile.mainEntity?.name, name);
    assert.equal(profile.mainEntity?.url, `${canonicalOrigin}${route}`);
    assert.equal(profile.mainEntity?.image, `${canonicalOrigin}${portrait.large}`);
    assert.ok(profile.mainEntity?.jobTitle?.length > 0, `rôle de ${name} absent`);
    assert.equal(profile.mainEntity?.worksFor?.["@id"], `${canonicalOrigin}/#organization`);

    const profilePortraits = tags(profilePage.html, "img")
      .filter((tag) => hasClass(tag, "author-portrait--profile"));
    assert.equal(profilePortraits.length, 1, `un seul portrait de profil attendu pour ${name}`);
    const profilePortrait = profilePortraits[0];
    assert.equal(attribute(profilePortrait, "src"), portrait.large, `source du portrait de ${name}`);
    assert.equal(
      attribute(profilePortrait, "srcset"),
      `${portrait.small} 192w, ${portrait.large} 800w`,
      `srcset du portrait de ${name}`,
    );
    assert.ok(attribute(profilePortrait, "sizes")?.trim().length > 0, `sizes du portrait de ${name}`);
    assert.equal(attribute(profilePortrait, "alt"), `Portrait de ${name}.`, `alternative du portrait de ${name}`);
    assert.equal(attribute(profilePortrait, "width"), "800", `largeur du portrait de ${name}`);
    assert.equal(attribute(profilePortrait, "height"), "800", `hauteur du portrait de ${name}`);
    assert.ok(
      tags(authorPage.html, "a").some((tag) => attribute(tag, "href") === route),
      `le hub ne relie pas le profil de ${name}`,
    );
    authorProfilePages.set(name, profilePage);
  }

  const articlePages = pages.filter((page) => articleRoutePattern.test(page.route ?? ""));
  assert.equal(articlePages.length, 19);
  const authorAssignments = new Map([...editorialAuthors.keys()].map((name) => [name, 0]));
  const authorArticleRoutes = new Map([...editorialAuthors.keys()].map((name) => [name, []]));

  for (const page of pages) {
    const documents = jsonLdDocuments(page.html);
    const nodes = schemaNodes(documents);
    const serialized = JSON.stringify(documents);
    assert.doesNotMatch(serialized, /AggregateRating|"@type":"Review"/);

    const webPages = nodes.filter((node) => node["@type"] === "WebPage");
    if (page.route === null) {
      assert.equal(webPages.length, 0, "la 404 ne doit pas se déclarer comme WebPage canonique");
    } else {
      const canonical = `${canonicalOrigin}${page.route}`;
      const webPage = webPages[0];
      const socialImage = metaContent(page.html, "og:image");
      assert.equal(webPages.length, 1, `${page.route}: un seul schéma WebPage attendu`);
      assert.equal(webPage["@id"], canonical, page.route);
      assert.equal(webPage.url, canonical, page.route);
      assert.equal(visibleText(webPage.name), visibleText(metaContent(page.html, "og:title")), page.route);
      assert.equal(webPage.description, decodeHtml(metaContent(page.html, "description")), page.route);
      assert.equal(webPage.inLanguage, "fr", page.route);
      assert.deepEqual(webPage.isPartOf, { "@id": `${canonicalOrigin}/#website` }, page.route);
      assert.deepEqual(
        webPage.primaryImageOfPage,
        {
          "@type": "ImageObject",
          url: socialImage,
          contentUrl: socialImage,
          width: Number(metaContent(page.html, "og:image:width")),
          height: Number(metaContent(page.html, "og:image:height")),
          caption: decodeHtml(metaContent(page.html, "og:image:alt")),
        },
        `${page.route}: ImageObject principal incohérent`,
      );
    }

    if (page.route && page.route !== "/") {
      const breadcrumb = nodes.find((node) => node["@type"] === "BreadcrumbList");
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
      const article = nodes.find((node) => node["@type"] === "Article");
      const h1 = visibleText(pairedElements(page.html, "h1")[0][2]);
      const leadFigure = pairedElements(page.html, "figure").find((figure) =>
        attribute(`<figure${figure[1]}>`, "class") === "article-lead-media"
      );
      const imageCaption = visibleText(pairedElements(leadFigure?.[2] ?? "", "figcaption")[0]?.[2] ?? "");
      const imageBrand = page.route.startsWith("/gozney/") ? "Gozney" : "Ooni";
      assert.ok(article, `${page.route}: Article JSON-LD absent`);
      assert.match(
        imageCaption,
        editorialCaptionPatternForBrand(imageBrand),
        `${page.route}: crédit d’en-tête trop long ou incohérent`,
      );
      assert.ok(imageCaption.length <= 90, `${page.route}: crédit d’en-tête trop long`);
      assert.doesNotMatch(imageCaption, /utilisée avec autorisation|preuve de performance/i);
      assert.equal(article.url, `${canonicalOrigin}${page.route}`);
      assert.equal(visibleText(article.headline), h1);
      assert.equal(visibleText(metaContent(page.html, "og:title")), h1);
      assert.equal(article.inLanguage, "fr");
      assert.ok(["Fours à pizza", "Pétrins"].includes(article.articleSection));
      assert.deepEqual(
        article.image,
        {
          "@type": "ImageObject",
          url: metaContent(page.html, "og:image"),
          contentUrl: metaContent(page.html, "og:image"),
          width: 1600,
          height: 900,
          caption: imageCaption,
        },
        `${page.route}: ImageObject de l'article incohérent`,
      );
      assert.equal(article.isAccessibleForFree, true);
      assert.ok(editorialAuthors.has(article.author.name), `${page.route}: auteur éditorial inconnu`);
      authorAssignments.set(article.author.name, authorAssignments.get(article.author.name) + 1);
      authorArticleRoutes.get(article.author.name).push(page.route);
      assert.equal(article.author["@type"], "Person");
      assert.equal(
        article.author["@id"],
        `${canonicalOrigin}${editorialAuthors.get(article.author.name)}#person`,
      );
      assert.equal(
        article.author.url,
        `${canonicalOrigin}${editorialAuthors.get(article.author.name)}`,
      );
      const portrait = editorialPortraits.get(article.author.name);
      assert.equal(article.author.image, `${canonicalOrigin}${portrait.large}`);
      assert.equal(metaContent(page.html, "author"), article.author.name);
      assert.equal(metaContent(page.html, "article:author"), article.author.url);
      assert.equal(metaContent(page.html, "article:section"), article.articleSection);
      assert.equal(article.datePublished, metaContent(page.html, "article:published_time"));
      assert.equal(article.dateModified, metaContent(page.html, "article:modified_time"));
      assert.equal(new Date(article.datePublished).toISOString(), article.datePublished);
      assert.equal(new Date(article.dateModified).toISOString(), article.dateModified);
      const visibleAuthorLinks = pairedElements(page.html, "a").filter((anchor) => {
        const opening = `<a${anchor[1]}>`;
        return attribute(opening, "rel") === "author" &&
          attribute(opening, "href") === editorialAuthors.get(article.author.name);
      });
      assert.equal(
        visibleAuthorLinks.length,
        1,
        `${page.route}: un seul lien de signature visible attendu`,
      );
      const authorBubbles = tags(visibleAuthorLinks[0][2], "img")
        .filter((tag) => hasClass(tag, "author-portrait--bubble"));
      assert.equal(authorBubbles.length, 1, `${page.route}: une seule bulle auteur attendue`);
      assert.equal(attribute(authorBubbles[0], "src"), portrait.small, `${page.route}: portrait auteur incohérent`);
      assert.equal(attribute(authorBubbles[0], "alt"), "", `${page.route}: portrait redondant pour les lecteurs d'écran`);
      assert.equal(attribute(authorBubbles[0], "width"), "192", `${page.route}: largeur intrinsèque de la bulle`);
      assert.equal(attribute(authorBubbles[0], "height"), "192", `${page.route}: hauteur intrinsèque de la bulle`);
    }
  }
  assert.deepEqual(
    [...authorAssignments.values()].sort((left, right) => left - right),
    [6, 6, 7],
    "les dix-neuf dossiers doivent rester répartis entre les trois signatures",
  );
  for (const [name, profilePage] of authorProfilePages) {
    const renderedArticleRoutes = tags(profilePage.html, "a")
      .map((tag) => attribute(tag, "href"))
      .filter((href) => articleRoutePattern.test(href ?? ""))
      .sort();
    const expectedArticleRoutes = authorArticleRoutes.get(name).sort();
    assert.deepEqual(renderedArticleRoutes, expectedArticleRoutes, `dossiers de ${name}`);
    assert.match(
      visibleText(profilePage.html),
      new RegExp(`${expectedArticleRoutes.length} dossiers`),
      `compteur de ${name}`,
    );
  }
});

test("les portraits auteurs publiés restent légers et disponibles aux deux tailles", async () => {
  for (const [name, portrait] of editorialPortraits) {
    const smallFile = join(dist, portrait.small.replace(/^\//, ""));
    const largeFile = join(dist, portrait.large.replace(/^\//, ""));
    const smallStats = await stat(smallFile);
    const largeStats = await stat(largeFile);

    assert.ok(smallStats.isFile(), `petit portrait de ${name} absent`);
    assert.ok(largeStats.isFile(), `grand portrait de ${name} absent`);
    assert.ok(smallStats.size > 0, `petit portrait de ${name} vide`);
    assert.ok(largeStats.size > 0, `grand portrait de ${name} vide`);
    assert.ok(smallStats.size < 15_000, `petit portrait de ${name} trop lourd`);
    assert.ok(largeStats.size < 130_000, `grand portrait de ${name} trop lourd`);

    for (const [label, file] of [["petit", smallFile], ["grand", largeFile]]) {
      const chunkTypes = webpChunkTypes(await readFile(file));
      assert.ok(
        chunkTypes.includes("VP8 ") || chunkTypes.includes("VP8L"),
        `${label} portrait de ${name} sans image WebP`,
      );
      for (const metadataChunk of ["EXIF", "XMP ", "ICCP"]) {
        assert.ok(
          !chunkTypes.includes(metadataChunk),
          `${label} portrait de ${name} contient la métadonnée ${metadataChunk.trim()}`,
        );
      }
    }
  }
});

test("les dix-neuf analyses rendent toutes leurs preuves citées depuis le registre synchronisé", async () => {
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
  assert.equal(records.size, 168);

  const assetCsv = await readFile(join(repositoryRoot, "research/assets.csv"), "utf8");
  const assetRows = parseCsv(assetCsv);
  const assetHeaders = assetRows.shift();
  assert.equal(assetHeaders.length, 29);
  const assets = new Map(
    assetRows.map((values) => [
      values[0],
      Object.fromEntries(assetHeaders.map((header, index) => [header, values[index]])),
    ]),
  );
  assert.equal(assets.size, 91);
  const registeredPublicationUrls = new Set(
    [...assets.values()].map((asset) => asset.publication_url),
  );
  for (const portrait of editorialPortraits.values()) {
    assert.ok(
      registeredPublicationUrls.has(`${canonicalOrigin}${portrait.small}`),
      `petit portrait non inscrit au registre : ${portrait.small}`,
    );
    assert.ok(
      registeredPublicationUrls.has(`${canonicalOrigin}${portrait.large}`),
      `grand portrait non inscrit au registre : ${portrait.large}`,
    );
  }
  const markdownFiles = (await readdir(join(siteRoot, "src/content/analyses")))
    .filter((file) => file.endsWith(".md"))
    .sort();
  assert.equal(markdownFiles.length, 19);

  for (const markdownFile of markdownFiles) {
    const slug = markdownFile.replace(/\.md$/, "");
    const markdown = await readFile(join(siteRoot, "src/content/analyses", markdownFile), "utf8");
    const articleId = markdown.match(/^articleId:\s*((?:OONI|GOZNEY)-\d{3})$/m)?.[1];
    const brand = markdown.match(/^brand:\s*(ooni|gozney)$/m)?.[1];
    const category = markdown.match(/^category:\s*(oven|mixer)$/m)?.[1];
    const heroTreatment = markdown.match(/^heroTreatment:\s*(official-stylized)$/m)?.[1];
    const heroAssetId = markdown.match(/^\s{2}assetId:\s*(AS-\d{4})$/m)?.[1];
    assert.ok(articleId, `${slug}: articleId absent ou invalide`);
    assert.ok(brand, `${slug}: marque absente ou invalide`);
    assert.ok(category, `${slug}: catégorie absente ou invalide`);
    assert.ok(heroTreatment, `${slug}: traitement de hero absent ou invalide`);
    assert.ok(heroAssetId, `${slug}: identifiant du hero absent ou invalide`);
    assert.ok(
      articleId.startsWith(`${brand.toUpperCase()}-`),
      `${slug}: articleId incohérent avec la marque`,
    );
    const heroAsset = assets.get(heroAssetId);
    assert.ok(heroAsset, `${slug}: hero absent du registre média`);
    assert.equal(heroAsset.asset_type, "editorial-illustration", `${slug}: type de hero incohérent`);
    assert.equal(
      heroAsset.acquisition_mode,
      "authorized-manufacturer-photo",
      `${slug}: le hero doit partir d'une photo officielle fabricant`,
    );
    assert.equal(heroAsset.human_validation, "approved", `${slug}: hero non validé`);
    assert.equal(heroAsset.identifiable_people, "no", `${slug}: personne dans la source du hero`);
    assert.match(
      markdown,
      /^\s{2}caption:\s*"Illustration éditoriale .+photograph(?:ie|ies) officielle(?:s)? .+"$/m,
      `${slug}: statut public du hero absent`,
    );
    assert.equal(
      markdown.match(/^\s{2}caption:\s*"([^"]+)"$/m)?.[1],
      editorialCaptionFromAsset(heroAsset),
      `${slug}: crédit du hero trop long ou incohérent`,
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
        visibleText(heading[2]) === "Sources de cet article"
      ),
      `${slug}: titre de bibliographie absent`,
    );

    for (const evidenceId of expectedIds) {
      const item = html.match(
        new RegExp(`<li id="preuve-${evidenceId}"[\\s\\S]*?<\\/li>`),
      )?.[0];
      assert.ok(item, `${slug}: entrée ${evidenceId} absente`);
      const details = tags(item, "details")[0];
      assert.ok(details, `${slug}: détails ${evidenceId} absents`);
      assert.equal(attribute(details, "open"), undefined, `${slug}: ${evidenceId} doit être replié par défaut`);
      assert.equal(tags(item, "summary").length, 1, `${slug}: résumé ${evidenceId} absent`);
      const record = records.get(evidenceId);
      if (record.source_url) assert.match(item, /<a\b[^>]*href="https?:\/\//, `${slug}: source ${evidenceId} non liée`);
      if (record.source_type === "youtube" && record.timecode_start) {
        assert.match(item, /[?&amp;]t=\d+s/, `${slug}: timecode ${evidenceId} absent du lien`);
      }
    }
  }
});

test("le RSS expose exactement les dix-neuf dossiers publiables et indexables", async () => {
  const pages = await htmlPages();
  const articlePages = pages.filter((page) => articleRoutePattern.test(page.route ?? ""));
  const articleRoutes = articlePages
    .map((page) => page.route)
    .sort();
  assert.equal(articleRoutes.length, 19);

  const rss = await readFile(join(dist, "rss.xml"), "utf8");
  assert.match(rss, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(rss, /<rss version="2\.0" xmlns:dc="http:\/\/purl\.org\/dc\/elements\/1\.1\/">/);
  const rssItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
  assert.equal(rssItems.length, 19);
  const rssRoutes = [];
  for (const item of rssItems) {
    assert.match(item, /<title>[^<]+<\/title>/);
    assert.match(item, /<description>[^<]+<\/description>/);
    assert.match(item, /<pubDate>[^<]+<\/pubDate>/);
    const creator = item.match(/<dc:creator>([^<]+)<\/dc:creator>/)?.[1];
    assert.ok(editorialAuthors.has(creator), `auteur RSS inconnu : ${creator}`);
    const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
    const guid = item.match(/<guid isPermaLink="true">([^<]+)<\/guid>/)?.[1];
    assert.equal(guid, link, "le GUID RSS doit être l'URL canonique du dossier");
    assert.ok(link);
    const pathname = new URL(link).pathname;
    assert.match(pathname, articleRoutePattern);
    const articlePage = articlePages.find((page) => page.route === pathname);
    assert.ok(articlePage, `page absente pour l'item RSS ${pathname}`);
    const article = schemaNodes(jsonLdDocuments(articlePage.html))
      .find((node) => node["@type"] === "Article");
    assert.ok(article, `Article JSON-LD absent pour l'item RSS ${pathname}`);
    assert.equal(creator, article.author.name);
    assert.equal(metaContent(articlePage.html, "article:author"), article.author.url);

    const [, brand, slug] = pathname.split("/");
    const markdown = await readFile(
      join(siteRoot, "src/content/analyses", `${slug}.md`),
      "utf8",
    );
    assert.match(markdown, /^brand:\s*(ooni|gozney)$/m, `${pathname}: marque source absente`);
    assert.equal(markdown.match(/^brand:\s*(ooni|gozney)$/m)?.[1], brand, pathname);
    assert.match(markdown, /^status:\s*publishable$/m, `${pathname}: dossier non publiable dans le RSS`);
    assert.match(markdown, /^indexable:\s*true$/m, `${pathname}: dossier non indexable dans le RSS`);
    rssRoutes.push(pathname);
  }
  assert.deepEqual(rssRoutes.sort(), articleRoutes);

});

test("la photo documentaire de une est responsive, attribuée et légère", async () => {
  const home = (await htmlPages()).find((page) => page.route === "/");
  assert.ok(home);
  const figure = pairedElements(home.html, "figure").find((match) =>
    attribute(`<figure${match[1]}>`, "class")?.split(/\s+/).includes("lead-feature__visual")
  );
  assert.ok(figure, "visuel documentaire absent de la une");
  const image = tags(figure[2], "img")[0];
  assert.ok(image);
  assert.ok(attribute(image, "sizes")?.length > 0, "attribut sizes absent");

  const candidates = attribute(image, "srcset")
    ?.split(",")
    .map((candidate) => candidate.trim().split(/\s+/)) ?? [];
  assert.equal(candidates.length, 2);
  assert.deepEqual(candidates.map(([, width]) => width), ["960w", "1600w"]);
  for (const [route] of candidates) {
    assert.equal(await routeExists(route), true, `variante responsive absente: ${route}`);
  }

  assert.equal(attribute(image, "src"), candidates[1][0]);
  assert.equal(attribute(image, "width"), "1600");
  assert.equal(attribute(image, "height"), "900");
  assert.ok((attribute(image, "alt") ?? "").length >= 20, "alternative textuelle trop vague");
  assert.equal(attribute(image, "fetchpriority"), "high");
  assert.equal(attribute(image, "loading"), undefined, "le visuel LCP ne doit pas être chargé paresseusement");

  const caption = visibleText(pairedElements(figure[2], "figcaption")[0]?.[2] ?? "");
  assert.equal(caption, editorialCaptionForBrand("Ooni"));
  assert.ok(caption.length <= 90);
  assert.ok(
    pairedElements(figure[2], "div").some((element) =>
      attribute(`<div${element[1]}>`, "class") === "lead-feature__visual-frame"
    ),
    "cadre de l’image de une absent",
  );

  const smallVisual = await stat(join(dist, candidates[0][0].replace(/^\//, "")));
  const largeVisual = await stat(join(dist, candidates[1][0].replace(/^\//, "")));
  assert.ok(smallVisual.size < 100_000, "le visuel 960 px dépasse 100 Ko");
  assert.ok(largeVisual.size < 200_000, "le visuel 1600 px dépasse 200 Ko");
});

test("chaque dossier possède une photo documentaire et ses deux rendus", async () => {
  const markdownDirectory = join(siteRoot, "src/content/analyses");
  const markdownFiles = (await readdir(markdownDirectory))
    .filter((file) => file.endsWith(".md"))
    .sort();
  const pages = await htmlPages();
  const articlePages = pages.filter((page) => articleRoutePattern.test(page.route ?? ""));
  const imagePaths = new Set();
  const assetIds = new Set();
  const categoryCounts = { ooniOvens: 0, ooniMixers: 0, gozneyOvens: 0 };

  assert.equal(markdownFiles.length, 19);
  assert.equal(articlePages.length, 19);

  for (const markdownFile of markdownFiles) {
    const slug = markdownFile.replace(/\.md$/, "");
    const markdown = await readFile(join(markdownDirectory, markdownFile), "utf8");
    const brand = markdown.match(/^brand:\s*(ooni|gozney)$/m)?.[1];
    const category = markdown.match(/^category:\s*(oven|mixer)$/m)?.[1];
    const imagePath = markdown.match(
      /^\s{2}src:\s*(\/images\/articles\/[a-z0-9-]+-1600\.webp)$/m,
    )?.[1];
    const assetId = markdown.match(/^\s{2}assetId:\s*(AS-\d{4})$/m)?.[1];
    assert.ok(brand, `${slug}: marque absente`);
    assert.ok(category, `${slug}: catégorie absente`);
    if (brand === "ooni" && category === "oven") categoryCounts.ooniOvens += 1;
    if (brand === "ooni" && category === "mixer") categoryCounts.ooniMixers += 1;
    if (brand === "gozney" && category === "oven") categoryCounts.gozneyOvens += 1;
    assert.ok(imagePath, `${slug}: image 1600 px absente du frontmatter`);
    assert.ok(assetId, `${slug}: assetId absent du frontmatter`);
    assert.equal(imagePaths.has(imagePath), false, `${slug}: photo dupliquée ${imagePath}`);
    assert.equal(assetIds.has(assetId), false, `${slug}: assetId dupliqué ${assetId}`);
    imagePaths.add(imagePath);
    assetIds.add(assetId);

    const smallPath = imagePath.replace("-1600.webp", "-960.webp");
    assert.equal(await routeExists(imagePath), true, `${slug}: rendu 1600 px absent`);
    assert.equal(await routeExists(smallPath), true, `${slug}: rendu 960 px absent`);
    assert.ok((await stat(join(dist, imagePath.replace(/^\//, "")))).size < 200_000);
    assert.ok((await stat(join(dist, smallPath.replace(/^\//, "")))).size < 100_000);

    const page = articlePages.find((candidate) => candidate.route === `/${brand}/${slug}/`);
    assert.ok(page, `${slug}: page article absente`);
    const figure = pairedElements(page.html, "figure").find((match) =>
      attribute(`<figure${match[1]}>`, "class") === "article-lead-media"
    );
    assert.ok(figure, `${slug}: photo principale absente`);
    const image = tags(figure[2], "img")[0];
    assert.equal(attribute(image, "src"), imagePath);
    assert.equal(attribute(image, "width"), "1600");
    assert.equal(attribute(image, "height"), "900");
    assert.ok((attribute(image, "alt") ?? "").length >= 20, `${slug}: alt trop vague`);
    assert.match(attribute(image, "srcset") ?? "", new RegExp(`${escapeRegex(smallPath)} 960w`));
    assert.match(attribute(image, "srcset") ?? "", new RegExp(`${escapeRegex(imagePath)} 1600w`));
    assert.ok(
      pairedElements(figure[2], "div").some((element) =>
        attribute(`<div${element[1]}>`, "class") === "article-lead-media__image"
      ),
      `${slug}: cadre d’image principal absent`,
    );
    assert.match(
      visibleText(pairedElements(figure[2], "figcaption")[0]?.[2] ?? ""),
      editorialCaptionPatternForBrand(brand === "gozney" ? "Gozney" : "Ooni"),
      `${slug}: crédit principal trop long ou incohérent`,
    );
  }

  assert.deepEqual(categoryCounts, { ooniOvens: 11, ooniMixers: 1, gozneyOvens: 7 });

  const home = pages.find((page) => page.route === "/");
  const homeArticleImages = tags(home.html, "img")
    .map((image) => attribute(image, "src"))
    .filter((src) => /^\/images\/articles\/.+-1600\.webp$/.test(src ?? ""));
  assert.equal(homeArticleImages.length, 14, "la une doit illustrer le guide, les neuf fours et quatre dossiers Gozney");

  const ooni = pages.find((page) => page.route === "/ooni/");
  const ooniThumbnails = tags(ooni.html, "img")
    .map((image) => attribute(image, "src"))
    .filter((src) => /^\/images\/articles\/.+-1600\.webp$/.test(src ?? ""));
  assert.equal(ooniThumbnails.length, 10, "la page Ooni doit illustrer ses neuf fours et le dossier pétrins");

  const gozney = pages.find((page) => page.route === "/gozney/");
  assert.ok(gozney, "page de marque Gozney absente");
  const gozneyThumbnails = tags(gozney.html, "img")
    .map((image) => attribute(image, "src"))
    .filter((src) => /^\/images\/articles\/.+-1600\.webp$/.test(src ?? ""));
  assert.equal(gozneyThumbnails.length, 7, "la page Gozney doit illustrer ses sept dossiers");
});

test("les crédits des images de tête restent sous le visuel sans le masquer", async () => {
  const articleSource = await readFile(join(siteRoot, "src/pages/[brand]/[slug].astro"), "utf8");
  const homeSource = await readFile(join(siteRoot, "src/pages/index.astro"), "utf8");
  const publicPages = await htmlPages();
  const articlePages = publicPages.filter((page) => articleRoutePattern.test(page.route ?? ""));
  const articleCaptionRule = articleSource.match(/\.article-lead-media figcaption\s*\{([^}]*)\}/s)?.[1];
  const homeCaptionRule = homeSource.match(
    /\.lead-feature__visual--documentary figcaption\s*\{([^}]*)\}/s,
  )?.[1];

  assert.ok(articleCaptionRule, "style du crédit d’article absent");
  assert.ok(homeCaptionRule, "style du crédit de une absent");
  assert.doesNotMatch(articleCaptionRule, /position:\s*absolute/);
  assert.doesNotMatch(homeCaptionRule, /position:\s*absolute/);
  assert.doesNotMatch(articleCaptionRule, /text-transform:\s*uppercase/);
  assert.doesNotMatch(homeCaptionRule, /text-transform:\s*uppercase/);
  assert.match(articleSource, /class="article-lead-media__image"/);
  assert.match(homeSource, /class="lead-feature__visual-frame"/);
  assert.match(
    articleSource,
    /L’image d’en-tête illustre le produit sans prouver ses performances\./,
  );
  for (const page of publicPages) {
    assert.doesNotMatch(
      visibleText(page.html),
      /utilisées? avec autorisation|ne constitue pas une preuve de performance/i,
      `${page.route ?? "/404"}: ancienne légende longue encore visible`,
    );
  }
  for (const page of articlePages) {
    assert.equal(
      (visibleText(page.html).match(/L’image d’en-tête illustre le produit sans prouver ses performances\./g) ?? []).length,
      1,
      `${page.route}: la réserve sur la valeur de preuve doit apparaître une seule fois`,
    );
  }
});

test("chaque dossier répète un appel d’achat direct, visible et non rémunéré", async () => {
  const articlePages = (await htmlPages()).filter((page) => articleRoutePattern.test(page.route ?? ""));
  assert.equal(articlePages.length, 19);

  for (const page of articlePages) {
    const callouts = pairedElements(page.html, "section").filter((match) =>
      attribute(`<section${match[1]}>`, "class")?.split(/\s+/).includes("purchase-cta")
    );
    assert.equal(callouts.length, 2, `${page.route}: deux emplacements d’achat attendus`);

    for (const callout of callouts) {
      assert.match(
        visibleText(callout[2]),
        /Liens directs non rémunérés : Four à Nu ne reçoit aucune commission aujourd’hui\./,
        `${page.route}: déclaration non rémunérée absente`,
      );
      const merchantLinks = pairedElements(callout[2], "a");
      assert.ok(merchantLinks.length >= 1, `${page.route}: lien marchand absent`);
      for (const link of merchantLinks) {
        const opening = `<a${link[1]}>`;
        const href = attribute(opening, "href");
        assert.ok(href, `${page.route}: destination marchande absente`);
        assert.ok(
          ["eu.gozney.com", "eu.ooni.com"].includes(new URL(href).hostname),
          `${page.route}: marchand direct inattendu`,
        );
        assert.equal(new URL(href).search, "", `${page.route}: paramètre de suivi inattendu`);
        assert.equal(attribute(opening, "rel"), "external noopener");
        assert.doesNotMatch(attribute(opening, "rel") ?? "", /sponsored/);
        assert.match(visibleText(link[2]), /Gozney|Ooni/, `${page.route}: marchand absent du bouton`);
      }
    }
  }
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

test("le four du logo équipe favicon, icônes installables et miniature sociale", async () => {
  for (const page of await htmlPages()) {
    const label = page.route ?? "404";
    const favicon = tags(page.html, "link").filter((link) => attribute(link, "rel") === "icon");
    assert.equal(favicon.length, 1, `${label}: favicon ambigu`);
    assert.equal(attribute(favicon[0], "href"), "/favicon.svg", label);
    assert.equal(attribute(favicon[0], "type"), "image/svg+xml", label);
    assert.equal(attribute(favicon[0], "sizes"), "any", label);

    const appleIcons = tags(page.html, "link")
      .filter((link) => attribute(link, "rel") === "apple-touch-icon");
    assert.equal(appleIcons.length, 1, `${label}: icône Apple ambiguë`);
    assert.equal(attribute(appleIcons[0], "href"), "/apple-touch-icon.png", label);
    assert.equal(attribute(appleIcons[0], "sizes"), "180x180", label);
    assert.deepEqual(linkHref(page.html, "manifest"), ["/site.webmanifest"], label);
  }

  const manifest = JSON.parse(await readFile(join(dist, "site.webmanifest"), "utf8"));
  assert.equal(manifest.name, "Four à Nu");
  assert.equal(manifest.short_name, "Four à Nu");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.display, "standalone");
  assert.deepEqual(manifest.icons, [
    {
      src: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      src: "/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
  ]);
  for (const icon of manifest.icons) {
    assert.equal(await routeExists(icon.src), true, `icône du manifeste absente: ${icon.src}`);
  }

  const favicon = await readFile(join(dist, "favicon.svg"));
  const faviconMarkup = favicon.toString("utf8");
  assert.match(faviconMarkup, /viewBox="0 0 128 128"/);
  assert.match(faviconMarkup, /Le four du logo Four à Nu/);
  assert.match(faviconMarkup, /#FF5A24/);
  assert.ok(favicon.byteLength < 5_000, "le favicon SVG dépasse 5 Ko");

  const fallbackFavicon = await readFile(join(dist, "favicon.ico"));
  assert.equal(
    fallbackFavicon.subarray(0, 4).toString("hex"),
    "00000100",
    "le fallback favicon.ico n'est pas une icône Windows valide",
  );
  const fallbackIconCount = fallbackFavicon.readUInt16LE(4);
  assert.equal(fallbackIconCount, 4, "favicon.ico doit contenir quatre tailles de repli");
  const fallbackSizes = Array.from({ length: fallbackIconCount }, (_, index) => {
    const offset = 6 + index * 16;
    const width = fallbackFavicon[offset] || 256;
    const height = fallbackFavicon[offset + 1] || 256;
    return [width, height];
  });
  assert.deepEqual(fallbackSizes, [[16, 16], [32, 32], [48, 48], [64, 64]]);
  assert.ok(fallbackFavicon.byteLength < 50_000, "le fallback favicon.ico dépasse 50 Ko");
  assert.equal(await routeExists("/favicon.ico"), true, "fallback favicon.ico absent du build");

  const rasterAssets = [
    ["apple-touch-icon.png", 180, 180, 25_000],
    ["icons/icon-192.png", 192, 192, 25_000],
    ["icons/icon-512.png", 512, 512, 50_000],
    ["og/four-a-nu-default-v2.jpg", 1200, 630, 100_000],
  ];
  for (const [path, width, height, byteBudget] of rasterAssets) {
    const buffer = await readFile(join(dist, path));
    const dimensions = rasterDimensions(buffer);
    assert.deepEqual(
      [dimensions.width, dimensions.height],
      [width, height],
      `${path}: dimensions incohérentes`,
    );
    assert.equal(
      dimensions.type,
      path.endsWith(".jpg") ? "image/jpeg" : "image/png",
      `${path}: format incohérent`,
    );
    assert.ok(buffer.byteLength < byteBudget, `${path}: budget de ${byteBudget} octets dépassé`);
  }

  const headers = await readFile(join(dist, "_headers"), "utf8");
  assert.match(
    headers,
    /^  Permissions-Policy: camera=\(\), geolocation=\(\), microphone=\(\), web-share=\(self\)$/m,
    "la politique de permissions doit autoriser le partage natif uniquement sur le site",
  );
});

test("robots et sitemap gardent la preview hors index", async () => {
  const robots = await readFile(join(dist, "robots.txt"), "utf8");
  const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
  assert.equal(
    robots,
    [
      "User-agent: *",
      "Disallow: /",
      "",
    ].join("\n"),
  );
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/);
  assert.doesNotMatch(sitemap, /<url>/);
  assert.doesNotMatch(sitemap, /<image:image>/);
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
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${canonicalOrigin}/sitemap.xml`,
        "",
      ].join("\n"),
    );

    const sitemap = await readFile(join(temporaryOutput, "sitemap.xml"), "utf8");
    assert.match(
      sitemap,
      /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9" xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1">/,
    );
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    const urlEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
    const pages = await htmlPages(temporaryOutput);
    const articleRoutes = pages
      .map((page) => page.route)
      .filter((route) => articleRoutePattern.test(route ?? ""));
    assert.equal(articleRoutes.length, 19);
    const expectedRoutes = [...fixedIndexableRoutes, ...articleRoutes].sort();
    assert.equal(expectedRoutes.length, fixedIndexableRoutes.length + 19);
    assert.deepEqual(
      locations.map((location) => new URL(location).pathname).sort(),
      expectedRoutes,
    );
    assert.equal(urlEntries.length, fixedIndexableRoutes.length + 19);
    const sitemapEntriesByRoute = new Map(
      urlEntries.map((entry) => {
        const location = entry.match(/<loc>([^<]+)<\/loc>/)?.[1];
        assert.ok(location, "URL absente d'une entrée sitemap");
        return [new URL(location).pathname, entry];
      }),
    );
    for (const route of fixedIndexableRoutes) {
      const expectedModified = route === "/"
        ? "2026-08-26"
        : route === "/a-propos/" || route.startsWith("/auteurs/")
          ? "2026-08-27"
          : "2026-08-25";
      assert.match(
        sitemapEntriesByRoute.get(route) ?? "",
        new RegExp(`<lastmod>${expectedModified}<\\/lastmod>`),
        `${route}: date sitemap inattendue`,
      );
    }
    for (const route of articleRoutes) {
      const page = pages.find((candidate) => candidate.route === route);
      const article = schemaNodes(jsonLdDocuments(page.html))
        .find((node) => node["@type"] === "Article");
      const expectedModified = [article.dateModified.slice(0, 10), "2026-08-25"]
        .sort()
        .at(-1);
      assert.match(
        sitemapEntriesByRoute.get(route) ?? "",
        new RegExp(`<lastmod>${expectedModified}<\\/lastmod>`),
        `${route}: date sitemap inattendue`,
      );
    }

    const sitemapImages = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)]
      .map((match) => match[1]);
    assert.equal((sitemap.match(/<image:image>/g) ?? []).length, 19);
    assert.equal(sitemapImages.length, 19);
    const expectedArticleImages = pages
      .filter((page) => articleRoutePattern.test(page.route ?? ""))
      .map((page) => metaContent(page.html, "og:image"))
      .sort();
    assert.deepEqual(sitemapImages.sort(), expectedArticleImages);

    for (const entry of urlEntries) {
      const location = entry.match(/<loc>([^<]+)<\/loc>/)?.[1];
      assert.ok(location, "URL absente d'une entrée sitemap");
      const imageLocations = [...entry.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)]
        .map((match) => match[1]);
      if (articleRoutePattern.test(new URL(location).pathname)) {
        assert.equal(imageLocations.length, 1, `${location}: une image sitemap attendue`);
        assert.equal(await routeExists(imageLocations[0], temporaryOutput), true, `${location}: image absente`);
      } else {
        assert.deepEqual(imageLocations, [], `${location}: image sitemap réservée aux articles`);
      }
    }

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

  const socialImage = await stat(join(dist, "og/four-a-nu-default-v2.jpg"));
  assert.ok(socialImage.size < 100_000, "l'image sociale JPEG dépasse 100 Ko");
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
      `http://127.0.0.1:${port}/?utm_source=example.com&utm_medium=referral`,
    );
    const referralHtml = await referral.text();
    assert.equal(referral.status, 200);
    assert.deepEqual(linkHref(referralHtml, "canonical"), [`${canonicalOrigin}/`]);

    const slashless = await fetch(`http://127.0.0.1:${port}/ooni`, {
      redirect: "manual",
    });
    assert.equal(slashless.status, 308);
    assert.equal(slashless.headers.get("location"), "/ooni/");

    const gozneySlashless = await fetch(`http://127.0.0.1:${port}/gozney`, {
      redirect: "manual",
    });
    assert.equal(gozneySlashless.status, 308);
    assert.equal(gozneySlashless.headers.get("location"), "/gozney/");

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

    const socialImage = await fetch(
      `http://127.0.0.1:${port}/og/four-a-nu-default-v2.jpg`,
    );
    assert.equal(socialImage.status, 200);
    assert.equal(socialImage.headers.get("content-type"), "image/jpeg");

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
