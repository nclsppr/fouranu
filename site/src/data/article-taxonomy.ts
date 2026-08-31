import type { CollectionEntry } from "astro:content";

export const ARTICLE_BRANDS = {
  ooni: {
    label: "Ooni",
    routeSegment: "ooni",
    hubPath: "/ooni/",
  },
  gozney: {
    label: "Gozney",
    routeSegment: "gozney",
    hubPath: "/gozney/",
  },
  accessoires: {
    label: "Accessoires pizza",
    routeSegment: "accessoires-pizza",
    hubPath: "/accessoires-pizza/",
  },
  fours: {
    label: "Fours à pizza",
    routeSegment: "fours-a-pizza",
    hubPath: "/fours-a-pizza/",
  },
} as const;

export type ArticleBrand = keyof typeof ARTICLE_BRANDS;

export const ARTICLE_CATEGORY_LABELS = {
  oven: "Fours à pizza",
  mixer: "Pétrins",
  accessoires: "Accessoires pizza",
} as const;

export type ArticleCategory = keyof typeof ARTICLE_CATEGORY_LABELS;

type AnalysisEntry = CollectionEntry<"analyses">;
type ArticleImage = NonNullable<AnalysisEntry["data"]["image"]>;

export type PublishedAnalysisEntry = AnalysisEntry & {
  data: AnalysisEntry["data"] & {
    status: "publishable";
    publishedAt: Date;
    image: ArticleImage;
  };
};

export function isPublishedAnalysis(
  entry: AnalysisEntry,
): entry is PublishedAnalysisEntry {
  return entry.data.status === "publishable"
    && entry.data.publishedAt instanceof Date
    && entry.data.image !== undefined;
}

export function articlePath(brand: ArticleBrand, slug: string): string {
  return `/${ARTICLE_BRANDS[brand].routeSegment}/${slug}/`;
}
