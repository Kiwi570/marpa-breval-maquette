# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 12:50:41 · 2 min · 4 page(s) · audit standard ciblé sur /,/les-animations,/les-services,/contact (étapes : fichiers, mesures)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261126-114904-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (44), balayage (4)

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
| 20261126-112648-standard | standard | toutes | toutes | 4 | 13 | 1 | échecs |
| **20261126-114904-standard-cible-partiel** (celle-ci) | standard | /,/les-animations,/les-services,/contact | fichiers, mesures | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### typographie française (2)

- **typographie française** — `/` — div.smn:nth-of-type(2) > div.smn__corps:nth-of-type(2) > div.smn__feuille > p.smn__journal « 23 nov. – 29 nov. : 10 rendez-vous, 10 rendez-vous » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 2 h 10 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 75 min de travail pour 115 min de budget, 93 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /les-animations, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
