# Expérience 01 pour choisir un four

## Contrat

| Champ | Valeur |
| --- | --- |
| Hypothèse | Un sélecteur fondé sur une synthèse documentaire traçable, puis renforcé par des essais physiques, convertit une audience francophone à forte intention mieux qu'un guide générique |
| Propriétaire | nclsppr |
| Début | 2026-08-18 |
| Réévaluation | 2026-11-16 |
| Temps maximum | 60 heures suivies |
| Dépense autorisée | 0 euro actuellement |
| Plafond proposé | 500 euros après validation explicite, hors achat de matériel réutilisable décidé séparément |
| Données | Publiques, synthétiques ou retours anonymisés ; aucune donnée de production |
| Surface actuelle | Dépôt local uniquement |
| Surface future | Saison 0 isolée et `noindex`, puis un pilote documentaire public uniquement après les portes de preuve et d'utilité |

Une visite qualifiée désigne une visite humaine sur le sélecteur ou un comparatif, issue d'une question, d'une requête ou d'une campagne qui exprime un achat de four. Le trafic interne, les robots, les visites de recette et les impressions sans intention d'achat sont exclus.

Le revenu par visite qualifiée additionne les commissions confirmées et les prospects acceptés, puis les divise par ces visites. La marge contributive retire les coûts directs de plateforme, d'acquisition, d'hébergement, de contenu externe et de matériel amorti. Le temps du propriétaire est suivi séparément jusqu'à ce qu'un coût horaire soit décidé.

Une preuve documentaire et une preuve physique sont deux états différents. Les
classes `FAB`, `T-MES`, `T-OBS`, `J-SYN`, `J-INF` et `J-TEST`, le traitement des
captures et la barrière de publication sont définis dans
[`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md). La Saison 0 peut être utile et
publique sans matériel ; elle ne peut pas employer `J-TEST`, une note, des
étoiles ou un classement présenté comme testé.

## Porte 1 : demande et corpus traçable

Échéance : 2026-09-01.

### État au 2026-08-23

- seuil de questions atteint : 50 questions paraphrasées issues de 22
  discussions publiques de `r/ooni`, avec URL, date, catégories et article
  cible dans `research/questions.csv` ; cet échantillon anglophone et
  auto-sélectionné reste un signal qualitatif ;
- seuil vidéo atteint : 16 vidéos de 9 créateurs, moitié francophones et moitié
  anglophones, donnent 72 passages horodatés dans `research/evidence.csv` —
  37 mesures tierces et 35 observations tierces ;
- les six fours de deuxième génération et le Koda 16 ont au moins une source
  vidéo ; Koda 12 et Karu 12 attendent encore des essais tiers qualifiés ;
- 16 références destinées au lecteur YouTube officiel sont enregistrées dans
  `research/assets.csv`, sans URL de publication ; leur intégration devra être
  revérifiée avant usage. Aucun photogramme n'a été extrait, aucun média n'a été
  transmis à une IA et aucune autorisation n'a encore été sollicitée ;
- trois familles de décision émergent : valeur liée à la taille et au débit,
  choix de l'énergie et de la polyvalence, puis coût et risque de possession.

La porte n'est pas encore passée. Il reste notamment à démontrer la valeur
propre des synthèses, qualifier dix requêtes commerciales, vérifier le barème
effectif d'un partenaire direct et documenter l'accès aux futurs essais
physiques.

### Travail

- Recueillir au moins 50 questions d'achat distinctes dans des sources publiques, avec URL et date, ou conduire 15 échanges avec des acheteurs potentiels en anonymisant les notes.
- Regrouper les décisions par budget, lieu, énergie, diamètre, nombre de pizzas, temps de chauffe, débit et entretien.
- Cartographier au moins 16 vidéos de huit créateurs couvrant six fours, puis
  enregistrer 50 observations ou mesures horodatées dans le registre de preuve.
- Pour chaque comparaison de performance, obtenir deux sources indépendantes ou
  afficher explicitement la dépendance à une source unique.
- Relever les conditions de mesure, conflits et divergences sans moyenner des
  protocoles incompatibles.
- Préparer les storyboards à partir des timecodes, puis demander les fichiers
  sources et les droits avant toute capture ou transformation IA.
- Confirmer les règles et le barème effectif d'au moins un partenaire direct pertinent.
- Continuer à documenter un chemin réaliste vers trois fours : propriété, prêt,
  location ou accord marchand. Ce travail prépare la phase physique mais ne
  bloque plus la Saison 0.
- Définir le protocole reproductible et le coût réel des futurs tests.
- Relever la concurrence sur dix requêtes commerciales sans confondre présence dans les résultats et volume de recherche.

### Passage

La porte passe si les questions révèlent au moins trois décisions mal résolues,
si le corpus permet de séparer les sources et si un partenaire direct est
accessible. Chaque affirmation de performance doit avoir un identifiant, une
source et ses limites. L'absence de trois fours bloque le label de laboratoire,
pas la poursuite documentaire.

La niche pizza s'arrête immédiatement si le corpus ne produit aucune valeur
propre au-delà des sources, si les droits nécessaires sont structurellement
inaccessibles ou si le seul contenu possible consiste à reformuler des fiches
marchands.

## Porte 2 : utilité sans indexation

Échéance : 2026-09-22.

### Prototype

- Un sélecteur avec au moins dix modèles et la provenance de chaque donnée.
- Une séparation visible entre données fabricant, observations tierces, analyse
  Jupiter et futures mesures Jupiter.
- Une méthode publique avec sources, timecodes, conflits, incertitudes et date.
- Deux analyses fortes : choix par contraintes, puis gaz ou électrique.
- Six fiches produit `noindex`, sans avis ni note de Jupiter.
- Cinq sessions d'utilisation observées avec des personnes ayant un projet d'achat.
- Aucun lien affilié, prix copié, compte marchand requis ou indexation publique.

### Passage

Au moins quatre utilisateurs sur cinq doivent atteindre une sélection, expliquer
le compromis obtenu, distinguer une observation tierce d'une synthèse Jupiter et
comprendre qu'aucune mesure Jupiter n'est encore disponible. Au moins trois sur
cinq doivent identifier une incertitude résolue. Les erreurs de données
critiques sont nulles après correction.

Si le prototype n'apporte pas cette utilité, une seule itération est permise avant arrêt ou reformulation de la niche.

## Porte 3 : pilote public

Période maximale : du 2026-09-23 au 2026-11-16, uniquement si les deux premières portes passent.

### Surface minimale

- le sélecteur ;
- la méthode et les conflits d'intérêts ;
- deux analyses documentaires avec provenance complète et bandeau « produit non
  testé par Jupiter » ;
- un guide de décision fondé sur les questions de la porte 1 ;
- une page auteur et une politique de correction ;
- les mentions légales, la confidentialité, le consentement aux traceurs et les déclarations commerciales ;
- Search Console et une mesure d'audience minimisée ;
- des événements distincts pour sélection terminée, clic marchand, vente confirmée et prospect accepté.

Chaque lien rémunéré est déclaré auprès du lien et porte `rel="sponsored"`. Un refus des traceurs laisse le contenu accessible. La variante de lien proposée en cas de refus doit être approuvée par le réseau concerné avant publication.

### Distribution

- Réponses humaines et utiles dans les espaces où la participation commerciale est permise.
- Lecteurs YouTube officiels, visuels Jupiter originaux ou dérivés expressément
  autorisés, avec retour vers la preuve complète.
- Toute illustration IA est déclarée et reste décorative ; elle ne documente
  jamais une performance.
- Aucun message direct non sollicité, aucune réponse automatique issue d'une recherche, aucun faux compte et aucun achat de lien.
- X reste un canal expérimental manuel. Un assistant invoqué par mention est hors périmètre de cette expérience.

### Mesures de succès

À la date de conclusion :

- au moins 500 visites qualifiées ;
- au moins 30 % de complétion du sélecteur ;
- au moins 20 % de clics marchands depuis le sélecteur et les comparaisons ;
- au moins 100 clics marchands observés ;
- au moins trois ventes attribuées ou prospects acceptés ;
- au moins 0,15 euro de revenu par visite qualifiée ;
- dépenses directes dans la limite autorisée ;
- aucune violation connue des politiques, aucune preuve produit inventée et aucune donnée personnelle inutile.
- aucun média tiers publié sans chaîne de droits enregistrée et aucune
  formulation attribuant un test tiers à Jupiter.

Ces volumes fournissent un signal, pas une estimation statistique précise. La conclusion conserve les intervalles d'incertitude et les délais de retour ou d'attribution.

### Mesures d'échec

- moins de 10 % de clics marchands après 500 visites qualifiées et une itération de présentation ;
- zéro vente et zéro prospect accepté après 200 clics marchands ;
- moins de 0,05 euro de revenu par visite après 1 000 visites qualifiées ;
- coût d'une preuve originale incompatible avec l'économie mesurée ;
- dépendance à des réponses automatiques non sollicitées ou à du contenu sans valeur originale.
- dépendance à des captures, transformations ou droits que Jupiter ne peut pas
  obtenir proprement.

Si l'échéance arrive avant un échantillon exploitable alors que les indicateurs avancés sont bons, une seule prolongation de 30 jours peut être proposée avec un nouveau plafond explicite. Elle n'est jamais automatique.

## Décision de sortie

### Promouvoir

Promouvoir la Saison 0 vers un produit documentaire si les trois portes passent
et si les données observées permettent d'expliquer un chemin crédible vers le
seuil économique. Promouvoir Jupiter comme **laboratoire de tests** exige en
plus une mesure physique complète sur au moins un four et un chemin crédible
vers trois modèles. La promotion ajoute le contrat produit, la roadmap, le
statut vérifié et une ADR sur le modèle économique. Elle ne crée pas encore un
second site.

### Arrêter la niche

Conserver la conclusion et retirer le prototype public si une condition d'échec est atteinte. Révoquer les accès expérimentaux, désactiver les liens et documenter les données supprimées. Les mesures anonymisées utiles restent archivées.

### Tester une autre niche

Une autre niche reçoit une nouvelle expérience, le même budget fermé et les mêmes métriques. Elle n'est pas ajoutée comme sous-domaine ou second site à la surface pizza.
