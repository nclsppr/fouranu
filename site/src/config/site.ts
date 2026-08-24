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
  editorialAuthor: {
    name: "Rédaction Four à Nu",
    url: "/auteurs/redaction-four-a-nu/",
  },
} as const;

export const INDEXING_ENABLED =
  import.meta.env.PUBLIC_SITE_INDEXABLE === "true";

export const FIXED_INDEXABLE_ROUTES = [
  { path: "/", modified: "2026-08-24" },
  { path: "/a-propos/", modified: "2026-08-24" },
  { path: "/auteurs/redaction-four-a-nu/", modified: "2026-08-24" },
  { path: "/contact/", modified: "2026-08-24" },
  { path: "/corrections/", modified: "2026-08-24" },
  { path: "/confidentialite/", modified: "2026-08-24" },
  { path: "/fours-a-pizza/", modified: "2026-08-24" },
  { path: "/methode/", modified: "2026-08-24" },
  { path: "/mentions-legales/", modified: "2026-08-24" },
  { path: "/ooni/", modified: "2026-08-24" },
  { path: "/transparence/", modified: "2026-08-24" },
] as const;

export const PRIMARY_NAV = [
  { href: "/fours-a-pizza/", label: "Guides" },
  { href: "/ooni/", label: "Ooni" },
  { href: "/methode/", label: "Méthode" },
  { href: "/a-propos/", label: "À propos" },
] as const;
