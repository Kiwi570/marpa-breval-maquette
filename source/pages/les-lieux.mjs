/* Les lieux de vie : grands arbres en plein cadre, titre sur un cartouche de lin ; le jardin (vraie photo qui s'ouvre
   jusqu'au plein écran, « 5 000 m² » qui s'écarte) ; salle de vie, petit salon, grande salle ; les terrasses ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { titre, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'les-lieux', fichier: 'les-lieux', imagePartage: 'client/petit-salon-1600.webp' };

const IMAGES = {
  'salle-de-vie': ['client/salle-de-vie', 'Salle de vie : tables de la salle à manger et cheminée'],
  'petit-salon': ['client/petit-salon', 'Petit salon avec tapis de marche, vélo d’appartement et plantes'],
  'grande-salle': ['client/grande-salle', 'Fête dans la grande salle d’animation, résidents et familles à table'],
};

export default (c) => {
  const lieux = c.donnees.lieux.filter((l) => l.id !== 'jardin');
  const jardin = c.donnees.lieux.find((l) => l.id === 'jardin');
  return html`
<section class="ouv-cadre" id="debut">
  ${c.media({ nom: 'grok/lieux-arbres', alt: 'Grands arbres au-dessus d’une pelouse, lumière d’été qui traverse les feuilles', cadrage: '50% 45%', priorite: true, classe: 'ouv-cadre-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur ouv-cadre-bas">
    <div class="cartouche" data-iris-centre>
      <p class="surtitre" data-anime>${c.t('lieux.tete.surtitre')}</p>
      <h1 data-anime="lignes">${titre(c, 'lieux.tete')}</h1>
      <p data-anime>${c.t('lieux.tete.texte')}</p>
      <p class="ouv-chiffre-actions" data-anime>
        ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('lieux.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <span class="ouv-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('lieux.tete.info')}</span>
      </p>
    </div>
  </div>
</section>

<section class="jardin" id="jardin" data-fx="plein-ecran" data-fx-depart="inset(14% 18% 14% 18% round 28px)">
  <div data-collant>
    ${c.media({ nom: 'client/jardin-fleurs', alt: 'Massif de pétunias et de géraniums devant la maison de plain‑pied, la serre et le jardin', cadrage: '55% 55%', classe: 'jardin-media', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="jardin-mots" aria-hidden="true" data-audit-ignorer><span data-fx-ecarte="g">5 000</span> <span data-fx-ecarte="d">m²</span></p>
    <div class="jardin-legende" data-fx-apres>
      <h2>${jardin.titre}</h2>
      <p>${jardin.texte}</p>
    </div>
  </div>
</section>

<section class="lieux-liste conteneur" id="partages">
  <h2 class="lieux-liste-titre" data-anime="lignes">${c.t('lieux.liste.titre')}</h2>
  ${lieux.map((l, i) => html`<article class="lieu${i % 2 ? ' lieu--inverse' : ''}" id="${l.id}">
    ${c.media({ nom: IMAGES[l.id][0], alt: IMAGES[l.id][1], cadrage: '50% 50%', classe: 'lieu-photo', sizes: '(max-width: 760px) 100vw, 55vw', attrs: i === 1 ? 'data-fx="parallaxe" data-fx-force="8"' : 'data-anime="rideau"' })}
    <div class="lieu-texte">
      <span class="lieu-num" aria-hidden="true">0${i + 1}</span>
      <h3 data-anime="lignes">${l.titre}</h3>
      <p data-anime>${l.texte}</p>
    </div>
  </article>`)}
</section>

<section class="terrasses" id="terrasses">
  <div class="conteneur terrasses-grille">
    <div>
      <h2 data-anime="lignes">${titre(c, 'lieux.terrasses')}</h2>
      <p data-anime>${c.t('lieux.terrasses.texte')}</p>
      <p data-anime>${c.lien('les-logements', { ancre: 'pieces', classe: 'lien-fleche', texte: c.t('lieux.terrasses.lien') })}</p>
    </div>
    ${c.media({ nom: 'client/logement-terrasse', alt: 'Terrasse devant un logement, chaises de jardin et pot de géraniums', cadrage: '55% 60%', classe: 'terrasses-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appel(c, 'lieux.fin')}
`;
};
