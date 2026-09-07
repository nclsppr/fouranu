# ADR-0010 : aide à l'achat documentaire permanente

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée |
| Date | 2026-09-07 |
| Propriétaire | nclsppr |
| Portée | Promesse produit, recommandations, comparatifs et mesure |
| Remplace | [ADR-0006](0006-programme-essais-et-couverture-du-marche.md), uniquement pour le programme d'essais physiques et la promesse de couverture par essais |

## Contexte

Four à Nu possède un corpus documentaire trilingue, des dossiers de modèles,
des guides par marque et des liens marchands déclarés. La promesse de tester
progressivement les produits, adoptée le 26 août 2026, ne correspond plus au
produit voulu. Le propriétaire fixe un modèle durable d'aide à l'achat : Four
à Nu ne réalisera pas d'essais physiques de fours, d'accessoires ou de pétrins.

La priorité est de rendre les décisions d'achat plus faciles, les articles plus
utiles et la découverte du site plus efficace. Une recommandation peut être
claire et convaincante tout en restant fondée sur des données attribuées.

## Décision

### Maintenir définitivement le modèle documentaire

Les seules classes de preuve restent `FAB`, `T-MES`, `T-OBS`, `FAN-SYN` et
`FAN-INF`. Le programme de banc d'essai, sa future taxonomie et ses pilotes sont
retirés de la roadmap. Aucun achat, prêt ou protocole de test physique Four à
Nu ne fait partie du produit.

La valeur originale vient de la sélection des questions, de la comparaison des
sources, des calculs explicables, des contradictions identifiées et des choix
éditoriaux. Une mesure tierce conserve son auteur, ses conditions et ses
limites. Une illustration ne devient pas une preuve de résultat. Une signature
ou une biographie ne transforme pas le dossier en expérience de première main.

### Donner une recommandation utile dès l'ouverture

Un article répond d'abord à la décision du lecteur : choix recommandé pour une
situation définie, raisons, compromis qui peut l'écarter et alternative utile.
La méthode détaillée reste accessible au second niveau ; la nature documentaire
reste identifiable avant les arguments de performance et l'attribution reste
proche de chaque mesure importante.

La rédaction peut employer « nous recommandons », « notre choix » ou « notre
avis documentaire » lorsque la conclusion expose ses critères et ses limites.
Un titre ciblant le meilleur choix doit préciser son usage ou son périmètre et
la page doit nommer les modèles comparés, les critères et la date du corpus.
Il ne promet ni vainqueur universel, ni évaluation exhaustive, ni expérience
physique. Notes, étoiles, classement pseudo-scientifique, `Review` et
`AggregateRating` restent exclus.

### Construire des décisions, pas multiplier les pages

- Le guide de choix réduit les possibilités selon le lieu, l'énergie, le
  format et l'installation ; ses raisons et ses limites restent disponibles
  sans JavaScript.
- Les comparatifs intermarques répondent à un arbitrage précis. Une URL
  existante est enrichie si elle répond déjà à la même intention.
- Le coût complet sépare le four, les accessoires nécessaires et les éléments
  facultatifs. Tout montant dépend d'une source utilisable, d'une date et
  d'hypothèses visibles ; les contrats des partenaires restent applicables.
- Le passage au marchand conserve le produit exact, la destination visible,
  la déclaration commerciale et le choix de boutique lorsqu'il est utile.
- Les versions FR/EN/DE conservent les mêmes recommandations et preuves, dans
  le même marché français, selon l'ADR-0009.
- Un dossier transversal `brand: fours`, `type: decision` peut porter sa
  comparaison par le texte et les tableaux, sans image d'en-tête. Il conserve
  `heroTreatment: editorial-original` et la carte de partage originale du site ;
  aucune image produit n'entre dans le sitemap. Cette exception au protocole
  visuel ne s'étend pas aux fiches de modèle.

Les titres, l'accueil et les pages de confiance présentent cette aide à l'achat
comme le produit. Ils ne promettent pas des essais futurs. Les objectifs et
organisations internes ne remplacent pas le bénéfice lecteur.

### Mesurer séparément visibilité, intention et revenu

La procédure de référence vit dans
[`GROWTH-MEASUREMENT.md`](../GROWTH-MEASUREMENT.md). Search Console décrit la
visibilité et les clics issus de Google ; un clic marchand décrit une sortie
vers une boutique ; seule une commission confirmée décrit un revenu acquis.
Aucune de ces mesures ne remplace les deux autres.

Les hypothèses portent sur la compréhension du choix, le trafic de recherche,
les clics utiles et le revenu. Elles ne sont pas des résultats acquis. La
mesure d'événements sur le site reste une option non activée tant que son
contrat, son environnement et sa confidentialité ne sont pas validés.

## Conséquences

- `PROJECT.md`, `ROADMAP.md`, `EDITORIAL-PROTOCOL.md` et `BRAND-SEO.md`
  deviennent cohérents avec cette promesse permanente.
- L'ADR-0006 reste conservée comme décision historique remplacée. Les autres
  contrats de droits, d'affiliation, de langues et de publication restent
  applicables.
- L'ADR-0002 reste la référence de la taxonomie documentaire. La présente
  décision rétablit l'absence de programme physique et précise les formulations
  de recommandation autorisées.
- Le travail documentaire est réalisable sans équipement ni donnée personnelle
  nouvelle. La qualité se juge sur l'aide apportée et la fidélité aux sources.
- La diffusion par courrier, une lettre d'abonnés ou une prise de contact avec
  un partenaire ne sont pas activées par cette décision. Tout envoi exige son
  autorisation explicite ; aucun service ni compte n'est créé implicitement.

## Vérification avant livraison

1. Les surfaces actuelles et les métadonnées FR/EN/DE ne promettent plus d'essais
   Four à Nu ; l'historique des décisions reste daté et identifiable.
2. Chaque recommandation expose un usage, des raisons et les limites qui
   pourraient changer le choix, sans fausse mesure ni témoignage.
3. Le guide et les comparatifs conservent liens, sources, accessibilité et
   équivalence linguistique ; aucune page mince n'est créée pour une variante.
4. Les droits, le balisage éditorial et les liens marchands passent les gates.
5. La mesure distingue données absentes, hypothèses et résultats ; aucun
   export de compte, identifiant individuel ou revenu privé n'entre dans Git.
6. La gate du dépôt et les contrôles navigateur portent sur le paquet exact.
   L'état local, la CI et la publication restent consignés séparément dans
   `STATUS.md`.
