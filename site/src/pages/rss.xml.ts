import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@/config/site";

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = async () => {
  const analyses = (await getCollection("analyses"))
    .filter((entry) => entry.data.status === "publishable")
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const items = analyses.map((entry) => {
    const url = `${SITE.url}/${entry.data.brand}/${entry.id}/`;
    const author = SITE.authors[entry.data.author];
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
    '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "  <channel>",
    `    <title>${escapeXml(SITE.name)}</title>`,
    `    <link>${escapeXml(`${SITE.url}/`)}</link>`,
    `    <description>${escapeXml(SITE.description)}</description>`,
    `    <language>${SITE.language}</language>`,
    `    <lastBuildDate>${new Date("2026-08-24T00:00:00Z").toUTCString()}</lastBuildDate>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
