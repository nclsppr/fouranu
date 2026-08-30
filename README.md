# Four à Nu

Four à Nu construit un outil francophone pour choisir un four à pizza et son
matériel à partir de contraintes vérifiables. Ooni ouvre le catalogue, désormais
rejoint par Gozney. `Jupiter` reste le nom de code du dépôt.

Le propriétaire a confirmé l'acquisition de `fouranu.com` le 2026-08-23. La V1
est publique sur [`fouranu.com`](https://fouranu.com) depuis le 2026-08-24 et
servie par Cloudflare Workers Static Assets. Les SHA, runs et contrôles publics
de chaque livraison sont consignés dans [`STATUS.md`](STATUS.md). Aucun lien
affilié n'est actif.

## État du produit

Le dépôt utilise le pack Foundation `full`. `site/` contient une application
Astro statique distincte de Nimbus. La production sert 35 pages HTML, dont
dix-neuf guides : douze sur les fours et pétrins Ooni, sept sur les Gozney. Le
candidat local en construit 40 avec un hub et quatre guides accessoires encore
en `review` et `noindex` : pelle, ciseaux, thermomètre infrarouge et bacs à
pâtons. Four à Nu publie aujourd'hui un corpus documentaire : chaque page
attribue ses sources, conserve leurs limites et ne publie ni note, ni étoile,
ni balisage d'avis. La phase F06 vise ensuite des essais de première main sur
les fours vendus en France, les accessoires et différents pétrins, sans les
présenter comme acquis avant leur protocole et leurs sessions.

La preview reste en `noindex` par défaut. Une page ne devient indexable qu'après
sa barrière éditoriale et une autorisation de publication. Le paquet V1 de
production est indexable et son déploiement GitHub Actions, son domaine
personnalisé, son DNS et son HTTPS sont actifs.

La suite locale compte dix-huit tests de contrat. Le service Compose répond avec
un healthcheck sain. Le run GitHub Actions de la V1 et les contrôles publics sont
consignés dans [`STATUS.md`](STATUS.md). Les signatures, photos documentaires,
sources compactes et ajustements de densité de la tranche post-V1 sont actifs
sur le domaine public.

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
| Vérifier le site | `npm run check --prefix site` | Typecheck, build statique de 40 pages et dix-huit tests de contrat |
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
- [`ROADMAP.md`](ROADMAP.md) : phases F01 à F06 et critères de sortie.
- [`DESIGN.md`](DESIGN.md) : direction visuelle, tokens, accessibilité et budgets du site.
- [`BRAND-SEO.md`](BRAND-SEO.md) : marque, découvrabilité et premières URL.
- [`OONI-CONTENT-MAP.md`](OONI-CONTENT-MAP.md) : corpus produit et ordre éditorial.
- [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) : preuves, droits et barrière de publication.
- [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) : contrôle SEO bloquant appliqué à chaque article avant indexation.
- [`docs/decisions/0002-media-documentaire-permanent.md`](docs/decisions/0002-media-documentaire-permanent.md) : modèle du corpus documentaire actuel et indexation.
- [`docs/decisions/0006-programme-essais-et-couverture-du-marche.md`](docs/decisions/0006-programme-essais-et-couverture-du-marche.md) : programme futur d'essais et couverture progressive du marché.
- [`docs/decisions/0004-cloudflare-workers-static-assets.md`](docs/decisions/0004-cloudflare-workers-static-assets.md) : cible Cloudflare et chemin de déploiement.
- [`docs/decisions/0005-en-tete-officiel-et-voix-accessible.md`](docs/decisions/0005-en-tete-officiel-et-voix-accessible.md) : photo officielle stylisée en tête et voix accessible.
- [`docs/decisions/0008-en-tete-original-guides-multi-produits.md`](docs/decisions/0008-en-tete-original-guides-multi-produits.md) : illustration originale générique pour les guides multi-produits, avec validation humaine avant publication.
- [`EXPERIMENT.md`](EXPERIMENT.md) : métriques, limites et décision du pilote documentaire.
- [`FEASIBILITY.md`](FEASIBILITY.md) : modèle économique et options rejetées.
- [`BRIEF.md`](BRIEF.md) : question et conclusion de l'exploration d'origine.
- `research/` : registres versionnés sans preuve privée suivie.
- [`FOUNDATION.md`](FOUNDATION.md) : release, pack, profils et dérogations.
- [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) : catalogue généré des Markdown.
- `docs-nimbus/` : documentation interne obligatoire, distincte du site public.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) : règles locales d'intervention.
- [`CHANGELOG.md`](CHANGELOG.md) : changements livrés et impact observable.

Ce README oriente. Il ne duplique ni l'état courant, ni la roadmap, ni le
protocole éditorial.
