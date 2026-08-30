import { toAmazonAffiliateUrl } from "../lib/amazon-affiliate.mjs";

const objects = [
  {
    id: "ooni-peel-perforated-30",
    name: "Pelle à pizza perforée Ooni 30 cm",
    canonicalArticleId: "ACC-001",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0800", asin: "B0G8KQW3ZW" },
  },
  {
    id: "ooni-peel-classic-30",
    name: "Pelle à pizza Ooni classique 30 cm",
    canonicalArticleId: "ACC-001",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0802", asin: "B08BCP36HF" },
  },
  {
    id: "ooni-peel-bamboo-30",
    name: "Pelle à pizza Ooni en bambou 30 cm",
    canonicalArticleId: "ACC-001",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0804", asin: "B07TB9LBHR" },
  },
  {
    id: "weber-peel-6691",
    name: "Pelle à pizza Weber 6691",
    canonicalArticleId: "ACC-001",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0806", asin: "B00MBVA64Q" },
  },
  {
    id: "dreamfarm-scizza",
    name: "Ciseaux à pizza Dreamfarm Scizza",
    canonicalArticleId: "ACC-002",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0810", asin: "B00164DYPM" },
  },
  {
    id: "triangle-50491",
    name: "Ciseaux à pizza Triangle 50491",
    canonicalArticleId: "ACC-002",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0812", asin: "B005GB8LZE" },
  },
  {
    id: "gefu-pezzo-12641",
    name: "Ciseaux à pizza GEFU Pezzo 12641",
    canonicalArticleId: "ACC-002",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0814", asin: "B07N7RGL8H" },
  },
  {
    id: "fackelmann-pizza-scissors-25",
    name: "Ciseaux à pizza Fackelmann 25 cm",
    canonicalArticleId: "ACC-002",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0816", asin: "B07N242DNY" },
  },
  {
    id: "ooni-infrared-thermometer",
    name: "Thermomètre infrarouge numérique Ooni",
    canonicalArticleId: "ACC-003",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0820", asin: "B0GGSFJWD3" },
  },
  {
    id: "bosch-universaltemp",
    name: "Thermomètre Bosch UniversalTemp",
    canonicalArticleId: "ACC-003",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0822", asin: "B0CFVZQFZ5" },
  },
  {
    id: "thermopro-tp30",
    name: "Thermomètre infrarouge ThermoPro TP30",
    canonicalArticleId: "ACC-003",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0824", asin: "B0BGGJH3G2" },
  },
  {
    id: "tilswall-w301",
    name: "Thermomètre infrarouge Tilswall W301",
    canonicalArticleId: "ACC-003",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0826", asin: "B0D2R4GGF5" },
  },
  {
    id: "ziipa-minola",
    name: "Bac à pâtons ZiiPa Minola",
    canonicalArticleId: "ACC-004",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0830", asin: "B0CWPKL3JW" },
  },
  {
    id: "gilac-dough-box-9l",
    name: "Bac à pâtons Gilac compact 9 litres",
    canonicalArticleId: "ACC-004",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0832", asin: "B08XY4JPKH" },
  },
  {
    id: "hendi-880975",
    name: "Bac à pâte HENDI 880975 GN 1/1",
    canonicalArticleId: "ACC-004",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0834", asin: "B0CQMFMYVS" },
  },
  {
    id: "gilac-dough-box-15l",
    name: "Bac à pâtons Gilac professionnel 15 litres",
    canonicalArticleId: "ACC-004",
    amazon: { status: "available", checkedAt: "2026-08-30", evidenceId: "EV-0836", asin: "B08XY4CQQR" },
  },
  {
    id: "ooni-koda-2",
    name: "Ooni Koda 2",
    canonicalArticleId: "OONI-010",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0840", asin: "B0F544VFNG" },
  },
  {
    id: "ooni-koda-2-pro",
    name: "Ooni Koda 2 Pro",
    canonicalArticleId: "OONI-011",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0841", asin: "B0F5443PMQ" },
  },
  {
    id: "ooni-koda-2-max",
    name: "Ooni Koda 2 Max",
    canonicalArticleId: "OONI-012",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0850" },
  },
  {
    id: "ooni-koda-12",
    name: "Ooni Koda 12",
    canonicalArticleId: "OONI-013",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0842", asin: "B0CVQDZD82" },
  },
  {
    id: "ooni-koda-16",
    name: "Ooni Koda 16",
    canonicalArticleId: "OONI-014",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0843", asin: "B0CVQNGC8X" },
  },
  {
    id: "ooni-karu-2",
    name: "Ooni Karu 2",
    canonicalArticleId: "OONI-015",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0844", asin: "B0G7LQP7FY" },
  },
  {
    id: "ooni-karu-2-pro",
    name: "Ooni Karu 2 Pro",
    canonicalArticleId: "OONI-016",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0845", asin: "B0DLH28V1D" },
  },
  {
    id: "ooni-karu-12",
    name: "Ooni Karu 12",
    canonicalArticleId: "OONI-017",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0846", asin: "B0G4ZN7YNZ" },
  },
  {
    id: "ooni-volt-2",
    name: "Ooni Volt 2",
    canonicalArticleId: "OONI-018",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0847", asin: "B0GXZZNLCM" },
  },
  {
    id: "ooni-halo-core",
    name: "Ooni Halo Core",
    canonicalArticleId: "OONI-040",
    amazon: { status: "available", checkedAt: "2026-08-31", evidenceId: "EV-0848", asin: "B0H629MKNC" },
  },
  {
    id: "ooni-halo-pro",
    name: "Ooni Halo Pro",
    canonicalArticleId: "OONI-040",
    amazon: {
      status: "available",
      checkedAt: "2026-08-31",
      evidenceId: "EV-0849",
      asin: "B0FPXDMSFZ",
      shortLink: "https://amzn.to/4y8lFcC",
    },
  },
  {
    id: "gozney-arc-xl",
    name: "Gozney Arc XL",
    canonicalArticleId: "GOZNEY-001",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0851" },
  },
  {
    id: "gozney-arc-lite",
    name: "Gozney Arc Lite",
    canonicalArticleId: "GOZNEY-002",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0852" },
  },
  {
    id: "gozney-tread",
    name: "Gozney Tread",
    canonicalArticleId: "GOZNEY-002",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0853" },
  },
  {
    id: "gozney-dome-xl-gen-2",
    name: "Gozney Dome XL (Gen 2)",
    canonicalArticleId: "GOZNEY-004",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0854" },
  },
  {
    id: "gozney-dome-gen-2",
    name: "Gozney Dome (Gen 2)",
    canonicalArticleId: "GOZNEY-005",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0855" },
  },
  {
    id: "gozney-arc",
    name: "Gozney Arc",
    canonicalArticleId: "GOZNEY-006",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0856" },
  },
  {
    id: "gozney-roccbox",
    name: "Gozney Roccbox",
    canonicalArticleId: "GOZNEY-007",
    amazon: { status: "not_found", checkedAt: "2026-08-31", evidenceId: "EV-0857" },
  },
];

const articleCoverage = {
  "ooni-koda-2": ["OONI-001", "OONI-004", "OONI-010"],
  "ooni-koda-2-pro": ["OONI-001", "OONI-011"],
  "ooni-koda-2-max": ["OONI-001", "OONI-012"],
  "ooni-koda-12": ["OONI-001", "OONI-013"],
  "ooni-koda-16": ["OONI-001", "OONI-014"],
  "ooni-karu-2": ["OONI-001", "OONI-004", "OONI-015"],
  "ooni-karu-2-pro": ["OONI-001", "OONI-016"],
  "ooni-karu-12": ["OONI-001", "OONI-017"],
  "ooni-volt-2": ["OONI-001", "OONI-004", "OONI-018"],
  "gozney-arc-xl": ["GOZNEY-001", "GOZNEY-003"],
  "gozney-arc-lite": ["GOZNEY-002", "GOZNEY-003"],
  "gozney-tread": ["GOZNEY-002", "GOZNEY-003"],
  "gozney-dome-xl-gen-2": ["GOZNEY-003", "GOZNEY-004"],
  "gozney-dome-gen-2": ["GOZNEY-003", "GOZNEY-005"],
  "gozney-arc": ["GOZNEY-003", "GOZNEY-006"],
  "gozney-roccbox": ["GOZNEY-003", "GOZNEY-007"],
};

export const COMMERCIAL_OBJECTS = Object.freeze(
  Object.fromEntries(objects.map((object) => {
    const articleIds = articleCoverage[object.id] ?? [object.canonicalArticleId];
    if (!articleIds.includes(object.canonicalArticleId)) {
      throw new Error(`Dossier canonique absent de la couverture : ${object.id}`);
    }
    return [
      object.id,
      Object.freeze({
        ...object,
        articleIds: Object.freeze(articleIds),
        amazon: Object.freeze({ marketplace: "amazon.fr", territory: "FR", ...object.amazon }),
      }),
    ];
  })),
);

export const COMMERCIAL_OBJECT_IDS = Object.freeze(Object.keys(COMMERCIAL_OBJECTS));

export function commercialObject(objectId) {
  const object = COMMERCIAL_OBJECTS[objectId];
  if (!object) throw new Error(`Objet commercial inconnu : ${objectId}`);
  return object;
}

export function amazonAffiliateUrlForObject(objectId) {
  const object = commercialObject(objectId);
  if (object.amazon.status !== "available") {
    throw new Error(`Aucune offre Amazon.fr vérifiée pour ${object.name}`);
  }
  if (object.amazon.shortLink) return object.amazon.shortLink;
  if (!object.amazon.asin) throw new Error(`ASIN absent pour ${object.name}`);
  return toAmazonAffiliateUrl(`https://www.amazon.fr/dp/${object.amazon.asin}`);
}
