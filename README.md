# MARPA de Bréval — maquette

Maquette du futur site de la MARPA « La Maison des Fleurs », résidence autonomie à Bréval (78).
Adresse de la maquette : https://marpa-breval-maquette.vercel.app (non indexée par les moteurs de recherche).

## Pages

- Accueil : la maison au milieu de son jardin, pour qui, le logement, jour et nuit (cadran réglé sur l'heure de Bréval), les services, une semaine à la Maison (vrai planning de novembre et décembre 2026), les lieux, le mot de Manon, venir prendre un café.
- Les logements, Les services, Les lieux de vie, Les animations (prochain rendez-vous et agenda calculés à la date du jour), Contact et visite (demande de visite en trois étapes, simulée), page 404.

Pages du site actuel non reprises : aucune (le menu « Plus » du site actuel est vide). La page « Mentions légales » sera faite pour le site définitif.

## À fournir par le client (à compléter)

- **Mentions légales** : à compléter (éditeur : association MARPA de la Région de Bréval ; directrice de la publication ; numéro SIRET, absent du site actuel ; autorisation du Conseil départemental des Yvelines).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 26 novembre 2026).
- **Politique de confidentialité** : à compléter (formulaire de demande de visite : finalité, durée de conservation, droits, contact). La base légale citée sur le site actuel est incomplète.
- **Crédits des illustrations générées** : les images marquées « Illustration générée » ont été créées par IA (Grok) ; la mention reste sur le site définitif.
- **Photos** : de nouvelles photos du jardin, d'un logement vide et lumineux, de la salle de vie et des terrasses (en été, en grand format) remplaceraient avantageusement les illustrations.

### Informations retirées ou remplacées faute de source

| Page | Ce qui manque | Ce qui est affiché à la place |
|---|---|---|
| Toutes | Tarifs (loyer, charges, repas, services) | « Les tarifs vous sont communiqués par l'équipe, au téléphone ou lors de la visite. » (accueil et questions fréquentes) |
| Contact | Horaires d'accueil du public et de visite | Présence de l'équipe de 7 h à 21 h (donnée du site actuel) |
| Les services | Horaires des repas | Aucun horaire affiché |
| Les logements | Plan exact du logement | Schéma marqué « Schéma pour se repérer, ce n'est pas le plan exact » |
| Contact | Plan d'accès réel | Plan simplifié marqué comme tel |
| Les animations | Programme après le 13 décembre 2026 | « Le prochain programme sera affiché ici. » quand le planning est épuisé |
| Toutes | Conditions d'admission détaillées, aides au logement | Accueil (« Les questions que l'on n'ose pas toujours poser ») et questions fréquentes : « Posez la question à l'équipe : elle vous renseigne… » ; déroulé d'une entrée décrit sans délai ni pièce à fournir |

### Incohérences relevées sur le site actuel

- L'accueil annonce des logements « de 30 à 46 m² », la page Logements et la plaquette disent 31 m² et 46 m² : la maquette reprend 31 m² et 46 m².
- Numéro de téléphone écrit avec deux espaces sur la page Logements.
- Menu « Plus » vide.
- Les mentions légales parlent d'un formulaire qui n'existe pas sur le site.
- Trois noms : « MARPA de Bréval », « MARPA La Maison des Fleurs », « MARPA de la Région de Bréval ».

## À retirer à la mise en ligne définitive

- La consigne `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Les formulaires simulés (demande de visite) : à brancher sur un vrai service d'envoi.
- La ligne « Maquette de site » et les mentions « à compléter » du pied de page.
- Le planning de novembre et décembre 2026 : à tenir à jour dans `donnees/planning.json` (une seule source pour la semaine de l'accueil, l'agenda et le prochain rendez-vous).

## À garder

- La mention « Illustration générée » sur chaque image créée par IA.

## Fabrication

Pages générées depuis `donnees/` et `source/` par `node outils/generer.mjs` (ne jamais modifier les pages produites à la main).
Images : pipeline de la bibliothèque des maquettes (`plan-images.json`). Audit : `node _audit/audit.mjs`.
