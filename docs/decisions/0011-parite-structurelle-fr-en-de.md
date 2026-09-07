# ADR-0011 : parité de structure et de lecture FR/EN/DE

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-09-08 |
| Propriétaire | nclsppr |
| Portée | Gabarits, sélection des dossiers, médias et traduction des observations et conditions |
| Complète | [ADR-0009](0009-site-trilingue-fr-en-de.md), dont elle remplace le maintien du relevé français dans les pages traduites |

## Contexte

Les articles et les routes FR/EN/DE existent, mais les pages fixes anglaises et
allemandes utilisent un gabarit générique différent des pages françaises. Les
contrôles de routes et de métadonnées n’empêchent pas cette divergence : un
changement de langue peut retirer les visuels et des sections du parcours.
Le propriétaire demande de corriger cette différence.

L’ADR-0009 réservait la traduction des observations et conditions à une décision
et à une traçabilité distinctes. Les afficher dans la langue de lecture permet
également de conserver une bibliographie équivalente, sans réécrire le registre
factuel ni multiplier les sources de vérité.

## Décision

### Partager les pages et les sélections

Les seize routes fixes utilisent les mêmes composants de page dans les trois
langues ; les 404 utilisent aussi un composant commun. Les textes localisés
alimentent ces gabarits. Les sections, leur ordre, les actions, les images
autorisées et les dossiers sélectionnés restent identiques entre contreparties.
Les sélections et tris utilisent les identifiants stables du manifeste, jamais
l’ordre accidentel des slugs traduits. Les articles gardent leur gabarit commun.

Les retours à la ligne et les hauteurs peuvent varier avec la langue. La taille
des caractères ou le contenu ne sont pas réduits pour simuler une égalité de
hauteur. Les trois comparatifs textuels conservent l’exception sans en-tête
image prévue par l’ADR-0010. Les URL, `x-default` français et liens exacts du
sélecteur restent ceux de l’ADR-0009, y compris le statut 404 entre langues.

### Traduire sans modifier la preuve canonique

`research/evidence.csv` reste l’unique registre factuel. Deux tables distinctes,
`site/src/data/evidence-translations.en.csv` et
`site/src/data/evidence-translations.de.csv`, portent seulement `evidence_id`,
`observation` et `conditions`. Le composant des sources résout la traduction
par cet identifiant. Les autres champs proviennent du registre canonique.

Chaque preuve a une traduction unique et complète dans chaque langue. Les
valeurs, unités, négations, réserves et limites gardent leur sens. Une correction
du relevé entraîne la revue des deux traductions dans la même tranche ; leur
historique Git assure la traçabilité. Les contrôles refusent identifiants
inconnus, doublons, observations vides ou conditions manquantes. La relecture
linguistique et éditoriale consigne son périmètre et son mode : un contrôle
automatisé ou une revue par un agent n’est pas présenté comme une relecture
humaine. Ce contrat remplace l’exigence de mode de relecture du point 6 de
l’ADR-0009 ; il ne crée pas une nouvelle demande d’approbation pour la correction
autorisée.

### Vérifier les médias par langue et par surface

`language_scope` et `surface_language_scope` rendent explicites les langues et
les usages couverts, y compris les variantes responsive, les données structurées
et le sitemap d’images. L’attestation privée du propriétaire du 3 septembre 2026
couvre 82 médias enregistrés pour leurs usages web FR/EN/DE exacts. Elle n’est
pas présentée comme une attestation des ayants droit et ne couvre pas Open Graph
ou Twitter. Les preuves privées restent hors Git.

La copie de build `site/src/data/assets.csv` est produite depuis le registre
canonique `research/assets.csv`, comme pour les preuves. La gate exige une
identité octet pour octet : le build Compose autonome ne lit pas un fichier
extérieur à son contexte et ne maintient pas un second registre indépendant.

Le registre conserve 117 actifs. La correction utilise les mêmes 28 en-têtes
et 18 figures d’article par langue, sans nouvelle image ni transformation. Les
aperçus sociaux utilisent la carte de marque originale v2 lorsque la permission
du média éditorial ne couvre pas ces usages. Une permission web n’étend jamais
la portée sociale. Un média hors portée ne peut pas être rendu pour satisfaire
un contrôle de parité.

### Garder le marché et le produit actuels

Les trois langues servent toujours le marché français. Les sources, modèles,
objets commerciaux, destinations Amazon.fr, déclarations d’affiliation et
conditions de preuve restent inchangés. La correction conserve le sélecteur,
le budget et les comparatifs documentaires existants. Elle n’ajoute aucun essai
physique, témoignage, notation, traceur, compte ou service externe.

## Vérification et état

Les tests comparent les structures, images et liens internes ordonnés de chaque
route fixe dans les trois langues, ainsi que les médias des articles, les
traductions de preuves et les permissions par surface. Les contrôles SEO
existants restent nécessaires. La revue navigateur compare les trois langues
aux mêmes largeurs, avec le contenu allemand long, le clavier, le focus, le
mouvement réduit, les routes, la console et le réseau.

Cette décision fixe le contrat de la correction demandée. Elle ne constitue ni
une preuve de QA, ni une preuve de déploiement, ni une promesse de classement
SEO. `STATUS.md` consigne séparément le candidat, les contrôles réalisés, la CI
et la version effectivement servie. Les autorisations existantes continuent de
s’appliquer à leur périmètre ; une nouvelle capacité externe reste soumise à
son propre contrat.
