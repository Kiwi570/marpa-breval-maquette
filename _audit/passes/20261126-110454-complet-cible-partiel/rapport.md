# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 12:10:30 · 6 min · 6 page(s) · audit complet ciblé sur /,/404,/contact,/les-animations,/les-lieux,/les-services (étapes : mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261126-110454-complet-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

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
| **20261126-110454-complet-cible-partiel** (celle-ci) | complet | /,/404,/contact,/les-animations,/les-lieux,/les-services | mesures | 2 | 2 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/les-animations` — section#debut > div.prochain > p.prochain-action:nth-of-type(2) > a.bouton « Demander une visite » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/les-animations` — section#debut > div.prochain > div.prochain-carte « Prochain rendez-vous Programme de novembre et déce » _(1000×560 sansJs)_

## À regarder

### typographie française (2)

- **typographie française** — `/` — div.smn:nth-of-type(2) > div.smn__corps:nth-of-type(2) > div.smn__feuille > p.smn__journal « 23 nov. – 29 nov. : 10 rendez-vous, 10 rendez-vous » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 2 h 53 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/les-animations --seulement=fichiers,mesures
```
