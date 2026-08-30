# Changelog

Ce fichier trace chaque changement livré avec son impact observable. Git reste
la source du diff technique exhaustif et les ADR expliquent les décisions
importantes.

## Non publié

### 2026-08-31 - Passe SEO globale et couverture Amazon par objet

- Le header place désormais `Accessoires` en première position sur les quarante
  pages, renomme l’entrée ambiguë `Guides` en `Fours` et rend l’état actif
  visible sur les hubs comme sur leurs sous-pages. À 320 px, les six liens
  conservent leur largeur et défilent dans la navigation sans se chevaucher.
- Les titres SEO des quatre guides accessoires sont harmonisés avec la marque ;
  l’accueil et les hubs Accessoires, Fours, Ooni et Gozney nomment leur sujet
  principal dans le H1. Le hub Accessoires expose le même couple
  `CollectionPage` et `ItemList` que les deux hubs de marque.
- Les dates éditoriales et techniques reflètent les modifications réelles. Les
  pages fixes exposent `dateModified`, le sitemap cesse d’appliquer un plancher
  artificiel aux articles et ajoute les images propres des hubs Ooni et Gozney,
  pour 39 URL et 25 images dans le build indexable.
- Un registre canonique couvre les 34 produits commerciaux précis du corpus.
  Seize accessoires et dix produits Ooni ont une offre Amazon.fr exacte
  contrôlée ; le Koda 2 Max et les sept fours Gozney restent `not_found`, sans
  être présentés comme indisponibles ni remplacés par un produit voisin.
- Les dix-huit nouveaux contrôles Amazon sont inscrits dans le registre de
  preuves, portant celui-ci à 223 entrées. Chaque objet conserve désormais le
  territoire France, la date, le statut et son identifiant de preuve ; la gate
  rapproche exactement les 23 frontmatters et la couverture multi-article.
- Huit fours Ooni et le Halo Core reçoivent un nouveau lien Amazon.fr exact dans
  leur dossier canonique, en complément du lien fabricant. Les vingt-six objets
  vérifiés produisent 52 liens de CTA contrôlés ; tous utilisent
  `fouranu-21`, `rel="sponsored"` et la déclaration Partenaire Amazon.
- Les prix, stocks et quantités Amazon du registre de preuve restent conservés
  en interne, mais ne sont plus recopiés dans le HTML statique. Le texte public
  demande de relire modèle, vendeur, variante et contenu de l’offre au moment
  de commander.
- La déclaration Partenaire Amazon précède désormais les boutons dans le DOM.
  Les liens produit fabricant et Amazon portent l’objet exact, les liens de
  gamme sont qualifiés comme collections et la comparaison Halo parle bien de
  deux pétrins distincts.
- Le protocole éditorial et la gate exigent désormais `commercialObjects` pour
  tout produit identifiable présenté comme option d’achat, un contrôle Amazon
  daté et un lien exact lorsque l’offre est retrouvée. Les objets génériques et
  mentions incidentes ne sont pas transformés automatiquement en affiliation.
- La mise en page des figures d’article est bornée entre 769 et 1 024 px ; les
  grands tableaux gardent leur propre défilement sans provoquer de débordement
  du document. Les endpoints `/health` et `/release.json` reçoivent aussi
  `X-Robots-Tag: noindex, nofollow`.
- La suite du site passe de 20 à 22 contrats : ordre et états du header, marque
  dans tous les titres, H1 des hubs, collection Accessoires, dates, images de
  sitemap, inventaire commercial, liens Amazon exacts et absence de données
  marchandes volatiles publiques sont désormais verrouillés.
- `/llms.txt` décrit les parcours publics, la méthode et les 23 dossiers
  indexables sans recopier de lien affilié ; la preview masque cette liste.

## 2026-08-30 - Quatre guides accessoires publiés

- Le site ajoute un hub `/accessoires-pizza/` et quatre guides sur la pelle
  à pizza, les ciseaux à pizza, le thermomètre infrarouge et les bacs à pâtons.
  Les cinq routes sont publiques et indexables ; l'artefact contient
  39 URL dans le sitemap, 23 entrées RSS et 23 images d'article indexables.
- Chaque guide compare quatre produits commandables sur Amazon.fr lors de la
  vérification du 30 août 2026. Les seize destinations du catalogue sont
  préparées avec `tag=fouranu-21` ; prix, vendeurs et stocks restent
  explicitement variables.
- Les appels d’achat, liens Markdown et sources Amazon visibles sont normalisés
  au rendu : les 58 occurrences du build portent `rel="sponsored"` et une
  déclaration proche. Le registre de preuves conserve ses URL canoniques sans
  suivi. Le Halo Pro utilise le lien court affilié fourni par le propriétaire,
  tandis que le Halo Core garde sa destination Ooni non rémunérée.
- Un tirage réalisé une seule fois puis figé dans les frontmatters attribue la
  pelle à Florian, les ciseaux à Magali, et le thermomètre comme les bacs à
  Nicolas. Chaque texte conserve une voix personnelle sans revendiquer d'essai
  physique absent du registre.
- Quatre compositions génériques originales fournissent huit WebP aux formats
  1 600 × 900 et 960 × 540. L'ADR-0008 encadre cette exception réservée aux
  guides multi-produits ; la seconde passe visuelle est acquise et leur statut
  de validation humaine est `approved`.
- La page d’accueil ouvre désormais un accès immédiatement visible au rayon et
  à ses quatre guides. Les dix-neuf dossiers historiques reçoivent 31 liens
  contextuels vers la pelle, le thermomètre ou les bacs ; le guide des ciseaux
  n’est pas greffé artificiellement à un texte qui ne parle pas de découpe.
- Quatre planches comparatives originales ajoutent les familles d’objets dans
  le corps des guides, sans pixel Amazon, marque ou modèle commercial exact.
  Leurs huit dérivés responsive restent soumis à la même validation humaine.
- Le favicon et les icônes installables reçoivent des URL `v2` afin de sortir
  des caches persistants de Safari et Google. Les actifs actuellement publics
  étaient déjà corrects octet pour octet ; les anciennes URL et le fichier ICO
  racine restent disponibles comme replis, et aucune purge Cloudflare n’est
  nécessaire.
- Les registres passent de 168 à 205 preuves et de 91 à 107 entrées média. Les
  seize nouveaux WebP possèdent leur URL de publication. Le site construit 40
  pages et ses 20 contrats sont verts. Le propriétaire a donné son feu vert
  explicite au paquet exact, à son indexation, au push sur `main` et au
  déploiement.
- Le SHA applicatif `cdda6ea5031ece85df4bd12e611b39b1ce8f60c1` est publié par
  le [run GitHub Actions `33319240810`](https://github.com/nclsppr/fouranu/actions/runs/33319240810),
  vert pour `verify` et `deploy-cloudflare`. `/release.json`, les cinq routes,
  les seize WebP, les 58 liens Amazon, les quatre favicons versionnées et leurs
  replis ont été contrôlés sur `fouranu.com`.
- Le domaine public sert 39 URL de sitemap, 23 entrées RSS et 23 images de
  sitemap. La revue navigateur à 360 et 1 280 px ne relève ni débordement, ni
  image cassée, ni erreur console. Les quatre guides sont marqués « Publié » et
  leurs déclarations Amazon sont visibles.
- L'audit des images produit confirme que les vignettes Amazon ne peuvent être
  ajoutées que comme Contenu du Programme fourni par SiteStripe ou Creators API,
  servi par Amazon, lié au produit et non transformé. Aucun fichier Amazon n'est
  téléchargé, mis en cache, committé ou envoyé à une IA dans cette tranche ; une
  future activation devra aussi réviser la promesse « aucun appel avant clic ».
- Les dates visibles et structurées restent factuelles : dix-neuf dossiers ont
  été publiés le 24 août 2026 et les quatre guides accessoires le 30 août. Elles
  ne sont pas antidatées au hasard ; une variation de mise en avant relève d'un
  ordre éditorial distinct.

## 2026-08-27 - Portraits auteur remplacés sans retouche

- Nicolas, Florian et Magali utilisent les trois nouvelles photographies
  fournies dans cet ordre par le propriétaire éditorial. Aucun filtre, grain,
  recadrage, correction ou transformation créative n'est appliqué : seule
  l'optimisation de diffusion modifie les fichiers sources.
- Les six dérivés publics conservent leurs URL et leurs dimensions de 192 et
  800 px. Le redimensionnement, la compression WebP et le retrait des
  métadonnées ramènent leur poids cumulé de 193 974 à 145 488 octets, soit une
  baisse de 25 % sans changer les URL ni les attributions d'articles.
- Les pages profil adoptent un cadre carré afin de montrer ces fichiers carrés
  sans le recadrage 4:3 auparavant imposé par la mise en page. L'annuaire et les
  bulles de 48 px conservent leur comportement.
- Le registre média conserve uniquement les empreintes des trois sources
  privées et des six dérivés publics ; les JPEG fournis restent hors Git.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `27761ee6d9f3756891ddb3ed43c2e9452bebaf37`. Le run GitHub Actions
  [`33097444182`](https://github.com/nclsppr/fouranu/actions/runs/33097444182)
  a vérifié puis déployé l'artefact exact.
- `/release.json`, les six fichiers WebP, les trois profils et une signature
  d'article par auteur ont été contrôlés sur le domaine public. Les empreintes
  servies correspondent au registre, les portraits chargent sans débordement et
  la console reste vide à 360 px.

## 2026-08-27 - Images de tête dégagées

- Les légendes des dix-neuf images de tête et de la une ne recouvrent plus les
  fours. Une attribution courte reste immédiatement sous chaque visuel, en
  casse courante ; la réserve sur la valeur de preuve n'apparaît plus qu'une
  fois dans le bloc « Comment lire ce guide ». Les crédits et timecodes des
  photogrammes du corps restent inchangés.
- Le crédit de chaque article est rapproché de l'attribution canonique de son
  média. Le composite Halo Core ou Pro conserve ainsi le pluriel requis pour
  ses photographies sources, sans rallonger les autres légendes.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA
  `2c087e39f3009f5aa7f6e853baa846f78c87b32a`. Le run GitHub Actions
  [`33094600492`](https://github.com/nclsppr/fouranu/actions/runs/33094600492)
  a vérifié puis déployé l'artefact exact.
- `/release.json`, l'accueil et les dix-neuf articles ont été contrôlés sur le
  domaine public. La page Gozney a été relue à 360 px : le four n'est plus
  recouvert, le crédit commence après l'image, aucun débordement ni message
  console n'apparaît.

## 2026-08-27 - Portraits réels dans les signatures

- Les portraits réels fournis pour Nicolas, Florian et Magali remplacent les
  monogrammes sur l'annuaire et les profils. Les captures sont recadrées hors de
  toute interface, harmonisées localement par une correction sobre et un grain
  léger, puis publiées en WebP 192 et 800 px sans métadonnée de prise de vue.
- Chaque dossier montre désormais le visage de sa personne référente dans une
  bulle de 48 px reliée à son profil. L'unique gabarit garantit la concordance
  avec les dix-neuf attributions enregistrées ; les schémas `Person` reprennent
  la même image canonique.
- La taxonomie média ajoute `author-portrait` pour distinguer ces six dérivés
  des preuves produit et des illustrations. La gate exige droits commerciaux,
  accord à l'image, traitement limité aux opérations autorisées, empreintes source et dérivé,
  validation humaine et périmètre de publication. Le registre passe de 85 à
  91 médias sans ajouter de preuve produit.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `6922c478743764574eed6080294d255f0c4d8170`. Le run GitHub Actions
  [`33091288546`](https://github.com/nclsppr/fouranu/actions/runs/33091288546)
  a vérifié puis déployé l'artefact exact.
- `/release.json`, les six fichiers WebP, l'annuaire, les trois profils et les
  dix-neuf articles ont été contrôlés sur le domaine public. Chaque article
  sert exactement le portrait 192 px de son auteur et renvoie vers son profil ;
  les six empreintes publiques correspondent au registre.

## 2026-08-27 - Profils individuels et signatures incarnées

- Nicolas, Florian et Magali disposent chacun d'une page canonique avec leur
  parcours, leur rôle éditorial et la liste des dossiers dont ils sont les
  personnes référentes. L'annuaire collectif reste disponible et relie ces
  profils.
- Un tirage équilibré effectué une seule fois répartit les dix-neuf dossiers
  entre Nicolas (7), Florian (6) et Magali (6). Les résultats sont enregistrés
  dans les frontmatters ; aucun auteur n'est choisi aléatoirement pendant le
  build.
- La page de Florian distingue ses prises en main personnelles des analyses
  documentaires de Four à Nu. Les profils utilisent des monogrammes tant que
  les photographies réelles annoncées par le propriétaire ne sont pas fournies.
- Les signatures visibles, métadonnées `article:author`, schémas `Article`,
  profils `ProfilePage`/`Person`, RSS et sitemap utilisent les mêmes noms et URL.
  La production passe à 35 pages HTML et 34 URL canoniques, sans changer les
  dix-neuf dossiers ni leur modèle de preuve.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `80c2f76c1bd939b521e90f529b5e8d525c200990`. Le run GitHub Actions
  [`33087428591`](https://github.com/nclsppr/fouranu/actions/runs/33087428591)
  a vérifié puis déployé l'artefact exact.
- `/release.json`, l'annuaire, les trois profils, une signature par auteur et
  les 34 URL du sitemap ont été contrôlés sur le domaine public. Les profils et
  l'annuaire ont été relus à 360 et 1 440 px sans débordement ni erreur console.

## 2026-08-26 - Signature d'auteur publique dans le footer

- Le pied de page global signe désormais les 32 pages avec la formule
  « Édité avec amour du pâton par NicolasPieper.com » et un lien d'auteur
  direct, sans tracking, vers `https://nicolaspieper.com/`.
- La signature reste distincte de la mention légale, tient sur une ligne lorsque
  l'espace le permet et repasse proprement sous celle-ci sur mobile. Le contrat
  du site vérifie sa présence et sa destination sur chaque page construite.
- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `9677694683644985180f96608a943f8adeb6cb2e`. Le run GitHub Actions
  [`32982081071`](https://github.com/nclsppr/fouranu/actions/runs/32982081071)
  a vérifié puis déployé l'artefact exact.
- `/release.json`, les 31 URL du sitemap et une vraie réponse 404 ont été
  sondés sur le domaine public. La signature et son lien d'auteur sont uniques
  sur chaque page ; le rendu a été relu à 360 et 1 280 px sans débordement.

## 2026-08-26 - Ambition de tests et promesse SEO publiques

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `e7a6223f9a9e61052b1a99e7bf60a037c8fb8e61`. Le run GitHub Actions
  [`32979871986`](https://github.com/nclsppr/fouranu/actions/runs/32979871986)
  a vérifié puis déployé l'artefact exact ; `/release.json`, les 31 URL
  canoniques, les métadonnées, le sitemap et les icônes ont été contrôlés sur le
  domaine public.
- L'accueil annonce désormais l'ambition de tester tous les fours à pizza
  vendus en France, en commençant par les modèles des marques de référence,
  puis les accessoires utiles et différents pétrins. Son titre, sa description,
  son aperçu social et son H1 reprennent ce cap ; la page À propos et le texte
  visible précisent que le corpus actuel reste documentaire.
- L'ADR-0006, le contrat produit, la roadmap, le protocole éditorial et le
  cadrage SEO séparent ce programme futur des dix-neuf guides publiés. Aucun
  essai physique Four à Nu, classement de « meilleures marques », note, étoile,
  `Review` ou `AggregateRating` n'est présenté comme acquis.
- Un `favicon.ico` de repli reprend le four canonique aux formats 16, 32, 48 et
  64 px. Il complète l'URL SVG stable sans la remplacer et évite la 404 aux
  robots ou navigateurs qui demandent encore automatiquement l'icône racine.
- Le candidat passe 26 tests Python, 17 contrats du site, le check Astro,
  Compose, le contrôle Cloudflare à sec et Nimbus. Les 31 URL sont publiques,
  canoniques et indexables ; le rendu a été relu à 360 et 1 280 px sans
  débordement, image visible cassée ni alerte console.
- Aucune demande manuelle de réindexation n'accompagne cette livraison. Le
  choix du texte et du favicon finalement affichés dans les résultats reste
  celui du moteur après sa prochaine exploration.

## 2026-08-25 - SEO, partage et favicon publics

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `a6e8f622b13db50b852e8e71c4da57beb30f8dd7`. Le run GitHub Actions
  [`32886732924`](https://github.com/nclsppr/fouranu/actions/runs/32886732924)
  a vérifié puis déployé l'artefact exact ; `/release.json`, l'accueil, un
  article, le sitemap, la 404, les nouvelles icônes et la carte sociale ont été
  contrôlés publiquement en HTTP et dans le navigateur.
- Passe SEO sur les 31 pages canoniques : titres sociaux resserrés, image
  principale déclarée dans chaque `WebPage`, schémas `Article` enrichis,
  auteurs reliés à leur profil et dix-neuf images ajoutées au sitemap.
- Remplacement de l'ancienne carte sociale générique par une version 1200 × 630
  au logo actuel. Les pages Ooni et Gozney reprennent désormais l'image de leur
  guide de gamme ; chaque article conserve sa propre image documentaire.
- Ajout d'un bloc de partage à toutes les pages canoniques : feuille native pour
  Messages, Messenger, Instagram ou toute app compatible installée, puis
  WhatsApp, e-mail et copie du lien comme replis, sans SDK ni requête tierce.
- Nouveau favicon dérivé du four du logo, lisible aux petites tailles, avec
  icône SVG stable, Apple Touch 180 px et déclinaisons PWA 192 et 512 px.
- Différenciation du titre éditorial de l'accueil et resserrement des deux
  titres d'article les plus longs ; le flux RSS exclut désormais tout article
  explicitement non indexable.

## 2026-08-24 - Gamme Gozney et appels d'achat publics

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `bdd647b38fde6de2f8db01092c6adba5e08a7b35`. Le run GitHub Actions
  [`32762552261`](https://github.com/nclsppr/fouranu/actions/runs/32762552261)
  a vérifié puis déployé l'artefact exact ; `/release.json`, les cinq nouvelles
  routes, les dix nouveaux médias, les 31 URL du sitemap et les dix-neuf entrées
  RSS ont été contrôlés publiquement.
- Couverture des sept fours autonomes proposés dans le catalogue Gozney France
  vérifié le 24 août 2026 : un guide de gamme, puis de nouveaux dossiers Dome
  XL (Gen 2), Dome (Gen 2), Arc et Roccbox, sans multiplier les pages par pack
  ou par couleur.
- Cinq nouveaux en-têtes éditoriaux partent de photographies officielles Gozney
  autorisées. Le contrôle visuel conserve la silhouette, les commandes et les
  marquages du produit ; les dix rendus WebP sont enregistrés avec leur chaîne
  de droits.
- Chaque article comporte désormais deux appels d'achat très visibles vers la
  boutique officielle. Les destinations sont directes, sans suivi ni
  rémunération, et cette absence de commission est écrite à proximité.
- La roadmap sépare l'activation future des programmes Amazon, Gozney et Ooni
  de cette tranche. Elle ouvre aussi une stratégie d'accessoires fondée sur un
  problème concret — thermomètre, pelles, bacs et balance — et refuse les pages
  minces créées uniquement pour viser une requête marchande.
- L'accueil, la rubrique Gozney et le parcours par usage passent à 32 pages
  HTML, dix-neuf guides, 168 preuves, 66 questions, 85 médias et 31 URL
  indexables. Le nom de travail opaque de l'ancien système visuel a été retiré
  au profit de termes simples.

## 2026-08-24 - Arc Lite, Tread et Halo publics

- Publication sur [`fouranu.com`](https://fouranu.com) depuis le SHA applicatif
  `6511eccf4971d962f6916dc8ab1fc74742e8f321`. Le run GitHub Actions
  [`32750836887`](https://github.com/nclsppr/fouranu/actions/runs/32750836887)
  a vérifié puis déployé l'artefact exact ; `/release.json`, les deux articles,
  les quatre nouveaux médias, les 26 URL du sitemap et les quatorze entrées RSS
  ont été contrôlés publiquement.

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
  stylisée dans le système visuel Four à Nu ; les vues en situation viennent ensuite.
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
  Plex, la grille, les fonds carbone et la lecture documentaire du système
  visuel. Le prototype reste une référence de composition, pas une source de
  contenu ou d'actifs.
- Généralisation des routes d'analyse par marque, des canonicales, du RSS, du
  sitemap et des bibliographies depuis les `evidenceIds` explicites, sans créer
  de dossier Gozney sans contenu réel.
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
  production, 404 seule hors index, RSS, canonicals, dates, données structurées
  `Article`, `Organization`, `ProfilePage` et fils d'Ariane.
- Ajout d'une illustration d'accueil originale, en esquisse
  d'atelier, avec deux WebP responsive, mention visible et enregistrement de
  provenance. Aucun média tiers n'a servi d'entrée.
- Extension du registre aux photogrammes autorisés, dérivés éditoriaux et originaux éditoriaux.
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
  droits avant extraction, transformation ou publication d'un visuel tiers.
- Ajout d'un modèle de demande d'autorisation couvrant l'usage commercial,
  les transformations, les dérivés, les supports, la durée et l'attribution.
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
- Ajout d'un contrat de découvrabilité Google, Bing et moteur de réponse qui sépare le nom
  de marque des requêtes portées par les pages et conserve les limites du
  corpus documentaire.
- Remplacement des premières palettes ivoire et terracotta par le système
  visuel Four à Nu, en blanc, carbone, acier et bleu de mesure. Le logo, les
  favicons et la carte sociale locale suivent cette direction.
