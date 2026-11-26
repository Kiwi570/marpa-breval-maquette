# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 12:03:55 · 7 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **14 échec(s)**
- Passe : `20261126-105632-complet-partiel` · version ?v=1
- Échecs : **14**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-100842-rapide-cible | rapide | / | toutes | 15 | 19 | 1 | échecs |
| 20261126-101654-rapide-cible | rapide | /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404 | toutes | 32 | 19 | 1 | échecs |
| 20261126-103413-rapide-cible-partiel | rapide | /les-logements,/les-services,/les-animations,/les-lieux,/contact,/404 | mesures, films, parcours | 10 | 3 | 0 | échecs |
| 20261126-104158-rapide-cible-partiel | rapide | /les-logements,/les-services,/les-animations,/contact | mesures, parcours | 1 | 3 | 0 | échecs |
| 20261126-104610-rapide-cible-partiel | rapide | /les-logements | mesures | 0 | 0 | 0 | complet |
| **20261126-105632-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 14 | 2 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > a.bouton « Demander une visite » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/les-animations` — section#debut > div.prochain > p:nth-of-type(3) > a.bouton « Demander une visite » _(1000×560 normal, 1280×720 normal, 1024×768 sansJs, 1000×560 sansJs, 1000×560 sansWebgl, 1280×720 sansJs, +3)_
- **premier écran : bouton principal hors de l’écran** — `/les-lieux` — div.conteneur.ouv-cadre-bas > div.cartouche > p.ouv-chiffre-actions:nth-of-type(3) > a.bouton « Demander une visite » _(2560×1440 normal, 844×390 sansJs, 1024×768 sansJs, 1000×560 sansJs, 1280×720 sansJs, 1366×768 sansJs, +5)_

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > span.ouv-info « Équipe présente de 7 h à 21 h · médaillon 24 h/24 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-info:nth-of-type(3) « 01 34 78 03 39 · 15 rue du Vieux Chêne, 78980 Brév » _(375×667 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouv-contact-grille > div.ouv-contact-texte:nth-of-type(1) > p.ouv-info:nth-of-type(3) « L'équipe peut vous faire visiter la maison » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/les-animations` — section#debut > div.prochain > div.prochain-carte « Prochain rendez-vous Programme de novembre et déce » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/les-lieux` — div.conteneur.ouv-cadre-bas > div.cartouche > p.ouv-chiffre-actions:nth-of-type(3) > span.ouv-info « Jardin arboré de 5 000 m² » _(2560×1440 normal, 844×390 sansJs, 1024×768 sansJs, 1000×560 sansJs, 1280×720 sansJs, 1366×768 sansJs, +2)_
- **premier écran : information clé hors de l’écran** — `/les-services` — section#debut > div.ouv-eventail-texte:nth-of-type(1) > p.ouv-chiffre-actions:nth-of-type(3) > span.ouv-info « Médaillon d'appel 24 h/24 » _(1000×560 sansJs)_

### texte coupé (3)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Votre demande » — le contenu dépasse de son cadre _(1024×768 normal, 1280×720 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl, 1280×720 sansWebgl)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Votre demande » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__num:nth-of-type(1) « 3 » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 930 px — largeurs : 920 px _(balayage 320–1920 normal)_

## À regarder

### typographie française (2)

- **typographie française** — `/` — div.smn:nth-of-type(2) > div.smn__corps:nth-of-type(2) > div.smn__feuille > p.smn__journal « 23 nov. – 29 nov. : 10 rendez-vous, 10 rendez-vous » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 3 h 01 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-logements : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-services : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/contact,/les-animations,/les-lieux,/les-services --seulement=fichiers,mesures
```
