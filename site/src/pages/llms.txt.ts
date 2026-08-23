import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@/config/site";

export const prerender = true;

export const GET: APIRoute = async () => {
  const analyses = (await getCollection("analyses"))
    .filter((entry) => entry.data.status === "publishable")
    .sort((a, b) => a.data.title.localeCompare(b.data.title, "fr"));
  const dossiers = analyses
    .map((entry) => `- [${entry.data.title}](${SITE.url}/ooni/${entry.id}/): ${entry.data.summary}`)
    .join("\n");
  const body = `# ${SITE.name}

> ${SITE.shortDescription}.

Four à Nu est un média francophone indépendant consacré au choix des fours à pizza et de leur équipement. Il publie des analyses documentaires qui attribuent les données fabricant, les mesures et les observations à leurs sources.

## Pages de référence

- [Accueil](${SITE.url}/)
- [Guides de choix](${SITE.url}/fours-a-pizza/)
- [Gamme Ooni](${SITE.url}/ooni/)
- [Méthode éditoriale](${SITE.url}/methode/)
- [Rédaction Four à Nu](${SITE.url}${SITE.editorialAuthor.url})
- [Transparence commerciale](${SITE.url}/transparence/)
- [Politique de correction](${SITE.url}/corrections/)

## Dossiers Ooni

${dossiers}

## Provenance

FAB désigne une donnée fabricant. T-MES et T-OBS désignent une mesure ou une observation tierce. FAN-SYN et FAN-INF désignent une synthèse ou une inférence éditoriale Four à Nu. Une expérience tierce reste attribuée à son auteur et à sa session.

Four à Nu ne publie ni note, ni étoile, ni donnée Review ou AggregateRating. Une illustration assistée par IA est déclarée et ne sert pas de preuve factuelle.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
