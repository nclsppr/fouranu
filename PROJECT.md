# Four à Nu

Contrat stable du produit. L'état observé vit dans [`STATUS.md`](STATUS.md),
l'ordre de livraison dans [`ROADMAP.md`](ROADMAP.md) et l'exploration d'origine
reste consignée dans [`BRIEF.md`](BRIEF.md).

## Identité

| Champ | Valeur |
| --- | --- |
| Nom | Four à Nu |
| Nom de code du dépôt | Jupiter |
| Propriétaire | nclsppr |
| Classe | Produit |
| Langue initiale | Français |
| Domaine | `fouranu.com`, acquisition confirmée par le propriétaire le 2026-08-23 |
| Surface de production | Cloudflare Workers Static Assets via GitHub Actions après la gate `Verify` ; l'état d'activation vérifié vit dans `STATUS.md` |
| Socle adopté | [`FOUNDATION.md`](FOUNDATION.md) |

## Problème

Un acheteur francophone de four à pizza doit rapprocher des dimensions, des
énergies, des accessoires, des coûts et des essais publiés selon des protocoles
différents. Les pages marchandes et les comparatifs génériques rendent cette
décision difficile à vérifier.

## Utilisateur principal

| Utilisateur | Situation | Besoin | Risque principal |
| --- | --- | --- | --- |
| Amateur francophone déjà en intention d'achat | Il choisit un four domestique entre 300 et 1 500 euros, avec des contraintes de place, d'énergie, de débit et de budget | Comparer les compromis et retrouver la provenance de chaque affirmation | Confondre une donnée fabricant, une observation tierce et une conclusion éditoriale de Four à Nu |

Le matériel professionnel reste une extension possible. Il n'entre pas dans la
promesse du premier produit.

## Résultat attendu

Four à Nu doit permettre à cet acheteur de réduire sa liste de choix, de
comprendre les compromis restants et de vérifier les sources utilisées. Le
produit public est aujourd'hui un média documentaire : il confronte les données
fabricant, les mesures et observations publiées par des tiers, puis produit des
synthèses et inférences Four à Nu dont les prémisses et les limites restent
visibles.

À terme, Four à Nu vise à inventorier puis tester progressivement les fours à
pizza domestiques commercialisés en France, en commençant par les modèles des
marques de référence, puis les accessoires utiles et différents pétrins. Cette
ambition ne décrit pas l'état actuel : aucun essai physique Four à Nu n'est
publié avant l'adoption et l'exécution d'un protocole de première main traçable.

### Preuves de succès

| Preuve | Situation de départ | Cible | Source |
| --- | --- | --- | --- |
| Compréhension de la provenance | Aucune session sur le produit web | Au moins quatre participants sur cinq distinguent fabricant, tiers et Four à Nu | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Utilité du parcours de décision | Aucun sélecteur utilisable | Au moins trois participants sur cinq identifient une incertitude résolue | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Intérêt commercial | Aucun trafic ni revenu observé | Mesures de la porte 3 atteintes sans violation éditoriale ou de plateforme | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Reproductibilité | Aucun site applicatif vérifié | Installation propre, build statique, service Compose sain et gate complète verte | `site/`, `compose.yaml` et `scripts/verify.sh` |

Ces cibles ne sont pas des résultats acquis. [`STATUS.md`](STATUS.md) indique ce
qui est réellement vérifié.

## Périmètre

### Inclus

- un seul site francophone sous la marque Four à Nu ;
- un parcours de choix par contraintes ;
- une méthode publique, une politique de correction, un annuaire de la
  rédaction et un profil individuel illustré par un portrait fourni et
  enregistré pour chaque auteur ;
- des analyses documentaires multi-marques dont la provenance est visible ;
- des dossiers sur les fours, pétrins et matériels écrits comme des guides
  d'achat accessibles, avec un en-tête issu d'une photo officielle du fabricant
  stylisée dans la direction du site ;
- un programme futur d'essais de première main sur les fours, accessoires et
  pétrins, activé seulement après un inventaire daté du marché, un protocole
  accepté et des sessions enregistrées ;
- une preview en `noindex` par défaut et des pages indexables uniquement après
  passage de leur barrière éditoriale et autorisation de publication ;
- un futur parcours de mesure des clics et conversions, soumis aux règles de consentement et des partenaires ;
- un artefact statique déployé sur Cloudflare Workers Static Assets par GitHub
  Actions, uniquement après la gate du même SHA et une autorisation explicite
  du propriétaire.

### Non-objectifs

- créer une ferme de sites ou des pages satellites ;
- répondre automatiquement sur X à partir de recherches de mots-clés ;
- présenter une source tierce comme une expérience de Four à Nu ;
- affirmer que tous les fours ont été testés ou classer les « meilleures
  marques » sans inventaire daté, critères explicites et essais comparables ;
- publier une note, des étoiles, un classement pseudo-scientifique ou un
  balisage `Review` ou `AggregateRating` ;
- ouvrir une offre professionnelle avant validation de l'utilité domestique ;
- activer DNS, hébergement, analytics, affiliation ou comptes sociaux sans autorisation distincte.

### Conditions d'arrêt ou de réévaluation

Les seuils, dates et conditions d'arrêt de l'expérience documentaire restent dans
[`EXPERIMENT.md`](EXPERIMENT.md). La classe Produit signifie que le dépôt porte
une application durable. Elle ne transforme pas les hypothèses de l'expérience
en faits et ne suffit pas à autoriser une publication. La V1 a reçu son feu vert
explicite avant son lancement.

## Sources de vérité

| Concept | Source canonique | Statut |
| --- | --- | --- |
| Contrat produit | `PROJECT.md` | Actuel |
| État vérifié | [`STATUS.md`](STATUS.md) | Actuel, daté |
| Ordre de livraison | [`ROADMAP.md`](ROADMAP.md) | Actuel |
| Historique de l'exploration | [`BRIEF.md`](BRIEF.md) | Historique |
| Faisabilité et modèle | [`FEASIBILITY.md`](FEASIBILITY.md) | Référence |
| Expérience et métriques | [`EXPERIMENT.md`](EXPERIMENT.md) | Expérimental |
| Contenus prioritaires | [`OONI-CONTENT-MAP.md`](OONI-CONTENT-MAP.md) | Actuel |
| Preuves, droits et publication | [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) | Normatif |
| Contrôle SEO par article | [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) | Normatif |
| Modèle documentaire | [`docs/decisions/0002-media-documentaire-permanent.md`](docs/decisions/0002-media-documentaire-permanent.md) | Décision acceptée |
| Programme d'essais et couverture du marché | [`docs/decisions/0006-programme-essais-et-couverture-du-marche.md`](docs/decisions/0006-programme-essais-et-couverture-du-marche.md) | Décision acceptée ; non activée |
| En-tête produit et voix éditoriale | [`docs/decisions/0005-en-tete-officiel-et-voix-accessible.md`](docs/decisions/0005-en-tete-officiel-et-voix-accessible.md) | Décision acceptée |
| En-tête original des guides multi-produits | [`docs/decisions/0008-en-tete-original-guides-multi-produits.md`](docs/decisions/0008-en-tete-original-guides-multi-produits.md) | Décision acceptée ; validation humaine obligatoire avant publication |
| Cible d'hébergement et chemin de déploiement | [`docs/decisions/0004-cloudflare-workers-static-assets.md`](docs/decisions/0004-cloudflare-workers-static-assets.md) | Décision acceptée |
| Marque et découvrabilité | [`BRAND-SEO.md`](BRAND-SEO.md) | Normatif |
| Design system | [`DESIGN.md`](DESIGN.md) | Actuel |
| Code du site | `site/` | Actuel ; la V1 issue de ce dépôt est publiée sur `fouranu.com` |
| Registres éditoriaux | `research/evidence.csv`, `research/questions.csv`, `research/assets.csv` | Actuel |
| Configuration locale intégrée | `compose.yaml` | Actuelle, service `site` et healthcheck vérifiés localement |
| Documentation interne | `documentation.json`, `docs-nimbus/` et [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) | Actuel |
| Changements livrés | [`CHANGELOG.md`](CHANGELOG.md) | Historique |

## Architecture

### Composants

| Composant | Rôle | État | Exécution | Source et preuve |
| --- | --- | --- | --- | --- |
| Site Four à Nu | Générer l'accueil, le parcours de choix, les contenus et leur partage progressif en HTML statique | Production publique | Build, service local et production | `site/`, 40 pages HTML dont quatre guides et un hub accessoires publics et indexables ; production exacte dans `STATUS.md` |
| Registres éditoriaux | Porter les affirmations, questions et médias avec leur provenance | Actuel | Vérification | `research/`, validé par les scripts éditoriaux |
| Gate de contenu public | Rapprocher pages, identifiants de preuve, droits, bandeaux et directives d'indexation | Actuel | Vérification | `scripts/verify.sh`, tests du site et [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) |
| Nimbus | Rendre les Markdown internes navigables et recherchables | Actuel | Build local et CI | `docs-nimbus/` |
| Docker Compose | Lancer le parcours local intégré | Actuel | Développement local | `compose.yaml`, service `site` sain lors du dernier contrôle local |
| Cloudflare Workers Static Assets | Servir l'artefact statique vérifié sur `fouranu.com` | Actif | Production | `site/wrangler.jsonc`, GitHub Actions et ADR-0004 ; première publication vérifiée dans `STATUS.md` |

### Flux éditorial cible

1. L'auteur part d'une question d'achat et des registres versionnés.
2. Il formule d'abord la réponse et les compromis en langage courant, sans
   revendiquer d'essai propre absent du registre.
3. Pour une fiche produit, il compose l'en-tête à partir d'une photo officielle
   publiée par le fabricant. Un guide multi-produits peut utiliser une
   illustration générique originale selon l'ADR-0008 ; les vues documentaires
   viennent ensuite lorsqu'elles sont nécessaires et autorisées.
4. La page référence les identifiants de preuve et de média nécessaires ; sa
   signature reprend le portrait enregistré de la personne référente.
5. La gate refuse une provenance absente, un média non publiable, une
   expérience tierce racontée à la première personne, une note, un balisage
   d'avis ou un lien rémunéré mal déclaré.
6. Astro génère un artefact statique avec métadonnées, images sociales,
   favicon, canonical, sitemap texte et image, puis directives d'indexation
   cohérentes. Le partage progressif réutilise strictement l'URL canonique.
7. Chaque nouveau paquet reste en preview locale et `noindex` jusqu'aux
   contrôles éditoriaux, visuels et techniques, puis jusqu'au feu vert explicite
   du propriétaire.
8. GitHub Actions ne peut déployer ce SHA vers Workers Static Assets qu'après
   la réussite de `Verify` et l'activation explicite du chemin de déploiement.
   La V1 a reçu séparément les autorisations de premier déploiement, de domaine,
   de DNS et d'indexation. Toute nouvelle mutation de ces éléments garde sa
   propre autorisation.

### Dépendances externes

| Dépendance | Usage prévu | Données transmises | État et mode d'échec |
| --- | --- | --- | --- |
| YouTube | Lecteur officiel pour une source tierce autorisée | Requête du navigateur vers YouTube lors du chargement accepté | Aucun lecteur public actuellement ; la page reste compréhensible sans lui |
| Marchands et programmes partenaires | Liens fabricants directs ; liens Amazon.fr attribués à `fouranu-21` après autorisation explicite | Navigation vers le marchand ; l’identifiant partenaire est porté par l’URL, sans script Amazon chargé sur Four à Nu | L’affiliation Amazon est autorisée, publique et déclarée ; les sources canoniques restent sans suivi et le contenu reste accessible sans cliquer |
| Applications de partage | Feuille système native, WhatsApp ou client e-mail choisi par le lecteur | Titre, description et URL canonique seulement après une action explicite | Aucun SDK social ni requête tierce au chargement ; e-mail reste disponible sans JavaScript |
| Moteurs de recherche | Découverte des pages publiques | Pages, sitemap et métadonnées publiques | Aucune soumission active ; l'indexation n'est jamais garantie |
| GitHub Actions et Cloudflare Workers | Déployer l'artefact statique du SHA vérifié vers Workers Static Assets | Artefact public et données techniques minimales de déploiement | Actif sur `main` ; chaque déploiement dépend de `Verify`, preuves dans `STATUS.md` |
| DNS | Relier `fouranu.com` au Worker autorisé | Noms et routage publics | Zone, domaine personnalisé et routage HTTPS actifs |

## Environnements

| Environnement | Configuration canonique | Accès | État vérifié |
| --- | --- | --- | --- |
| Développement | `compose.yaml` | `http://127.0.0.1:4321` | Build et healthcheck vérifiés localement |
| CI | `.github/workflows/verify.yml` | [GitHub Actions](https://github.com/nclsppr/fouranu/actions) | Workflow `Verify` exécuté avec succès sur `main` |
| Preview | Artefact statique local avec `noindex` ; éventuel accès Cloudflare à autoriser séparément | Aucun | Candidat reproductible, aucune preview distante activée par défaut |
| Production | Artefact du SHA vérifié, déployé par GitHub Actions vers Workers Static Assets après autorisation | [`https://fouranu.com`](https://fouranu.com) | V1 active, indexable et servie en HTTPS avec TLS 1.2 ou plus récent |

## Commandes canoniques

| Action | Commande | Disponibilité et résultat attendu |
| --- | --- | --- |
| Vérifier le dépôt | `./scripts/verify.sh` | Disponible ; contrôle les documents, registres, Compose, le site Astro et Nimbus |
| Vérifier Compose | `python3 scripts/check_compose.py` | Disponible ; valide le service applicatif, son healthcheck et les contraintes du pack `full` |
| Construire la documentation interne | `npm run build --prefix docs-nimbus` | Disponible ; génère Nimbus depuis les Markdown classés |
| Développer le site | `docker compose up --build --wait` | Disponible ; construit et lance le service local avec healthcheck |
| Vérifier le site | `npm run check --prefix site` | Disponible ; typecheck, construit 40 pages HTML et exécute vingt tests de contrat |
| Construire le site | `npm run build --prefix site` | Disponible ; génère l'artefact statique sous `site/dist/` |
| Arrêter le parcours local | `docker compose down` | Disponible dès qu'un service a été lancé ; préserve les volumes |
| Préparer le candidat Cloudflare | `npm run build --prefix site` | Produit l'artefact statique attendu par Workers Static Assets ; ne déploie et n'active rien |
| Vérifier le contrat Cloudflare | `npm run cloudflare:check --prefix site` | Valide localement la configuration et le paquet sans créer de Worker ni publier d'URL |
| Déployer | Workflow GitHub Actions `Verify` sur `main` | Le job `deploy-cloudflare` dépend de `verify`, télécharge son artefact exact et exige l'environnement `cloudflare-production` activé |

## Données, sécurité et confidentialité

- Les registres versionnés contiennent des sources publiques, des identifiants
  éditoriaux et des statuts minimaux. Ils ne contiennent ni coordonnées privées
  ni fichiers médias tiers.
- Les preuves d'autorisation et coordonnées restent sous `research/private/`,
  hors Git. La CI ne peut pas les lire.
- Aucun secret, compte marchand, identifiant analytics, SDK social ou clé d'API
  n'est requis pour la vérification locale. Le déploiement Cloudflare utilise un
  jeton minimal conservé dans l'environnement GitHub protégé, jamais dans le
  dépôt.
- Le premier site n'a ni compte utilisateur, ni base de données, ni paiement.
- Toute mesure d'audience future exige une décision sur la minimisation, le
  consentement, la rétention et les tiers avant activation.

## Qualité

| Risque | Contrôle automatisé attendu | Contrôle manuel attendu |
| --- | --- | --- |
| Contenu sans provenance | Registres, références croisées et tests de contrat | Lecture des sources et limites avec la barrière SEO par article |
| Confusion entre source et conclusion | Refus de la première personne pour une expérience tierce, des notes et des schémas d'avis | Vérification du bandeau documentaire et des attributions avant la première recommandation |
| Régression SEO | Build, liens, canonical, sitemap, robots et données structurées | Inspection de l'HTML et des aperçus sociaux |
| Interface inaccessible | Typecheck, tests et contrôles statiques applicables | Mobile, bureau, clavier, focus, contraste et mouvement réduit |
| Publication interne accidentelle | Séparation entre `site/` et `docs-nimbus/` | Inspection de l'artefact public |

## Livraison

- Branche canonique : `main`.
- Remote canonique : `origin`, dépôt GitHub public
  [`nclsppr/fouranu`](https://github.com/nclsppr/fouranu).
- Politique actuelle : chaque tranche cohérente passe les gates locales, est
  poussée sur `main`, puis sa CI distante est vérifiée conformément à `P18`.
- Artefact cible : sortie statique générée par `site/`.
- Déploiement actif : Cloudflare Workers Static Assets par GitHub Actions,
  uniquement pour le SHA dont la gate `Verify` a réussi et après activation
  explicite du job protégé.
- La préparation du workflow n'autorise ni le premier déploiement, ni la
  création ou l'adoption d'une zone, ni le domaine personnalisé ou le DNS, ni
  le passage d'un paquet en indexable.
- Rollback cible : précédent déploiement correspondant à un SHA vérifié.
- Vérification finale d'une publication : checks CI, contrôle HTTP, rendu
  mobile et bureau, console, routes, robots, sitemap et empreinte de l'artefact.

## Responsabilités

| Zone | Propriétaire | Source de contrôle |
| --- | --- | --- |
| Produit et ordre de livraison | nclsppr | `PROJECT.md` et `ROADMAP.md` |
| Contenu, provenance et droits | nclsppr | `EDITORIAL-PROTOCOL.md` et `research/` |
| Design et accessibilité | nclsppr | `DESIGN.md` et profil web |
| Publication et services externes | nclsppr | Autorisation explicite, ADR-0004 et preuves dans `STATUS.md` |
