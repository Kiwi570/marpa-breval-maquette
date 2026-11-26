# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 11:46:02 · 4 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /les-logements,/les-services,/les-animations,/contact (étapes : mesures, parcours)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261126-104158-rapide-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : mesures (24), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (11), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-100842-rapide-cible | rapide | / | toutes | 15 | 19 | 1 | échecs |
| 20261126-101654-rapide-cible | rapide | /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404 | toutes | 32 | 19 | 1 | échecs |
| 20261126-103413-rapide-cible-partiel | rapide | /les-logements,/les-services,/les-animations,/les-lieux,/contact,/404 | mesures, films, parcours | 10 | 3 | 0 | échecs |
| **20261126-104158-rapide-cible-partiel** (celle-ci) | rapide | /les-logements,/les-services,/les-animations,/contact | mesures, parcours | 1 | 3 | 0 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/les-logements` — div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » — avec section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.ouv-chiffre-suite:nth-of-type(2) « de plain‑pied, ouverts sur le jardin » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

## À regarder

### typographie française (1)

- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 3 h 18 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/les-animations` — écran différent à la même position après rechargement (13.2 %), voir comparaisons/rechargement-les-animations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-services` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-les-services-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Audit rapide : étapes lourdes sur /contact, /les-animations, /les-logements, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/les-logements --seulement=fichiers,mesures
```
