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
        ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${ct.telephoneLien}">${ct.telephone}</a>
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
  euro: '<circle cx="24" cy="24" r="18"/><path d="M31 16.5a10 10 0 1 0 0 15"/><path d="M13 21h14M13 27h14"/>',
  aide: '<path d="M6 32h9l8 4h11a3 3 0 0 0 0-6h-8l-5-3H6"/><path d="M6 40h10"/><path d="M33 20s-7-4.5-7-9a4 4 0 0 1 7-2.4A4 4 0 0 1 40 11c0 4.5-7 9-7 9z"/>',
  cle: '<circle cx="15" cy="24" r="8"/><path d="M23 24h19M36 24v6M41 24v4"/><circle cx="15" cy="24" r="2.5"/>',
  fauteuil: '<path d="M12 26V14c0-4 3-6 6-6h12c3 0 6 2 6 6v12"/><path d="M8 24c-2 0-3 1-3 3v7h38v-7c0-2-1-3-3-3s-3 1-3 3v3H11v-3c0-2-1-3-3-3z"/><path d="M10 34v6M38 34v6"/>',
};
export function picto(nom, { classe = '' } = {}) {
  return brut(`<svg class="picto${classe ? ' ' + classe : ''}" viewBox="0 0 48 48" aria-hidden="true" focusable="false" data-fx="trace">${P[nom]}</svg>`);
}

/* Dessins au trait des cinq services (cartes de l'accueil), même style pour toutes. */
const S = {
  restauration: '<circle cx="50" cy="52" r="24"/><circle cx="50" cy="52" r="14"/><path d="M14 22v16a5 5 0 0 0 10 0V22M19 22v56"/><path d="M84 22c-7 7-7 20 0 25v31"/>',
  teleassistance: '<path d="M32 12q16 28 32 0"/><circle cx="48" cy="54" r="20"/><circle cx="48" cy="54" r="7"/><path d="M76 42a16 16 0 0 1 0 24M84 34a26 26 0 0 1 0 40"/>',
  animations: '<path d="M36 62h24l-4 22H40z"/><path d="M48 62V36M48 48c-7-5-12-5-16-2M48 44c7-5 12-5 16-2"/><circle cx="48" cy="28" r="6"/><circle cx="38" cy="22" r="5"/><circle cx="58" cy="22" r="5"/><circle cx="48" cy="16" r="5"/>',
  entretien: '<path d="M12 72V38M12 60h72v12M84 60V50a8 8 0 0 0-8-8H40v18"/><circle cx="24" cy="50" r="6"/><path d="M70 14v12M64 20h12M58 30v6M55 33h6"/>',
  linge: '<path d="M34 16 16 26l8 15 8-4v41h32V37l8 4 8-15-18-10c-2 6-8 10-14 10s-12-4-14-10z"/><path d="M40 52h16M40 62h16"/>',
};
export function pictoService(id) {
  return brut(`<svg class="dessin-service" viewBox="0 0 96 96" aria-hidden="true" focusable="false" data-fx="trace">${S[id] || ''}</svg>`);
}
