# ADR-0001 : promotion produit et site Astro

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-08-23 |
| Propriétaire | nclsppr |
| Portée | Classe du projet, surface web publique et frontières d'activation |
| Remplace | Aucune décision |

## Contexte

Jupiter a commencé comme une exploration en pack Minimal. Le propriétaire a
retenu `Four à Nu` comme marque et confirmé l'acquisition de `fouranu.com`. Le
corpus Ooni permet maintenant de construire un sélecteur, deux analyses de
décision et six fiches documentaires. Il ne contient encore aucune mesure de
première main `J-TEST`.

Le dépôt possède déjà une documentation Nimbus. Elle rend les documents du
projet consultables et vérifie leur cohérence, mais son architecture reste celle
d'une documentation. Le site destiné aux acheteurs doit porter une navigation
éditoriale, des URL stables, un sélecteur et des règles d'indexation par page,
sans confondre documentation interne et contenu public.

Cette évolution change la classe du projet, introduit une dépendance durable et
prépare un contrat public. Elle exige donc une décision distincte avant
l'implémentation.

## Décision

### Promouvoir le projet au pack Full

Jupiter devient un produit nommé `Four à Nu` et adopte le pack Full. La tranche
d'implémentation alignera le contrat du projet, les documents requis, les
profils actifs et les gates de vérification. Cette ADR fixe la cible. Elle ne
modifie pas à elle seule l'état déclaré dans `FOUNDATION.md`.

### Construire un site Astro statique séparé

La surface destinée aux lecteurs sera un site Astro statique distinct de
`docs-nimbus`.

- Astro produit le HTML public, les métadonnées, les données structurées, le
  sitemap et le sélecteur.
- Le contenu essentiel reste lisible sans JavaScript. Le sélecteur peut utiliser
  un îlot client si son résultat principal possède un repli accessible.
- Nimbus reste le rendu canonique de la documentation du dépôt et continue de
  faire partie de la commande de vérification.
- Les deux sorties ont des routes, des déploiements et des responsabilités
  différentes. Le site public ne réexporte pas automatiquement tout le corpus
  documentaire.

Le premier site reste monolingue en français. Le domaine canonique visé est
`https://fouranu.com/`, sous réserve d'une activation DNS distinctement
autorisée.

### Contrôler l'indexation par état éditorial

Toute nouvelle page commence en preview avec `noindex`. Elle reste absente du
sitemap public et ne devient indexable qu'après passage de la barrière de
publication définie dans `EDITORIAL-PROTOCOL.md`.

Les états minimaux sont les suivants :

| État | Accès | Indexation | Sitemap |
| --- | --- | --- | --- |
| Brouillon | Local ou preview | `noindex` | Exclu |
| Prêt pour validation | Preview | `noindex` | Exclu |
| Saison 0 publique | Production | Explicite par page | Uniquement les pages indexables |
| Test physique publié | Production | Explicite par page | Uniquement les pages indexables |

Une preview peut aussi recevoir un contrôle d'accès. Ce contrôle ne remplace
pas le statut `noindex` enregistré avec la page.

### Préserver la vérité de la Saison 0

Une page de Saison 0 se présente comme une analyse documentaire. Elle utilise
un balisage `Article` et peut citer des données fabricant, des mesures tierces,
des observations tierces et des synthèses Four à Nu avec leur provenance.

Elle n'utilise pas `Review`, `AggregateRating`, note, étoile, formulation de
première main ou verdict présenté comme issu d'un test Four à Nu. Les liens
rémunérés restent interdits tant que la porte d'affiliation correspondante
n'est pas franchie.

### Conserver les URL lors des futurs tests

Une fiche produit garde la même URL avant et après un essai physique. Par
exemple, `/ooni/koda-2/` commence comme analyse documentaire et peut ensuite
recevoir les mesures `J-TEST`, le protocole et les médias originaux.

Le balisage `Review` ne devient possible qu'après publication d'une expérience
directe conforme au protocole. Un nouveau chemin comme
`/test-ooni-koda-2/` ne sera pas créé pour recopier la même intention. Cette
règle limite les doublons, la cannibalisation et les migrations de liens.

### Séparer préparation et activations externes

Les opérations suivantes sont quatre décisions d'exécution distinctes :

1. préparer et vérifier le produit dans le dépôt ;
2. publier un artefact du site sur un hébergement ;
3. relier `fouranu.com` à cet hébergement par le DNS ;
4. activer un programme d'affiliation et publier des liens rémunérés.

L'autorisation de l'une ne vaut pas autorisation des suivantes. L'achat du
domaine ne vaut ni mise en ligne, ni changement DNS, ni ouverture de compte
marchand. Aucun identifiant, secret ou justificatif privé n'entre dans Git.

## Options comparées

| Option | Avantages | Coûts et risques | Décision |
| --- | --- | --- | --- |
| Site Astro statique séparé | HTML rendu à la construction, faible charge JavaScript, URL et métadonnées contrôlées, artefact simple à héberger, sélecteur possible par îlot | Deux builds à maintenir, publication après chaque changement, édition principalement dans Git | Retenue |
| Nimbus comme site public | Aucun second moteur, documentation déjà construite et vérifiée | Navigation pensée pour des documents, mélange entre corpus interne et contrat public, contrôle éditorial et produit moins net | Écartée pour le produit, Nimbus reste obligatoire pour la documentation |
| CMS dynamique | Interface d'édition, programmation des contenus, collaboration sans Git | Base de données, mises à jour de sécurité, sauvegardes, disponibilité et cache à exploiter avant que le besoin soit démontré | Différée |

Astro répond au besoin actuel avec moins d'exploitation qu'un CMS. Nimbus ne
répond pas au parcours d'achat sans brouiller sa responsabilité documentaire.

## Conséquences

- Le dépôt porte deux sorties vérifiées, la documentation Nimbus et le site
  Four à Nu.
- Le pack Full exige notamment un contrat produit durable, une roadmap, un état
  vérifié et `DESIGN.md` avant la refonte visuelle significative.
- La commande canonique de vérification doit construire les deux sorties et
  contrôler les routes, métadonnées, statuts d'indexation et données
  structurées du site.
- Les contenus publics utilisent les registres de preuve comme sources, sans
  publier automatiquement les registres, les notes privées ou les médias tiers.
- Le site n'a ni base de données, ni administration, ni rendu serveur au
  lancement. Un besoin futur de compte, de personnalisation ou d'édition
  collaborative déclenchera un réexamen.
- Un déploiement réussi ne prouve pas que le DNS, l'indexation ou l'affiliation
  sont actifs. Chaque couche garde sa propre preuve.

## Plan de vérification

La tranche d'implémentation devra démontrer les points suivants avant toute
publication :

1. le pack Full et les documents canoniques sont alignés ;
2. Nimbus continue de construire sans régression ;
3. Astro produit un artefact statique reproductible ;
4. chaque nouvelle route sort en `noindex` par défaut ;
5. le sitemap exclut les brouillons et toutes les pages `noindex` ;
6. les pages de Saison 0 ne contiennent aucun `Review` ou `AggregateRating` ;
7. les URL produit restent identiques lors d'un test de transition vers un état
   physique simulé avec des données de fixture clairement identifiées ;
8. les contrôles mobile, bureau, clavier, mouvement réduit, liens, erreurs
   réseau et performance du profil web passent ;
9. la publication, le DNS et l'affiliation restent inactifs sans autorisation
   explicite et preuve propre à chaque étape.

## Conditions de réexamen

Cette décision sera réexaminée si l'une des conditions suivantes apparaît :

- plusieurs éditeurs doivent publier sans utiliser Git ;
- un compte utilisateur, des données personnelles ou une personnalisation
  serveur deviennent nécessaires ;
- le sélecteur exige un calcul ou des données qui ne peuvent plus être servis
  correctement comme artefacts statiques ;
- le volume de contenu rend la construction ou la prévisualisation trop lente
  pour le rythme éditorial mesuré ;
- Nimbus change de responsabilité ou le socle Project Foundation modifie son
  contrat de documentation ;
- une contrainte d'hébergement, de sécurité ou de conformité invalide la
  séparation retenue.

Une décision de remplacement devra citer cette ADR et préserver les URL déjà
publiées ou documenter leurs redirections permanentes.
