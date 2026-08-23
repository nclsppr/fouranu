# Four à Nu

Contrat stable du produit. L'état observé vit dans [`STATUS.md`](STATUS.md),
l'ordre de livraison dans [`ROADMAP.md`](ROADMAP.md) et l'exploration d'origine
reste consignée dans [`BRIEF.md`](BRIEF.md).

## Identité

| Champ | Valeur |
| --- | --- |
| Nom | Four à Nu |
| Nom de code du dépôt | Jupiter |
| Propriétaire | nclsppr |
| Classe | Produit |
| Langue initiale | Français |
| Domaine | `fouranu.com`, acquisition confirmée par le propriétaire le 2026-08-23 |
| Surface de production | Aucune surface activée ou vérifiée |
| Socle adopté | [`FOUNDATION.md`](FOUNDATION.md) |

## Problème

Un acheteur francophone de four à pizza doit rapprocher des dimensions, des
énergies, des accessoires, des coûts et des essais publiés selon des protocoles
différents. Les pages marchandes et les comparatifs génériques rendent cette
décision difficile à vérifier.

## Utilisateur principal

| Utilisateur | Situation | Besoin | Risque principal |
| --- | --- | --- | --- |
| Amateur francophone déjà en intention d'achat | Il choisit un four domestique entre 300 et 1 500 euros, avec des contraintes de place, d'énergie, de débit et de budget | Comparer les compromis et retrouver la provenance de chaque affirmation | Confondre une donnée fabricant, une observation tierce et un essai réalisé par Four à Nu |

Le matériel professionnel reste une extension possible. Il n'entre pas dans la
promesse du premier produit.

## Résultat attendu

Four à Nu doit permettre à cet acheteur de réduire sa liste de choix, de
comprendre les compromis restants et de vérifier les sources utilisées. La
Saison 0 peut publier des analyses documentaires clairement étiquetées. Elle ne
revendique aucun test physique réalisé par Four à Nu tant que la preuve
`J-TEST` reste verrouillée.

### Preuves de succès

| Preuve | Situation de départ | Cible | Source |
| --- | --- | --- | --- |
| Compréhension de la provenance | Aucune session sur le produit web | Au moins quatre participants sur cinq distinguent fabricant, tiers et Four à Nu | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Utilité du parcours de décision | Aucun sélecteur utilisable | Au moins trois participants sur cinq identifient une incertitude résolue | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Intérêt commercial | Aucun trafic ni revenu observé | Mesures de la porte 3 atteintes sans violation éditoriale ou de plateforme | [`EXPERIMENT.md`](EXPERIMENT.md) |
| Reproductibilité | Aucun site applicatif vérifié | Installation propre, build statique, service Compose sain et gate complète verte | `site/`, `compose.yaml` et `scripts/verify.sh` |

Ces cibles ne sont pas des résultats acquis. [`STATUS.md`](STATUS.md) indique ce
qui est réellement vérifié.

## Périmètre

### Inclus

- un seul site francophone sous la marque Four à Nu ;
- un parcours de choix par contraintes ;
- une méthode publique, une politique de correction et une page auteur ;
- des analyses documentaires Ooni dont la provenance est visible ;
- des fiches produit en `noindex` tant que leur barrière éditoriale n'est pas passée ;
- un futur parcours de mesure des clics et conversions, soumis aux règles de consentement et des partenaires.

### Non-objectifs

- créer une ferme de sites ou des pages satellites ;
- répondre automatiquement sur X à partir de recherches de mots-clés ;
- présenter une source tierce comme une expérience de Four à Nu ;
- publier une note, des étoiles ou un balisage `Review` sans essai physique suffisant ;
- ouvrir une offre professionnelle avant validation de l'utilité domestique ;
- activer DNS, hébergement, analytics, affiliation ou comptes sociaux sans autorisation distincte.

### Conditions d'arrêt ou de réévaluation

Les seuils, dates et conditions d'arrêt de la Saison 0 restent dans
[`EXPERIMENT.md`](EXPERIMENT.md). La classe Produit signifie que le dépôt porte
désormais une application durable. Elle ne transforme pas les hypothèses de
l'expérience en faits et n'autorise pas sa publication.

## Sources de vérité

| Concept | Source canonique | Statut |
| --- | --- | --- |
| Contrat produit | `PROJECT.md` | Actuel |
| État vérifié | [`STATUS.md`](STATUS.md) | Actuel, daté |
| Ordre de livraison | [`ROADMAP.md`](ROADMAP.md) | Actuel |
| Historique de l'exploration | [`BRIEF.md`](BRIEF.md) | Historique |
| Faisabilité et modèle | [`FEASIBILITY.md`](FEASIBILITY.md) | Référence |
| Expérience et métriques | [`EXPERIMENT.md`](EXPERIMENT.md) | Expérimental |
| Contenus prioritaires | [`OONI-CONTENT-MAP.md`](OONI-CONTENT-MAP.md) | Actuel |
| Preuves, droits et publication | [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md) | Normatif |
| Contrôle SEO par article | [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) | Normatif |
| Marque et découvrabilité | [`BRAND-SEO.md`](BRAND-SEO.md) | Normatif |
| Design system | [`DESIGN.md`](DESIGN.md) | Actuel |
| Code du site | `site/` | Actuel, local et non publié |
| Registres éditoriaux | `research/evidence.csv`, `research/questions.csv`, `research/assets.csv` | Actuel |
| Configuration locale intégrée | `compose.yaml` | Actuelle, service `site` et healthcheck vérifiés localement |
| Documentation interne | `documentation.json`, `docs-nimbus/` et [`DOCUMENTATION-CATALOG.md`](DOCUMENTATION-CATALOG.md) | Actuel |
| Changements livrés | [`CHANGELOG.md`](CHANGELOG.md) | Historique |

## Architecture

### Composants

| Composant | Rôle | État | Exécution | Source et preuve |
| --- | --- | --- | --- | --- |
| Site Four à Nu | Générer l'accueil, le parcours de choix et les contenus en HTML statique | Actuel, non publié | Build et service local | `site/`, 15 pages HTML au dernier build local |
| Registres éditoriaux | Porter les affirmations, questions et médias avec leur provenance | Actuel | Vérification | `research/`, validé par les scripts éditoriaux |
| Gate de contenu public | Rapprocher pages, identifiants de preuve, droits, bandeaux et directives d'indexation | Actuel | Vérification | `scripts/verify.sh`, tests du site et [`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) |
| Nimbus | Rendre les Markdown internes navigables et recherchables | Actuel | Build local et CI | `docs-nimbus/` |
| Docker Compose | Lancer le parcours local intégré | Actuel | Développement local | `compose.yaml`, service `site` sain lors du dernier contrôle local |
| Hébergement | Servir l'artefact statique sur `fouranu.com` | Non activé | Production | Plateforme et configuration non décidées |

### Flux éditorial cible

1. L'auteur part d'une question d'achat et des registres versionnés.
2. La page référence les identifiants de preuve et de média nécessaires.
3. La gate refuse une provenance absente, un média non publiable, une fausse
   revendication de test ou un lien rémunéré mal déclaré.
4. Astro génère un artefact statique avec métadonnées, canonical, sitemap et
   directives d'indexation cohérentes.
5. Le paquet reste en preview jusqu'aux contrôles éditoriaux, visuels et
   techniques, puis jusqu'au feu vert explicite du propriétaire.

### Dépendances externes

| Dépendance | Usage prévu | Données transmises | État et mode d'échec |
| --- | --- | --- | --- |
| YouTube | Lecteur officiel pour une source tierce autorisée | Requête du navigateur vers YouTube lors du chargement accepté | Aucun lecteur public actuellement ; la page reste compréhensible sans lui |
| Programmes marchands | Liens rémunérés et attribution | Navigation vers le marchand, puis traceurs uniquement selon consentement et contrat | Aucun compte actif ; le contenu reste accessible sans lien suivi |
| Moteurs de recherche | Découverte des pages publiques | Pages, sitemap et métadonnées publiques | Aucune soumission active ; l'indexation n'est jamais garantie |
| Hébergeur et DNS | Publication de l'artefact statique | Fichiers publics et données techniques minimales | Fournisseur et configuration non décidés |

## Environnements

| Environnement | Configuration canonique | Accès | État vérifié |
| --- | --- | --- | --- |
| Développement | `compose.yaml` | `http://127.0.0.1:4321` | Build et healthcheck vérifiés localement |
| CI | `.github/workflows/verify.yml` | [GitHub Actions](https://github.com/nclsppr/fouranu/actions) | Workflow `Verify` exécuté avec succès sur `main` |
| Preview | Configuration à définir avec l'hébergement | Aucun | Non activé |
| Production | Configuration à définir après autorisation | `fouranu.com` | Domaine acquis selon le propriétaire, aucune surface activée ou sondée |

## Commandes canoniques

| Action | Commande | Disponibilité et résultat attendu |
| --- | --- | --- |
| Vérifier le dépôt | `./scripts/verify.sh` | Disponible ; contrôle les documents, registres, Compose, le site Astro et Nimbus |
| Vérifier Compose | `python3 scripts/check_compose.py` | Disponible ; valide le service applicatif, son healthcheck et les contraintes du pack `full` |
| Construire la documentation interne | `npm run build --prefix docs-nimbus` | Disponible ; génère Nimbus depuis les Markdown classés |
| Développer le site | `docker compose up --build --wait` | Disponible ; construit et lance le service local avec healthcheck |
| Vérifier le site | `npm run check --prefix site` | Disponible ; typecheck, construit 15 pages HTML et exécute sept tests de contrat |
| Construire le site | `npm run build --prefix site` | Disponible ; génère l'artefact statique sous `site/dist/` |
| Arrêter le parcours local | `docker compose down` | Disponible dès qu'un service a été lancé ; préserve les volumes |
| Déployer | Aucune commande autorisée | La plateforme, l'hébergement et le feu vert de publication manquent |

## Données, sécurité et confidentialité

- Les registres versionnés contiennent des sources publiques, des identifiants
  éditoriaux et des statuts minimaux. Ils ne contiennent ni coordonnées privées
  ni fichiers médias tiers.
- Les preuves d'autorisation et coordonnées restent sous `research/private/`,
  hors Git. La CI ne peut pas les lire.
- Aucun secret, compte marchand, identifiant analytics ou clé d'API n'est
  actuellement requis.
- Le premier site n'a ni compte utilisateur, ni base de données, ni paiement.
- Toute mesure d'audience future exige une décision sur la minimisation, le
  consentement, la rétention et les tiers avant activation.

## Qualité

| Risque | Contrôle automatisé attendu | Contrôle manuel attendu |
| --- | --- | --- |
| Contenu sans provenance | Registres, références croisées et tests de contrat | Lecture des sources et limites avec la barrière SEO par article |
| Confusion entre analyse et test | Refus des formulations et schémas interdits | Vérification du bandeau avant la première recommandation |
| Régression SEO | Build, liens, canonical, sitemap, robots et données structurées | Inspection de l'HTML et des aperçus sociaux |
| Interface inaccessible | Typecheck, tests et contrôles statiques applicables | Mobile, bureau, clavier, focus, contraste et mouvement réduit |
| Publication interne accidentelle | Séparation entre `site/` et `docs-nimbus/` | Inspection de l'artefact public |

## Livraison

- Branche canonique : `main`.
- Remote canonique : `origin`, dépôt GitHub public
  [`nclsppr/fouranu`](https://github.com/nclsppr/fouranu).
- Politique actuelle : chaque tranche cohérente passe les gates locales, est
  poussée sur `main`, puis sa CI distante est vérifiée conformément à `P18`.
- Artefact cible : sortie statique générée par `site/`.
- Déploiement : non décidé et non autorisé.
- Rollback cible : dernier artefact et dernier SHA publiés et vérifiés.
- Vérification finale d'une publication : checks CI, contrôle HTTP, rendu
  mobile et bureau, console, routes, robots, sitemap et empreinte de l'artefact.

## Responsabilités

| Zone | Propriétaire | Source de contrôle |
| --- | --- | --- |
| Produit et ordre de livraison | nclsppr | `PROJECT.md` et `ROADMAP.md` |
| Contenu, provenance et droits | nclsppr | `EDITORIAL-PROTOCOL.md` et `research/` |
| Design et accessibilité | nclsppr | `DESIGN.md` et profil web |
| Publication et services externes | nclsppr | Autorisation explicite et futur runbook de publication |
