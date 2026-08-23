---
articleId: OONI-012
title: "Ooni Koda 2 Max : double zone et deux pizzas"
description: Le Koda 2 Max pèse 43 kg et annonce deux zones gaz pour deux pizzas de 30 cm. Les sources disponibles ne mesurent pas une série complète.
summary: Le Koda 2 Max annonce deux pizzas de 30 cm grâce à deux zones indépendantes. Les sources le montrent une fois, sans établir le débit d'une série complète.
status: researching
type: model
model: Ooni Koda 2 Max
updatedAt: 2026-08-23
indexable: false
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
limitations:
  - Four à Nu n'a pas testé ce modèle.
  - Les séries de deux pizzas citées ne sont pas répétées avec un protocole constant.
  - Le vent et l'accumulation de chaleur changent les résultats observés.
  - La consommation de gaz et le coût complet ne sont pas établis.
---

## Réponse courte

Le Koda 2 Max de deuxième génération est annoncé pour une pizza de 50 cm ou deux
pizzas de 30 cm. Ses deux zones gaz sont indépendantes, mais le four pèse 43 kg.
Deux sources montrent une cuisson simultanée. Aucune ne mesure une série
complète, le taux d'échec ou la récupération des deux pierres.

Cette fiche répond à l'intention de cuisson simultanée. Pour choisir parmi les
neuf modèles, voir [le guide de gamme Ooni](/ooni/quel-four-ooni-choisir/).
Pour un format à gaz plus petit, les dossiers du
[Koda 2](/ooni/koda-2/) et du [Koda 2 Pro](/ooni/koda-2-pro/) restent distincts.
La [méthode Four à Nu](/methode/) explique les codes et conflits cités.

Une discussion demande si le modèle se justifie pour une famille de quatre et
s'il est réservé aux professionnels
([Q-0037 et Q-0038](https://www.reddit.com/r/ooni/comments/1k90vig/)).
Une autre porte sur la surface de table
([Q-0040](https://www.reddit.com/r/ooni/comments/1hgn0mm/)). Ces questions ne
permettent pas de conclure que le modèle est domestique ou professionnel.

## Ce qui est établi par le fabricant

La [page française du Koda 2 Max](https://eu.ooni.com/fr-fr/products/ooni-koda-2-max)
le présente comme un four de 61 cm, avec une pizza maximale annoncée de 50 cm ou
deux pizzas de 30 cm simultanées (`EV-0030`).

Le fabricant indique deux zones gaz indépendantes, deux pierres de 20 mm, un
poids de 43 kg et des dimensions de 80 × 72,2 × 42,8 cm (`EV-0031`). Il annonce
une plage de 100 à 500 °C, un état prêt à cuire en 30 minutes à 400 °C et une
pizza en 60 secondes (`EV-0032`). Four à Nu n'a pas reproduit ces valeurs.

## Cuisson simultanée dans les sources tierces

Pala Pizza montre une pizza cuite en 60 secondes après un lancement annoncé à
910 °F ([EV-0231, à 2:23](https://www.youtube.com/watch?v=1Kl3E8cYp64&t=143s)),
puis deux pizzas cuites simultanément en environ 80 secondes
([EV-0232, à 2:43](https://www.youtube.com/watch?v=1Kl3E8cYp64&t=163s)).
Une seule paire est documentée et la similarité des résultats est appréciée
visuellement. La source utilise des liens affiliés et aucune relation de prêt ou
sponsoring n'a été détectée dans le registre.

La French Pizza montre aussi deux pizzas de 12 pouces cuites ensemble. Les
relevés infrarouges annoncés sont proches de 430 et 440 °C avant l'opération,
mais le créateur la juge difficile pour un débutant
([EV-0332, à 5:50](https://www.youtube.com/watch?v=o424Pz0WbyM&t=350s)).
Cette appréciation appartient à l'auteur. Son exemplaire est déclaré acheté et
la vidéo comporte des liens affiliés.

Ces deux séquences prouvent que leurs auteurs ont réalisé l'opération montrée.
Elles ne mesurent ni le taux d'échec, ni le débit sur une soirée complète, ni
la récupération après plusieurs paires.

## Vent, zones et températures

Lors d'une première journée très venteuse, La French Pizza observe une montée
difficile et un dessous insuffisamment cuit
([EV-0330, à 3:20](https://www.youtube.com/watch?v=o424Pz0WbyM&t=200s)).
Lors d'une seconde journée annoncée sans vent, la façade indique 364 °C après
environ 25 minutes, contre 440 °C à gauche et 412 °C à droite sur la sole
([EV-0331, à 3:46](https://www.youtube.com/watch?v=o424Pz0WbyM&t=226s)).

Avant deux autres pizzas, les relevés des zones se rapprochent. La première
reste pâle dessous, puis les deux suivantes profitent d'une accumulation de
chaleur plus longue
([EV-0333, à 8:13](https://www.youtube.com/watch?v=o424Pz0WbyM&t=493s)).
Ces écarts montrent pourquoi température d'air, température de sole, durée et
position ne doivent pas être confondues.

Une source distincte, ambassadrice Ooni et affiliée, affiche 400 °C après
23 min 40 s
([EV-0300, à 10:46](https://www.youtube.com/watch?v=yBCZ_Mxh3FI&t=646s)).
Les conditions ne permettent pas de comparer ce nombre directement aux
sessions précédentes.

## Ce qui reste à vérifier

- le débit sur une série définie de pizzas identiques ;
- la récupération de chaque zone et leur interaction ;
- l'effet du vent avec une vitesse mesurée ;
- la consommation lorsque les deux brûleurs fonctionnent ;
- la table, les dégagements et la manutention nécessaires pour 43 kg ;
- la différence pratique entre pizza de 50 cm et deux pizzas de 30 cm.

## Limites de cette fiche

Le corpus établit l'architecture à deux zones et documente quelques cuissons.
Il ne permet pas de qualifier le modèle de professionnel, familial, facile ou
rentable. Ces termes exigeraient des critères définis, des répétitions et des
données de première main.
