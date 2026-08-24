import type { APIRoute } from "astro";
import { INDEXING_ENABLED, SITE } from "@/config/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    INDEXING_ENABLED ? "Allow: /" : "Disallow: /",
    ...(INDEXING_ENABLED
      ? ["", `Sitemap: ${SITE.url}/sitemap.xml`]
      : []),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
