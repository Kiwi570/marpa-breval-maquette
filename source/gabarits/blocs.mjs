/* Composants communs aux pages : titre avec un mot fort, appel final, pictogrammes dessinés. */
import { html, brut } from '../../outils/gabarit.mjs';
import { fleur } from './fleur.mjs';

/* Titre dont le dernier mot porte l'accent (italique coquelicot). */
export const titre = (c, base) => html`${c.t(base + '.titre')}<em class="mot">${c.t(base + '.titreMot')}</em>`;

/* Appel final des pages intérieures : bande sauge, fleur au trait qui se dessine au défilement. */
export function appel(c, base, { id = 'appel' } = {}) {
  const ct = c.site.contact;
  return html`<section class="appel" id="${id}">
  <div class="conteneur appel-grille">
    <div class="appel-dessin" data-visuel>${fleur({ trait: true, classe: 'fleur--appel', attrs: 'data-fx="trace"' })}</div>
    <div class="appel-texte">
      <h2 data-anime="lignes">${titre(c, base)}</h2>
      <p data-anime>${c.t(base + '.texte')}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton bouton--clair', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour-clair" href="tel:${ct.telephoneLien}">${ct.telephone}</a>
      </p>
    </div>
  </div>
</section>`;
}

/* Pictogrammes au trait (ils se dessinent avec data-fx="trace"). */
const P = {
  porte: '<path d="M14 42V8h20v34"/><path d="M8 42h32"/><circle cx="29" cy="26" r="1.6"/><path d="M34 12l6 2v26l-6 2"/>',
  voiture: '<path d="M7 30l3-10c1-3 3-4 6-4h16c3 0 5 1 6 4l3 10"/><rect x="5" y="30" width="38" height="9" rx="3"/><circle cx="14" cy="39" r="3.5"/><circle cx="34" cy="39" r="3.5"/>',
  medecin: '<path d="M14 8v12a10 10 0 0 0 20 0V8"/><path d="M24 30v4a8 8 0 0 0 16 0v-6"/><circle cx="40" cy="25" r="3"/>',
  digicode: '<rect x="12" y="6" width="24" height="36" rx="3"/><g><circle cx="19" cy="15" r="1.6"/><circle cx="24" cy="15" r="1.6"/><circle cx="29" cy="15" r="1.6"/><circle cx="19" cy="21" r="1.6"/><circle cx="24" cy="21" r="1.6"/><circle cx="29" cy="21" r="1.6"/><circle cx="19" cy="27" r="1.6"/><circle cx="24" cy="27" r="1.6"/><circle cx="29" cy="27" r="1.6"/></g><path d="M19 35h10"/>',
  fenetre: '<path d="M8 42V8h32v34"/><path d="M24 8v34"/><path d="M4 42h40"/><path d="M28 26h3"/>',
  legumes: '<path d="M10 30c0-8 6-14 14-14s14 6 14 14c0 6-6 10-14 10S10 36 10 30z"/><path d="M24 16c0-5 3-8 7-9M24 16c-2-4-6-6-10-6"/>',
  jardin: '<path d="M24 42V22"/><path d="M24 26c-8 0-12-5-12-12 7 0 12 4 12 12zM24 22c0-8 5-13 13-13 0 8-5 13-13 13z"/><path d="M10 42h28"/>',
  cuisine: '<path d="M10 22h28v6a14 14 0 0 1-28 0z"/><path d="M6 22h36"/><path d="M18 14c0-3 3-3 3-6M27 14c0-3 3-3 3-6"/>',
  coeur: '<path d="M24 40S8 30 8 18a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 12-16 22-16 22z"/>',
  fauteuil: '<path d="M12 26V14c0-4 3-6 6-6h12c3 0 6 2 6 6v12"/><path d="M8 24c-2 0-3 1-3 3v7h38v-7c0-2-1-3-3-3s-3 1-3 3v3H11v-3c0-2-1-3-3-3z"/><path d="M10 34v6M38 34v6"/>',
};
export function picto(nom, { classe = '' } = {}) {
  return brut(`<svg class="picto${classe ? ' ' + classe : ''}" viewBox="0 0 48 48" aria-hidden="true" focusable="false" data-fx="trace">${P[nom]}</svg>`);
}
