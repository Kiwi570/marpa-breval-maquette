# Plans — MARPA de Bréval, direction A « La Maison des Fleurs »

Palette : lin #F7F2E8 (fond dominant), lin foncé #EFE7D6 (rythme), sauge #2F4A3A (bande Jour et nuit, appel final, voile), coquelicot #B23F2A (boutons, un mot par titre), encre #23302A.
Polices : Alegreya 500 (titres, italique pour le mot fort), Atkinson Hyperlegible Next 400/600 (texte, 18 px ordinateur, 16 px téléphone).
Voile : iris (le cœur de la fleur), fond sauge, fleur de lin au centre.

## Plan du site (v1)

| Page | Ouverture | Sections |
|---|---|---|
| Accueil | Photo du jardin plein cadre, titre à gauche, fleur posée sur la photo (objet d'ouverture) | Pour qui · Le logement · Jour et nuit · Les services · Une semaine à la Maison · Les lieux · Le mot de Manon · Venez visiter |
| Les logements | « 31 m² » géant en chiffres, puis bandeau photo pleine largeur dessous | Les pièces une à une · Le 46 m² pour un couple · Chez vous (meubles, animaux) · Entrer et sortir librement · Appel |
| Les services | Titre à gauche, trois photos en éventail à droite qui se déplient | Tous facultatifs · Les 5 services en tiroirs · Participer à la vie de la maison · L'équipe · Appel |
| Les lieux de vie | Grands arbres : vignette qui s'ouvre jusqu'au plein écran | Le jardin de 5 000 m² · Salle de vie · Petit salon · Grande salle d'animation · Les terrasses · Appel |
| Les animations | Le prochain rendez-vous en très grand (jour, heure, activité), calculé à la date | La semaine type · L'agenda daté (passé grisé, aujourd'hui repéré) · Les sorties · Avec qui · Appel |
| Contact et visite | Numéro en très grand et demande de visite en étapes côte à côte | Formulaire en étapes · Venir à Bréval (plan simple) · L'équipe · Questions fréquentes |
| 404 | « Ce chemin ne mène nulle part » sur le banc oublié | Retour à l'accueil |

## Plan d'animation

Intro (chaque arrivée et rechargement, moins de 3 s) :
- 0 s : panneau lin, une fleur de cinq pétales coquelicot repliée au centre, « MARPA de Bréval » en Alegreya.
- 0,5 s : les pétales s'ouvrent un à un en tournant (ressort doux), le nom monte.
- 1 s : la fleur glisse jusqu'à sa place sur la photo du jardin (versObjet), le nom s'efface.
- 1,4 s → 2,3 s : le panneau s'ouvre en cercle depuis le cœur de la fleur ; le jardin apparaît, légèrement zoomé, qui se resserre.
- 1,6 s → 2,6 s : le titre monte ligne à ligne, « jardin » en italique coquelicot, puis bouton et info clé.

Effets propres (data-effet) :
- `fleur` : fleur d'ouverture, ses pétales tournent lentement au défilement et respirent tout seuls ; reprise par le voile (iris depuis son cœur).
- `cadran` : cadran de 24 h sur l'heure réelle de Bréval ; l'aiguille fait le tour jusqu'à l'heure en entrant à l'écran ; arc jour (équipe présente 7 h – 21 h) et arc nuit (médaillon) ; statut en direct.
- `plan-logement` : plan schématique du 31 m² qui se dessine ; les pièces s'allument une à une au défilement, la liste suit.
- `prochain` : prochain rendez-vous de l'agenda, calculé à la date, chiffres de l'heure qui défilent.

Effets de la bibliothèque : lignes et mots sur les titres, cascade sur les cartes, rideau et parallaxe sur les photos, galerie épinglée des lieux (ordinateur), plein écran (ouverture des Lieux), compteurs (31, 46, 5 000, 22), trace (pictos de la liberté), vitesse sur les cartes de services, onde sur la photo du témoignage.

Modules : semainier (semaine type), agenda-des-dates (agenda daté), offre-a-tiroirs (services), formulaire-par-etapes (demande de visite), horaires-ouvert-maintenant (base du cadran).

## Plan des images

- Photos du client (à confirmer à réception du zip) : logements (5), salle de vie, petit salon, grande salle, jardin, linge, cuisine ; logo.
- Grok (document Word) : 14 images, dont 7 indispensables (jardin d'ouverture et sa version téléphone, l'heure bleue de Jour et nuit, la table dressée, les grands arbres des Lieux et leur version téléphone, la table d'atelier). Jamais la maison, jamais de résident ni de visage ; mention « Illustration générée » partout.
