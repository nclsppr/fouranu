import type { ArticleId, Locale } from "@/i18n/config";

type HomeCopy = {
  socialTitle: string;
  organizationDescription: string;
  requiredError: string;
  hero: { kicker: string; title: string; mission: string; action: string; accessoriesAction: string; byline: string; featured: string; read: string };
  shortcuts: { aria: string; indoor: string; outdoor: string; budget: string };
  accessories: {
    kicker: string; title: string; summary: string; action: string;
    labels: Record<"ACC-001" | "ACC-002" | "ACC-003" | "ACC-004", { title: string; summary: string }>;
    kitKicker: string; kitTitle: string; kitSummary: string; kitAction: string;
  };
  ovens: { kicker: string; title: string; summary: string; action: string; read: string; labels: Record<"FOUR-001" | "FOUR-002" | "FOUR-003" | "FOUR-004" | "FOUR-005", string> };
  comparison: { kicker: string; title: string; summary: string; action: string; finderTitle: string; finderSummary: string; finderAction: string };
  journal: { kicker: string; title: string; summary: string; action: string; rss: string };
  transparency: { title: string; body: string; commerce: string; method: string; disclosure: string };
  common: { by: string; read: string; guides: string };
};

export const HOME_COPY = {
  fr: {
    socialTitle: "Fours à pizza et accessoires : nos choix pour bien s’équiper",
    organizationDescription: "Four à Nu aide à choisir ses fours à pizza et accessoires grâce à des guides d’achat personnels, des comparatifs et des sources attribuées.",
    requiredError: "Les guides mis en avant sur l’accueil sont requis.",
    hero: {
      kicker: "Le goût de la pizza. Le choix du matériel.",
      title: "La pizza maison mérite le bon matériel.",
      mission: "Nous, c’est Nicolas, Florian et Magali. On vous aide à choisir le four qui trouvera sa place chez vous, la pelle qui va avec et les accessoires qui méritent vraiment votre attention.",
      action: "Choisir mon four", accessoriesAction: "Trouver mes accessoires", byline: "Faisons connaissance", featured: "À la une · Pizza dans la cuisine", read: "Notre avis sur le Cuisinart",
    },
    shortcuts: { aria: "Votre prochaine soirée pizza", indoor: "Je cuisine à l’intérieur", outdoor: "J’équipe ma terrasse", budget: "Je prépare mon budget" },
    accessories: {
      kicker: "On commence par les bons outils", title: "Des accessoires utiles. Pas un tiroir de gadgets.",
      summary: "Pour enfourner, mesurer, faire pousser et servir : quatre guides pour choisir selon votre four et vos habitudes. Avec les points à vérifier avant de passer commande sur Amazon.fr.", action: "Tous les accessoires",
      labels: {
        "ACC-001": { title: "La bonne pelle", summary: "Perforée, pleine ou en bambou : commencez par la largeur du four et le geste à faire." },
        "ACC-002": { title: "Des parts bien découpées", summary: "Quatre paires de ciseaux à départager par la prise en main, le nettoyage et le service." },
        "ACC-003": { title: "La pierre à bonne température", summary: "Ooni, Bosch, ThermoPro ou Tilswall : ce que leur mesure infrarouge permet de savoir." },
        "ACC-004": { title: "Des pâtons bien rangés", summary: "Le bac qui entre dans votre frigo compte plus qu’une capacité que vous n’utiliserez pas." },
      },
      kitKicker: "Notre nouveau guide", kitTitle: "Premier four ? Préparez le kit sans acheter deux fois.",
      kitSummary: "Une pelle, un thermomètre, un bac : on fait le tri entre l’utile, le déjà fourni et ce qui peut attendre.", kitAction: "Composer mon kit",
    },
    ovens: {
      kicker: "Cinq fours à regarder de près", title: "Lequel a sa place chez vous ?", summary: "Un petit four de cuisine, un modèle réglable ou un poste fixe dehors : chacun a une bonne raison d’exister. Voici nos avis et les offres Amazon.fr référencées dans les guides.", action: "Comparer tous les fours", read: "Lire l’avis et voir l’offre",
      labels: { "FOUR-001": "Pour régler finement", "FOUR-002": "Pour débuter en cuisine", "FOUR-003": "Pour un format compact", "FOUR-004": "Pour cuisiner dehors à l’électricité", "FOUR-005": "Pour de grandes pizzas dehors" },
    },
    comparison: {
      kicker: "Avant de passer commande", title: "Delizia ou Cuisinart : deux façons de commencer.", summary: "Le petit appareil dédié ou le four de cuisine équipé ? On compare ce que chaque format implique, accessoires compris.", action: "Lire le face-à-face", finderTitle: "Encore deux ou trois modèles en tête ?", finderSummary: "Dites-nous où vous cuisinerez et ce qui compte pour vous. Notre sélecteur vous aide à réduire la liste, puis à prévoir le budget complet.", finderAction: "Trouver mon four",
    },
    journal: { kicker: "Les personnes derrière les guides", title: "Trois regards, une même envie de bien choisir.", summary: "La pâte, les tablées, la place sur la terrasse : on ne regarde pas tous un four de la même façon. Nos profils vous disent d’où viennent nos intérêts. Les sources de chaque article expliquent nos conclusions.", action: "Rencontrer la rédaction", rss: "Suivre les prochains guides par RSS" },
    transparency: { title: "Un avis utile, c’est aussi dire ce qui coince.", body: "Nos guides confrontent les caractéristiques fabricant et les essais publiés par des tiers. Ils donnent notre analyse, avec les limites et les sources, sans être présentés comme des essais physiques Four à Nu.", commerce: "Comment le site est financé", method: "Comment nous choisissons", disclosure: "Nos guides comportent des liens rémunérés vers Amazon.fr. En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises." },
    common: { by: "Par", read: "Découvrir", guides: "guides pour choisir" },
  },
  en: {
    socialTitle: "Pizza ovens and accessories: our choices for a useful setup",
    organizationDescription: "Four à Nu helps readers choose pizza ovens and accessories through personal buying guides, comparisons and attributed sources.",
    requiredError: "The guides featured on the home page are required.",
    hero: {
      kicker: "A love of pizza. A considered choice of equipment.", title: "Homemade pizza deserves the right equipment.",
      mission: "We’re Nicolas, Florian and Magali. We help you choose the oven that fits your home, the peel to go with it and the accessories worth your attention.", action: "Choose my oven", accessoriesAction: "Find my accessories", byline: "Get to know us", featured: "In focus · Pizza in your kitchen", read: "Our view on the Cuisinart",
    },
    shortcuts: { aria: "Your next pizza evening", indoor: "I cook indoors", outdoor: "I’m setting up my terrace", budget: "I’m planning my budget" },
    accessories: {
      kicker: "Start with the right tools", title: "Useful accessories. Not a drawer full of gadgets.", summary: "For launching, measuring, proofing and serving: four guides to choose for your oven and your habits. Including what to check before ordering on Amazon.fr.", action: "All accessories",
      labels: {
        "ACC-001": { title: "The right peel", summary: "Perforated, solid or bamboo: start with the oven opening and the task at hand." },
        "ACC-002": { title: "Neatly cut slices", summary: "Four pairs of scissors to compare for handling, cleaning and serving." },
        "ACC-003": { title: "A stone ready to bake", summary: "Ooni, Bosch, ThermoPro or Tilswall: what their infrared readings can tell you." },
        "ACC-004": { title: "Dough balls in order", summary: "A box that fits your fridge matters more than capacity you will never use." },
      },
      kitKicker: "Our new guide", kitTitle: "First oven? Build a kit without buying things twice.", kitSummary: "A peel, a thermometer, a box: we sort what is useful, what is already included and what can wait.", kitAction: "Build my kit",
    },
    ovens: {
      kicker: "Five ovens worth a closer look", title: "Which one belongs in your home?", summary: "A small kitchen oven, an adjustable model or a permanent outdoor station: each serves a different purpose. Read our views and find the Amazon.fr offers referenced in the guides.", action: "Compare all ovens", read: "Read our view and see the offer",
      labels: { "FOUR-001": "For fine adjustment", "FOUR-002": "For starting in the kitchen", "FOUR-003": "For a compact setup", "FOUR-004": "For electric cooking outdoors", "FOUR-005": "For large pizzas outdoors" },
    },
    comparison: {
      kicker: "Before you order", title: "Delizia or Cuisinart: two ways to get started.", summary: "A small dedicated appliance or an equipped kitchen oven? We compare what each format involves, including accessories.", action: "Read the comparison", finderTitle: "Still deciding between a few models?", finderSummary: "Tell us where you will cook and what matters to you. Our selector helps narrow the list, then plan the complete budget.", finderAction: "Find my oven",
    },
    journal: { kicker: "The people behind the guides", title: "Three perspectives, one aim: choosing well.", summary: "Dough, shared meals, terrace space: we do not all look at an oven in the same way. Our profiles explain our interests. Each article’s sources explain our conclusions.", action: "Meet the editorial team", rss: "Follow new guides via RSS" },
    transparency: { title: "Useful advice also says what gets in the way.", body: "Our guides compare manufacturer specifications and tests published by others. They offer our analysis, with limitations and sources, without being presented as Four à Nu hands-on tests.", commerce: "How the site is funded", method: "How we choose", disclosure: "Our guides contain paid links to Amazon.fr. As an Amazon Associate, we earn from qualifying purchases." },
    common: { by: "By", read: "Discover", guides: "guides to help you choose" },
  },
  de: {
    socialTitle: "Pizzaöfen und Zubehör: unsere Auswahl für die passende Ausstattung",
    organizationDescription: "Four à Nu hilft bei der Wahl von Pizzaöfen und Zubehör mit persönlichen Kaufratgebern, Vergleichen und nachvollziehbaren Quellen.",
    requiredError: "Die auf der Startseite vorgestellten Ratgeber sind erforderlich.",
    hero: {
      kicker: "Die Lust auf Pizza. Die Wahl der Ausstattung.", title: "Pizza zu Hause verdient die richtige Ausstattung.",
      mission: "Wir sind Nicolas, Florian und Magali. Wir helfen Ihnen, den passenden Ofen für Ihr Zuhause, den richtigen Schieber und wirklich nützliches Zubehör zu finden.", action: "Meinen Ofen wählen", accessoriesAction: "Mein Zubehör finden", byline: "Lernen Sie uns kennen", featured: "Im Fokus · Pizza in der Küche", read: "Unsere Einschätzung zum Cuisinart",
    },
    shortcuts: { aria: "Ihr nächster Pizzaabend", indoor: "Ich backe drinnen", outdoor: "Ich richte meine Terrasse ein", budget: "Ich plane mein Budget" },
    accessories: {
      kicker: "Mit dem richtigen Werkzeug beginnen", title: "Nützliches Zubehör. Keine Schublade voller Spielereien.", summary: "Einschießen, messen, gehen lassen und servieren: vier Ratgeber für Ihren Ofen und Ihre Gewohnheiten. Mit den Punkten, die Sie vor einer Bestellung bei Amazon.fr prüfen sollten.", action: "Alles zum Zubehör",
      labels: {
        "ACC-001": { title: "Der passende Schieber", summary: "Gelocht, ungelocht oder aus Bambus: entscheidend sind Ofenöffnung und Handgriff." },
        "ACC-002": { title: "Sauber geschnittene Stücke", summary: "Vier Scheren im Vergleich nach Handhabung, Reinigung und Servieren." },
        "ACC-003": { title: "Der Stein ist bereit", summary: "Ooni, Bosch, ThermoPro oder Tilswall: was ihre Infrarotmessung aussagt." },
        "ACC-004": { title: "Teiglinge gut verstaut", summary: "Eine Box, die in den Kühlschrank passt, zählt mehr als ungenutztes Fassungsvermögen." },
      },
      kitKicker: "Unser neuer Ratgeber", kitTitle: "Der erste Ofen? Das Zubehör ohne doppelte Käufe planen.", kitSummary: "Schieber, Thermometer, Box: Wir sortieren, was nützlich ist, was schon beiliegt und was warten kann.", kitAction: "Mein Zubehör zusammenstellen",
    },
    ovens: {
      kicker: "Fünf Öfen näher betrachtet", title: "Welcher passt zu Ihnen?", summary: "Kleiner Küchenofen, einstellbares Modell oder fester Platz im Freien: jeder erfüllt einen anderen Zweck. Unsere Ratgeber erklären die Unterschiede und verlinken die erfassten Angebote bei Amazon.fr.", action: "Alle Öfen vergleichen", read: "Einschätzung und Angebot ansehen",
      labels: { "FOUR-001": "Für feine Einstellungen", "FOUR-002": "Für den Einstieg in der Küche", "FOUR-003": "Für wenig Platz", "FOUR-004": "Für elektrisches Kochen draußen", "FOUR-005": "Für große Pizzen im Freien" },
    },
    comparison: {
      kicker: "Vor der Bestellung", title: "Delizia oder Cuisinart: zwei Wege zum Einstieg.", summary: "Kleines Spezialgerät oder ausgestatteter Küchenofen? Wir vergleichen, was die beiden Formate samt Zubehör bedeuten.", action: "Den Vergleich lesen", finderTitle: "Noch zwei oder drei Modelle im Kopf?", finderSummary: "Sagen Sie uns, wo Sie backen möchten und was Ihnen wichtig ist. Unsere Auswahlhilfe grenzt die Liste ein und hilft beim Gesamtbudget.", finderAction: "Meinen Ofen finden",
    },
    journal: { kicker: "Die Menschen hinter den Ratgebern", title: "Drei Perspektiven, ein Ziel: gut auswählen.", summary: "Teig, gemeinsame Essen, Platz auf der Terrasse: Wir betrachten Öfen aus unterschiedlichen Blickwinkeln. Unsere Profile erklären unsere Interessen. Die Quellen jedes Artikels erklären unsere Schlussfolgerungen.", action: "Die Redaktion kennenlernen", rss: "Neue Ratgeber per RSS verfolgen" },
    transparency: { title: "Gute Beratung nennt auch die Nachteile.", body: "Unsere Ratgeber vergleichen Herstellerangaben und veröffentlichte Tests Dritter. Sie enthalten unsere Analyse samt Grenzen und Quellen und werden nicht als eigene Praxistests von Four à Nu dargestellt.", commerce: "So finanziert sich die Website", method: "So wählen wir aus", disclosure: "Unsere Ratgeber enthalten vergütete Links zu Amazon.fr. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen." },
    common: { by: "Von", read: "Entdecken", guides: "Ratgeber zur Auswahl" },
  },
} as const satisfies Record<Locale, HomeCopy>;

export const HOME_FEATURED_ARTICLE_IDS = {
  lead: "FOUR-002",
  accessories: ["ACC-001", "ACC-003", "ACC-004", "ACC-002"],
  ovens: ["FOUR-002", "FOUR-003", "FOUR-001", "FOUR-004", "FOUR-005"],
} as const satisfies {
  lead: ArticleId;
  accessories: readonly (keyof HomeCopy["accessories"]["labels"])[];
  ovens: readonly (keyof HomeCopy["ovens"]["labels"])[];
};
