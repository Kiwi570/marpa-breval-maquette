/* Page 404 : le banc oublié au fond du jardin. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/404-banc', alt: 'Banc de jardin vide sous un arbre, un chapeau de paille oublié', cadrage: '70% 50%', priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="zoom" data-iris-centre' })}
  <div class="conteneur introuvable-texte">
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    <p class="introuvable-info" data-info-cle>${c.site.contact.telephone} · ${c.site.contact.adresse}</p>
  </div>
</section>
`;
