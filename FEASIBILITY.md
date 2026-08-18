# Faisabilité de Jupiter

État des sources et des règles vérifié le 2026-08-18. Les barèmes et politiques de plateformes peuvent changer. Ils devront être relus avant toute mise en production. Ce document ne constitue pas un avis juridique, fiscal ou financier.

## Verdict

Le modèle est possible, mais pas sous sa forme la plus agressive.

- Un seul site expert est le bon point de départ. Une ferme de micro-sites disperse l'autorité, le budget de tests et la maintenance, tout en augmentant les risques de pages satellites, d'affiliation pauvre et de contenu produit à grande échelle.
- Un bot X qui cherche des questions par mots-clés puis répond spontanément avec un lien doit être exclu. X interdit précisément cette automatisation non sollicitée.
- Amazon peut monétiser les petits accessoires, mais ses taux ne suffisent probablement pas à porter seul une forte ambition économique.
- La meilleure forme de Jupiter est un laboratoire de décision : données structurées, mesures originales, sélecteur, comparaisons explicables et, plus tard, demandes de devis qualifiées.
- La pizza napolitaine est une bonne première niche à tester, pas encore une décision de marque. Elle combine produits visuels, achats de 300 à 1 500 euros pour l'amateur, matériel professionnel beaucoup plus cher et plusieurs programmes directs. Son principal défaut est le coût d'accès à des produits réellement testables.

La décision recommandée est donc de financer une preuve limitée, pas de construire immédiatement un réseau de sites.

## Ce que le produit doit apporter

Le produit ne vend pas des articles. Il réduit le risque d'un achat.

Pour la première tranche, l'utilisateur est un amateur francophone exigeant qui hésite entre plusieurs fours et doit arbitrer budget, intérieur ou extérieur, énergie, place, température, débit et entretien. La réponse utile combine :

1. un sélecteur par contraintes ;
2. un protocole de test public ;
3. des mesures de sole et de voûte, temps de chauffe et de récupération, consommation et débit ;
4. des photos et vidéos originales ;
5. les limites, pièces, garantie et coût total ;
6. plusieurs options marchandes, identifiées comme rémunérées lorsqu'elles le sont.

Les spécifications constructeur peuvent alimenter une fiche clairement étiquetée comme telle. Elles ne deviennent jamais un test indépendant. Une note ou un classement exige une méthode et une preuve conservées.

## Options comparées

| Option | Potentiel | Faiblesse principale | Décision |
| --- | --- | --- | --- |
| Plusieurs micro-sites SEO affiliés | Beaucoup de surfaces théoriques | Chaque domaine repart de zéro et pousse vers des gabarits pauvres ou du contenu à grande échelle | Rejetée au lancement |
| Un magazine de guides d'achat | Simple à publier | Facilement remplaçable par un marchand, un grand média ou une réponse IA | Insuffisante seule |
| Un laboratoire de décision avec données originales | Utilité, citations, conversion et actif propriétaire | Accès aux produits et production plus lente | Recommandée |
| Un bot X de prospection | Distribution automatique apparente | Non conforme s'il répond à des recherches ou posts non sollicités | Rejetée |
| Un assistant X invoqué par mention | Intention explicite et réponse ciblée | Coût, approbations et audience encore inconnus | À tester plus tard, avec validation humaine |
| Génération de prospects professionnels | Valeur possible sur des achats de plusieurs milliers d'euros | Barème et partenaires non négociés | Deuxième monétisation à valider |

Un second domaine ne sera envisagé qu'après six mois de contribution positive du premier et uniquement pour une audience, une promesse et une capacité de preuve réellement distinctes.

## Contraintes des plateformes

### Google

L'affiliation n'est pas interdite. Les [politiques antispam de Google](https://developers.google.com/search/docs/essentials/spam-policies) distinguent les bons sites affiliés, avec essais et comparaisons originaux, des affiliés pauvres qui recopient les marchands. Les mêmes politiques couvrent les pages satellites et le contenu créé à grande échelle pour manipuler les résultats, y compris lorsqu'il est réparti sur plusieurs domaines.

Google autorise l'assistance par IA, mais sa [documentation sur le contenu génératif](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) demande exactitude, pertinence et valeur. Son [guide pour les fonctions de recherche générative](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) privilégie le contenu non interchangeable et l'expérience directe. Pour les avis, Google recommande des mesures, preuves visuelles, avantages, défauts et comparaisons dans son [guide des avis de qualité](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).

Les liens rémunérés doivent porter `rel="sponsored"` selon la [documentation des liens sortants](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links).

Le SEO reste lent et non garanti. Il subit aussi une pression de clic : une [étude Pew sur des utilisateurs américains en mars 2025](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) a observé un clic vers un résultat dans 8 % des visites avec résumé IA contre 15 % sans résumé. Cette étude ne mesure ni la France ni la niche pizza, mais elle renforce le besoin d'outils, de données et d'une audience directe.

### X

Les [règles d'automatisation X](https://help.x.com/en/rules-and-policies/x-automation?lang=browser) interdisent une réponse automatique fondée sur une simple recherche de mots-clés. Suivre le compte ou utiliser un hashtag ne vaut pas consentement. Une réponse unique peut être possible après mention explicite du compte, avec possibilité d'arrêt. Les [directives développeur X](https://docs.x.com/developer-guidelines) donnent comme cas acceptable une recommandation de produit demandée, et comme spam une réponse non sollicitée contenant des liens affiliés.

Une réponse entièrement générée par IA ou une campagne commerciale automatisée nécessite les approbations prévues par X. Au lancement, Jupiter utilisera donc des réponses humaines. Un futur assistant devra être invoqué explicitement, répondre une seule fois, déclarer son automatisation et l'affiliation, employer l'API officielle et obtenir les accords écrits applicables.

### Amazon France

Le [barème Amazon France](https://partenaires.amazon.fr/help/node/topic/GRXPHT8U84RAYDXZ) visible le 2026-08-18 indique notamment :

| Catégorie | Commission standard |
| --- | ---: |
| Cuisine et arts de la table, Maison, Bricolage, Outils | 5 % |
| Gros électroménager | 2,5 % |
| Épicerie | 1 % |
| Autres catégories | 3 % |

Amazon classe chaque produit. Un four ou un pétrin peut donc relever d'un taux différent de celui supposé. La rémunération porte sur la recette éligible nette, hors taxes, livraison et remises ; les retours, annulations et achats personnels ne rémunèrent pas.

Les [politiques Amazon](https://partenaires.amazon.fr/help/operating/policies/) définissent une session standard de 24 heures. Un produit ajouté au panier durant cette session peut être commandé dans les 89 jours suivant le clic initial. Le programme demande un clic volontaire et interdit les redirections automatiques. Les prix, disponibilités, images et avis Amazon ne doivent pas être copiés : ils sont utilisés uniquement selon les outils ou API autorisés et leurs règles de fraîcheur.

La [procédure d'examen Amazon](https://partenaires.amazon.fr/help/node/topic/G8TW5AE9XL2VX9VM) demande au moins trois ventes éligibles dans les 180 premiers jours et, pour un site, au moins dix contenus originaux substantiels. Toutes les propriétés et sources de trafic doivent être déclarées. Jupiter ne doit donc pas candidater avec un bot X neuf comme propriété principale.

L'[accord Amazon](https://partenaires.amazon.fr/help/operating/agreement/) impose une identification visible du partenariat. La déclaration exigée est : « En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises. » Une mention claire doit aussi apparaître auprès du lien ou de la recommandation.

### Partenaires directs

L'affiliation directe rend la niche plus intéressante :

| Programme public vérifié | Offre | Taux affiché | Attribution affichée |
| --- | --- | ---: | ---: |
| [Ooni France](https://eu.ooni.com/fr-fr/pages/become-an-affiliate) | Fours et accessoires | 10 % de base | Conditions Awin à confirmer lors de l'admission |
| [Nisbets France](https://ui.awin.com/merchant-profile/7926/commission-groups) | Matériel de cuisine et CHR | 6 % | 30 jours |
| [LUSINI France](https://ui.awin.com/merchant-profile/22619) | Équipement professionnel | 3 % à 12 % selon segment et client | 30 jours |
| [ManoMano France](https://ui.awin.com/merchant-profile/17547) | Maison et bricolage B2C et B2B | Non public | 10 jours |

Ooni annonce aussi un taux de conversion supérieur à 2,5 % à partir de données 2023. C'est une affirmation du marchand, pas une mesure actuelle de Jupiter. Les pages LUSINI présentent des formulations de taux partiellement contradictoires. Tout barème devra être capturé et confirmé dans le compte Awin avant une prévision.

### Transparence et traceurs

La [DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/promotion-faite-par-les-influenceurs-et-achat-les-reseaux-sociaux) demande que l'intention commerciale soit immédiatement claire, lisible et en français. La mention devra être visible dans le contenu social et auprès des liens rémunérés, pas seulement dans des mentions légales.

La [FAQ CNIL du 2026-04-29](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) précise que les traceurs utilisés pour facturer l'affiliation ne sont pas exemptés de consentement. Un clic ne vaut pas consentement. L'implémentation devra permettre acceptation, refus et retrait, identifier les tiers et conserver le contenu accessible en cas de refus. La compatibilité d'un lien non suivi avec chaque réseau devra être confirmée avant développement.

Une surface professionnelle exigera aussi les mentions légales, la politique de confidentialité, l'identité de l'éditeur et la déclaration des revenus. Ces points seront validés avant publication et avant tout encaissement.

## Économie du modèle

Le revenu brut d'affiliation suit cette relation :

`visites qualifiées x taux de clic marchand x conversion marchand x panier éligible x commission`

Les scénarios suivants sont des tests de sensibilité, pas des prévisions :

| Scénario | Visites par mois | Clic marchand | Conversion | Panier éligible | Commission | Revenu brut calculé |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mix prudent Amazon et programmes directs | 10 000 | Hypothèses séparées par canal | Hypothèses séparées par canal | 70 et 450 euros | 4 % et 8 % | Environ 214 euros, environ 180 euros après 15 % de pertes |
| Page d'achat très qualifiée vers un partenaire direct | 10 000 | 25 % | 2,5 % | 500 euros | 10 % | 3 125 euros |
| Seuil de 10 000 euros avec les mêmes hypothèses favorables | 32 000 | 25 % | 2,5 % | 500 euros | 10 % | 10 000 euros |

Dans le scénario prudent, Amazon reçoit 10 % des visites, convertit 3 % des clics avec un panier de 70 euros et 4 % de commission ; les partenaires directs reçoivent 3 % des visites, convertissent 1,2 % avec un panier de 450 euros et 8 % de commission. Dans le scénario favorable, seul le taux de 10 % est public ; le panier de 500 euros est une hypothèse et la conversion de 2,5 % est une ancienne affirmation d'Ooni. Aucun scénario ne retranche le temps du propriétaire, les tests, le contenu, l'hébergement, les impôts ou l'acquisition.

Cette amplitude est le point essentiel. Amazon seul exige vraisemblablement un trafic massif. Un revenu important suppose une audience très proche de l'achat, des partenaires directs, des produits chers et, probablement, une deuxième couche telle que les prospects professionnels, un produit numérique ou un service. Aucune valeur de prospect professionnel n'est intégrée tant qu'un acheteur ne l'a pas contractuellement confirmée.

La métrique centrale de Jupiter sera donc le revenu par visite qualifiée, accompagné du coût complet et du nombre d'heures, pas le nombre d'articles publiés.

## La niche pizza

### Signaux favorables

- Ooni propose publiquement 10 % et recherche du contenu éditorial.
- Nisbets et LUSINI offrent une extension vers le matériel professionnel.
- Les fours amateurs occupent une tranche de plusieurs centaines d'euros ; les pages de devis professionnel montrent des montants de plusieurs milliers d'euros, sans prouver notre capacité à monétiser ces ventes.
- Les décisions se prêtent à des mesures, images, vidéos et outils difficiles à résumer sans consulter la source.
- Le risque réglementaire produit est plus faible que dans la santé, la finance ou l'énergie réglementée.

### Signaux défavorables

- Un échantillon de résultats français contient déjà un [comparateur interactif](https://pizzasquare.fr/outils/comparateur-fours), des guides spécialisés et de grands médias. Un nouvel article « meilleurs fours 2026 » n'est pas différenciant.
- Les tests de qualité exigent plusieurs fours, du temps, un protocole stable et un lieu adapté.
- L'extérieur est saisonnier et les produits professionnels nécessitent une expertise électrique, gaz, ventilation, installation et maintenance.
- Le volume de recherche français et le coût d'acquisition n'ont pas encore été mesurés avec une source payante ou propriétaire.
- L'intérêt d'une audience pizza sur X n'est pas démontré. La vidéo, la recherche et les communautés spécialisées semblent plus naturelles, ce qui reste à mesurer.

### Choix initial

Jupiter commence par le problème « choisir un four pour pizza napolitaine à domicile entre 300 et 1 500 euros ». Il n'élargit ni aux recettes généralistes ni au matériel professionnel avant d'avoir prouvé l'utilité et la conversion. Le professionnel reste une extension commerciale possible, pas une promesse du premier produit.

Si l'accès à trois modèles au minimum ne peut pas être obtenu sans dépense disproportionnée, la pizza échoue à la première porte. Jupiter devra alors comparer une autre niche avec le même score : valeur du panier, programme direct, intention d'achat, accès aux preuves, concurrence, risque réglementaire et potentiel de revenu récurrent.

## Décision

Lancer l'expérience décrite dans [`EXPERIMENT.md`](EXPERIMENT.md), avec ces invariants :

- un domaine au maximum ;
- aucune production massive de pages ;
- aucun avis sans preuve originale ;
- aucun bot de prospection ;
- Amazon comme complément, pas comme dépendance unique ;
- un partenaire direct avant mise à l'échelle ;
- un suivi séparé des revenus, coûts, heures et sources de trafic ;
- un arrêt explicite si l'économie ou l'accès aux preuves ne tient pas.

La faisabilité réglementaire et technique est soutenue. La faisabilité commerciale reste à prouver.
