# Four à Nu

Four à Nu construit un outil francophone pour choisir un four à pizza à partir
de contraintes vérifiables, avec Ooni comme premier corpus. `Jupiter` reste le
nom de code du dépôt.

Le propriétaire a confirmé l'acquisition de `fouranu.com` le 2026-08-23. La
zone Cloudflare est active et le candidat V1 se vérifie en local. Aucun Worker,
Custom Domain, DNS Four à Nu ou lien affilié n'est encore activé.

## État du produit

Le dépôt utilise le pack Foundation `full`. `site/` contient une application
Astro statique distincte de Nimbus. Son build génère 23 pages HTML, dont onze
analyses documentaires Ooni. Four à Nu est un média documentaire permanent :
chaque page attribue ses sources, conserve leurs limites et ne publie ni note,
ni étoile, ni balisage d'avis.

La preview reste en `noindex` par défaut. Une page ne devient indexable qu'après
sa barrière éditoriale et une autorisation de publication. Cloudflare Workers
Static Assets est la cible préparée ; le propriétaire a autorisé le premier
déploiement, le domaine et l'indexation, qui restent à exécuter et vérifier.

La suite locale compte onze tests de contrat. Le service Compose répond avec un
healthcheck sain. La revue visuelle de la tranche courante reste une preuve
manuelle distincte des contrôles automatisés. Ces preuves décrivent le candidat
local, pas un site publié.

- Le contrat stable vit dans [`PROJECT.md`](PROJECT.md).
- L'état réellement vérifié vit dans [`STATUS.md`](STATUS.md).
- L'ordre de livraison vit dans [`ROADMAP.md`](ROADMAP.md).
- [`BRIEF.md`](BRIEF.md) conserve l'exploration et sa conclusion historique.

## Commandes

Les commandes canoniques et leur disponibilité exacte sont définies dans
[`PROJECT.md`](PROJECT.md). Les prérequis du socle sont Git, Python `3.9` ou
plus récent, Node `22.12.0` ou plus récent, npm, Docker et Docker Compose
`2.20.0` ou plus récent.

| Action actuelle | Commande | Résultat attendu |
| --- | --- | --- |
| Vérifier le dépôt | `./scripts/verify.sh` | Contrôle les documents, registres, Compose, le site Astro et Nimbus |
| Vérifier le site | `npm run check --prefix site` | Typecheck, build statique de 23 pages et onze tests de contrat |
| Vérifier le candidat Cloudflare | `npm run cloudflare:check --prefix site` | Valide le paquet Workers Static Assets sans déploiement |
| Vérifier Compose | `python3 scripts/check_compose.py` | Valide le service applicatif, son healthcheck et les contraintes du pack `full` |
| Construire la documentation interne | `npm run build --prefix docs-nimbus` | Site Nimbus local généré depuis les Markdown classés |
| Lancer le produit | `docker compose up --build --wait` | Site local sain sur `http://127.0.0.1:4321` |
| Arrêter le produit | `docker compose down` | Arrête le service local |

Une commande cible n'est pas présentée comme fonctionnelle avant l'existence du
code, de la configuration et d'une vérification réelle.

## Carte documentaire

- [`PROJECT.md`](PROJECT.md) : promesse, périmètre, architecture et commandes.
- [`STATUS.md`](STATUS.md) : état courant, preuves, blocages et dérives.
- [`ROADMAP.md`](ROADMAP.md) : phases F01 à F05 et critères de sortie.
- [`DESIGN.md`](DESIGN.md) : direction visuelle, tokens, accessibilité et budgets du site.
- [`BRAND-SEO.md`](BRAND-SEO.md) : marque, découvrabilité et premières URL.
- [`OONI-CONTENT-MAP.md`](OONI-CONTENT-MAP.md) : corpus produit et ordre éditorial.
- [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) : preuves, droits, IA et barrière de publication.
- [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) : contrôle SEO bloquant appliqué à chaque article avant indexation.
- [`docs/decisions/0002-media-documentaire-permanent.md`](docs/decisions/0002-media-documentaire-permanent.md) : modèle documentaire permanent et indexation.
- [`docs/decisions/0004-cloudflare-workers-static-assets.md`](docs/decisions/0004-cloudflare-workers-static-assets.md) : cible Cloudflare et chemin de déploiement.
- [`EXPERIMENT.md`](EXPERIMENT.md) : métriques, limites et décision du pilote documentaire.
- [`FEASIBILITY.md`](FEASIBILITY.md) : modèle économique et options rejetées.
- [`BRIEF.md`](BRIEF.md) : question et conclusion de l'exploration d'origine.
- `research/` : registres versionnés sans preuve privée suivie.
- [`FOUNDATION.md`](FOUNDATION.md) : release, pack, profils et dérogations.
- [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) : catalogue généré des Markdown.
- `docs-nimbus/` : documentation interne obligatoire, distincte du site public.
- [`AGENTS.md`](AGENTS.md) : règles locales d'intervention.
- [`CHANGELOG.md`](CHANGELOG.md) : changements livrés et impact observable.

Ce README oriente. Il ne duplique ni l'état courant, ni la roadmap, ni le
protocole éditorial.
