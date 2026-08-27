# Protocole éditorial, sources et visuels

Cadre mis à jour le 2026-08-26. Ce protocole est une barrière
opérationnelle, pas un avis juridique. Une validation professionnelle sera
nécessaire avant une exploitation répétée ou contractuellement complexe.

## Décision

Four à Nu publie aujourd'hui un corpus documentaire. Il produit des analyses,
un jeu de données et un parcours de décision à partir de sources attribuées. Une
analyse peut rapprocher, normaliser ou contredire ces sources, mais elle ne
transforme jamais une expérience tierce en expérience de Four à Nu.

L'ADR-0006 fixe une ambition future d'essais de première main sur les fours,
accessoires et pétrins. Elle n'active aucun test : tant qu'un protocole et sa
taxonomie n'ont pas été acceptés séparément, toutes les pages restent soumises
au présent modèle documentaire.

Le produit ne publie ni note, ni étoile, ni classement pseudo-scientifique, ni
donnée structurée `Review` ou `AggregateRating`. Une vidéo tierce peut être une
source. Une image transformée peut être un habillage autorisé. Elle ne devient
jamais une preuve.

## Voix éditoriale

Four à Nu écrit comme un bon testeur qui aide un ami à choisir, pas comme une
notice technique. Le lecteur doit comprendre dès l'ouverture à qui le produit
convient, ce qui peut coincer et quelle question trancher. La rédaction emploie
des mots courants, des paragraphes courts, des intertitres utiles et des
exemples concrets. Une caractéristique technique n'apparaît que lorsqu'elle
change réellement l'achat, l'installation ou l'usage ; le jargon est traduit
au premier emploi.

La voix peut être personnelle, directe et tranchée : la rédaction peut
expliquer ce qu'elle choisirait, écarterait ou vérifierait dans une situation
donnée. Une telle prise de position relève de `FAN-INF`, cite ses prémisses et
conserve son niveau de confiance. Elle ne permet jamais d'écrire qu'un produit
a été testé, mesuré, utilisé ou goûté par Four à Nu lorsque l'expérience
appartient à un tiers. Les formules « notre test », « nous avons mesuré » ou
« après plusieurs semaines d'utilisation » sont interdites sans expérience
propre enregistrée.

Chaque création ou révision d'article comprend une passe de simplification :
réponse avant méthode, bénéfice avant fiche technique, verdict nuancé avant
bibliographie. Les tableaux détaillés et les protocoles restent accessibles
après une synthèse en langage courant. Le site ne termine pas ses dossiers par
une note chiffrée, des étoiles ou un classement.

## Signatures et biographies

Une signature désigne la personne référente du dossier au sein de la rédaction.
L'attribution est enregistrée dans son frontmatter et reste stable entre deux
builds. Elle ne peut pas être tirée à nouveau au moment de la construction du
site. Tant qu'aucune validation individuelle n'est enregistrée, les sources,
les conclusions et les limites restent sous la responsabilité collective de la
rédaction : la signature seule ne prouve pas une rédaction ou une relecture
personnelle.

Une biographie publique ne contient que des éléments explicitement fournis pour
publication par le propriétaire éditorial ou validés par la personne concernée.
Elle n'est pas présentée comme personnellement validée sans preuve de cet accord.
Une pratique personnelle, une formation ou la prise en main de plusieurs fours
peut expliquer un parcours ; elle ne devient ni une preuve du dossier, ni un
essai Four à Nu. Une expérience de première main ne soutient une conclusion
éditoriale que lorsqu'elle entre dans le protocole, la taxonomie et les registres
autorisés pour le programme d'essais.

Une photographie d'auteur n'est publiée que lorsqu'elle est fournie pour cet
usage, que l'usage commercial et l'accord à l'image sont enregistrés et que sa
personne correspond à la signature. Le fichier source reste privé. Le dérivé
public peut être recadré, corrigé en tonalité et recevoir un grain léger
localement ; il ne modifie pas les traits et ne sert jamais de preuve produit.
En l'absence de photographie publiable, le profil revient à un monogramme
typographique. Aucun portrait réaliste ou substitut photographique n'est
inventé.

## Taxonomie de preuve

Chaque affirmation importante porte un identifiant du registre
`research/evidence.csv` et une classe parmi les suivantes.

| Code | Nature | Formulation permise |
| --- | --- | --- |
| `FAB` | Donnée du fabricant | « Le fabricant annonce… » |
| `T-MES` | Mesure réalisée par un tiers | « Dans les conditions décrites, X mesure… » avec source et timecode |
| `T-OBS` | Observation visible chez un tiers | « La séquence montre… » sans extrapoler au-delà de l'image |
| `FAN-SYN` | Calcul ou synthèse de plusieurs sources | « L'analyse documentaire indique… » avec méthode et incertitude |
| `FAN-INF` | Inférence éditoriale | « Four à Nu estime… » avec raisons et niveau de confiance |

Une comparaison de performance repose sur au moins deux sources indépendantes
ou affiche clairement qu'elle dépend d'une source unique. Deux mesures issues de
protocoles incompatibles ne sont jamais moyennées. Le sponsoring, le prêt de
matériel et les liens marchands connus sont enregistrés comme conflits
potentiels, sans déduire automatiquement que la source est fausse.

Les questions d'acheteurs vivent séparément dans
`research/questions.csv`. Elles justifient une intention éditoriale et aident à
regrouper les décisions ; elles ne prouvent ni une performance produit, ni un
volume de recherche, ni la représentativité du marché. Chaque question publique
est paraphrasée, datée et reliée à sa source sans conserver de pseudonyme.

## Programme d'essais de première main non activé

La cible décrite par l'ADR-0006 est un programme progressif, pas une preuve
actuelle. Aucun essai physique Four à Nu n'est publié au 2026-08-26 et la
taxonomie active reste limitée aux cinq classes ci-dessus.

Avant tout achat dédié, prêt, mesure ou session du programme, une décision
dédiée doit définir au minimum le type de session, le produit exact, la date, le
lieu, l'opérateur, les instruments et leur étalonnage, le scénario, le nombre de
répétitions, les mesures brutes, les observations, les incidents, les limites,
les prêts, le sponsoring et les conflits d'intérêts. Elle doit aussi définir les
formulations permises et la chaîne de droits des médias originaux. Chaque paquet
d'essai garde ensuite sa propre autorisation de publication.

Un futur essai enrichit l'URL documentaire stable. Il ne permet pas de convertir
une observation tierce en expérience propre, de masquer un protocole
incompatible ou de généraliser une session à toute une marque. La formule
« tous les fours du marché » reste une ambition jusqu'à l'existence d'un
inventaire français daté et d'une session enregistrée pour chaque modèle du
périmètre.

## Types de visuels

| Type | Usage |
| --- | --- |
| `embed` | Lecteur YouTube officiel, source consultable dans son contexte |
| `licensed-frame` | Fichier fourni par un ayant droit et autorisé pour le périmètre enregistré |
| `ai-illustration` | Dérivé autorisé et déclaré comme illustration, jamais comme preuve |
| `fouranu-original` | Visuel créé intégralement par Four à Nu sans reprendre une composition tierce |
| `ai-original` | Illustration générée à partir d'un prompt original, sans image tierce en entrée |
| `author-portrait` | Portrait réel d'une signature, fourni pour publication et traité localement sans génération |
| `quarantine` | Référence non autorisée, interdite de publication et de transmission à une IA |

Les couples autorisés sont explicites :

| Type | Acquisition | Statut de droit publiable |
| --- | --- | --- |
| `embed` | `youtube-embed` | `service-permitted` |
| `licensed-frame` | `rights-holder-file` ou `authorized-frame-capture` | `granted` |
| `ai-illustration` | `rights-holder-file`, `authorized-manufacturer-photo` ou `authorized-frame-capture` | `granted` |
| `fouranu-original` | `fouranu-original` | `original` |
| `ai-original` | `ai-generated` | `original` |
| `author-portrait` | `owner-provided-photo` | `granted` |
| `quarantine` | `not-acquired` | Aucun |

La preuve reste la vidéo consultable, son timecode, son protocole déclaré et,
après autorisation, le photogramme non altéré. Une retouche générative, même
minime, fait basculer le visuel dans `ai-illustration`. La direction artistique
est appliquée de préférence autour de la preuve — cadre, typographie,
annotations et mise en page — sans modifier ses pixels.

## Flux de travail

### 1. Qualifier la source

- identifier le modèle et la version exacts du four ;
- enregistrer la chaîne, le titre, l'URL, les dates de publication et de
  vérification ;
- relever les conditions annoncées : combustible, température ambiante,
  instruments, pâte, durée, répétitions et protocole ;
- relever les prêts, sponsors, affiliations ou relations fabricant déclarés ;
- paraphraser l'observation avec ses timecodes, sans copier une transcription ;
- relier les sources qui corroborent ou contredisent l'observation.

Une vidéo spectaculaire mais dépourvue de modèle précis ou de conditions peut
illustrer une question. Elle ne fournit pas une mesure comparable.

### 2. Enregistrer avant d'illustrer

Les affirmations vont dans `research/evidence.csv`, les questions d'achat dans
`research/questions.csv` et les visuels envisagés dans `research/assets.csv`.
Les coordonnées, messages d'autorisation et fichiers sources restent sous
`research/private/`, ignoré par Git.

`authorized-frame-capture` désigne un photogramme extrait localement d'une
vidéo lorsque le propriétaire du projet atteste explicitement que les droits
nécessaires ont été acquis pour les vidéos identifiées et le périmètre
enregistré. L'attestation privée peut consigner cette autorisation. Elle est
libellée comme une attestation du propriétaire et ne doit jamais être présentée
comme un contrat, un message ou un justificatif provenant de l'ayant droit.
L'extraction reste limitée aux vidéos, usages, supports, transformations et
crédits expressément consignés.

`authorized-manufacturer-photo` désigne une photographie officielle récupérée
sur le site HTTPS du fabricant après attestation explicite du propriétaire du
projet couvrant la reproduction et la transformation prévues. Le registre
conserve l'URL exacte, la date de récupération, l'empreinte du fichier source,
le périmètre et la preuve privée. Cette attestation décrit l'autorisation donnée
au projet ; elle n'est jamais présentée comme une déclaration du fabricant.

`owner-provided-photo` désigne une photographie personnelle remise au projet
pour représenter une signature éditoriale. Avant publication, le registre
confirme l'usage commercial, le périmètre web, l'accord de la personne
identifiable, le crédit, les éléments tiers visibles et les empreintes du
fichier source privé et de chaque dérivé. La remise au projet ne doit pas être
présentée comme une preuve publique du droit du photographe ; toute pièce
associée reste dans l'espace privé.

Le statut de droit d'un média vaut `not-requested`, `requested`, `granted`,
`denied`, `expired`, `service-permitted` pour un lecteur officiel, ou `original`
pour un visuel intégralement créé par Four à Nu. Aucun statut générique
« libre de droits » n'est utilisé.

`web_scope` contient les origines HTTPS autorisées, séparées par des
points-virgules. Le registre conserve aussi le SHA-256 de l'accord, la présence
éventuelle de personnes identifiables, leur statut d'autorisation et les
éléments tiers connus. Ces métadonnées ne remplacent pas la preuve privée.

Avant accord ou attestation explicite du propriétaire au sens du paragraphe
précédent, enregistrer uniquement l'URL, le timecode et le storyboard. Ne pas
extraire le photogramme et ne pas le transmettre à un outil d'IA. Le
[Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911)
vise aussi l'adaptation et la transformation, et les
[conditions YouTube](https://www.youtube.com/t/terms?gl=FR) réservent la
reproduction ou la modification hors des fonctions du service.

### 3. Obtenir la chaîne de droits

Utiliser [`PERMISSION-TEMPLATE.md`](PERMISSION-TEMPLATE.md) et demander de
préférence au producteur ou créateur de fournir directement un photogramme ou
une photographie source hors de YouTube. La réponse doit confirmer sa qualité à
autoriser les usages demandés ou identifier les autres titulaires à contacter.

L'accord précise séparément l'usage commercial affilié, la reproduction, le
recadrage, la retouche, la transformation par IA, les croquis dérivés, les
supports, la langue, le territoire, la durée, le crédit, la rémunération et les
prestataires. Cette granularité suit le principe de délimitation des droits de
l'[article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)
du même code.

L'accord de la chaîne ne prouve pas à lui seul les droits sur la société de
production, le cadreur, une personne reconnaissable, une musique, une œuvre dans
le décor ou un autre élément tiers. Le droit à l'image demande notamment un
accord écrit adapté au support et à l'objectif pour une personne reconnaissable,
selon [Service-Public](https://www.service-public.fr/particuliers/vosdroits/F32103).
Four à Nu ne traite jamais le silence comme une autorisation.

### 4. Transformer après accord

Une fois le statut `granted` enregistré avec un fichier fourni ou une extraction
expressément autorisée :

1. conserver le fichier fourni et son SHA-256 dans l'espace privé ;
2. vérifier que le fournisseur IA, sa conservation et son usage éventuel des
   entrées correspondent à l'autorisation ; l'entraînement est désactivé sauf
   autorisation écrite distincte ;
3. limiter la transformation au périmètre accordé ;
4. conserver l'identifiant de l'entrée, de la sortie et le SHA-256 du dérivé ;
5. comparer source et dérivé, puis enregistrer une validation humaine du rendu ;
6. publier le crédit et le statut d'illustration éditoriale avec le visuel.

Il est interdit d'améliorer générativement une flamme, une cuisson, une mesure,
un affichage, un défaut ou tout autre élément invoqué comme preuve. La géométrie,
les commandes, accessoires, marquages de sécurité, couleurs et état réel du four
ne sont pas davantage modifiés d'une manière susceptible de tromper l'acheteur.
Un croquis qui reprend la composition reconnaissable d'un photogramme reste un
dérivé et suit la même chaîne d'autorisation.

Le protocole interdit toute personne identifiable dans une entrée envoyée à un
prestataire IA. Le fichier est recadré localement, après autorisation, ou n'est
pas traité. Toute exception exigera une décision distincte couvrant la
base légale, l'information des personnes, le rôle et le contrat du fournisseur,
la région de traitement, les transferts, la rétention et la suppression. Les
[questions-réponses de la CNIL sur l'IA générative](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative)
seront alors revérifiées.

Pour un `author-portrait`, le traitement autorisé est local et non génératif :
suppression des interfaces de capture, recadrage, correction mesurée de la
luminosité et des couleurs, redimensionnement, compression et grain discret.
Les métadonnées de prise de vue sont retirées du dérivé public. Une amélioration
qui invente des détails du visage, des yeux, des vêtements ou du décor reste
interdite.

Cette liste fixe un maximum, pas un traitement obligatoire. Une instruction
plus restrictive du propriétaire éditorial prévaut : un portrait demandé sans
retouche conserve alors son cadrage, ses couleurs et sa texture, et ne reçoit
que le redimensionnement, la compression et le retrait des métadonnées requis
pour sa publication.

Mention publique minimale, placée sous le visuel sans le recouvrir :

> Illustration éditoriale d'après une photographie officielle [fabricant].

Lorsqu'un composite part de plusieurs sources, le pluriel reste explicite :

> Illustration éditoriale d'après des photographies officielles [fabricant].

La page explique une seule fois, dans son second niveau de lecture, que l'image
d'en-tête illustre le produit sans constituer une preuve de performance. Cette
réserve n'est pas répétée sur chaque visuel et ne masque jamais ses pixels.

La catégorie technique du registre, les outils de production et les assistants
rédactionnels ne paraissent jamais dans la copie publique. La traçabilité
détaillée reste interne. Le protocole ne suppose pas que cette présentation
épuise toutes les obligations applicables : leur périmètre est revérifié avant
tout changement de technique ou de diffusion.

L'[article 50 du règlement européen sur l'IA](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
s'applique depuis le 2026-08-02. Les
[lignes directrices de la Commission](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations)
prévoient des obligations de marquage ou d'information pour certains contenus
générés ou manipulés. Four à Nu conserve donc la provenance technique et le
statut de transformation dans son registre, tout en présentant au lecteur le
statut fonctionnel exact d'« illustration éditoriale ».

### 5. Composer l'en-tête d'un article produit

Tout nouvel article consacré à un four, un pétrin ou un autre matériel, ainsi
que toute révision éditoriale substantielle d'un tel article, commence par une
photo officielle du modèle publiée sur le site du fabricant puis stylisée dans
le système visuel Four à Nu. Cette image devient l'en-tête obligatoire et
reste une illustration, jamais une preuve.

La transformation peut changer le fond, la lumière, le cadrage et la matière
environnante. Elle préserve sans invention la silhouette, les proportions, les
commandes, les couleurs, les accessoires, les marquages et les éléments
fonctionnels du produit. Aucun texte, personnage, aliment, flamme, lecture
d'écran ou défaut n'est ajouté. La source officielle et le dérivé sont comparés
avant publication.

Les vraies photos en situation, photogrammes autorisés et vues documentaires
peuvent ensuite enrichir le corps de l'article, stylisés ou non. Ils ne
remplacent pas l'en-tête officiel stylisé et leur légende indique clairement ce
qu'ils montrent et d'où ils viennent.

### 6. Publier ou revenir au repli sûr

Sans droit suffisant sur une image, les options sont :

- le lecteur YouTube officiel lorsque l'intégration est activée, chargé après
  le choix de confidentialité approprié ;
- un lien au timecode vers la vidéo ;
- un graphique ou schéma intégralement original construit à partir de faits,
  sans reprendre le cadrage ni les détails expressifs du photogramme ;
- une page textuelle sans média tiers.

YouTube documente le
[lecteur embarqué et son mode de confidentialité renforcée](https://support.google.com/youtube/answer/171780?hl=fr).
Une licence Creative Commons n'est acceptée qu'après vérification de sa version,
de l'attribution et de la capacité réelle du déposant à licencier tous les
éléments concernés.

## Barrière de publication

Une page documentaire ne passe en public que si toutes les conditions suivantes
sont vraies :

- le bandeau documentaire positif est visible avant la première recommandation ;
- chaque affirmation de performance a un identifiant, une source, une date et,
  pour une vidéo, un timecode et les conditions connues ;
- la page apporte une valeur propre : normalisation, calcul explicable,
  divergences, cas d'usage, limites ou outil de décision ;
- les désaccords et protocoles incompatibles restent visibles ;
- aucun titre ou texte ne raconte une expérience tierce à la première personne
  ou n'emploie « notre test », « nous avons mesuré », « notre avis » ou
  « meilleur four » ;
- aucun balisage `Review`, note, étoile ou classement pseudo-scientifique n'est
  publié ;
- chaque média de l'arbre public a un statut de droit `service-permitted`,
  `granted` ou `original`, cohérent avec son type, son acquisition, son périmètre
  et sa provenance ;
- chaque article produit nouveau ou substantiellement révisé possède l'en-tête
  officiel stylisé décrit ci-dessus ;
- chaque illustration est identifiée comme illustration éditoriale, sans citer
  son outil de production, et ne soutient aucune affirmation factuelle ;
- chaque portrait public correspond à l'auteur visible, possède son accord à
  l'image enregistré et n'est ni une preuve produit ni une identité inventée ;
- l'accroche répond à une question d'achat en langage courant avant les données
  détaillées ;
- l'auteur, la méthode, la date de vérification, les conflits et la politique de
  correction sont visibles ;
- les liens rémunérés sont déclarés, portent `rel="sponsored"` et plusieurs
  vendeurs sont proposés lorsque cela aide réellement le lecteur ;
- le propriétaire donne un feu vert explicite sur le paquet de publication.

Bandeau minimal :

> **Analyse documentaire.** Ce dossier confronte des données fabricant, des
> mesures publiées et des observations attribuées. Les protocoles et relations
> commerciales connus sont indiqués avec les sources.

Les [recommandations Google sur les avis](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews)
demandent une preuve d'expérience propre lorsqu'une page revendique une
évaluation. Four à Nu reste dans le format `Article`, décrit les critères et les
limites de son corpus, et n'emploie pas les signaux d'un avis produit. Les
[recommandations sur le contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
demandent qu'une synthèse ajoute une valeur substantielle au lieu de reformuler
ses sources.

Si une vidéo disparaît, interdit l'intégration ou change substantiellement, les
affirmations qui en dépendent repassent en brouillon jusqu'à nouvelle preuve.
Une expiration ou un retrait de droit retire le média concerné de la prochaine
publication sans effacer l'historique minimal du registre.

La gate de build rapproche pages, affirmations, médias et registres pour
détecter un média non déclaré, l'absence de bandeau, un balisage `Review` ou un
lien rémunéré mal qualifié. La vérification locale des accords privés s'exécute
avec :

```bash
python3 scripts/check_editorial_ledgers.py --require-private-proofs
```

Cette commande vérifie l'existence et le SHA-256 des preuves privées ; la gate
CI ordinaire ne peut pas lire ces fichiers ignorés.

## Offensive de 30 jours

Le sprint consomme au maximum 40 des 60 heures autorisées et 0 euro. Les 20
heures restantes sont réparties entre le pilote manuel et sa mesure (6 heures),
la relecture documentaire et les pages de confiance (8 heures), puis l'analyse
et la conclusion (6 heures).

| Période | Heures | Résultat vérifiable |
| --- | ---: | --- |
| J1 à J2 | 3 | Protocole, taxonomie et registres prêts |
| J3 à J9 | 12 | 16 vidéos, 8 créateurs, 6 fours, 50 observations horodatées et 50 questions d'achat |
| J10 à J16 | 12 | Matrice, sélecteur, méthode, deux analyses de décision et neuf fiches modèle en preview `noindex` |
| J17 à J20 | 3 | Storyboard privé et demandes de droits, sans extraction préalable |
| J21 à J24 | 4 | Cinq sessions utilisateur |
| J25 à J27 | 4 | Audit des preuves, droits, médias, confidentialité et build |
| J28 à J30 | 2 | Paquet de publication et distribution manuelle après feu vert |

Le backlog répond à des décisions, pas à des mots-clés :

1. choisir selon l'espace, l'énergie, le débit et le budget ;
2. arbitrer gaz et électrique ;
3. comprendre les formats nominaux et le diamètre de pizza réellement annoncé ;
4. calculer le coût complet du four et des accessoires réellement nécessaires.

Le sprint garantit les deux premières analyses. Les deux suivantes ne sont
produites que si les preuves et le budget restant le permettent.

La cible de volume est un plafond de recherche, pas un quota de publication.
Une source insuffisante est écartée ; une observation incertaine reste marquée
comme telle. Le sprint conserve les seuils économiques de
[`EXPERIMENT.md`](EXPERIMENT.md) et ne crée ni bot, ni dépense, ni second site.
