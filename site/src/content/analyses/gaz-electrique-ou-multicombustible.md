---
articleId: OONI-004
brand: ooni
title: Ooni gaz, électrique ou multi-combustible ?
description: "Koda au gaz, Karu au bois ou charbon, Volt 2 électrique : les différences établies pour choisir selon le lieu et les gestes acceptés."
summary: Le Volt 2 est prévu pour l'intérieur. Dehors, Koda donne une commande directe du gaz, tandis que Karu ajoute la gestion du bois ou du charbon et un brûleur gaz optionnel.
status: publishable
type: decision
author: magali
publishedAt: 2026-08-24
updatedAt: 2026-08-24
indexable: true
image:
  src: /images/articles/ooni-energies-volt-2-1600.webp
  alt: "Intérieur éclairé et commandes tactiles du four électrique Ooni Volt 2"
  caption: "Photogramme de l’intérieur et des commandes du Ooni Volt 2 — Source : Boulangerie Pas à pas, passage 02:23."
  assetId: AS-2002
evidenceIds: [EV-0001, EV-0010, EV-0020, EV-0061, EV-0070, EV-0090, EV-0091, EV-0260, EV-0262, EV-0340, EV-0370, EV-0371, EV-0373, EV-0409]
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - FAN-INF
limitations:
  - Aucun protocole commun ne compare les trois énergies dans les mêmes conditions.
  - Les dégustations tierces relevées ne sont ni aveugles ni répétées.
  - Les règles de sécurité propres au logement et au raccordement restent à vérifier.
  - Le corpus ne permet pas d'établir une consommation ou une performance de cuisson comparables entre les trois énergies.
---

## Notre lecture en bref

Le Volt 2 est le choix documenté pour l'intérieur. Pour l'extérieur, Koda
correspond à une commande directe du propane. Karu accepte bois et charbon,
avec un brûleur propane vendu séparément sur les modèles documentés. Le corpus
ne permet pas de déclarer une énergie supérieure aux autres pour le goût ou la
performance.

Nous commencerions toujours par le lieu autorisé et les gestes acceptés. Le
choix du combustible vient avant la recherche d'un modèle précis : une énergie
mal adaptée au quotidien annule vite l'intérêt d'un four plus performant sur le
papier.

Une fois l'énergie choisie, le guide
[Quel four Ooni choisir en 2026 ?](/ooni/quel-four-ooni-choisir/) départage les
modèles par diamètre, poids et capacité annoncée. La [méthode Four à Nu](/methode/)
définit les codes de preuve et la séparation entre données fabricant, mesures
tierces, observations et inférences éditoriales.

Les questions publiques portent notamment sur le choix entre Koda, Karu et
granulés ([Q-0015](https://www.reddit.com/r/ooni/comments/1u08c95/confused_on_what_ooni_model_to_buy_500600/)),
sur le bois face au gaz
([Q-0020](https://www.reddit.com/r/ooni/comments/1scw7t0/advice_between_karu_12_or_koda_12/))
et sur Koda 2 face à Karu 2
([Q-0025](https://www.reddit.com/r/ooni/comments/1tn0pwf/ooni_koda_2_vs_karu_2_buying_a_1st_pizza_oven_for/)).
Elles orientent cette page mais ne prouvent aucune différence de performance.

## Ce qui est établi

| Famille | Énergie annoncée | Lieu annoncé | Commande décrite |
| --- | --- | --- | --- |
| [Koda](/ooni/koda-2/) | Propane | Extérieur explicitement enregistré pour Koda 2 et Koda 2 Pro | Molette de gaz |
| [Karu](/ooni/karu-2/) | Bois et charbon, propane avec accessoire | À confirmer dans le manuel du modèle | Gestion du feu ou brûleur à gaz séparé |
| [Volt 2](/ooni/volt-2/) | Électricité, 220 à 240 V et 1 600 W | Intérieur | Programmes et réglages électriques |

La collection fabricant établit la composition de la gamme (`EV-0001`). Les
pages Koda 2 et Koda 2 Pro les présentent comme des fours extérieurs au propane
(`EV-0010`, `EV-0020`). Cette preuve ne doit pas être étendue aux autres Koda
sans contrôle de leur manuel. Les Karu 2 et Karu 2 Pro acceptent le bois et le
charbon, avec un brûleur au propane vendu séparément (`EV-0061`, `EV-0070`). Le
Volt 2 est présenté comme un four électrique intérieur, avec une plage annoncée
de 20 à 450 °C (`EV-0090`, `EV-0091`).

Ces caractéristiques permettent d'écarter une famille incompatible avec le
lieu ou le combustible disponible. Elles ne mesurent pas la facilité réelle,
le coût d'usage ou la régularité.

## Ce que les sources tierces permettent de dire

Une comparaison de Barbecue Way Of Life entre un Koda 16 à gaz et un four à bois
Branner montre un démarrage plus rapide du gaz dans cette session, puis des
températures de sole annoncées comme proches plus tard
([EV-0370, à 4:03](https://www.youtube.com/watch?v=fSADscR71oo&t=243s) et
[EV-0371, à 6:10](https://www.youtube.com/watch?v=fSADscR71oo&t=370s)).
Les instants ne sont pas normalisés et un seul exemplaire de chaque four est
utilisé. Les présentateurs disent ne pas percevoir de différence de goût
([EV-0373, à 9:49](https://www.youtube.com/watch?v=fSADscR71oo&t=589s)), mais
la dégustation n'est ni aveugle ni répétée. Ce passage ne prouve donc pas
l'équivalence gustative du bois et du gaz.

Sur le Volt 2, Got2EatPizza montre des préréglages napolitain, new-yorkais et
pan pizza, puis une utilisation manuelle
([EV-0260, à 2:54](https://www.youtube.com/watch?v=IyRNCq67iTA&t=174s)).
Elle utilise aussi un thermomètre infrarouge et montre des cuissons avec peu de
rotations ([EV-0262, à 4:17](https://www.youtube.com/watch?v=IyRNCq67iTA&t=257s)).
La source utilise des liens affiliés et ne précise pas l'origine de son unité.
Aucune mesure d'uniformité n'est disponible dans cette vidéo.

Boulangerie Pas à pas, en collaboration avec Ooni et avec des liens marchands,
relève environ 315 °C sur la sole après vingt minutes lorsque le four est réglé
initialement à 270 °C
([EV-0340, à 2:16](https://www.youtube.com/watch?v=pwtuBDX-xI8&t=136s)).
Le réglage, l'affichage, la sole et la voûte sont des mesures différentes. Ce
relevé isolé ne définit pas la précision du Volt 2.

## Ce qui reste à vérifier avant de choisir

- l'autorisation et les dégagements nécessaires dans le lieu réel ;
- le raccordement au gaz et le détendeur adaptés à la France ;
- le temps consacré à l'allumage, à la surveillance et au nettoyage du bois ;
- la consommation par session avec une cible de température commune ;
- la récupération de la sole entre plusieurs pizzas ;
- l'effet du vent sur les fours extérieurs ;
- la réparabilité et le coût d'une panne électrique ou d'un composant gaz.

## Limites de cette analyse

Aucune source du registre ne compare un Koda, un Karu et un Volt 2 avec la même
pâte, les mêmes instruments, la même température ambiante et plusieurs
répétitions. Les préférences de goût relevées restent personnelles. La présente
page décrit donc les contraintes et les gestes observés. Elle ne tranche pas la
performance des trois énergies.
