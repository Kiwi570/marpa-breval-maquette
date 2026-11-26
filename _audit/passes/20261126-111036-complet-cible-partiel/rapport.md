# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 12:11:41 · 1 min · 1 page(s) · audit complet ciblé sur /les-animations (étapes : mesures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261126-111036-complet-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : mesures (39), balayage (1)

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
| **20261126-111036-complet-cible-partiel** (celle-ci) | complet | /les-animations | mesures | 0 | 1 | 0 | complet |

## Échecs

Aucun.

## À regarder

### typographie française (1)

- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 2 h 49 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
