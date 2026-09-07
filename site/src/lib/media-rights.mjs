import assetsCsv from "@/data/assets.csv?raw";

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
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      finishRow();
    } else if (character !== "\r") {
      field += character;
    }
  }
  if (quoted) throw new Error("Champ CSV non fermé dans research/assets.csv");
  if (field.length > 0 || row.length > 0) finishRow();
  return rows;
}

const rows = parseCsv(assetsCsv);
const headers = rows.shift();
if (
  !headers?.includes("asset_id") ||
  !headers.includes("language_scope") ||
  !headers.includes("surface_language_scope")
) {
  throw new Error("Schéma média multilingue absent de research/assets.csv");
}

const assets = new Map(
  rows.map((values, rowIndex) => {
    if (values.length !== headers.length) {
      throw new Error(`Ligne média invalide ${rowIndex + 2}`);
    }
    const asset = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    return [asset.asset_id, asset];
  }),
);

export function mediaAsset(assetId) {
  const asset = assets.get(assetId);
  if (!asset) throw new Error(`Média inconnu : ${assetId}`);
  return asset;
}

function scopeIncludes(value, item) {
  return value.split(";").map((entry) => entry.trim()).filter(Boolean).includes(item);
}

export function mediaAllowedInLocale(assetId, locale, surface = "web") {
  const asset = mediaAsset(assetId);
  if (!scopeIncludes(asset.surface_language_scope, `${surface}:${locale}`)) return false;
  if (surface === "open-graph" || surface === "twitter") {
    return scopeIncludes(asset.social_scope, surface);
  }
  return Boolean(asset.web_scope);
}

export function assertMediaAllowedInLocale(assetId, locale, surface = "web", context = "") {
  if (mediaAllowedInLocale(assetId, locale, surface)) return;
  const suffix = context ? ` (${context})` : "";
  throw new Error(
    `Média ${assetId} non autorisé en ${locale} sur ${surface}${suffix}`,
  );
}

export function mediaAllowedAtPath(pathname, locale, surface = "web") {
  const asset = [...assets.values()].find((candidate) => {
    if (!candidate.publication_url) return false;
    return new URL(candidate.publication_url).pathname === pathname;
  });
  if (!asset) throw new Error(`Média public non enregistré : ${pathname}`);
  return mediaAllowedInLocale(asset.asset_id, locale, surface);
}

export function assertMediaAllowedAtPath(pathname, locale, surface = "web", context = "") {
  if (mediaAllowedAtPath(pathname, locale, surface)) return;
  const suffix = context ? ` (${context})` : "";
  throw new Error(
    `Média ${pathname} non autorisé en ${locale} sur ${surface}${suffix}`,
  );
}

export function assertResponsiveMediaAllowedAtPath(
  pathname,
  locale,
  surface,
  context = "",
) {
  assertMediaAllowedAtPath(pathname, locale, surface, context);
  if (pathname.includes("-1600.")) {
    assertMediaAllowedAtPath(
      pathname.replace("-1600.", "-960."),
      locale,
      surface,
      context,
    );
  }
}
