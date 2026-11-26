# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 11:33:08 · 16 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404

## Résumé

- Statut : **32 échec(s)**
- Passe : `20261126-101654-rapide-cible` · version ?v=1
- Échecs : **32**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (12), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (9), souris immobile (4), vitesse (5), captures (1)

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
| **20261126-101654-rapide-cible** (celle-ci) | rapide | /les-logements,/les-services,/les-lieux,/les-animations,/contact,/404 | toutes | 32 | 19 | 1 | échecs |

## Échecs

### image de partage (6)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `les-animations.html` — fichier introuvable : /assets/partage/les-animations-fr.jpg
- **image de partage** — `les-lieux.html` — fichier introuvable : /assets/partage/les-lieux-fr.jpg
- **image de partage** — `les-logements.html` — fichier introuvable : /assets/partage/les-logements-fr.jpg
- **image de partage** — `les-services.html` — fichier introuvable : /assets/partage/les-services-fr.jpg

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(2) > a.bouton « Revenir à l'accueil » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/les-animations` — section#debut > div.prochain > p:nth-of-type(3) > a.bouton « Demander une visite » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/les-lieux` — div.conteneur.ouv-cadre-bas > div.cartouche > p.ouv-chiffre-actions:nth-of-type(3) > a.bouton « Demander une visite » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-info:nth-of-type(3) « 01 34 78 03 39 · 15 rue du Vieux Chêne, 78980 Brév » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/les-animations` — section#debut > div.prochain > div.prochain-carte « Prochain rendez-vous Programme de novembre et déce » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/les-lieux` — div.conteneur.ouv-cadre-bas > div.cartouche > p.ouv-chiffre-actions:nth-of-type(3) > span.ouv-info « Jardin arboré de 5 000 m² » _(320×568 sansJs)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/contact` — section#venir > div.conteneur.venir-grille > figure.plan-acces > span.plan-etiquette.plan-etiquette--commerces:nth-of-type(2) « Centre commercial » — avec section#venir > div.conteneur.venir-grille > figure.plan-acces > span.plan-marqueur:nth-of-type(3) « La MARPA » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/les-animations` — div.prochain > div.prochain-carte > p.prochain-quand:nth-of-type(2) > span « Aujourd’hui » — avec div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) > span « 15 » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/les-animations` — div.prochain > div.prochain-carte > p.prochain-quand:nth-of-type(2) > span « Aujourd’hui » — avec section#debut > div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) « 15 h » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/les-logements` — section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > p.surtitre « Les logements » — avec div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/les-logements` — div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » — avec section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.ouv-chiffre-suite:nth-of-type(2) « de plain‑pied, ouverts sur le jardin » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/les-logements` — div.conteneur.ouv-chiffre-tete:nth-of-type(1) > h1.ouv-chiffre-titre > span.geant:nth-of-type(1) > span.geant-n:nth-of-type(1) « 31 » — avec section#debut > div.conteneur.ouv-chiffre-tete:nth-of-type(1) > div.ouv-chiffre-bas > p:nth-of-type(1) « 22 logements de 31 m² et un logement de 46 m² pour » _(1366×768 normal)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — section#venir > div.conteneur.venir-grille > figure.plan-acces > span.plan-etiquette.plan-etiquette--commerces:nth-of-type(2) « Centre commercial » — par section#venir > div.conteneur.venir-grille > figure.plan-acces > span.plan-marqueur:nth-of-type(3) « La MARPA » _(390×844 normal)_

### texte coupé (2)

- **texte coupé** — `/les-animations` — div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) > span « 15 » — coupé par section#debut > div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) « 15 h » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **texte coupé** — `/les-animations` — section#debut > div.prochain > div.prochain-carte > p.prochain-heure:nth-of-type(3) « 15 h » — le contenu dépasse de son cadre _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/les-lieux` — section#jardin > div > p.jardin-mots > span:nth-of-type(1) « 5 000 » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/les-lieux` — section#jardin > div > p.jardin-mots > span:nth-of-type(2) « m² » — 1.00:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/les-logements` — li#piece-eau > figure.media.piece-media > picture > img « Salle d’eau avec douche de plain‑pied et barre d’a » — client/logement-salle-eau (3/5, faible, 33 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### transition : élément qui apparaît puis disparaît (3)

- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration « 01La restaurationTrois repas cuisinés su » _(390×844 film)_
- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration > h3.ofr__titre « 01La restaurationTrois repas cuisinés su » _(390×844 film)_
- **transition : élément qui apparaît puis disparaît** — `/les-logements → /les-services` — li#restauration > h3.ofr__titre > button.ofr__poignee « 01La restaurationTrois repas cuisinés su » _(390×844 film)_

### lien profond (5)

- **lien profond** — `/les-logements → /contact?sujet=couple#visite` — choix « sujet=couple » non prérempli (valeur : entree) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/les-services → /contact?sujet=La+restauration#visite` — choix « sujet=La restauration » non prérempli (valeur : undefined) _(1366×768 lien profond)_
- **lien profond** — `/les-services → /contact?sujet=La+t%C3%A9l%C3%A9assistance#visite` — choix « sujet=La téléassistance » non prérempli (valeur : undefined) _(1366×768 lien profond)_
- **lien profond** — `/les-services → /contact?sujet=L%27entretien+du+logement#visite` — choix « sujet=L'entretien du logement » non prérempli (valeur : undefined) _(1366×768 lien profond)_
- **lien profond** — `/les-services → /contact?sujet=L%27entretien+du+linge#visite` — choix « sujet=L'entretien du linge » non prérempli (valeur : undefined) _(1366×768 lien profond)_

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

### section sans visuel (5)

- **section sans visuel** — `/contact` — section#debut « Contact et visite Venez visiter la Maison des Fleu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#questions « Questions fréquentes Pour qui est la MARPA ? Est-c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#debut « Venez visiter la Maison des Fleurs Appeler la MARP » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/les-animations` — section#agenda « Les temps forts de novembre et décembre Les dates  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/les-logements` — section#acces « Entrer et sortir librement Par le hall de la MARPA » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/les-animations` — section#agenda > div.agd__outils:nth-of-type(2) > p.agd__compte « 12 dates à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (1)

- **typographie française** — `/les-animations` — section#agenda > div.agd__tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Composition florale, dans 3 h 42 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/les-logements` — li#piece-vie > figure.media.piece-media > picture > img « Chambre avec lit, fauteuil et grande penderie blan » — client/logement-chambre (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/les-logements` — li#piece-terrasse > figure.media.piece-media > picture > img « Terrasse devant un logement, chaises de jardin et  » — client/logement-terrasse (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-animations` — écran différent à la même position après rechargement (13.1 %), voir comparaisons/rechargement-les-animations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/les-services` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-les-services-*.png _(1366×768)_

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
- Journal v1 : 1 étape(s) notée(s), 11 min de travail pour 20 min de budget, 2 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /contact, /les-animations, /les-lieux, /les-logements, /les-services.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /contact (1366×768) : 2477 ms depuis le premier octet
- Ouverture /les-animations (1366×768) : 2541 ms depuis le premier octet
- Ouverture /les-lieux (1366×768) : 2553 ms depuis le premier octet
- Ouverture /les-logements (1366×768) : 2573 ms depuis le premier octet
- Ouverture /les-services (1366×768) : 2588 ms depuis le premier octet
- Ouverture /contact (390×844) : 2445 ms depuis le premier octet
- Ouverture /les-animations (390×844) : 2532 ms depuis le premier octet
- Ouverture /les-lieux (390×844) : 2486 ms depuis le premier octet
- film de l'ouverture /les-lieux 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /les-logements (390×844) : 2543 ms depuis le premier octet
- Ouverture /les-services (390×844) : 2539 ms depuis le premier octet
- Bords de l’écran : 389 images d’intro, 33 de voile et 126 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-animations : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-logements : aucune section épinglée ou plein écran.
- Tient dans l'écran /les-services : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité /les-animations 1366×768 (molette) : 0 % d'images lentes sur 334, tâche la plus longue 0 ms
- Fluidité /les-lieux 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /les-logements 1366×768 (molette) : 0 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité /les-services 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1423, tâche la plus longue 0 ms
- Fluidité /les-animations 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /les-lieux 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /les-logements 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /les-services 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Vitesse /contact : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-animations : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-lieux : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-logements : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /les-services : 0.45 s de calcul au chargement (téléphone ralenti).

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
