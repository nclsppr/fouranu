# ADR-0006 : programme d'essais et couverture progressive du marché

- Statut : accepté
- Date : 2026-08-26
- Décideur : propriétaire de Four à Nu
- Remplace : le refus d'une capacité future de test propre au média dans
  l'ADR-0002

## Contexte

Four à Nu publie actuellement des analyses documentaires fondées sur des sources
attribuées. L'ADR-0002 avait rendu ce modèle permanent et écarté toute capacité
future de test propre au média.

Le propriétaire fixe désormais une ambition plus large : tester progressivement
les fours à pizza du marché domestique français, en commençant par les modèles
des marques de référence, puis les accessoires utiles et différents pétrins.
Cette ambition ne doit pas transformer le corpus actuel en essais ni laisser
entendre qu'une couverture exhaustive existe déjà.

## Décision

Four à Nu adopte un programme progressif d'essais de première main. Sa cible est
un inventaire daté des fours à pizza domestiques commercialisés en France, puis
une couverture par essais des modèles, accessoires et pétrins qui composent ce
marché. La notion de « marques de référence » décrit les marques présentes dans
cet inventaire ; elle ne constitue ni un classement ni une affirmation de
supériorité.

L'état public actuel reste strictement documentaire : aucun essai physique Four
à Nu n'est publié au jour de cette décision. Les cinq classes `FAB`, `T-MES`,
`T-OBS`, `FAN-SYN` et `FAN-INF` restent les seules classes actives. `J-TEST` n'est
pas rétablie.

Avant tout achat dédié, prêt, mesure ou session du programme, une décision
séparée doit accepter :

1. un protocole reproductible par catégorie de produit ;
2. la taxonomie et les registres des mesures et observations de première main ;
3. les règles de sécurité, d'étalonnage, de durée, de prêt, de sponsoring et de
   conflits d'intérêts ;
4. la barrière éditoriale et les formulations qui distinguent analyse
   documentaire, prise en main et essai complet ;
5. la chaîne de droits des photos et vidéos originales du banc d'essai.

Le paquet exact de chaque essai conserve ensuite sa propre autorisation de
publication.

Les URL produit restent stables. Un essai futur enrichit la page existante
lorsque son intention ne change pas ; il n'efface ni les sources tierces, ni les
conditions, ni les limites antérieures. Four à Nu ne publie toujours ni note,
ni étoiles, ni classement pseudo-scientifique, ni données structurées `Review`
ou `AggregateRating`.

Une formule exhaustive comme « nous avons testé tous les fours du marché » ne
devient publiable qu'avec un inventaire de marché daté, un périmètre explicite et
une session enregistrée pour chaque modèle inclus. Jusque-là, elle reste une
ambition, jamais un résultat acquis.

## Conséquences

- Le contrat produit, la roadmap, le protocole éditorial et la promesse SEO
  distinguent le corpus documentaire actuel du programme futur.
- La phase F06 prépare le banc d'essai et ses premiers pilotes seulement après
  la phase de mesure et de décision F05.
- Les accessoires sont choisis depuis un geste ou un problème réel, pas pour
  créer des pages marchandes minces.
- L'étendue du marché est réinventoriée et datée ; une nouveauté, un retrait ou
  une indisponibilité en France modifie le dénominateur publié.
- Aucun budget, achat, prêt, compte marchand, collecte de mesure ou publication
  d'essai n'est autorisé par cette décision seule.

## Effet sur l'ADR-0002

La présente décision remplace uniquement les passages de l'ADR-0002 qui
excluent durablement une capacité future de test propre au média. L'ADR-0002
reste normative pour le corpus actuel, sa taxonomie documentaire, l'absence de
notes et d'avis structurés, la stabilité des URL et la séparation entre
préparation, publication et indexation.

## Alternatives écartées

### Présenter immédiatement Four à Nu comme un média de tests

Cette option attribuerait au corpus une expérience qui n'existe pas encore et
affaiblirait la traçabilité actuelle.

### Employer « meilleures marques » comme classement éditorial

Cette formule demande des critères, un périmètre et des essais comparables qui
n'existent pas aujourd'hui. « Marques de référence » permet de décrire la
couverture visée sans verdict prématuré.

### Réactiver directement `J-TEST`

Une ancienne classe ne suffit pas à définir un protocole, une session, un
instrument, une incertitude et un conflit d'intérêts. La future taxonomie doit
être décidée avec le banc d'essai réel.

## Plan de vérification

1. l'accueil et la page À propos présentent l'objectif comme une ambition ;
2. ces pages indiquent que les guides actuels sont documentaires et qu'aucun
   essai physique Four à Nu n'est publié aujourd'hui ;
3. aucune page actuelle ne revendique « notre test », une mesure propre, une
   couverture exhaustive ou un classement des meilleures marques ;
4. la taxonomie et les validateurs restent limités aux cinq classes actives ;
5. F06 reste `planned` jusqu'à l'acceptation du protocole et aux preuves prévues ;
6. publication du paquet SEO, réindexation et activation du programme d'essais
   conservent chacune leur propre autorisation.
