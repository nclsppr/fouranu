# Mesurer la découverte et les décisions d'achat

Procédure interne du 2026-09-07. Ce document définit des relevés et des
hypothèses ; il ne constate aucun gain SEO, clic marchand ou revenu. Le contrat
produit est fixé par l'[ADR-0010](decisions/0010-aide-achat-documentaire-permanente.md),
les seuils exploratoires par [`EXPERIMENT.md`](../EXPERIMENT.md), et les preuves
effectivement recueillies par [`STATUS.md`](../STATUS.md).

## Trois mesures séparées

| Mesure | Source | Ce qu'elle permet de dire | Limite |
| --- | --- | --- | --- |
| Impressions, clics, CTR et position moyenne Google | Search Console | Visibilité observée dans la recherche Google pour le périmètre relevé | Ce n'est ni le volume total d'une requête, ni une visite qualifiée, ni un achat |
| Clics vers un marchand | Rapport partenaire ou futur compteur de sortie du site | Intérêt pour une destination commerciale sur une période | Un clic n'est pas une personne unique, une commande ou une commission |
| Commandes et commissions | Rapport officiel du partenaire | Revenu attribué selon les règles et états du partenaire | Séparer en attente, annulé et confirmé ; ne pas attribuer une vente à une requête sans preuve |

## Relevé Search Console

1. Utiliser la propriété existante qui couvre `fouranu.com`, en lecture seule.
   Enregistrer son périmètre, la date d'extraction et le type de recherche
   `Web`, sans copier les accès ou les exports dans le dépôt.
2. Prendre les 28 derniers jours complets disponibles et les 28 précédents,
   avec les mêmes filtres. Si l'historique est plus court, garder les dates
   réellement disponibles et signaler l'absence de comparaison exploitable.
3. Relever les quatre métriques par page canonique, puis par requête, pays et
   appareil. Pour une page prioritaire, filtrer cette URL puis examiner ses
   requêtes. Comparer le marché France et le reste séparément, ainsi que les
   routes FR, EN et DE ; langue de page et pays ne sont pas interchangeables.
4. Distinguer les recherches de marque Four à Nu des autres intentions et
   rattacher chaque requête observée à une décision existante ou manquante.
   Une absence dans le tableau ne signifie pas zéro demande.
5. Consigner la période, les filtres, la complétude et le SHA du changement
   étudié. Les données récentes préliminaires et les écarts d'agrégation restent
   signalés. Recalculer un CTR agrégé avec clics divisés par impressions.

Les métriques, filtres et écarts entre graphique et tableau sont décrits dans
la [documentation Search Console](https://support.google.com/webmasters/answer/7576553?hl=fr),
consultée le 2026-09-07. La position moyenne est un indicateur agrégé, pas une
place fixe garantie pour tous les lecteurs.

Si un accès API existe déjà et est autorisé, le regroupement
`query`, `page`, `country`, `device` peut préciser un segment. Même avec
pagination, l'API ne garantit pas toutes les lignes : conserver aussi un relevé
moins détaillé et ne pas présenter le cube comme exhaustif. Voir
[Search Analytics: query](https://developers.google.com/webmaster-tools/v1/searchanalytics/query),
consulté le 2026-09-07. Aucun accès API n'est créé par cette procédure.

## Clics et commissions

Relever séparément les totaux que le partenaire rend disponibles, leur période,
leur territoire, les identifiants de suivi déjà autorisés et leurs délais
d'attribution. Un rapport partagé entre plusieurs pages ne permet pas de
reconstruire leur conversion individuelle. Ne pas inventer cette ventilation.

Un taux de clic marchand exige des clics et un dénominateur observés sur les
mêmes pages, dates et exclusions. Sans dénominateur fiable, publier uniquement
le nombre de clics et sa source. Le rapport clics marchands / clics Google ne
mesure pas un taux de conversion : les populations et les événements diffèrent.
Sans mesure des visites qualifiées, laisser le revenu par visite indisponible.

Les exports de comptes restent privés, hors Git et hors artefact public. Une
note versionnée peut seulement indiquer la date, le périmètre de vérification,
la disponibilité d'un relevé et la décision, sans requête sensible, coordonnées,
détails de commande ou chiffre commercial privé.

## Option de compteur sans cookie — non activée

Un futur compteur peut agréger des événements sur l'infrastructure du site,
avec uniquement le jour, l'identifiant de page, la langue, l'identifiant produit,
le marchand et l'emplacement du lien (`opening`, `verdict`, `comparison`). Les
attributs existants des liens peuvent fournir ces dimensions sans modifier
leur destination. La navigation doit continuer si le compteur échoue ou si
JavaScript est désactivé.

Cette option exclut cookies, stockage navigateur, identifiant de session,
empreinte, URL de requête complète et profil individuel. Elle compte des
événements, pas des visiteurs uniques. La collecte technique peut néanmoins
traiter une adresse réseau : avant activation, définir sa suppression, les
journaux et leur rétention, le traitement des robots, la protection contre les
abus, l'information du lecteur et les règles applicables. L'absence de cookie
n'est pas à elle seule une validation de confidentialité.

Aucun service, endpoint, base, secret ou SDK n'est implémenté ou déployé par ce
document. Une éventuelle mise en œuvre doit entrer dans le parcours Compose,
recevoir une décision explicite et passer les contrôles de confidentialité et
de livraison du dépôt. Les rapports Search Console et partenaires existants
restent utilisables indépendamment de ce compteur.

## Décider avec le relevé

| Signal observé | Hypothèse à vérifier | Action limitée |
| --- | --- | --- |
| Impressions pertinentes, peu de clics | Le titre ou le résumé exprime mal la décision | Réviser une ouverture et comparer une période équivalente |
| Clics Google, question toujours sans réponse claire | La page décrit le produit sans départager les options | Ajouter critères, verdict conditionnel et alternative |
| Sorties marchandes, commissions non confirmées | L'offre, l'attribution ou le délai explique l'écart | Vérifier le rapport partenaire et l'identité du produit |
| Données absentes ou trop faibles | Le relevé ne permet pas de trancher | Conserver l'incertitude et poursuivre la collecte autorisée |

Ces associations ne prouvent aucune causalité. Une comparaison avant/après
conserve les changements concomitants, la saisonnalité et les limites de
l'échantillon. Les prises de contact, lettres d'abonnés et nouveaux partenaires
restent hors activation sans autorisation d'envoi.
