/* Les services : titre à gauche, éventail de trois photos qui se déplie ; les cinq services en tiroirs (module
   offre-a-tiroirs) ; participer à la vie de la maison ; l'équipe ; appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, appel, picto } from '../gabarits/blocs.mjs';

export const page = { cle: 'les-services', fichier: 'les-services', imagePartage: 'client/salle-de-vie-1600.webp' };

const IMAGES = {
  restauration: ['grok/services-table', 'Table dressée pour le déjeuner dans une salle à manger lumineuse'],
  teleassistance: ['grok/accueil-nuit', 'Allée de jardin à l’heure bleue, une lanterne allumée sur un muret'],
  animations: ['grok/animations-atelier', 'Table d’atelier avec fleurs coupées, vases, argile et outils de modelage'],
  entretien: ['client/logement-lit', 'Chambre lumineuse avec lit et fauteuil'],
  linge: ['client/linge', 'Pile de pulls pliés'],
};

const initiales = (n) => n.split(/\s+/).filter((m) => /^[A-ZÀ-Ý]/.test(m)).map((m) => m[0]).slice(0, 2).join('');

export default (c) => html`
<section class="ouv-eventail conteneur" id="debut">
  <div class="ouv-eventail-texte">
    <p class="surtitre" data-anime>${c.t('services.tete.surtitre')}</p>
    <h1 data-anime="lignes">${titre(c, 'services.tete')}</h1>
    <p data-anime>${c.t('services.tete.texte')}</p>
    <p class="ouv-chiffre-actions" data-anime>
      ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('services.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="ouv-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('services.tete.info')}</span>
    </p>
  </div>
  <div class="eventail" data-iris-centre>
    ${c.media({ nom: 'client/linge', alt: 'Pile de pulls pliés', cadrage: '50% 55%', classe: 'eventail-carte eventail-carte--1', sizes: '(max-width: 760px) 45vw, 22vw', attrs: 'data-effet="eventail"' })}
    ${c.media({ nom: 'grok/animations-atelier', alt: 'Table d’atelier avec fleurs coupées, vases, argile et outils de modelage', cadrage: '50% 50%', classe: 'eventail-carte eventail-carte--2', sizes: '(max-width: 760px) 45vw, 22vw', attrs: 'data-effet="eventail"' })}
    ${c.media({ nom: 'grok/services-table', alt: 'Table dressée pour le déjeuner dans une salle à manger lumineuse', cadrage: '50% 50%', priorite: true, classe: 'eventail-carte eventail-carte--3', sizes: '(max-width: 760px) 60vw, 28vw', attrs: 'data-effet="eventail"' })}
  </div>
</section>

<section class="ofr socle-cadre services-tiroirs" data-module="offre-a-tiroirs" aria-labelledby="ofr-titre" id="les-cinq">
  <div class="ofr__tete">
    <h2 class="ofr__h2" id="ofr-titre" data-anime="lignes">${c.t('services.tiroirs.titre')}</h2>
  </div>
  <div class="ofr__corps">
    <ol class="ofr__tiroirs">
      ${c.donnees.services.map((s, i) => html`<li class="ofr__tiroir" id="${s.id}" data-sujet="${s.id}">
        <h3 class="ofr__titre"><button type="button" class="ofr__poignee"><span class="ofr__num">0${i + 1}</span><span class="ofr__nom">${s.titre}</span><span class="ofr__resume">${s.resume}</span></button></h3>
        <div class="ofr__contenu"><div class="ofr__interieur">
          ${c.media({ nom: IMAGES[s.id][0], alt: IMAGES[s.id][1], cadrage: '50% 50%', classe: 'ofr__image', sizes: '(max-width: 760px) 100vw, 40vw' })}
          <p>${s.texte}</p>
          <ul>${s.points.map((p) => html`<li>${p}</li>`)}</ul>
          ${s.id === 'animations'
            ? c.lien('les-animations', { classe: 'socle-bouton socle-bouton--plein ofr__parler', texte: c.t('services.tiroirs.suite') })
            : c.lien('contact', { ancre: 'visite', params: 'sujet=' + s.id, classe: 'socle-bouton socle-bouton--plein ofr__parler', texte: c.t('services.tiroirs.parler') })}
        </div></div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="participer" id="participer">
  <div class="conteneur participer-grille">
    ${c.media({ nom: 'grok/services-legumes', alt: 'Légumes du jardin épluchés sur une table de cuisine en bois', cadrage: '50% 50%', classe: 'participer-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="zoom"' })}
    <div>
      <h2 data-anime="lignes">${titre(c, 'services.participer')}</h2>
      <p data-anime>${c.t('services.participer.texte')}</p>
      <ul class="participer-liste" data-anime="cascade">
        <li>${picto('legumes')}<span>${c.t('services.participer.l1')}</span></li>
        <li>${picto('jardin')}<span>${c.t('services.participer.l2')}</span></li>
        <li>${picto('cuisine')}<span>${c.t('services.participer.l3')}</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="equipe conteneur" id="equipe">
  <div class="tete-section">
    <h2 data-anime="lignes">${titre(c, 'services.equipe')}</h2>
    <p data-anime>${c.t('services.equipe.texte')}</p>
  </div>
  <ul class="equipe-liste" data-anime="cascade" data-visuel>
    ${c.donnees.equipe.responsables.map((p) => html`<li class="personne personne--resp"><span class="initiales" aria-hidden="true">${initiales(p.nom)}</span><strong>${p.nom}</strong><span>${p.role}</span></li>`)}
    ${c.donnees.equipe.agents.map((n) => html`<li class="personne"><span class="initiales" aria-hidden="true">${n[0]}</span><strong>${n}</strong><span>Agent</span></li>`)}
  </ul>
</section>

${appel(c, 'services.fin')}
`;
