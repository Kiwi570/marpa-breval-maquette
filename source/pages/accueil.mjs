/* Accueil : la maison au milieu de son jardin.
   Ouverture (fleur posée sur le jardin, objet de l'intro) · Pour qui · Le logement (plan qui s'allume) ·
   Jour et nuit (cadran 24 h sur l'heure de Bréval) · Les services · Une semaine à la Maison (semainier, vrai planning) ·
   Les lieux (galerie épinglée) · Le mot de Manon · Venez prendre un café. */
import { html, brut } from '../../outils/gabarit.mjs';
import { fleur } from '../gabarits/fleur.mjs';
import { titre, picto } from '../gabarits/blocs.mjs';
import { semaine } from '../gabarits/planning.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'client/jardin-fleurs-1600.webp' };

/* Plan schématique du logement de 31 m² (repères numérotés, légende en HTML à côté). */
const plan = (c, { classe = '' } = {}) => brut(`<svg class="plan${classe ? ' ' + classe : ''}" viewBox="0 0 320 220" role="img" aria-label="${c.s('accueil.logement.schema')}" data-effet="plan-logement">
  <rect class="plan-piece" data-piece="entree" x="12" y="12" width="96" height="88" rx="4"/>
  <rect class="plan-piece" data-piece="eau" x="12" y="108" width="96" height="76" rx="4"/>
  <rect class="plan-piece" data-piece="vie" x="116" y="12" width="128" height="172" rx="4"/>
  <rect class="plan-piece plan-piece--dehors" data-piece="terrasse" x="252" y="40" width="56" height="144" rx="4"/>
  <path class="plan-porte" d="M244 120 v36"/>
  <path class="plan-mur" d="M12 12 H244 V184 H12 Z"/>
  <g class="plan-num">
    <g data-repere><circle cx="60" cy="56" r="13"/><text x="60" y="61">1</text></g>
    <g data-repere><circle cx="180" cy="98" r="13"/><text x="180" y="103">2</text></g>
    <g data-repere><circle cx="60" cy="146" r="13"/><text x="60" y="151">3</text></g>
    <g data-repere><circle cx="280" cy="112" r="13"/><text x="280" y="117">4</text></g>
  </g>
</svg>`);

/* Arcs du cadran de 24 h (0 h en haut), écrits dans la page : lisibles sans JavaScript. */
const pt = (h, r) => { const a = (h / 24) * 2 * Math.PI - Math.PI / 2; return `${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)}`; };
const arc = (h1, h2, r) => { const d = ((h2 - h1 + 24) % 24); return `M${pt(h1, r)} A${r} ${r} 0 ${d > 12 ? 1 : 0} 1 ${pt(h2, r)}`; };
const graduations = () => Array.from({ length: 24 }, (_, h) => { const a = (h / 24) * 2 * Math.PI - Math.PI / 2, r1 = h % 6 ? 108 : 104; return `<line x1="${(Math.cos(a) * r1).toFixed(2)}" y1="${(Math.sin(a) * r1).toFixed(2)}" x2="${(Math.cos(a) * 112).toFixed(2)}" y2="${(Math.sin(a) * 112).toFixed(2)}"/>`; }).join('');

export default (c) => {
  const pieces = c.donnees.pieces;
  const sem = semaine(c.donnees.planning);
  const lieuxGalerie = [
    { nom: 'client/jardin-fleurs', titre: 'Le jardin', texte: '5 000 m² d\u2019arbres et de fleurs', alt: 'Massif de pétunias et de géraniums devant la maison, la serre et le jardin', page: 'les-lieux', ancre: 'jardin' },
    { nom: 'client/salle-de-vie', titre: 'La salle de vie', texte: 'Salle à manger, salon et cheminée', alt: 'Salle de vie : tables de la salle à manger et cheminée', page: 'les-lieux', ancre: 'salle-de-vie' },
    { nom: 'client/petit-salon', titre: 'Le petit salon', texte: 'Bibliothèque, vélo et tapis de marche', alt: 'Petit salon avec tapis de marche, vélo d\u2019appartement et plantes', page: 'les-lieux', ancre: 'petit-salon' },
    { nom: 'client/grande-salle', titre: 'La grande salle', texte: 'Fêtes, belote et portes ouvertes', alt: 'Fête dans la grande salle d\u2019animation, résidents et familles à table', page: 'les-lieux', ancre: 'grande-salle' },
    { nom: 'client/logement-terrasse', titre: 'Les terrasses', texte: 'Une par logement, sur le jardin', alt: 'Terrasse devant un logement, chaises de jardin et pot de géraniums', page: 'les-lieux', ancre: 'terrasses' },
  ];
  const cartes = c.donnees.services;
  return html`
<section class="ouv-accueil" id="debut">
  ${c.media({ nom: 'grok/accueil-jardin', alt: 'Jardin arboré au printemps, banc de bois et massifs fleuris', cadrage: '62% 50%', cadrageMobile: '60% 50%', priorite: true, classe: 'ouv-accueil-media', sizes: '100vw', attrs: 'data-anime="gsap"' })}
  <canvas class="petales" aria-hidden="true" data-audit-ignorer></canvas>
  <div class="ouv-accueil-voile" aria-hidden="true"></div>
  <div class="conteneur ouv-accueil-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="ouv-titre"><span class="ouv-ligne"><span>${c.t('accueil.hero.titreA')}</span></span> <span class="ouv-ligne"><span>${c.t('accueil.hero.titreB')}</span></span> <span class="ouv-ligne"><span>${c.t('accueil.hero.titreC')}<em class="mot">${c.t('accueil.hero.titreMot')}</em></span></span></h1>
    <p class="ouv-texte" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="ouv-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="ouv-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>Équipe présente de 7 h à 21 h · médaillon 24 h/24</span>
    </p>
  </div>
  <div class="ouv-fleur">${fleur({ classe: 'fleur--accueil', attrs: 'data-iris-centre="disque" data-effet="fleur"' })}</div>
</section>

<section class="pourqui conteneur" id="pour-qui">
  <h2 class="pourqui-titre" data-anime="mots">${c.t('accueil.pourqui.titre')}</h2>
  <div class="pourqui-bas">
    <p class="pourqui-texte" data-anime>${c.t('accueil.pourqui.texte')}</p>
    <ul class="libertes" data-anime="cascade" data-visuel>
      <li>${picto('porte')}<strong>${c.t('accueil.pourqui.l1t')}</strong><span>${c.t('accueil.pourqui.l1')}</span></li>
      <li>${picto('voiture')}<strong>${c.t('accueil.pourqui.l2t')}</strong><span>${c.t('accueil.pourqui.l2')}</span></li>
      <li>${picto('medecin')}<strong>${c.t('accueil.pourqui.l3t')}</strong><span>${c.t('accueil.pourqui.l3')}</span></li>
    </ul>
  </div>
</section>

<section class="logement-a" id="logement">
  <div class="conteneur logement-a-grille">
    <div class="logement-a-photos">
      ${c.media({ nom: 'client/logement-meuble', alt: 'Logement meublé par une résidente : fauteuil, commode, télévision et souvenirs', cadrage: '55% 45%', classe: 'logement-a-grand', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'client/logement-terrasse', alt: 'Terrasse devant un logement, chaises de jardin et pot de géraniums', cadrage: '55% 60%', classe: 'logement-a-petit', sizes: '(max-width: 760px) 50vw, 20vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>
    <div class="logement-a-texte">
      <p class="surtitre" data-anime>${c.t('accueil.logement.surtitre')}</p>
      <h2 data-anime="lignes">${titre(c, 'accueil.logement')}</h2>
      <p data-anime>${c.t('accueil.logement.texte')}</p>
      <div class="plan-bloc">
        ${plan(c)}
        <ol class="plan-legende">${pieces.map((p) => html`<li data-piece="${p.id}">${p.titre}</li>`)}</ol>
      </div>
      <ul class="logement-chiffres">
        <li><strong data-compteur="22">22</strong> ${c.t('accueil.logement.c1')}</li>
        <li><strong data-compteur="1">1</strong> ${c.t('accueil.logement.c2')}</li>
      </ul>
      <p data-anime>${c.lien('les-logements', { classe: 'lien-fleche', texte: c.t('accueil.logement.lien') })}</p>
    </div>
  </div>
</section>

<section class="jour" id="jour-nuit" data-statut-jour="${c.s('accueil.jour.statutJour')}" data-statut-nuit="${c.s('accueil.jour.statutNuit')}">
  ${c.media({ nom: 'grok/accueil-nuit', alt: 'Allée de jardin à l\u2019heure bleue, une lanterne allumée sur un muret', cadrage: '75% 50%', classe: 'jour-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="conteneur jour-grille">
    <div class="jour-texte">
      <p class="surtitre surtitre--clair" data-anime>${c.t('accueil.jour.surtitre')}</p>
      <h2 data-anime="lignes">${titre(c, 'accueil.jour')}</h2>
      <p data-anime>${c.t('accueil.jour.texte')}</p>
      <ul class="jour-legende" data-anime="cascade">
        <li><span class="pastille pastille--jour" aria-hidden="true"></span>${c.t('accueil.jour.jour')}</li>
        <li><span class="pastille pastille--nuit" aria-hidden="true"></span>${c.t('accueil.jour.nuit')}</li>
      </ul>
    </div>
    <figure class="cadran" data-effet="cadran" data-visuel>
      <svg viewBox="-120 -120 240 240" role="img" aria-label="${c.s('accueil.jour.cadran')}">
        <circle class="cadran-fond" r="112"/>
        ${brut(`<path class="cadran-arc cadran-arc--nuit" d="${arc(21, 7, 92)}"/>`)}
        ${brut(`<path class="cadran-arc cadran-arc--jour" d="${arc(7, 21, 92)}"/>`)}
        ${brut(`<g class="cadran-graduations">${graduations()}</g>`)}
        <g class="cadran-heures">
          <text x="0" y="-60">0 h</text><text x="62" y="5">6 h</text><text x="0" y="70">12 h</text><text x="-62" y="5">18 h</text>
        </g>
        <g class="cadran-aiguille"><path d="M0 8 V-96"/><circle r="7"/></g>
      </svg>
      <figcaption class="cadran-statut" aria-live="polite"><span class="cadran-heure" data-cadran-heure>7 h – 21 h</span><span data-cadran-statut>${c.t('accueil.jour.jour')}</span></figcaption>
    </figure>
  </div>
</section>

<section class="services-a conteneur" id="services">
  <div class="tete-section">
    <p class="surtitre" data-anime>${c.t('accueil.services.surtitre')}</p>
    <h2 data-anime="lignes">${titre(c, 'accueil.services')}</h2>
    <p data-anime>${c.t('accueil.services.texte')}</p>
  </div>
  <ul class="services-cartes" data-anime="cascade">
    ${cartes.map((s) => html`<li class="service-carte">
      <a href="${c.url('les-services', 'les-cinq', 'service=' + s.id)}" data-libelle="${c.libelle('les-services')}">
        ${s.id === 'teleassistance'
          ? brut(`<div class="media service-medaillon" data-visuel aria-hidden="true"><span class="onde-appel"></span><span class="onde-appel onde-appel--2"></span><svg viewBox="0 0 80 80"><circle cx="40" cy="44" r="18"/><path d="M40 10v16"/><path d="M33 10h14"/><circle cx="40" cy="44" r="7"/></svg></div>`)
          : c.media({ nom: s.id === 'entretien' ? 'client/logement-lit' : s.id === 'linge' ? 'client/linge' : s.image, alt: s.id === 'entretien' ? 'Chambre lumineuse avec lit et fauteuil' : s.id === 'linge' ? 'Pile de pulls pliés' : s.alt, cadrage: '50% 50%', classe: 'service-media', sizes: '(max-width: 760px) 50vw, 20vw' })}
        <h3>${s.titre}</h3>
        <p>${s.resume}</p>
      </a>
    </li>`)}
  </ul>
  <p class="services-lien" data-anime>${c.lien('les-services', { classe: 'lien-fleche', texte: c.t('accueil.services.lien') })}</p>
</section>

<section class="semaine conteneur" id="semaine">
  <div class="tete-section tete-section--large">
    <p class="surtitre" data-anime>${c.t('accueil.semaine.surtitre')}</p>
    <h2 data-anime="lignes" id="smn-titre">${titre(c, 'accueil.semaine')}</h2>
    <p data-anime>${c.t('accueil.semaine.texte')}</p>
  </div>
  <div class="smn" data-module="semainier" aria-labelledby="smn-titre" data-visuel>
    <div class="smn__commandes" data-commandes></div>
    <div class="smn__corps">
      <div class="smn__feuille" data-feuille><p data-sans-js>${c.t('accueil.semaine.sansjs')}</p></div>
      <aside class="smn__recap" data-recap aria-labelledby="smn-recap"><h3 id="smn-recap">${c.t('accueil.semaine.recap')}</h3></aside>
    </div>
    <script type="application/json" data-donnees>${brut(JSON.stringify(sem).replace(/</g, '\\u003c'))}</script>
  </div>
  <p class="services-lien" data-anime>${c.lien('les-animations', { classe: 'lien-fleche', texte: c.t('accueil.semaine.lien') })}</p>
</section>

<section class="lieux-a" id="lieux">
  <div class="conteneur lieux-a-tete">
    <div>
      <p class="surtitre">${c.t('accueil.lieux.surtitre')}</p>
      <h2 data-anime="lignes">${titre(c, 'accueil.lieux')}</h2>
    </div>
    <p class="lieux-a-aide">${c.t('accueil.lieux.texte')}</p>
  </div>
  <div class="lieux-fenetre" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.lieux.region')}"><div class="lieux-piste" data-effet="rangee">
    ${lieuxGalerie.map((g) => html`<article class="lieu-carte">
      <a href="${c.url(g.page, g.ancre)}" data-libelle="${c.libelle(g.page)}">
        ${c.media({ nom: g.nom, alt: g.alt, cadrage: '50% 55%', classe: 'lieu-media', sizes: '(max-width: 760px) 80vw, 34vw' })}
        <h3>${g.titre}</h3>
        <p>${g.texte}</p>
      </a>
    </article>`)}
  </div></div>
</section>

<section class="temoin" id="manon">
  <div class="conteneur temoin-grille">
    <div class="temoin-dessin" data-visuel>${fleur({ trait: true, classe: 'fleur--temoin', attrs: 'data-fx="trace"' })}</div>
    <figure class="temoin-citation">
      <blockquote><p data-anime="mots">« ${c.t('accueil.temoignage.citation')} »</p></blockquote>
      <figcaption data-anime><strong>${c.t('accueil.temoignage.auteur')}</strong>, ${c.t('accueil.temoignage.qui')}</figcaption>
    </figure>
  </div>
</section>

<section class="cafe" id="visite-accueil">
  <div class="conteneur cafe-grille">
    ${c.media({ nom: 'grok/accueil-visite', alt: 'Table de jardin sous un arbre, deux tasses de café et un bouquet de fleurs', cadrage: '50% 55%', classe: 'cafe-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div class="cafe-texte">
      <h2 data-anime="lignes">${titre(c, 'accueil.fin')}</h2>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="cafe-actions" data-anime>
        ${c.lien('contact', { ancre: 'visite', params: 'sujet=visite', classe: 'bouton', texte: c.t('accueil.fin.visite'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <p class="cafe-adresse" data-anime>${c.site.contact.adresse}</p>
    </div>
  </div>
</section>
`;
};
