# Changelog

Ce fichier trace chaque changement livré avec son impact observable. Git reste
la source du diff technique exhaustif et les ADR expliquent les décisions
importantes.

## Non publié

- Promotion de Jupiter en produit web sous la marque `Four à Nu`. `Jupiter`
  reste le nom de code du dépôt.
- Acquisition de `fouranu.com` confirmée par le propriétaire le 2026-08-23,
  sans activation DNS, hébergement ou autre surface publique par le projet.
- Création du site Astro local. Le build produit 15 pages HTML, dont deux guides
  Ooni et six fiches modèle, avec sept tests de contrat.
- Ajout d'une indexation conditionnelle. Le mode par défaut place toutes les
  pages en `noindex` et garde le sitemap vide. Le mode opt-in limite
  l'indexation à l'accueil et la méthode, sans ouvrir les huit analyses Ooni.
- Ajout des métadonnées, canonicals, aperçus sociaux, données structurées
  honnêtes, bibliographies horodatées et contrôles croisés avec le registre de
  preuves.
- Ajout d'une barrière SEO normative propre à chaque article. Elle contrôle
  l'intention, la cannibalisation, la provenance, le rendu, les médias, les
  relations commerciales et l'autorisation finale avant indexation.
- Ajout du service Compose local avec healthcheck. Les vues à 1440, 1024, 390
  et 320 pixels ont été contrôlées sans débordement horizontal ni log console.
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
- Pivot vers une Saison 0 — Observatoire qui démarre sans attendre les fours,
  tout en réservant les formulations de test aux futures mesures physiques.
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
  de marque des requêtes portées par les pages et conserve les limites de preuve
  de la Saison 0.
- Remplacement des premières palettes ivoire et terracotta par la direction
  « Ligne de sole », en blanc, carbone, acier et bleu de mesure. Le logo, les
  favicons et la carte sociale locale suivent cette direction.
