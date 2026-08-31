# État vérifié de Four à Nu

Ce fichier décrit la réalité observée. Les capacités futures restent dans
[`ROADMAP.md`](ROADMAP.md).

## Référence

| Champ | Valeur |
| --- | --- |
| Vérifié le | 2026-08-31 |
| Par | checkout de livraison, CI du SHA exact, sondes HTTP et navigateur sur le domaine public |
| Branche | `main` pour la production |
| Candidat V1 publié | `c5da961ceabcd021c5501d1cbda3ddb00c57c2ee` |
| Livraison V1 | Poussée sur `origin/main` ; [run GitHub Actions `32716795972`](https://github.com/nclsppr/fouranu/actions/runs/32716795972) vert pour `Verify` et `deploy-cloudflare` |
| Tranche post-V1 publiée | SHA applicatif `eb12619007191c82d963017f598b462ca54bdc51` ; [run GitHub Actions `32722048541`](https://github.com/nclsppr/fouranu/actions/runs/32722048541) vert pour `Verify` et `deploy-cloudflare` |
| Tranche Gozney et Halo publiée | SHA applicatif `e96d3ac265dfb24b14cf4dc1461a1985cdba50ac` ; [run GitHub Actions `32736959106`](https://github.com/nclsppr/fouranu/actions/runs/32736959106) vert pour `Verify` et `deploy-cloudflare` |
| Harmonisation éditoriale publiée | SHA applicatif `87580db54eb90a60a6f68c81828f80dc35929c3d` ; [run GitHub Actions `32744201126`](https://github.com/nclsppr/fouranu/actions/runs/32744201126) vert pour `Verify` et `deploy-cloudflare` |
| Tranche Arc Lite, Tread et Halo publiée | SHA applicatif `6511eccf4971d962f6916dc8ab1fc74742e8f321` ; [run GitHub Actions `32750836887`](https://github.com/nclsppr/fouranu/actions/runs/32750836887) vert pour `Verify` et `deploy-cloudflare` |
| Gamme Gozney et appels d'achat publiés | SHA applicatif `bdd647b38fde6de2f8db01092c6adba5e08a7b35` ; [run GitHub Actions `32762552261`](https://github.com/nclsppr/fouranu/actions/runs/32762552261) vert pour `Verify` et `deploy-cloudflare` |
| Passe SEO, partage et favicon publiée | SHA applicatif `a6e8f622b13db50b852e8e71c4da57beb30f8dd7` ; [run GitHub Actions `32886732924`](https://github.com/nclsppr/fouranu/actions/runs/32886732924) vert pour `Verify` et `deploy-cloudflare` |
| Ambition de tests et promesse SEO publiées | SHA applicatif `e7a6223f9a9e61052b1a99e7bf60a037c8fb8e61` ; [run GitHub Actions `32979871986`](https://github.com/nclsppr/fouranu/actions/runs/32979871986) vert pour `Verify` et `deploy-cloudflare` |
| Signature du footer publiée | SHA applicatif `9677694683644985180f96608a943f8adeb6cb2e` ; [run GitHub Actions `32982081071`](https://github.com/nclsppr/fouranu/actions/runs/32982081071) vert pour `Verify` et `deploy-cloudflare` |
| Profils auteur et signatures incarnées publiés | SHA applicatif `80c2f76c1bd939b521e90f529b5e8d525c200990` ; [run GitHub Actions `33087428591`](https://github.com/nclsppr/fouranu/actions/runs/33087428591) vert pour `Verify` et `deploy-cloudflare` |
| Portraits auteur publiés | SHA applicatif `6922c478743764574eed6080294d255f0c4d8170` ; [run GitHub Actions `33091288546`](https://github.com/nclsppr/fouranu/actions/runs/33091288546) vert pour `Verify` et `deploy-cloudflare` |
| Images de tête dégagées publiées | SHA livré `2c087e39f3009f5aa7f6e853baa846f78c87b32a` ; [run GitHub Actions `33094600492`](https://github.com/nclsppr/fouranu/actions/runs/33094600492) vert pour `Verify` et `deploy-cloudflare` |
| Portraits auteur remplacés sans retouche | SHA applicatif `27761ee6d9f3756891ddb3ed43c2e9452bebaf37` ; [run GitHub Actions `33097444182`](https://github.com/nclsppr/fouranu/actions/runs/33097444182) vert pour `Verify` et `deploy-cloudflare` |
| Guides accessoires et affiliation Amazon publiés | SHA applicatif `cdda6ea5031ece85df4bd12e611b39b1ce8f60c1` ; [run GitHub Actions `33319240810`](https://github.com/nclsppr/fouranu/actions/runs/33319240810) vert pour `Verify` et `deploy-cloudflare` ; contrôles publics acquis |
| Passe SEO globale et couverture Amazon par objet publiées | SHA applicatif `d9df7a8418c2b676fe232b177a29bda56be7eca6` ; [run GitHub Actions `33342690035`](https://github.com/nclsppr/fouranu/actions/runs/33342690035) vert pour `Verify` et `deploy-cloudflare` ; contrôles publics acquis |
| Cinq dossiers multimarques Amazon publiés | SHA applicatif `1092e63da3cd84a88148e3360ce1082622371c07` ; [run GitHub Actions `33351620936`](https://github.com/nclsppr/fouranu/actions/runs/33351620936) vert pour `Verify` et `deploy-cloudflare` ; contrôles publics acquis |
| Surface publique | [`https://fouranu.com`](https://fouranu.com), domaine personnalisé Cloudflare actif |

## Candidat trilingue local non publié

La production sert encore uniquement la version française : `/en/`, `/de/` et
leurs routes descendantes répondent `404`. Le candidat isolé
`codex/i18n-fr-en-de-20260831` prépare le français sans préfixe, l'anglais sous
`/en/` et l'allemand sous `/de/`, sans redirection automatique ni changement de
marché.

Le corpus du candidat contient 28 dossiers par langue, soit 84 articles reliés
par le même `articleId`, et 16 pages fixes par langue. Son artefact HTML compte
135 pages : 132 URL indexables et trois 404 localisées. Le sitemap indexable
contient 132 URL et leurs alternates réciproques ; chacun des trois flux RSS
contient 28 entrées et chacun des trois `llms.txt` 38 liens éditoriaux. Les
canonical, `hreflang`, `x-default`, Open Graph et données structurées sont
contrôlés sur les trois contreparties.

Les pages anglaises et allemandes gardent le marché France, Amazon.fr, les
objets commerciaux, les preuves et les limites du dossier français. Elles
n'affichent aucun média éditorial tiers lorsque sa permission linguistique
n'est pas établie et utilisent seulement la carte sociale originale Four à Nu.
Les observations et conditions canoniques conservées en français sont annoncées
comme telles dans le rendu.

Le typage, le build et les 24 contrats du site sont verts. La QA navigateur a
couvert l'accueil allemand, les articles Witt allemand et Sage anglais, la
contrepartie française et une 404 allemande à 320, 360, 768, 1 280 et 1 440 px.
Elle ne relève ni débordement du document, ni image cassée, ni erreur console ;
le sélecteur est visible, nommé, focalisable et relie la page exacte dans les
trois langues.

La gate complète `./scripts/verify.sh` est verte : 32 tests des registres,
catalogue et Markdown, build indexable, candidat Cloudflare à sec et Nimbus
passent ensemble. Le service Compose isolé est sain ; `/health`, `/en/`, `/de/`
et deux articles représentatifs répondent `200`, tandis qu'une route allemande
inconnue répond `404` avec la page localisée.

Ce constat ne vaut pas publication. La relecture humaine de langue et le feu
vert explicite du propriétaire sur le SHA, les 132 URL, les textes, les liens
Amazon.fr, les omissions média et les métadonnées exacts restent les barrières
avant push sur `main`, CI, déploiement, indexation et sondes publiques.

## Cinq dossiers multimarques publiés

La version publiée ajoute cinq dossiers documentaires distincts : Sage Pizzaiolo
BPZ820, Cuisinart CPZ120E, G3 Ferrari Delizia G10006 noir, Ninja Woodfire
OO101EU et Witt ETNA Rotante d'origine. Chaque route est `publishable` et
indexable, conserve ses limites, n'emploie ni note ni balisage d'avis et ne
revendique aucun essai physique Four à Nu. Les cinq ASIN exacts sont enregistrés
avec leur contrôle Amazon.fr daté ; prix, stock et vendeur ne sont pas reproduits
dans le HTML public. L'état d'occasion observé pour le G3 est, lui, signalé
parce qu'il change directement la décision d'achat et doit être relu.

La passe source finale rend visibles les limites de rattachement : le G3 mesuré
par Pizzaschaufel est gris, le retour Ideal Home ne publie pas le SKU Ninja, les
documents Ninja divergent sur puissance et poids, et T3 publie pour Witt un poids
non corroboré. Le manuel Cuisinart exact couvre désormais l'entretien ; le manuel
Witt actif remplace l'ancien lien redirigé et ses données net/brut ne sont pas
moyennées avec les chiffres des revues.

Les cinq en-têtes partent de photographies officielles du modèle exact et
produisent dix WebP sans métadonnées aux formats 1 600 × 900 et 960 × 540. Le
registre média conserve les sources, droits, crédits et empreintes ; la
validation humaine postérieure à la génération a été acquise le 31 août 2026
sur les dix dérivés exacts. L'attestation privée du propriétaire consigne ce
contrôle sans prétendre provenir des fabricants. Le rendu Ninja avait été refusé
puis corrigé lorsque son afficheur avait dérivé de `330` à `370`.

Le build local construit contient 45 pages HTML, 28 dossiers, 268 preuves, 66
questions, 117 médias et 39 objets commerciaux, dont 31 offres Amazon exactes
et huit recherches `not_found`. En mode indexable, il expose 44 URL, 28 entrées
RSS, 30 images de sitemap et 38 liens dans `/llms.txt`. Les signatures se
répartissent entre Nicolas (11), Florian (10) et Magali (7). Typage, build
indexable et les 22 contrats du site sont verts. Les deux variantes de la gate
éditoriale acceptent les dix médias désormais marqués `approved`, preuve privée
comprise. Le propriétaire a confirmé son approbation après présentation des
cinq rendus exacts le 31 août 2026. La gate locale complète, le candidat
Cloudflare et le démarrage Compose sain sont acquis ; le hub et les cinq routes
répondent localement en `200`. Le SHA applicatif
`1092e63da3cd84a88148e3360ce1082622371c07` a ensuite passé les jobs `Verify` et
`deploy-cloudflare` du run `33351620936`. `/release.json` sert ce SHA exact ; le
hub et les cinq routes répondent en `200`, avec canonical indexable et deux CTA
Amazon exacts par dossier. Les dix WebP publics ont le type `image/webp` et le
même SHA-256 que leurs sources locales. Le sitemap contient 44 URL et 30 images,
le RSS 28 entrées et `/llms.txt` 38 liens ; aucun balisage `Review` ou
`AggregateRating` n'est rendu.

## Passe SEO globale et couverture Amazon par objet publiées

Le header place `Accessoires` en premier sur les quarante pages, puis `Fours`,
Ooni, Gozney, Méthode et À propos. L’état actif distingue les hubs de leurs
sous-pages. Les H1 des cinq principales surfaces nomment désormais clairement
leur sujet et tous les titres HTML gardent la marque dans une longueur bornée.
Le hub Accessoires expose `CollectionPage` et `ItemList`, les pages fixes une
date de modification, et le sitemap public contient toujours 39 URL avec
désormais 25 images. `/llms.txt` présente les parcours, la méthode et les 23
dossiers publiés sans destination affiliée.

Le registre commercial couvre 34 produits exacts. Vingt-six offres Amazon.fr
ont une fiche exacte contrôlée — seize accessoires et dix produits Ooni — et
huit recherches restent `not_found` : Koda 2 Max et sept modèles Gozney. Ce
dernier statut ne vaut pas indisponibilité et ne produit ni lien de recherche,
ni substitution. Chaque contrôle conserve le territoire France, sa date, son
statut et une preuve versionnée ; les registres comptent désormais 223 preuves,
66 questions et 107 médias.

Les huit fours Ooni retrouvés et le Halo Core ajoutent un lien Amazon exact à
leur dossier canonique, en plus du lien fabricant. Les 26 objets disponibles
produisent 52 liens dans les deux CTA de leur page ; avec les références déjà
visibles, le build public compte 76 liens Amazon. Tous sont attribués à
`fouranu-21`, portent `rel="sponsored"` et sont précédés par la déclaration
Partenaire Amazon. Les prix et stocks Amazon historiques restent dans le
registre interne et ne sont pas recopiés dans le HTML.

La gate complète `./scripts/verify.sh` est verte le 31 août 2026 : 32 tests des
registres, 22 contrats du site, 40 pages Astro, Compose, le candidat Cloudflare
et Nimbus passent ensemble. La QA navigateur a couvert six pages à 320, 360,
769, 1 024 et 1 280 px sans débordement, ressource cassée ni erreur console. Le
run `33342690035` a vérifié puis déployé le SHA exact ; `/release.json`, les
headers de `/health` et `/release.json`, le header, les CTA, le sitemap et
`/llms.txt` ont ensuite été contrôlés sur `fouranu.com`.

## Guides accessoires publiés

La production ajoute quatre guides documentaires : pelle à pizza, ciseaux
à pizza, thermomètre infrarouge et bacs à pâtons. Chacun compare quatre produits
qui étaient commandables sur Amazon.fr lors de la vérification du 30 août 2026.
Les seize destinations Amazon du catalogue portent l’identifiant partenaire
`fouranu-21`. Les articles déclarent la rémunération possible
et rappellent que prix, vendeur et stock peuvent changer.

Le tirage d'auteur a été réalisé une fois puis enregistré dans les contenus :
Florian signe la pelle, Magali les ciseaux, Nicolas le thermomètre et les bacs.
Les quatre voix restent personnelles mais ne transforment pas les sources en
essais Four à Nu. Quatre compositions de tête et quatre planches comparatives
sont des illustrations génériques originales, déclinées en seize WebP et
rattachées au registre média.

La production contient désormais 40 pages HTML : les 35 surfaces précédentes,
quatre guides accessoires et leur hub. Les cinq nouvelles routes sont
indexables, les guides portent `status: publishable`, le sitemap contient 39
URL, le RSS 23 entrées et le sitemap d'images 23 visuels. Les registres comptent
205 preuves, 66 questions et 107 entrées média.

Le propriétaire a explicitement autorisé le paquet exact, son indexation, son
push sur `main` et son déploiement le 30 août 2026. Une seconde passe des huit
compositions originales ne relève ni marque, ni copie Amazon, ni modèle
commercial exact ; les seize dérivés WebP sont `approved` et possèdent leur URL
de publication.

La gate complète `./scripts/verify.sh` est verte le 30 août 2026 : 32 tests de
registres, 20 contrats du site, 40 pages Astro, contrôle Cloudflare à sec et
Nimbus passent ensemble. Le run `33319240810` vérifie puis déploie l'artefact du
SHA exact. `/release.json`, les cinq routes, les seize WebP, les liens Amazon et
les métadonnées ont été sondés publiquement ; la revue navigateur à 360 et
1 280 px ne montre ni débordement, ni image cassée, ni erreur console.

## Affiliation Amazon et favicons versionnées publiques

La production transforme les URL Amazon visibles au rendu, sans modifier les URL
canoniques de `research/evidence.csv` ni leur copie applicative. Les seize ASIN
du catalogue reçoivent `tag=fouranu-21`. Le lien court Halo Pro fourni par le
propriétaire, `https://amzn.to/4y8lFcC`, redirige vers l’ASIN `B0FPXDMSFZ` avec
ce même tag ; Halo Core conserve sa destination fabricant Ooni. Le build compte
58 occurrences Amazon issues des appels d’achat, tableaux et références : elles
portent toutes `rel="sponsored external noopener"` et une annonce d’affiliation
à proximité. Aucun script, prix automatique ou pixel Amazon n’est chargé.

Le domaine sert désormais `/favicon-fouranu-v2.svg`,
`/apple-touch-icon-v2.png` et les deux icônes PWA versionnées avec leur type MIME
attendu. L'accueil référence ces URL ; les anciennes icônes et `/favicon.ico`
restent disponibles en repli. Leurs octets ont été rapprochés du checkout.

Le service favicon de Google renvoyait encore l’ancien pictogramme noir et blanc
avant cette publication, alors que les actifs publics historiques contenaient
déjà le nouveau four orange. Les nouvelles URL sortent des caches remplacés en
place, mais l’accueil doit encore être soumis une fois à l’inspection d’URL
Google. Le délai de rafraîchissement de Safari et des résultats Google reste
externe, asynchrone et non garanti.

## Images de tête dégagées publiées

Les dix-neuf dossiers et la une placent désormais leur crédit immédiatement
sous l'image, dans le flux de la page et en casse courante. Les pixels du four
ne sont plus recouverts. Chaque attribution reste sous 90 caractères et reprend
la provenance enregistrée ; le composite Halo Core ou Pro conserve le pluriel
correspondant à ses différentes photographies officielles.

La réserve sur la valeur de preuve apparaît une seule fois dans « Comment lire
ce guide ». Les crédits détaillés, sources et timecodes des photogrammes du
corps restent attachés à leurs vues documentaires.

Le SHA `2c087e39f3009f5aa7f6e853baa846f78c87b32a` construit 35 pages et
passe les 30 tests Python, les 19 contrats du site, le check Astro, Compose, le
contrôle Cloudflare à sec, Nimbus et la gate `./scripts/verify.sh`. Le run
`33094600492` a vérifié puis déployé cet artefact exact ; `/release.json`
expose le même SHA.

Les vues locales à 320, 360, 768 et 1 440 px n'ont montré ni chevauchement ni
débordement horizontal. L'accueil, un dossier Ooni et un dossier Gozney ont été
relus dans le navigateur. Après publication, les dix-neuf routes ont été
sondées : chacune expose son crédit canonique, un seul rappel documentaire et
aucune ancienne légende longue. La page Gozney publique à 360 px ne présente ni
chevauchement, ni débordement, ni message console.

## Portraits auteur remplacés sans retouche

Les trois nouvelles photographies carrées fournies par le propriétaire
éditorial servent respectivement Nicolas, Florian et Magali. Les dérivés ne
reçoivent aucun filtre, grain, correction, recadrage ou changement de contenu :
seuls le redimensionnement, la compression WebP et le retrait des métadonnées
sont appliqués. Les JPEG sources restent privés et hors Git.

Les mêmes six URL servent des versions 192 et 800 px dont le poids cumulé passe
de 193 974 à 145 488 octets, soit 25 % de moins. Chaque fichier ne contient
qu'un flux image VP8, sans bloc EXIF, XMP ou ICC. Le cadre des profils devient
carré pour préserver le fichier validé ; l'annuaire et les bulles de 48 px
conservent leurs dimensions et leurs liens d'auteur.

Le SHA applicatif `27761ee6d9f3756891ddb3ed43c2e9452bebaf37`
construit 35 pages et passe les 30 tests Python, les 19 contrats du site, le
check Astro, Compose, le contrôle Cloudflare à sec, Nimbus et la gate
`./scripts/verify.sh`. Le run `33097444182` a vérifié puis déployé cet artefact
exact ; `/release.json` a exposé le même SHA lors du contrôle public.

Les six médias publics répondent 200 en `image/webp` et correspondent octet
pour octet aux empreintes enregistrées. Les trois profils et un article par
auteur ont été relus en production à 360 px : les portraits chargent, les
bulles mènent au bon profil et aucun débordement ou message console n'apparaît.
En local, les profils ont aussi été contrôlés à 768, 769, 1 024, 1 025 et
1 440 px.

## Portraits auteur publiés

Les photographies fournies pour Nicolas, Florian et Magali remplacent les
monogrammes dans l'annuaire et les profils. Six dérivés WebP carrés, en 192 et
800 px, ont été recadrés et harmonisés localement avec un grain léger, sans
génération de traits ni métadonnée de prise de vue. Les trois fichiers sources
restent privés et hors Git ; le registre public conserve seulement leur statut,
leur périmètre, leurs empreintes et celles des dérivés.

Chaque dossier affiche maintenant une bulle de 48 px reliée au profil de sa
personne référente. La gate confirme les dix-neuf correspondances, l'attribution
stable Nicolas 7, Florian 6 et Magali 6, ainsi que les mêmes identifiants et
images `Person` dans l'annuaire, les profils et les schémas `Article`. Les
registres comptent 168 preuves, 66 questions et 91 médias ; les portraits ne
servent pas de preuve produit.

Le SHA applicatif `6922c478743764574eed6080294d255f0c4d8170`
construit 35 pages et passe les 30 tests Python, les 18 contrats du site, le
check Astro, Compose, le contrôle Cloudflare à sec, Nimbus et la gate
`./scripts/verify.sh`. Le run `33091288546` a vérifié puis déployé cet artefact
exact. Le domaine public expose ce SHA dans `/release.json` ; les six médias
répondent 200 en `image/webp` et correspondent octet pour octet aux empreintes
enregistrées.

L'annuaire, les trois profils et les dix-neuf articles ont été sondés en
production. Chaque article public contient exactement le portrait 192 px de son
auteur et renvoie vers son profil. Les vues locales à 320, 360, 768, 1 280 et
1 440 px n'ont montré ni débordement horizontal ni erreur console ; les bulles
restent lisibles à 48 px.

## Profils auteur et signatures incarnées publiés

Nicolas, Florian et Magali disposent chacun d'une page canonique qui présente
leur parcours à partir des éléments fournis pour publication par le propriétaire
éditorial. Cette première tranche utilisait un monogramme explicite avant la
livraison des photographies enregistrée ci-dessus. Le parcours personnel de
Florian reste distinct des essais Four à Nu, dont aucun n'est encore publié.

Un tirage équilibré réalisé une seule fois attribue les dix-neuf dossiers à
Nicolas (7), Florian (6) et Magali (6). Le résultat est enregistré dans les
frontmatters : aucun auteur ne change entre deux builds. La signature indique la
personne référente du dossier ; les sources, conclusions et limites restent
relues collectivement tant qu'aucune validation individuelle n'est enregistrée.

Le SHA applicatif `80c2f76c1bd939b521e90f529b5e8d525c200990`
construit 35 pages et passe les 26 tests Python, les 17 contrats du site, le
check Astro, Compose, le contrôle Cloudflare à sec, Nimbus et la gate
`./scripts/verify.sh`. Le run `33087428591` a vérifié puis déployé cet artefact
exact ; le domaine public a exposé ce SHA dans `/release.json` lors du contrôle.

L'annuaire, les trois profils et trois articles représentatifs répondent 200.
Les profils exposent leur canonique, `ProfilePage` et `Person` ; les articles
Koda 2, Arc XL et Halo Core ou Pro renvoient respectivement vers Magali, Florian
et Nicolas. Le sitemap contient 34 URL. Les vues publiques de l'annuaire à
1 440 px et de Magali à 360 px n'ont montré ni débordement ni erreur console.

## Signature du footer publiée

Le pied de page global affiche désormais « Édité avec amour du pâton par
NicolasPieper.com » sur les 32 pages construites. Le nom renvoie directement à
`https://nicolaspieper.com/`, avec la relation d'auteur et sans paramètre de
suivi. Cette signature reste séparée de la mention légale : elle tient à droite
sur grand écran et repasse sous celle-ci sur mobile.

Le SHA applicatif `9677694683644985180f96608a943f8adeb6cb2e` passe les 26
tests Python, les 17 contrats du site, le check Astro, Compose, le contrôle
Cloudflare à sec, Nimbus et la gate `./scripts/verify.sh`. Le run `32982081071`
a vérifié puis déployé cet artefact exact ; le domaine public expose ce SHA dans
`/release.json`.

Le contrôle public a retrouvé une seule signature et une seule destination
d'auteur sur les 31 URL du sitemap ainsi que sur une vraie réponse 404. La page
d'accueil a aussi été relue à 360 et 1 280 px : la signature est complète, le
lien est correct, la disposition passe de colonne à ligne et aucun débordement
horizontal n'apparaît.

## Ambition d'essais et promesse SEO publiées

Le propriétaire a fixé puis approuvé le 2026-08-26 l'objectif de tester
progressivement les fours à pizza du marché domestique français, en commençant
par les modèles des marques de référence, puis les accessoires utiles et
différents pétrins. L'accueil, sa description SEO et son aperçu social portent
ce cap ; la page À propos rappelle dans le même écran qu'aucun essai mené par
Four à Nu n'est encore publié.

Le SHA applicatif `e7a6223f9a9e61052b1a99e7bf60a037c8fb8e61`
construit 32 pages et passe dix-sept tests de contrat, le check Astro, la gate
`./scripts/verify.sh`, Compose, le contrôle Cloudflare à sec et la revue
navigateur locale. Le run `32979871986` a vérifié puis déployé l'artefact exact.
Le domaine public expose ce SHA dans `/release.json` ; le titre, la description,
le titre social, le H1, le schéma éditeur et la frontière documentaire ont été
retrouvés sur l'accueil, puis la description et la limite d'essai sur la page À
propos.

Les 31 URL du sitemap répondent 200, déclarent leur canonique exacte et restent
indexables. Le sitemap contient dix-neuf images, avec vingt-neuf dates au
2026-08-25 et les deux surfaces modifiées au 2026-08-26. Aucune donnée
`Review` ou `AggregateRating` n'est publiée. Le favicon SVG, le repli racine ICO
16/32/48/64 px, l'icône Apple et les icônes 192/512 px sont servis avec leur bon
type et correspondent octet pour octet aux actifs canoniques. L'accueil à 360
et 1 280 px et la page À propos à 360 px n'ont montré ni débordement, ni image
visible cassée, ni alerte console.

Cette publication n'active pas le programme F06. Les dix-neuf guides publics
restent des analyses documentaires ; aucun protocole, taxonomie de première
main, achat dédié, prêt ou session de test n'est autorisé ou enregistré dans
les sources de vérité. L'ADR-0006 et la phase F06 conservent ces portes. Aucune
demande manuelle de réindexation n'a été effectuée avec cette livraison.

## Passe SEO, partage et favicon publiée

Les 31 pages canoniques ont désormais des titres sociaux resserrés, une image
principale explicite, un schéma `WebPage` et un partage fondé sur leur URL
canonique. Les dix-neuf articles gardent chacun leur image 1600 × 900 et gagnent
un `ImageObject`, une section et une URL d'auteur cohérentes ; Ooni et Gozney
reprennent l'image de leur guide de gamme. Le sitemap indexable annonce les
dix-neuf images d'article.

La carte générique 1200 × 630 emploie le lockup actuel. Le favicon, l'icône
Apple 180 px et les icônes 192/512 px reprennent un four simplifié issu du logo,
à la place de l'ancien signe géométrique. Chaque page canonique se termine par
la feuille de partage native lorsqu'elle est disponible, puis WhatsApp, e-mail
et copie du lien, sans SDK ni requête sociale au chargement.

Le SHA applicatif `a6e8f622b13db50b852e8e71c4da57beb30f8dd7`
construit 32 pages et passe seize tests de contrat, le check Astro, la gate
`./scripts/verify.sh`, Compose, le contrôle Cloudflare à sec et la revue
navigateur locale à 360 et 1 280 px. Le run `32886732924` a ensuite
validé et déployé l'artefact exact. Le domaine public expose ce SHA dans
`/release.json` ; l'accueil, l'article Koda 2, le sitemap, la 404, les nouvelles
icônes et la carte sociale ont été sondés. Les 31 URL, les dix-neuf images du
sitemap, les canonicales, les données structurées et les quatre actions de
partage ont été retrouvées. Le rendu public a enfin été relu à 360 et 1 280 px
sans débordement.

## Gamme Gozney et appels d'achat publiés

La production construit désormais 32 pages HTML, dix-neuf guides, 168 preuves,
66 questions, 85 médias et 31 URL indexables. Les sept fours autonomes du
catalogue Gozney France vérifié le 24 août 2026 sont couverts sans dupliquer les
couleurs ni les packs : un guide de gamme relie les dossiers Arc XL, Arc Lite ou
Tread, Dome XL (Gen 2), Dome (Gen 2), Arc et Roccbox.

Le SHA applicatif `bdd647b38fde6de2f8db01092c6adba5e08a7b35` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur locale. Le run `32762552261` a transmis l'artefact exact à
Cloudflare. Le contrôle public a retrouvé ce SHA dans `/release.json`, les cinq
nouvelles routes et leurs dix médias en 200, 31 URL canoniques et indexables,
ainsi que dix-neuf entrées RSS. Chaque article expose deux appels d'achat vers
les boutiques officielles, séparés par le contenu et accompagnés d'une mention
explicite d'absence de rémunération. Le parcours Gozney a aussi été relu à 360
et 1 440 px sans débordement, image cassée ni erreur console.

## Tranche Arc Lite, Tread et Halo publiée

La production construit désormais 27 pages HTML, quatorze guides, 155 preuves,
62 questions, 75 médias et 26 URL indexables. Elle ajoute une décision d'achat
entre Gozney Arc Lite et Tread, puis approfondit le comparatif Halo Core / Halo
Pro sur les petites fournées et la température finale de pâte. Les deux vues
Gozney partent de photographies officielles stylisées et autorisées.

Le SHA applicatif `6511eccf4971d962f6916dc8ab1fc74742e8f321` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur locale. Le run `32750836887` a transmis l'artefact exact à
Cloudflare. Le contrôle public a retrouvé ce SHA dans `/release.json`, les deux
articles et les quatre nouveaux médias en 200, 26 URL dans le sitemap et
quatorze entrées RSS. Les articles ont aussi été relus à 360 et 1 280 px sans
débordement, image cassée, relation commerciale brute ni erreur console.

## Harmonisation éditoriale publiée

Les treize guides répondent désormais avec une voix plus directe et
accueillante, sans transformer les observations tierces en essai Four à Nu.
Les onze anciens dossiers Ooni s'ouvrent sur une composition fidèle issue d'une
photo officielle du fabricant ; leur ancienne vue documentaire vient ensuite
dans le corps de l'article. Les registres comptent maintenant 142 preuves, 58
questions et 71 médias.

Le SHA applicatif `87580db54eb90a60a6f68c81828f80dc35929c3d` a passé la
gate éditoriale avec preuves privées, `./scripts/verify.sh`, Compose et la revue
navigateur à 360, 768, 1 280 et 1 440 px. Le run `32744201126` a transmis
l'artefact exact à Cloudflare. Le contrôle public a retrouvé ce SHA dans
`/release.json`, 25 URL indexables, treize entrées RSS, tous les médias modifiés
et aucune erreur navigateur.

## Tranche Gozney et Halo publiée

La production construit désormais 26 pages HTML, treize guides, 142 preuves,
58 questions, 49 médias et 25 URL indexables. Elle ajoute le Gozney Arc XL et
le comparatif Ooni Halo Core ou Halo Pro, avec leurs en-têtes officiels stylisés
et leurs vues documentaires secondaires.

Le SHA applicatif `e96d3ac265dfb24b14cf4dc1461a1985cdba50ac` a passé
`./scripts/verify.sh`, les preuves privées, Compose et la revue navigateur, puis
le run `32736959106` a transmis l'artefact exact à Cloudflare. Le contrôle public
a relu ce SHA dans `/release.json`, retrouvé les cinq routes critiques, les
quatre médias nouveaux, les 25 URL du sitemap et les treize entrées RSS.

## Résumé

Four à Nu sert publiquement un média statique de 40 pages HTML. Sa V1 et ses
tranches éditoriales et techniques sont publiques sur `fouranu.com`. Le site
propose vingt-trois guides : onze guides de fours ou d'énergie Ooni, une
comparaison de pétrins Ooni, sept guides Gozney et quatre guides accessoires.
Les registres comptent 205 preuves, 66 questions et 107 entrées média. Aucun
JavaScript client n'est nécessaire au contenu. Un module progressif révèle
seulement les capacités natives de partage et de copie disponibles. Le build de
preview reste en `noindex` et la production ouvre 39 URL dans le sitemap.

Le rayon accessoires réunit un hub et quatre guides publics. La page d’accueil
y donne accès, et les dix-neuf dossiers historiques portent 31 liens contextuels
vers les guides qui répondent réellement à leur passage. Quatre compositions de
tête et quatre planches génériques illustrent les familles d’objets comparées,
sans reprendre d’image Amazon.fr. Le RSS contient 23 entrées et le sitemap
d'images 23 visuels.

L'accueil suit désormais la hiérarchie du prototype : un sujet principal en
8/4, des entrées secondaires, des dossiers modèles, un guide par contraintes et
la méthode. Il emploie les en-têtes officiels stylisés et les vues documentaires
publiables du corpus. Les notes, verdicts, photographies, produits, rubriques et
fonctions fictives du prototype n'ont pas été repris.

Le logo Four à Nu fourni est rendu dans l'en-tête et le pied de page depuis une
version PNG de 480 x 172 px et 70 804 octets. Sa source et son dérivé sont
enregistrés. Le four du logo fournit aussi la marque compacte et les icônes
publiques. Le système visuel Four à Nu conserve IBM Plex, le carbone, le blanc,
l'acier et la grille, avec deux oranges accessibles à la place du bleu.

Cloudflare Workers Static Assets sert la production. GitHub Actions construit
puis transmet l'artefact exact produit par `Verify`, sans second build dans le
job de déploiement. Le domaine personnalisé, le DNS, HTTPS et l'indexation sont
actifs. Le contrôle public a retrouvé dans `/release.json` le SHA applicatif
`cdda6ea5031ece85df4bd12e611b39b1ce8f60c1`, qui publie le rayon accessoires,
l'affiliation Amazon et les favicons versionnées.

La tranche post-V1 couvre les signatures Nicolas, Florian et Magali, une photo
documentaire pour chacun des onze dossiers, une mise en page plus dense et des
sources compactes. Elle a passé les gates locales, la CI et le déploiement. Le
contrôle public a retrouvé son SHA applicatif dans `/release.json`, chargé les
médias, vérifié les signatures et confirmé le retrait de l'ancienne route
technique.

La tranche Gozney et Halo ajoute deux réponses d'achat plus directes, une page
de marque Gozney et une règle durable pour les futurs en-têtes produit.
L'harmonisation suivante a résorbé les onze anciens en-têtes et la réécriture
générale de leur voix. La tranche suivante ajoute Arc Lite ou Tread et enrichit
Halo Core ou Pro sans dupliquer artificiellement ces deux fiches. La couverture
suivante complète la gamme Gozney actuelle et place deux accès marchands non
rémunérés dans chaque article. Les tranches auteur donnent à Nicolas, Florian
et Magali un profil canonique, répartissent les dix-neuf dossiers entre leurs
signatures stables, puis ajoutent leurs portraits réels à chaque dossier. Les
crédits des images de tête ont ensuite été sortis des visuels et ramenés à leur
provenance utile, sans retirer les crédits documentaires détaillés. Les quatre
premiers dossiers accessoires répondent chacun à une question d'achat et
possèdent leurs sources, leurs liens affiliés déclarés, leur accès depuis la page
d’accueil et leurs visuels originaux de tête et de comparaison. Leur paquet
exact est validé, autorisé, déployé et vérifié publiquement.

## Phases actives

| Phase | État observé | Preuve acquise | Preuve restante | Responsable |
| --- | --- | --- | --- | --- |
| F01, socle produit local | `done` | Build, Compose, tests, CI et parcours navigateur | Aucune dans son périmètre historique | nclsppr |
| F02, corpus documentaire publiable | `in_progress` | Vingt-trois guides publics ; paquet accessoires visuellement approuvé, autorisé et vérifié ; pages de confiance, provenance et politique de correction | Cinq sessions restent à mener, avec dérogation déjà accordée pour la V1 publique | nclsppr |
| F03, candidat Cloudflare | `done` | Paquet approuvé, preuves privées, gate locale, CI du même SHA et environnement GitHub protégé | Aucune pour la V1 | nclsppr |
| F04, lancement public | `done` | Déploiement, domaine personnalisé, DNS, indexation et contrôles publics du SHA V1 | Aucune pour la V1 | nclsppr |
| F05, mesure et décision | `planned` | Aucune mesure d'audience ou de conversion active | Protocole minimisé et résultats observés | nclsppr |
| F06, banc d'essai et premiers pilotes | `planned` | Ambition et limites décidées ; aucun essai physique publié | Inventaire daté, protocole accepté et pilotes vérifiés sur un four, un accessoire et un pétrin | nclsppr |

## Livré et vérifié en production

Le tableau suivant décrit uniquement la production.

| Capacité | Périmètre réel | Preuve | Limite connue |
| --- | --- | --- | --- |
| Application Astro | 40 pages HTML statiques ; contenu indépendant du seul module progressif de partage | `site/`, vingt tests de contrat, run `33319240810` et contrôle public | Les prochains dossiers restent une tranche séparée jusqu'à leur propre publication |
| Guides | Douze guides Ooni, sept guides Gozney et quatre guides accessoires sous des routes thématiques | `site/src/content/analyses/`, run `33319240810` et cinq routes accessoires sondées | Les prochains dossiers exigent leur propre recherche et publication |
| Profils auteur | Un annuaire, trois profils photographiques et une attribution stable de 9/7/7 dossiers ; une bulle exacte sur chacun des vingt-trois articles | `ProfilePage`/`Person`, contrats du build et contrôle public | Les fichiers source restent volontairement privés et hors Git |
| Provenance | 205 preuves, 66 questions et 107 entrées média | `research/` et contrôles de registre | Les preuves privées restent volontairement hors CI et Git |
| Accueil éditorial | Composition responsive issue du prototype et contenu réel | Contrats du build et revue navigateur | Les photos restent attribuées à leurs sources et ne deviennent pas des tests Four à Nu |
| Images de tête | Une attribution courte sous la une et chacun des vingt-trois visuels, sans superposition | Registre média, seize nouveaux WebP sondés octet pour octet et revue mobile publique | Les crédits détaillés des vues documentaires restent dans le corps des dossiers |
| Identité | Logo optimisé, four compact, favicon SVG et icônes 180/192/512 px avec URL versionnées | `DESIGN.md`, `BRAND-SEO.md`, `AS-1002`, run `33319240810` et six sondes publiques | La marque compacte reste réservée aux surfaces d'identité ; les caches Google et Safari restent externes |
| SEO conditionnel | RSS, robots, sitemap texte et image, canonicals, aperçus sociaux et données structurées | Build normal, build opt-in, 39 URL et 23 images contrôlées localement puis publiquement | L'affichage d'une miniature, l'exploration et le classement ne sont pas garantis |
| Partage | Feuille native progressive, WhatsApp, e-mail et copie sur les 39 pages canoniques | Contrat du build et revue navigateur locale puis publique | Les destinations proposées dépendent du navigateur, du système et des applications installées |
| Parcours local | Service statique avec healthcheck | `compose.yaml` | Aucun preview partagé |
| Production Cloudflare | Artefact SEO, profils, guides accessoires, affiliation déclarée, partage et favicons servi par Workers Static Assets sur le domaine personnalisé | Run `33319240810`, `/release.json` et contrôles HTTP | Le retour arrière vise le précédent déploiement d'un SHA vérifié |
| Documentation interne | Nimbus reste séparé du site public | `docs-nimbus/` et catalogue | Le build Cloudflare pointe uniquement vers `site/dist/` |

## Revue d'interface SEO du 2026-08-25

| Contrôle | Résultat | Portée |
| --- | --- | --- |
| Responsive | Aucun débordement à 360 et 1 280 px sur l'accueil et un article long | Candidat statique local puis domaine public |
| Partage | Quatre actions de 48 px, URL canonique exacte, copie annoncée et replis HTML visibles | Accueil et article Koda 2 |
| Clavier et focus | Contour orange 3 px visible ; groupe de contrôles nommé et statut poli | Bloc de partage mobile et bureau |
| Métadonnées | Titres, canonicales, images, dimensions, auteurs, schémas et sitemap rapprochés sur 32 HTML | Seize tests de contrat, sondes HTTP et inspection navigateur publique |
| Console et réseau | Aucun avertissement ou erreur ; aucune requête tierce avant une action du lecteur | Accueil, article et 404 locales |
| Frontière 404 | `noindex, follow`, aucun canonical, aucun `WebPage` et aucun partage | Route absente locale puis publique |

## Revue d'interface du 2026-08-24

| Contrôle | Résultat | Portée |
| --- | --- | --- |
| Responsive | Aucun débordement à 360, 640, 768, 1 280 et 1 440 px sur les parcours critiques | Build statique local et contrôle public |
| Nouvelles surfaces | Accueil, Gozney, guide de gamme et dossiers représentatifs contrôlés ; images de une avant les vues documentaires et deux appels d'achat par article | Candidat local puis contrôle public bureau et mobile |
| Contenu long | Article Koda 2 contrôlé à 360 et 1 440 px ; sommaire mobile défilable, tableau focusable et sources repliées sur 123 px | Navigateur local et public |
| Clavier et focus | Lien d'évitement présent ; contour orange 3 px sur les deux niveaux de sources et tableaux focusables | Parcours critique de l'article |
| Mouvement réduit | Deux règles finales suppriment transitions et transformations | CSS construit réellement chargé |
| Console et chargements | Aucun journal d'erreur après rechargement de la gamme et de l'article ; tous les nouveaux médias sont chargés | Navigateur local puis domaine public |
| Lighthouse accueil | Performance 96, accessibilité 100, bonnes pratiques 100 ; CLS 0, TBT 0 ms | Simulation mobile locale, sans valeur de production |
| Lighthouse article | Performance 95, accessibilité 100, bonnes pratiques 100 ; CLS 0, TBT 0 ms | Simulation mobile locale, sans valeur de production |

Les captures de contrôle sont conservées hors du dépôt. Aucun screenshot,
fichier source de prototype ou logo brut n'entre dans l'artefact public.

## Hébergement et livraison

| Élément | État vérifié |
| --- | --- |
| Cible | Cloudflare Workers Static Assets, sans Worker JavaScript |
| Configuration | `workers_dev=false`, `preview_urls=false`, répertoire `site/dist/`, 404 statique et slash final forcé |
| Vérification locale | `npm run cloudflare:check --prefix site`, succès sans identifiant ni mutation distante |
| Graphe CI | `deploy-cloudflare` dépend de `verify`, sur `main` et si `CLOUDFLARE_DEPLOY_ENABLED == true` ; il télécharge l'artefact exact construit par `verify` |
| CI publique | Runs applicatifs successifs consignés ci-dessus ; la tranche accessoires, [`33319240810`](https://github.com/nclsppr/fouranu/actions/runs/33319240810), est verte pour `Verify` et `deploy-cloudflare`. Les commits documentaires postérieurs repassent par le même graphe ; `/release.json` reste la source du SHA actif. Chaque déploiement livre l'artefact exact construit par son job `verify` |
| Paramètres de production | Jeton minimal dans l'environnement GitHub `cloudflare-production`, identifiant de compte en variable |
| État Cloudflare observé | Worker Static Assets, domaine personnalisé et DNS de `fouranu.com` actifs |
| Transport public | HTTP redirige vers HTTPS ; TLS 1.0 et 1.1 sont refusés, TLS 1.2 et 1.3 acceptés |
| Certificats | Packs universel et avancé actifs pour `fouranu.com` et `*.fouranu.com` |
| Contrat public | `/` répond 200, `/health` répond `ok` et `/release.json` suit le dernier SHA déployé de `main` ; accueil, profils, articles, sitemap, 404, favicon, icônes et carte sociale ont été contrôlés |
| Indexation | 39 URL du sitemap répondent 200 avec canonical et sans `noindex` |
| Ancienne cible Atlas | Workflow producteur retiré ; OCI et preuves du 2026-08-23 restent historiques, plus chemin courant |

## Dettes après le lancement V1

| Condition | Impact | Preuve attendue |
| --- | --- | --- |
| Cinq sessions non réalisées | L'utilité observée de F02 reste inconnue | Mener les sessions après la V1 ; cette dette n'est pas présentée comme une preuve acquise |
| Produits encore difficiles à reconnaître dans les guides accessoires | Les illustrations décrivent correctement les familles d'objets, pas les seize modèles commerciaux exacts | Obtenir les blocs image officiels SiteStripe ou l'accès Creators API, décider le chargement Amazon avant clic, puis intégrer sans télécharger ni transformer les images |
| Aucun essai de première main | La nouvelle ambition ne possède encore ni protocole ni résultat propre | Accepter le protocole, étendre les registres puis vérifier les trois pilotes de F06 sans réécrire le passé documentaire |
| État administratif du compte Amazon non vérifié | Les liens affiliés sont publics, mais l'acceptation finale, la fiscalité, le paiement et l'accès éventuel à Creators API restent hors dépôt | Contrôler séparément `fouranu.com`, le statut de validation, les informations fiscales, le paiement et l'éligibilité API dans le compte |

## Prochaines preuves

| Sujet | Type | Prochaine preuve | Phase |
| --- | --- | --- | --- |
| Utilité du parcours | Hypothèse | Cinq sessions décrites dans `EXPERIMENT.md` | F02 |
| Médias d'article | Gate | Chaque en-tête suit l'ADR-0005 ou l'exception multi-produits de l'ADR-0008, possède une entrée exacte dans `research/assets.csv` et reçoit sa validation humaine avant publication | F02/F03 |
| Vignettes produit exactes | Activation conditionnelle | Blocs image officiels SiteStripe ou accès Creators API ; nouvelle décision sur la confidentialité, aucun stockage local et aucune transformation IA | F02/F03 |
| Économie du modèle | Hypothèse | Trafic, clics et ventes d'un lancement autorisé | F05 |
| Premiers essais Four à Nu | Capacité future | Inventaire français daté, décision de protocole, sessions enregistrées et pilotes vérifiés sur un four, un accessoire et un pétrin | F06 |
