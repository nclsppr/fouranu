import { amazonAffiliateUrlForObject } from "@/data/commercial-objects.mjs";

interface PurchaseLinkBase {
  label: string;
  merchant: "Amazon.fr" | "Gozney" | "Ooni";
  url: string;
}

export type PurchaseLink = PurchaseLinkBase & (
  | { objectId: string; scope?: never }
  | { objectId?: never; scope: "collection" }
);

function amazonLink(objectId: string, label: string): PurchaseLink {
  return {
    label,
    merchant: "Amazon.fr",
    url: amazonAffiliateUrlForObject(objectId),
    objectId,
  };
}

export const PURCHASE_LINKS_BY_ARTICLE: Record<string, PurchaseLink[]> = {
  "FOUR-001": [
    amazonLink(
      "sage-smart-oven-pizzaiolo-bpz820",
      "Voir le Sage Pizzaiolo BPZ820 sur Amazon.fr",
    ),
  ],
  "FOUR-002": [
    amazonLink("cuisinart-cpz120e", "Voir le Cuisinart CPZ120E sur Amazon.fr"),
  ],
  "FOUR-003": [
    amazonLink(
      "g3-ferrari-delizia-g10006-black",
      "Voir le G3 Ferrari Delizia noir sur Amazon.fr",
    ),
  ],
  "FOUR-004": [
    amazonLink(
      "ninja-woodfire-oo101eu",
      "Voir le Ninja Woodfire OO101EU sur Amazon.fr",
    ),
  ],
  "FOUR-005": [
    amazonLink(
      "witt-etna-rotante-16",
      "Voir le Witt ETNA Rotante noir sur Amazon.fr",
    ),
  ],
  "ACC-001": [
    amazonLink("ooni-peel-perforated-30", "Voir la pelle Ooni perforée sur Amazon.fr"),
    amazonLink("ooni-peel-classic-30", "Voir la pelle Ooni classique sur Amazon.fr"),
    amazonLink("ooni-peel-bamboo-30", "Voir la pelle Ooni en bambou sur Amazon.fr"),
    amazonLink("weber-peel-6691", "Voir la pelle Weber 6691 sur Amazon.fr"),
  ],
  "ACC-002": [
    amazonLink("dreamfarm-scizza", "Voir les ciseaux Dreamfarm Scizza sur Amazon.fr"),
    amazonLink("triangle-50491", "Voir les ciseaux Triangle 50491 sur Amazon.fr"),
    amazonLink("gefu-pezzo-12641", "Voir les ciseaux GEFU Pezzo sur Amazon.fr"),
    amazonLink("fackelmann-pizza-scissors-25", "Voir les ciseaux Fackelmann sur Amazon.fr"),
  ],
  "ACC-003": [
    amazonLink("ooni-infrared-thermometer", "Voir le thermomètre Ooni sur Amazon.fr"),
    amazonLink("bosch-universaltemp", "Voir le Bosch UniversalTemp sur Amazon.fr"),
    amazonLink("thermopro-tp30", "Voir le ThermoPro TP30 sur Amazon.fr"),
    amazonLink("tilswall-w301", "Voir le Tilswall W301 sur Amazon.fr"),
  ],
  "ACC-004": [
    amazonLink("ziipa-minola", "Voir le bac ZiiPa Minola sur Amazon.fr"),
    amazonLink("gilac-dough-box-9l", "Voir le bac Gilac compact sur Amazon.fr"),
    amazonLink("hendi-880975", "Voir le bac HENDI GN 1/1 sur Amazon.fr"),
    amazonLink("gilac-dough-box-15l", "Voir le bac Gilac 15 litres sur Amazon.fr"),
  ],
  "GOZNEY-001": [
    {
      label: "Voir l’Arc XL chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr-fr/products/arc-xl",
      objectId: "gozney-arc-xl",
    },
  ],
  "GOZNEY-002": [
    {
      label: "Voir l’Arc Lite chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/arc-lite",
      objectId: "gozney-arc-lite",
    },
    {
      label: "Voir le Tread chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/tread",
      objectId: "gozney-tread",
    },
  ],
  "GOZNEY-003": [
    {
      label: "Voir tous les fours chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/collections/pizza-ovens",
      scope: "collection",
    },
  ],
  "GOZNEY-004": [
    {
      label: "Voir le Dome XL (Gen 2) chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/dome-xl-gen-2",
      objectId: "gozney-dome-xl-gen-2",
    },
  ],
  "GOZNEY-005": [
    {
      label: "Voir le Dome (Gen 2) chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/dome-gen-2",
      objectId: "gozney-dome-gen-2",
    },
  ],
  "GOZNEY-006": [
    {
      label: "Voir l’Arc chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/arc",
      objectId: "gozney-arc",
    },
  ],
  "GOZNEY-007": [
    {
      label: "Voir le Roccbox chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/roccbox",
      objectId: "gozney-roccbox",
    },
  ],
  "OONI-001": [
    {
      label: "Voir tous les fours chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/collections/ovens",
      scope: "collection",
    },
  ],
  "OONI-004": [
    {
      label: "Voir le Koda 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2",
      objectId: "ooni-koda-2",
    },
    {
      label: "Voir le Karu 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2",
      objectId: "ooni-karu-2",
    },
    {
      label: "Voir le Volt 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-volt-2",
      objectId: "ooni-volt-2",
    },
  ],
  "OONI-010": [
    {
      label: "Voir le Koda 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2",
      objectId: "ooni-koda-2",
    },
    amazonLink("ooni-koda-2", "Voir le Koda 2 sur Amazon.fr"),
  ],
  "OONI-011": [
    {
      label: "Voir le Koda 2 Pro chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2-pro",
      objectId: "ooni-koda-2-pro",
    },
    amazonLink("ooni-koda-2-pro", "Voir le Koda 2 Pro sur Amazon.fr"),
  ],
  "OONI-012": [
    {
      label: "Voir le Koda 2 Max chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2-max",
      objectId: "ooni-koda-2-max",
    },
  ],
  "OONI-013": [
    {
      label: "Voir le Koda 12 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda",
      objectId: "ooni-koda-12",
    },
    amazonLink("ooni-koda-12", "Voir le Koda 12 sur Amazon.fr"),
  ],
  "OONI-014": [
    {
      label: "Voir le Koda 16 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-16",
      objectId: "ooni-koda-16",
    },
    amazonLink("ooni-koda-16", "Voir le Koda 16 sur Amazon.fr"),
  ],
  "OONI-015": [
    {
      label: "Voir le Karu 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2",
      objectId: "ooni-karu-2",
    },
    amazonLink("ooni-karu-2", "Voir le Karu 2 sur Amazon.fr"),
  ],
  "OONI-016": [
    {
      label: "Voir le Karu 2 Pro chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2-pro",
      objectId: "ooni-karu-2-pro",
    },
    amazonLink("ooni-karu-2-pro", "Voir le Karu 2 Pro sur Amazon.fr"),
  ],
  "OONI-017": [
    {
      label: "Voir le Karu 12 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu",
      objectId: "ooni-karu-12",
    },
    amazonLink("ooni-karu-12", "Voir le Karu 12 sur Amazon.fr"),
  ],
  "OONI-018": [
    {
      label: "Voir le Volt 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-volt-2",
      objectId: "ooni-volt-2",
    },
    amazonLink("ooni-volt-2", "Voir le Volt 2 sur Amazon.fr"),
  ],
  "OONI-040": [
    {
      label: "Voir le Halo Core chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-halo-core-spiral-mixer",
      objectId: "ooni-halo-core",
    },
    amazonLink("ooni-halo-core", "Voir le Halo Core sur Amazon.fr"),
    amazonLink("ooni-halo-pro", "Voir le Halo Pro sur Amazon.fr"),
  ],
};
