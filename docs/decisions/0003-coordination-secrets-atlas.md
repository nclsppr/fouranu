# ADR-0003 : coordination des secrets Atlas

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-08-23 |
| Propriétaire | nclsppr |
| Portée | Contrats des secrets Four à Nu déployés sur Atlas |
| Remplace | Aucune décision |

## Contexte

Four à Nu peut avoir besoin de secrets de production sur Atlas. Ce dépôt ne
doit contenir aucun secret. Le dépôt public `nclsppr/vps-infra` est la source de
vérité du VPS et de sa reconstruction depuis un hôte vierge.

Une tâche peut commencer dans ce dépôt et modifier un secret sans mettre à jour
le contrat central. Atlas deviendrait alors impossible à reconstruire avec la
seule configuration versionnée.

Le contrat central est défini par
[l'ADR-0017 de `vps-infra`](https://github.com/nclsppr/vps-infra/blob/codex/atlas-secret-registry/docs/decisions/0017-versioned-atlas-secret-registry.md).
Sa première livraison est suivie par la
[PR `vps-infra` #99](https://github.com/nclsppr/vps-infra/pull/99).

## Décision

Toute tâche qui prévoit ou exige le déploiement, la rotation ou la révocation
d'un secret Four à Nu sur Atlas doit aussi mettre à jour
`nclsppr/vps-infra/secrets/registry.json` avant sa clôture.

La coordination suit ces règles :

1. committer dans `vps-infra` le contrat et la génération cible avant
   l'opération ;
2. exécuter l'opération par le canal privé autorisé ;
3. effectuer un audit en lecture seule après l'opération ;
4. mettre à jour la génération observée et l'état de l'hôte avec les résultats
   de cet audit ;
5. déclarer `runtime-loaded` uniquement après une preuve du consommateur et de
   la génération actifs.

Git conserve uniquement le contrat et les métadonnées. Aucun dépôt ne reçoit la
valeur, un condensat dérivé de la valeur, un fichier déchiffré ou un chemin
source privé.

Si la tâche n'autorise pas la modification de `vps-infra`, elle signale le
blocage et ne déclare pas le travail terminé. La mise à jour du registre
n'autorise pas à créer, déployer, effectuer la rotation ou révoquer un secret.

## Options comparées

| Option | Conséquence | Décision |
| --- | --- | --- |
| Registre central dans `vps-infra` | Un hôte vierge retrouve les contrats requis pour tous les produits | Retenue |
| Liste locale dans chaque produit | Les contrats se dispersent et la reconstruction Atlas peut en omettre | Écartée |
| Valeurs chiffrées ou condensats dans Git | Le dépôt public porte un artefact sensible ou une empreinte issue du secret | Écartée |

## Conséquences

- Une opération sur un secret Atlas devient une unité coordonnée entre le dépôt
  produit et `vps-infra`.
- L'historique Git de `vps-infra` trace les changements de contrat et de
  génération sans révéler les valeurs.
- Un stockage privé externe reste nécessaire pour restaurer les valeurs. Le
  registre ne remplace pas ce stockage.
- Une tâche sans autorisation centrale reste bloquée, même si le changement du
  produit est prêt.

## Vérification

- `AGENTS.md` référence cette décision et impose la coordination.
- `documentation.json` classe cette ADR dans la collection `decisions`.
- Le catalogue documentaire et la commande `./scripts/verify.sh` restent
  valides.
- Toute future opération fournit le commit central de la génération cible et
  le résultat de l'audit de métadonnées.

## Conditions de réexamen

Réexaminer cette décision si Atlas n'héberge plus Four à Nu ou si une décision
acceptée de `vps-infra` remplace `secrets/registry.json` comme registre
canonique.
