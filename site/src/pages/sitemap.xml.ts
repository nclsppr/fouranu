import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import {
  FIXED_INDEXABLE_ROUTES,
  INDEXING_ENABLED,
  SITE,
} from "@/config/site";
import {
  ARTICLE_ROUTES,
  LOCALES,
  STATIC_ROUTES,
  articleAlternates,
  articleRoute,
  staticAlternates,
  staticRoute,
  type ArticleId,
  type Locale,
  type StaticRouteId,
} from "@/i18n/config";

export const prerender = true;

type SitemapRoute = {
  path: string;
  modified: string;
  alternates: Record<Locale, string>;
  image?: string;
};

const INDEXABLE_STATIC_ROUTE_IDS = (Object.keys(STATIC_ROUTES) as StaticRouteId[])
  .filter((routeId) => routeId !== "notFound");

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const absolute = (path: string) => new URL(path, SITE.url).toString();

const renderAlternates = (alternates: Record<Locale, string>) => [
  ...LOCALES.map((locale) =>
    `<xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(absolute(alternates[locale]))}"/>`
  ),
  `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absolute(alternates.fr))}"/>`,
].join("");

const renderUrl = ({ path, modified, alternates, image }: SitemapRoute) =>
  `  <url><loc>${escapeXml(absolute(path))}</loc><lastmod>${modified}</lastmod>${renderAlternates(alternates)}${image ? `<image:image><image:loc>${escapeXml(absolute(image))}</image:loc></image:image>` : ""}</url>`;

function fixedRoutes(): SitemapRoute[] {
  return INDEXABLE_STATIC_ROUTE_IDS.flatMap((routeId) => {
    const frenchPath = staticRoute(routeId, "fr");
    const metadata = FIXED_INDEXABLE_ROUTES.find(({ path }) => path === frenchPath);
    if (!metadata) {
      throw new Error(`Missing sitemap metadata for fixed route ${routeId}.`);
    }
    const image = "image" in metadata ? metadata.image : undefined;
    const alternates = staticAlternates(routeId);

    return LOCALES.map((locale) => ({
      path: staticRoute(routeId, locale),
      modified: metadata.modified,
      alternates,
      image: locale === "fr" ? image : undefined,
    }));
  });
}

async function articleRoutes(): Promise<SitemapRoute[]> {
  const eligible = (await getCollection("analyses"))
    .filter((entry) => entry.data.status === "publishable" && entry.data.indexable);

  return (Object.keys(ARTICLE_ROUTES) as ArticleId[]).flatMap((articleId) => {
    const alternates = articleAlternates(articleId);

    return LOCALES.map((locale) => {
      const matches = eligible.filter((entry) =>
        entry.data.articleId === articleId && entry.data.locale === locale
      );
      if (matches.length !== 1) {
        throw new Error(
          `Expected one indexable ${locale} entry for ${articleId}, found ${matches.length}.`,
        );
      }
      const [entry] = matches;

      return {
        path: articleRoute(articleId, locale),
        modified: entry.data.updatedAt.toISOString().slice(0, 10),
        alternates,
        image: locale === "fr" ? entry.data.image.src : undefined,
      };
    });
  });
}

export const GET: APIRoute = async () => {
  const routes = INDEXING_ENABLED
    ? [...fixedRoutes(), ...(await articleRoutes())]
    : [];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    routes.map(renderUrl).join("\n"),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
