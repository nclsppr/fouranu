---
articleId: OONI-001
brand: ooni
title: Quel four Ooni choisir en 2026 ?
description: Les neuf fours Ooni vendus en France, triés selon le lieu, l'énergie, le diamètre annoncé et l'encombrement, sans faux classement.
summary: Pour l'intérieur, le corpus ne retient que le Volt 2. Dehors, l'énergie sépare Koda et Karu, puis le diamètre, le poids et le débit annoncé départagent les modèles.
status: publishable
type: guide
publishedAt: 2026-08-24
updatedAt: 2026-08-24
indexable: true
evidenceIds: [EV-0001, EV-0002, EV-0010, EV-0020, EV-0021, EV-0030, EV-0031, EV-0040, EV-0050, EV-0061, EV-0070, EV-0080, EV-0090, EV-0300, EV-0330, EV-0331, EV-0410]
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - FAN-INF
limitations:
  - Les sources disponibles ne suivent pas un protocole commun à toute la gamme.
  - Les questions d'acheteurs viennent d'un forum anglophone et ne mesurent pas la demande française.
  - Les prix, promotions et stocks ne sont pas traités dans cette version.
  - Aucune synthèse FAN-SYN ne permet de classer les performances.
---

## Notre lecture en bref

Pour un usage intérieur, le Volt 2 est le seul modèle actuel présenté comme tel
dans le corpus. Pour l'extérieur, une alimentation directe au gaz conduit vers
les Koda, tandis que le bois ou le charbon conduit vers les Karu. Le diamètre
annoncé, le poids et le besoin de cuire une ou deux pizzas terminent le tri.
Cette page ne désigne pas un "meilleur Ooni".

À notre place, nous éliminerions d'abord les fours incompatibles avec le lieu
et l'énergie disponibles. Nous regarderions ensuite le diamètre et le poids,
avant de payer pour un débit ou des fonctions dont l'usage reste hypothétique.

Si l'hésitation porte d'abord sur le combustible, l'analyse
[Ooni gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/)
traite cette décision sans la mélanger au choix du modèle. Les codes de preuve
utilisés ici sont expliqués dans [la méthode Four à Nu](/methode/).

Le registre des questions rassemble notamment une hésitation sur le modèle à
choisir pour six convives ([Q-0004](https://www.reddit.com/r/ooni/comments/1q1c57p/which_model_to_buy/)),
une autre sur le gaz ou le multi-combustible
([Q-0015](https://www.reddit.com/r/ooni/comments/1u08c95/confused_on_what_ooni_model_to_buy_500600/))
et une question sur l'usage d'un Koda sur balcon
([Q-0029](https://www.reddit.com/r/ooni/comments/1tis2bd/ooni_12_ok_on_balcony/)).
Ces discussions sont des signaux qualitatifs, pas un sondage représentatif ni
une source de sécurité.

## Ce qui est établi

La [collection Ooni France](https://eu.ooni.com/fr-fr/collections/ovens),
vérifiée le 23 août 2026, présente neuf fours autonomes : cinq Koda, trois Karu
et le Volt 2. Le pack Karu 2 Pro avec brûleur à gaz est un ensemble commercial,
pas un dixième four. Ces faits correspondent à `EV-0001` et `EV-0002`.

| Famille | Énergie et lieu annoncés | Modèles actuels | Diamètre maximal annoncé |
| --- | --- | --- | --- |
| Koda | Propane ; usage extérieur explicitement enregistré pour Koda 2 et Koda 2 Pro | Koda 12, Koda 16, Koda 2, Koda 2 Pro, Koda 2 Max | De 30 à 50 cm selon le modèle |
| Karu | Bois et charbon, propane avec brûleur séparé ; lieu à confirmer dans le manuel de chaque modèle | Karu 12, Karu 2, Karu 2 Pro | De 30 à 40 cm selon le modèle |
| Volt | Électricité, intérieur | Volt 2 | Pizza présentée comme 30 cm |

Les diamètres viennent des pages fabricant `EV-0010`, `EV-0020`, `EV-0030`,
`EV-0040`, `EV-0050`, `EV-0061`, `EV-0070`, `EV-0080` et `EV-0090`. Ils ne
prouvent pas la marge disponible pour tourner une pizza de cette taille.

Le Koda 2 Max est le seul modèle de cet inventaire annoncé pour deux pizzas de
30 cm en même temps. Ses deux zones gaz sont indépendantes, mais le four pèse
43 kg selon `EV-0030` et `EV-0031`. Le Koda 2 Pro est annoncé pour 45 cm et pèse
30 kg selon `EV-0020` et `EV-0021`. Ces chiffres décrivent une capacité et un
encombrement, pas un débit mesuré par Four à Nu.

## Comment réduire la gamme

| Contrainte déclarée | Modèle ou famille à examiner | Ce que la donnée ne prouve pas |
| --- | --- | --- |
| Cuisson intérieure | [Ooni Volt 2](/ooni/volt-2/) | Uniformité, consommation et fiabilité |
| Gaz extérieur, pizza annoncée jusqu'à 35 cm, poids publié de 16 kg | [Ooni Koda 2](/ooni/koda-2/) | Facilité pour un débutant et débit en série |
| Gaz extérieur, pizza annoncée jusqu'à 45 cm, poids publié de 30 kg | [Ooni Koda 2 Pro](/ooni/koda-2-pro/) | Gain pratique face au Koda 2 |
| Deux zones gaz et deux pizzas de 30 cm annoncées | [Ooni Koda 2 Max](/ooni/koda-2-max/) | Débit répété et prise en main |
| Bois ou charbon, format annoncé autour de 30 cm | [Ooni Karu 2](/ooni/karu-2/) | Avantage gustatif et temps de chauffe de référence |
| Bois ou charbon, pizza annoncée jusqu'à 40 cm | [Ooni Karu 2 Pro](/ooni/karu-2-pro/) | Performance face au Koda 2 Pro |

Cet ordre ne préjuge ni de la qualité de cuisson, ni de la consommation, ni de
la durabilité.

## Ce que montrent les sources tierces

Les essais tiers montrent surtout des résultats dépendants des conditions. Sur
le Koda 2 Max, La French Pizza relève une montée difficile lors d'une journée
très venteuse ([EV-0330, à 3:20](https://www.youtube.com/watch?v=o424Pz0WbyM&t=200s)),
puis des soles à 440 °C à gauche et 412 °C à droite après environ 25 minutes lors
d'une seconde journée annoncée sans vent ([EV-0331, à 3:46](https://www.youtube.com/watch?v=o424Pz0WbyM&t=226s)).
La source déclare avoir acheté son four et utilise des liens affiliés.

Dans une autre vidéo, Julien Serri, ambassadeur Ooni avec affiliation et code
promotionnel, affiche 400 °C après 23 min 40 s sur le même modèle
([EV-0300, à 10:46](https://www.youtube.com/watch?v=yBCZ_Mxh3FI&t=646s)).
La pâte, l'utilisateur et l'environnement ne sont pas normalisés. Ces relevés
ne doivent donc pas être moyennés ou transformés en temps de chauffe de
référence.

## Ce qui reste à vérifier

- la place réellement nécessaire autour de chaque four et les règles locales de
  sécurité, notamment sur un balcon ;
- la marge de manipulation autour d'une pizza au diamètre maximal annoncé ;
- le débit sur plusieurs pizzas avec un protocole et une pâte constants ;
- la consommation de gaz, de bois ou d'électricité dans des conditions
  comparables ;
- le coût complet avec table, pelle, thermomètre, housse et brûleur éventuel ;
- la fiabilité et la disponibilité des pièces sur plusieurs années.

## Limites de cette analyse

Les mesures tierces restent attribuées à leurs auteurs et à leurs sessions.
Elles ne suivent pas un protocole commun à toute la gamme. L'inventaire peut
aussi changer lorsque Ooni ajoute ou retire un modèle. La date de vérification
doit donc accompagner toute utilisation de cette page.
