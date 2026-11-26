/* Les logements : « 31 m² » en chiffres géants au-dessus d'un bandeau de deux photos ; pièces une à une à côté
   du plan qui reste à l'écran ; le 46 m² ; chez vous (fauteuil au trait) ; entrer et sortir ; appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, appel, picto } from '../gabarits/blocs.mjs';

export const page = { cle: 'les-logements', fichier: 'les-logements', imagePartage: 'client/logement-meuble-1600.webp' };

const plan = (c, { couple = false } = {}) => brut(`<svg class="plan" viewBox="0 0 320 220" role="img" aria-label="${couple ? 'Schéma du logement de 46 m² avec une chambre en plus' : c.s('accueil.logement.schema')}"${couple ? '' : ' data-effet="plan-logement"'}>
  <rect class="plan-piece" data-piece="entree" x="12" y="12" width="96" height="88" rx="4"/>
  <rect class="plan-piece" data-piece="eau" x="12" y="108" width="96" height="76" rx="4"/>
  <rect class="plan-piece" data-piece="vie" x="116" y="12" width="${couple ? 82 : 128}" height="172" rx="4"/>
  ${couple ? '<rect class="plan-piece actif" data-piece="chambre" x="206" y="12" width="78" height="172" rx="4"/>' : ''}
  <rect class="plan-piece plan-piece--dehors" data-piece="terrasse" x="${couple ? 292 : 252}" y="40" width="${couple ? 22 : 56}" height="144" rx="4"/>
  <path class="plan-mur" d="M12 12 H${couple ? 284 : 244} V184 H12 Z"/>
  ${couple ? '<path class="plan-cloison" d="M202 12 V184"/>' : ''}
  ${couple ? '' : `<g class="plan-num"><g data-repere><circle cx="60" cy="56" r="13"/><text x="60" y="61">1</text></g><g data-repere><circle cx="180" cy="98" r="13"/><text x="180" y="103">2</text></g><g data-repere><circle cx="60" cy="146" r="13"/><text x="60" y="151">3</text></g><g data-repere><circle cx="280" cy="112" r="13"/><text x="280" y="117">4</text></g></g>`}
</svg>`);

export default (c) => {
  const imgs = { entree: ['client/logement-cuisine', 'Coin cuisine avec évier et plaques'], vie: ['client/logement-chambre', 'Chambre avec lit, fauteuil et grande penderie blanche'], eau: ['client/logement-salle-eau', 'Salle d’eau avec douche de plain‑pied et barre d’appui'], terrasse: ['client/logement-terrasse', 'Terrasse devant un logement, chaises de jardin et pot de géraniums'] };
  return html`
<section class="ouv-chiffre" id="debut">
  <div class="conteneur ouv-chiffre-tete">
    <p class="surtitre" data-anime>${c.t('logements.tete.surtitre')}</p>
    <h1 class="ouv-chiffre-titre"><span class="geant" data-iris-centre data-effet="chiffre"><span class="geant-n">31</span><span class="geant-u">m²</span></span> <span class="ouv-chiffre-suite" data-anime="lignes">${c.t('logements.tete.titre')}</span></h1>
    <div class="ouv-chiffre-bas">
      <p data-anime>${c.t('logements.tete.texte')}</p>
      <p class="ouv-chiffre-actions" data-anime>
        ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('logements.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <span class="ouv-info" data-info-cle>${picto('coeur', { classe: 'picto--petit' })}${c.t('logements.tete.info')}</span>
      </p>
    </div>
  </div>
  <div class="bandeau-photos">
    ${c.media({ nom: 'client/logement-meuble', alt: 'Logement meublé par une résidente : fauteuil, commode, télévision et souvenirs', cadrage: '50% 45%', priorite: true, classe: 'bandeau-a', sizes: '(max-width: 760px) 100vw, 60vw', attrs: 'data-effet="bandeau"' })}
    ${c.media({ nom: 'client/logement-lit', alt: 'Chambre lumineuse avec lit et fauteuil', cadrage: '60% 55%', classe: 'bandeau-b', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-effet="bandeau"' })}
  </div>
</section>

<section class="pieces" id="pieces">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('logements.pieces.surtitre')}</p>
      <h2 data-anime="lignes">${titre(c, 'logements.pieces')}</h2>
    </div>
    <div class="pieces-grille">
      <div class="pieces-plan" data-collant-plan>
        <div class="plan-bloc plan-bloc--colonne">
          ${plan(c)}
          <ol class="plan-legende">${c.donnees.pieces.map((p) => html`<li data-piece="${p.id}">${p.titre}</li>`)}</ol>
        </div>
        <p class="plan-note">${c.t('accueil.logement.schema')}</p>
      </div>
      <ol class="pieces-liste">
        ${c.donnees.pieces.map((p, i) => html`<li class="piece" id="piece-${p.id}" data-piece="${p.id}">
          ${c.media({ nom: imgs[p.id][0], alt: imgs[p.id][1], cadrage: '50% 50%', classe: 'piece-media' + (['entree', 'eau'].includes(p.id) ? ' piece-media--petite' : ''), sizes: '(max-width: 760px) 100vw, 45vw', attrs: i % 2 ? 'data-fx="parallaxe" data-fx-force="6"' : 'data-anime="rideau"' })}
          <div class="piece-texte">
            <span class="piece-num" aria-hidden="true">${i + 1}</span>
            <h3>${p.titre}</h3>
            <p>${p.texte}</p>
          </div>
        </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="couple" id="couple">
  <div class="conteneur couple-grille">
    <div class="couple-chiffre" data-visuel>
      <p class="geant geant--moyen" aria-hidden="true"><span class="geant-n" data-compteur="46">46</span><span class="geant-u">m²</span></p>
      ${plan(c, { couple: true })}
    </div>
    <div>
      <h2 data-anime="lignes">${c.t('logements.couple.titre')}</h2>
      <p data-anime>${c.t('logements.couple.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'visite', params: 'sujet=couple', classe: 'lien-fleche', texte: 'En parler à l’équipe' })}</p>
    </div>
  </div>
</section>

<section class="chezvous conteneur" id="chez-vous">
  <div class="chezvous-dessin" data-visuel>
    <svg class="dessin-fauteuil" viewBox="0 0 240 200" aria-hidden="true" data-fx="trace">
      <path d="M58 118V64c0-18 13-28 28-28h68c15 0 28 10 28 28v54"/>
      <path d="M40 112c-10 0-16 6-16 15v35h192v-35c0-9-6-15-16-15s-15 6-15 15v13H55v-13c0-9-5-15-15-15z"/>
      <path d="M48 162v22M192 162v22"/>
      <path d="M80 70c10-8 24-8 34 0M126 70c10-8 24-8 34 0"/>
      <path d="M196 60c8-14 24-14 30-2 4 8-2 16-12 18"/>
      <path d="M205 112c0-14 6-22 14-24 6-2 9 4 7 9l-4 9c6 2 9 7 9 13v11h-26z"/>
      <path d="M213 92l-3-8 8 5M224 92l3-8-8 5"/>
    </svg>
  </div>
  <div>
    <h2 data-anime="lignes">${titre(c, 'logements.chezvous')}</h2>
    <p data-anime>${c.t('logements.chezvous.texte')}</p>
    <p class="chezvous-animaux" data-anime>${picto('coeur', { classe: 'picto--petit' })}${c.t('logements.chezvous.animaux')}</p>
  </div>
</section>

<section class="acces" id="acces">
  <div class="conteneur">
    <h2 data-anime="lignes">${titre(c, 'logements.acces')}</h2>
    <ul class="acces-cartes" data-anime="cascade" data-visuel>
      <li>${picto('digicode')}<p>${c.t('logements.acces.hall')}</p></li>
      <li>${picto('fenetre')}<p>${c.t('logements.acces.terrasse')}</p></li>
    </ul>
  </div>
</section>

${appel(c, 'logements.fin')}
`;
};
