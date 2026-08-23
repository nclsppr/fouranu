---
articleId: OONI-011
title: "Ooni Koda 2 Pro : format 45 cm et commandes"
description: Le Koda 2 Pro est annoncé pour 45 cm et pèse 30 kg. Sa commande unique, son brûleur en U et les mesures tierces sont documentés.
summary: Le Koda 2 Pro est annoncé pour 45 cm et pèse 30 kg. Une seule molette commande son brûleur en U, et aucun débit répété n'est encore établi.
status: publishable
type: model
model: Ooni Koda 2 Pro
publishedAt: 2026-08-23
updatedAt: 2026-08-23
indexable: true
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
limitations:
  - Les protocoles disponibles ne permettent pas de calculer un temps de chauffe de référence.
  - Les essais tiers n'utilisent pas un protocole commun.
  - Une mesure de chauffe a un délai interrompu et ne permet pas de calculer un temps fiable.
  - Le débit et la récupération entre pizzas ne sont pas mesurés en série.
---

## Réponse courte

Le Koda 2 Pro de deuxième génération est annoncé pour des pizzas de 45 cm et
pèse 30 kg. Une seule molette commande les deux branches de son brûleur en U.
Les sources documentent des températures ponctuelles et plusieurs cuissons,
mais pas un débit ou un temps de chauffe reproductible.

Cette page traite le Koda 2 Pro seul. Le
[guide de gamme Ooni](/ooni/quel-four-ooni-choisir/) répond au choix entre
modèles, et l'analyse
[gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/)
répond au choix d'énergie. Les niveaux de preuve sont détaillés dans
[la méthode Four à Nu](/methode/).

## Ce qui est établi par le fabricant

La [page française du Koda 2 Pro](https://eu.ooni.com/fr-fr/products/ooni-koda-2-pro)
annonce un four extérieur au propane pour des pizzas de 45 cm. La pierre mesure
53 cm à l'avant et 46 cm à l'arrière selon `EV-0020`.

Le fabricant affiche 682 × 652 × 393 mm, un poids de 30 kg et une pierre de
20 mm (`EV-0021`). Il annonce aussi 500 °C, une pizza en 60 secondes et inclut
un hub Ooni Connect avec une sonde alimentaire (`EV-0022`). Ces annonces n'ont
pas été reproduites par Four à Nu.

## Commandes et ergonomie observées

Got2EatPizza montre qu'une seule molette commande les deux branches du brûleur.
Il n'est pas possible de couper ou régler un côté séparément
([EV-0220, à 1:06](https://www.youtube.com/watch?v=ZWr5-H1AQIs&t=66s)).
La créatrice a acheté son exemplaire et utilise des liens affiliés.

Dans la même source, la routine présentée consiste à préchauffer à pleine flamme
puis à réduire avant la cuisson
([EV-0221, à 2:34](https://www.youtube.com/watch?v=ZWr5-H1AQIs&t=154s)).
Elle vise environ 430 °C au centre de la sole et lance plus près de l'avant
lorsque l'arrière dépasse 440 °C
([EV-0222, à 4:15](https://www.youtube.com/watch?v=ZWr5-H1AQIs&t=255s)).
Il s'agit d'une pratique personnelle, pas d'une cible validée par Four à Nu.

La visibilité derrière le déflecteur vitré dépend de la hauteur de table et de
l'éclairage. La créatrice doit s'accroupir dans sa configuration pour voir sous
le reflet
([EV-0223, à 5:40](https://www.youtube.com/watch?v=ZWr5-H1AQIs&t=340s)).
Cette observation doit être vérifiée avec d'autres tables et tailles
d'utilisateur.

## Mesures tierces disponibles

La French Pizza relève plus de 500 °C sur la pierre après au moins 45 minutes
([EV-0320, à 4:26](https://www.youtube.com/watch?v=pCMYecKqpDg&t=266s)).
Un appel a interrompu la séquence, ce qui rend le temps de chauffe
inexploitable. La source utilise une unité prêtée par Ooni et exerce une
activité marchande.

Sur une seconde pizza, la même source annonce des relevés ponctuels de 500 et
515 °C avant de réduire la flamme
([EV-0322, à 5:46](https://www.youtube.com/watch?v=pCMYecKqpDg&t=346s)).
Une autre journée venteuse montre trois pizzas et un panuozzo avec des résultats
visuellement réguliers, mais sans chronométrage ni série complète de
températures
([EV-0323, à 6:47](https://www.youtube.com/watch?v=pCMYecKqpDg&t=407s)).

Julien Serri observe que le brûleur en U chauffe sur trois côtés et demande
moins de rotations dans la session montrée. Plusieurs corniches sont néanmoins
très marquées pendant la prise en main
([EV-0304, à 20:10](https://www.youtube.com/watch?v=yBCZ_Mxh3FI&t=1210s)).
L'auteur est ambassadeur Ooni et utilise affiliation et code promotionnel.

## Ce qui reste à vérifier

- le temps de chauffe avec un protocole continu et des points de mesure fixes ;
- l'uniformité de la sole et le rôle exact du brûleur en U ;
- le nombre de pizzas réalisables avant une baisse mesurable de la sole ;
- l'effet de la hauteur de table sur la visibilité et les gestes ;
- l'utilité du hub Ooni Connect pour la pizza ;
- la manutention réelle d'un four de 30 kg.

## Limites de cette fiche

Les sources documentent le fonctionnement et quelques cuissons. Elles ne
permettent pas d'établir un débit, une facilité d'apprentissage ou une qualité
de cuisson moyenne. Les relations commerciales et les conditions propres à
chaque vidéo restent attachées aux observations citées.

Le [Koda 2 de 35 cm](/ooni/koda-2/) répond à une contrainte de format différente.
Le [Koda 2 Max à deux zones](/ooni/koda-2-max/) répond à une intention de cuisson
simultanée. Ces fiches évitent de faire de la présente page un comparatif caché.
