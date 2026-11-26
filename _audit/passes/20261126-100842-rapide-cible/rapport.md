# Rapport d’audit

Projet : `marpa-breval-maquette` · 26/11/2026 11:13:59 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **15 échec(s)**
- Passe : `20261126-100842-rapide-cible` · version ?v=1
- Échecs : **15**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (9), souris immobile (1), vitesse (1), captures (1)

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

## Échecs

### image de partage (6)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `les-animations.html` — fichier introuvable : /assets/partage/les-animations-fr.jpg
- **image de partage** — `les-lieux.html` — fichier introuvable : /assets/partage/les-lieux-fr.jpg
- **image de partage** — `les-logements.html` — fichier introuvable : /assets/partage/les-logements-fr.jpg
- **image de partage** — `les-services.html` — fichier introuvable : /assets/partage/les-services-fr.jpg

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — div:nth-of-type(3) > ul > li:nth-of-type(2) > a « MSA (nouvel onglet) » — 32 × 44 px _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(1) > strong « 22 » — avec div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(2) > strong « 1 » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(1) > strong « 22 » — avec div.conteneur.logement-a-grille > div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(2) « 1 logement de 46 m² pour un couple » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.logement-a-grille > div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(1) « 22 logements de 31 m² » — avec div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(2) > strong « 1 » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.logement-a-grille > div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(1) « 22 logements de 31 m² » — avec div.conteneur.logement-a-grille > div.logement-a-texte:nth-of-type(2) > ul.logement-chiffres > li:nth-of-type(2) « 1 logement de 46 m² pour un couple » _(390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/` — div.logement-a-texte:nth-of-type(2) > div.plan-bloc > svg.plan > g.plan-num — par div.logement-a-texte:nth-of-type(2) > div.plan-bloc > svg.plan > rect.plan-piece:nth-of-type(1) _(1366×768 normal, 390×844 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(3) > span.ouv-info « Équipe présente de 7 h à 21 h · médaillon 24 h/24 » _(320×568 sansJs)_

### lien profond (2)

- **lien profond** — `/ → /les-services#teleassistance` — section cachée sous l'en-tête (294 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /les-services#teleassistance` — section cachée sous l'en-tête (366 px) _(390×844 lien profond)_

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

### texte de contenu sous 13 px (ordinateur) (5)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.ouv-accueil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#jour-nuit > figure.media.jour-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.service-carte:nth-of-type(1) > a > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.service-carte:nth-of-type(3) > a > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#visite-accueil > div.conteneur.cafe-grille > figure.media.cafe-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#semaine « Une semaine à la Maison Il se passe quelque chose  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### typographie française (3)

- **typographie française** — `/` — section#semaine > div.smn:nth-of-type(2) > div.smn__commandes:nth-of-type(1) > p.smn__description « Semaine du lundi 23 novembre au dimanche 29 novemb » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.smn:nth-of-type(2) > div.smn__corps:nth-of-type(2) > div.smn__feuille > p.smn__journal « 23 nov. – 29 nov. : 10 rendez-vous, 10 rendez-vous » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.temoin-grille > figure.temoin-citation > blockquote > p « « Maison agréable et personnel bienveillant. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 181 ms (différence 24 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/les-logements` — à 100 ms (différence 28 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/les-logements` — à 67 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

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
- Journal v1 : 1 étape(s) notée(s), 11 min de travail pour 20 min de budget, 2 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2781 ms depuis le premier octet
- Ouverture / (390×844) : 2718 ms depuis le premier octet
- Bords de l’écran : 72 images d’intro, 5 de voile et 26 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 376, tâche la plus longue 64 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1443, tâche la plus longue 0 ms
- Vitesse / : 0.62 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
