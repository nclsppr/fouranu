import { commercialObject } from "@/data/commercial-objects.mjs";
import type { Locale } from "@/i18n/config";

export const PURCHASE_COPY = {
  fr: {
    aria: "Liens d’achat", action: "Voir le prix sur Amazon.fr",
    guidance: "Avant de commander, vérifiez la variante et les accessoires inclus.",
    disclosure: "Liens affiliés Amazon. En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.",
  },
  en: {
    aria: "Purchase links", action: "See price on Amazon.fr",
    guidance: "Offers are on the French marketplace. Check the variant and included accessories before ordering.",
    disclosure: "Amazon affiliate links. As an Amazon Associate, I earn from qualifying purchases.",
  },
  de: {
    aria: "Kauflinks", action: "Preis auf Amazon.fr ansehen",
    guidance: "Angebote auf dem französischen Marktplatz. Prüfen Sie vor der Bestellung die Variante und das enthaltene Zubehör.",
    disclosure: "Amazon-Partnerlinks. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.",
  },
} satisfies Record<Locale, Record<string, string>>;

const names: Record<Exclude<Locale, "fr">, Record<string, string>> = {
  en: {
    "ooni-peel-perforated-30": "Ooni 30 cm perforated pizza peel",
    "ooni-peel-classic-30": "Ooni 30 cm classic pizza peel",
    "ooni-peel-bamboo-30": "Ooni 30 cm bamboo pizza peel",
    "weber-peel-6691": "Weber 6691 pizza peel",
    "dreamfarm-scizza": "Dreamfarm Scizza pizza scissors",
    "triangle-50491": "Triangle 50491 pizza scissors",
    "gefu-pezzo-12641": "GEFU Pezzo 12641 pizza scissors",
    "fackelmann-pizza-scissors-25": "Fackelmann 25 cm pizza scissors",
    "ooni-infrared-thermometer": "Ooni digital infrared thermometer",
    "bosch-universaltemp": "Bosch UniversalTemp thermometer",
    "thermopro-tp30": "ThermoPro TP30 infrared thermometer",
    "tilswall-w301": "Tilswall W301 infrared thermometer",
    "ziipa-minola": "ZiiPa Minola dough box",
    "gilac-dough-box-9l": "Gilac compact 9-litre dough box",
    "hendi-880975": "HENDI 880975 GN 1/1 dough box",
    "gilac-dough-box-15l": "Gilac professional 15-litre dough box",
    "g3-ferrari-delizia-g10006-black": "G3 Ferrari Delizia G10006 black",
    "witt-etna-rotante-16": "Witt ETNA Rotante 16 black",
  },
  de: {
    "ooni-peel-perforated-30": "Perforierter Ooni-Pizzaschieber 30 cm",
    "ooni-peel-classic-30": "Klassischer Ooni-Pizzaschieber 30 cm",
    "ooni-peel-bamboo-30": "Ooni-Bambus-Pizzaschieber 30 cm",
    "weber-peel-6691": "Weber-Pizzaschieber 6691",
    "dreamfarm-scizza": "Dreamfarm-Scizza-Pizzaschere",
    "triangle-50491": "Triangle-Pizzaschere 50491",
    "gefu-pezzo-12641": "GEFU-Pezzo-Pizzaschere 12641",
    "fackelmann-pizza-scissors-25": "Fackelmann-Pizzaschere 25 cm",
    "ooni-infrared-thermometer": "Digitales Ooni-Infrarotthermometer",
    "bosch-universaltemp": "Bosch-UniversalTemp-Thermometer",
    "thermopro-tp30": "ThermoPro-TP30-Infrarotthermometer",
    "tilswall-w301": "Tilswall-W301-Infrarotthermometer",
    "ziipa-minola": "ZiiPa-Minola-Teigbox",
    "gilac-dough-box-9l": "Kompakte Gilac-Teigbox mit 9 Litern",
    "hendi-880975": "HENDI-Teigbox 880975 GN 1/1",
    "gilac-dough-box-15l": "Professionelle Gilac-Teigbox mit 15 Litern",
    "g3-ferrari-delizia-g10006-black": "G3 Ferrari Delizia G10006 schwarz",
    "witt-etna-rotante-16": "Witt ETNA Rotante 16 schwarz",
  },
};

// These reminders condense use cases and reservations in each object's canonical
// article. They add no new evidence, price or availability claim.
const benefits: Record<string, Record<Locale, string>> = {
  "ooni-peel-perforated-30": {
    fr: "Pour laisser passer une partie de la farine au lancement. Vérifiez que la largeur convient à vos pizzas.",
    en: "To let some flour fall through before launching. Check that the width suits your pizzas.",
    de: "Damit vor dem Einschießen ein Teil des Mehls durchfällt. Prüfen Sie, ob die Breite zu Ihren Pizzen passt.",
  },
  "ooni-peel-classic-30": {
    fr: "Pour apprendre l’enfournement avec une pelle pleine. Elle emporte aussi la farine restée sous la pâte.",
    en: "To learn launching with a solid peel. It also carries flour left beneath the dough.",
    de: "Zum Üben des Einschießens mit einer geschlossenen Schaufel. Mehl unter dem Teig gelangt dabei mit in den Ofen.",
  },
  "ooni-peel-bamboo-30": {
    fr: "Pour préparer, enfourner et servir sur la même planche. Elle ne doit pas rester dans le four chaud.",
    en: "To prepare, launch and serve on one board. Do not leave it in the hot oven.",
    de: "Zum Vorbereiten, Einschießen und Servieren auf einem Brett. Es darf nicht im heißen Ofen bleiben.",
  },
  "weber-peel-6691": {
    fr: "Pour un rangement plus facile avec son manche repliable. Son manche court convient moins aux fours profonds.",
    en: "For easier storage with its folding handle. The short handle is less suited to deep ovens.",
    de: "Der klappbare Griff erleichtert das Verstauen. Für tiefe Öfen ist der kurze Griff weniger geeignet.",
  },
  "dreamfarm-scizza": {
    fr: "Pour découper avec un sabot protecteur. À utiliser sur la pizza sortie du four, pas sur une plaque brûlante.",
    en: "For cutting with a protective foot. Use on pizza out of the oven, not on a scorching tray.",
    de: "Zum Schneiden mit einem schützenden Fuß. Für Pizza außerhalb des Ofens, nicht auf einem glühend heißen Blech.",
  },
  "triangle-50491": {
    fr: "Pour découper sur plaque avec les mains relevées. Prévoyez un autre ustensile pour servir les parts.",
    en: "For cutting on a tray with raised handles. Have another utensil ready to serve the slices.",
    de: "Zum Schneiden auf dem Blech mit hochliegenden Griffen. Zum Servieren brauchen Sie ein weiteres Utensil.",
  },
  "gefu-pezzo-12641": {
    fr: "Pour couper et soulever une part avec le même outil. La petite pelle peut être étroite pour une part très chargée.",
    en: "To cut and lift a slice with one tool. The small server can be narrow for a heavily topped slice.",
    de: "Zum Schneiden und Anheben mit einem Werkzeug. Der kleine Heber kann für üppig belegte Stücke zu schmal sein.",
  },
  "fackelmann-pizza-scissors-25": {
    fr: "Pour une paire de ciseaux simple. Ses matériaux et son entretien sont moins documentés que ceux des autres modèles.",
    en: "For a simple pair of pizza scissors. Materials and care are less well documented than for the other models.",
    de: "Für eine einfache Pizzaschere. Material und Pflege sind weniger ausführlich dokumentiert als bei den anderen Modellen.",
  },
  "ooni-infrared-thermometer": {
    fr: "Pour contrôler une pierre Ooni. L’infrarouge lit la surface, pas le cœur des aliments.",
    en: "For checking an Ooni stone. Infrared reads the surface, not the centre of food.",
    de: "Zum Prüfen eines Ooni-Steins. Infrarot misst die Oberfläche, nicht die Kerntemperatur von Speisen.",
  },
  "bosch-universaltemp": {
    fr: "Pour la pierre et d’autres surfaces de la maison. Ses groupes de matériaux offrent moins de réglages fins.",
    en: "For the pizza stone and other household surfaces. Its material groups offer less fine adjustment.",
    de: "Für den Pizzastein und andere Oberflächen im Haushalt. Die Materialgruppen erlauben weniger Feineinstellungen.",
  },
  "thermopro-tp30": {
    fr: "Pour ajuster la mesure à plusieurs surfaces. Il faut choisir le bon réglage d’émissivité.",
    en: "To adjust readings for different surfaces. You need to choose the right emissivity setting.",
    de: "Zum Anpassen der Messung an verschiedene Oberflächen. Dafür muss der Emissionsgrad richtig eingestellt sein.",
  },
  "tilswall-w301": {
    fr: "Pour ses alarmes de température et ses réglages. Davantage de fonctions à gérer pour un simple contrôle de pierre.",
    en: "For temperature alarms and adjustable settings. There are more functions to manage for a simple stone check.",
    de: "Für Temperaturalarm und Einstellmöglichkeiten. Für eine einfache Steinmessung müssen Sie mehr Funktionen bedienen.",
  },
  "ziipa-minola": {
    fr: "Pour une fournée familiale avec couvercle intégré. Mesurez le passage dans votre réfrigérateur avant l’achat.",
    en: "For a family batch with an integrated lid. Measure the opening into your fridge before buying.",
    de: "Für eine Familienportion mit integriertem Deckel. Messen Sie vor dem Kauf den Zugang zum Kühlschrank aus.",
  },
  "gilac-dough-box-9l": {
    fr: "Pour un bac utilitaire de 40 × 30 cm. Prévoyez la hauteur nécessaire sous la clayette.",
    en: "For a practical 40 × 30 cm box. Allow enough height beneath the fridge shelf.",
    de: "Für eine praktische Box im Format 40 × 30 cm. Planen Sie genügend Höhe unter dem Kühlschrankboden ein.",
  },
  "hendi-880975": {
    fr: "Pour une organisation au format GN 1/1. Le couvercle se commande séparément.",
    en: "For a GN 1/1 setup. The lid must be ordered separately.",
    de: "Für eine Ausstattung im Format GN 1/1. Der Deckel muss separat bestellt werden.",
  },
  "gilac-dough-box-15l": {
    fr: "Pour de grandes fournées et un espace de froid dédié. Le format 60 × 40 cm demande beaucoup de place.",
    en: "For large batches and dedicated cold storage. The 60 × 40 cm footprint needs plenty of space.",
    de: "Für große Teigmengen und einen eigenen Kühlbereich. Das Format 60 × 40 cm benötigt viel Platz.",
  },
  "ooni-koda-2": {
    fr: "Pour cuisiner au gaz sur une terrasse. Choisissez un autre four pour un usage intérieur.",
    en: "For gas cooking on a terrace. Choose a different oven for indoor use.",
    de: "Zum Backen mit Gas auf der Terrasse. Für drinnen brauchen Sie einen anderen Ofen.",
  },
  "ooni-koda-2-pro": {
    fr: "Pour de grandes pizzas au gaz. À réserver à un emplacement extérieur fixe.",
    en: "For large gas-baked pizzas. Best considered for a fixed outdoor spot.",
    de: "Für große Pizzen mit Gas. Vor allem für einen festen Platz im Freien geeignet.",
  },
  "ooni-koda-12": {
    fr: "Pour débuter au gaz dehors dans un petit format. Son ouverture limite la taille des pizzas.",
    en: "For getting started with gas outdoors in a small format. Its opening limits pizza size.",
    de: "Für den Einstieg mit Gas draußen im kleinen Format. Die Öffnung begrenzt die Pizzagröße.",
  },
  "ooni-koda-16": {
    fr: "Pour de grandes pizzas au gaz en extérieur. Moins adapté aux déplacements fréquents.",
    en: "For large pizzas with gas outdoors. Less suited to frequent moving.",
    de: "Für große Pizzen mit Gas im Freien. Für häufige Ortswechsel weniger geeignet.",
  },
  "ooni-karu-2": {
    fr: "Pour apprendre à cuisiner au feu dehors. Prévoyez le temps de gérer le combustible.",
    en: "To learn fire cooking outdoors. Allow time to manage the fuel.",
    de: "Zum Lernen des Backens mit Feuer im Freien. Planen Sie Zeit für die Brennstoffversorgung ein.",
  },
  "ooni-karu-2-pro": {
    fr: "Pour cuisiner au feu sur un poste extérieur fixe. Son poids compte dans l’installation.",
    en: "For fire cooking in a fixed outdoor setup. Factor its weight into your installation.",
    de: "Zum Backen mit Feuer an einem festen Platz draußen. Berücksichtigen Sie das Gewicht bei der Aufstellung.",
  },
  "ooni-karu-12": {
    fr: "Pour gérer un vrai feu dans un petit four extérieur. Combustible et nettoyage demandent du temps.",
    en: "For managing a real fire in a small outdoor oven. Fuel and cleaning take time.",
    de: "Für echtes Feuer in einem kleinen Außenofen. Brennstoff und Reinigung kosten Zeit.",
  },
  "ooni-volt-2": {
    fr: "Pour la pizza et d’autres cuissons en intérieur. Vérifiez les accessoires à ajouter à votre équipement.",
    en: "For pizza and other cooking indoors. Check which accessories you still need.",
    de: "Für Pizza und weitere Gerichte drinnen. Prüfen Sie, welches Zubehör Ihnen noch fehlt.",
  },
  "ooni-halo-core": {
    fr: "Pour les fournées domestiques jusqu’à 2,5 kg annoncés. Les petites pâtes très hydratées demandent de la surveillance.",
    en: "For home batches up to the stated 2.5 kg. Small, highly hydrated doughs need monitoring.",
    de: "Für Haushaltsmengen bis zu den angegebenen 2,5 kg. Kleine, sehr weiche Teige brauchen Aufmerksamkeit.",
  },
  "ooni-halo-pro": {
    fr: "Pour dépasser régulièrement 2,5 kg de pâte. Le minimum annoncé de 1 kg convient moins aux petites fournées.",
    en: "For regularly mixing more than 2.5 kg of dough. The stated 1 kg minimum is less suited to small batches.",
    de: "Für regelmäßig mehr als 2,5 kg Teig. Die angegebene Mindestmenge von 1 kg passt weniger zu kleinen Portionen.",
  },
  "sage-smart-oven-pizzaiolo-bpz820": {
    fr: "Pour un four intérieur spécialisé et réglable. Vérifiez la place disponible sur votre plan de travail.",
    en: "For a specialised, adjustable indoor oven. Check the available space on your worktop.",
    de: "Für einen spezialisierten Innenofen mit Einstellmöglichkeiten. Prüfen Sie den Platz auf Ihrer Arbeitsfläche.",
  },
  "cuisinart-cpz120e": {
    fr: "Pour débuter en intérieur avec les accessoires utiles. Prévoyez du temps pour la chauffe.",
    en: "For getting started indoors with useful accessories. Allow time for preheating.",
    de: "Für den Einstieg drinnen mit nützlichem Zubehör. Planen Sie Zeit zum Vorheizen ein.",
  },
  "g3-ferrari-delizia-g10006-black": {
    fr: "Pour un premier four compact. Ses variations de chauffe demandent de surveiller la cuisson.",
    en: "For a compact first oven. Heat fluctuations mean you need to watch the bake.",
    de: "Für einen kompakten ersten Ofen. Wegen der Temperaturschwankungen sollten Sie den Backvorgang beobachten.",
  },
  "ninja-woodfire-oo101eu": {
    fr: "Pour alterner pizza, cuisson et fumage dehors. Ce four électrique ne s’utilise pas en intérieur.",
    en: "For pizza, roasting and smoking outdoors. This electric oven must not be used indoors.",
    de: "Für Pizza, Braten und Räuchern draußen. Dieser Elektroofen darf nicht drinnen verwendet werden.",
  },
  "witt-etna-rotante-16": {
    fr: "Pour de grandes pizzas avec une pierre tournante. Prévoyez un poste extérieur fixe et le raccordement gaz adapté.",
    en: "For large pizzas with a rotating stone. Plan a fixed outdoor station and the correct gas connection.",
    de: "Für große Pizzen auf einem drehenden Stein. Planen Sie einen festen Außenplatz und den passenden Gasanschluss.",
  },
};

export function purchaseProductCopy(objectId: string, locale: Locale) {
  const object = commercialObject(objectId);
  const benefit = benefits[objectId]?.[locale];
  if (!benefit) throw new Error(`Contexte d’achat absent : ${objectId} (${locale})`);
  return {
    name: locale === "fr" ? object.name : names[locale][objectId] ?? object.name,
    benefit,
  };
}
