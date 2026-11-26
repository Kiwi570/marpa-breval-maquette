# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 14:23:02 · 22 min · 7 page(s) · audit standard

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261126-130106-standard` · version ?v=2
- Échecs : **2**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (4), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (5), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (9), souris immobile (5), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-125246-rapide | rapide | toutes | toutes | 0 | 12 | 1 | complet |
| **20261126-130106-standard** (celle-ci) | standard | toutes | toutes | 2 | 10 | 1 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/les-lieux` — span[data-fx-ecarte="g"] ; span[data-fx-ecarte="d"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/les-services` — section#debut > div.eventail:nth-of-type(2) > figure.media.eventail-carte:nth-of-type(1) > figcaption.mention-vraie « Photo de la MARPA » — avec section#debut > div.eventail:nth-of-type(2) > figure.media.eventail-carte:nth-of-type(2) > figcaption.mention-ia « Illustration générée » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### typographie française (1)

- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 57 min » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 292 ms (différence 23 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/les-animations` — écran différent à la même position après rechargement (14.3 %), voir comparaisons/rechargement-les-animations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-services` — écran différent à la même position après rechargement (10.3 %), voir comparaisons/rechargement-les-services-*.png _(1366×768)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 43 min de travail pour 65 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /les-animations, /les-lieux, /les-logements, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2757 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2478 ms depuis le premier octet
- Ouverture /les-animations (1366×768) : 2522 ms depuis le premier octet
- Ouverture /les-lieux (1366×768) : 2535 ms depuis le premier octet
- film de l'ouverture /les-lieux 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /les-logements (1366×768) : 2503 ms depuis le premier octet
- Ouverture /les-services (1366×768) : 2510 ms depuis le premier octet
- Ouverture / (390×844) : 2751 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2457 ms depuis le premier octet
- Ouverture /les-animations (390×844) : 2532 ms depuis le premier octet
- Ouverture /les-lieux (390×844) : 2528 ms depuis le premier octet
- Ouverture /les-logements (390×844) : 2492 ms depuis le premier octet
- Ouverture /les-services (390×844) : 2494 ms depuis le premier octet
- bords de l’écran /les-logements 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 504 images d’intro, 37 de voile et 175 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-logements : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-services : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 411, tâche la plus longue 77 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 188, tâche la plus longue 0 ms
- Fluidité /les-animations 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 55 ms
- Fluidité /les-lieux 1366×768 (molette) : 0 % d'images lentes sur 327, tâche la plus longue 0 ms
- Fluidité /les-logements 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /les-services 1366×768 (molette) : 0 % d'images lentes sur 230, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1443, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1429, tâche la plus longue 0 ms
- Fluidité /les-animations 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /les-lieux 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /les-logements 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /les-services 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Vitesse / : 0.88 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-animations : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-lieux : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-logements : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-services : 0.57 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/les-lieux,/les-services --seulement=fichiers,mesures
```
