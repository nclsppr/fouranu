# ADR-0012 : priorité commerciale et liens d'achat affiliés

| Champ | Valeur |
| --- | --- |
| Statut | Acceptée pour la préparation du candidat |
| Date | 2026-11-10 |
| Propriétaire | nclsppr |
| Portée | Accueil, guides d'achat, appels marchands et objectif économique |
| Complète | ADR-0010 et ADR-0011 |

## Contexte

Le propriétaire demande un blog plus personnel, une mise en avant des fours et
accessoires proposés sur Amazon.fr et la suppression des liens d'achat non
rémunérés. Le site possède déjà des guides et des offres affiliées, mais sa une
privilégie encore les gammes Ooni et Gozney et ses boutons mélangent Amazon et
des destinations fabricant directes.

## Décision

La rentabilité devient un objectif explicite du produit. L'accueil donne la
priorité aux décisions d'achat disposant d'offres Amazon exactes enregistrées :
choisir son premier four et compléter uniquement le matériel nécessaire.
Cette priorité de distribution ne change pas les critères des recommandations.
Un produit inadapté ne devient pas un choix conseillé parce qu'il rémunère le
site ; un produit sans offre affiliée reste documenté lorsque la comparaison
l'exige.

Tous les boutons et liens à intention d'achat sont affiliés. Amazon.fr conserve
son identifiant autorisé `fouranu-21`, la destination exacte et la déclaration
visible avant le clic. Aucun CTA fabricant direct ne sert de repli. En l'absence
d'offre affiliée vérifiée, le bloc d'achat est omis. Une recherche générale ou
un modèle voisin ne remplace jamais le produit annoncé.

Les bibliographies, notices, crédits et liens d'auteur restent des références
directes : ils ne sont pas des publicités et ne portent pas artificiellement
`rel="sponsored"`. La demande de suppression vise les sorties marchandes du
parcours d'achat, sans rendre les preuves impossibles à vérifier.

La voix gagne en personnalité par des choix expliqués : « je choisirais »,
« ce que je regarderais avant de commander », bénéfice, concession et
alternative. Elle ne fabrique ni essai physique, ni témoignage, ni validation
personnelle d'une signature. L'ADR-0010 et les cinq classes de preuve restent
applicables. Aucun prix, stock ou taux de commission actuel n'est supposé.

La structure et les nouveaux dossiers restent équivalents en français,
anglais et allemand, pour le même marché France. Les médias existants gardent
leurs droits et légendes ; les nouvelles décisions transversales peuvent être
textuelles selon l'ADR-0010.

## Mesure et publication

Le résultat économique est la contribution confirmée après les coûts imputés
au projet. Les clics et commissions proviennent des rapports déjà autorisés,
avec leurs dates et limites. L'absence de données reste inconnue, jamais zéro
ni un succès présumé. Le protocole de relevé vit dans
[`GROWTH-MEASUREMENT.md`](../GROWTH-MEASUREMENT.md).

Cette décision n'ajoute aucun traceur, compte, achat, secret ou budget. La
préparation et les tests du candidat n'autorisent pas sa publication publique.
Le workflow sur `main` déployant automatiquement après `Verify`, le candidat
reste sur une branche de revue jusqu'au feu vert sur le paquet exact, puis
rejoint `main` avec vérification de sa CI et de la version servie.

## Vérification

- Les blocs marchands ne contiennent que les destinations affiliées exactes.
- Une page sans offre affiliée ne présente pas de bouton fabricant de secours.
- Les sources demeurent consultables et distinctes des boutons d'achat.
- Les sélections, routes, textes et actions restent cohérents dans trois langues.
- Les nouveaux guides répondent à des décisions distinctes et réutilisent des
  preuves attribuées sans en changer la date ou le sens.
- La gate complète, Compose et la revue mobile, bureau et clavier portent sur
  le candidat final ; `STATUS.md` distingue chaque contrôle de la publication.
