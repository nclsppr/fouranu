# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-25 |
| Par | Codex, checkout local, navigateur, CI et compte Cloudflare autorisé |
| Branche | `main` |
| Candidat V1 publié | `c5da961ceabcd021c5501d1cbda3ddb00c57c2ee` |
| Livraison V1 | Poussée sur `origin/main` ; [run GitHub Actions `32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972) vert pour `Verify` et `deploy-cloudflare` |
| Tranche post-V1 publiée | SHA applicatif `eb12619007191c82d963017f598b462ca54bdc51` ; [run GitHub Actions `32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541) vert pour `Verify` et `deploy-cloudflare` |
| Tranche Gozney et Halo publiée | SHA applicatif `e96d3ac265dfb24b14cf4dc1461a1985cdba50ac` ; [run GitHub Actions `32736959106`](https://github.com/nclsppr/fouranu/actions/runs/32736959106) vert pour `Verify` et `deploy-cloudflare` |
| Harmonisation éditoriale publiée | SHA applicatif `87580db54eb90a60a6f68c81828f80dc35929c3d` ; [run GitHub Actions `32744201126`](https://github.com/nclsppr/fouranu/actions/runs/32744201126) vert pour `Verify` et `deploy-cloudflare` |
| Tranche Arc Lite, Tread et Halo publiée | SHA applicatif `6511eccf4971d962f6916dc8ab1fc74742e8f321` ; [run GitHub Actions `32750836887`](https://github.com/nclsppr/fouranu/actions/runs/32750836887) vert pour `Verify` et `deploy-cloudflare` |
| Gamme Gozney et appels d'achat publiés | SHA applicatif `bdd647b38fde6de2f8db01092c6adba5e08a7b35` ; [run GitHub Actions `32762552261`](https://github.com/nclsppr/fouranu/actions/runs/32762552261) vert pour `Verify` et `deploy-cloudflare` |
| Candidat SEO, partage et favicon | Gate locale complète et revue navigateur acquises ; publication et preuve publique encore à produire |
| Surface publique | [`https://fouranu.com`](https://fouranu.com), domaine personnalisé Cloudflare actif |

## Candidat SEO, partage et favicon vérifié localement

Les 31 pages canoniques ont désormais des titres sociaux resserrés, une image
principale explicite, un schéma `WebPage` et un partage fondé sur leur URL
canonique. Les dix-neuf articles gardent chacun leur image 1600 × 900 et gagnent
un `ImageObject`, une section et une URL d'auteur cohérentes ; Ooni et Gozney
reprennent l'image de leur guide de gamme. Le sitemap indexable annonce les
dix-neuf images d'article.

La carte générique 1200 × 630 emploie le lockup actuel. Le favicon, l'icône
Apple 180 px et les icônes 192/512 px reprennent un four simplifié issu du logo,
à la place de l'ancien signe géométrique. Chaque page canonique se termine par
la feuille de partage native lorsqu'elle est disponible, puis WhatsApp, e-mail
et copie du lien, sans SDK ni requête sociale au chargement.

Le candidat construit 32 pages et passe seize tests de contrat,
`npm run check --prefix site`, la gate `./scripts/verify.sh`, le contrôle
Cloudflare à sec et la revue navigateur locale à 360 et 1 280 px. Le focus, les
cibles de 48 px, l'annonce de copie, la 404, la console et l'absence de requête
tierce ont été vérifiés. Cette section ne présente pas encore ces changements
comme publiés : la CI du SHA livré et le domaine public restent à contrôler.

## Gamme Gozney et appels d'achat publiés

La production construit désormais 32 pages HTML, dix-neuf guides, 168 preuves,
66 questions, 85 médias et 31 URL indexables. Les sept fours autonomes du
catalogue Gozney France vérifié le 24 août 2026 sont couverts sans dupliquer les
couleurs ni les packs : un guide de gamme relie les dossiers Arc XL, Arc Lite ou
Tread, Dome XL (Gen 2), Dome (Gen 2), Arc et Roccbox.

Le SHA applicatif `bdd647b38fde6de2f8db01092c6adba5e08a7b35` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur locale. Le run `32762552261` a transmis l'artefact exact à
Cloudflare. Le contrôle public a retrouvé ce SHA dans `/release.json`, les cinq
nouvelles routes et leurs dix médias en 200, 31 URL canoniques et indexables,
ainsi que dix-neuf entrées RSS. Chaque article expose deux appels d'achat vers
les boutiques officielles, séparés par le contenu et accompagnés d'une mention
explicite d'absence de rémunération. Le parcours Gozney a aussi été relu à 360
et 1 440 px sans débordement, image cassée ni erreur console.

## Tranche Arc Lite, Tread et Halo publiée

La production construit désormais 27 pages HTML, quatorze guides, 155 preuves,
62 questions, 75 médias et 26 URL indexables. Elle ajoute une décision d'achat
entre Gozney Arc Lite et Tread, puis approfondit le comparatif Halo Core / Halo
Pro sur les petites fournées et la température finale de pâte. Les deux vues
Gozney partent de photographies officielles stylisées et autorisées.

Le SHA applicatif `6511eccf4971d962f6916dc8ab1fc74742e8f321` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur locale. Le run `32750836887` a transmis l'artefact exact à
Cloudflare. Le contrôle public a retrouvé ce SHA dans `/release.json`, les deux
articles et les quatre nouveaux médias en 200, 26 URL dans le sitemap et
quatorze entrées RSS. Les articles ont aussi été relus à 360 et 1 280 px sans
débordement, image cassée, relation commerciale brute ni erreur console.

## Harmonisation éditoriale publiée

Les treize guides répondent désormais avec une voix plus directe et
accueillante, sans transformer les observations tierces en essai Four à Nu.
Les onze anciens dossiers Ooni s'ouvrent sur une composition fidèle issue d'une
photo officielle du fabricant ; leur ancienne vue documentaire vient ensuite
dans le corps de l'article. Les registres comptent maintenant 142 preuves, 58
questions et 71 médias.

Le SHA applicatif `87580db54eb90a60a6f68c81828f80dc35929c3d` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur à 360, 768, 1 280 et 1 440 px. Le run `32744201126` a transmis
l'artefact exact à Cloudflare. Le contrôle public a retrouvé ce SHA dans
`/release.json`, 25 URL indexables, treize entrées RSS, tous les médias modifiés
et aucune erreur navigateur.

## Tranche Gozney et Halo publiée

La production construit désormais 26 pages HTML, treize guides, 142 preuves,
58 questions, 49 médias et 25 URL indexables. Elle ajoute le Gozney Arc XL et
le comparatif Ooni Halo Core ou Halo Pro, avec leurs en-têtes officiels stylisés
et leurs vues documentaires secondaires.

Le SHA applicatif `e96d3ac265dfb24b14cf4dc1461a1985cdba50ac` a passé
`./scripts/verify.sh`, les preuves privées, Compose et la revue navigateur, puis
le run `32736959106` a transmis l'artefact exact à Cloudflare. Le contrôle public
a relu ce SHA dans `/release.json`, retrouvé les cinq routes critiques, les
quatre médias nouveaux, les 25 URL du sitemap et les treize entrées RSS.

## Résumé

Four à Nu est un média statique de 32 pages HTML. Sa V1 et ses cinq tranches
éditoriales sont publiques sur `fouranu.com`. Le site propose dix-neuf guides :
onze guides de fours ou d'énergie Ooni, une comparaison de pétrins Ooni et sept
guides Gozney. Les registres comptent 168 preuves, 66 questions et 85 médias.
Aucun JavaScript client n'est nécessaire au contenu. Un module progressif révèle
seulement les capacités natives de partage et de copie disponibles. Le build de
preview reste en `noindex` et la production ouvre 31 URL dans le sitemap.

L'accueil suit désormais la hiérarchie du prototype : un sujet principal en
8/4, des entrées secondaires, des dossiers modèles, un guide par contraintes et
la méthode. Il emploie les en-têtes officiels stylisés et les vues documentaires
publiables du corpus. Les notes, verdicts, photographies, produits, rubriques et
fonctions fictives du prototype n'ont pas été repris.

Le logo Four à Nu fourni est rendu dans l'en-tête et le pied de page depuis une
version PNG de 480 x 172 px et 70 804 octets. Sa source et son dérivé sont
enregistrés. Le four du logo fournit aussi la marque compacte et les icônes du
candidat. Le système visuel Four à Nu conserve IBM Plex, le carbone, le blanc,
l'acier et la grille, avec deux oranges accessibles à la place du bleu.

Cloudflare Workers Static Assets sert la production. GitHub Actions construit
puis transmet l'artefact exact produit par `Verify`, sans second build dans le
job de déploiement. Le domaine personnalisé, le DNS, HTTPS et l'indexation sont
actifs. Le contrôle public a retrouvé dans `/release.json` le SHA applicatif de
la tranche la plus récente, consacrée à la gamme Gozney et aux appels d'achat.

La tranche post-V1 couvre les signatures Nicolas, Florian et Magali, une photo
documentaire pour chacun des onze dossiers, une mise en page plus dense et des
sources compactes. Elle a passé les gates locales, la CI et le déploiement. Le
contrôle public a retrouvé son SHA applicatif dans `/release.json`, chargé les
médias, vérifié les signatures et confirmé le retrait de l'ancienne route
technique.

La tranche Gozney et Halo ajoute deux réponses d'achat plus directes, une page
de marque Gozney et une règle durable pour les futurs en-têtes produit.
L'harmonisation suivante a résorbé les onze anciens en-têtes et la réécriture
générale de leur voix. La tranche suivante ajoute Arc Lite ou Tread et enrichit
Halo Core ou Pro sans dupliquer artificiellement ces deux fiches. La tranche la
plus récente couvre toute la gamme Gozney actuelle et place deux accès marchands
non rémunérés dans chaque article. Les prochains dossiers restent conditionnés
par une question d'achat et des sources suffisantes.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build, Compose, tests, CI et parcours navigateur | Aucune dans son périmètre historique | nclsppr |
| F02, corpus documentaire publiable | `in_progress` | Dix-neuf guides, pages de confiance, provenance et politique de correction | Cinq sessions restent à mener ; le propriétaire autorise la publication sans attendre cette preuve d'utilité | nclsppr |
| F03, candidat Cloudflare | `done` | Paquet approuvé, preuves privées, gate locale, CI du même SHA et environnement GitHub protégé | Aucune pour la V1 | nclsppr |
| F04, lancement public | `done` | Déploiement, domaine personnalisé, DNS, indexation et contrôles publics du SHA V1 | Aucune pour la V1 | nclsppr |
| F05, mesure et décision | `planned` | Aucune mesure d'audience ou de conversion active | Protocole minimisé et résultats observés | nclsppr |

## Livré et vérifié en production

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Application Astro | 32 pages HTML statiques ; contenu indépendant du seul module progressif de partage | `site/`, seize tests de contrat et candidat local | Les prochains dossiers restent une tranche séparée jusqu'à leur propre publication |
| Guides | Douze guides Ooni et sept guides Gozney sous des routes par marque | `site/src/content/analyses/` et `site/src/pages/[brand]/` | Les prochains dossiers exigent leur propre recherche et publication |
| Provenance | 168 preuves, 66 questions et 85 entrées média | `research/` et contrôles de registre | Les preuves privées restent volontairement hors CI et Git |
| Accueil éditorial | Composition responsive issue du prototype et contenu réel | Contrats du build et revue navigateur | Les photos restent attribuées à leurs sources et ne deviennent pas des tests Four à Nu |
| Identité | Logo optimisé, four compact, favicon SVG et icônes 180/192/512 px | `DESIGN.md`, `BRAND-SEO.md`, `AS-1002` et candidat local | La marque compacte reste réservée aux surfaces d'identité |
| SEO conditionnel | RSS, robots, sitemap texte et image, canonicals, aperçus sociaux et données structurées | Build normal, build opt-in et 31 URL contrôlés localement | L'affichage d'une miniature, l'exploration et le classement ne sont pas garantis |
| Partage | Feuille native progressive, WhatsApp, e-mail et copie sur les 31 pages canoniques | Contrat du build et revue navigateur locale | Les destinations proposées dépendent du navigateur, du système et des applications installées |
| Parcours local | Service statique avec healthcheck | `compose.yaml` | Aucun preview partagé |
| Production Cloudflare | Artefact Gozney et appels d'achat servi par Workers Static Assets sur le domaine personnalisé | Run `32762552261`, `/release.json` et contrôles HTTP | Le retour arrière vise le précédent déploiement d'un SHA vérifié |
| Documentation interne | Nimbus reste séparé du site public | `docs-nimbus/` et catalogue | Le build Cloudflare pointe uniquement vers `site/dist/` |

## Revue d'interface du candidat SEO du 2026-08-25

| Contrôle | Résultat | Portée |
| --- | --- | --- |
| Responsive | Aucun débordement à 360 et 1 280 px sur l'accueil et un article long | Candidat statique local |
| Partage | Quatre actions de 48 px, URL canonique exacte, copie annoncée et replis HTML visibles | Accueil et article Koda 2 |
| Clavier et focus | Contour orange 3 px visible ; groupe de contrôles nommé et statut poli | Bloc de partage mobile et bureau |
| Métadonnées | Titres, canonicales, images, dimensions, auteurs, schémas et sitemap rapprochés sur 32 HTML | Seize tests de contrat et inspection navigateur |
| Console et réseau | Aucun avertissement ou erreur ; aucune requête tierce avant une action du lecteur | Accueil, article et 404 locales |
| Frontière 404 | `noindex, follow`, aucun canonical, aucun `WebPage` et aucun partage | Route absente locale |

## Revue d'interface du 2026-08-24

| Contrôle | Résultat | Portée |
| --- | --- | --- |
| Responsive | Aucun débordement à 360, 640, 768, 1 280 et 1 440 px sur les parcours critiques | Build statique local et contrôle public |
| Nouvelles surfaces | Accueil, Gozney, guide de gamme et dossiers représentatifs contrôlés ; images de une avant les vues documentaires et deux appels d'achat par article | Candidat local puis contrôle public bureau et mobile |
| Contenu long | Article Koda 2 contrôlé à 360 et 1 440 px ; sommaire mobile défilable, tableau focusable et sources repliées sur 123 px | Navigateur local et public |
| Clavier et focus | Lien d'évitement présent ; contour orange 3 px sur les deux niveaux de sources et tableaux focusables | Parcours critique de l'article |
| Mouvement réduit | Deux règles finales suppriment transitions et transformations | CSS construit réellement chargé |
| Console et chargements | Aucun journal d'erreur après rechargement de la gamme et de l'article ; tous les nouveaux médias sont chargés | Navigateur local puis domaine public |
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
| CI publique | Runs [`32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972), [`32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541), [`32736959106`](https://github.com/nclsppr/fouranu/actions/runs/32736959106), [`32744201126`](https://github.com/nclsppr/fouranu/actions/runs/32744201126), [`32750836887`](https://github.com/nclsppr/fouranu/actions/runs/32750836887) et [`32762552261`](https://github.com/nclsppr/fouranu/actions/runs/32762552261) verts ; chaque déploiement a livré l'artefact exact construit par son job `verify` |
| Paramètres de production | Jeton minimal dans l'environnement GitHub `cloudflare-production`, identifiant de compte en variable |
| État Cloudflare observé | Worker Static Assets, domaine personnalisé et DNS de `fouranu.com` actifs |
| Transport public | HTTP redirige vers HTTPS ; TLS 1.0 et 1.1 sont refusés, TLS 1.2 et 1.3 acceptés |
| Certificats | Packs universel et avancé actifs pour `fouranu.com` et `*.fouranu.com` |
| Contrat public | `/` répond 200, `/health` répond `ok`, `/release.json` a exposé `bdd647b…`, les routes critiques et les dix nouveaux médias répondent 200 |
| Indexation | 31 URL du sitemap répondent 200 avec canonical et sans `noindex` |
| Ancienne cible Atlas | Workflow producteur retiré ; OCI et preuves du 2026-08-23 restent historiques, plus chemin courant |

## Dettes après le lancement V1

| Condition | Impact | Preuve attendue |
| --- | --- | --- |
| Cinq sessions non réalisées | L'utilité observée de F02 reste inconnue | Mener les sessions après la V1 ; cette dette n'est pas présentée comme une preuve acquise |
| Accessoires encore absents | Le fonds n'aide pas encore à choisir les petits outils autour du four | Ouvrir chaque dossier depuis un geste ou un problème concret, avec compatibilité, limites, coût complet et alternatives |
| Aucun programme marchand actif | Aucun revenu affilié | Choisir et autoriser les partenaires, puis appliquer `rel="sponsored"` |

## Prochaines preuves

| Sujet | Type | Prochaine preuve | Phase |
| --- | --- | --- | --- |
| Utilité du parcours | Hypothèse | Cinq sessions décrites dans `EXPERIMENT.md` | F02 |
| Médias d'article | Gate | Tout nouvel en-tête produit part d'une photo officielle stylisée et possède une entrée exacte dans `research/assets.csv` | F02/F03 |
| Prochains dossiers d'accessoires | Gate | Problème d'usage réel, sources actuelles, média publiable, compatibilité et alternatives, revue éditoriale et visuelle, gate complète et `Verify` vert sur leur SHA | F02/F03 |
| Publication suivante | Activation | Run GitHub Actions vert, `/release.json`, routes, médias et métadonnées contrôlés | F04 |
| Économie du modèle | Hypothèse | Trafic, clics et ventes d'un lancement autorisé | F05 |
