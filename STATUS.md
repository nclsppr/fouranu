# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-23 |
| Par | Codex, inspection locale et distante en lecture seule |
| Branche | `main` |
| Base de la tranche | `e422d5461a6f64b67e6f1f3364d134f44297f70b` |
| Environnement | Dépôt local, GitHub `nclsppr/fouranu` et audit du contrôle Atlas |
| Version livrée | F01 sur `origin/main` ; tranche documentaire et Atlas en cours de vérification avant push |

## Résumé

Four à Nu est désormais construit comme un média documentaire permanent. Le
site Astro génère 21 pages HTML sans JavaScript client nécessaire au contenu,
dont onze analyses Ooni : deux dossiers de décision et une fiche pour chacun
des neuf fours de la gamme France enregistrée.

Le build de preview garde toutes les pages en `noindex` et son sitemap vide. Le
build explicite `PUBLIC_SITE_INDEXABLE=true` rend 20 URL éligibles : neuf pages
fixes et onze analyses. La 404 reste hors index. Les tests contrôlent titres,
descriptions, canonicals, dates, auteur, RSS, `llms.txt`, données structurées,
liens internes, bibliographies, médias, robots et sitemap.

L'interface suit la direction `Ligne de sole` en blanc, carbone, acier froid et
bleu de sonde. L'accueil utilise une illustration originale assistée par IA,
déclarée comme telle et sans image tierce en entrée. Le nouveau gabarit article
rend visibles l'auteur, les dates, le sommaire, la nature documentaire, les
limites, la bibliographie et l'accès direct à chaque preuve.

Le service Compose est sain. Le producteur Atlas génère une archive et un
inventaire de routes déterministes, avec publication OCI immuable et
attestations prévues dans GitHub Actions. Il ne constitue pas une admission
dans `vps-infra` et n'active ni domaine ni hébergement.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build, Compose, tests et première CI | Aucune dans son périmètre historique | nclsppr |
| F02, corpus documentaire publiable | `in_progress` | Onze analyses, pages de confiance, provenance et politique de correction | Identité légale exacte, cinq sessions et revue visuelle de la tranche | nclsppr |
| F03, candidat Atlas | `in_progress` | Producteur, paquet déterministe et gate complète locale | Preuves médias par actif et admission centrale désactivée | nclsppr |
| F04, lancement public | `planned` | Domaine acquis selon le propriétaire | Autorisations de publication, admission, DNS et contrôles publics | nclsppr |

## Livré et vérifié localement

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Application Astro | 21 pages HTML statiques et zéro fichier JavaScript client | `site/` et neuf tests de contrat | Aucun artefact public |
| Corpus Ooni | Deux dossiers de décision et neuf fiches modèle | `site/src/content/analyses/` | Aucune utilité utilisateur encore mesurée |
| Provenance | 107 preuves, 50 questions et 18 entrées média | `research/` et 21 tests de registre | Une source tierce peut être retirée ou corrigée |
| Confiance éditoriale | Auteur, méthode, À propos, corrections, transparence et confidentialité | Routes et données structurées contrôlées | Identité légale et canal de contact exacts absents |
| SEO conditionnel | 20 URL éligibles, RSS, `llms.txt`, robots, sitemap et canonical | Build normal et build opt-in couverts par les tests | Aucun classement, crawl ou citation réelle observé |
| Design | Système froid sans ivoire, illustration responsive et gabarit média | `DESIGN.md`, CSS et contrôles statiques | Revue visuelle actuelle bloquée par le navigateur intégré |
| Parcours local | Service `site` en lecture seule avec healthcheck | `compose.yaml` et Compose sain | Aucun preview partagé |
| Candidat Atlas | Archive et inventaire reproductibles, tags par SHA et attestations prévues | Workflow `VPS release` et tests adversariaux | Non admis par le contrôle central |
| Documentation interne | Nimbus et catalogue de 38 Markdown | `docs-nimbus/` et `DOCUMENTATION-CATALOG.md` | Nimbus reste exclu du site public |

## Médias et autorisations

Le propriétaire a déclaré le 2026-08-23 avoir obtenu l'accord de tous les
créateurs du corpus courant pour réutiliser leurs contenus et produire des
images dérivées par IA. Cette déclaration autorise la préparation du flux, mais
chaque photogramme public doit encore recevoir sa ligne exacte dans
`research/assets.csv` : source, timecode, titulaire, périmètre, crédit,
personnes visibles, éléments tiers, empreinte et preuve privée.

Aucun photogramme ni dérivé de vidéo n'entre dans l'arbre public actuel. Les
seuls fichiers nouveaux sont deux variantes WebP d'une création IA originale,
sans marque, personne ou média tiers. Elles portent une mention visible et leur
provenance est enregistrée.

## État opérationnel

| Surface | Accès | Artefact | Santé | Dernière observation |
| --- | --- | --- | --- | --- |
| Site local | `http://127.0.0.1:4321` pendant Compose | `site/dist/`, dérivé non suivi | Sain | 2026-08-23 |
| Documentation Nimbus | Build local uniquement | `docs-nimbus/dist/`, dérivé non suivi | Contrôles disponibles | 2026-08-23 |
| CI existante | [GitHub Actions](https://github.com/nclsppr/fouranu/actions) | Workflow `Verify` | Dernier run livré vert, nouvelle tranche non poussée | 2026-08-23 |
| Producteur Atlas | GitHub Actions après push sur `main` | OCI `site` et `routes` par SHA | Préparé, non exécuté sur cette tranche | 2026-08-23 |
| Contrôle Atlas | Dépôt séparé `vps-infra` | Aucun profil Four à Nu | Non admis ; réconciliation centrale observée en échec | 2026-08-23 |
| Domaine | `fouranu.com` et `www.fouranu.com` | Aucun service Four à Nu | DNS observé sans résolution | 2026-08-23 |

## Validations récentes

| Date | Contrôle | Résultat | Portée de la preuve |
| --- | --- | --- | --- |
| 2026-08-23 | `npm run check --prefix site` | Typecheck sans erreur, 21 pages, neuf tests sur neuf | Site local et contrats automatisés |
| 2026-08-23 | Registres éditoriaux | 107 preuves, 18 médias, 50 questions et 21 tests sur 21 | Métadonnées versionnées ; preuves privées non lues |
| 2026-08-23 | Docker Compose | Image construite et healthcheck sain | Machine locale uniquement |
| 2026-08-23 | `./scripts/verify.sh` | Gate complète verte, deux paquets Atlas identiques et 47 pages Nimbus générées | Diff local avant livraison Git |
| 2026-08-23 | Revue navigateur de la tranche | Bloquée avant ouverture par une vérification de sécurité administrateur indisponible | Aucune affirmation visuelle sur la nouvelle interface |
| 2026-08-23 | Audit Atlas en lecture seule | Aucun profil Four à Nu ; dernier contrôleur central observé en échec avant admission | Aucun changement dans `vps-infra` |

## Blocages avant publication

| Blocage | Impact | Condition de reprise |
| --- | --- | --- |
| Identité de l'éditeur, responsable de publication, adresse et contact exacts absents | Mentions légales incomplètes | Fournir ces informations par un canal approprié, sans secret dans Git |
| Autorisations non rapprochées des actifs exacts | Aucun dérivé vidéo ne peut entrer dans le paquet public | Enregistrer chaque actif et vérifier sa preuve privée |
| Revue visuelle actuelle non acquise | Le changement d'interface ne satisfait pas encore la gate manuelle | Refaire mobile, bureau, clavier, focus, mouvement réduit, console et réseau lorsque le navigateur est disponible |
| Four à Nu absent de `vps-infra` | Aucun déploiement Atlas possible | Réparer la gate centrale puis préparer une admission désactivée dans une tranche séparée |
| DNS et publication non autorisés | Aucun site public ni indexation réelle | Feu vert explicite sur le paquet exact, puis activation séparée |
| Aucun programme marchand actif | Aucun revenu affilié | Choisir et autoriser les partenaires, puis appliquer `rel="sponsored"` |

## Risques et prochaines preuves

| Sujet | Type | Prochaine preuve | Phase |
| --- | --- | --- | --- |
| Utilité du parcours | Hypothèse | Cinq sessions décrites dans `EXPERIMENT.md` | F02 |
| Valeur propre des analyses | Hypothèse | Relecture des onze URL avec la barrière SEO | F02 |
| Droits des dérivés | Risque | Validation d'un premier actif complet, de la source au rendu public | F03 |
| Publication interne accidentelle | Risque | Inspection de l'archive Atlas, distincte de Nimbus | F03 |
| Économie du modèle | Hypothèse | Trafic, clics et ventes d'un lancement autorisé | F05 |
