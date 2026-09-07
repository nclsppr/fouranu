# Expérience 01 pour le média documentaire

## Contrat

Actualisé le 2026-09-07 pour le modèle documentaire permanent de
l'[ADR-0010](docs/decisions/0010-aide-achat-documentaire-permanente.md). Four à
Nu ne réalisera pas d'essais physiques. Les hypothèses de demande, d'utilité et
de revenu restent à confronter aux données ; l'existence du site ne les valide
pas. Les dates et seuils du plan initial restent identifiés ci-dessous.

| Champ | Valeur |
| --- | --- |
| Hypothèse | Un parcours fondé sur une synthèse documentaire traçable aide une audience FR/EN/DE en intention d'achat sur le marché français mieux qu'un guide générique, avec un intérêt commercial à mesurer |
| Propriétaire | nclsppr |
| Début du plan initial | 2026-08-18 |
| Réévaluation | 2026-11-16 |
| Temps maximum | 60 heures suivies |
| Dépense autorisée | 0 euro actuellement |
| Plafond proposé | 500 euros après validation explicite |
| Données | Sources publiques et retours anonymisés ; relevés Search Console et partenaires autorisés en lecture seule, exports de comptes privés hors Git |
| Surface actuelle | Corpus FR/EN/DE public, CI et preview locale en `noindex` pour les évolutions ; preuves dans `STATUS.md` |
| Cible technique | Artefact statique publié sur Cloudflare Workers Static Assets selon l'ADR-0004 |

Une visite qualifiée désigne une visite humaine sur le parcours de choix ou une
analyse, issue d'une question, d'une requête ou d'une campagne qui exprime un
achat de four. Le trafic interne, les robots, les visites de recette et les
impressions sans intention d'achat sont exclus. Sans méthode d'observation
permettant cette distinction, le dénominateur reste indisponible. Les clics
Search Console ne sont pas utilisés comme substitut aux visites qualifiées.

Le revenu par visite qualifiée additionne les commissions confirmées et les
prospects acceptés, puis les divise par ces visites. La marge contributive
retire les coûts directs de plateforme, d'acquisition, d'hébergement et de
contenu externe. Le temps du propriétaire est suivi séparément jusqu'à ce qu'un
coût horaire soit décidé.

Les classes `FAB`, `T-MES`, `T-OBS`, `FAN-SYN` et `FAN-INF`, le traitement des
médias et la barrière de publication sont définis dans
[`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md). Four à Nu ne publie ni note,
ni étoile, ni classement pseudo-scientifique, ni donnée `Review` ou
`AggregateRating`.

## Mesure actuelle : visibilité, aide au choix et revenu

La procédure de relevé est
[`docs/GROWTH-MEASUREMENT.md`](docs/GROWTH-MEASUREMENT.md). Elle s'applique aux
sources existantes autorisées et sépare :

- visibilité Google par requête, page, pays et appareil, avec impressions,
  clics, CTR, position moyenne, période et complétude ;
- clics marchands, lorsqu'un rapport ou un dispositif autorisé les observe ;
- commandes et commissions en attente, annulées ou confirmées, selon les
  états et délais du partenaire ;
- compréhension du choix et de la provenance lors des sessions d'usage prévues.

Hypothèses de la tranche du 2026-09-07 : une réponse plus directe peut augmenter
l'utilité des articles ; un parcours par contraintes peut réduire l'hésitation ;
un comparatif centré sur une décision précise peut recevoir des recherches
pertinentes. Aucun gain n'est présumé. Définir le périmètre, la période et le
dénominateur avant d'annoncer un taux ; conserver les changements concomitants
et la saisonnalité dans une comparaison avant/après.

Le relevé initial peut constater des données absentes ou insuffisantes. Ce
constat n'est ni un résultat nul ni la preuve que le produit n'est pas demandé.
Un compteur de clics sans cookie reste une option non activée, à décider et
vérifier séparément. Aucune création de compte, activation analytics, prise de
contact, lettre d'abonnés ou envoi à un partenaire n'est implicite.

## Plan initial et échéances de recherche

Les portes suivantes conservent les objectifs exploratoires définis avant la
V1. Les dates de prépublication ne décrivent pas l'état présent : des paquets
ont été autorisés et publiés séparément, comme le montre `STATUS.md`. La dette
d'observation utilisateur et les seuils économiques ne sont pas effacés par ces
livraisons. Une collecte autorisée n'exige pas de retirer le site public.

## Porte 1 : demande et corpus traçable

Échéance : 2026-09-01.

### État au 2026-08-23

- seuil de questions atteint : 50 questions paraphrasées issues de 22
  discussions publiques de `r/ooni`, avec URL, date, catégories et article
  cible dans `research/questions.csv` ; cet échantillon anglophone et
  auto-sélectionné reste un signal qualitatif ;
- seuil vidéo atteint : 16 vidéos de 9 créateurs donnent 72 passages horodatés
  dans `research/evidence.csv`, avec 37 mesures tierces et 35 observations
  tierces ;
- les six fours de deuxième génération et le Koda 16 ont au moins une source
  vidéo ; Koda 12 et Karu 12 attendent encore des sources tierces qualifiées ;
- 16 références destinées au lecteur YouTube officiel sont enregistrées dans
  `research/assets.csv`, sans URL de publication ; leur intégration devra être
  revérifiée avant usage. Le propriétaire déclare avoir obtenu l'accord des
  créateurs du corpus courant pour la réutilisation et les dérivés éditoriaux. Aucun
  photogramme n'a été extrait ; chaque actif devra encore être rapproché de son
  périmètre exact et de sa preuve privée avant traitement ou publication ;
- trois familles de décision émergent : taille et débit, énergie et polyvalence,
  puis coût et risque de possession.

La porte n'est pas encore passée. Il reste à démontrer la valeur propre des
synthèses, qualifier dix requêtes commerciales et vérifier le barème effectif
d'un partenaire direct.

### Travail

- Recueillir au moins 50 questions d'achat distinctes dans des sources
  publiques, avec URL et date, ou conduire 15 échanges avec des acheteurs
  potentiels en anonymisant les notes.
- Regrouper les décisions par budget, lieu, énergie, diamètre, nombre de pizzas,
  temps de chauffe publié, débit, entretien et coût complet.
- Cartographier au moins 16 vidéos de huit créateurs couvrant six fours, puis
  enregistrer 50 observations ou mesures horodatées dans le registre de preuve.
- Pour chaque comparaison de performance, obtenir deux sources indépendantes ou
  afficher explicitement la dépendance à une source unique.
- Relever les conditions de mesure, conflits et divergences sans moyenner des
  protocoles incompatibles.
- Préparer les storyboards à partir des timecodes, puis demander les fichiers
  sources et les droits avant toute capture ou transformation éditoriale.
- Confirmer les règles et le barème effectif d'au moins un partenaire direct
  pertinent.
- Relever la concurrence sur dix requêtes commerciales sans confondre présence
  dans les résultats et volume de recherche.

### Passage

La porte passe si les questions révèlent au moins trois décisions mal résolues,
si le corpus permet de séparer clairement les sources et si un partenaire direct
est accessible. Chaque affirmation de performance doit avoir un identifiant,
une source et ses limites.

La niche pizza s'arrête si le corpus ne produit aucune valeur propre au-delà des
sources, si les droits nécessaires sont structurellement inaccessibles ou si le
seul contenu possible consiste à reformuler des fiches marchandes.

## Porte 2 : utilité en prépublication

Échéance : 2026-09-22.

### Prototype

- Un parcours de choix avec au moins dix modèles et la provenance de chaque
  donnée.
- Une séparation visible entre données fabricant, mesures tierces, observations
  tierces, synthèses `FAN-SYN` et inférences `FAN-INF`.
- Une méthode publique avec sources, timecodes, conflits, incertitudes et date.
- Deux analyses fortes sur le choix par contraintes et l'énergie.
- Six fiches produit au statut `review`, sans note ni balisage d'avis.
- Une page auteur, une page À propos, une politique de correction, un contact,
  des mentions légales, une politique de confidentialité et une page de
  transparence commerciale avec des informations exactes.
- Cinq sessions d'utilisation observées avec des personnes ayant un projet
  d'achat.
- Pour le prototype initial, aucun lien affilié, prix copié, compte marchand
  requis ou indexation publique ; ces limites de prépublication ne retirent pas
  les autorisations commerciales déjà accordées aux paquets publiés.

### Passage

Au moins quatre utilisateurs sur cinq doivent atteindre une sélection,
expliquer le compromis obtenu et distinguer une source tierce d'une synthèse
Four à Nu. Au moins trois sur cinq doivent identifier une incertitude résolue.
Les erreurs de données critiques sont nulles après correction.

Si le prototype n'apporte pas cette utilité, une seule itération est permise
avant arrêt ou reformulation de la niche.

## Porte 3 : pilote public

Période prévue par le plan initial : du 2026-09-23 au 2026-11-16, après les deux
portes et l'autorisation du paquet. La V1 a été autorisée et publiée plus tôt ;
les dates réelles de publication restent celles de `STATUS.md`. Cette fenêtre
est conservée comme repère d'évaluation, sans antidater un résultat.

### Surface minimale

- le parcours de choix ;
- la méthode et les conflits d'intérêts ;
- les analyses documentaires autorisées avec provenance complète ;
- un guide de décision fondé sur les questions de la porte 1 ;
- les pages de confiance validées à la porte 2 ;
- Search Console et une mesure d'audience minimisée après autorisation ;
- des observations distinctes pour sélection terminée, clic marchand, vente
  confirmée et prospect accepté, seulement lorsqu'elles sont effectivement
  disponibles dans un dispositif autorisé.

La preview reste en `noindex`. Le candidat Workers Static Assets, son premier
déploiement, le domaine personnalisé, le DNS de `fouranu.com` et l'ouverture
aux moteurs sont des décisions séparées. Une page ne devient indexable qu'après
sa barrière propre et l'autorisation du paquet exact qui la contient.

Chaque lien rémunéré est déclaré auprès du lien et porte `rel="sponsored"`. Un
refus des traceurs laisse le contenu accessible. La variante de lien proposée en
cas de refus doit être approuvée par le réseau concerné avant publication.

### Distribution

- Réponses humaines et utiles dans les espaces où la participation commerciale
  est permise.
- Lecteurs YouTube officiels, visuels Four à Nu originaux ou dérivés
  expressément autorisés, avec retour vers la preuve complète.
- Toute illustration éditoriale est déclarée et reste décorative. Elle ne documente
  jamais une performance.
- Aucun message direct non sollicité, aucune réponse automatique issue d'une
  recherche, aucun faux compte et aucun achat de lien.
- X reste un canal expérimental strictement manuel.
- Toute réponse, demande de droits, lettre d'abonnés ou prise de contact avec un
  partenaire exige une autorisation explicite d'envoi ; le plan ne vaut pas
  autorisation de contacter des tiers.

### Mesures de succès

Ces seuils sont des objectifs exploratoires du plan initial, pas des résultats
ni des seuils statistiques validés. Ils ne peuvent être évalués qu'avec les
dénominateurs et sources effectivement disponibles. À la date de conclusion :

- au moins 500 visites qualifiées ;
- au moins 30 % de complétion du parcours de choix ;
- au moins 20 % de clics marchands depuis le parcours et les comparaisons ;
- au moins 100 clics marchands observés ;
- au moins trois ventes attribuées ou prospects acceptés ;
- au moins 0,15 euro de revenu par visite qualifiée ;
- dépenses directes dans la limite autorisée ;
- aucune violation connue des politiques, aucune attribution trompeuse et
  aucune donnée personnelle inutile ;
- aucun média tiers publié sans chaîne de droits enregistrée.

Ces volumes fournissent un signal, pas une estimation statistique précise. La
conclusion conserve les incertitudes et les délais de retour ou d'attribution.

### Mesures d'échec

- moins de 10 % de clics marchands après 500 visites qualifiées et une itération
  de présentation ;
- zéro vente et zéro prospect accepté après 200 clics marchands ;
- moins de 0,05 euro de revenu par visite après 1 000 visites qualifiées ;
- dépendance à des réponses automatiques non sollicitées ou à du contenu sans
  valeur originale ;
- dépendance à des captures, transformations ou droits que Four à Nu ne peut
  pas obtenir proprement.

Si l'échéance arrive avant un échantillon exploitable alors que les indicateurs
avancés sont bons, une seule prolongation de 30 jours peut être proposée avec un
nouveau plafond explicite. Elle n'est jamais automatique.

## Décision de sortie

### Poursuivre

Poursuivre Four à Nu si les trois portes passent et si les données observées
permettent d'expliquer un chemin crédible vers le seuil économique. La décision
confirme le modèle documentaire permanent, le rythme de publication et les
limites de coût. Elle ne crée pas un second site.

### Arrêter la niche

Conserver la conclusion et retirer le pilote public si une condition d'échec
est atteinte. Révoquer les accès expérimentaux, désactiver les liens et
documenter les données supprimées. Les mesures anonymisées utiles restent
archivées.

### Tester une autre niche

Une autre niche reçoit une nouvelle expérience, le même budget fermé et les
mêmes métriques. Elle n'est pas ajoutée comme sous-domaine ou second site à la
surface pizza.
