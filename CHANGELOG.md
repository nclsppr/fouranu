# Changelog

Ce fichier trace chaque changement livré avec son impact observable. Git reste
la source du diff technique exhaustif et les ADR expliquent les décisions
importantes.

## Non publié

- Nouveau dossier `Gozney Arc Lite ou Tread` : une décision centrée sur les
  100 € d'écart, les gestes de transport et la récupération entre deux pizzas,
  avec un en-tête Arc Lite et une vue Tread issus de photographies officielles
  stylisées et autorisées.
- Le comparatif Halo Core / Halo Pro gagne un passage sur les petites fournées
  et deux relevés de température publiés. Le corpus ne justifie pas encore deux
  fiches séparées, qui répéteraient la même décision d'achat.
- Les relations commerciales des sources ont désormais un libellé français
  explicite ; le build refuse tout nouveau code interne non traduit. Le lien
  déplacé du face-à-face Halo Core / Halo Pro a également été corrigé.
- L'accueil et la rubrique Gozney accueillent les deux dossiers Gozney sans
  allonger le module de une. Le candidat passe à 27 pages HTML, quatorze guides,
  155 preuves, 62 questions, 75 médias et 26 URL indexables.

## 2026-08-24 - Fonds éditorial Ooni harmonisé

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `87580db54eb90a60a6f68c81828f80dc35929c3d`. Le run GitHub Actions
  [`32744201126`](https://github.com/nclsppr/fouranu/actions/runs/32744201126)
  a vérifié puis déployé l'artefact exact ; `/release.json`, les 25 URL du
  sitemap, les treize entrées RSS et les médias modifiés ont été contrôlés
  publiquement.

- Harmonisation des treize guides autour d'une voix plus directe : la réponse
  d'achat et les compromis arrivent avant les détails, le jargon est traduit et
  aucune expérience propre n'est revendiquée sans preuve.
- Remplacement des onze anciens en-têtes Ooni par des compositions fidèles
  issues de photographies officielles du fabricant. Les anciennes vues
  documentaires passent dans le corps des articles ; le registre atteint 71
  médias et les treize guides suivent désormais la même règle.
- Resserrement de l'accueil, de la gamme Ooni, de la méthode et du gabarit
  d'article pour réduire les empilements verticaux tout en conservant la largeur
  de lecture, les cibles tactiles et les tableaux défilables.
- Les sources sont repliées par défaut dans un panneau compact. Les libellés
  internes et identifiants de preuve ne sont plus exposés dans la lecture
  courante ; le lien, le passage et les conditions restent accessibles au
  second niveau.
- Revue responsive à 360, 768, 1 280 et 1 440 px des parcours critiques :
  aucun débordement, ordre des images conforme, médias chargés, focus visible,
  mouvement réduit préservé et console sans erreur.

## 2026-08-24 - Gozney et pétrins Ooni publics

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `e96d3ac265dfb24b14cf4dc1461a1985cdba50ac`. Le run GitHub Actions
  [`32736959106`](https://github.com/nclsppr/fouranu/actions/runs/32736959106)
  a vérifié puis déployé l'artefact exact ; `/release.json`, les nouvelles
  routes, les médias, les 25 URL du sitemap et les treize entrées RSS ont été
  contrôlés publiquement.
- Adoption d'une règle éditoriale durable : tout article produit nouveau ou
  substantiellement révisé s'ouvre sur une photo officielle du fabricant
  stylisée dans « Ligne de sole » ; les vues en situation viennent ensuite.
- La voix cible devient celle d'un guide d'achat accessible et accrocheur : la
  réponse et les compromis précèdent les détails techniques, sans revendiquer
  d'essai propre absent du registre. Le rattrapage du corpus public est tracé
  explicitement dans la roadmap et n'est pas encore présenté comme livré.
- Deux nouveaux guides publics rejoignent le build : le Gozney Arc XL
  et le choix entre les pétrins Ooni Halo Core et Halo Pro. Leurs en-têtes sont
  dérivés de photos officielles fabricant ; les vues documentaires viennent
  ensuite dans le corps des pages.
- L'accueil, les pages Ooni et Gozney, le flux RSS, le sitemap et les données
  structurées accueillent ces deux guides. Le build passe à 26 pages HTML,
  treize articles et 25 URL indexables.
- La gate refuse désormais tout nouvel article produit qui contourne la photo
  officielle stylisée, une provenance média approuvée ou l'ordre des visuels.
  Les onze anciens en-têtes restent une dette explicitement suivie.
- Les textes visibles ajoutés dans cette tranche ont reçu une passe de
  simplification : moins de vocabulaire interne, réponse d'achat plus directe
  et sources renvoyées vers un second niveau de lecture.

## 2026-08-24 - Tranche éditoriale post-V1 publique

- Le workflow de publication utilise désormais les actions d'artefact Node 24
  actuelles, épinglées par empreinte, sans changer le principe : un seul build
  vérifié est transmis à Cloudflare.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `eb12619007191c82d963017f598b462ca54bdc51`. Le run GitHub Actions
  [`32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541)
  a validé puis déployé l'artefact exact sur Cloudflare Workers Static Assets ;
  `/release.json`, les 22 URL du sitemap, les médias et les métadonnées ont été
  contrôlés sur le domaine public.
- Chaque dossier possède désormais une photo documentaire WebP en 1600 et
  960 px, avec texte alternatif, légende, source, timecode, empreintes et
  chaîne de droits. Les mêmes visuels structurent l'accueil et la gamme Ooni.
- Les onze dossiers sont répartis de façon stable entre Nicolas, Florian et
  Magali. La signature alimente la page, les métadonnées, les données
  structurées et le flux RSS sans biographie publique.
- L'accueil, les articles et les pages de confiance adoptent un rythme plus
  dense, des seuils responsive plus progressifs et des cibles de 44 px. Les
  bibliographies deviennent des références repliées et compactes.
- La copie publique ne cite plus les anciens outils rédactionnels. Un test
  bloque leur retour dans les sorties HTML, texte et XML. L'ancienne route
  technique de lecture automatisée a été retirée.
- Le protocole média et sa gate reconnaissent les photogrammes dont
  l'extraction et la republication ont reçu l'autorisation explicite du
  propriétaire, avec preuve privée hors Git.

## 2026-08-24 - V1 publique

- Publication de la V1 sur [`fouranu.com`](https://fouranu.com) depuis le SHA
  `c5da961ceabcd021c5501d1cbda3ddb00c57c2ee`. Le run GitHub Actions
  [`32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972)
  a validé puis déployé le même artefact sur Cloudflare Workers Static Assets.
  Le domaine personnalisé, le DNS, HTTPS avec TLS 1.2 ou plus récent et les 22
  URL indexables sont actifs.

- Préparation du paquet public V1 : 23 pages HTML, 22 URL indexables, une sonde
  `/health`, une empreinte `/release.json`, des mentions légales et deux canaux
  de contact sans analytics, publicité, formulaire ni cookie.
- GitHub Actions construit l'artefact indexable une seule fois dans `Verify`,
  le conserve sous le SHA exact puis livre ce même paquet à Cloudflare. Le job
  reste protégé par l'environnement de production.
- Retrait des quatre médias Koda 2 dont la chaîne de droits n'était pas
  rapprochée du registre. Une nouvelle gate refuse désormais tout fichier
  public sous `images/articles` absent de `research/assets.csv` et tout fichier
  enregistré mais manquant.
- Recomposition de l'accueil selon la hiérarchie éditoriale du prototype : une
  une 8/4, des dossiers modèles, un guide par contraintes et la méthode, sans
  reprendre ses faux scores, ses promesses de test, ses médias ni ses routes
  fictives.
- Adoption et optimisation du logo Four à Nu fourni, désormais rendu dans
  l'en-tête et le pied de page. Sa provenance et ses empreintes source et web
  entrent dans le registre des médias.
- Passage de l'accent bleu à deux oranges accessibles, tout en conservant IBM
  Plex, la grille, les fonds carbone et la lecture documentaire de « Ligne de
  sole ». Le prototype reste une référence de composition, pas une source de
  contenu ou d'actifs.
- Généralisation des routes d'analyse par marque, des canonicales, du RSS, du
  sitemap, de `llms.txt` et des bibliographies depuis les `evidenceIds`
  explicites, sans créer de dossier Gozney sans contenu réel.
- Correction du débordement des figures sur les articles longs mobiles et ajout
  d'un contrat automatisé sur le logo public.
- Adoption de Cloudflare Workers Static Assets par l'ADR-0004. Wrangler est
  épinglé et validé à sec ; le job GitHub Actions ne peut s'exécuter sur `main`
  qu'après `Verify` et un signal d'activation explicite.
- Retrait de l'ancien workflow producteur Atlas et de ses scripts de paquet afin
  de conserver une seule cible publique future. Les ADR et preuves Atlas
  antérieures restent historiques.
- Renforcement de la page Ooni avec les neuf fiches issues du contenu réel, une
  liste structurée, les résumés et les dates de mise à jour. Le balisage Article
  expose aussi le nombre de mots et le temps de lecture.
- Adoption du modèle documentaire permanent par l'ADR-0002. Le site attribue
  les expériences tierces, refuse notes et balisage d'avis, et emploie les
  classes `FAB`, `T-MES`, `T-OBS`, `FAN-SYN` et `FAN-INF`.
- Refonte du site public en média éditorial : accueil hiérarchisé, gabarit
  d'article avec signature, dates, sommaire, rail de preuve, limites,
  bibliographie et accès direct à chaque preuve.
- Passage à 23 pages HTML et onze analyses Ooni, dont les neuf modèles de la
  gamme France, avec onze tests de contrat et 118 preuves croisées.
- Ajout des pages auteur, À propos, méthode, corrections, transparence
  commerciale et confidentialité, sans analytics, publicité ou lien rémunéré
  actif.
- Extension du contrat SEO : 22 URL explicitement éligibles au build de
  production, 404 seule hors index, RSS, `llms.txt`, canonicals, dates,
  données structurées `Article`, `Organization`, `ProfilePage` et fils d'Ariane.
- Ajout d'une illustration d'accueil originale assistée par IA, en esquisse
  d'atelier, avec deux WebP responsive, mention visible et enregistrement de
  provenance. Aucun média tiers n'a servi d'entrée.
- Extension du registre aux photogrammes autorisés, dérivés IA et originaux IA.
  Un dérivé de vidéo reste une illustration déclarée et ne devient jamais une
  preuve.
- Ajout d'un producteur Atlas reproductible : archive statique et inventaire de
  routes déterministes, validations adversariales, publication OCI immuable et
  attestations GitHub. L'admission et l'activation restent séparées.
- Adoption de l'[ADR-0003](docs/decisions/0003-coordination-secrets-atlas.md),
  qui impose la mise à jour du registre canonique des secrets Atlas dans
  `nclsppr/vps-infra` pour chaque déploiement, rotation ou révocation de secret.
- Promotion de Jupiter en produit web sous la marque `Four à Nu`. `Jupiter`
  reste le nom de code du dépôt.
- Acquisition de `fouranu.com` confirmée par le propriétaire le 2026-08-23,
  avant son activation publique avec la V1 le 2026-08-24.
- Création du site Astro local, depuis consolidé dans le média documentaire de
  23 pages décrit ci-dessus.
- Ajout d'une indexation conditionnelle. Le mode par défaut place toutes les
  pages en `noindex` et garde le sitemap vide ; le mode de production n'ouvre
  que les 22 URL explicitement éligibles.
- Ajout des métadonnées, canonicals, aperçus sociaux, données structurées
  honnêtes, bibliographies horodatées et contrôles croisés avec le registre de
  preuves.
- Ajout d'une barrière SEO normative propre à chaque article. Elle contrôle
  l'intention, la cannibalisation, la provenance, le rendu, les médias, les
  relations commerciales et l'autorisation finale avant indexation.
- Ajout du service Compose local avec healthcheck.
- Fermeture locale de F01 après une gate complète verte. Lighthouse 13.4.1
  mesure 98 en performance, 100 en accessibilité et 100 en bonnes pratiques sur
  l'accueil et l'analyse Koda 2 ; le score SEO de 66 vient uniquement du
  `noindex` volontaire de la preview.
- Connexion du dépôt canonique `nclsppr/fouranu`, conservation du commit GitHub
  initial dans l'historique et première CI `Verify` verte sur `main`.
- Contrôle des variantes défensives et des identifiants publics ; `@fouranu` est
  pris sur TikTok et bloqué sur X, tandis que `@fouranu_media` ne présente aucun
  profil public détecté sur les plateformes principales.
- Recherche élargie sans collision exacte sur `Four à Nu` et ses variantes ; le
  risque reste faible à modéré en raison de `MISE A NU` en classe 41 et de
  l'emploi technique descriptif de `four nu`.
- Initialisation locale de Jupiter comme exploration depuis Project Foundation `v0.5.2`.
- Ajout d'une étude de faisabilité datée sur le référencement, l'affiliation, X et la niche pizza.
- Définition d'une expérience de 90 jours avec budget, métriques et conditions d'arrêt.
- Adoption historique d'une Saison 0 documentaire, désormais remplacée comme
  autorité courante par le modèle permanent de l'ADR-0002.
- Ajout d'une taxonomie de preuve, de registres vérifiés et d'une barrière de
  droits avant extraction, traitement IA ou publication d'un visuel tiers.
- Ajout d'un modèle de demande d'autorisation couvrant l'usage commercial,
  l'IA, les dérivés, les supports, la durée et l'attribution.
- Ajout d'une vérification locale des preuves privées, d'une garde contre leur
  commit et de tests adversariaux sur les registres de preuve et de droits.
- Priorisation d'Ooni avec un inventaire daté des neuf fours France et une carte
  de 35 contenus couvrant chaque modèle et les décisions d'achat distinctes.
- Constitution du premier corpus : 50 questions publiques, 16 vidéos de 9
  créateurs, 72 passages horodatés et 16 références d'intégration non publiées.
- Extension du contrôle éditorial au registre des questions et conservation de
  quatre incohérences fabricant sans normalisation silencieuse.
- Classement de huit noms selon la clarté thématique, la distinction d'entité,
  la mémorisation et la portée éditoriale, avec `Four à Nu` en tête avant son
  adoption par le propriétaire.
- Double contrôle RDAP, WHOIS et DNS des huit `.com`, tous sans enregistrement
  détecté le 2026-08-23 à 15:04 CEST, sans achat ni réservation.
- Pré-contrôle exact dans DATA INPI, TMview et les entreprises françaises ;
  maintien de `Four à Nu` et `Faits de Four`, réserve sur `Dossier 430` et rejet
  de `Focale Pizza` en raison de l'encombrement de `Focale`.
- Ajout d'un relevé de demande France qui confirme l'intérêt pour les fours à
  pizza, Ooni et la napolitaine tout en signalant le blocage Google Trends et la
  nature estimative des volumes Semrush.
- Proposition d'une architecture unique : `Four à Nu` comme marque,
  `Dossier 430` pour les formats longs et `Faits de Four` pour les vérifications
  courtes.
- Ajout d'un contrat de découvrabilité Google, Bing et ChatGPT qui sépare le nom
  de marque des requêtes portées par les pages et conserve les limites du
  corpus documentaire.
- Remplacement des premières palettes ivoire et terracotta par la direction
  « Ligne de sole », en blanc, carbone, acier et bleu de mesure. Le logo, les
  favicons et la carte sociale locale suivent cette direction.
