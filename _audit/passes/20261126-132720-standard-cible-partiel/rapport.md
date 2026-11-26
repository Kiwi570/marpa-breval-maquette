# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 14:28:59 · 2 min · 4 page(s) · audit standard ciblé sur /,/les-lieux,/les-services,/les-animations (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261126-132720-standard-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (44), balayage (4)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-125246-rapide | rapide | toutes | toutes | 0 | 12 | 1 | complet |
| 20261126-130106-standard | standard | toutes | toutes | 2 | 10 | 1 | échecs |
| **20261126-132720-standard-cible-partiel** (celle-ci) | standard | /,/les-lieux,/les-services,/les-animations | fichiers, mesures | 1 | 2 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/les-lieux` — span[data-fx-ecarte="g"] ; span[data-fx-ecarte="d"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 43 min de travail pour 65 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /les-animations, /les-lieux, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/les-lieux --seulement=fichiers,mesures
```
