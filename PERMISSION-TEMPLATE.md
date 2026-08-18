# Demande d'autorisation pour un visuel source

Ce modèle prépare une demande précise. Il ne remplace pas un contrat relu par
un professionnel lorsque l'exploitation, la rémunération ou la chaîne de droits
le justifie.

## Informations à préparer

| Champ | Valeur à compléter |
| --- | --- |
| Créateur ou producteur | `[identité et qualité]` |
| Vidéo | `[titre et URL]` |
| Passage | `[timecode et description]` |
| Fichier demandé | `[photogramme ou photo source fourni hors YouTube]` |
| Supports | `[site, newsletter, comptes sociaux nommés]` |
| Territoire et langues | `[par exemple monde, français]` |
| Durée | `[date de début et date de fin]` |
| Prestataire IA | `[nom, conservation et entraînement des entrées]` |
| Personnes visibles | `[aucune, ou autorisations supplémentaires nécessaires]` |
| Éléments tiers | `[musique, décor, œuvre, marque ou aucun identifié]` |
| Crédit proposé | `[nom, chaîne et lien]` |
| Rémunération | `[gratuite ou montant et modalités]` |

## Message

Objet : autorisation limitée pour illustrer une analyse Jupiter

Bonjour `[nom]`,

Je prépare pour Jupiter une analyse documentaire en français sur le choix d'un
four à pizza. Votre vidéo `[titre]` publiée à `[URL]` documente utilement
`[observation]` au passage `[timecode]`.

Le produit n'a pas été testé par Jupiter : la page identifiera clairement votre
vidéo comme source, renverra vers elle et attribuera à votre équipe toutes les
mesures ou observations qui en proviennent. La page pourra contenir des liens
affiliés ; l'usage est donc éditorial et commercial.

Pour éviter d'extraire une image depuis YouTube, pourriez-vous nous fournir le
photogramme ou une photographie source correspondant à ce passage ? Si vous
disposez des droits nécessaires, nous sollicitons une autorisation non
exclusive limitée aux usages cochés ci-dessous :

- `[oui/non]` reproduire et afficher le fichier fourni sur `[supports]` ;
- `[oui/non]` recadrer, redimensionner et corriger légèrement la colorimétrie ;
- `[oui/non]` transmettre le fichier à `[prestataire IA]` selon les conditions
  de conservation et d'entraînement suivantes : `[conditions]` ;
- `[oui/non]` créer et publier une variante assistée par IA ;
- `[oui/non]` créer et publier un croquis ou une illustration dérivée ;
- `[oui/non]` utiliser ces éléments dans une page contenant des liens affiliés ;
- `[oui/non]` relayer la page et les visuels sur `[comptes sociaux]`.

Périmètre proposé : `[territoire]`, en `[langues]`, du `[début]` au `[fin]`,
`[gratuitement/contre rémunération précisée]`. Crédit affiché : `[crédit exact]`.
Les visuels assistés par IA seront signalés comme tels et ne seront jamais
présentés comme la preuve d'un test réalisé par Jupiter. `[Vous pourrez/devrez]`
valider le rendu final avant publication.

Pouvez-vous également confirmer :

1. que vous êtes le producteur, l'auteur ou le représentant autorisé à accorder
   ces droits sur le fichier fourni ;
2. que les personnes reconnaissables et les autres titulaires concernés ont
   autorisé cette réutilisation commerciale et les transformations cochées, ou
   nous indiquer les accords supplémentaires nécessaires ;
3. que le crédit, la durée, le territoire, les supports, la rémunération et la
   procédure de retrait proposés vous conviennent ;
4. les contraintes à respecter pour le produit, les marques, le cadrage ou la
   transformation.

Jupiter n'enverra aucune personne identifiable à un prestataire IA durant cette
phase. Si le fichier en contient, merci de confirmer si un recadrage local est
autorisé ; à défaut, le fichier restera exclu du traitement IA.

Une absence de réponse ne sera pas considérée comme une autorisation. Le fichier
et les échanges resteront privés ; seul le périmètre de l'autorisation sera
consigné dans notre registre éditorial.

Merci,

`[nom et coordonnées]`

## Enregistrement après réponse

- conserver le message complet et le fichier reçu sous
  `research/private/permissions/` et `research/private/captures/` ;
- ne pas committer les coordonnées, messages ou fichiers sources ;
- calculer le SHA-256 du fichier reçu et du dérivé ;
- calculer le SHA-256 de l'accord conservé et vérifier son existence avec
  `python3 scripts/check_editorial_ledgers.py --require-private-proofs` ;
- reporter uniquement le statut, le périmètre, les dates, le crédit et les
  références de preuve dans `research/assets.csv` ;
- demander une clarification plutôt que d'interpréter une réponse partielle ;
- faire valider juridiquement un accord ambigu, rémunéré ou destiné à devenir un
  modèle récurrent.

Avant le premier accord, choisir un stockage chiffré avec sauvegarde hors
machine, accès minimal et durée de conservation définie. Le dossier Git ignoré
n'est pas une sauvegarde.
