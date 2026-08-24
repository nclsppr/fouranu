# Carte éditoriale Ooni

État vérifié le 2026-08-24. Cette carte transforme la priorité Ooni en backlog
exhaustif et évite de créer une page faible pour chaque variante de requête.
Elle couvre d'abord les fours, puis le matériel qui change réellement une
décision d'achat, le volume de préparation ou le coût complet.

Le 24 août 2026, la comparaison `OONI-040` entre Halo Core et Halo Pro a rejoint
le corpus publiable. Elle reste séparée des neuf fiches de four : la capacité de
pâte, l'encombrement et les fonctions du pétrin forment une décision propre.
Elle couvre aussi le bas de plage et la température finale depuis sa seconde
passe documentaire. Une fiche Halo séparée exigera une autre question d'achat
et au moins deux protocoles indépendants qui ne répètent pas ce comparatif.

## Vérité catalogue

La [collection française des fours Ooni](https://eu.ooni.com/fr-fr/collections/ovens)
et le [comparateur du fabricant](https://eu.ooni.com/fr-fr/pages/oven-comparison)
présentent neuf fours autonomes. Le pack Karu 2 Pro avec brûleur à gaz est un
bundle, pas un dixième modèle.

| Famille | Génération actuelle | Première génération encore vendue |
| --- | --- | --- |
| Gaz Koda | Koda 2, Koda 2 Pro, Koda 2 Max | Koda 12, Koda 16 |
| Multi-combustible Karu | Karu 2, Karu 2 Pro | Karu 12 |
| Électrique | Volt 2 | Aucun modèle de première génération dans la navigation actuelle |

Les prix, promotions et stocks sont volatils et ne deviennent pas des données
éditoriales persistantes. Chaque article affiche la génération et la date de
vérification. Les modèles retirés comme Fyra 12, Karu 16 ou Volt 12 peuvent être
traités pour le marché de l'occasion ou une comparaison de migration, mais ne
sont jamais présentés comme membres de la gamme France actuelle sans nouvelle
vérification.

## État du premier corpus

| Élément | État au 2026-08-23 | Portée réelle |
| --- | ---: | --- |
| Fours actuels inventoriés | 9 sur 9 | Pages et caractéristiques fabricant France |
| Questions d'acheteurs | 50 dans 22 discussions | Signaux qualitatifs du forum public `r/ooni`, pas volumes de recherche |
| Vidéos qualifiées | 16 de 9 créateurs | 8 francophones et 8 anglophones |
| Passages exploitables | 72 | 37 mesures tierces et 35 observations tierces, toutes horodatées |
| Références pour lecteur officiel | 16 | Non publiées ; intégration à revérifier et aucun photogramme extrait |

Les vidéos couvrent les six modèles de deuxième génération, le Koda 16 de
première génération, deux anciens modèles utiles et deux concurrents. Les Koda
12 et Karu 12 actuels n'ont encore que des sources fabricant dans le registre :
leurs fiches sont publiables comme inventaires documentaires, sans conclusion
de performance.

Chaque vidéo comporte au moins un conflit potentiel enregistré : affiliation,
prêt, collaboration, lien marchand ou origine de l'unité non établie. Une
« source distincte » signifie ici un éditeur différent, pas une source supposée
neutre. Le Karu 2 Pro et le Koda 16 n'ont encore qu'un créateur exploitable ; les
Koda 12 et Karu 12 n'en ont aucun. Les comparaisons de performance concernées
restent bloquées jusqu'à une deuxième source qualifiée.

Le registre conserve aussi quatre anomalies des pages fabricant au lieu de les
corriger silencieusement : équivalences métriques et impériales incompatibles
sur le Koda 2 (`EV-0100`), unité métrique incohérente sur le Koda 16
(`EV-0101`), libellé de dimension dupliqué sur le Karu 2 (`EV-0102`) et
présentation 30 cm contre surface de 33 cm sur le Volt 2 (`EV-0103`). Ce contrôle
de cohérence est déjà une valeur propre du corpus, sans devenir un avis produit.
Aucune synthèse `FAN-SYN` n'est encore enregistrée : ce lot autorise le début de
la rédaction, pas un classement, une note ou un verdict de performance.

## Règle de couverture

« Tous les articles Ooni » signifie ici : couvrir chaque modèle actuel et
chaque décision d'achat distincte, pas fabriquer toutes les combinaisons de
mots-clés. Deux intentions sont fusionnées lorsque leurs preuves, leur réponse
et leur compromis sont identiques.

Une fiche produit documentaire exige au minimum la page et le manuel fabricant,
deux essais tiers indépendants lorsque la performance est comparée, les conflits
connus et une section « ce que les sources disponibles ne permettent pas de
trancher ». Une page de duel exige une décision réellement différente ; sinon
elle redirige vers le guide de gamme ou le sélecteur.

La carte utilise `inventory`, `researching` et `merged`. Lorsqu'une page entre
dans `site/`, son cycle exécutable devient `draft`, `review`, puis `publishable`.
L'état réellement publié appartient à la release Atlas et ne se déduit pas du
frontmatter.

## Lot 1 — socle de décision

| ID | Article | Décision principale | Priorité | Statut |
| --- | --- | --- | --- | --- |
| `OONI-001` | Quel four Ooni choisir en 2026 ? | Choisir parmi les neuf modèles actuels | P0 | `publishable` |
| `OONI-002` | Gamme Ooni Koda : 12, 16, 2, 2 Pro ou 2 Max | Choisir un four à gaz et une taille | P0 | `researching` |
| `OONI-003` | Gamme Ooni Karu : 12, 2 ou 2 Pro | Choisir le multi-combustible adapté | P0 | `researching` |
| `OONI-004` | Ooni gaz, électrique ou multi-combustible | Arbitrer simplicité, lieu, combustible et apprentissage | P0 | `publishable` |
| `OONI-005` | Formats Ooni 12, 14, 16, 18 ou 24 pouces : quelle pizza rentre vraiment ? | Relier format nominal, ouverture, pizza maximale, espace, poids et débit | P0 | `inventory` |
| `OONI-006` | Prix complet d'un Ooni et accessoires nécessaires | Distinguer four nu, indispensables et options | P0 | `inventory` |

## Lot 2 — chaque four actuel

| ID | Article documentaire | Angle propre | Priorité | Statut |
| --- | --- | --- | --- | --- |
| `OONI-010` | Ooni Koda 2 : analyse documentaire | Gaz 14 pouces portable de deuxième génération | P0 | `publishable` |
| `OONI-011` | Ooni Koda 2 Pro : analyse documentaire | Gaz 18 pouces et compromis encombrement/capacité | P0 | `publishable` |
| `OONI-012` | Ooni Koda 2 Max : analyse documentaire | Double zone 24 pouces et cuisson en série | P0 | `publishable` |
| `OONI-013` | Ooni Koda 12 : analyse documentaire | Entrée de gamme gaz de première génération | P1 | `publishable` |
| `OONI-014` | Ooni Koda 16 : analyse documentaire | Gaz 16 pouces de première génération | P1 | `publishable` |
| `OONI-015` | Ooni Karu 2 : analyse documentaire | Multi-combustible 12 pouces de deuxième génération | P0 | `publishable` |
| `OONI-016` | Ooni Karu 2 Pro : analyse documentaire | Multi-combustible 16 pouces et grand volume | P0 | `publishable` |
| `OONI-017` | Ooni Karu 12 : analyse documentaire | Entrée de gamme multi-combustible | P1 | `publishable` |
| `OONI-018` | Ooni Volt 2 : analyse documentaire | Cuisson électrique intérieure | P0 | `publishable` |

Ces pages sont des analyses documentaires permanentes. Elles attribuent les
mesures et observations à leurs sources et ne portent ni note, ni étoile, ni
balisage d'avis.

## Lot 3 — comparaisons à intention distincte

| ID | Comparaison | Question qui justifie une page |
| --- | --- | --- |
| `OONI-020` | Koda 2 ou Koda 12 | Les gains de deuxième génération justifient-ils l'écart ? |
| `OONI-021` | Koda 2 ou Koda 2 Pro | Faut-il privilégier portabilité ou surface de cuisson ? |
| `OONI-022` | Koda 2 Pro ou Koda 2 Max | À partir de quel débit le Max devient-il pertinent ? |
| `OONI-023` | Koda 16 ou Koda 2 Pro | Ancien 16 pouces ou nouveau 18 pouces ? |
| `OONI-024` | Karu 2 ou Karu 12 | Que change réellement la deuxième génération ? |
| `OONI-025` | Karu 2 ou Koda 2 | Bois/multi-combustible ou simplicité du gaz ? |
| `OONI-026` | Karu 2 Pro ou Koda 2 Pro | Polyvalence du feu ou débit au gaz ? |
| `OONI-027` | Koda 2 ou Volt 2 | Extérieur au gaz ou intérieur électrique ? |
| `OONI-028` | Karu 2 Pro ou Karu 16 d'occasion | Nouveau modèle ou ancienne génération ? |

Les duels sans question propre sont des sections du sélecteur, pas des pages.
Les comparaisons avec Gozney seront cartographiées séparément après ce socle afin
de ne pas diluer la priorité Ooni.

## Lot 4 — accessoires et possession

| ID | Article | Décision couverte | Statut |
| --- | --- | --- | --- |
| `OONI-030` | Les accessoires Ooni vraiment indispensables | Acheter le minimum viable sans pack surdimensionné | `inventory` |
| `OONI-031` | Quelle taille de pelle pour chaque four Ooni ? | Compatibilité 30, 35 et 40 cm | `inventory` |
| `OONI-032` | Brûleur à gaz Karu : intérêt, compatibilité et coût | Ajouter le gaz ou rester au bois/charbon | `inventory` |
| `OONI-033` | Thermomètre et Ooni Connect : utiles ou optionnels ? | Mesurer la pierre, l'air et les aliments | `inventory` |
| `OONI-034` | Housse et stockage extérieur d'un Ooni | Protéger le four selon modèle et météo | `inventory` |
| `OONI-035` | Quelle table pour un four Ooni ? | Surface, dégagement, stabilité et poids | `inventory` |
| `OONI-036` | Nettoyer un four Ooni et sa pierre | Entretien sûr sans promesse non vérifiée | `inventory` |
| `OONI-037` | Brancher un Ooni à gaz en France | Pression, détendeur et variantes nationales | `inventory` |
| `OONI-038` | Garantie Ooni : achat direct ou revendeur | Conditions, enregistrement et preuve d'achat | `inventory` |
| `OONI-039` | Acheter un Ooni d'occasion | Identifier génération, état, pierre et pièces manquantes | `inventory` |
| `OONI-040` | Halo Core ou Halo Pro pour la pâte à pizza | Capacité, encombrement et volume de pétrissage | `publishable` |

Les consignes de sécurité, de gaz et d'entretien s'appuient d'abord sur les
manuels du modèle et les sources officielles applicables. Elles ne sont pas
déduites d'un seul créateur vidéo.

## Ordre de production

1. remplir le corpus Ooni et le registre des questions ;
2. produire `OONI-001` et `OONI-004`, qui servent de colonne vertébrale ;
3. maintenir les neuf fiches modèle déjà passées à `publishable`, sans élargir
   leur conclusion au-delà de leur corpus ;
4. produire les pages de famille `OONI-002` et `OONI-003`, puis les décisions de
   format et de coût complet `OONI-005` et `OONI-006` ;
5. ouvrir uniquement les comparaisons soutenues par les questions observées ;
6. traiter les pages de possession et consolider tout contenu qui ne résout pas
   une décision propre.

Cette carte est révisée dès qu'Ooni ajoute, renomme ou retire un produit de la
navigation France. Le catalogue fabricant prouve l'offre ; il ne prouve pas les
performances annoncées en usage réel.
