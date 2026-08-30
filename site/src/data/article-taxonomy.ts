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
} as const;

export type ArticleBrand = keyof typeof ARTICLE_BRANDS;

export const ARTICLE_CATEGORY_LABELS = {
  oven: "Fours à pizza",
  mixer: "Pétrins",
  accessoires: "Accessoires pizza",
} as const;

export type ArticleCategory = keyof typeof ARTICLE_CATEGORY_LABELS;

export function articlePath(brand: ArticleBrand, slug: string): string {
  return `/${ARTICLE_BRANDS[brand].routeSegment}/${slug}/`;
}
