---
articleId: OONI-010
title: "Ooni Koda 2 : dimensions et mesures tierces"
description: Le Koda 2 est annoncé pour 35 cm et pèse 16 kg. Trois protocoles tiers de chauffe et une incohérence de dimensions sont documentés.
summary: Le Koda 2 est annoncé pour 35 cm et pèse 16 kg. Les trois temps de chauffe tiers ne sont pas comparables, donc aucun temps de référence n'est retenu.
status: publishable
type: model
model: Ooni Koda 2
publishedAt: 2026-08-23
updatedAt: 2026-08-23
indexable: true
image: /images/articles/koda-2-photogramme-1600.webp
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - FAN-INF
limitations:
  - Les trois protocoles de chauffe publiés ne sont pas directement comparables.
  - Les dimensions impériales et métriques de la page fabricant sont incohérentes.
  - La consommation ne repose que sur une pesée tierce peu précise.
---

## Réponse courte

Le Koda 2 de deuxième génération est un four extérieur au propane annoncé pour
des pizzas de 35 cm. Son poids publié est de 16 kg. Trois sources tierces
atteignent plus de 400 °C sur la sole, mais dans des climats, à des points de
mesure et selon des rythmes différents. Aucun temps de chauffe unique n'est
donc retenu.

Cette fiche répond uniquement aux questions propres au Koda 2. Pour choisir
dans toute la gamme, voir [quel four Ooni choisir](/ooni/quel-four-ooni-choisir/).
Pour arbitrer le combustible, voir
[Ooni gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/).
Les codes `FAB`, `T-MES`, `T-OBS` et `FAN-INF` sont définis dans
[la méthode Four à Nu](/methode/).

<figure class="article-media">
  <picture>
    <source media="(max-width: 48rem)" srcset="/images/articles/koda-2-photogramme-960.webp" />
    <img src="/images/articles/koda-2-photogramme-1600.webp" width="1600" height="900" alt="Ooni Koda 2 gris vu de face, posé dehors, avec sa pierre visible" fetchpriority="high" />
  </picture>
  <figcaption>
    <strong>Le Koda 2 vu de face.</strong> Photogramme utilisé avec l'autorisation de Pala Pizza. Source : <a href="https://www.youtube.com/watch?v=wPschLywLbI&t=8s">Pala Pizza, à 0:08</a>.
  </figcaption>
</figure>

## Ce qui est établi par le fabricant

La [page française du Koda 2](https://eu.ooni.com/fr-fr/products/ooni-koda-2)
le présente comme un four extérieur au propane pour des pizzas jusqu'à 35 cm
(`EV-0010`). Elle affiche un poids de 16 kg, une pierre de 15 mm et des
dimensions métriques de 545 × 472 × 333 mm (`EV-0011`).

La même page associe ces dimensions à 21,5 × 28,4 × 13,1 pouces. Les deux séries
ne sont pas toutes équivalentes. `EV-0100` conserve cette anomalie et interdit
de corriger silencieusement l'une des valeurs. Les dimensions doivent être
confirmées avant de choisir une table ou un emplacement.

Ooni annonce 500 °C et une pizza napolitaine en 60 secondes (`EV-0012`). Ces
valeurs restent des annonces fabricant.

## Mesures tierces de chauffe

Trois sessions illustrent l'effet des conditions :

| Source | Conditions déclarées | Relevé |
| --- | --- | --- |
| [Pala Pizza, EV-0202](https://www.youtube.com/watch?v=wPschLywLbI&t=99s) | Pluie, air à 56 °F, thermomètre infrarouge | Plus de 800 °F sur la sole après 20 minutes, environ 900 °F après 30 minutes |
| [The Technology Man, EV-0210](https://www.youtube.com/watch?v=BvUVIWEBmVk&t=195s) | Air à 2 °C, four initialement enneigé, centre relevé toutes les cinq minutes | 400 °C à 25 minutes, plateau proche de 450 °C à 35 minutes |
| [Julien Serri, EV-0311 et EV-0312](https://www.youtube.com/watch?v=o3RYV6eoGFU&t=363s) | Propane, pleine puissance, une session | Plus de 400 °C après environ 12 minutes, environ 435 °C après 16 min 54 s |

Pala Pizza utilise une unité reçue gratuitement et des liens affiliés. The
Technology Man utilise des liens affiliés, sans prêt ou sponsoring détecté dans
le registre. La vidéo de Julien Serri est une promotion payée publiée par un
marchand. Les températures, points de mesure et environnements diffèrent. Une
moyenne serait trompeuse.

## Observations de cuisson et d'usage

Pala Pizza montre une pizza cuite en environ 60 secondes après un lancement
annoncé autour de 800 °F
([EV-0203, à 1:57](https://www.youtube.com/watch?v=wPschLywLbI&t=117s)).
Une seule pizza et une pâte poolish à 65 % d'hydratation sont documentées. Dans
une session hivernale distincte, The Technology Man tourne une pizza de
12 pouces après environ 30 secondes puis toutes les 15 secondes, pour une
cuisson proche de deux minutes
([EV-0211, à 4:22](https://www.youtube.com/watch?v=BvUVIWEBmVk&t=262s)).

Julien Serri observe que le brûleur arrière demande davantage de rotations
qu'une flamme en L ou en U
([EV-0313, à 6:25](https://www.youtube.com/watch?v=o3RYV6eoGFU&t=385s)).
Pala Pizza relève aussi une garde arrière qui rend le passage d'une brosse
difficile à chaud dans sa configuration
([EV-0201, à 1:29](https://www.youtube.com/watch?v=wPschLywLbI&t=89s)).
Ces observations dépendent du geste, de la table et d'un seul exemplaire par
source.

<figure class="article-media">
  <picture>
    <source media="(max-width: 48rem)" srcset="/images/articles/koda-2-brosse-esquisse-960.webp" />
    <img src="/images/articles/koda-2-brosse-esquisse-1600.webp" width="1600" height="900" alt="Esquisse de l'intérieur du Koda 2 montrant une brosse contrainte par la faible garde arrière" loading="lazy" />
  </picture>
  <figcaption>
    <strong>Interprétation graphique de la garde arrière.</strong> Illustration assistée par IA d'après un photogramme de Pala Pizza, utilisé avec autorisation. Elle aide à situer l'observation et ne constitue pas une preuve de performance. Source : <a href="https://www.youtube.com/watch?v=wPschLywLbI&t=96s">Pala Pizza, à 1:36</a>.
  </figcaption>
</figure>

## Ce qui reste à vérifier

- les dimensions exactes et les dégagements nécessaires ;
- la répartition de chaleur sur toute la pierre ;
- la récupération entre plusieurs pizzas identiques ;
- le comportement au vent et à différentes températures ambiantes ;
- la consommation de gaz avec une méthode plus précise ;
- la durée de vie de l'allumage, du brûleur et de la pierre.

## Limites de cette fiche

Le corpus autorise une description des spécifications et de plusieurs sessions
tierces. Il ne permet pas de convertir ces sessions en temps de chauffe de
référence, en note ou en recommandation générale.

Si 35 cm ne répondent pas au besoin annoncé, les fiches du
[Koda 2 Pro de 45 cm](/ooni/koda-2-pro/) et du
[Koda 2 Max à deux zones](/ooni/koda-2-max/) documentent les formats supérieurs
sans les présenter comme des améliorations automatiques.
