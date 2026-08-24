---
articleId: OONI-018
brand: ooni
title: "Ooni Volt 2 : four électrique intérieur"
description: Le Volt 2 est le four Ooni intérieur de 1 600 W. Ses commandes et mesures tierces sont documentées, pas sa fiabilité ni sa consommation.
summary: Le Volt 2 est le four intérieur de la gamme actuelle. Ses commandes sont documentées, mais pas son uniformité, sa fiabilité ni son coût d'usage.
status: publishable
type: model
model: Ooni Volt 2
publishedAt: 2026-08-24
updatedAt: 2026-08-24
indexable: true
evidenceIds: [EV-0090, EV-0091, EV-0092, EV-0103, EV-0260, EV-0261, EV-0262, EV-0340, EV-0341, EV-0342, EV-0343, EV-0408]
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - FAN-INF
limitations:
  - Les cuissons publiées utilisent des pâtes et des réglages différents.
  - La présentation 30 cm et la surface de 33 cm ne sont pas normalisées.
  - Les cuissons tierces utilisent des pâtes et des réglages différents.
  - La fiabilité, la réparabilité et la consommation ne sont pas mesurées.
---

## Notre lecture en bref

Le Volt 2 est le seul four de la gamme actuelle présenté par Ooni pour un usage
intérieur. Il fonctionne sur une alimentation de 220 à 240 V, avec une puissance
annoncée de 1 600 W et une plage de réglage de 20 à 450 °C. Les sources tierces
montrent ses commandes et plusieurs cuissons. Elles ne mesurent pas sa
consommation, sa fiabilité ni son uniformité sur des sessions répétées.

Nous le retiendrions d'abord lorsqu'une cuisson intérieure est indispensable.
Nous ne le choisirions pas pour sa seule promesse de rapidité : les sources
disponibles montrent surtout que le réglage dépend de la pâte et du résultat
recherché.

Pour choisir dans toute la gamme, voir
[quel four Ooni choisir](/ooni/quel-four-ooni-choisir/). La comparaison
[Ooni gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/)
isole les contraintes de lieu et d'énergie. Les codes de preuve sont définis
dans [la méthode Four à Nu](/methode/).

Les questions publiques portent notamment sur l'absence de jardin
([Q-0030](https://www.reddit.com/r/ooni/comments/1uc15og/is_volt_2_good_or_nah/)),
la valeur du Volt 2
([Q-0031](https://www.reddit.com/r/ooni/comments/1padk76/switch_to_volt2_from_gas/)),
la fiabilité et la réparation face au gaz
([Q-0035 et Q-0036](https://www.reddit.com/r/ooni/comments/1ol9won/)), puis le
choix entre le Volt 12 et le Volt 2
([Q-0045 et Q-0046](https://www.reddit.com/r/ooni/comments/1rdl25w/volt_12_or_volt_2/)).
Ces discussions sont des signaux qualitatifs, pas des données de satisfaction.

## Ce qui est établi par le fabricant

La [page française du Volt 2](https://eu.ooni.com/fr-fr/products/ooni-volt-2)
le présente comme un four électrique intérieur pour des pizzas de 30 cm. Sa FAQ
mentionne aussi une surface de cuisson de 33 cm (`EV-0090`).

Le fabricant affiche une plage de 20 à 450 °C, une alimentation de 220 à 240 V,
une puissance de 1 600 W, un poids de 17,6 kg et une pierre de 10 mm (`EV-0091`).
Il annonce un état prêt à cuire en 12 minutes et une pizza napolitaine en
90 secondes (`EV-0092`). Ces valeurs restent des annonces fabricant.

`EV-0103` considère que 30 cm et 33 cm décrivent probablement deux notions
différentes, mais la page ne permet pas de les normaliser sans clarification.
Cette fiche conserve donc les deux valeurs.

## Commandes et visibilité observées

Got2EatPizza montre les préréglages napolitain, new-yorkais et pan pizza ainsi
qu'un mode manuel
([EV-0260, à 2:54](https://www.youtube.com/watch?v=IyRNCq67iTA&t=174s)). La
fenêtre et l'éclairage permettent à la créatrice de suivre plusieurs zones de
la pizza sans ouvrir régulièrement la porte
([EV-0261, à 3:35](https://www.youtube.com/watch?v=IyRNCq67iTA&t=215s)). Elle
utilise aussi un thermomètre infrarouge et montre des cuissons avec peu ou pas
de rotation
([EV-0262, à 4:17](https://www.youtube.com/watch?v=IyRNCq67iTA&t=257s)).

Ces observations viennent d'un retour annoncé après trois mois. La source
utilise des liens affiliés et ne précise pas l'origine de son unité. Elle ne
fournit ni cartographie thermique, ni nombre de pizzas, ni mesure répétée de
l'uniformité.

## Mesures et cuissons d'une autre source

Boulangerie Pas à pas règle d'abord le four à 270 °C. Après vingt minutes,
l'affichage approche 280 °C, tandis que les relevés infrarouges donnent environ
315 °C sur la sole et 300 °C sur la voûte
([EV-0340, à 2:16](https://www.youtube.com/watch?v=pwtuBDX-xI8&t=136s)). Ces
nombres concernent des surfaces et des instruments différents. Ils ne mesurent
pas seuls la précision de la régulation.

La même source enfourne une Margherita en mode napolitain autour de 430 °C avec
une cible de 1 min 30 s
([EV-0341, à 14:37](https://www.youtube.com/watch?v=pwtuBDX-xI8&t=877s)). Une
pizza de style romain utilise ensuite une pâte et un réglage différents
([EV-0342, à 16:07](https://www.youtube.com/watch?v=pwtuBDX-xI8&t=967s)). Le
créateur retient finalement des préférences propres à ses pâtes
([EV-0343, à 23:15](https://www.youtube.com/watch?v=pwtuBDX-xI8&t=1395s)). La
vidéo est réalisée en collaboration avec Ooni et comporte des liens marchands.

## Ce qui reste à vérifier

- la place utile pour une pizza de 30 cm et la signification de la surface de
  33 cm ;
- la cartographie des éléments supérieur et inférieur ;
- la récupération entre plusieurs pizzas identiques ;
- la consommation électrique par session et en veille ;
- le comportement du circuit électrique dans une installation conforme ;
- la fiabilité, la réparabilité et la disponibilité des pièces ;
- une comparaison gaz et électrique avec même pâte, même cible et dégustation
  aveugle.

## Limites de cette fiche

Les sources montrent l'interface et plusieurs cuissons, mais elles ne suivent
pas un protocole commun. Les réglages préférés par leurs auteurs ne deviennent
pas des recommandations générales.
