---
version: alpha
name: Four à Nu - Ligne de sole
description: Système visuel d'un média de décision sur les fours à pizza, construit autour des matériaux, des instruments et de la traçabilité des preuves.
colors:
  primary: "#0D1214"
  calibration-white: "#FFFFFF"
  cold-steel: "#E6EBED"
  graphite: "#536168"
  probe-blue: "#006B8F"
  live-cyan: "#5DD7E7"
typography:
  display:
    fontFamily: IBM Plex Sans Condensed
    fontSize: 64px
    fontWeight: 600
    lineHeight: 60px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: IBM Plex Sans Condensed
    fontSize: 42px
    fontWeight: 600
    lineHeight: 42px
    letterSpacing: -0.015em
  heading:
    fontFamily: IBM Plex Sans Condensed
    fontSize: 36px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.01em
  body-article:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 29px
  body-ui:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  label-data:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.04em
  data-large:
    fontFamily: IBM Plex Mono
    fontSize: 24px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.01em
spacing:
  micro: 4px
  unit: 8px
  small: 16px
  medium: 24px
  large: 32px
  xlarge: 48px
  xxlarge: 64px
  section: 96px
  gutter-desktop: 24px
  gutter-mobile: 16px
  margin-mobile: 20px
  container-max: 1360px
rounded:
  none: 0px
  plate: 2px
---

# Four à Nu

## Overview

`Ligne de sole` donne à Four à Nu l'apparence d'un poste de lecture technique
publié sur le web. L'interface compare les dimensions, contraintes et mesures
publiées sans suggérer que le média les a produites. Elle donne la priorité aux
conditions, aux sources, aux écarts et aux limites avant toute recommandation ou
action marchande.

La hiérarchie peut s'inspirer de médias technologiques professionnels comme
Numerama ou Frandroid : accueil éditorial dense mais lisible, rubriques nettes,
signature auteur, dates, sources et navigation vers les dossiers. Four à Nu ne
copie ni leur identité, ni leur densité publicitaire, ni leurs gabarits.

Le système reprend des éléments matériels réels du sujet : acier thermolaqué,
inox, cordiérite, sondes, afficheurs, thermomètres infrarouges, cotes et plaques
signalétiques. Il ne met pas en scène un imaginaire de pizzeria. Il ne copie pas
non plus la photographie héroïque et le discours de vente des fabricants.

Ce document fixe les valeurs et les règles. Leur traduction exécutable vit dans
`site/src/styles/global.css`. Les composants référencent ces propriétés CSS.
Aucun composant, module ou style local ne doit ouvrir un second système de
tokens.

## Colors

L'interface utilise un thème clair principal, avec des bandes carbone réservées
aux protocoles, aux légendes techniques et à quelques séquences photographiques.
Il n'existe pas de thème sombre automatique dans cette version du système.

| Token exécutable | Rôle autorisé |
| --- | --- |
| `--color-carbon` | Texte principal, fonds de protocole et contours exigeant le contraste maximal |
| `--color-white` | Fond de page et texte inversé sur bleu de sonde |
| `--color-steel` | Séparation froide et piste de défilement |
| `--color-steel-soft` | Fond secondaire très léger |
| `--color-graphite` | Métadonnées, légendes et texte secondaire sur blanc |
| `--color-probe` | Liens, action principale, focus sur fond clair et repère mesuré |
| `--color-reading` | Valeur active sur carbone, jamais texte ou contrôle sur fond clair |
| `--color-line` | Règle structurelle sur fond clair |
| `--color-carbon-line` | Règle structurelle sur fond carbone |
| `--color-carbon-muted` | Texte secondaire sur fond carbone |

Les paires textuelles approuvées ont été calculées en sRGB :

| Premier plan | Arrière-plan | Contraste |
| --- | --- | ---: |
| `--color-carbon` | `--color-white` | 18,86:1 |
| `--color-graphite` | `--color-white` | 6,41:1 |
| `--color-probe` | `--color-white` | 6,00:1 |
| `--color-white` | `--color-probe` | 6,00:1 |
| `--color-reading` | `--color-carbon` | 11,08:1 |
| `--color-steel` | `--color-carbon` | 15,69:1 |
| `--color-carbon-muted` | `--color-carbon` | 8,98:1 |

`--color-steel` ne sert pas de texte sur blanc. `--color-reading` ne sert pas de texte,
de bordure de contrôle ou de focus sur blanc. Une information ne repose jamais
sur la couleur seule : un libellé, un symbole ou une valeur textuelle porte le
même sens.

Les couleurs chaudes sont absentes de l'identité. Une alerte fonctionnelle
future peut introduire une couleur d'état distincte seulement après mesure du
contraste et validation de son rôle. Elle ne devient pas une couleur de marque.

## Typography

La famille IBM Plex est auto-hébergée en WOFF2 sous licence OFL. Le site charge
uniquement les sous-ensembles latins et les graisses réellement utilisées :
Sans Condensed 600 et 700, Sans 400, 500 et 600, puis Mono 500. Chaque
déclaration emploie `font-display: swap`.
Dans la feuille globale, Condensed retombe sur Arial Narrow puis `sans-serif`,
Sans sur Arial puis `sans-serif`, et Mono sur `ui-monospace` puis `monospace`.

- IBM Plex Sans Condensed compose les titres en casse de phrase. Un titre de
  rubrique tient sur deux lignes au maximum sur bureau et tablette. Un titre
  d'analyse peut en occuper trois pour conserver le modèle exact et l'angle de
  preuve. Sur mobile, quatre lignes sont admises pour une analyse et jusqu'à
  cinq à 320 px pour la promesse manifeste de l'accueil, sans comprimer les mots.
- IBM Plex Sans compose la navigation, les textes longs, les boutons et les
  légendes narratives.
- IBM Plex Mono compose les températures, durées, dimensions, identifiants de
  preuve, dates techniques et en-têtes de tableaux courts.
- Les valeurs numériques utilisent des chiffres alignés avec
  `font-variant-numeric: tabular-nums lining-nums`.
- Les capitales sont réservées aux identifiants courts et aux libellés de
  quatre mots au maximum. Le corps et les titres ne passent jamais en capitales.
- Un article conserve une longueur de ligne maximale de 68 caractères.
- Aucun texte porteur de sens n'est rasterisé dans une image.

Le navigateur précharge Sans 400 et Sans Condensed 600, visibles au premier
écran. Mono et les graisses secondaires se chargent sans
bloquer le rendu. Les métriques des polices de repli sont ajustées dans la
feuille globale après mesure pour limiter le déplacement de mise en page.

## Layout

Le rythme repose sur une unité de 8 px, avec un demi-pas de 4 px réservé aux
ajustements optiques. Le conteneur atteint au plus 1360 px.

### Grille responsive

| Largeur | Grille | Gouttière | Marge minimale |
| --- | ---: | ---: | ---: |
| 1200 px et plus | 12 colonnes | 24 px | 32 px |
| 768 à 1199 px | 6 colonnes | 24 px | 24 px |
| Moins de 768 px | 4 colonnes | 16 px | 20 px |

Sur desktop, le H1 occupe les colonnes 1 à 8 et le rail de preuve les colonnes
10 à 12. Le corps d'article occupe six colonnes, avec une largeur plafonnée à
68 caractères. Les comparatifs, courbes et vues cotées peuvent utiliser les
douze colonnes.

Sur tablette, le contenu principal utilise quatre colonnes et le rail de preuve
deux colonnes. Sur mobile, le titre, le rail, le corps, les figures et les
actions reprennent les quatre colonnes dans l'ordre de lecture. Aucun rail ne
reste fixe sur mobile.

Les tableaux conservent toutes leurs colonnes. Sous 768 px, un conteneur annoncé
comme défilable permet le déplacement horizontal au clavier et au toucher. Le
premier intitulé reste visible si cela n'occulte pas les valeurs. Une vue mobile
ne remplace jamais un tableau par des cartes qui cacheraient des critères.

Les sections commencent sur le rythme de 96 px en desktop et 64 px en mobile.
Les groupes liés utilisent 16 ou 24 px. Un vide de grille ne reçoit pas une
carte, une citation ou une illustration uniquement pour équilibrer la page.

## Elevation & Depth

La profondeur vient des contrastes de fond, des règles de 1 px et de la position
dans la grille. Les contenus éditoriaux, comparatifs et rails de preuve n'ont ni
ombre portée ni effet de verre.

Un dialogue réellement modal peut utiliser un voile carbone transparent et une
surface blanche bordée. Aucun autre composant ne flotte au-dessus de la page.
Les bandes carbone restent planes et ne reçoivent ni lueur ni dégradé.

## Shapes

L'interface emploie des rectangles francs. Les boutons, champs, plaques de
preuve et conteneurs ont un rayon de 0 ou 2 px. Les pilules sont interdites.
Les lignes techniques mesurent 1 px. La `ligne de sole` mesure 2 px.

Le logo est monochrome, sans dégradé, ombre, texture ou contour décoratif. Sa
forme finale doit fonctionner en noir sur blanc, en blanc sur carbone, en 16 px,
en favicon et en impression une couleur. Le bleu et le cyan appartiennent au
système de preuve, pas au mot-symbole. Le tracé SVG provisoire reste une
exploration tant qu'une validation séparée ne l'adopte pas.

Les icônes utilisent un contour régulier et une géométrie orthogonale lorsque
le sens le permet. Elles accompagnent toujours un libellé pour les actions et
les états importants.

## Components

### En-tête et navigation

L'en-tête contient le logo monochrome et les entrées éditoriales nécessaires.
Une recherche textuelle n'apparaît que lorsqu'un index local fonctionnel existe.
Il n'intègre ni bande promotionnelle, ni carrousel, ni compte à rebours. La
navigation active combine texte, épaisseur et règle basse.

### Actions et liens marchands

Une vue contient une seule action remplie en `probe-blue`. Les actions
secondaires restent blanches avec texte et bordure carbone. Les liens de texte
sont soulignés au repos dans le corps des articles.

Un lien affilié porte un libellé marchand explicite et reste visuellement
séparé du verdict, des limites et des sources. Sa taille, sa couleur ou sa
position ne doit jamais faire disparaître une réserve éditoriale. Le marquage
`rel="sponsored"` et la déclaration d'affiliation font partie du composant.

### Rail de preuve

Le rail affiche la nature de la preuve, la source, la date de vérification, les
conditions connues, le niveau de confiance et les conflits déclarés. Il ne
réduit jamais ces données à une note, une étoile ou un badge coloré.

Le bandeau `Analyse documentaire - sources et protocoles attribués` précède la
première recommandation. Une note, une étoile, un classement
pseudo-scientifique ou un composant visuel qui imite un verdict d'essai reste
interdit.

### Ligne de sole

La signature relie une ligne cyan horizontale de 2 px à une plaque monospacée.
La plaque montre uniquement les champs réellement présents dans le registre :
nom du plan mesuré, valeur, unité, condition, instant ou durée, dispersion si
elle existe, et identifiant de preuve.

La ligne n'apparaît pas lorsqu'aucune mesure ou cote sourcée ne justifie sa
position. Les maquettes, squelettes et exemples utilisent des intitulés comme
`[valeur sourcée]` et `[identifiant de preuve]`, jamais un chiffre plausible
inventé. Une carte thermique, une courbe ou un point de prélèvement exige les
données qui l'ont produit.

### Comparaisons

Les comparaisons utilisent des lignes alignées, des unités normalisées et des
notes de méthode à proximité. Les protocoles incompatibles restent séparés.
Une valeur manquante s'affiche comme `Non mesuré` ou `Non publié`, jamais comme
zéro. L'ordre d'affichage ne suggère pas un classement non autorisé.

### Médias

Chaque média public utilise un type prévu par le protocole éditorial : `embed`,
`licensed-frame`, `ai-illustration`, `fouranu-original` ou `ai-original`. Le
type `quarantine` n'entre jamais dans le site public.

Une figure contient un texte alternatif adapté, une légende visible, la source,
la date, le statut d'illustration ou de preuve et l'identifiant associé. Une
illustration assistée par IA est déclarée à côté de l'image. Elle ne soutient
jamais une affirmation factuelle.

La direction visuelle s'applique autour d'une preuve avec cadre, légende,
annotations et mise en page. Elle ne modifie pas les pixels qui montrent une
flamme, une cuisson, un affichage, un défaut, une géométrie ou une mesure. Les
personnes identifiables restent exclues des entrées IA.

Les images utilisent `srcset`, `sizes`, une largeur et une hauteur explicites,
AVIF ou WebP avec repli adapté. L'image principale n'est pas chargée à la
demande. Les médias sous le premier écran le sont. Une vidéo ne démarre jamais
automatiquement. Un lecteur tiers se charge après une action explicite, avec un
poster local autorisé et le mode de confidentialité disponible.

### Accessibilité et interaction

- Chaque cible interactive mesure au moins 44 par 44 px.
- Le focus clair utilise un contour `probe-blue` de 2 px avec un décalage de
  2 px. Sur carbone, il utilise `live-cyan`.
- Le lien d'évitement devient visible au focus avant la navigation.
- Les titres suivent un ordre HTML continu. Les légendes et notes de tableau
  restent associées par la sémantique HTML.
- Le zoom à 200 % ne masque ni texte, ni action, ni source.
- Les changements de sélection, de filtre et de statut sont annoncés aux
  technologies d'assistance.
- La couleur, la position ou une icône seule ne portent jamais un verdict.

Les transitions durent de 120 à 180 ms et modifient seulement l'opacité, la
couleur ou une translation de 2 px au maximum. `prefers-reduced-motion: reduce`
supprime les translations et les transitions non indispensables. Aucun contenu
éditorial n'est révélé uniquement par le défilement ou une animation.

### Performance

Le site utilise une seule entrée CSS globale pour les tokens et les règles
partagées. Le JavaScript client est réservé à la recherche, aux filtres, aux
comparaisons et au chargement volontaire des lecteurs tiers. Le contenu, les
sources et les tableaux restent lisibles sans JavaScript.

Les images réservent leur ratio avant chargement. Les animations n'utilisent
que `transform` et `opacity`. La recette de build doit viser, au 75e centile,
un LCP inférieur ou égal à 2,5 s, un INP inférieur ou égal à 200 ms et un CLS
inférieur ou égal à 0,1 sur mobile et desktop. Ces objectifs sont des portes de
validation, jamais des résultats déclarés avant mesure.

## Do's and Don'ts

### Règles positives

- Montrer un matériau, un instrument, une cote ou une condition qui aide à
  comprendre le produit.
- Conserver les unités, sources, dates et limites à proximité de chaque valeur.
- Utiliser le bleu pour l'action ou un repère mesuré, et le cyan pour une
  lecture active sur carbone.
- Préférer une photographie neutre, une coupe technique ou un gros plan utile à
  une image d'ambiance.
- Faire passer le contenu HTML, la méthode et la source avant tout effet visuel.

### Exclusions anti-slop

- Aucun ivoire, crème, beige, terracotta, bordeaux gourmand ou vert basilic.
- Aucune serif de magazine, script de pizzeria ou fausse enseigne artisanale.
- Aucune flamme, tranche de pizza, toque, moustache, drapeau italien, damier,
  basilic, mozzarella ou pelle croisée comme emblème.
- Aucun grain papier, vieillissement, trame d'impression ou texture analogique
  ajoutée à l'interface.
- Aucun dégradé thermique décoratif, halo, néon, pseudo-terminal ou grille
  futuriste.
- Aucun bento, carte imbriquée, pilule, grande ombre molle ou verre dépoli.
- Aucune étoile, note, badge `testé` ou chiffre scientifique inventé.
- Aucune donnée, courbe, thermographie ou lecture d'instrument inventée pour
  remplir une composition.
- Aucune image de fabricant ou de vidéo tierce présentée comme une observation
  propre à Four à Nu.
- Aucun appel marchand plus saillant que le verdict, la méthode ou la limite
  qui l'encadre.

### Zones gelées

Toute modification d'un point ci-dessous exige une décision explicite du
propriétaire du projet avant implémentation :

1. le nom public `Four à Nu` et la direction `Ligne de sole` ;
2. les six couleurs, leurs rôles et l'absence de palette chaude de marque ;
3. IBM Plex Sans Condensed, Sans et Mono, sans serif éditoriale ;
4. la grille 12, 6 et 4 colonnes, le rythme de 8 px et le conteneur de 1360 px ;
5. le logo monochrome et l'interdiction d'utiliser l'accent dans le mot-symbole ;
6. la ligne de sole conditionnée à une mesure ou une cote réellement sourcée ;
7. la provenance visible des médias et l'interdiction de transformer une
   preuve ;
8. l'absence de note, étoile, classement pseudo-scientifique ou apparence de
   verdict d'essai ;
9. `site/src/styles/global.css` comme unique emplacement des tokens CSS
   exécutables ;
10. les exclusions anti-slop de la section précédente.

Le dessin définitif du logo, le choix des premières photographies originales et
le cadrage exact de chaque gabarit restent ouverts. Leur validation ne peut pas
contredire une zone gelée.

### Matrice de validation

| Domaine | Vérification obligatoire | Porte de sortie |
| --- | --- | --- |
| Tokens | Rechercher les hex, familles, rayons et espacements hors de `site/src/styles/global.css` | Aucun doublon exécutable dans un composant ou un module |
| Couleurs | Mesurer chaque paire réellement rendue, dans tous ses états | WCAG AA pour texte et contrôles, rôles de couleur respectés |
| Typographie | Vérifier les fichiers WOFF2, les graisses chargées, les replis et les chiffres tabulaires | Aucun appel de police tiers, aucun texte important rasterisé |
| Logo | Rendre en noir, blanc, 16 px, favicon et impression une couleur | Lisibilité sans détail perdu ni accent coloré nécessaire |
| Responsive | Capturer et parcourir au clavier à 360, 768, 1280 et 1440 px | Aucun débordement de page, rail replacé, tableaux accessibles |
| Structure | Inspecter H1, ordre des titres, landmarks, lien d'évitement et ordre DOM | Lecture cohérente sans CSS et au zoom 200 % |
| Focus | Parcourir toutes les actions au clavier sur fond clair et carbone | Focus visible, cible de 44 px, aucun piège clavier |
| Preuves | Rapprocher chaque valeur, graphique et plaque de son registre | Aucun chiffre public sans source et identifiant autorisés |
| Médias | Vérifier type, droit, légende, texte alternatif, source et déclaration IA | Aucun média `quarantine`, aucune illustration utilisée comme preuve |
| Affiliation | Inspecter déclaration, libellé et attribut des liens rémunérés | `rel="sponsored"`, réserve éditoriale au moins aussi visible que l'action |
| Mouvement | Tester le comportement normal et `prefers-reduced-motion` | Aucun contenu dépendant du mouvement, aucune translation résiduelle requise |
| Performance | Mesurer les pages représentatives sur mobile et desktop | LCP, INP et CLS sous leurs objectifs avant déclaration de réussite |
| Anti-slop | Revue visuelle des pages d'accueil, article, comparatif et média | Aucun motif interdit, aucune décoration sans fonction éditoriale |

Une ligne validée sans mesure, capture ou inspection correspondante reste
`Non vérifié`. La matrice interdit de transformer une cible en résultat annoncé.
