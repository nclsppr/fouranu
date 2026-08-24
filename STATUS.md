# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-24 |
| Par | Codex, checkout local, navigateur, CI et état Cloudflare en lecture seule |
| Branche | `main` |
| Base de la tranche | `5857ef314c0a7f1492dc7c394812400faf659992` |
| Révision contrôlée | `5a4aa8c9b20b59256312851a5f43f6e18843c137`, gate locale complète et Compose sain ; livraison Git à confirmer |
| Surface publique | Aucune surface Four à Nu activée ou vérifiée |

## Résumé

Four à Nu est un média documentaire statique de 21 pages HTML. Le corpus
contient onze analyses Ooni, 118 preuves citées, 50 questions et 19 entrées
média. Le site n'exécute aucun JavaScript client nécessaire au contenu. Le
build de preview reste en `noindex` et le build opt-in ouvre uniquement les URL
éligibles.

L'accueil suit désormais la hiérarchie du prototype : un sujet principal en
8/4, des entrées secondaires, des dossiers modèles, un guide par contraintes et
la méthode. Il emploie seulement le corpus et l'illustration publiables. Les
notes, verdicts, photographies, produits, rubriques et fonctions fictives du
prototype n'ont pas été repris.

Le logo Four à Nu fourni est rendu dans l'en-tête et le pied de page depuis une
version PNG de 480 x 172 px et 70 804 octets. Sa source et son dérivé sont
enregistrés. La direction `Ligne de sole` conserve IBM Plex, le carbone, le
blanc, l'acier et la grille, avec deux oranges accessibles à la place du bleu.

Cloudflare Workers Static Assets remplace Atlas comme cible future. Wrangler
4.125.0, `site/wrangler.jsonc`, les en-têtes statiques et la validation à sec
sont présents. Le job GitHub Actions dépend de `Verify` sur le même SHA et reste
inactif tant que `CLOUDFLARE_DEPLOY_ENABLED` n'est pas explicitement activé.
Aucun Worker, projet Pages, zone `fouranu.com`, domaine personnalisé, secret,
DNS ou déploiement n'a été créé par cette tranche.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build, Compose, tests, CI et parcours navigateur | Aucune dans son périmètre historique | nclsppr |
| F02, corpus documentaire publiable | `in_progress` | Onze analyses, pages de confiance, provenance et politique de correction | Identité légale exacte, cinq sessions et rapprochement des médias Koda 2 | nclsppr |
| F03, candidat Cloudflare | `in_progress` | Configuration, validation à sec et job dépendant de `Verify` | Paquet exact approuvé, preuves privées et environnement GitHub protégé | nclsppr |
| F04, lancement public | `planned` | Domaine acquis selon le propriétaire | Premier déploiement, domaine personnalisé, DNS, indexation et contrôles publics autorisés séparément | nclsppr |

## Livré et vérifié localement

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Application Astro | 21 pages HTML statiques et zéro JavaScript client | `site/` et dix tests de contrat | Aucun artefact public actuel |
| Corpus | Onze analyses Ooni sous des routes généralisées par marque | `site/src/content/analyses/` et `site/src/pages/[brand]/` | Aucun dossier Gozney réel |
| Provenance | 118 preuves, 50 questions et 19 entrées média | `research/` et contrôles de registre | Les preuves privées ne sont pas lisibles en CI |
| Accueil éditorial | Composition responsive issue du prototype et contenu réel | Contrats du build et revue navigateur | L'illustration reste déclarative, jamais une preuve produit |
| Identité | Logo optimisé, palette orange accessible et contrat de marque aligné | `DESIGN.md`, `BRAND-SEO.md` et `AS-1002` | Marque compacte et favicon définitif encore ouverts |
| SEO conditionnel | RSS, `llms.txt`, robots, sitemap, canonicals et données structurées | Build normal et build opt-in couverts | Aucune exploration ou citation publique observée |
| Parcours local | Service statique avec healthcheck | `compose.yaml` | Aucun preview partagé |
| Candidat Cloudflare | 79 fichiers acceptés par le `dry-run`, sans binding | Wrangler 4.125.0 et `site/wrangler.jsonc` | Aucun état Cloudflare créé |
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
| Graphe CI | `deploy-cloudflare` dépend de `verify`, uniquement sur un push `main` et si `CLOUDFLARE_DEPLOY_ENABLED == true` |
| Paramètres futurs | Jeton minimal dans l'environnement GitHub `cloudflare-production`, identifiant de compte en variable |
| État Cloudflare observé | Aucun projet Pages, Worker Four à Nu ou zone `fouranu.com` dans le compte connecté |
| Ancienne cible Atlas | Workflow producteur retiré ; OCI et preuves du 2026-08-23 restent historiques, plus chemin courant |

## Blocages avant publication

| Blocage | Impact | Condition de reprise |
| --- | --- | --- |
| Identité de l'éditeur, responsable de publication, adresse et contact exacts absents | Mentions légales incomplètes | Fournir les informations exactes par un canal approprié, sans secret dans Git |
| Quatre fichiers Koda 2 publics ne sont pas rapprochés de lignes exactes dans `research/assets.csv` | Le paquet exact ne passe pas encore la barrière média manuelle | Enregistrer source, timecode, titulaire, périmètre, crédit, personnes, éléments tiers, empreinte et preuve privée de chaque actif |
| Preuves privées non disponibles en CI | La CI ne peut pas autoriser seule la publication des médias | Validation humaine locale du paquet exact |
| Environnement Cloudflare non configuré | Le job de déploiement reste volontairement inactif | Créer l'environnement GitHub protégé, ajouter le jeton minimal et l'identifiant de compte, puis autoriser le premier déploiement |
| Zone, domaine, DNS et indexation non autorisés | Aucun site public ou indexable | Autorisations et preuves séparées après contrôle du premier déploiement |
| Aucun programme marchand actif | Aucun revenu affilié | Choisir et autoriser les partenaires, puis appliquer `rel="sponsored"` |

## Prochaines preuves

| Sujet | Type | Prochaine preuve | Phase |
| --- | --- | --- | --- |
| Utilité du parcours | Hypothèse | Cinq sessions décrites dans `EXPERIMENT.md` | F02 |
| Médias Koda 2 | Risque | Rapprochement complet des quatre fichiers publics et de leurs droits | F02/F03 |
| Candidat exact | Gate | Revue éditoriale, visuelle et légale du SHA livré, puis feu vert sur ce paquet | F03 |
| Premier déploiement | Activation | Run GitHub Actions vert après `Verify`, empreinte et contrôle de la version Cloudflare | F04 |
| Domaine public | Activation | Custom Domain, DNS, HTTP, routes, console, robots, sitemap et SHA contrôlés | F04 |
| Économie du modèle | Hypothèse | Trafic, clics et ventes d'un lancement autorisé | F05 |
