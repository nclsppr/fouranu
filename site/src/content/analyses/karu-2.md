---
articleId: OONI-015
title: "Ooni Karu 2 : bois, charbon ou gaz"
description: Le Karu 2, anciennement Karu 12G, accepte bois, charbon et un brûleur gaz séparé. Format 30 cm, poids et mesures tierces sont documentés.
summary: Le Karu 2 accepte le bois et le charbon, avec un brûleur propane séparé. Les deux sessions tierces ne permettent pas de fixer un temps de chauffe.
status: researching
type: model
model: Ooni Karu 2
updatedAt: 2026-08-23
indexable: false
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - J-INF
limitations:
  - Four à Nu n'a pas testé ce modèle.
  - Une source vidéo utilise encore le nom Karu 12G.
  - Les sessions tierces diffèrent par l'air, le combustible, la pâte et les instruments.
  - Le tableau fabricant duplique un libellé de dimension.
---

## Réponse courte

Le Karu 2, anciennement Karu 12G, est le modèle Ooni actuel documenté ici pour
qui veut utiliser le bois ou le charbon dans un format annoncé autour de 30 cm.
Un brûleur vendu séparément permet aussi d'utiliser le propane. Le corpus
établit cette compatibilité et un poids de 15,3 kg, mais pas un avantage de goût
ni un temps de chauffe de référence.

Cette fiche répond aux questions propres au Karu 2. Pour choisir dans toute la
gamme, voir [quel four Ooni choisir](/ooni/quel-four-ooni-choisir/). Pour
comparer les contraintes du gaz, de l'électricité et des combustibles solides,
voir [Ooni gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/).
Les codes de preuve sont définis dans [la méthode Four à Nu](/methode/).

## Identité et caractéristiques établies

Ooni précise que le Karu 12G porte désormais le nom Karu 2 (`EV-0060`). Cette
continuité explique pourquoi une vidéo antérieure peut documenter le matériel
actuel sous son ancien nom.

La [page française du Karu 2](https://eu.ooni.com/fr-fr/products/ooni-karu-2)
indique bois et charbon, ou propane avec un brûleur vendu séparément. Elle
annonce des pizzas de 30 cm et plus, un poids de 15,3 kg et une pierre de 15 mm
(`EV-0061`).

Le fabricant annonce 450 °C en 15 minutes, 500 °C au maximum et une pizza en
60 secondes (`EV-0062`). Four à Nu n'a pas reproduit ces annonces.

Le tableau métrique de la page utilise deux fois le libellé largeur pour des
axes distincts (`EV-0063`). `EV-0102` conserve l'anomalie sans attribuer un axe
supposé. Les dimensions exactes doivent être confirmées avant le choix d'une
table.

## Ce que montrent les sessions tierces

Pala Pizza utilise un Karu 12G acheté par le créateur et des liens affiliés. La
[séquence de montage, EV-0240](https://www.youtube.com/watch?v=kkpPK3gsqko&t=19s)
montre la cheminée, la pierre, la porte et le brûleur arrière. Le montage
complet n'est pas chronométré.

Dans cette session à 68 °F, des relevés toutes les cinq minutes atteignent
950 °F sur la sole
([EV-0241, à 1:05](https://www.youtube.com/watch?v=kkpPK3gsqko&t=65s)). Les
autres fours du graphique ont été testés à 56 °F, ce qui interdit une
comparaison directe. Deux pizzas sont ensuite cuites en 75 et 82 secondes avec
des pâtes et des températures de lancement différentes
([EV-0242, à 1:35](https://www.youtube.com/watch?v=kkpPK3gsqko&t=95s) et
[EV-0243, à 1:56](https://www.youtube.com/watch?v=kkpPK3gsqko&t=116s)).

Pour un style new-yorkais, le créateur juge un lancement à 664 °F trop chaud,
puis cuit une seconde pizza quatre minutes après un lancement à 534 °F avec une
gestion de flamme différente
([EV-0244, à 2:41](https://www.youtube.com/watch?v=kkpPK3gsqko&t=161s)). Ces
deux essais décrivent ses réglages. Ils ne définissent pas une plage optimale
générale.

Dans une autre vidéo, Julien Serri relève environ 350 °C après 40 minutes au
bois
([EV-0301, à 11:40](https://www.youtube.com/watch?v=yBCZ_Mxh3FI&t=700s)). Le
combustible n'est pas pesé et l'auteur est ambassadeur Ooni, affilié et
détenteur d'un code promotionnel. Les conditions sont trop différentes pour
rapprocher ce relevé des 950 °F précédents.

## Ce qui reste à vérifier

- les dimensions exactes et l'espace nécessaire à la cheminée ;
- la masse et la fréquence d'ajout du bois ou du charbon ;
- le temps de chauffe avec une cible, un combustible et un climat fixés ;
- le passage réel entre combustible solide et brûleur au propane ;
- la récupération de la sole entre plusieurs pizzas ;
- le nettoyage et les résidus selon le combustible.

## Limites de cette fiche

Le registre contient plusieurs mesures, mais aucun protocole commun. Il ne
permet pas d'attribuer au Karu 2 un temps de chauffe, une consommation ou un
avantage gustatif de référence. La polyvalence décrite est une compatibilité
matérielle annoncée. Son intérêt pratique reste à observer.

Le [Karu 2 Pro](/ooni/karu-2-pro/) ajoute un format annoncé pour 40 cm et une
instrumentation différente. Sa fiche traite ces contraintes sans supposer un
gain de performance face au Karu 2.
