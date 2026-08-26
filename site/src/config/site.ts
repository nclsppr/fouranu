export const SITE = {
  name: "Four à Nu",
  alternateName: "Four a Nu",
  url: "https://fouranu.com",
  locale: "fr_FR",
  language: "fr",
  title: "Four à Nu | Fours à pizza, accessoires et pétrins",
  description:
    "Four à Nu veut tester tous les fours à pizza vendus en France, en commençant par les marques de référence, puis les accessoires utiles et différents pétrins.",
  shortDescription: "Fours à pizza, accessoires et pétrins, sources à l'appui",
  socialImage: "/og/four-a-nu-default-v2.jpg",
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

export const SITE_SURFACE_UPDATED_AT = "2026-08-25";
export const SITE_HOME_UPDATED_AT = "2026-08-26";
export const SITE_ABOUT_UPDATED_AT = "2026-08-26";

export const FIXED_INDEXABLE_ROUTES = [
  { path: "/", modified: SITE_HOME_UPDATED_AT },
  { path: "/a-propos/", modified: SITE_ABOUT_UPDATED_AT },
  { path: "/auteurs/redaction-four-a-nu/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/contact/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/corrections/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/confidentialite/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/fours-a-pizza/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/gozney/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/methode/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/mentions-legales/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/ooni/", modified: SITE_SURFACE_UPDATED_AT },
  { path: "/transparence/", modified: SITE_SURFACE_UPDATED_AT },
] as const;

export const PRIMARY_NAV = [
  { href: "/fours-a-pizza/", label: "Guides" },
  { href: "/ooni/", label: "Ooni" },
  { href: "/gozney/", label: "Gozney" },
  { href: "/methode/", label: "Méthode" },
  { href: "/a-propos/", label: "À propos" },
] as const;
