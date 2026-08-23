# ADR-0002 : média documentaire permanent et cible Atlas

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-08-23 |
| Propriétaire | nclsppr |
| Portée | Modèle éditorial, taxonomie de preuve, indexation et cible de publication |
| Remplace | Les sections de l'ADR-0001 relatives à la Saison 0, à `J-TEST` et à une transition vers des essais physiques |

## Contexte

L'ADR-0001 a promu Jupiter en produit Four à Nu, séparé le site public de Nimbus
et choisi Astro pour produire un artefact statique. Ces choix restent valides.
Elle décrivait aussi un état documentaire transitoire et une capacité ultérieure
de test propre au média. Cette trajectoire ne correspond plus au produit voulu.

Four à Nu doit devenir un blog spécialisé durable. Sa valeur propre vient de la
sélection des questions, de la normalisation prudente des informations, de la
comparaison des protocoles publiés, de la détection des contradictions et de la
traçabilité de chaque conclusion.

Le site doit pouvoir être remis à Atlas sans confondre la préparation d'un
candidat, son admission dans le contrôle central `vps-infra`, la publication
d'une release et l'activation de `fouranu.com`.

## Décision

### Adopter un modèle documentaire permanent

Four à Nu publie des analyses documentaires. Chaque page distingue :

- `FAB`, une donnée attribuée au fabricant ;
- `T-MES`, une mesure publiée par un tiers avec ses conditions ;
- `T-OBS`, une observation publiée par un tiers ;
- `FAN-SYN`, une synthèse Four à Nu dont les prémisses et la méthode sont
  visibles ;
- `FAN-INF`, une inférence Four à Nu motivée et accompagnée d'un niveau de
  confiance.

La taxonomie ne contient aucune classe de test propre au média. Une mesure ou
observation tierce reste attachée à son auteur, à sa session et aux relations
commerciales connues. Une limite s'exprime comme une limite du corpus, de la
source ou de la comparabilité.

### Exclure les signaux d'avis produit

Four à Nu ne publie pas de note, d'étoile, de classement pseudo-scientifique ni
de donnée structurée `Review` ou `AggregateRating`. Les pages utilisent le type
`Article`. Elles ne racontent jamais une expérience tierce à la première
personne.

Le bandeau documentaire décrit positivement la méthode :

> Analyse documentaire. Ce dossier confronte des données fabricant, des mesures
> publiées et des observations attribuées. Les protocoles et relations
> commerciales connus sont indiqués avec les sources.

### Séparer prépublication et indexation

La preview reste en `noindex` par défaut. Le caractère documentaire d'une page
n'interdit pas son indexation. Le frontmatter passe de `draft` à `review`, puis
à `publishable` après la barrière éditoriale. Seules les pages `publishable`
incluses dans un paquet autorisé entrent dans le sitemap et deviennent
indexables. L'état réellement publié appartient à la release Atlas.

### Préparer Atlas sans l'activer

Atlas est la cible de publication. Le dépôt produit un artefact statique
reproductible et le contrat nécessaire à son admission par `vps-infra`.

Les opérations suivantes restent distinctes :

1. construire et vérifier le candidat dans le dépôt Four à Nu ;
2. admettre le candidat dans `vps-infra` ;
3. publier la release sur Atlas ;
4. activer le domaine et l'exploration publique ;
5. activer séparément analytics, affiliation ou autres tiers.

Cette décision autorise uniquement la première opération. Elle n'autorise aucun
changement DNS, aucune release publique et aucun compte externe.

## Conséquences

- Les contrats, le rendu public, les validateurs et les tests doivent supprimer
  `J-TEST` et remplacer `J-SYN` et `J-INF` par `FAN-SYN` et `FAN-INF`.
- Les mentions de Saison 0, de niveau verrouillé ou de capacité physique future
  disparaissent des surfaces actuelles.
- Les onze dossiers Ooni peuvent devenir indexables après validation. Ils ne
  restent pas en `noindex` du seul fait de leur nature documentaire.
- La page auteur, la page À propos, les mentions légales, la confidentialité, le
  contact, la politique de correction et la transparence commerciale sont
  bloquants avant indexation.
- Les URL produit restent stables. Une correction, une nouvelle source ou une
  évolution de gamme enrichit la page existante lorsque son intention ne change
  pas.
- `BRIEF.md` conserve l'exploration historique. Il ne porte aucune règle actuelle.

## Effet sur l'ADR-0001

L'ADR-0001 reste valide pour :

- la promotion du projet au pack Full ;
- le site Astro statique séparé de Nimbus ;
- le HTML essentiel sans dépendance JavaScript ;
- la séparation entre préparation, hébergement, DNS et affiliation ;
- le contrôle de l'indexation par état éditorial.

La présente ADR remplace les sections Préserver la vérité de la Saison 0,
Conserver les URL lors des futurs tests, les lignes d'état associées aux tests
physiques et les fixtures de transition correspondantes. En cas de divergence,
l'ADR-0002 fait autorité.

## Options écartées

| Option | Motif |
| --- | --- |
| Modèle documentaire transitoire | Il maintient une promesse qui ne correspond plus au produit |
| Blog sans registre de preuve | Il ne crée pas assez de valeur face aux fabricants, grands médias et réponses synthétiques |
| Notes et étoiles fondées sur des sources tierces | Elles donnent l'apparence d'un avis propre et rendent la provenance moins lisible |
| Publication directe hors Atlas | Elle contourne le contrôle central, le contrat de release et la procédure de retour arrière |

## Plan de vérification

Avant de présenter le candidat comme publiable :

1. hors historique explicitement remplacé, aucune surface actuelle ne contient
   `J-TEST`, `J-SYN`, `J-INF` ou Saison 0 ;
2. les registres et gabarits utilisent les cinq classes retenues ;
3. aucune page ne contient de note, étoile, `Review` ou `AggregateRating` ;
4. la preview reste en `noindex` et hors sitemap ;
5. un build de publication n'indexe que les pages au statut `publishable` ;
6. les pages de confiance sont complètes et reliées depuis chaque article ;
7. l'artefact statique et son contrat Atlas sont reproductibles ;
8. aucune admission, publication ou activation externe n'a lieu sans son
   autorisation propre.
