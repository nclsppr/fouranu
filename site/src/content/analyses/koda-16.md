---
articleId: OONI-014
title: "Ooni Koda 16 : brûleur en L, format 40 cm et mesures"
description: Le Koda 16 est annoncé pour 40 cm et pèse 18,2 kg. Une session tierce compare sa chauffe au bois, sans établir un avantage général du gaz.
summary: Le Koda 16 est un four à gaz de 40 cm avec brûleur en L. Une seule comparaison tierce documente sa chauffe, sa cuisson et sa chaleur résiduelle.
status: publishable
type: model
model: Ooni Koda 16
publishedAt: 2026-08-23
updatedAt: 2026-08-23
indexable: true
evidenceTypes:
  - FAB
  - T-MES
  - T-OBS
  - FAN-INF
limitations:
  - Les mesures tierces proviennent d'une seule session et d'un seul créateur.
  - La version exacte du four Branner comparé n'est pas établie dans le registre.
  - Les instants de comparaison, les architectures et les combustibles ne sont pas normalisés.
  - La dégustation citée porte sur une pizza par four et n'est pas documentée comme aveugle.
  - Deux dimensions métriques publiées par le fabricant ont une unité incohérente et ne sont pas corrigées par supposition.
---

## Réponse courte

Le Koda 16 de première génération est un four à gaz annoncé pour des pizzas de
40 cm. Il utilise un brûleur en L, une pierre de 15 mm et pèse 18,2 kg. Une
session tierce compare sa montée en température, une cuisson et sa chaleur
résiduelle à celles d'un four à bois. Cette session décrit ce qui s'est produit
ce jour-là. Elle ne permet pas d'établir un avantage général du gaz, une
température de référence ou une différence de goût.

Pour comparer les formats Koda, voir aussi la fiche du
[Koda 12](/ooni/koda-12/). Le dossier
[Ooni gaz, électrique ou multi-combustible](/ooni/gaz-electrique-ou-multicombustible/)
traite les contraintes propres à chaque énergie. La
[méthode Four à Nu](/methode/) définit les niveaux de preuve et leur portée.

## Ce qui est établi par le fabricant

La [page française du Koda 16](https://eu.ooni.com/fr-fr/products/ooni-koda-16)
le présente comme un four à gaz pour des pizzas de 40 cm, avec un brûleur en L
et une pierre de 15 mm (`EV-0050`).

Le fabricant affiche un poids de 18,2 kg. Son tableau emploie toutefois l'unité
`m` pour deux dimensions dont les valeurs impériales décrivent un four
domestique (`EV-0051`). `EV-0101` classe cette incohérence comme une inférence
Four à Nu à forte confiance. Aucune conversion supposée n'est publiée ici. Les
dimensions exactes doivent être confirmées avant de choisir une table.

Ooni annonce 500 °C en 20 minutes et une pizza en 60 secondes (`EV-0052`). Ces
deux valeurs restent des annonces fabricant.

## Questions d'achat reliées

Les questions publiques opposent d'abord le Koda 12 au Koda 16 sur le surcoût
et les différences ressenties pendant la cuisson
([Q-0001 et Q-0002](https://www.reddit.com/r/ooni/comments/1unwo9l/koda_12_vs_koda_16_advice/)).
Le registre ne contient pas de prix daté ni de protocole commun pour trancher ce
rapport entre coût et usage.

D'autres acheteurs interrogent la compatibilité d'un détendeur GPL
([Q-0017](https://www.reddit.com/r/ooni/comments/1u08c95/confused_on_what_ooni_model_to_buy_500600/)),
le risque de surcuisson lié au brûleur en L
([Q-0047](https://www.reddit.com/r/ooni/comments/1unwo9l/comment/ovtxq54/)),
puis la température face à un Karu et la sécurité d'une porte ajoutée
([Q-0049 et Q-0050](https://www.reddit.com/r/ooni/comments/1dpy9jy/koda_16_or_karu_12g/)).
Ces questions justifient les points à vérifier. Les preuves rattachées ne
répondent ni à la compatibilité du détendeur ni à la sécurité d'une modification
de porte.

## Une seule session comparative tierce

La source Barbecue Way Of Life compare ce Koda 16 à un four Branner dont la
version exacte n'est pas établie. Le registre signale un code promotionnel, des
liens marchands et aucun prêt ou sponsoring déclaré. Ces relations restent
attachées à tous les passages suivants.

| Passage | Conditions enregistrées | Observation ou mesure attribuée |
| --- | --- | --- |
| [EV-0370, de 04:03 à 04:35](https://www.youtube.com/watch?v=fSADscR71oo&t=243s) | Démarrages gaz et bois, thermomètre infrarouge, un exemplaire par four | Après trois minutes, les relevés centraux annoncés sont d'environ 155 °C pour le Koda et 93 °C pour le Branner. |
| [EV-0371, de 06:10 à 07:18](https://www.youtube.com/watch?v=fSADscR71oo&t=370s) | Même pâte, instants exacts non normalisés, une session | Plus tard, les deux soles sont annoncées autour de 233 à 241 °C. Les présentateurs observent que le Branner rattrape son démarrage plus lent. |
| [EV-0372, de 07:36 à 09:18](https://www.youtube.com/watch?v=fSADscR71oo&t=456s) | Une pizza par four, farine T00, hydratation de 60 %, environ 30 heures au froid | Les présentateurs jugent les dessous et colorations proches. Ils trouvent le Koda plus simple à maintenir à température et surveillent les bûchettes du Branner. |
| [EV-0373, de 09:49 à 10:13](https://www.youtube.com/watch?v=fSADscR71oo&t=589s) | Une pizza par four, dégustation non documentée comme aveugle | Les dégustateurs disent ne pas percevoir de différence entre bois et gaz dans ces cuissons courtes. |
| [EV-0374, de 10:11 à 10:57](https://www.youtube.com/watch?v=fSADscR71oo&t=611s) | Fours éteints, architectures et combustibles différents | Environ quinze minutes après l'arrêt, la sole du Koda est annoncée à 150 °C et celle du Branner à 230 °C. |

Le premier relevé montre un départ plus rapide du Koda dans cette session. Le
relevé suivant montre un rapprochement des températures. Les instants ne sont
pas normalisés et la version du Branner reste indéterminée. Il serait donc
trompeur de transformer ces nombres en courbe de chauffe comparative ou en
conclusion générale sur le gaz et le bois.

## Ce qui reste à vérifier

- les dimensions métriques exactes du four ;
- la compatibilité du raccord et du détendeur avec une installation donnée ;
- la répartition de chaleur autour du brûleur en L ;
- la chauffe et la récupération sur plusieurs pizzas identiques ;
- la consommation de gaz avec une méthode déclarée ;
- la sécurité de toute modification de la façade ou de la porte ;
- une comparaison du goût documentée à l'aveugle avec plusieurs répétitions.

## Limites de cette fiche

Le corpus autorise une description du Koda 16 et de la session comparative
citée. Il ne mesure pas la facilité d'usage moyenne, la durabilité, le coût
complet ou un avantage de goût. Les conclusions de la vidéo restent celles de
ses auteurs, dans leurs conditions et avec leurs relations commerciales
déclarées.
