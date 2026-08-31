import { SITE } from "@/config/site";
import {
  LOCALE_INFO,
  type Locale,
  type StaticRouteId,
  staticRoute,
} from "@/i18n/config";

const AUTHOR_ROUTE_IDS = {
  nicolas: "authorNicolas",
  florian: "authorFlorian",
  magali: "authorMagali",
} as const satisfies Record<keyof typeof SITE.authors, StaticRouteId>;

export const SITE_COPY = {
  fr: {
    title: SITE.title,
    description: SITE.description,
    shortDescription: SITE.shortDescription,
    editorialAuthorName: SITE.editorialAuthor.name,
  },
  en: {
    title: "Four à Nu | Pizza ovens, accessories and dough mixers",
    description:
      "Four à Nu aims to test every pizza oven sold in France, starting with leading brands, then useful accessories and dough mixers.",
    shortDescription: "Pizza ovens, accessories and dough mixers, backed by sources",
    editorialAuthorName: "Nicolas, Florian & Magali",
  },
  de: {
    title: "Four à Nu | Pizzaöfen, Zubehör und Teigknetmaschinen",
    description:
      "Four à Nu will nach und nach alle in Frankreich verkauften Pizzaöfen testen, beginnend mit etablierten Marken, sinnvollem Zubehör und Teigknetmaschinen.",
    shortDescription: "Pizzaöfen, Zubehör und Teigknetmaschinen, mit nachvollziehbaren Quellen",
    editorialAuthorName: "Nicolas, Florian & Magali",
  },
} as const;

export const AUTHOR_COPY = {
  fr: {
    nicolas: {
      role: SITE.authors.nicolas.role,
      description: SITE.authors.nicolas.description,
      summary: SITE.authors.nicolas.summary,
      biography: SITE.authors.nicolas.biography,
      portraitAlt: SITE.authors.nicolas.portrait.alt,
    },
    florian: {
      role: SITE.authors.florian.role,
      description: SITE.authors.florian.description,
      summary: SITE.authors.florian.summary,
      biography: SITE.authors.florian.biography,
      portraitAlt: SITE.authors.florian.portrait.alt,
    },
    magali: {
      role: SITE.authors.magali.role,
      description: SITE.authors.magali.description,
      summary: SITE.authors.magali.summary,
      biography: SITE.authors.magali.biography,
      portraitAlt: SITE.authors.magali.portrait.alt,
    },
  },
  en: {
    nicolas: {
      role: "Founder of Four à Nu",
      description:
        "Founder of Four à Nu, Nicolas mainly cooks Neapolitan pizza in a Gozney Dome (Gen 2) and pays as much attention to the process as to the result.",
      summary:
        "Nicolas mainly cooks Neapolitan pizza with a Gozney Dome (Gen 2). He looks at the result on the plate, but also at the space, equipment and organisation an oven genuinely requires.",
      biography: [
        "Nicolas created Four à Nu to help people choose an oven according to how they will actually use it, rather than the length of its specification sheet.",
        "Around his Gozney Dome (Gen 2), he is as interested in dough and baking as he is in technique, available space and the equipment needed to keep an evening simple.",
      ],
      portraitAlt: "Portrait of Nicolas.",
    },
    florian: {
      role: "Writer and culinary apprentice",
      description:
        "A culinary apprentice, Florian wants to become a master pizzaiolo and feeds his curiosity by trying ovens and visiting pizzerias across Italy.",
      summary:
        "Florian is training as a cook. He practises with the clear ambition of becoming a master pizzaiolo, has already tried many ovens and spends his holidays exploring pizzerias in Italy.",
      biography: [
        "Florian is learning the craft of cooking and honing his technique with one clear goal: to become a master pizzaiolo.",
        "He has already tried many ovens in his personal journey and uses his holidays in Italy to discover pizzerias, dough styles and different ways of working.",
        "That experience feeds his curiosity, but it does not turn the current guides into Four à Nu tests: their conclusions remain grounded in the sources cited in each article.",
      ],
      portraitAlt: "Portrait of Florian.",
    },
    magali: {
      role: "Writer",
      description:
        "Magali loves Detroit-style and Roman pizza, as well as the big shared meals where she cooks for colleagues and family.",
      summary:
        "Magali loves Detroit-style and Roman pizza. Above all, she enjoys making it for colleagues and family, when pizza becomes a meal to share.",
      biography: [
        "Magali has a definite soft spot for Detroit-style and Roman pizza, two styles that make the dough as interesting as the bake.",
        "She likes cooking for colleagues and family. In her articles, she therefore keeps real gatherings in mind: how many pizzas must be served, the pace to maintain and the space the oven will occupy once the guests have gone.",
      ],
      portraitAlt: "Portrait of Magali.",
    },
  },
  de: {
    nicolas: {
      role: "Gründer von Four à Nu",
      description:
        "Als Gründer von Four à Nu backt Nicolas vor allem neapolitanische Pizza im Gozney Dome (Gen 2) und achtet genauso auf die Handgriffe wie auf das Ergebnis.",
      summary:
        "Nicolas backt hauptsächlich neapolitanische Pizza mit einem Gozney Dome (Gen 2). Ihn interessieren sowohl das Ergebnis auf dem Teller als auch der Platz, die Ausstattung und die Organisation, die ein Ofen wirklich verlangt.",
      biography: [
        "Nicolas hat Four à Nu gegründet, damit die Wahl eines Ofens von seiner tatsächlichen Nutzung ausgeht und nicht von der Länge seines Datenblatts.",
        "Rund um seinen Gozney Dome (Gen 2) interessieren ihn Teig und Backen ebenso wie die Handgriffe, der verfügbare Platz und die Ausstattung, die einen Pizzaabend unkompliziert machen.",
      ],
      portraitAlt: "Porträt von Nicolas.",
    },
    florian: {
      role: "Autor und Koch in Ausbildung",
      description:
        "Florian absolviert eine Kochausbildung, möchte Pizzaiolo-Meister werden und vertieft seine Neugier, indem er Öfen ausprobiert und Pizzerien in Italien besucht.",
      summary:
        "Florian ist Koch in Ausbildung. Er übt mit dem klaren Ziel, Pizzaiolo-Meister zu werden, hat bereits viele Öfen ausprobiert und nutzt seine Ferien, um Pizzerien in Italien zu entdecken.",
      biography: [
        "Florian lernt das Kochhandwerk und verfeinert seine Abläufe mit einem klaren Ziel: Pizzaiolo-Meister zu werden.",
        "Auf seinem persönlichen Weg hat er bereits viele Öfen ausprobiert. In seinen Ferien besucht er Pizzerien in Italien und entdeckt unterschiedliche Teige und Arbeitsweisen.",
        "Diese Erfahrung nährt seine Neugier, macht die heutigen Ratgeber aber nicht zu Tests von Four à Nu: Ihre Schlussfolgerungen beruhen weiterhin auf den im jeweiligen Artikel genannten Quellen.",
      ],
      portraitAlt: "Porträt von Florian.",
    },
    magali: {
      role: "Autorin",
      description:
        "Magali mag Detroit- und römische Pizza sowie große gemeinsame Essen, bei denen sie für Kolleginnen, Kollegen und Familie kocht.",
      summary:
        "Magali liebt Detroit- und römische Pizza. Besonders gern bereitet sie sie für Kolleginnen, Kollegen und ihre Familie zu, wenn Pizza zu einem gemeinsamen Essen wird.",
      biography: [
        "Magali hat eine klare Vorliebe für Detroit- und römische Pizza. Bei beiden Stilen sind Teig und Backen gleichermaßen spannend.",
        "Sie kocht gern für Kolleginnen, Kollegen und Familie. Deshalb denkt sie in ihren Artikeln an echte Runden: wie viele Pizzen auf den Tisch müssen, welches Tempo nötig ist und wie viel Platz der Ofen nach dem Essen beansprucht.",
      ],
      portraitAlt: "Porträt von Magali.",
    },
  },
} as const;

export function localizedSite(locale: Locale) {
  const localizeAuthor = <Key extends keyof typeof SITE.authors>(authorId: Key) => {
    const author = SITE.authors[authorId];
    const copy = AUTHOR_COPY[locale][authorId];
    return {
      ...author,
      url: staticRoute(AUTHOR_ROUTE_IDS[authorId], locale),
      portrait: { ...author.portrait, alt: copy.portraitAlt },
      role: copy.role,
      description: copy.description,
      summary: copy.summary,
      biography: copy.biography,
    };
  };
  const authors = {
    nicolas: localizeAuthor("nicolas"),
    florian: localizeAuthor("florian"),
    magali: localizeAuthor("magali"),
  };

  return {
    ...SITE,
    ...SITE_COPY[locale],
    locale: LOCALE_INFO[locale].openGraphLocale,
    language: LOCALE_INFO[locale].htmlLanguage,
    editorialAuthor: {
      name: SITE_COPY[locale].editorialAuthorName,
      url: staticRoute("authors", locale),
    },
    authors,
  };
}

export const SHELL_COPY = {
  fr: {
    skipLink: "Aller au contenu",
    homeAria: "Four à Nu, accueil",
    primaryNavAria: "Navigation principale",
    languageNavAria: "Changer de langue",
    switchTo: (language: string) => `Afficher cette page en ${language}`,
    nav: {
      accessories: "Accessoires",
      ovens: "Fours",
      ooni: "Ooni",
      gozney: "Gozney",
      method: "Méthode",
      about: "À propos",
    },
    footerState:
      "Média indépendant. Les données fabricant, mesures publiées et observations tierces restent attribuées à leurs sources.",
    footerNavAria: "Informations éditoriales",
    footerLinks: {
      method: "Méthode",
      corrections: "Corrections",
      transparency: "Transparence",
      privacy: "Confidentialité",
      legal: "Mentions légales",
      contact: "Contact",
      about: "À propos",
    },
    footerLegal: "Média indépendant consacré aux fours à pizza et à leur matériel.",
    footerCreditPrefix: "Édité avec amour du pâton par",
    defaultImageAlt: "Four à Nu, fours à pizza sources à l’appui",
  },
  en: {
    skipLink: "Skip to content",
    homeAria: "Four à Nu, home",
    primaryNavAria: "Main navigation",
    languageNavAria: "Change language",
    switchTo: (language: string) => `View this page in ${language}`,
    nav: {
      accessories: "Accessories",
      ovens: "Ovens",
      ooni: "Ooni",
      gozney: "Gozney",
      method: "Method",
      about: "About",
    },
    footerState:
      "Independent publication. Manufacturer data, published measurements and third-party observations remain attributed to their sources.",
    footerNavAria: "Editorial information",
    footerLinks: {
      method: "Method",
      corrections: "Corrections",
      transparency: "Transparency",
      privacy: "Privacy",
      legal: "Legal notice",
      contact: "Contact",
      about: "About",
    },
    footerLegal: "Independent publication about pizza ovens and their equipment.",
    footerCreditPrefix: "Made with love for dough by",
    defaultImageAlt: "Four à Nu, source-backed pizza oven guidance",
  },
  de: {
    skipLink: "Zum Inhalt springen",
    homeAria: "Four à Nu, Startseite",
    primaryNavAria: "Hauptnavigation",
    languageNavAria: "Sprache wechseln",
    switchTo: (language: string) => `Diese Seite auf ${language} anzeigen`,
    nav: {
      accessories: "Zubehör",
      ovens: "Öfen",
      ooni: "Ooni",
      gozney: "Gozney",
      method: "Methode",
      about: "Über uns",
    },
    footerState:
      "Unabhängiges Medium. Herstellerangaben, veröffentlichte Messungen und Beobachtungen Dritter bleiben ihren Quellen zugeordnet.",
    footerNavAria: "Redaktionelle Informationen",
    footerLinks: {
      method: "Methode",
      corrections: "Korrekturen",
      transparency: "Transparenz",
      privacy: "Datenschutz",
      legal: "Impressum",
      contact: "Kontakt",
      about: "Über uns",
    },
    footerLegal: "Unabhängiges Medium über Pizzaöfen und ihre Ausstattung.",
    footerCreditPrefix: "Mit Liebe zum Teig herausgegeben von",
    defaultImageAlt: "Four à Nu, quellenbasierte Orientierung zu Pizzaöfen",
  },
} as const;

export const ARTICLE_BRAND_LABELS = {
  fr: { ooni: "Ooni", gozney: "Gozney", accessoires: "Accessoires pizza", fours: "Fours à pizza" },
  en: { ooni: "Ooni", gozney: "Gozney", accessoires: "Pizza accessories", fours: "Pizza ovens" },
  de: { ooni: "Ooni", gozney: "Gozney", accessoires: "Pizzazubehör", fours: "Pizzaöfen" },
} as const;

export const ARTICLE_CATEGORY_LABELS = {
  fr: { oven: "Fours à pizza", mixer: "Pétrins", accessoires: "Accessoires pizza" },
  en: { oven: "Pizza ovens", mixer: "Dough mixers", accessoires: "Pizza accessories" },
  de: { oven: "Pizzaöfen", mixer: "Teigknetmaschinen", accessoires: "Pizzazubehör" },
} as const;

export const PROOF_COPY = {
  fr: {
    names: {
      FAB: "Donnée fabricant",
      "T-MES": "Mesure tierce",
      "T-OBS": "Observation tierce",
      "FAN-SYN": "Synthèse Four à Nu",
      "FAN-INF": "Inférence éditoriale Four à Nu",
    },
    labels: {
      FAB: "Annonce",
      "T-MES": "Mesure publiée",
      "T-OBS": "Observation publiée",
      "FAN-SYN": "Synthèse",
      "FAN-INF": "Conclusion",
    },
  },
  en: {
    names: {
      FAB: "Manufacturer data",
      "T-MES": "Third-party measurement",
      "T-OBS": "Third-party observation",
      "FAN-SYN": "Four à Nu synthesis",
      "FAN-INF": "Four à Nu editorial inference",
    },
    labels: {
      FAB: "Claim",
      "T-MES": "Published measurement",
      "T-OBS": "Published observation",
      "FAN-SYN": "Synthesis",
      "FAN-INF": "Conclusion",
    },
  },
  de: {
    names: {
      FAB: "Herstellerangabe",
      "T-MES": "Messung durch Dritte",
      "T-OBS": "Beobachtung durch Dritte",
      "FAN-SYN": "Synthese von Four à Nu",
      "FAN-INF": "Redaktionelle Schlussfolgerung von Four à Nu",
    },
    labels: {
      FAB: "Angabe",
      "T-MES": "Veröffentlichte Messung",
      "T-OBS": "Veröffentlichte Beobachtung",
      "FAN-SYN": "Synthese",
      "FAN-INF": "Schlussfolgerung",
    },
  },
} as const;

export const ARTICLE_COPY = {
  fr: {
    type: { guide: "Guide d'achat", decision: "Comparatif par usage", model: "Analyse de modèle" },
    home: "Accueil",
    by: "Par",
    published: "Publié le",
    updated: "Mis à jour le",
    readingTime: (minutes: number) => `${minutes} min de lecture`,
    factsAria: "Repères éditoriaux",
    category: "Catégorie",
    citedSources: "Sources citées",
    product: "Produit",
    toc: "Dans ce dossier",
    method: "Comment nous travaillons",
    noticeTitle: "Comment lire ce guide",
    notice:
      "L’image d’en-tête illustre le sujet sans prouver les performances des produits. Les promesses du fabricant, les mesures publiées et notre lecture restent séparées ; les conditions et relations commerciales utiles sont précisées dans les sources.",
    sourcesLink: "Voir les sources",
    limitations: "Ce qu’on ne sait pas encore",
    referencePerson: "Personne référente",
    authorNote: (name: string) =>
      `${name} est la personne référente de cette version au sein de la rédaction. Les sources, les conclusions et les limites sont relues ensemble ; toute correction importante reste datée et expliquée.`,
    authorProfile: (name: string) => `Découvrir le parcours de ${name}`,
    corrections: "Consulter la politique de correction",
  },
  en: {
    type: { guide: "Buying guide", decision: "Use-case comparison", model: "Model analysis" },
    home: "Home",
    by: "By",
    published: "Published",
    updated: "Updated",
    readingTime: (minutes: number) => `${minutes} min read`,
    factsAria: "Editorial facts",
    category: "Category",
    citedSources: "Sources cited",
    product: "Product",
    toc: "In this guide",
    method: "How we work",
    noticeTitle: "How to read this guide",
    notice:
      "Manufacturer claims, published measurements and our interpretation remain separate. The French edition contains the authorised editorial imagery; this translation is deliberately text-first where the recorded permission does not cover English publication.",
    sourcesLink: "View sources",
    limitations: "What we do not know yet",
    referencePerson: "Responsible editor",
    authorNote: (name: string) =>
      `${name} is responsible for this version within the editorial team. Sources, conclusions and limitations are reviewed together; every material correction remains dated and explained.`,
    authorProfile: (name: string) => `Read more about ${name}`,
    corrections: "Read our corrections policy",
  },
  de: {
    type: { guide: "Kaufratgeber", decision: "Vergleich nach Nutzung", model: "Modellanalyse" },
    home: "Startseite",
    by: "Von",
    published: "Veröffentlicht am",
    updated: "Aktualisiert am",
    readingTime: (minutes: number) => `${minutes} Min. Lesezeit`,
    factsAria: "Redaktionelle Eckdaten",
    category: "Kategorie",
    citedSources: "Zitierte Quellen",
    product: "Produkt",
    toc: "In diesem Ratgeber",
    method: "So arbeiten wir",
    noticeTitle: "So lesen Sie diesen Ratgeber",
    notice:
      "Herstellerangaben, veröffentlichte Messungen und unsere Einordnung bleiben getrennt. Die französische Fassung enthält die freigegebenen redaktionellen Bilder; diese Übersetzung bleibt bewusst textbasiert, wenn die dokumentierte Freigabe keine deutschsprachige Veröffentlichung abdeckt.",
    sourcesLink: "Quellen ansehen",
    limitations: "Was wir noch nicht wissen",
    referencePerson: "Verantwortliche Person",
    authorNote: (name: string) =>
      `${name} ist innerhalb der Redaktion für diese Fassung verantwortlich. Quellen, Schlussfolgerungen und Grenzen werden gemeinsam geprüft; jede wesentliche Korrektur bleibt datiert und erklärt.`,
    authorProfile: (name: string) => `Mehr über ${name}`,
    corrections: "Korrekturgrundsätze ansehen",
  },
} as const;
