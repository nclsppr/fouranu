# ADR-0009 : site trilingue français, anglais et allemand

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-08-31 |
| Propriétaire | nclsppr |
| Portée | Locales publiques, routes, changement de langue, SEO, preuves, médias et publication |
| Remplace | [La décision monolingue de l'ADR-0001](0001-promotion-produit-et-site-astro.md#construire-un-site-astro-statique-séparé) |

## Contexte

La V1 française de Four à Nu est publique. Elle aide à choisir des fours et des
accessoires commercialisés en France à partir d'un corpus documentaire dont les
preuves, les limites et les liens marchands sont territorialisés. Une extension
en anglais et en allemand doit rendre ce même produit accessible dans trois
langues sans créer trois médias, trois marchés ni trois registres de preuves.

L'identité d'une page ne peut pas dépendre de son slug traduit. Un lecteur doit
pouvoir passer à la traduction exacte de la page qu'il consulte, tandis que les
moteurs doivent comprendre qu'il s'agit d'un même contenu décliné par langue.
Une redirection automatique selon le navigateur ou la géographie rendrait ce
choix moins prévisible et confondrait langue et territoire.

Les droits des médias et les champs factuels du registre posent une seconde
frontière. Une permission limitée à une publication en français ne couvre pas
les pages anglaises ou allemandes. Traduire silencieusement une observation ou
ses conditions modifierait par ailleurs la preuve canonique au lieu de traduire
la seule voix éditoriale.

La migration FR/EN/DE est, à la date de cette décision, un candidat local non
publié. L'acceptation de cette ADR autorise sa préparation et sa vérification ;
elle n'autorise ni son déploiement, ni son indexation, ni sa soumission aux
moteurs.

## Décision

### Conserver un seul produit et un seul marché

La cible est un même produit éditorial Four à Nu en français, anglais et
allemand sur `fouranu.com` :

| Langue | Code | Racine |
| --- | --- | --- |
| Français, langue par défaut | `fr` | `/` sans préfixe |
| Anglais | `en` | `/en/` |
| Allemand | `de` | `/de/` |

La langue ne change pas le territoire couvert. Les trois versions traitent du
marché français, conservent les disponibilités et conditions vérifiées pour la
France et utilisent les mêmes marchands autorisés. Amazon reste Amazon.fr ; une
page en anglais ou en allemand ne substitue ni Amazon UK, ni Amazon.de, ni un
autre programme partenaire. Les prix, stocks et offres restent soumis aux mêmes
règles de date, de source et de volatilité.

### Identifier les pages indépendamment de leur URL

Chaque page fixe possède un identifiant sémantique stable. Chaque article garde
le même `articleId` dans les trois langues. Un manifeste explicite associe cet
identifiant à exactement une route française, une route anglaise et une route
allemande. Les slugs peuvent être traduits ; l'identité, les références de
preuve, l'auteur, les dates, les objets commerciaux et les états de publication
ne sont pas recréés à partir du slug.

Les liens éditoriaux internes ciblent la route de la langue courante. Le seul
passage intentionnel entre langues est le sélecteur de langue ou un lien dont la
destination linguistique est annoncée explicitement.

### Changer de langue vers la contrepartie exacte

Le sélecteur propose `FR`, `EN` et `DE` sous forme de liens HTML réels, avec
`Français`, `English` et `Deutsch` dans leurs noms accessibles. Chaque lien vise
la contrepartie enregistrée de la page courante. La langue active est indiquée
visuellement et par `aria-current` ; les drapeaux nationaux ne
représentent pas les langues.

Le sélecteur fonctionne dans le HTML statique, sans JavaScript, cookie,
`localStorage`, géolocalisation ni profilage. Four à Nu ne redirige pas
automatiquement selon `Accept-Language`, l'adresse IP ou une langue précédemment
choisie. Une route absente ne retombe jamais silencieusement sur l'accueil de la
langue demandée : sa contrepartie est omise du sélecteur et l'absence reste une
404 explicite jusqu'à ce que le manifeste soit complet.

### Former des grappes SEO réciproques

Chaque page publiable respecte le contrat suivant :

- l'attribut `lang` du document correspond à la langue rendue ;
- le canonical est auto-référent et pointe vers l'URL de cette langue ;
- les trois pages d'une grappe déclarent réciproquement `hreflang="fr"`,
  `hreflang="en"` et `hreflang="de"`, y compris elles-mêmes ;
- `hreflang="x-default"` pointe vers la version française sans préfixe ;
- le titre, la description et la copie sociale sont rédigés dans la langue de la
  page ; `og:url`, `og:locale` et les `og:locale:alternate` concordent avec la
  grappe ;
- les données structurées emploient l'URL canonique, l'auteur, les dates et
  `inLanguage` de la page rendue, sans ajouter `Review` ou `AggregateRating` ;
- le sitemap unique n'inclut que les URL indexables et décrit les alternates
  réciproques des grappes complètes ;
- `/rss.xml`, `/en/rss.xml` et `/de/rss.xml` contiennent les articles indexables
  de leur langue avec leurs URL canoniques et restent vides en preview ;
- `/llms.txt`, `/en/llms.txt` et `/de/llms.txt` décrivent les parcours publics de
  leur langue sans brouillon, donnée marchande volatile ni lien affilié ;
- `robots.txt` reste global, cohérent avec le sitemap et avec l'état de preview.

Une traduction n'est pas une cannibalisation de la page source lorsque ces
signaux réciproques et son identifiant stable sont complets. Une grappe
incomplète ou incohérente reste `noindex` et hors sitemap.

### Traduire la voix, pas réécrire les preuves

Le registre `research/evidence.csv` et ses identifiants restent les preuves
canoniques communes aux trois langues. Les traductions conservent les valeurs,
unités, dates, URLs, timecodes, attributions, types de preuve, limites et
relations commerciales. Elles ne créent pas un test, une mesure, une expérience
ou une notation qui n'existe pas dans le corpus français.

La voix éditoriale, le titre, le résumé et les explications peuvent être
traduits naturellement. En revanche, les champs canoniques `observation` et
`conditions` d'une preuve ne sont pas traduits silencieusement. Lorsqu'ils sont
affichés sur une page anglaise ou allemande, ils restent dans leur langue
canonique et une note visible explique que le relevé source est conservé en
français. Toute future traduction attestée de ces champs devra être enregistrée
comme telle par une décision et un mécanisme de traçabilité distincts.

### Respecter la portée linguistique des médias

Un média n'entre dans une page que si son droit ou sa permission enregistrée
couvre cette langue et cette surface. Lorsqu'une permission ne couvre que le
français, le média est omis des pages anglaises et allemandes, en en-tête comme
dans le corps et dans l'aperçu social. Le gabarit ne conserve ni cadre vide, ni
légende orpheline, ni texte alternatif sans image. Il peut utiliser la carte de
marque originale générique lorsque son propre droit le permet, mais il ne
recycle pas le média tiers comme solution de repli.

Une traduction, un recadrage, une compression ou une transformation ne crée pas
une permission. L'absence de média localisé n'affaiblit pas la provenance des
affirmations : les sources textuelles et les identifiants de preuve restent
présents.

### Bloquer la publication sur la parité et la QA

Le candidat trilingue ne peut être proposé à la publication que si :

1. chaque identifiant attendu possède une entrée et une route uniques dans les
   trois langues, avec les champs protégés et les preuves en parité ;
2. chaque lien interne reste dans la langue courante et chaque sélecteur cible la
   contrepartie exacte, sans redirection automatique ni dépendance JavaScript ;
3. les canonical, hreflang, Open Graph, données structurées, sitemap, RSS,
   `llms.txt` et robots concordent dans l'artefact construit en mode preview et
   indexable ;
4. aucun média ne dépasse sa portée de droits et toute observation ou condition
   canonique non traduite reçoit la note transparente attendue ;
5. les URLs de preuve, timecodes, objets commerciaux, liens Amazon.fr et portée
   France restent identiques à la source française ;
6. les textes anglais et allemands ont une relecture humaine de langue et une
   revue éditoriale contre les ajouts d'expérience, de test ou de notation ;
7. les pages représentatives et les chemins complets sont contrôlés sur mobile,
   tablette et bureau, au clavier, avec focus visible, zoom, contenu allemand
   long, 404 localisées, console et réseau propres ;
8. les gates du dépôt passent sur le SHA exact et l'artefact public proposé est
   inspecté sans document interne.

Après ces contrôles, le paquet reste un candidat local non publié. Le
propriétaire doit donner un feu vert explicite sur le SHA, la liste des URL, les
textes, les médias, les liens marchands et les métadonnées exacts avant tout
déploiement ou changement d'indexation. Une soumission à un moteur intervient
seulement après la vérification de la production réellement servie.

## Conséquences

- L'ADR-0001 reste applicable à la classe Produit, à Astro, à la séparation de
  Nimbus, aux états éditoriaux et aux URL stables. Seule sa décision de conserver
  le site monolingue est remplacée.
- Le français reste la langue par défaut et la destination `x-default`, sans
  migration des URL françaises historiques.
- Une nouvelle page publique coûte trois contreparties contrôlées ou reste hors
  de la grappe indexable jusqu'à leur disponibilité.
- Les registres de preuves et d'objets commerciaux restent uniques ; la parité
  est vérifiée plutôt que maintenue par trois copies indépendantes.
- Certaines pages anglaises et allemandes peuvent avoir moins d'images que leur
  contrepartie française. Cette différence est correcte lorsqu'elle matérialise
  la portée réelle des droits.
- Les métriques et l'affiliation continuent d'être évaluées sur le marché
  français ; les langues peuvent être segmentées comme dimension de lecture,
  pas comme preuve d'un nouveau territoire.

## Alternatives écartées

### Préfixer aussi le français avec `/fr/`

Cette option déplacerait les URL françaises déjà publiées sans bénéfice pour le
lecteur. La racine existante reste canonique.

### Rediriger selon le navigateur ou la géographie

Cette option rendrait les URL imprévisibles pour les lecteurs, les robots, le
partage et les tests. Elle confondrait en outre langue de lecture et marché.

### Partager un canonical français entre les trois langues

Un canonical commun demanderait aux moteurs d'ignorer les traductions. Chaque
version a donc son canonical auto-référent et ses alternates réciproques.

### Traduire ou dupliquer tout le registre de preuves

Des copies linguistiques non traçables pourraient changer le sens d'une
observation ou de ses conditions. Le registre unique reste canonique ; la page
localisée explique honnêtement ce qui demeure en français.

### Réutiliser tous les médias français

La présence du média sur une URL française ne prouve pas un droit mondial ou
multilingue. L'omission est préférée à une extension de permission supposée.

## Réexamen

Cette décision doit être réexaminée avant l'ajout d'une quatrième langue, d'un
territoire commercial autre que la France, d'une redirection linguistique
automatique, d'un registre de preuves traduit ou d'un changement des URL
françaises historiques.
