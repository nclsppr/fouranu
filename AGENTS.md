# AGENTS.md

Adaptateur local pour toute intervention assistée sur Four à Nu. Le socle
épinglé vit dans [`FOUNDATION.md`](FOUNDATION.md) et sous `docs/foundation/`.

## Ordre de lecture

1. [`PROJECT.md`](PROJECT.md) pour le contrat, l'architecture et les sources de vérité.
2. [`FOUNDATION.md`](FOUNDATION.md) pour la version, les profils et les dérogations.
3. [`STATUS.md`](STATUS.md) puis [`ROADMAP.md`](ROADMAP.md) pour l'état et l'ordre de livraison.
4. Les décisions acceptées sous `docs/decisions/`.
5. [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) et les registres sous `research/` pour tout contenu ou média.
6. [`DESIGN.md`](DESIGN.md) pour toute interface.
7. [`CHANGELOG.md`](CHANGELOG.md) pour l'historique livré.

[`BRIEF.md`](BRIEF.md) reste la conclusion historique de l'exploration. Il ne
remplace plus le contrat produit.

## Autorité

1. Contraintes de sécurité, de droit, de plateforme et du système.
2. Autorité explicite de la tâche en cours.
3. Contrats et politiques locales du dépôt.

Une instruction ponctuelle ne prouve pas qu'une capacité est livrée. Si elle
change durablement le produit, mettre aussi à jour sa source canonique.

## Source selon la question

| Question | Source |
| --- | --- |
| Que demande la tâche actuelle ? | Instruction explicite de la tâche |
| Quel produit est voulu ? | `PROJECT.md` et décisions acceptées |
| Qu'est-ce qui fonctionne maintenant ? | Code, configuration et environnement exécuté |
| Qu'est-ce qui a été vérifié ? | `STATUS.md` et preuves datées |
| Quelle tranche vient ensuite ? | `ROADMAP.md` |
| Quelle affirmation ou quel média peut être publié ? | `EDITORIAL-PROTOCOL.md`, puis `research/` |
| Pourquoi l'exploration a-t-elle conclu ainsi ? | `BRIEF.md`, `FEASIBILITY.md` et historique Git |

Une divergence entre intention et réalité est signalée. Elle n'est jamais
arbitrée silencieusement.

## Règles d'intervention locales

- Inspecter l'état Git et préserver les changements sans rapport.
- Modifier la source canonique, jamais un dérivé généré.
- Ne jamais modifier `docs/foundation/` localement. Une exception propre au
  projet vit dans `FOUNDATION.md`. Une règle générale se change dans Project
  Foundation puis se réadopte par version.
- Conserver Nimbus et sa gate. Nimbus rend la documentation interne navigable.
  Il n'est pas le site public Four à Nu.
- Le code public vit sous `site/`. Ne pas importer automatiquement les
  collections internes de Nimbus dans son artefact.
- Conserver `compose.yaml` et sa gate. Tout processus nécessaire au parcours
  local intégré entre dans Compose avant d'être présenté comme disponible.
- Pour le pack `full`, un service réel et son healthcheck sont obligatoires.
- Ajouter chaque changement livré à `CHANGELOG.md`. Une décision produit ou
  technique coûteuse à inverser reçoit aussi une décision datée.
- Exécuter la commande `verify` déclarée dans `PROJECT.md` et les gates
  pertinentes de `docs/foundation/DEFINITION-OF-DONE.md`.
- Tester le démarrage Compose lorsqu'une unité touche l'exécution locale.
- Pour toute interface, vérifier mobile, bureau, clavier, focus, contraste,
  mouvement réduit, console, réseau, routes et contenu long.
- Ne jamais committer un média tiers, une preuve d'autorisation, des
  coordonnées, un secret ou un export de compte. Seuls le statut et le
  périmètre minimal entrent dans les registres versionnés.
- Une vidéo tierce reste une source. Elle ne devient ni une expérience Four à
  Nu, ni une source d'image transformable sans autorisation adéquate.
- Les statuts `FAB`, `T-MES`, `T-OBS`, `J-SYN`, `J-INF` et `J-TEST` gardent le
  sens défini dans `EDITORIAL-PROTOCOL.md`.
- Avant toute publication, appliquer la barrière éditoriale, contrôler les
  droits, les bandeaux, les données structurées et les liens rémunérés. Le
  propriétaire donne un feu vert explicite sur le paquet exact.
- L'achat du domaine n'autorise pas le DNS, l'hébergement, les comptes
  marchands, l'analytics, les réseaux sociaux ou un déploiement public.
- Appliquer `P18` après validation. Committer chaque tranche cohérente puis la
  pousser sur la branche autorisée. Sans remote, conserver le SHA local et
  annoncer le blocage au lieu de déclarer la livraison complète.

## Politique Git et publication

- Branche canonique : `main`.
- Remote canonique : `origin`, dépôt GitHub `nclsppr/fouranu`.
- Livraison Git : pousser sur `main` après les gates locales et vérifier la CI
  du SHA livré.
- Publication web : non autorisée tant que l'hébergement, le DNS et le paquet
  public n'ont pas reçu leurs autorisations respectives.
