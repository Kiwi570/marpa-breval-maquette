# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 11:41:19 · 7 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /les-logements,/les-services,/les-animations,/les-lieux,/contact,/404 (étapes : mesures, films, parcours)

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261126-103413-rapide-cible-partiel` · version ?v=1
- Échecs : **10**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : mesures (36), films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-100842-rapide-cible | rapide | / | toutes | 15 | 19 | 1 | échecs |
| 20261126-101654-rapide-cible | rapide | /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404 | toutes | 32 | 19 | 1 | échecs |
| **20261126-103413-rapide-cible-partiel** (celle-ci) | rapide | /les-logements,/les-services,/les-animations,/les-lieux,/contact,/404 | mesures, films, parcours | 10 | 3 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/les-animations` — section#debut > div.prochain > p:nth-of-type(3) > a.bouton « Demander une visite » _(844×390 normal)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/les-animations` — div.prochain > div.prochain-carte > p.prochain-quand:nth-of-type(2) > span « Aujourd’hui » — avec div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) > span « 15 » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/les-animations` — div.prochain > div.prochain-carte > p.prochain-quand:nth-of-type(2) > span « Aujourd’hui » — avec section#debut > div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) « 15 h » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/les-logements` — div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » — avec section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.ouv-chiffre-suite:nth-of-type(2) « de plain‑pied, ouverts sur le jardin » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/les-logements` — section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > p.surtitre « Les logements » — avec div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » _(1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/les-logements` — div.conteneur.ouv-chiffre-tete:nth-of-type(1) > div.ouv-chiffre-bas > p.ouv-chiffre-actions:nth-of-type(2) > span.ouv-info « Animaux domestiques acceptés » _(320×568 sansJs)_

### transition : élément qui apparaît puis disparaît (3)

- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration « 01La restaurationTrois repas cuisinés su » _(390×844 film)_
- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration > h3.ofr__titre « 01La restaurationTrois repas cuisinés su » _(390×844 film)_
- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration > h3.ofr__titre > button.ofr__poignee « 01La restaurationTrois repas cuisinés su » _(390×844 film)_

### demande de visite (1)

- **demande de visite** — `/contact` — ?sujet=visite ne présélectionne pas la visite (undefined)

## À regarder

### typographie française (1)

- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 3 h 26 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/les-animations` — écran différent à la même position après rechargement (13.1 %), voir comparaisons/rechargement-les-animations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-services` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-les-services-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Audit rapide : étapes lourdes sur /contact, /les-animations, /les-lieux, /les-logements, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /contact (1366×768) : 2426 ms depuis le premier octet
- Ouverture /les-animations (1366×768) : 2491 ms depuis le premier octet
- Ouverture /les-lieux (1366×768) : 2469 ms depuis le premier octet
- film de l'ouverture /les-lieux 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /les-logements (1366×768) : 2535 ms depuis le premier octet
- Ouverture /les-services (1366×768) : 2524 ms depuis le premier octet
- film de l'ouverture /les-services 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2505 ms depuis le premier octet
- Ouverture /les-animations (390×844) : 2548 ms depuis le premier octet
- Ouverture /les-lieux (390×844) : 2506 ms depuis le premier octet
- Ouverture /les-logements (390×844) : 2576 ms depuis le premier octet
- Ouverture /les-services (390×844) : 2500 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films,parcours
```
