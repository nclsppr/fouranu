export const prerender = true;

const sha = import.meta.env.PUBLIC_RELEASE_SHA || "local";

export function GET() {
  return new Response(
    JSON.stringify({
      sha,
      source: `https://github.com/nclsppr/fouranu/commit/${sha}`,
    }),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
}
