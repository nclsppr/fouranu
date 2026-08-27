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
      url: "/auteurs/nicolas/",
      role: "Fondateur de Four à Nu",
      description:
        "Fondateur de Four à Nu, Nicolas cuisine surtout des pizzas napolitaines au Gozney Dome (Gen 2) et regarde autant les gestes que le résultat.",
      summary:
        "Nicolas cuisine principalement des pizzas napolitaines avec un Gozney Dome (Gen 2). Il regarde autant le résultat dans l’assiette que la place, le matériel et l’organisation qu’un four demande réellement.",
      biography: [
        "Nicolas a créé Four à Nu pour aider à choisir un four à partir de la façon dont il sera réellement utilisé, pas de la longueur de sa fiche technique.",
        "Autour de son Gozney Dome (Gen 2), il s’intéresse autant à la pâte et à la cuisson qu’aux gestes, à l’espace disponible et au matériel nécessaire pour que la soirée reste simple.",
      ],
    },
    florian: {
      name: "Florian",
      url: "/auteurs/florian/",
      role: "Auteur et apprenti en CAP Cuisine",
      description:
        "Apprenti en CAP Cuisine, Florian veut devenir maître pizzaiolo et nourrit sa curiosité en essayant des fours et en parcourant les pizzerias italiennes.",
      summary:
        "Florian est apprenti en CAP Cuisine. Il s’entraîne avec l’ambition de devenir maître pizzaiolo, a déjà essayé de nombreux fours et passe ses vacances en Italie à écumer les pizzerias.",
      biography: [
        "Florian apprend la cuisine en CAP et travaille ses gestes avec un objectif très clair : devenir maître pizzaiolo.",
        "Il a déjà essayé de nombreux fours dans son parcours personnel et profite de ses vacances en Italie pour découvrir les pizzerias, les styles de pâte et les façons de travailler.",
        "Ce parcours nourrit sa curiosité, mais ne transforme pas les guides actuels en essais Four à Nu : leurs conclusions restent fondées sur les sources citées dans chaque dossier.",
      ],
    },
    magali: {
      name: "Magali",
      url: "/auteurs/magali/",
      role: "Autrice",
      description:
        "Magali aime les pizzas de Detroit et romaines, puis les grandes tablées où elle cuisine pour ses collègues et sa famille.",
      summary:
        "Magali adore les pizzas de Detroit et les pizzas romaines. Elle aime surtout les préparer pour ses collègues et sa famille, lorsque la pizza devient un repas à partager.",
      biography: [
        "Magali a un faible très net pour les pizzas de Detroit et les pizzas romaines, deux styles qui donnent autant envie de parler de pâte que de cuisson.",
        "Elle aime cuisiner pour ses collègues et sa famille. Dans ses dossiers, elle garde donc en tête les vraies tablées : le nombre de pizzas à sortir, le rythme à tenir et la place que le four prendra une fois les invités partis.",
      ],
    },
  },
} as const;

export const INDEXING_ENABLED =
  import.meta.env.PUBLIC_SITE_INDEXABLE === "true";

export const SITE_SURFACE_UPDATED_AT = "2026-08-25";
export const SITE_HOME_UPDATED_AT = "2026-08-26";
export const SITE_ABOUT_UPDATED_AT = "2026-08-27";
export const SITE_AUTHORS_UPDATED_AT = "2026-08-27";

export const FIXED_INDEXABLE_ROUTES = [
  { path: "/", modified: SITE_HOME_UPDATED_AT },
  { path: "/a-propos/", modified: SITE_ABOUT_UPDATED_AT },
  { path: "/auteurs/florian/", modified: SITE_AUTHORS_UPDATED_AT },
  { path: "/auteurs/magali/", modified: SITE_AUTHORS_UPDATED_AT },
  { path: "/auteurs/nicolas/", modified: SITE_AUTHORS_UPDATED_AT },
  { path: "/auteurs/redaction-four-a-nu/", modified: SITE_AUTHORS_UPDATED_AT },
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
