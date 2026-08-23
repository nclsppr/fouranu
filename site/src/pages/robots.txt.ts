import type { APIRoute } from "astro";
import { INDEXING_ENABLED, SITE } from "@/config/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    "User-agent: OAI-SearchBot",
    INDEXING_ENABLED ? "Allow: /" : "Disallow: /",
    "",
    "User-agent: GPTBot",
    "Disallow: /",
    "",
    "User-agent: *",
    "Allow: /",
    ...(INDEXING_ENABLED
      ? ["", `Sitemap: ${SITE.url}/sitemap.xml`]
      : ["Disallow: /llms.txt", "Disallow: /sitemap.xml"]),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
