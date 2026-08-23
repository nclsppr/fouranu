import type { APIRoute } from "astro";
import { SITE } from "@/config/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${SITE.name}

> ${SITE.shortDescription}.

Four à Nu est un média francophone d'aide au choix consacré aux fours à pizza.
La Saison 0 publie des analyses documentaires. Elle ne revendique aucun essai physique Four à Nu.

## Pages de référence

- [Accueil](${SITE.url}/)
- [Méthode et niveaux de preuve](${SITE.url}/methode/)
- [Gamme Ooni](${SITE.url}/ooni/)

## Provenance

FAB désigne une donnée fabricant. T-MES et T-OBS désignent une mesure ou une observation tierce. J-SYN et J-INF désignent une synthèse ou une inférence éditoriale. J-TEST reste verrouillé jusqu'aux essais physiques documentés.

Ne pas présenter une analyse documentaire comme un test de première main.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
