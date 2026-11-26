/* Les animations : le prochain rendez-vous en très grand (calculé à la date, à l'heure de Bréval) à côté de la table
   d'atelier ; l'agenda des temps forts (module agenda-des-dates : passé grisé, jour repéré, filtres) ;
   les rendez-vous de chaque semaine ; sortir et voir du monde ; avec qui ; appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre, appel, picto } from '../gabarits/blocs.mjs';
import { tempsForts, typeNom, heureTexte, dateTexte } from '../gabarits/planning.mjs';

export const page = { cle: 'les-animations', fichier: 'les-animations', imagePartage: 'client/grande-salle-1600.webp' };

export default (c) => {
  const pl = c.donnees.planning;
  const forts = tempsForts(pl);
  const donnees = { types: pl.types, evenements: pl.evenements.filter((e) => !e.confirmer).map(({ date, heure, titre: t, type, lieu }) => ({ date, heure, titre: t, type, lieu })) };
  return html`
<section class="ouv-prochain conteneur" id="debut">
  <div class="prochain" data-iris-centre>
    <p class="surtitre" data-anime>${c.t('animations.tete.surtitre')}</p>
    <h1 class="prochain-titre-page" data-anime="lignes">${c.t('animations.tete.titre')}</h1>
    <div class="prochain-carte" data-info-cle data-effet="prochain">
      <p class="prochain-etiquette">${c.t('animations.tete.prochain')}</p>
      <p class="prochain-quand"><span data-prochain-jour>Programme de novembre et décembre 2026</span></p>
      <p class="prochain-heure" data-prochain-heure aria-hidden="true"></p>
      <p class="prochain-quoi" data-prochain-quoi>${c.t('animations.tete.sansjs')}</p>
    </div>
    <p class="prochain-action" data-anime>${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('animations.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="prochain-texte masque-ecran-bas" data-anime>${c.t('animations.tete.texte')}</p>
  </div>
  ${c.media({ nom: 'grok/animations-atelier', alt: 'Table d\u2019atelier avec fleurs coupées, vases, argile et outils de modelage', cadrage: '50% 50%', priorite: true, classe: 'prochain-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <script type="application/json" id="planning-donnees">${brut(JSON.stringify(donnees).replace(/</g, '\\u003c'))}</script>
</section>

<section class="agd socle-cadre agenda" data-module="agenda-des-dates" aria-labelledby="agd-titre" id="agenda">
  <div class="agd__tete">
    <h2 class="agd__h2" id="agd-titre" data-anime="lignes">${c.t('animations.agenda.titre')}</h2>
    <p class="agenda-aide">${c.t('animations.agenda.texte')}</p>
    <p class="agd__prochaine" data-prochaine aria-live="polite"></p>
  </div>
  <div class="agd__outils">
    <div class="agd__filtres" role="group" aria-label="${c.s('animations.agenda.filtres')}"></div>
    <p class="agd__compte" data-compte aria-live="polite"></p>
  </div>
  <div class="agenda-liste" data-visuel>
    <ol class="agd__liste">
      ${forts.map((e) => html`<li class="agd__date" data-debut="${e.heure ? e.date + 'T' + e.heure : e.date}" data-type="${typeNom(pl, e.type)}" data-lieu="${e.lieu || c.s('animations.agenda.maison')}">
        <h3 class="agd__titre">${e.titre}</h3>
        <time class="agd__quand" datetime="${e.heure ? e.date + 'T' + e.heure : e.date}">${dateTexte(e.date)}${e.heure ? ', ' + heureTexte(e.heure) : ''}</time>
        ${e.texte ? html`<p class="agd__texte">${e.texte}</p>` : ''}
      </li>`)}
    </ol>
  </div>
  <p class="agd__vide" hidden>${c.t('animations.agenda.vide')}</p>
</section>

<section class="regulier" id="chaque-semaine">
  <div class="conteneur regulier-grille">
    <div>
      <h2 data-anime="lignes">${titre(c, 'animations.regulier')}</h2>
      <ul class="regulier-liste" data-anime="cascade">
        ${['l1', 'l2', 'l3', 'l4', 'l5'].map((k) => html`<li>${c.t('animations.regulier.' + k)}</li>`)}
      </ul>
    </div>
    <div class="regulier-photos">
      ${c.media({ nom: 'grok/animations-jardinage', alt: 'Carré potager en bois avec jeunes plants, transplantoir et arrosoir', cadrage: '50% 50%', classe: 'regulier-a', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'grok/animations-jeux', alt: 'Jeu de cartes et théière sur une table en bois', cadrage: '50% 50%', classe: 'regulier-b', sizes: '(max-width: 760px) 60vw, 20vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
    </div>
  </div>
</section>

<section class="sorties conteneur" id="sorties">
  <div class="tete-section">
    <h2 data-anime="lignes">${titre(c, 'animations.sorties')}</h2>
    <p data-anime>${c.t('animations.sorties.texte')}</p>
  </div>
  <ul class="sorties-cartes" data-anime="cascade">
    <li>${c.media({ nom: 'grok/animations-sortie', alt: 'Panier de goûter et plaid au bord d\u2019une rivière, sous les saules', cadrage: '50% 55%', classe: 'sortie-media', sizes: '(max-width: 760px) 100vw, 33vw' })}<h3>${c.t('animations.sorties.s1t')}</h3></li>
    <li><div class="media sortie-media sortie-dessin" data-visuel aria-hidden="true">
      <svg viewBox="0 0 200 150" data-fx="trace"><path d="M40 120V80M40 80l-22 18M40 80l22 18M40 62l-18 16M40 62l18 16M40 46l-12 12M40 46l12 12M40 30v16"/><path d="M110 120V70M110 70c-26 0-34-16-34-30 0-18 14-28 34-28s34 10 34 28c0 14-8 30-34 30z"/><path d="M165 120V88M165 88l-16 14M165 88l16 14M165 72l-12 12M165 72l12 12M165 58v14"/><path d="M8 122h184"/></svg>
    </div><h3>${c.t('animations.sorties.s2t')}</h3></li>
    <li><div class="media sortie-media sortie-dessin sortie-dessin--clair" data-visuel aria-hidden="true">
      <svg viewBox="0 0 200 150" data-fx="trace"><rect x="30" y="38" width="140" height="80" rx="6"/><path d="M30 58h140M30 98h140"/><path d="M44 38l-8-16 22-6 8 16M78 38l-8-16 22-6 8 16"/><circle cx="100" cy="78" r="12"/><path d="M96 72l10 6-10 6z"/></svg>
    </div><h3>${c.t('animations.sorties.s3t')}</h3><p>${c.t('animations.sorties.s3')}</p></li>
  </ul>
</section>

<section class="avec conteneur" id="avec-qui">
  <div class="avec-carte" data-visuel>
    ${picto('coeur', { classe: 'picto--grand' })}
    <div>
      <h2 data-anime="lignes">${c.t('animations.avec.titre')}</h2>
      <p data-anime>${c.t('animations.avec.texte')}</p>
    </div>
  </div>
</section>

${appel(c, 'animations.fin')}
`;
};
