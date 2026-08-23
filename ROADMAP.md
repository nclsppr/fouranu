# Roadmap de Four à Nu

Cette roadmap fixe l'ordre de livraison. [`STATUS.md`](STATUS.md) décrit l'état
réel de la phase active.

## Résultat produit

Servir sur un domaine unique un outil francophone qui aide à choisir un four à
pizza, sépare clairement les types de preuve et mesure son utilité puis son
économie sans contenu de masse, note, balisage d'avis ou expérience tierce
racontée à la première personne.

## Principes de séquencement

- Le socle local précède tout contenu destiné au public.
- La provenance et les droits précèdent l'indexation et la monétisation.
- Une preview n'est ni une publication, ni une preuve de demande.
- La production reste sur un seul domaine.
- Chaque phase se ferme par une preuve observable.

## Vue d'ensemble

| Ordre | ID | Phase | Résultat observable | État | Critère de sortie |
| --- | --- | --- | --- | --- | --- |
| 1 | F01 | Socle produit local | Le site se construit et se lance par Compose | `done` | Gate complète verte sur le diff final, service sain et contrôles navigateur acquis |
| 2 | F02 | Corpus documentaire publiable | Un acheteur peut parcourir le parcours de choix et onze analyses documentaires | `in_progress` | Identité légale exacte, cinq sessions, provenance comprise et aucune erreur critique |
| 3 | F03 | Candidat Atlas et paquet publiable | Le propriétaire peut examiner l'artefact exact et son contrat de release sans l'activer | `in_progress` | Barrières de publication, identité légale, audit média par actif et admission Atlas préparée |
| 4 | F04 | Lancement public | Les URL autorisées répondent sur `fouranu.com` et sont explorables | `planned` | Feu vert explicite, déploiement vérifié, sitemap et moteurs contrôlés |
| 5 | F05 | Mesure et décision | Les données observées permettent de poursuivre, corriger ou arrêter | `planned` | Conclusion de l'expérience avec trafic, clics, ventes, coûts et limites |

## Phase F01 : socle produit local

### Objectif

Créer une application web statique distincte de Nimbus, reproductible et prête
à recevoir les contenus sans ouvrir de surface publique.

### Dépendances

- marque Four à Nu retenue ;
- acquisition du domaine confirmée par le propriétaire ;
- corpus, carte Ooni et protocoles existants ;
- Project Foundation `v0.5.2` avec profils `documentation-nimbus`, `web` et `experiment`.

### Inclus

- contrat produit, état, roadmap et design system ;
- application `site/` avec HTML statique et contenu typé ;
- accueil, navigation et routes structurelles minimales ;
- métadonnées, canonical, sitemap, robots et directives `noindex` contrôlées ;
- service `site` dans Compose avec healthcheck ;
- gate reliant les pages publiques aux registres éditoriaux ;
- tests, typecheck, build, lint et revue navigateur mobile et bureau.

### Exclu

- DNS, hébergement public et comptes externes ;
- analytics, affiliation et consentement effectif ;
- publication de médias tiers ;
- note, étoiles, classement global ou balisage `Review` ;
- automatisation X.

### Risques

- utiliser Nimbus comme site public et exposer les documents internes ;
- concevoir une vitrine décorative avant le parcours de décision ;
- passer le pack `full` au vert avec un service factice ;
- laisser le contenu essentiel dépendre de JavaScript.

### Critère de sortie

Depuis un clone propre, `./scripts/verify.sh` passe, `docker compose up --build
--wait` rend le service sain, les routes prévues répondent et la revue couvre
mobile, bureau, clavier, focus, mouvement réduit, console et réseau. Aucun
contenu n'est accessible sur Internet.

### Retour arrière

Revenir au dernier commit local vérifié. Ne pas supprimer le corpus, les
conclusions de l'exploration ni le snapshot Foundation.

## Phase F02 : corpus documentaire publiable

### Objectif

Vérifier que le produit résout une décision d'achat par une analyse
documentaire originale, sans faire passer une source tierce pour une expérience
de Four à Nu.

### Inclus

- sélecteur par contraintes ;
- méthode et conflits d'intérêts ;
- `OONI-001` et `OONI-004` ;
- les neuf fiches de la gamme France lorsque leur portée documentaire est
  explicite, y compris celles dont le corpus se limite au fabricant ;
- bandeaux de provenance, sources, dates, limites et politique de correction ;
- page auteur, À propos, mentions légales, confidentialité, contact et
  transparence commerciale avec des informations exactes ;
- cinq sessions avec des personnes ayant un projet d'achat.

### Exclu

- indexation publique ;
- liens affiliés ;
- prix non datés ;
- photogrammes sans droits ;
- note, étoiles, classement pseudo-scientifique, `Review` ou `AggregateRating` ;
- expérience tierce racontée à la première personne.

### Risques

- synthèse trop proche des sources ;
- surcharge de provenance qui masque la réponse ;
- comparaison de protocoles incompatibles ;
- création de pages pour des variantes de mots-clés sans décision distincte.

### Critère de sortie

Au moins quatre participants sur cinq identifient correctement la provenance,
au moins trois sur cinq nomment une incertitude résolue et aucune erreur
factuelle critique ne subsiste après correction.

### Retour arrière

Une seule itération du parcours est permise. En cas d'échec, conserver les
preuves et retirer les pages du build du pilote.

## Phase F03 : candidat Atlas et paquet publiable

### Objectif

Préparer une version que le propriétaire peut autoriser sans devoir corriger
après coup les droits, la transparence commerciale ou la confidentialité, puis
décrire le candidat statique exact attendu par le contrôle central Atlas.

### Inclus

- page auteur, méthode et politique de correction ;
- mentions légales et politique de confidentialité ;
- choix de mesure d'audience minimisée ;
- mécanisme d'acceptation, refus et retrait si des traceurs sont nécessaires ;
- déclaration commerciale et traitement `rel="sponsored"` ;
- audit des médias, preuves, schémas structurés et URL indexables ;
- preview privée ou non indexée sur Atlas après autorisation séparée ;
- artefact statique immuable, identifiant de version, sonde de santé, procédure
  de retour arrière et contrat d'admission pour `vps-infra`.

### Exclu

- activation du domaine public ;
- admission ou publication d'une release dans `vps-infra` ;
- candidature à un programme marchand sans accord du propriétaire ;
- ajout d'un média dont la chaîne de droits reste incomplète.

### Risques

- croire qu'un clic vaut consentement ;
- charger un tiers avant le choix du visiteur ;
- laisser une page `noindex` entrer dans le sitemap public ;
- confondre autorisation d'un média et autorisation de sa transformation par IA.

### Critère de sortie

La barrière de publication de [`EDITORIAL-PROTOCOL.md`](EDITORIAL-PROTOCOL.md)
et la barrière SEO de
[`docs/SEO-PUBLICATION-GATE.md`](docs/SEO-PUBLICATION-GATE.md) passent. Les
preuves privées sont validées localement, le paquet ne contient aucun document
interne et le propriétaire reçoit une liste exacte des URL, tiers, traceurs et
liens rémunérés proposés. Le candidat Atlas est reproductible et son contrat de
release est vérifié sans admission, publication ni activation.

### Retour arrière

Détruire uniquement la preview nommée et révoquer ses accès. Conserver
l'artefact local et le rapport d'audit.

## Phase F04 : lancement public

### Objectif

Publier uniquement les URL approuvées et établir leur disponibilité réelle.

### Dépendances

- F03 terminée ;
- remote, admission Atlas, publication de release et DNS autorisés ;
- feu vert explicite du propriétaire sur le paquet de publication.

### Inclus

- artefact immuable et procédure de retour arrière ;
- admission et publication de la release statique par `vps-infra` ;
- activation de `fouranu.com` ;
- contrôles HTTP, visuels, console et réseau ;
- `robots.txt`, sitemap, canonical et données structurées ;
- Search Console, Bing Webmaster Tools et IndexNow après autorisation ;
- accès de `OAI-SearchBot` aux seules pages publiques.

### Exclu

- garantie de classement ou de citation ;
- automatisation sociale non sollicitée ;
- second domaine.

### Risques

- publier un artefact différent de celui vérifié ;
- exposer Nimbus ou un brouillon ;
- activer les moteurs avant correction d'un problème canonique ;
- considérer un DNS valide comme preuve du déploiement applicatif.

### Critère de sortie

Les checks distants passent, l'artefact public correspond au SHA livré, les URL
approuvées répondent avec leurs métadonnées attendues et les URL internes ou
`noindex` ne sont pas annoncées dans le sitemap.

### Retour arrière

Revenir au dernier artefact vérifié, retirer des moteurs les URL fautives et
conserver le domaine sans rediriger vers une surface non contrôlée.

## Phase F05 : mesure et décision

### Objectif

Mesurer l'utilité, la conversion et le coût réel avant d'augmenter le nombre de
contenus ou d'ouvrir une autre niche.

### Inclus

- événements minimisés pour sélection terminée et clic marchand ;
- ventes confirmées ou prospects acceptés lorsque les partenaires les rendent disponibles ;
- heures et coûts directs ;
- corrections éditoriales et techniques issues des observations ;
- conclusion datée selon les seuils de l'expérience.

### Exclu

- production massive pour atteindre un quota ;
- achat de trafic sans décision séparée ;
- second site avant six mois de contribution positive du premier.

### Risques

- attribuer une vente hors de la fenêtre du partenaire ;
- optimiser un volume de clics au détriment de l'aide à la décision ;
- poursuivre malgré une valeur originale ou une économie insuffisante.

### Critère de sortie

[`EXPERIMENT.md`](EXPERIMENT.md) reçoit les données observées, leurs limites et
une décision explicite de poursuivre, prolonger une seule fois ou arrêter.

### Retour arrière ou abandon

Désactiver les liens et traceurs concernés, retirer le pilote si nécessaire et
conserver une conclusion anonymisée. Une nouvelle niche repart dans une
expérience séparée.

## Règle de mise à jour

- Une phase change d'état uniquement avec la preuve nommée dans son critère de sortie.
- Les détails courants et blocages restent dans `STATUS.md`.
- Un changement durable de séquencement exige une décision documentée.
- Aucun outil externe ne devient une seconde roadmap canonique.
