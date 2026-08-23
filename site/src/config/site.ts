export const SITE = {
  name: "Four à Nu",
  alternateName: "Four a Nu",
  url: "https://fouranu.com",
  locale: "fr_FR",
  language: "fr",
  title: "Four à Nu | Le guide des fours à pizza",
  description:
    "Comparatifs documentés, guides d'achat et dossiers Ooni pour choisir un four à pizza, ses accessoires et réussir ses cuissons napolitaines.",
  shortDescription: "Fours à pizza, sources à l'appui",
  socialImage: "/og/four-a-nu-default.png",
} as const;

export const INDEXING_ENABLED =
  import.meta.env.PUBLIC_SITE_INDEXABLE === "true";

export const FIXED_INDEXABLE_ROUTES = [
  { path: "/", modified: "2026-08-23" },
  { path: "/methode/", modified: "2026-08-23" },
] as const;

export const PRIMARY_NAV = [
  { href: "/fours-a-pizza/", label: "Fours à pizza" },
  { href: "/ooni/", label: "Ooni" },
  { href: "/methode/", label: "Méthode" },
] as const;
