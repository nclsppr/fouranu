import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { FIXED_INDEXABLE_ROUTES, INDEXING_ENABLED, SITE } from "@/config/site";

export const prerender = true;

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = async () => {
  const analyses = INDEXING_ENABLED
    ? (await getCollection("analyses"))
        .filter((entry) => entry.data.status === "publishable" && entry.data.indexable)
        .map((entry) => ({
          path: `/${entry.data.brand}/${entry.id}/`,
          modified: entry.data.updatedAt.toISOString().slice(0, 10),
        }))
    : [];

  const routes = INDEXING_ENABLED ? [...FIXED_INDEXABLE_ROUTES, ...analyses] : [];
  const urls = routes
    .map(
      ({ path, modified }) =>
        `  <url><loc>${escapeXml(new URL(path, SITE.url).toString())}</loc><lastmod>${modified}</lastmod></url>`,
    )
    .join("\n");
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
