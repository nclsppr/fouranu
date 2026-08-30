# ADR-0008 : visuels originaux pour les guides multi-produits

- Statut : accepté
- Date : 2026-08-30
- Décideur : propriétaire de Four à Nu
- Complète : ADR-0005

## Contexte

Les premiers guides d’accessoires comparent plusieurs produits de plusieurs
fabricants. Une photographie officielle unique ferait passer un candidat pour
le sujet de toute la page. Un composite de photographies Amazon ou fabricant
multiplierait les droits, les transformations et les signaux marchands sans
ajouter de preuve.

L’ADR-0005 reste juste pour un dossier consacré à un modèle précis : sa
silhouette doit venir d’une photographie officielle autorisée. Elle ne prévoit
pas explicitement le cas d’un guide de catégorie dont le sujet est un geste —
lancer, couper, lire la sole ou ranger des pâtons — plutôt qu’un produit.

## Décision

Un guide multi-produits peut employer une illustration éditoriale originale en
en-tête ou comme repère comparatif dans le corps lorsque toutes les conditions
suivantes sont réunies :

1. aucune image tierce n’entre dans sa création ;
2. les objets restent génériques, sans marque, emballage, texte ni détail qui
   prétend reproduire un modèle comparé ;
3. l’image illustre le geste ou la famille d’outils et ne soutient aucune
   caractéristique, mesure, compatibilité ou conclusion ;
4. le registre emploie `editorial-created`, `editorial-original` et le droit
   `original`, avec les empreintes exactes des dérivés ;
5. la légende visible contient « Illustration éditoriale originale Four à Nu. » ;
   un visuel comparatif précise en plus qu’il représente des types et non les
   modèles commerciaux exacts ;
6. la validation humaine du visuel et du paquet exact reste requise avant le
   passage à `publishable`, l’indexation ou le déploiement.

L’ADR-0005 continue de s’appliquer sans changement aux articles consacrés à un
four, un pétrin ou un accessoire identifié. L’exception dépend donc du type de
dossier, pas de la disponibilité plus ou moins pratique d’une photo.

## Conséquences

- Les quatre guides d’accessoires restent en `review`, `noindex` et hors
  publication tant que leurs visuels de tête et de corps sont enregistrés avec
  une validation humaine `pending`.
- Le schéma de contenu et la gate distinguent deux chemins explicites :
  `official-stylized` pour un produit identifié et `editorial-original` pour un
  guide multi-produits.
- Les images Amazon.fr servent uniquement à reconnaître une offre chez le
  marchand ; elles ne sont ni copiées, ni transformées, ni publiées.
- Une future fiche consacrée à un seul accessoire devra revenir au chemin
  officiel stylisé ou recevoir une nouvelle décision.

## Alternatives écartées

### Utiliser la photo du premier produit du tableau

Elle donnerait une importance visuelle injustifiée à ce produit et rendrait la
page dépendante d’un seul fabricant.

### Composer un catalogue de captures Amazon.fr

Cette solution confondrait preuve de disponibilité, visuel éditorial et appel
marchand, avec des droits non établis.

### Publier les guides sans image propre

Le gabarit d’article, ses aperçus sociaux et la cohérence du silo ont besoin
d’un en-tête identifiable. Une illustration originale neutre fournit ce repère
sans simuler un essai.
