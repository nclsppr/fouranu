export interface PurchaseLink {
  label: string;
  merchant: "Amazon.fr" | "Gozney" | "Ooni";
  url: string;
}

export const PURCHASE_LINKS_BY_ARTICLE: Record<string, PurchaseLink[]> = {
  "ACC-001": [
    {
      label: "Voir la pelle Ooni perforée sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0G8KQW3ZW",
    },
    {
      label: "Voir la pelle Ooni classique sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B08BCP36HF",
    },
    {
      label: "Voir la pelle Ooni en bambou sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B07TB9LBHR",
    },
    {
      label: "Voir la pelle Weber 6691 sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B00MBVA64Q",
    },
  ],
  "ACC-002": [
    {
      label: "Voir les ciseaux Dreamfarm Scizza sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B00164DYPM",
    },
    {
      label: "Voir les ciseaux Triangle 50491 sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B005GB8LZE",
    },
    {
      label: "Voir les ciseaux GEFU Pezzo sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B07N7RGL8H",
    },
    {
      label: "Voir les ciseaux Fackelmann sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B07N242DNY",
    },
  ],
  "ACC-003": [
    {
      label: "Voir le thermomètre Ooni sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0GGSFJWD3",
    },
    {
      label: "Voir le Bosch UniversalTemp sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0CFVZQFZ5",
    },
    {
      label: "Voir le ThermoPro TP30 sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0BGGJH3G2",
    },
    {
      label: "Voir le Tilswall W301 sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0D2R4GGF5",
    },
  ],
  "ACC-004": [
    {
      label: "Voir le bac ZiiPa Minola sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0CWPKL3JW",
    },
    {
      label: "Voir le bac Gilac compact sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B08XY4JPKH",
    },
    {
      label: "Voir le bac HENDI GN 1/1 sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B0CQMFMYVS",
    },
    {
      label: "Voir le bac Gilac 15 litres sur Amazon.fr",
      merchant: "Amazon.fr",
      url: "https://www.amazon.fr/dp/B08XY4CQQR",
    },
  ],
  "GOZNEY-001": [
    {
      label: "Voir l’Arc XL chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr-fr/products/arc-xl",
    },
  ],
  "GOZNEY-002": [
    {
      label: "Voir l’Arc Lite chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/arc-lite",
    },
    {
      label: "Voir le Tread chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/tread",
    },
  ],
  "GOZNEY-003": [
    {
      label: "Voir tous les fours chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/collections/pizza-ovens",
    },
  ],
  "GOZNEY-004": [
    {
      label: "Voir le Dome XL (Gen 2) chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/dome-xl-gen-2",
    },
  ],
  "GOZNEY-005": [
    {
      label: "Voir le Dome (Gen 2) chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/dome-gen-2",
    },
  ],
  "GOZNEY-006": [
    {
      label: "Voir l’Arc chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/arc",
    },
  ],
  "GOZNEY-007": [
    {
      label: "Voir le Roccbox chez Gozney",
      merchant: "Gozney",
      url: "https://eu.gozney.com/fr/products/roccbox",
    },
  ],
  "OONI-001": [
    {
      label: "Voir tous les fours chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/collections/ovens",
    },
  ],
  "OONI-004": [
    {
      label: "Voir le Koda 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2",
    },
    {
      label: "Voir le Karu 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2",
    },
    {
      label: "Voir le Volt 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-volt-2",
    },
  ],
  "OONI-010": [
    {
      label: "Voir le Koda 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2",
    },
  ],
  "OONI-011": [
    {
      label: "Voir le Koda 2 Pro chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2-pro",
    },
  ],
  "OONI-012": [
    {
      label: "Voir le Koda 2 Max chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-2-max",
    },
  ],
  "OONI-013": [
    {
      label: "Voir le Koda 12 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda",
    },
  ],
  "OONI-014": [
    {
      label: "Voir le Koda 16 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-koda-16",
    },
  ],
  "OONI-015": [
    {
      label: "Voir le Karu 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2",
    },
  ],
  "OONI-016": [
    {
      label: "Voir le Karu 2 Pro chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu-2-pro",
    },
  ],
  "OONI-017": [
    {
      label: "Voir le Karu 12 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-karu",
    },
  ],
  "OONI-018": [
    {
      label: "Voir le Volt 2 chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-volt-2",
    },
  ],
  "OONI-040": [
    {
      label: "Voir le Halo Core chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-halo-core-spiral-mixer",
    },
    {
      label: "Voir le Halo Pro chez Ooni",
      merchant: "Ooni",
      url: "https://eu.ooni.com/fr-fr/products/ooni-halo-pro-spiral-mixer",
    },
  ],
};
