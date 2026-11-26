/* Contact et visite : le numéro en très grand et la demande de visite en étapes côte à côte (module
   formulaire-par-etapes) ; venir à Bréval (plan simplifié) ; qui vous répond ; questions fréquentes. */
import { html, brut } from '../../outils/gabarit.mjs';
import { titre } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'client/logement-terrasse-1600.webp' };

const carte = (cle, valeur, titreTxt, texte, defaut = false) => brut(`<label class="fpe__carte"><input type="radio" name="${cle}" value="${valeur}"${defaut ? ' required' : ''}><span class="fpe__carte-titre">${titreTxt}</span>${texte ? `<span class="fpe__carte-texte">${texte}</span>` : ''}</label>`);

export default (c) => {
  const ct = c.site.contact;
  return html`
<section class="ouv-contact" id="debut">
  <div class="conteneur ouv-contact-grille">
    <div class="ouv-contact-texte">
      <p class="surtitre" data-anime>${c.t('contact.tete.surtitre')}</p>
      <h1 data-anime="lignes">${titre(c, 'contact.tete')}</h1>
      <p data-anime>${c.t('contact.tete.texte')}</p>
      <a class="telephone-geant" href="tel:${ct.telephoneLien}" data-action-principale data-iris-centre data-effet="telephone"><span class="telephone-libelle">${c.t('contact.tete.appel')}</span><span class="telephone-numero">${ct.telephone}</span></a>
      <p class="ouv-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('contact.tete.info')}</p>
      <p class="contact-coord" data-anime>${ct.adresse}<br><span class="selectionnable">${ct.email}</span></p>
      ${c.media({ nom: 'grok/contact-portail', alt: 'Petit portail de jardin entrouvert sur une allée fleurie', cadrage: '50% 50%', classe: 'contact-media', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>
    <div class="fpe ouv-contact-form" data-module="formulaire-par-etapes" id="visite" aria-labelledby="fpe-titre">
      <div class="fpe__carton">
        <div class="fpe__tete">
          <h2 class="fpe__h2" id="fpe-titre">${c.t('contact.form.titre')}</h2>
          <p class="fpe__intro">${c.t('contact.form.intro')}</p>
        </div>
        <form class="fpe__form" action="#" method="post" novalidate>
          <div class="fpe__progression"><ol class="fpe__reperes" aria-label="Progression"></ol><div class="fpe__barre" aria-hidden="true"><span></span></div><p class="fpe__etat" aria-live="polite"></p></div>
          <fieldset class="fpe__etape" data-etape="Vous">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q1')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.form.q1')}">
              ${carte('qui', 'resident', c.s('contact.form.q1a'), '', true)}${carte('qui', 'proche', c.s('contact.form.q1b'))}${carte('qui', 'pro', c.s('contact.form.q1c'))}
            </div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="Votre demande">
            <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.form.q2')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.form.q2')}">
              ${carte('demande', 'visite', c.s('contact.form.q2a'), '', true)}${carte('demande', 'informations', c.s('contact.form.q2b'))}${carte('demande', 'entree', c.s('contact.form.q2c'))}
            </div>
            <div class="fpe__champ"><label for="fpe-sujet">${c.t('contact.form.sujet')}</label>
              <select id="fpe-sujet" name="sujet">
                <option value="">${c.t('contact.form.sujetGeneral')}</option>
                <option value="visite">${c.t('contact.form.q2a')}</option>
                <option value="couple">Le logement de 46 m² pour un couple</option>
                ${c.donnees.services.map((x) => html`<option value="${x.id}">${x.titre}</option>`)}
              </select></div>
            <div class="fpe__champ"><label for="fpe-message">${c.t('contact.form.message')}</label><textarea id="fpe-message" name="message" rows="3"></textarea></div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="Coordonnées">
            <legend class="fpe__legende"><h3 class="fpe__titre">Comment vous rappeler ?</h3></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="fpe-nom">${c.t('contact.form.nom')} <i aria-hidden="true">*</i></label><input id="fpe-nom" name="nom" autocomplete="name" required></div>
              <div class="fpe__champ"><label for="fpe-tel">${c.t('contact.form.tel')} <i aria-hidden="true">*</i></label><input id="fpe-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9 +().\\-]{8,20}"></div>
              <div class="fpe__champ"><label for="fpe-email">${c.t('contact.form.email')}</label><input id="fpe-email" name="email" type="email" autocomplete="email"></div>
            </div>
            <p class="mention-donnees">${c.t('contact.form.donnees')}</p>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="Récapitulatif" data-recap>
            <legend class="fpe__legende"><h3 class="fpe__titre">Vérifiez votre demande</h3></legend>
            <div class="fpe__recap"></div>
          </fieldset>
          <div class="fpe__nav">
            <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>Retour</button>
            <button class="fpe__bouton" type="button" data-suivant>Continuer</button>
            <button class="fpe__bouton" type="submit">${c.t('contact.form.envoyer')}</button>
          </div>
        </form>
        <div class="fpe__fin" hidden>
          <h3 tabindex="-1">Merci, c'est noté (simulation)</h3>
          <p data-resume></p>
          <p>Rien n'a été envoyé : c'est une maquette. Sur le vrai site, l'équipe vous rappellera.</p>
          <div class="fpe__nav"><button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>Nouvelle demande</button></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="venir" id="venir">
  <div class="conteneur venir-grille">
    <div>
      <h2 data-anime="lignes">${titre(c, 'contact.venir')}</h2>
      <p data-anime>${c.t('contact.venir.texte')}</p>
      <p data-anime><a class="bouton bouton--contour" href="https://www.google.com/maps/dir/?api=1&amp;destination=15%20rue%20du%20Vieux%20Ch%C3%AAne%2078980%20Br%C3%A9val" target="_blank" rel="noopener">${c.t('contact.venir.itineraire')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a></p>
    </div>
    <figure class="plan-acces" data-visuel>
      <svg viewBox="0 0 400 300" role="img" aria-label="${c.s('contact.venir.plan')}" data-fx="trace">
        <path class="route" d="M0 210 C 90 200 150 170 210 150 S 330 110 400 100"/>
        <path class="route" d="M180 0 C 190 80 200 120 210 150 S 230 240 240 300"/>
        <path class="route route--petite" d="M210 150 C 250 175 280 200 300 250"/>
        <rect class="zone" x="140" y="60" width="90" height="60" rx="10"/>
        <rect class="zone" x="290" y="150" width="80" height="50" rx="10"/>
      </svg>
      <span class="plan-etiquette plan-etiquette--bourg" data-repere>${c.t('contact.venir.bourg')}</span>
      <span class="plan-etiquette plan-etiquette--commerces" data-repere>${c.t('contact.venir.commerces')}</span>
      <span class="plan-marqueur" data-repere><span class="plan-marqueur-point" aria-hidden="true"></span>${c.t('contact.venir.maison')}</span>
      <figcaption>Plan simplifié, pour se repérer.</figcaption>
    </figure>
  </div>
</section>

<section class="repond conteneur" id="equipe">
  <h2 data-anime="lignes">${c.t('contact.equipe.titre')}</h2>
  <ul class="equipe-liste equipe-liste--compacte" data-anime="cascade" data-visuel>
    ${c.donnees.equipe.responsables.map((p) => html`<li class="personne personne--resp"><span class="initiales" aria-hidden="true">${p.nom.split(' ').filter((m) => /^[A-Z]/.test(m)).map((m) => m[0]).join('').slice(0, 2)}</span><strong>${p.nom}</strong><span>${p.role}</span></li>`)}
    <li class="personne"><span class="initiales" aria-hidden="true">+4</span><strong>${c.donnees.equipe.agents.join(', ')}</strong><span>Agents</span></li>
  </ul>
</section>

<section class="faq-contact conteneur" id="questions">
  <div>
    <h2 data-anime="lignes">${c.t('contact.faq.titre')}</h2>
    ${c.donnees.faq.map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
  <div class="faq-dessin" data-visuel aria-hidden="true">
    <svg viewBox="0 0 200 200" data-fx="trace"><circle cx="100" cy="100" r="80"/><path d="M78 80c0-14 10-22 22-22s22 8 22 20c0 16-22 18-22 34"/><circle cx="100" cy="138" r="3"/></svg>
  </div>
</section>
`;
};
