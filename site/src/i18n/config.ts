export const LOCALES = ["fr", "en", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

export const LOCALE_INFO = {
  fr: {
    languageName: "Français",
    htmlLanguage: "fr",
    intlLocale: "fr-FR",
    openGraphLocale: "fr_FR",
  },
  en: {
    languageName: "English",
    htmlLanguage: "en",
    intlLocale: "en-GB",
    openGraphLocale: "en_GB",
  },
  de: {
    languageName: "Deutsch",
    htmlLanguage: "de",
    intlLocale: "de-DE",
    openGraphLocale: "de_DE",
  },
} as const satisfies Record<Locale, {
  languageName: string;
  htmlLanguage: string;
  intlLocale: string;
  openGraphLocale: string;
}>;

export const STATIC_ROUTES = {
  home: {
    fr: "/",
    en: "/en/",
    de: "/de/",
  },
  accessories: {
    fr: "/accessoires-pizza/",
    en: "/en/pizza-accessories/",
    de: "/de/pizzazubehoer/",
  },
  ovens: {
    fr: "/fours-a-pizza/",
    en: "/en/pizza-ovens/",
    de: "/de/pizzaoefen/",
  },
  ooni: {
    fr: "/ooni/",
    en: "/en/ooni/",
    de: "/de/ooni/",
  },
  gozney: {
    fr: "/gozney/",
    en: "/en/gozney/",
    de: "/de/gozney/",
  },
  method: {
    fr: "/methode/",
    en: "/en/method/",
    de: "/de/methode/",
  },
  about: {
    fr: "/a-propos/",
    en: "/en/about/",
    de: "/de/ueber-uns/",
  },
  authors: {
    fr: "/auteurs/redaction-four-a-nu/",
    en: "/en/authors/editorial-team/",
    de: "/de/autoren/redaktion/",
  },
  authorNicolas: {
    fr: "/auteurs/nicolas/",
    en: "/en/authors/nicolas/",
    de: "/de/autoren/nicolas/",
  },
  authorFlorian: {
    fr: "/auteurs/florian/",
    en: "/en/authors/florian/",
    de: "/de/autoren/florian/",
  },
  authorMagali: {
    fr: "/auteurs/magali/",
    en: "/en/authors/magali/",
    de: "/de/autoren/magali/",
  },
  contact: {
    fr: "/contact/",
    en: "/en/contact/",
    de: "/de/kontakt/",
  },
  corrections: {
    fr: "/corrections/",
    en: "/en/corrections/",
    de: "/de/korrekturen/",
  },
  privacy: {
    fr: "/confidentialite/",
    en: "/en/privacy/",
    de: "/de/datenschutz/",
  },
  legal: {
    fr: "/mentions-legales/",
    en: "/en/legal-notice/",
    de: "/de/impressum/",
  },
  transparency: {
    fr: "/transparence/",
    en: "/en/transparency/",
    de: "/de/transparenz/",
  },
  notFound: {
    fr: "/page-introuvable/",
    en: "/en/page-not-found/",
    de: "/de/seite-nicht-gefunden/",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type StaticRouteId = keyof typeof STATIC_ROUTES;

export const ARTICLE_ROUTES = {
  "ACC-001": {
    brand: "accessoires",
    slug: {
      fr: "accessoires-pelle-pizza",
      en: "pizza-peel-guide",
      de: "pizzaschieber-ratgeber",
    },
  },
  "ACC-002": {
    brand: "accessoires",
    slug: {
      fr: "accessoires-ciseaux-pizza",
      en: "pizza-scissors-guide",
      de: "pizzascheren-ratgeber",
    },
  },
  "ACC-003": {
    brand: "accessoires",
    slug: {
      fr: "accessoires-thermometre-infrarouge",
      en: "infrared-thermometer-guide",
      de: "infrarotthermometer-ratgeber",
    },
  },
  "ACC-004": {
    brand: "accessoires",
    slug: {
      fr: "accessoires-bacs-patons",
      en: "dough-boxes-guide",
      de: "teigboxen-ratgeber",
    },
  },
  "FOUR-001": {
    brand: "fours",
    slug: { fr: "sage-pizzaiolo-bpz820", en: "sage-pizzaiolo-bpz820", de: "sage-pizzaiolo-bpz820" },
  },
  "FOUR-002": {
    brand: "fours",
    slug: { fr: "cuisinart-cpz120e", en: "cuisinart-cpz120e", de: "cuisinart-cpz120e" },
  },
  "FOUR-003": {
    brand: "fours",
    slug: { fr: "g3-ferrari-delizia-g10006", en: "g3-ferrari-delizia-g10006", de: "g3-ferrari-delizia-g10006" },
  },
  "FOUR-004": {
    brand: "fours",
    slug: { fr: "ninja-woodfire-oo101eu", en: "ninja-woodfire-oo101eu", de: "ninja-woodfire-oo101eu" },
  },
  "FOUR-005": {
    brand: "fours",
    slug: { fr: "witt-etna-rotante", en: "witt-etna-rotante", de: "witt-etna-rotante" },
  },
  "GOZNEY-001": {
    brand: "gozney",
    slug: { fr: "arc-xl", en: "arc-xl", de: "arc-xl" },
  },
  "GOZNEY-002": {
    brand: "gozney",
    slug: {
      fr: "arc-lite-ou-tread",
      en: "arc-lite-or-tread",
      de: "arc-lite-oder-tread",
    },
  },
  "GOZNEY-003": {
    brand: "gozney",
    slug: {
      fr: "quel-four-gozney-choisir",
      en: "which-gozney-oven",
      de: "welcher-gozney-ofen",
    },
  },
  "GOZNEY-004": {
    brand: "gozney",
    slug: { fr: "dome-xl-gen-2", en: "dome-xl-gen-2", de: "dome-xl-gen-2" },
  },
  "GOZNEY-005": {
    brand: "gozney",
    slug: { fr: "dome-gen-2", en: "dome-gen-2", de: "dome-gen-2" },
  },
  "GOZNEY-006": {
    brand: "gozney",
    slug: { fr: "arc", en: "arc", de: "arc" },
  },
  "GOZNEY-007": {
    brand: "gozney",
    slug: { fr: "roccbox", en: "roccbox", de: "roccbox" },
  },
  "OONI-001": {
    brand: "ooni",
    slug: {
      fr: "quel-four-ooni-choisir",
      en: "which-ooni-oven",
      de: "welcher-ooni-ofen",
    },
  },
  "OONI-004": {
    brand: "ooni",
    slug: {
      fr: "gaz-electrique-ou-multicombustible",
      en: "gas-electric-or-multi-fuel",
      de: "gas-elektro-oder-multibrennstoff",
    },
  },
  "OONI-010": {
    brand: "ooni",
    slug: { fr: "koda-2", en: "koda-2", de: "koda-2" },
  },
  "OONI-011": {
    brand: "ooni",
    slug: { fr: "koda-2-pro", en: "koda-2-pro", de: "koda-2-pro" },
  },
  "OONI-012": {
    brand: "ooni",
    slug: { fr: "koda-2-max", en: "koda-2-max", de: "koda-2-max" },
  },
  "OONI-013": {
    brand: "ooni",
    slug: { fr: "koda-12", en: "koda-12", de: "koda-12" },
  },
  "OONI-014": {
    brand: "ooni",
    slug: { fr: "koda-16", en: "koda-16", de: "koda-16" },
  },
  "OONI-015": {
    brand: "ooni",
    slug: { fr: "karu-2", en: "karu-2", de: "karu-2" },
  },
  "OONI-016": {
    brand: "ooni",
    slug: { fr: "karu-2-pro", en: "karu-2-pro", de: "karu-2-pro" },
  },
  "OONI-017": {
    brand: "ooni",
    slug: { fr: "karu-12", en: "karu-12", de: "karu-12" },
  },
  "OONI-018": {
    brand: "ooni",
    slug: { fr: "volt-2", en: "volt-2", de: "volt-2" },
  },
  "OONI-040": {
    brand: "ooni",
    slug: {
      fr: "halo-core-ou-halo-pro",
      en: "halo-core-or-halo-pro",
      de: "halo-core-oder-halo-pro",
    },
  },
} as const satisfies Record<string, {
  brand: "ooni" | "gozney" | "accessoires" | "fours";
  slug: Record<Locale, string>;
}>;

export type ArticleId = keyof typeof ARTICLE_ROUTES;
export type ArticleBrand = (typeof ARTICLE_ROUTES)[ArticleId]["brand"];

const ARTICLE_BRAND_SEGMENTS = {
  ooni: { fr: "ooni", en: "ooni", de: "ooni" },
  gozney: { fr: "gozney", en: "gozney", de: "gozney" },
  accessoires: {
    fr: "accessoires-pizza",
    en: "pizza-accessories",
    de: "pizzazubehoer",
  },
  fours: { fr: "fours-a-pizza", en: "pizza-ovens", de: "pizzaoefen" },
} as const satisfies Record<ArticleBrand, Record<Locale, string>>;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localeFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "en" || firstSegment === "de" ? firstSegment : DEFAULT_LOCALE;
}

export function staticRoute(routeId: StaticRouteId, locale: Locale): string {
  return STATIC_ROUTES[routeId][locale];
}

export function staticAlternates(routeId: StaticRouteId): Record<Locale, string> {
  return { ...STATIC_ROUTES[routeId] };
}

export function staticRouteIdFromPath(pathname: string): StaticRouteId | undefined {
  return (Object.entries(STATIC_ROUTES) as [StaticRouteId, Record<Locale, string>][])
    .find(([, paths]) => Object.values(paths).includes(pathname))?.[0];
}

export function articleRoute(articleId: ArticleId, locale: Locale): string {
  const route = ARTICLE_ROUTES[articleId];
  return `/${locale === DEFAULT_LOCALE ? "" : `${locale}/`}${ARTICLE_BRAND_SEGMENTS[route.brand][locale]}/${route.slug[locale]}/`;
}

export function articleAlternates(articleId: ArticleId): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, articleRoute(articleId, locale)]),
  ) as Record<Locale, string>;
}

export function articleIdFromPath(pathname: string): ArticleId | undefined {
  return (Object.keys(ARTICLE_ROUTES) as ArticleId[])
    .find((articleId) => LOCALES.some((locale) => articleRoute(articleId, locale) === pathname));
}

export function feedPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/rss.xml" : `/${locale}/rss.xml`;
}

export function llmsPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/llms.txt" : `/${locale}/llms.txt`;
}

export function alternatePathsForCurrentPath(pathname: string): Record<Locale, string> {
  const staticId = staticRouteIdFromPath(pathname);
  if (staticId) return staticAlternates(staticId);

  const articleId = articleIdFromPath(pathname);
  if (articleId) return articleAlternates(articleId);

  throw new Error(`Chemin absent du manifeste trilingue : ${pathname}`);
}
