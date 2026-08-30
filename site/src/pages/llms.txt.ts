import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { INDEXING_ENABLED, SITE } from "@/config/site";
import { articlePath } from "@/data/article-taxonomy";

export const prerender = true;

const absolute = (path: string) => new URL(path, SITE.url).toString();

export const GET: APIRoute = async () => {
  const analyses = INDEXING_ENABLED
    ? (await getCollection("analyses"))
        .filter((entry) => entry.data.status === "publishable" && entry.data.indexable)
        .sort((a, b) =>
          a.data.brand.localeCompare(b.data.brand, "fr") ||
          a.data.title.localeCompare(b.data.title, "fr") ||
          a.data.articleId.localeCompare(b.data.articleId)
        )
    : [];

  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.shortDescription}.`,
    "",
    "Four à Nu est un site éditorial français consacré au choix et à l’usage des fours à pizza, accessoires et pétrins.",
    "Les dossiers actuellement publiés sont des analyses documentaires fondées sur des sources attribuées. Ils ne revendiquent aucun essai physique Four à Nu, aucune note et aucun classement.",
    "Les liens Amazon sont affiliés et signalés avant le clic. Les prix, vendeurs et stocks doivent être relus sur la fiche marchande.",
    "",
    "## Parcours principaux",
    "",
    `- [Accessoires pour four à pizza](${absolute("/accessoires-pizza/")})`,
    `- [Choisir un four à pizza](${absolute("/fours-a-pizza/")})`,
    `- [Dossiers Ooni](${absolute("/ooni/")})`,
    `- [Dossiers Gozney](${absolute("/gozney/")})`,
    "",
    "## Méthode et confiance",
    "",
    `- [Méthode éditoriale](${absolute("/methode/")})`,
    `- [Transparence commerciale](${absolute("/transparence/")})`,
    `- [Politique de correction](${absolute("/corrections/")})`,
    `- [Rédaction](${absolute("/auteurs/redaction-four-a-nu/")})`,
    ...(INDEXING_ENABLED
      ? [
          "",
          "## Dossiers publiés",
          "",
          ...analyses.map((entry) =>
            `- [${entry.data.title}](${absolute(articlePath(entry.data.brand, entry.id))})`
          ),
        ]
      : ["", "> Prépublication non indexable : la liste des dossiers est volontairement masquée."]),
    "",
    "## Index publics",
    "",
    `- [Sitemap XML](${absolute("/sitemap.xml")})`,
    `- [Flux RSS](${absolute("/rss.xml")})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
