import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { INDEXING_ENABLED } from "@/config/site";
import {
  ARTICLE_ROUTES,
  LOCALE_INFO,
  articleRoute,
  feedPath,
  staticRoute,
  type ArticleId,
  type Locale,
} from "@/i18n/config";
import { localizedSite } from "@/i18n/common";

export const prerender = true;

const LLMS_COPY = {
  fr: {
    intro:
      "Four à Nu est un site éditorial français consacré au choix et à l’usage des fours à pizza, accessoires et pétrins vendus en France.",
    method:
      "Les dossiers actuellement publiés sont des analyses documentaires fondées sur des sources attribuées. Ils ne revendiquent aucun essai physique Four à Nu, aucune note et aucun classement.",
    commerce:
      "Les liens Amazon.fr sont affiliés et signalés avant le clic. Les prix, vendeurs et stocks doivent être relus sur la fiche marchande.",
    mainPaths: "Parcours principaux",
    accessories: "Accessoires pour four à pizza",
    ovens: "Choisir un four à pizza",
    ooni: "Dossiers Ooni",
    gozney: "Dossiers Gozney",
    trust: "Méthode et confiance",
    editorialMethod: "Méthode éditoriale",
    transparency: "Transparence commerciale",
    corrections: "Politique de correction",
    authors: "Rédaction",
    articles: "Dossiers publiés",
    preview: "Prépublication non indexable : la liste des dossiers est volontairement masquée.",
    publicIndexes: "Index publics",
    sitemap: "Sitemap XML",
    rss: "Flux RSS",
  },
  en: {
    intro:
      "Four à Nu is a French editorial publication about choosing and using pizza ovens, accessories and dough mixers sold in France.",
    method:
      "The currently published articles are documentary analyses based on attributed sources. They do not claim any physical testing by Four à Nu, and include no ratings or rankings.",
    commerce:
      "Amazon.fr links are affiliate links and are disclosed before the click. Prices, sellers and stock must be checked again on the merchant page.",
    mainPaths: "Main paths",
    accessories: "Pizza oven accessories",
    ovens: "Choosing a pizza oven",
    ooni: "Ooni articles",
    gozney: "Gozney articles",
    trust: "Method and trust",
    editorialMethod: "Editorial method",
    transparency: "Commercial transparency",
    corrections: "Corrections policy",
    authors: "Editorial team",
    articles: "Published articles",
    preview: "Non-indexable pre-publication: the article list is intentionally hidden.",
    publicIndexes: "Public indexes",
    sitemap: "XML sitemap",
    rss: "RSS feed",
  },
  de: {
    intro:
      "Four à Nu ist eine französische redaktionelle Publikation über die Auswahl und Nutzung von in Frankreich verkauften Pizzaöfen, Zubehör und Teigknetmaschinen.",
    method:
      "Die derzeit veröffentlichten Artikel sind dokumentarische Analysen auf Grundlage eindeutig zugeordneter Quellen. Sie beanspruchen keine physischen Tests durch Four à Nu und enthalten weder Bewertungen noch Ranglisten.",
    commerce:
      "Links zu Amazon.fr sind Affiliate-Links und werden vor dem Klick gekennzeichnet. Preise, Verkäufer und Verfügbarkeit müssen auf der Händlerseite erneut geprüft werden.",
    mainPaths: "Wichtige Einstiege",
    accessories: "Zubehör für Pizzaöfen",
    ovens: "Einen Pizzaofen auswählen",
    ooni: "Ooni-Artikel",
    gozney: "Gozney-Artikel",
    trust: "Methode und Vertrauen",
    editorialMethod: "Redaktionelle Methode",
    transparency: "Kommerzielle Transparenz",
    corrections: "Korrekturrichtlinie",
    authors: "Redaktion",
    articles: "Veröffentlichte Artikel",
    preview: "Nicht indexierbare Vorveröffentlichung: Die Artikelliste ist absichtlich ausgeblendet.",
    publicIndexes: "Öffentliche Verzeichnisse",
    sitemap: "XML-Sitemap",
    rss: "RSS-Feed",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export async function createLlmsResponse(locale: Locale): Promise<Response> {
  const site = localizedSite(locale);
  const copy = LLMS_COPY[locale];
  const absolute = (path: string) => new URL(path, site.url).toString();
  const eligible = (await getCollection("analyses"))
    .filter((entry) =>
      entry.data.locale === locale &&
      entry.data.status === "publishable" &&
      entry.data.indexable
    );
  const analyses = INDEXING_ENABLED
    ? (Object.keys(ARTICLE_ROUTES) as ArticleId[]).map((articleId) => {
        const matches = eligible.filter((entry) => entry.data.articleId === articleId);
        if (matches.length !== 1) {
          throw new Error(
            `Expected one indexable ${locale} llms.txt entry for ${articleId}, found ${matches.length}.`,
          );
        }
        return matches[0];
      }).sort((a, b) =>
        a.data.brand.localeCompare(b.data.brand, LOCALE_INFO[locale].intlLocale) ||
        a.data.title.localeCompare(b.data.title, LOCALE_INFO[locale].intlLocale) ||
        a.data.articleId.localeCompare(b.data.articleId)
      )
    : [];

  const body = [
    `# ${site.name}`,
    "",
    `> ${site.shortDescription}.`,
    "",
    copy.intro,
    copy.method,
    copy.commerce,
    "",
    `## ${copy.mainPaths}`,
    "",
    `- [${copy.accessories}](${absolute(staticRoute("accessories", locale))})`,
    `- [${copy.ovens}](${absolute(staticRoute("ovens", locale))})`,
    `- [${copy.ooni}](${absolute(staticRoute("ooni", locale))})`,
    `- [${copy.gozney}](${absolute(staticRoute("gozney", locale))})`,
    "",
    `## ${copy.trust}`,
    "",
    `- [${copy.editorialMethod}](${absolute(staticRoute("method", locale))})`,
    `- [${copy.transparency}](${absolute(staticRoute("transparency", locale))})`,
    `- [${copy.corrections}](${absolute(staticRoute("corrections", locale))})`,
    `- [${copy.authors}](${absolute(staticRoute("authors", locale))})`,
    ...(INDEXING_ENABLED
      ? [
          "",
          `## ${copy.articles}`,
          "",
          ...analyses.map((entry) =>
            `- [${entry.data.title}](${absolute(articleRoute(entry.data.articleId as ArticleId, locale))})`
          ),
        ]
      : ["", `> ${copy.preview}`]),
    "",
    `## ${copy.publicIndexes}`,
    "",
    `- [${copy.sitemap}](${absolute("/sitemap.xml")})`,
    `- [${copy.rss}](${absolute(feedPath(locale))})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export const GET: APIRoute = () => createLlmsResponse("fr");
