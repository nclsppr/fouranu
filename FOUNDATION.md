# FOUNDATION.md

Contrat d'adoption du socle commun par ce projet.

## Version

| Champ | Valeur |
| --- | --- |
| Source | `https://github.com/nclsppr/project-foundation.git` |
| Version lisible | `v0.5.2` |
| Commit immuable | `708d7374f87060809a805c57abc2cf7e7b66c182` |
| Pack adopté | `full` |
| Adoptée le | 2026-08-18 |
| Adoptée par | nclsppr |

## Snapshot vendorisé

Les fichiers suivants sont copiés sous `docs/foundation/` et ne sont pas édités localement :

- `PRINCIPLES.md`
- `DEFAULTS.md`
- `DEFINITION-OF-DONE.md`

Les profils vendorisés sont exactement ceux de la section « Profils activés ».

Une mise à jour remplace ces fichiers depuis une nouvelle version du socle. Relire le diff avant de changer la version enregistrée ici.

## Profils activés

- `documentation-nimbus`
- `web`
- `experiment`

Les profils sont des politiques durables du projet. Leurs gates ne s'appliquent
qu'aux unités de travail qui rencontrent leur déclencheur.

`documentation-nimbus` est le seul profil obligatoire et s'applique à chaque
unité qui modifie un Markdown ou la documentation. Il ne peut pas être retiré
par une dérogation locale.

## Dérogations et contrôles compensatoires

| Règle ou default | Portée | Choix local | Raison | Contrôle compensatoire | Propriétaire | Réexamen | ADR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aucune | Sans objet | Aucune dérogation locale | Sans objet | Sans objet | nclsppr | 2026-11-16 | Sans objet |

Une dérogation à un invariant exige une portée limitée, un contrôle compensatoire et une date de réexamen.
`P18` ne peut pas être désactivé par une dérogation locale : la politique du
projet choisit entre push direct sur la branche canonique et branche dédiée,
mais ne conserve pas une tranche terminée uniquement en local.
Le remote `origin` pointe vers `nclsppr/fouranu`; la tranche F01 est poussée sur
`main` et sa première CI distante est verte.

`P19` ne peut pas être désactivé par une dérogation locale : `compose.yaml` et
sa gate restent obligatoires. Le pack `full` exige un service réel. La tranche
F01 contient le service `site` et son healthcheck. La gate complète
`./scripts/verify.sh` est verte sur la tranche finale vérifiée localement.

## Challenger le socle

Le snapshot `docs/foundation/` est en lecture seule dans ce projet.

- Si le besoin est local, écrire une dérogation dans ce fichier.
- Si la règle devrait changer pour tous les projets, modifier le dépôt indiqué
  par `Source`, vérifier ses tests, publier une nouvelle release, puis mettre ce
  projet à niveau vers le nouveau tag et son SHA.
- Ne jamais corriger directement le snapshot : cela créerait un fork silencieux
  et la modification serait perdue à la prochaine mise à niveau.

Le protocole complet vit dans `ADOPTION.md` du dépôt Project Foundation.

## Sources locales supplémentaires

Les règles locales vivent dans leur document naturel. Cette table les référence sans les recopier.

| Sujet | Source locale |
| --- | --- |
| Contrat produit et architecture | `PROJECT.md` |
| État réellement vérifié | `STATUS.md` |
| Ordre de livraison | `ROADMAP.md` |
| Design system | `DESIGN.md` |
| Question et conclusion de l'exploration d'origine | `BRIEF.md`, historique |
| Faisabilité et décision stratégique | `FEASIBILITY.md` |
| Expérience et critères de sortie | `EXPERIMENT.md` |
| Sources, droits, IA et publication | `EDITORIAL-PROTOCOL.md` |
| Contrôle SEO bloquant avant indexation | `docs/SEO-PUBLICATION-GATE.md` |
| Demande d'autorisation visuelle | `PERMISSION-TEMPLATE.md` |

## Reclassification du 2026-08-23

Le propriétaire a confirmé l'acquisition de `fouranu.com` et le démarrage du
produit Four à Nu. Le dépôt passe du pack `minimal` au pack `full` sans changer
de release Foundation ni de profils. `BRIEF.md` conserve la question, les
limites et la conclusion de l'exploration. `PROJECT.md` devient le contrat
stable, `STATUS.md` la preuve courante et `ROADMAP.md` l'ordre de livraison.

Cette reclassification autorise la construction locale du site. Elle ne prouve
ni l'utilité, ni la rentabilité, ni l'accès à des essais physiques. Elle
n'autorise pas non plus le DNS, l'hébergement, l'indexation, les liens affiliés
ou une autre activation externe.

## Adaptateurs locaux initialisés

Les fichiers suivants partent de la baseline du socle puis deviennent locaux et
éditables :

- `scripts/check_markdown.py`
- `scripts/check_compose.py`
- `scripts/documentation_catalog.py`
- `scripts/verify.sh`

Ils peuvent recevoir les gates propres au projet. Une mise à niveau compare leur
baseline avec la nouvelle version, puis fusionne explicitement les corrections
utiles sans écraser les contrôles locaux.

## Reclassification et activation ultérieure

Lorsqu'un projet change de classe :

1. choisir le nouveau pack ;
2. ajouter les documents requis ;
3. aligner `Pack adopté` ici et `Classe` dans `PROJECT.md` ou `BRIEF.md` ;
4. activer les profils durables nécessaires ;
5. exécuter la vérification et livrer le tout atomiquement.

Lors d'un downgrade, retirer uniquement les stubs jamais utilisés. Un runbook,
une preuve ou une décision historique est marqué comme inactif ou archivé, pas
supprimé silencieusement.

Lorsqu'une unité exige un profil non encore activé, copier ce profil depuis le
même commit du socle, l'ajouter à la liste ci-dessus, puis consigner dans la
preuve de livraison les gates de ce profil applicables à l'unité.

## Mise à jour

1. Lire le changelog du socle entre la version actuelle et la cible.
2. Remplacer le snapshot vendorisé.
3. Examiner les changements d'invariants, defaults et profils.
4. Mettre à jour les dérogations locales si nécessaire.
5. Comparer la nouvelle baseline des scripts et fusionner les corrections utiles.
6. Régénérer le catalogue documentaire.
7. Exécuter la commande de vérification du projet.
8. Committer le snapshot, ce fichier et les adaptations dans une seule unité.
9. Pousser immédiatement sur la branche canonique si l'écriture directe est autorisée, sinon sur une branche dédiée.
