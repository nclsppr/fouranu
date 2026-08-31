import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../dist", import.meta.url)));
const port = Number.parseInt(process.env.PORT ?? "4321", 10);
const host = process.env.HOST ?? "0.0.0.0";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function resolveAsset(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const cleaned = normalize(decoded).replace(/^[/\\]+/, "");
  const candidate = resolve(root, cleaned || "index.html");
  if (candidate !== root && !candidate.startsWith(`${root}${sep}`)) return null;

  try {
    if (statSync(candidate).isFile()) return candidate;
    if (statSync(candidate).isDirectory()) {
      const index = join(candidate, "index.html");
      if (statSync(index).isFile()) return index;
    }
  } catch {
    if (!extname(candidate)) {
      const index = join(candidate, "index.html");
      try {
        if (statSync(index).isFile()) return index;
      } catch {
        return null;
      }
    }
  }
  return null;
}

const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(request.method === "HEAD" ? undefined : "ok\n");
    return;
  }

  const requestedUrl = new URL(request.url ?? "/", "http://localhost");
  const pathname = requestedUrl.pathname;
  if (!pathname.endsWith("/") && !extname(pathname)) {
    const canonicalAsset = resolveAsset(`${pathname}/`);
    if (canonicalAsset) {
      response.writeHead(308, {
        Location: `${pathname}/${requestedUrl.search}`,
        "Cache-Control": "no-cache",
      });
      response.end();
      return;
    }
  }
  const asset = resolveAsset(pathname);
  if (!asset) {
    const localizedFallback = pathname.startsWith("/en/")
      ? join(root, "en", "404.html")
      : pathname.startsWith("/de/")
        ? join(root, "de", "404.html")
        : undefined;
    let fallback = join(root, "404.html");
    if (localizedFallback) {
      try {
        if (statSync(localizedFallback).isFile()) fallback = localizedFallback;
      } catch {
        // The root 404 remains the safe fallback for incomplete preview builds.
      }
    }
    response.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(fallback).pipe(response);
    return;
  }

  const cacheControl = pathname.startsWith("/_astro/")
    ? "public, max-age=31536000, immutable"
    : "no-cache";
  response.writeHead(200, {
    "Content-Type": contentTypes[extname(asset)] ?? "application/octet-stream",
    "Cache-Control": cacheControl,
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(asset).pipe(response);
});

server.listen(port, host, () => {
  process.stdout.write(`Four à Nu écoute sur http://${host}:${port}\n`);
});
