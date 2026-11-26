/* Effets propres à la MARPA de Bréval. Le socle gère l'ouverture, le voile, l'en-tête, le défilement, les mesures
   et la bibliothèque d'effets (posés par attributs dans les pages). Ici : la fleur, le cadran de 24 h,
   le plan du logement, la rangée des lieux, le prochain rendez-vous, l'éventail des services, et les modules. */
import { demarrer, boucle, quand, versObjet, rafraichir } from './socle/index.js?v=1';
import { init as initSemainier } from './modules/semainier/module.js?v=1';
import { init as initAgenda } from './modules/agenda-des-dates/module.js?v=1';
import { init as initTiroirs } from './modules/offre-a-tiroirs/module.js?v=1';
import { init as initFormulaire } from './modules/formulaire-par-etapes/module.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Heure de Bréval (Europe/Paris), quelle que soit l'heure du visiteur. */
function heureBreval(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(d).map((x) => [x.type, x.value]));
  return { h: +p.hour, m: +p.minute, date: `${p.year}-${p.month}-${p.day}` };
}
const heureTexte = (h, m) => `${h} h${m ? ' ' + String(m).padStart(2, '0') : ''}`;

/* ---------- Fleur de l'accueil : ses pétales tournent au défilement et respirent ---------- */
function fleur() {
  const f = $('.fleur--accueil');
  if (!f || !gsap) return;
  gsap.to(f.querySelector('.fleur-petales'), {
    rotation: 120, svgOrigin: '0 0', ease: 'none',
    scrollTrigger: { trigger: '.ouv-accueil', start: 'top top', end: 'bottom top', scrub: 0.8 },
  });
  /* Respiration douce, seulement quand la fleur est à l'écran (boucle du socle), après l'intro. */
  quand('pret', () => {
    const petales = $$('.petale', f);
    boucle(f, (dt, t) => {
      petales.forEach((p, i) => p.setAttribute('transform', `scale(${(1 + Math.sin(t * 1.6 + i * 1.25) * 0.035).toFixed(4)})`));
    });
  });
}

/* ---------- Pétales qui traversent le jardin, image qui respire, fleur qui tourne doucement ---------- */
function petales() {
  const cv = $('.petales');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const img = $('.ouv-accueil-media img'), fl = $('.fleur--accueil');
  const couleurs = ['#B23F2A', '#D9644F', '#F2B8B0', '#F7F2E8', '#E58A7A'];
  let W = 0, H = 0, dpr = 1, liste = [];
  const tailler = () => {
    dpr = Math.min(1.5, window.devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    const n = W < 700 ? 12 : 24;
    liste = Array.from({ length: n }, (_, i) => nouveau(true, i));
  };
  /* Les pétales naissent sur la moitié droite (le titre reste lisible à gauche). */
  const nouveau = (partout, i = 0) => ({
    x: W * (W < 700 ? 0.05 + Math.random() * 0.9 : 0.42 + Math.random() * 0.6), y: partout ? Math.random() * H : -20,
    r: 8 + Math.random() * 9, a: Math.random() * 6.28, va: (Math.random() - 0.5) * 1.6,
    vy: 18 + Math.random() * 22, vx: -10 - Math.random() * 16, ph: Math.random() * 6.28,
    c: couleurs[i % couleurs.length], o: 0.55 + Math.random() * 0.4,
  });
  tailler();
  new ResizeObserver(tailler).observe(cv);
  boucle(cv, (dt, t) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    liste.forEach((p, i) => {
      p.y += p.vy * dt; p.x += (p.vx + Math.sin(t * 1.3 + p.ph) * 22) * dt; p.a += p.va * dt;
      if (p.y > H + 20 || p.x < -20) liste[i] = nouveau(false, i);
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.scale(1, 0.55 + 0.45 * Math.abs(Math.sin(t * 2 + p.ph)));
      ctx.globalAlpha = p.o; ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.moveTo(0, -p.r); ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.6, p.r * 0.7, p.r * 0.7, 0, p.r); ctx.bezierCurveTo(-p.r * 0.7, p.r * 0.7, -p.r * 0.9, -p.r * 0.6, 0, -p.r); ctx.fill();
      ctx.restore();
    });
    if (img) img.style.scale = (1.04 + Math.sin(t * 0.3) * 0.035).toFixed(4);
    if (fl) fl.style.rotate = ((t * 6) % 360).toFixed(2) + 'deg';
  });
}

/* ---------- Cadran de 24 h ---------- */
function cadran() {
  const fig = $('[data-effet="cadran"]');
  if (!fig) return;
  const aiguille = $('.cadran-aiguille', fig), heure = $('[data-cadran-heure]', fig), statut = $('[data-cadran-statut]', fig);
  const textes = { jour: fig.closest('section').dataset.statutJour, nuit: fig.closest('section').dataset.statutNuit };
  const angle = () => { const { h, m } = heureBreval(); return ((h + m / 60) / 24) * 360; };
  const ecrire = () => {
    const { h, m } = heureBreval();
    const jour = h >= 7 && h < 21;
    heure.textContent = heureTexte(h, m) + ' à Bréval';
    statut.textContent = jour ? textes.jour : textes.nuit;
    fig.classList.toggle('est-nuit', !jour);
  };
  ecrire();
  setInterval(() => { if (!document.hidden) { ecrire(); if (gsap && aiguille.dataset.place) gsap.set(aiguille, { rotation: angle(), svgOrigin: '0 0' }); } }, 30000);
  if (!gsap) return;
  /* L'aiguille fait le tour jusqu'à l'heure réelle pendant que la section arrive ; les arcs se dessinent. */
  const arcs = $$('.cadran-arc', fig);
  arcs.forEach((a) => { const L = a.getTotalLength(); a.style.strokeDasharray = a.classList.contains('cadran-arc--nuit') ? '2 6' : `${L} ${L}`; if (!a.classList.contains('cadran-arc--nuit')) a.style.strokeDashoffset = L; a.dataset.l = L; });
  gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 85%', end: 'center 50%', scrub: 0.7 } })
    .fromTo(aiguille, { rotation: 0, svgOrigin: '0 0' }, { rotation: () => angle(), svgOrigin: '0 0', ease: 'none', onComplete: () => { aiguille.dataset.place = '1'; } }, 0)
    .fromTo(arcs.filter((a) => !a.classList.contains('cadran-arc--nuit')), { strokeDashoffset: (i, a) => +a.dataset.l }, { strokeDashoffset: 0, ease: 'none' }, 0);
}

/* ---------- Plan du logement : les pièces s'allument une à une ---------- */
function planLogement() {
  $$('.plan-bloc').forEach((bloc) => {
    if (!bloc.querySelector('[data-effet="plan-logement"]')) return;
    const pieces = $$('.plan-piece', bloc), legende = $$('.plan-legende li', bloc);
    const ordre = legende.map((li) => li.dataset.piece);
    let actif = -1;
    const allumer = (n) => {
      if (n === actif) return; actif = n;
      pieces.forEach((p) => p.classList.toggle('actif', p.dataset.piece === ordre[n]));
      legende.forEach((li, i) => li.classList.toggle('actif', i === n));
    };
    allumer(0);
    if (!window.ScrollTrigger) return;
    const liste = $$('.pieces-liste .piece');
    if (liste.length) {
      /* Page Logements : le plan reste à l'écran, la pièce lue s'allume. */
      liste.forEach((li) => window.ScrollTrigger.create({
        trigger: li, start: 'top 60%', end: 'bottom 60%',
        onToggle: (st) => { if (st.isActive) allumer(ordre.indexOf(li.dataset.piece)); },
      }));
      return;
    }
    window.ScrollTrigger.create({
      trigger: bloc, start: 'top 85%', end: 'bottom 35%',
      onUpdate: (st) => allumer(Math.min(ordre.length - 1, Math.floor(st.progress * ordre.length))),
      onLeave: () => allumer(ordre.length - 1), onLeaveBack: () => allumer(0),
    });
  });
}

/* ---------- Les logements : le grand chiffre et le bandeau bougent au défilement ---------- */
function chiffre() {
  const g = $('.ouv-chiffre .geant');
  if (!g || !gsap) return;
  const st = { trigger: '.ouv-chiffre', start: 'top top', end: 'bottom top', scrub: 0.6 };
  gsap.to(g, { yPercent: -18, ease: 'none', scrollTrigger: st });
  gsap.to('.bandeau-a', { xPercent: -3, ease: 'none', scrollTrigger: st });
  gsap.to('.bandeau-b', { xPercent: 4, yPercent: -6, ease: 'none', scrollTrigger: st });
}

/* ---------- Les services : l'éventail se déplie à l'arrivée, s'ouvre encore au défilement ---------- */
function eventail() {
  const cartes = $$('.eventail-carte');
  if (!cartes.length || !gsap) return;
  gsap.fromTo(cartes, { '--g': 0 }, { '--g': 0.7, ease: 'none', scrollTrigger: { trigger: '.ouv-eventail', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}
const deplier = (delai = 0) => { if (gsap && $('.eventail-carte')) gsap.fromTo('.eventail-carte', { '--f': 0 }, { '--f': 1, duration: 1.1, ease: 'back.out(1.4)', stagger: 0.08, delay: delai }); };

/* ---------- Les animations : le prochain rendez-vous, calculé à l'heure de Bréval ---------- */
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function prochain() {
  const src = $('#planning-donnees');
  if (!src) return;
  let d; try { d = JSON.parse(src.textContent); } catch { return; }
  const { h, m, date } = heureBreval();
  const maintenant = date + 'T' + String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  const ev = d.evenements.filter((e) => (e.heure ? e.date + 'T' + e.heure > maintenant : e.date > date)).sort((a, b) => (a.date + (a.heure || '99')).localeCompare(b.date + (b.heure || '99')))[0];
  const jour = $('[data-prochain-jour]'), heure = $('[data-prochain-heure]'), quoi = $('[data-prochain-quoi]');
  if (!ev) { jour.textContent = 'Le prochain programme sera affiché ici.'; quoi.textContent = 'Demandez-le à l\u2019équipe.'; return; }
  const demain = new Date(date + 'T12:00:00'); demain.setDate(demain.getDate() + 1);
  const x = new Date(ev.date + 'T12:00:00');
  jour.textContent = ev.date === date ? 'Aujourd\u2019hui' : ev.date === demain.toISOString().slice(0, 10) ? 'Demain' : `${JOURS[x.getDay()].replace(/^./, (l) => l.toUpperCase())} ${x.getDate() === 1 ? '1er' : x.getDate()} ${MOIS[x.getMonth()]}`;
  const [hh, mm] = ev.heure.split(':');
  heure.innerHTML = `<span>${+hh}</span>\u00a0h${mm !== '00' ? `\u00a0<span>${mm}</span>` : ''}`;
  heure.setAttribute('aria-hidden', 'false');
  quoi.textContent = ev.titre + (ev.lieu ? ` · ${ev.lieu}` : '');
  if (gsap) gsap.to('.prochain-carte', { y: -24, ease: 'none', scrollTrigger: { trigger: '.ouv-prochain', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}
const roulerHeure = (delai = 0) => { if (gsap && $('.prochain-heure span')) gsap.fromTo('.prochain-heure span', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: delai }); };

/* ---------- Contact : le numéro respire, la demande se préremplit d'après le lien suivi ---------- */
function telephone() {
  const t = $('[data-effet="telephone"]');
  if (!t) return;
  boucle(t, (dt, temps) => {
    const p = (temps % 2.6) / 2.6;
    t.style.boxShadow = `0 0 0 ${(p * 16).toFixed(1)}px rgba(178, 63, 42, ${(0.32 * (1 - p)).toFixed(3)})`;
  });
}
function preremplir(form) {
  const sujet = new URLSearchParams(location.search).get('sujet');
  if (!sujet || !form) return;
  const choisir = (v) => { const r = form.querySelector(`[name="demande"][value="${v}"]`); if (r) { r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true })); } };
  const liste = form.querySelector('select[name="sujet"]');
  if (liste && [...liste.options].some((o) => o.value === sujet)) { liste.value = sujet; liste.dispatchEvent(new Event('change', { bubbles: true })); }
  choisir(sujet === 'visite' ? 'visite' : sujet === 'couple' ? 'entree' : 'informations');
}

/* ---------- Rangée des lieux : glisse à l'horizontale pendant que la section passe (sans épinglage) ---------- */
function rangee() {
  const piste = $('[data-effet="rangee"]');
  if (!piste || !gsap) return;
  const fenetre = piste.parentElement, section = piste.closest('section');
  gsap.matchMedia().add('(min-width: 761px)', () => {
    gsap.fromTo(piste, { x: 0 }, {
      x: () => -Math.max(0, piste.scrollWidth - fenetre.clientWidth), ease: 'none',
      scrollTrigger: { trigger: section, start: 'top 85%', end: 'bottom 15%', scrub: 0.6, invalidateOnRefresh: true },
    });
  });
}

/* ---------- Modules de la bibliothèque ---------- */
function modules() {
  const smn = $('[data-module="semainier"]');
  if (smn) {
    let formule;
    try {
      const d = JSON.parse(smn.querySelector('[data-donnees]').textContent);
      const auj = heureBreval().date;
      const f = d.formules.find((x) => { const fin = new Date(x.lundi + 'T12:00:00'); fin.setDate(fin.getDate() + 6); return auj >= x.lundi && auj <= fin.toISOString().slice(0, 10); })
        || d.formules.find((x) => x.lundi > auj) || d.formules[d.formules.length - 1];
      formule = f && f.id;
    } catch {}
    initSemainier(smn, { formule, mots: ['rendez-vous', 'rendez-vous'], format: (m) => `${m} rendez-vous` });
  }
  $$('[data-module="agenda-des-dates"]').forEach((el) => initAgenda(el, { fuseau: 'Europe/Paris' }));
  $$('[data-module="offre-a-tiroirs"]').forEach((el) => {
    const voulu = new URLSearchParams(location.search).get('service');
    const index = voulu ? $$('.ofr__tiroir', el).findIndex((t) => t.id === voulu) : -1;
    Promise.resolve(initTiroirs(el, index > 0 ? { ouvert: index } : {})).catch((err) => console.error(err));
  });
  $$('[data-module="formulaire-par-etapes"]').forEach((el) => {
    Promise.resolve(initFormulaire(el, {})).then(() => preremplir(el.querySelector('form'))).catch((err) => console.error(err));
  });
}

/* ---------- Intro ---------- */
function jouerIntro() {
  if (!gsap) return null;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const petales = $$('.fleur--intro .petale');
  tl.fromTo(petales, { scale: 0, svgOrigin: '0 0' }, { scale: 1, svgOrigin: '0 0', duration: 0.55, stagger: 0.07, ease: 'back.out(1.7)' }, 0.15)
    .fromTo('.fleur--intro .fleur-petales', { rotation: -50, svgOrigin: '0 0' }, { rotation: 0, svgOrigin: '0 0', duration: 0.9 }, 0.15)
    .fromTo('.fleur--intro .fleur-coeur', { scale: 0, svgOrigin: '0 0' }, { scale: 1, svgOrigin: '0 0', duration: 0.4 }, 0.1)
    .fromTo('.ouverture-nom, .ouverture-ligne', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, 0.35)
    .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.9);
  versObjet(tl, { a: 1.0 });
  premierEcran(tl, 1.45);
  /* Effets longs des autres pages : lancés à part, jamais dans la timeline de l'intro. */
  tl.call(() => { deplier(); roulerHeure(); }, null, 1.6);
  return tl;
}

/* Premier écran de l'accueil : la photo se resserre, le titre monte ligne à ligne, puis le reste. */
function premierEcran(tl, a) {
  if (!$('.ouv-accueil')) return;
  tl.fromTo('.ouv-accueil-media', { scale: 1.1, opacity: 1 }, { scale: 1, opacity: 1, duration: 1.3, ease: 'power2.out' }, a - 0.3)
    .fromTo('.ouv-titre', { opacity: 1 }, { opacity: 1, duration: 0.01 }, a)
    .fromTo('.ouv-ligne > span', { yPercent: 120 }, { yPercent: 0, duration: 0.85, stagger: 0.1 }, a)
    .fromTo('.ouv-accueil .surtitre, .ouv-texte, .ouv-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, a + 0.15);
}

demarrer({
  preparer() {
    fleur();
    quand('pret', petales);
    cadran();
    planLogement();
    rangee();
    chiffre();
    eventail();
    prochain();
    telephone();
    try { modules(); } catch (err) { console.error('[site] modules', err); }
    /* Le titre de l'ouverture reste caché jusqu'à son arrivée (posé ici, pas après coup). */
    if (gsap && $('.ouv-accueil')) {
      gsap.set('.ouv-titre', { opacity: 1 });
      gsap.set('.ouv-ligne > span', { yPercent: 120 });
    }
  },
  jouer: jouerIntro,
  etatFinal() {
    if (!gsap) return;
    gsap.set('.eventail-carte', { '--f': 1 });
    gsap.set('.ouv-titre, .ouv-accueil-media, .ouv-accueil .surtitre, .ouv-texte, .ouv-actions', { opacity: 1, clearProps: 'transform' });
    gsap.set('.ouv-ligne > span', { yPercent: 0 });
  },
  arrivee() {
    deplier(0.25);
    roulerHeure(0.3);
    if (!gsap || !$('.ouv-accueil')) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    premierEcran(tl, 0.2);
  },
});

window.addEventListener('load', () => rafraichir());
