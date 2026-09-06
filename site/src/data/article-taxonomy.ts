import type { CollectionEntry } from "astro:content";

export const ARTICLE_BRANDS = {
  ooni: {
    label: "Ooni",
    routeSegment: "ooni",
  },
  gozney: {
    label: "Gozney",
    routeSegment: "gozney",
  },
  accessoires: {
    label: "Accessoires pizza",
    routeSegment: "accessoires-pizza",
  },
  fours: {
    label: "Fours à pizza",
    routeSegment: "fours-a-pizza",
  },
} as const;

export type ArticleBrand = keyof typeof ARTICLE_BRANDS;

export const ARTICLE_CATEGORY_LABELS = {
  oven: "Fours à pizza",
  mixer: "Pétrins",
  accessoires: "Accessoires pizza",
} as const;

export function isPublishedAnalysis(
  entry: CollectionEntry<"analyses">,
): boolean {
  return entry.data.status === "publishable";
}

export function articlePath(brand: ArticleBrand, slug: string): string {
  return `/${ARTICLE_BRANDS[brand].routeSegment}/${slug}/`;
}
