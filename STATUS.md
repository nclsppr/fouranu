# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-23 |
| Par | Codex, inspection locale |
| Branche | `main` |
| Base de la tranche | `51525432e445a407eef500e49388df5e91af50e4` |
| Environnement | Dépôt local et GitHub `nclsppr/fouranu` |
| Version livrée | F01 poussée sur `origin/main`, site toujours non publié |

## Résumé

Four à Nu possède maintenant un premier produit web local. L'application Astro
génère 15 pages HTML, dont huit analyses documentaires Ooni. Les analyses
restent en `noindex`, sans note, étoiles, balisage `Review` ou revendication de
test physique Four à Nu.

Le SEO technique réagit à une activation explicite. Par défaut, toutes les
pages restent hors index et le sitemap ne contient aucune URL. Le build de
contrôle avec `PUBLIC_SITE_INDEXABLE=true` n'ouvre que l'accueil et la méthode.
Les huit analyses Ooni restent hors index dans les deux modes.

Le service Compose a répondu sainement en local. Le build du site a produit 15
pages et les sept tests de contrat ont réussi. Les vues à 1440, 1024, 390 et 320
pixels n'ont montré ni débordement horizontal, ni erreur ou avertissement dans
la console. La gate complète du dépôt a réussi localement puis dans GitHub
Actions. F01 est fermée ; F02 reste active tant que les cinq sessions
utilisateurs n'ont pas été menées.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build Astro, sept tests, Compose sain, revue navigateur locale et `./scripts/verify.sh` vert | Aucune dans le périmètre local | nclsppr |
| F02, pilote éditorial `noindex` | `in_progress` | Huit analyses Ooni présentes et reliées aux preuves | Cinq sessions utilisateurs et corrections associées | nclsppr |

## Livré et vérifié localement

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Marque et identité | Four à Nu, direction « Ligne de sole », domaine acheté selon le propriétaire | [`BRAND-SEO.md`](BRAND-SEO.md), [`DESIGN.md`](DESIGN.md) et assets sous `site/public/` | Recherche de similarités approfondie non terminée |
| Application Astro | 15 pages HTML statiques, sans JavaScript client nécessaire au contenu | `site/` et dernier `npm run check --prefix site` | Aucun artefact public |
| Corpus pilote Ooni | Deux guides et six fiches modèle, soit huit analyses documentaires | `site/src/content/analyses/` et tests de contrat | Aucun essai physique Four à Nu, aucune session utilisateur |
| Provenance | Sources citées, passages horodatés, conditions, confiance et relations connues | `research/evidence.csv`, copie de build contrôlée et bibliographies rendues | Les retraits ou corrections des sources tierces restent possibles |
| SEO conditionnel | Titres, descriptions, canonicals, Open Graph, données structurées honnêtes, robots et sitemap contrôlés | Build normal et build opt-in temporaire couverts par les tests | Aucune indexation, soumission moteur ou performance réelle observée |
| Barrière SEO | Checklist bloquante propre à chaque article | [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) | Validation humaine requise avant toute indexation |
| Parcours local | Service `site` construit par Compose avec healthcheck | `compose.yaml` et contrôle local du 2026-08-23 | Aucun preview partagé |
| Documentation interne | Nimbus, adaptateur, recherche et catalogue | `docs-nimbus/` et [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) | Aucune publication autorisée de cette documentation interne |
| Socle Foundation | Snapshot `v0.5.2`, pack `full`, profils actuels conformes au tag adopté | SHA `708d7374f87060809a805c57abc2cf7e7b66c182` | Aucune dérive connue du snapshot |

## État opérationnel

| Surface | Accès | Artefact | Santé | Dernière observation |
| --- | --- | --- | --- | --- |
| Site Four à Nu | `http://127.0.0.1:4321`, uniquement pendant le lancement local | `site/dist/`, dérivé non suivi | Service Compose sain au dernier contrôle | 2026-08-23 |
| Documentation Nimbus | Build local uniquement | `docs-nimbus/dist/`, dérivé non suivi | Contrôles locaux disponibles | 2026-08-23 |
| CI | [GitHub Actions](https://github.com/nclsppr/fouranu/actions) | Workflow `Verify` | Run `32649184182` réussi sur `main` | 2026-08-23 |
| Production | `fouranu.com`, non sondé comme surface du projet | Aucun | Non activée | 2026-08-23 |

## Validations récentes

| Date | Contrôle | Résultat | Portée de la preuve |
| --- | --- | --- | --- |
| 2026-08-23 | `npm run check --prefix site` | Typecheck sans erreur, build de 15 pages, sept tests sur sept | Site local et contrats automatisés |
| 2026-08-23 | `./scripts/verify.sh` | Gate complète verte, dont registres, Compose, Astro et 43 pages Nimbus | Diff final local, sans CI distante |
| 2026-08-23 | GitHub Actions `Verify` | Run `32649184182` vert, y compris build Compose et sondes HTTP | SHA `10efc99a53db1cbbac6c79d898dc001105ecb12a` sur `main` |
| 2026-08-23 | Indexation conditionnelle | Mode par défaut entièrement `noindex`; mode opt-in limité à l'accueil et la méthode | Configuration construite, pas comportement d'un moteur réel |
| 2026-08-23 | Docker Compose | Build autonome, healthcheck sain, routes et statuts HTTP contrôlés | Machine locale, aucune preuve d'hébergement |
| 2026-08-23 | Revue navigateur | 1440, 1024, 390 et 320 pixels sans débordement horizontal ni log console | Chrome local, pas données utilisateurs réelles |
| 2026-08-23 | Lighthouse 13.4.1 | Accueil et Koda 2 : performance 98, accessibilité 100, bonnes pratiques 100, SEO 66 | Le seul échec SEO est le `noindex` volontaire de preview |
| 2026-08-23 | Comparaison Foundation `v0.5.2` | Noyau et trois profils identiques au tag | Provenance du socle |

## Blocages externes

| Blocage | Impact | Propriétaire | Condition de reprise |
| --- | --- | --- | --- |
| Hébergement et DNS non autorisés | Aucun preview partagé ni production | nclsppr | Choisir la plateforme puis autoriser sa préparation et son activation |
| Identité auteur et mentions légales incomplètes | Les pages restent impropres à l'indexation | nclsppr | Fournir les informations exactes et passer la barrière de publication |
| Comptes marchands absents | Aucun lien rémunéré ou revenu attribuable | nclsppr | Admission confirmée et règles effectives enregistrées |
| Droits médias non obtenus | Aucun photogramme tiers publiable ou transmissible à une IA | nclsppr | Autorisation adéquate et preuve privée vérifiée |

## Dérives connues

| Intention | Réalité observée | Risque | Action ordonnée |
| --- | --- | --- | --- |
| Domaine de marque | Achat confirmé par le propriétaire | Confondre possession et surface active | Ne consigner une URL publique qu'après sonde du déploiement |
| Pilote documentaire | Huit analyses existent, aucune session utilisateur n'a eu lieu | Confondre production de contenu et utilité prouvée | Mener les cinq sessions prévues en F02 |
| SEO prêt techniquement | Les pages restent volontairement hors index | Activer un corpus encore sans auteur, mentions ou validation humaine | Appliquer la barrière SEO à chaque URL avant toute activation |

## Risques et hypothèses

| Sujet | Type | Impact | Prochaine preuve | Réévaluation |
| --- | --- | --- | --- | --- |
| Valeur du parcours de choix | Hypothèse | Le produit peut ne pas réduire l'incertitude d'achat | Cinq sessions décrites dans l'expérience | F02 |
| Valeur originale des synthèses | Hypothèse | Faible potentiel SEO et éditorial | Audit humain des huit articles avec la barrière SEO | F02 |
| Publication de documentation interne | Risque | Exposition de stratégie et de règles internes | Inspection du futur artefact public, séparé de Nimbus | F03 |
| Dépendance à des sources tierces | Risque | Retrait ou contradiction d'une preuve | Politique de correction et nouvelle vérification avant indexation | F02 et F03 |
| Économie du modèle | Hypothèse | Trafic ou revenu par visite insuffisant | Mesures du pilote public autorisé | F05 |
