# Jupiter

Exploration d'un laboratoire de décision francophone monétisé par affiliation et prospects qualifiés, avec la pizza napolitaine comme première niche à valider.

> Exploration limitée. Le périmètre, les hypothèses, l'état vérifié et la conclusion vivent dans [`BRIEF.md`](BRIEF.md).

## Démarrage

Prérequis du socle : Git, Python `3.9` ou plus récent, Node `22.12.0` ou plus
récent, npm, Docker et Docker Compose `2.20.0` ou plus récent. Aucun prérequis
supplémentaire n'est nécessaire pour lire l'étude.

| Action | Commande | Résultat attendu |
| --- | --- | --- |
| Installer | Non applicable | L'exploration actuelle est documentaire |
| Lancer | Non applicable | Aucune application ou surface publique n'existe |
| Vérifier | `./scripts/verify.sh` | Catalogue, Markdown et build Nimbus valides |
| Vérifier Compose | `python3 scripts/check_compose.py` | Contrat Compose conforme à `P19` |
| Arrêter ou nettoyer | Non applicable | Aucune ressource externe ni donnée d'expérience n'existe |

Une commande absente est indiquée comme non applicable. Une commande future n'est pas présentée comme disponible.

## Carte documentaire

- [`BRIEF.md`](BRIEF.md) : question, périmètre, faits, hypothèses et conclusion datée.
- [`FEASIBILITY.md`](FEASIBILITY.md) : verdict stratégique, contraintes, économie et choix de niche.
- [`EXPERIMENT.md`](EXPERIMENT.md) : expérience de 90 jours, mesures et critères de décision.
- [`OONI-CONTENT-MAP.md`](OONI-CONTENT-MAP.md) : couverture des neuf fours actuels, backlog de 35 contenus et ordre de production.
- [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) : Saison 0, taxonomie de preuve, droits, visuels IA et barrière de publication.
- [`PERMISSION-TEMPLATE.md`](PERMISSION-TEMPLATE.md) : demande précise d'un fichier source et des droits nécessaires.
- `research/evidence.csv`, `research/questions.csv` et `research/assets.csv` : registres versionnés des affirmations, questions d'achat et médias, sans données de contact ni fichiers tiers.
- [`CHANGELOG.md`](CHANGELOG.md) : changements livrés et impact observable.
- [`FOUNDATION.md`](FOUNDATION.md) : version du socle, profils activés et dérogations locales.
- [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) : navigation exhaustive des Markdown et de leurs audiences.
- `docs-nimbus/` : moteur documentaire obligatoire, adaptateur, configuration et lockfile.
- [`AGENTS.md`](AGENTS.md) : routage minimal pour les interventions assistées.
- `docs/foundation/` : snapshot vendorisé du noyau et des profils. Ne pas le modifier localement.

Ce README oriente uniquement. Il ne duplique ni le brief, ni les règles du socle, ni les preuves.
