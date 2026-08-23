# Four à Nu

Four à Nu construit un outil francophone pour choisir un four à pizza à partir
de contraintes vérifiables, avec Ooni comme premier corpus. `Jupiter` reste le
nom de code du dépôt.

Le propriétaire a confirmé l'acquisition de `fouranu.com` le 2026-08-23. Le
site existe et se vérifie en local. Aucun DNS, hébergement, compte externe ou
lien affilié n'est activé par ce dépôt.

## État du produit

Le dépôt utilise le pack Foundation `full`. `site/` contient une application
Astro statique distincte de Nimbus. Son build génère 15 pages HTML, dont huit
analyses documentaires Ooni. Ces analyses restent toutes en `noindex`.

La suite locale compte sept tests de contrat. Le service Compose répond avec un
healthcheck sain. Les vues à 1440, 1024, 390 et 320 pixels ont été contrôlées
sans débordement horizontal ni erreur de console. Ces preuves décrivent le
candidat local, pas un site publié.

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
| Vérifier le site | `npm run check --prefix site` | Typecheck, build statique de 15 pages et sept tests de contrat |
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
- [`EXPERIMENT.md`](EXPERIMENT.md) : métriques, limites et décision de la Saison 0.
- [`FEASIBILITY.md`](FEASIBILITY.md) : modèle économique et options rejetées.
- [`BRIEF.md`](BRIEF.md) : question et conclusion de l'exploration d'origine.
- `research/` : registres versionnés sans média tiers ni preuve privée suivie.
- [`FOUNDATION.md`](FOUNDATION.md) : release, pack, profils et dérogations.
- [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) : catalogue généré des Markdown.
- `docs-nimbus/` : documentation interne obligatoire, distincte du site public.
- [`AGENTS.md`](AGENTS.md) : règles locales d'intervention.
- [`CHANGELOG.md`](CHANGELOG.md) : changements livrés et impact observable.

Ce README oriente. Il ne duplique ni l'état courant, ni la roadmap, ni le
protocole éditorial.
