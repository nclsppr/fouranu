import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { INDEXING_ENABLED, SITE_SURFACE_UPDATED_AT } from "@/config/site";
import {
  ARTICLE_ROUTES,
  LOCALE_INFO,
  articleRoute,
  feedPath,
  staticRoute,
  type ArticleId,
  type Locale,
} from "@/i18n/config";
import { localizedSite } from "@/i18n/common";

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export async function createRssResponse(locale: Locale): Promise<Response> {
  const site = localizedSite(locale);
  const absolute = (path: string) => new URL(path, site.url).toString();
  const eligible = (await getCollection("analyses"))
    .filter((entry) =>
      entry.data.locale === locale &&
      entry.data.status === "publishable" &&
      entry.data.indexable
    );
  const analyses = INDEXING_ENABLED
    ? (Object.keys(ARTICLE_ROUTES) as ArticleId[]).map((articleId) => {
        const matches = eligible.filter((entry) => entry.data.articleId === articleId);
        if (matches.length !== 1) {
          throw new Error(
            `Expected one indexable ${locale} RSS entry for ${articleId}, found ${matches.length}.`,
          );
        }
        return matches[0];
      }).sort((a, b) =>
        b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf() ||
        a.data.articleId.localeCompare(b.data.articleId)
      )
    : [];
  const lastBuildDate = analyses.length > 0
    ? new Date(Math.max(...analyses.map((entry) => entry.data.updatedAt.valueOf())))
    : new Date(`${SITE_SURFACE_UPDATED_AT}T00:00:00Z`);
  const items = analyses.map((entry) => {
    const articleId = entry.data.articleId as ArticleId;
    const url = absolute(articleRoute(articleId, locale));
    const author = site.authors[entry.data.author];
    return [
      "    <item>",
      `      <title>${escapeXml(entry.data.title)}</title>`,
      `      <link>${escapeXml(url)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
      `      <description>${escapeXml(entry.data.description)}</description>`,
      `      <pubDate>${entry.data.publishedAt.toUTCString()}</pubDate>`,
      `      <dc:creator>${escapeXml(author.name)}</dc:creator>`,
      "    </item>",
    ].join("\n");
  }).join("\n");
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "  <channel>",
    `    <title>${escapeXml(site.name)}</title>`,
    `    <link>${escapeXml(absolute(staticRoute("home", locale)))}</link>`,
    `    <description>${escapeXml(site.description)}</description>`,
    `    <language>${LOCALE_INFO[locale].htmlLanguage}</language>`,
    `    <atom:link href="${escapeXml(absolute(feedPath(locale)))}" rel="self" type="application/rss+xml"/>`,
    `    <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

export const GET: APIRoute = () => createRssResponse("fr");
