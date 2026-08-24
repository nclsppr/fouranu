export const SITE = {
  name: "Four à Nu",
  alternateName: "Four a Nu",
  url: "https://fouranu.com",
  locale: "fr_FR",
  language: "fr",
  title: "Four à Nu | Le guide des fours à pizza",
  description:
    "Comparatifs documentés, guides d'achat et dossiers Ooni ou Gozney pour choisir un four à pizza et le matériel de préparation adapté.",
  shortDescription: "Fours à pizza, sources à l'appui",
  socialImage: "/og/four-a-nu-default.png",
  editorialAuthor: {
    name: "Nicolas, Florian & Magali",
    url: "/auteurs/redaction-four-a-nu/",
  },
  authors: {
    nicolas: {
      name: "Nicolas",
      url: "/auteurs/redaction-four-a-nu/#nicolas",
    },
    florian: {
      name: "Florian",
      url: "/auteurs/redaction-four-a-nu/#florian",
    },
    magali: {
      name: "Magali",
      url: "/auteurs/redaction-four-a-nu/#magali",
    },
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
  { path: "/gozney/", modified: "2026-08-24" },
  { path: "/methode/", modified: "2026-08-24" },
  { path: "/mentions-legales/", modified: "2026-08-24" },
  { path: "/ooni/", modified: "2026-08-24" },
  { path: "/transparence/", modified: "2026-08-24" },
] as const;

export const PRIMARY_NAV = [
  { href: "/fours-a-pizza/", label: "Guides" },
  { href: "/ooni/", label: "Ooni" },
  { href: "/gozney/", label: "Gozney" },
  { href: "/methode/", label: "Méthode" },
  { href: "/a-propos/", label: "À propos" },
] as const;
