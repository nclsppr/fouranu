import type { ArticleCategory } from "@/data/article-taxonomy";
import type { ArticleId, Locale } from "@/i18n/config";

type ChoiceCriterion = {
  hash: "lieu" | "energie" | "debit" | "cout";
  title: string;
  detail: string;
};

type HomeCopy = {
  socialTitle: string;
  organizationDescription: string;
  requiredError: string;
  hero: {
    title: string;
    mission: string;
    criteriaAria: string;
    criteria: readonly [string, string, string, string];
    action: string;
  };
  sideStories: {
    energyMeta: string;
    energyAction: string;
    choiceMeta: string;
    choiceTitle: string;
    choiceSummary: string;
    choiceAction: string;
  };
  corpus: {
    aria: string;
    guides: string;
    evidence: string;
    noRating: string;
    usageFirst: string;
    lastUpdate: string;
  };
  accessories: {
    kicker: string;
    title: string;
    summary: string;
    action: string;
    navAria: string;
    guideType: string;
    labels: Record<"ACC-001" | "ACC-002" | "ACC-003" | "ACC-004", string>;
  };
  newDossiers: {
    kicker: string;
    title: string;
    summary: string;
    read: string;
  };
  featured: {
    title: string;
    seeAll: string;
    cardType: string;
    read: string;
  };
  choice: {
    kicker: string;
    title: string;
    summary: string;
    action: string;
    navAria: string;
    criteria: readonly [ChoiceCriterion, ChoiceCriterion, ChoiceCriterion, ChoiceCriterion];
  };
  reading: {
    title: string;
    all: string;
  };
  rss: {
    kicker: string;
    title: string;
    summary: string;
    action: string;
    note: string;
  };
  method: {
    kicker: string;
    title: string;
    action: string;
    steps: readonly [
      { title: string; summary: string },
      { title: string; summary: string },
      { title: string; summary: string },
    ];
    trustAria: string;
    editorialTeam: string;
    method: string;
    transparency: string;
    corrections: string;
  };
  common: {
    by: string;
    read: string;
  };
  categoryLabels: Record<ArticleCategory, string>;
};

export const HOME_COPY = {
  fr: {
    socialTitle: "Le bon four à pizza pour votre espace et votre budget",
    organizationDescription: "Média indépendant d’aide à l’achat : comparatifs de fours à pizza, choix des accessoires et budget complet à partir de sources attribuées.",
    requiredError: "Les dossiers mis en avant sur l'accueil sont requis.",
    hero: {
      title: "Le bon four à pizza pour votre espace et votre budget.",
      mission:
        "Deux choix adaptés à vos envies, les compromis à connaître et le matériel à prévoir. Nos comparatifs rapprochent les données fabricant et les observations publiées pour vous aider à décider.",
      criteriaAria: "Les premiers critères du guide",
      criteria: ["Lieu", "Énergie", "Format", "Poids"],
      action: "Trouver mon four",
    },
    sideStories: {
      energyMeta: "Comparatif par usage · 01",
      energyAction: "Comparer les énergies",
      choiceMeta: "Guide de choix · 02",
      choiceTitle: "Quel four selon votre espace et votre façon de cuire\u00a0?",
      choiceSummary:
        "Commencez par ce qui est possible chez vous. La marque et le chrono viennent après.",
      choiceAction: "Partir de votre usage",
    },
    corpus: {
      aria: "Repères Four à Nu",
      guides: "guides disponibles",
      evidence: "repères sourcés",
      noRating: "Sans note",
      usageFirst: "les usages comptent davantage",
      lastUpdate: "dernière mise à jour",
    },
    accessories: {
      kicker: "Nouveau · Accessoires pizza",
      title: "Les bons outils autour du four.",
      summary:
        "Une pelle à la bonne largeur, une pierre vraiment chaude et des pâtons qui ne collent pas changent davantage la soirée qu’un gadget de plus. Voici nos premiers guides pour choisir sans acheter au hasard.",
      action: "Ouvrir le guide des accessoires",
      navAria: "Guides des accessoires pizza",
      guideType: "Guide pratique",
      labels: {
        "ACC-001": "Choisir sa pelle",
        "ACC-002": "Choisir ses ciseaux",
        "ACC-003": "Mesurer la pierre",
        "ACC-004": "Faire pousser les pâtons",
      },
    },
    newDossiers: {
      kicker: "Nouveaux guides",
      title: "Toute la gamme Gozney, sans vous noyer dans le catalogue.",
      summary:
        "Commencez par le guide complet, puis ouvrez seulement le dossier du format qui correspond à votre place, vos pizzas et votre budget.",
      read: "Lire",
    },
    featured: {
      title: "Choisir un modèle",
      seeAll: "Voir les neuf modèles Ooni",
      cardType: "Guide d'achat",
      read: "Lire",
    },
    choice: {
      kicker: "Guide d'achat",
      title: "Quatre questions pour réduire la liste.",
      summary:
        "Où pouvez-vous cuire et avec quelle énergie ? Le nombre de pizzas et le budget total départagent ensuite les modèles qui restent.",
      action: "Ouvrir le guide de choix",
      navAria: "Choisir un four à pizza par contrainte",
      criteria: [
        { hash: "lieu", title: "Lieu", detail: "Intérieur, balcon, terrasse ou jardin" },
        { hash: "energie", title: "Énergie", detail: "Électrique, gaz, bois ou charbon" },
        { hash: "debit", title: "Rythme", detail: "Une pizza à la fois ou une série pour les invités" },
        { hash: "cout", title: "Budget total", detail: "Four, table, pelle, énergie et entretien" },
      ],
    },
    reading: {
      title: "À parcourir ensuite",
      all: "Tous les dossiers",
    },
    rss: {
      kicker: "Suivre Four à Nu",
      title: "Les nouveaux dossiers, sans boîte mail à remplir.",
      summary:
        "Le flux RSS publie les nouveaux guides dès qu’ils sont prêts. Aucun formulaire, aucune promesse de fréquence.",
      action: "Ouvrir le flux RSS",
      note: "Compatible avec votre lecteur RSS habituel.",
    },
    method: {
      kicker: "La méthode Four à Nu",
      title: "Ce qu'annonce une marque n'est pas une mesure.",
      action: "Voir comment nous vérifions",
      steps: [
        {
          title: "Nous attribuons chaque chiffre.",
          summary: "Une dimension ou une fonction annoncée renvoie à la marque qui la publie.",
        },
        {
          title: "Nous gardons le contexte.",
          summary: "La durée, la météo et la façon de mesurer restent visibles lorsqu’elles comptent.",
        },
        {
          title: "Une conclusion reste une conclusion.",
          summary: "Nous expliquons notre choix et ce que les sources ne permettent pas d’affirmer.",
        },
      ],
      trustAria: "Pages de confiance",
      editorialTeam: "La rédaction",
      method: "La méthode",
      transparency: "La transparence commerciale",
      corrections: "Les corrections",
    },
    common: { by: "Par", read: "Lire" },
    categoryLabels: {
      oven: "Fours à pizza",
      mixer: "Pétrins",
      accessoires: "Accessoires pizza",
    },
  },
  en: {
    socialTitle: "The right pizza oven for your space and budget",
    organizationDescription: "Independent buying advice: pizza oven comparisons, accessory choices and complete setup budgets based on attributed sources.",
    requiredError: "The featured guides on the home page are required.",
    hero: {
      title: "The right pizza oven for your space and budget.",
      mission:
        "Two choices to suit your needs, the trade-offs to understand and the equipment to plan for. Our comparisons bring together manufacturer data and published observations to help you decide.",
      criteriaAria: "The guide’s first criteria",
      criteria: ["Location", "Energy", "Size", "Weight"],
      action: "Find my oven",
    },
    sideStories: {
      energyMeta: "Comparison by use · 01",
      energyAction: "Compare energy sources",
      choiceMeta: "Choosing guide · 02",
      choiceTitle: "Which oven suits your space and the way you bake?",
      choiceSummary:
        "Start with what is possible where you live. The brand and the stopwatch come later.",
      choiceAction: "Start with your use",
    },
    corpus: {
      aria: "Four à Nu reference points",
      guides: "guides available",
      evidence: "source-backed reference points",
      noRating: "No rating",
      usageFirst: "how you use it matters more",
      lastUpdate: "last updated",
    },
    accessories: {
      kicker: "New · Pizza accessories",
      title: "The right tools around the oven.",
      summary:
        "A peel of the right width, a properly hot stone and dough balls that do not stick make more difference to the evening than one more gadget. Here are our first guides to help you choose without buying at random.",
      action: "Open the accessories guide",
      navAria: "Pizza accessory guides",
      guideType: "Practical guide",
      labels: {
        "ACC-001": "Choose your peel",
        "ACC-002": "Choose your scissors",
        "ACC-003": "Measure the stone",
        "ACC-004": "Proof your dough balls",
      },
    },
    newDossiers: {
      kicker: "New guides",
      title: "The entire Gozney range, without drowning in the catalogue.",
      summary:
        "Start with the complete guide, then open only the page for the size that fits your space, your pizzas and your budget.",
      read: "Read",
    },
    featured: {
      title: "Choose a model",
      seeAll: "See all nine Ooni models",
      cardType: "Buying guide",
      read: "Read",
    },
    choice: {
      kicker: "Buying guide",
      title: "Four questions to shorten the list.",
      summary:
        "Where can you bake, and with which energy source? The number of pizzas and the total budget then separate the models that remain.",
      action: "Open the choosing guide",
      navAria: "Choose a pizza oven by constraint",
      criteria: [
        { hash: "lieu", title: "Location", detail: "Indoors, balcony, terrace or garden" },
        { hash: "energie", title: "Energy", detail: "Electricity, gas, wood or charcoal" },
        { hash: "debit", title: "Pace", detail: "One pizza at a time or a run for guests" },
        { hash: "cout", title: "Total budget", detail: "Oven, table, peel, energy and maintenance" },
      ],
    },
    reading: {
      title: "Read next",
      all: "All guides",
    },
    rss: {
      kicker: "Follow Four à Nu",
      title: "New guides, without another email form.",
      summary:
        "The RSS feed publishes new guides as soon as they are ready. No form and no promise of a schedule.",
      action: "Open the RSS feed",
      note: "Compatible with your usual RSS reader.",
    },
    method: {
      kicker: "The Four à Nu method",
      title: "What a brand states is not a measurement.",
      action: "See how we verify",
      steps: [
        {
          title: "We attribute every figure.",
          summary: "A stated dimension or feature points back to the brand that publishes it.",
        },
        {
          title: "We keep the context.",
          summary: "Duration, weather and the way something was measured remain visible when they matter.",
        },
        {
          title: "A conclusion remains a conclusion.",
          summary: "We explain our choice and what the sources do not allow us to claim.",
        },
      ],
      trustAria: "Trust pages",
      editorialTeam: "The editorial team",
      method: "The method",
      transparency: "Commercial transparency",
      corrections: "Corrections",
    },
    common: { by: "By", read: "Read" },
    categoryLabels: {
      oven: "Pizza ovens",
      mixer: "Dough mixers",
      accessoires: "Pizza accessories",
    },
  },
  de: {
    socialTitle: "Der passende Pizzaofen für Ihren Platz und Ihr Budget",
    organizationDescription: "Unabhängige Kaufberatung: Pizzaöfen vergleichen, Zubehör wählen und das Gesamtbudget anhand nachvollziehbarer Quellen planen.",
    requiredError: "Die auf der Startseite hervorgehobenen Ratgeber sind erforderlich.",
    hero: {
      title: "Der passende Pizzaofen für Ihren Platz und Ihr Budget.",
      mission:
        "Zwei Optionen für Ihre Bedürfnisse, die wichtigsten Kompromisse und die nötige Ausstattung. Unsere Vergleiche verbinden Herstellerangaben mit veröffentlichten Beobachtungen, damit Sie sich entscheiden können.",
      criteriaAria: "Die ersten Kriterien des Ratgebers",
      criteria: ["Ort", "Energie", "Format", "Gewicht"],
      action: "Meinen Ofen finden",
    },
    sideStories: {
      energyMeta: "Vergleich nach Nutzung · 01",
      energyAction: "Energiearten vergleichen",
      choiceMeta: "Auswahlratgeber · 02",
      choiceTitle: "Welcher Ofen passt zu Ihrem Platz und Ihrer Art zu backen?",
      choiceSummary:
        "Beginnen Sie mit dem, was bei Ihnen möglich ist. Marke und Stoppuhr kommen danach.",
      choiceAction: "Von Ihrer Nutzung ausgehen",
    },
    corpus: {
      aria: "Orientierungspunkte von Four à Nu",
      guides: "verfügbare Ratgeber",
      evidence: "belegte Anhaltspunkte",
      noRating: "Ohne Note",
      usageFirst: "die Nutzung zählt mehr",
      lastUpdate: "zuletzt aktualisiert",
    },
    accessories: {
      kicker: "Neu · Pizzazubehör",
      title: "Die richtigen Werkzeuge rund um den Ofen.",
      summary:
        "Ein Schieber in der richtigen Breite, ein wirklich heißer Stein und Teiglinge, die nicht kleben, verändern den Abend stärker als ein weiteres Gerät. Hier sind unsere ersten Ratgeber, damit Sie gezielt statt auf gut Glück wählen.",
      action: "Zubehör-Ratgeber öffnen",
      navAria: "Ratgeber für Pizzazubehör",
      guideType: "Praxisratgeber",
      labels: {
        "ACC-001": "Pizzaschieber wählen",
        "ACC-002": "Pizzaschere wählen",
        "ACC-003": "Steintemperatur messen",
        "ACC-004": "Teiglinge gehen lassen",
      },
    },
    newDossiers: {
      kicker: "Neue Ratgeber",
      title: "Das gesamte Gozney-Sortiment, ohne im Katalog unterzugehen.",
      summary:
        "Beginnen Sie mit dem vollständigen Ratgeber und öffnen Sie danach nur die Seite für das Format, das zu Ihrem Platz, Ihren Pizzen und Ihrem Budget passt.",
      read: "Lesen",
    },
    featured: {
      title: "Ein Modell wählen",
      seeAll: "Alle neun Ooni-Modelle ansehen",
      cardType: "Kaufratgeber",
      read: "Lesen",
    },
    choice: {
      kicker: "Kaufratgeber",
      title: "Vier Fragen, um die Liste zu verkürzen.",
      summary:
        "Wo können Sie backen und mit welcher Energie? Die Zahl der Pizzen und das Gesamtbudget entscheiden anschließend zwischen den übrigen Modellen.",
      action: "Auswahlratgeber öffnen",
      navAria: "Pizzaofen nach Einschränkung auswählen",
      criteria: [
        { hash: "lieu", title: "Ort", detail: "Innenraum, Balkon, Terrasse oder Garten" },
        { hash: "energie", title: "Energie", detail: "Strom, Gas, Holz oder Holzkohle" },
        { hash: "debit", title: "Tempo", detail: "Eine Pizza nach der anderen oder eine Serie für Gäste" },
        { hash: "cout", title: "Gesamtbudget", detail: "Ofen, Tisch, Schieber, Energie und Pflege" },
      ],
    },
    reading: {
      title: "Danach weiterlesen",
      all: "Alle Ratgeber",
    },
    rss: {
      kicker: "Four à Nu folgen",
      title: "Neue Ratgeber, ohne ein E-Mail-Formular auszufüllen.",
      summary:
        "Der RSS-Feed veröffentlicht neue Ratgeber, sobald sie fertig sind. Kein Formular und kein versprochener Rhythmus.",
      action: "RSS-Feed öffnen",
      note: "Mit Ihrem gewohnten RSS-Reader kompatibel.",
    },
    method: {
      kicker: "Die Methode von Four à Nu",
      title: "Eine Herstellerangabe ist keine Messung.",
      action: "So prüfen wir",
      steps: [
        {
          title: "Wir ordnen jede Zahl zu.",
          summary: "Eine angegebene Abmessung oder Funktion verweist auf die Marke, die sie veröffentlicht.",
        },
        {
          title: "Wir bewahren den Kontext.",
          summary: "Dauer, Wetter und Messweise bleiben sichtbar, wenn sie eine Rolle spielen.",
        },
        {
          title: "Eine Schlussfolgerung bleibt eine Schlussfolgerung.",
          summary: "Wir erklären unsere Wahl und was die Quellen nicht zu behaupten erlauben.",
        },
      ],
      trustAria: "Vertrauensseiten",
      editorialTeam: "Die Redaktion",
      method: "Die Methode",
      transparency: "Kommerzielle Transparenz",
      corrections: "Korrekturen",
    },
    common: { by: "Von", read: "Lesen" },
    categoryLabels: {
      oven: "Pizzaöfen",
      mixer: "Teigknetmaschinen",
      accessoires: "Pizzazubehör",
    },
  },
} as const satisfies Record<Locale, HomeCopy>;

export type HomeAccessoryArticleId = keyof HomeCopy["accessories"]["labels"];

export const HOME_FEATURED_ARTICLE_IDS = {
  lead: "OONI-001",
  energy: "OONI-004",
  newDossiers: ["GOZNEY-003", "GOZNEY-005", "GOZNEY-006", "GOZNEY-007"],
  accessories: ["ACC-001", "ACC-002", "ACC-003", "ACC-004"],
  models: ["OONI-010", "OONI-018", "OONI-015", "OONI-012"],
} as const satisfies {
  lead: ArticleId;
  energy: ArticleId;
  newDossiers: readonly ArticleId[];
  accessories: readonly HomeAccessoryArticleId[];
  models: readonly ArticleId[];
};
