# ADR-0004 : Cloudflare Workers Static Assets après la gate Verify

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-08-24 |
| Propriétaire | nclsppr |
| Portée | Hébergement du site statique et chemin de déploiement |
| Remplace | La cible Atlas et les étapes de publication Atlas définies par l'ADR-0002 |

## Contexte

Four à Nu produit avec Astro un site statique. Le dépôt conserve cependant une
gate plus large que son seul build web : `./scripts/verify.sh` contrôle aussi
les contrats documentaires, les registres éditoriaux, Nimbus et le démarrage
intégré par Docker Compose.

Cloudflare recommande désormais
[Workers Static Assets pour les nouveaux sites statiques](https://developers.cloudflare.com/workers/best-practices/workers-best-practices/#use-workers-static-assets-for-new-projects).
Une connexion Git native de Pages ou Workers Builds pourrait construire et
déployer après un push sans dépendre de toute la gate propre à ce dépôt. Le
chemin de production doit au contraire attendre une réussite de `Verify` sur le
même SHA.

L'ADR-0002 avait retenu Atlas comme cible et séparait déjà candidat, admission,
release, domaine et indexation. La cible change ; ces frontières restent
nécessaires.

## Décision

### Retenir Workers Static Assets

Le site public cible Cloudflare Workers Static Assets. La configuration du
Worker désigne uniquement `site/dist/` comme répertoire statique et reste
versionnée avec le site. La vérification locale peut construire le paquet et
valider cette configuration sans créer de Worker ni publier d'URL.

Les URL de preview Cloudflare et `workers.dev` restent désactivées par défaut.
Un domaine personnalisé ou une autre surface d'accès exige une décision
d'activation distincte.

### Déployer depuis GitHub Actions, après Verify

Le déploiement de production appartient à GitHub Actions. Le job correspondant :

1. dépend explicitement du job `Verify` ;
2. récupère et construit le même SHA ;
3. utilise la version de Wrangler épinglée par le dépôt ;
4. reste inactif tant qu'une autorisation explicite ne fournit pas son signal
   d'activation et l'environnement GitHub protégé ;
5. lit le jeton Cloudflare minimal depuis les secrets GitHub et l'identifiant
   de compte depuis les variables, jamais depuis Git.

Un déploiement direct depuis une machine locale n'est pas le chemin canonique.
Un `dry-run` local reste autorisé parce qu'il ne crée ni Worker ni URL.

### Conserver quatre frontières d'activation

Les états suivants ne s'autorisent pas mutuellement :

1. **Préparation** : le build, le `dry-run` et le graphe GitHub Actions sont
   valides. Aucun état Cloudflare n'est créé.
2. **Premier déploiement** : GitHub Actions crée ou met à jour le Worker avec le
   paquet exact. Cette mutation externe reçoit son propre feu vert.
3. **Domaine public** : la zone, le domaine personnalisé, les routes et le DNS
   de `fouranu.com` sont configurés séparément, après contrôle du déploiement.
4. **Indexation** : seul le paquet public exact validé par la barrière
   éditoriale peut quitter `noindex`, entrer dans le sitemap et être soumis aux
   moteurs.

Analytics, affiliation et autres tiers conservent eux aussi leurs
autorisations propres.

## Options comparées

| Option | Conséquence | Décision |
| --- | --- | --- |
| Workers Static Assets via GitHub Actions après `Verify` | Attend les contrôles éditoriaux, Nimbus et le smoke Compose avant de livrer le même SHA sur la cible recommandée pour un nouveau site statique | Retenue |
| Workers Builds connecté directement au dépôt | Le build de plateforme ne dépend pas nativement de toute la gate `Verify` de ce dépôt | Écartée pour ce contrat |
| Cloudflare Pages connecté directement au dépôt | Ajoute une seconde chaîne de build et retient une offre qui n'est plus la cible privilégiée pour un nouveau site statique | Écartée |
| Déploiement Wrangler depuis un poste local | Contourne la preuve CI centrale et dépend d'un environnement individuel | Écartée |
| Atlas via `vps-infra` | Maintient une admission et une chaîne de release distinctes alors que la cible publique retenue devient Cloudflare | Remplacée |

## Conséquences

- `PROJECT.md` et `ROADMAP.md` décrivent Workers Static Assets comme seule
  cible publique future.
- La chaîne Atlas et son workflow de release sortent du chemin courant. Les
  décisions et preuves historiques restent intactes.
- Le dépôt porte une dépendance de développement Wrangler et une configuration
  Cloudflare vérifiables sans identifiants.
- Un premier déploiement nécessitera un environnement GitHub protégé, un jeton
  Cloudflare à privilèges minimaux et un identifiant de compte externe au code.
- La réussite de la CI productrice ne prouvera ni le routage du domaine, ni le
  DNS, ni l'indexation. Chacun recevra sa propre preuve publique lorsqu'il sera
  autorisé.
- Le retour arrière cible le précédent déploiement associé à un SHA vérifié ;
  le domaine et le DNS se traitent séparément si l'incident les concerne.

## Effet sur les décisions précédentes

L'ADR-0002 reste normative pour le modèle documentaire, la taxonomie de preuve,
l'absence de signaux d'avis et la séparation entre prépublication et
indexation. Sa section « Préparer Atlas sans l'activer », son option écartant
une publication hors Atlas et ses vérifications propres au contrat Atlas sont
remplacées par la présente décision.

L'ADR-0003 reste l'historique et le contrat de toute opération qui viserait
explicitement un secret sur Atlas. Elle ne décrit plus le chemin de publication
courant de Four à Nu et ne crée aucune obligation `vps-infra` pour la cible
Cloudflare. Une future opération Atlas devrait toujours recevoir une autorité
explicite et appliquer l'ADR-0003.

## Vérification

- `./scripts/verify.sh` reste la gate canonique et inclut la validation sans
  déploiement du contrat Cloudflare.
- Le graphe GitHub Actions prouve que le job de déploiement dépend de `Verify`
  et cible le même SHA.
- Aucun autre workflow actif ne publie le site avant cette gate ou vers
  l'ancienne cible Atlas.
- Aucun secret, identifiant de compte ou état Cloudflare créé n'entre dans Git.
- La préparation se vérifie sans premier déploiement, zone, domaine, DNS ou
  indexation.

## Conditions de réexamen

Réexaminer cette décision si Cloudflare remplace Workers Static Assets, si la
gate canonique quitte GitHub Actions, si le produit requiert un runtime non
statique ou si une autre cible peut reprendre toutes les preuves du dépôt sans
créer une seconde chaîne de livraison.
