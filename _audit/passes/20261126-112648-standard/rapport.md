# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 12:48:36 · 22 min · 7 page(s) · audit standard

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261126-112648-standard` · version ?v=1
- Échecs : **4**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (5), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (9), souris immobile (5), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-100842-rapide-cible | rapide | / | toutes | 15 | 19 | 1 | échecs |
| 20261126-101654-rapide-cible | rapide | /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404 | toutes | 32 | 19 | 1 | échecs |
| 20261126-103413-rapide-cible-partiel | rapide | /les-logements,/les-services,/les-animations,/les-lieux,/contact,/404 | mesures, films, parcours | 10 | 3 | 0 | échecs |
| 20261126-104158-rapide-cible-partiel | rapide | /les-logements,/les-services,/les-animations,/contact | mesures, parcours | 1 | 3 | 0 | échecs |
| 20261126-104610-rapide-cible-partiel | rapide | /les-logements | mesures | 0 | 0 | 0 | complet |
| 20261126-105632-complet-partiel | complet | toutes | mesures, ecran | 14 | 2 | 0 | échecs |
| 20261126-110454-complet-cible-partiel | complet | /,/404,/contact,/les-animations,/les-lieux,/les-services | mesures | 2 | 2 | 0 | échecs |
| 20261126-111036-complet-cible-partiel | complet | /les-animations | mesures | 0 | 1 | 0 | complet |
| **20261126-112648-standard** (celle-ci) | standard | toutes | toutes | 4 | 13 | 1 | échecs |

## Échecs

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/` — div.conteneur.cafe-grille > figure.media.cafe-media > picture > img « Table de jardin sous un arbre, deux tasses de café » — grok/accueil-visite (5/5, faible, 30 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/les-animations` — section#debut > figure.media.prochain-media > picture > img « Table d’atelier avec fleurs coupées, vases, argile » — grok/animations-atelier (4/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal, 1366×768 normal)_
- **photo faible affichée en grand** — `/les-services` — div.conteneur.participer-grille > figure.media.participer-media > picture > img « Légumes du jardin épluchés sur une table de cuisin » — grok/services-legumes (4/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/les-services` — div.conteneur.participer-grille > figure.media.participer-media > picture > img « Légumes du jardin épluchés sur une table de cuisin » — grok/services-legumes (4/5, faible, 48 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### typographie française (2)

- **typographie française** — `/` — div.smn:nth-of-type(2) > div.smn__corps:nth-of-type(2) > div.smn__feuille > p.smn__journal « 23 nov. – 29 nov. : 10 rendez-vous, 10 rendez-vous » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 2 h 32 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 285 ms (différence 23 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/les-logements` — à 89 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/les-animations` — écran différent à la même position après rechargement (14.0 %), voir comparaisons/rechargement-les-animations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-services` — écran différent à la même position après rechargement (10.0 %), voir comparaisons/rechargement-les-services-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.lieux-piste — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 69 min de travail pour 110 min de budget, 1 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /les-animations, /les-lieux, /les-logements, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2778 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2446 ms depuis le premier octet
- Ouverture /les-animations (1366×768) : 2538 ms depuis le premier octet
- Ouverture /les-lieux (1366×768) : 2525 ms depuis le premier octet
- Ouverture /les-logements (1366×768) : 2547 ms depuis le premier octet
- Ouverture /les-services (1366×768) : 2560 ms depuis le premier octet
- Ouverture / (390×844) : 2728 ms depuis le premier octet
- Ouverture /contact (390×844) : 2453 ms depuis le premier octet
- Ouverture /les-animations (390×844) : 2483 ms depuis le premier octet
- Ouverture /les-lieux (390×844) : 2506 ms depuis le premier octet
- Ouverture /les-logements (390×844) : 2508 ms depuis le premier octet
- Ouverture /les-services (390×844) : 2504 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 535 images d’intro, 40 de voile et 170 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-logements : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 367, tâche la plus longue 54 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 194, tâche la plus longue 0 ms
- Fluidité /les-animations 1366×768 (molette) : 0 % d'images lentes sur 328, tâche la plus longue 0 ms
- Fluidité /les-lieux 1366×768 (molette) : 0 % d'images lentes sur 320, tâche la plus longue 0 ms
- Fluidité /les-logements 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /les-services 1366×768 (molette) : 0 % d'images lentes sur 234, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1457, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 64 ms
- Fluidité /les-animations 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /les-lieux 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /les-logements 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /les-services 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Vitesse / : 0.69 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-animations : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-lieux : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-logements : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-services : 0.56 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/les-animations,/les-services --seulement=fichiers,mesures
```
