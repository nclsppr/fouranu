# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-24 |
| Par | Codex, checkout local, navigateur, CI et compte Cloudflare autorisé |
| Branche | `main` |
| Candidat V1 publié | `c5da961ceabcd021c5501d1cbda3ddb00c57c2ee` |
| Livraison V1 | Poussée sur `origin/main` ; [run GitHub Actions `32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972) vert pour `Verify` et `deploy-cloudflare` |
| Tranche post-V1 publiée | SHA applicatif `eb12619007191c82d963017f598b462ca54bdc51` ; [run GitHub Actions `32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541) vert pour `Verify` et `deploy-cloudflare` |
| Surface publique | [`https://fouranu.com`](https://fouranu.com), domaine personnalisé Cloudflare actif |

## Candidat local en attente de publication

Le checkout contient un candidat distinct de la production décrite ci-dessous.
Il construit 26 pages HTML, treize guides, 142 preuves, 58 questions, 49 médias
et 25 URL indexables. Il ajoute le Gozney Arc XL et le comparatif Ooni Halo Core
ou Halo Pro, avec leurs nouveaux en-têtes officiels stylisés et leurs vues
documentaires secondaires.

Ce candidat a passé `./scripts/verify.sh`, la vérification des preuves privées,
le build Cloudflare hors déploiement, le démarrage Compose sain et la revue
navigateur locale. Il ne sera présenté comme public qu'après une CI verte sur
son SHA, la lecture de ce même SHA dans `/release.json` et le contrôle des
nouvelles routes et images sur `fouranu.com`.

## Résumé

Four à Nu est un média documentaire statique de 23 pages HTML. Sa V1 et sa
tranche éditoriale post-V1 sont publiques sur `fouranu.com`. Le corpus contient
onze analyses Ooni, 118 preuves citées, 50 questions et 41 entrées
média. Le site n'exécute aucun JavaScript client nécessaire au contenu. Le
build de preview reste en `noindex`. Le paquet de production ouvre uniquement
les 22 URL éligibles et publiées dans le sitemap.

L'accueil suit désormais la hiérarchie du prototype : un sujet principal en
8/4, des entrées secondaires, des dossiers modèles, un guide par contraintes et
la méthode. Il emploie seulement le corpus et les photos documentaires
publiables. Les notes, verdicts, photographies, produits, rubriques et fonctions fictives du
prototype n'ont pas été repris.

Le logo Four à Nu fourni est rendu dans l'en-tête et le pied de page depuis une
version PNG de 480 x 172 px et 70 804 octets. Sa source et son dérivé sont
enregistrés. La direction `Ligne de sole` conserve IBM Plex, le carbone, le
blanc, l'acier et la grille, avec deux oranges accessibles à la place du bleu.

Cloudflare Workers Static Assets sert la production. GitHub Actions construit
puis transmet l'artefact exact produit par `Verify`, sans second build dans le
job de déploiement. Le domaine personnalisé, le DNS, HTTPS et l'indexation sont
actifs. Le contrôle public a retrouvé le SHA applicatif post-V1 dans
`/release.json`.

La tranche post-V1 couvre les signatures Nicolas, Florian et Magali, une photo
documentaire pour chacun des onze dossiers, une mise en page plus dense et des
sources compactes. Elle a passé les gates locales, la CI et le déploiement. Le
contrôle public a retrouvé son SHA applicatif dans `/release.json`, chargé les
médias, vérifié les signatures et confirmé le retrait de l'ancienne route
technique.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build, Compose, tests, CI et parcours navigateur | Aucune dans son périmètre historique | nclsppr |
| F02, corpus documentaire publiable | `in_progress` | Onze analyses, pages de confiance, provenance et politique de correction | Cinq sessions restent à mener ; le propriétaire autorise la V1 sans attendre cette preuve d'utilité | nclsppr |
| F03, candidat Cloudflare | `done` | Paquet approuvé, preuves privées, gate locale, CI du même SHA et environnement GitHub protégé | Aucune pour la V1 | nclsppr |
| F04, lancement public | `done` | Déploiement, domaine personnalisé, DNS, indexation et contrôles publics du SHA V1 | Aucune pour la V1 | nclsppr |
| F05, mesure et décision | `planned` | Aucune mesure d'audience ou de conversion active | Protocole minimisé et résultats observés | nclsppr |

## Livré et vérifié en production

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Application Astro | 23 pages HTML statiques et zéro JavaScript client nécessaire au contenu | `site/`, treize tests de contrat et production | Les prochains dossiers de marque restent une tranche séparée jusqu'à leur propre publication |
| Corpus | Onze analyses Ooni sous des routes généralisées par marque | `site/src/content/analyses/` et `site/src/pages/[brand]/` | Aucun dossier Gozney réel |
| Provenance | 118 preuves, 50 questions et 41 entrées média | `research/` et contrôles de registre | Les preuves privées ne sont pas lisibles en CI |
| Accueil éditorial | Composition responsive issue du prototype et contenu réel | Contrats du build et revue navigateur | Les photos restent attribuées à leurs sources et ne deviennent pas des tests Four à Nu |
| Identité | Logo optimisé, palette orange accessible et contrat de marque aligné | `DESIGN.md`, `BRAND-SEO.md` et `AS-1002` | Marque compacte et favicon définitif encore ouverts |
| SEO conditionnel | RSS, robots, sitemap, canonicals et données structurées | Build normal, build opt-in et 22 URL publiques contrôlés | L'exploration et le classement par les moteurs ne sont pas garantis |
| Parcours local | Service statique avec healthcheck | `compose.yaml` | Aucun preview partagé |
| Production Cloudflare | Artefact post-V1 servi par Workers Static Assets sur le domaine personnalisé | Run `32722048541`, `/release.json` et contrôles HTTP/TLS | Le retour arrière vise le précédent déploiement d'un SHA vérifié |
| Documentation interne | Nimbus reste séparé du site public | `docs-nimbus/` et catalogue | Le build Cloudflare pointe uniquement vers `site/dist/` |

## Revue d'interface du 2026-08-24

| Contrôle | Résultat | Portée |
| --- | --- | --- |
| Responsive | Aucun débordement à 360, 768, 1280 et 1440 px sur l'accueil | Build statique local |
| Contenu long | Article Koda 2 contrôlé à 360 et 1440 px ; figure mobile corrigée, tableau contenu dans une région défilable et focusable | 11 392 caractères et 23 intertitres |
| Clavier et focus | Lien d'évitement visible ; contour orange 3 px sur fond clair et fond carbone | Parcours critique de l'accueil |
| Mouvement réduit | Deux règles finales suppriment transitions et transformations | CSS construit réellement chargé |
| Console et chargements | Aucun journal d'erreur après rechargement de l'accueil et de l'article | Navigateur local sur le build statique |
| Lighthouse accueil | Performance 96, accessibilité 100, bonnes pratiques 100 ; CLS 0, TBT 0 ms | Simulation mobile locale, sans valeur de production |
| Lighthouse article | Performance 95, accessibilité 100, bonnes pratiques 100 ; CLS 0, TBT 0 ms | Simulation mobile locale, sans valeur de production |

Les captures de contrôle sont conservées hors du dépôt. Aucun screenshot,
fichier source de prototype ou logo brut n'entre dans l'artefact public.

## Hébergement et livraison

| Élément | État vérifié |
| --- | --- |
| Cible | Cloudflare Workers Static Assets, sans Worker JavaScript |
| Configuration | `workers_dev=false`, `preview_urls=false`, répertoire `site/dist/`, 404 statique et slash final forcé |
| Vérification locale | `npm run cloudflare:check --prefix site`, succès sans identifiant ni mutation distante |
| Graphe CI | `deploy-cloudflare` dépend de `verify`, sur `main` et si `CLOUDFLARE_DEPLOY_ENABLED == true` ; il télécharge l'artefact exact construit par `verify` |
| CI publique | [Run V1 `32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972) puis [run post-V1 `32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541) verts ; chaque déploiement a livré l'artefact exact construit par son job `verify` |
| Paramètres de production | Jeton minimal dans l'environnement GitHub `cloudflare-production`, identifiant de compte en variable |
| État Cloudflare observé | Worker Static Assets, domaine personnalisé et DNS de `fouranu.com` actifs |
| Transport public | HTTP redirige vers HTTPS ; TLS 1.0 et 1.1 sont refusés, TLS 1.2 et 1.3 acceptés |
| Certificats | Packs universel et avancé actifs pour `fouranu.com` et `*.fouranu.com` |
| Contrat public | `/` répond 200, `/health` répond `ok`, `/release.json` a exposé le SHA applicatif post-V1, l'ancienne route technique et une route absente répondent 404 |
| Indexation | 22 URL du sitemap répondent 200 avec canonical et `index, follow` |
| Ancienne cible Atlas | Workflow producteur retiré ; OCI et preuves du 2026-08-23 restent historiques, plus chemin courant |

## Dettes après le lancement V1

| Condition | Impact | Preuve attendue |
| --- | --- | --- |
| Cinq sessions non réalisées | L'utilité observée de F02 reste inconnue | Mener les sessions après la V1 ; cette dette n'est pas présentée comme une preuve acquise |
| Aucun programme marchand actif | Aucun revenu affilié | Choisir et autoriser les partenaires, puis appliquer `rel="sponsored"` |

## Prochaines preuves

| Sujet | Type | Prochaine preuve | Phase |
| --- | --- | --- | --- |
| Utilité du parcours | Hypothèse | Cinq sessions décrites dans `EXPERIMENT.md` | F02 |
| Médias d'article | Gate | Tout nouveau fichier sous `images/articles` doit avoir une URL exacte dans `research/assets.csv` | F02/F03 |
| Prochains dossiers de marque | Gate | Sources actuelles, photo attribuée, revue éditoriale et visuelle, gate complète et `Verify` vert sur leur SHA | F02/F03 |
| Publication suivante | Activation | Run GitHub Actions vert, `/release.json`, routes, médias et métadonnées contrôlés | F04 |
| Économie du modèle | Hypothèse | Trafic, clics et ventes d'un lancement autorisé | F05 |
