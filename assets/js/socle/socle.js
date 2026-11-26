/* Pont entre les modules de la bibliothèque (import { pret } from '../../socle/socle.js?v=1') et le socle du projet :
   même GSAP (chargé par le gabarit), même boucle, même rafraîchissement regroupé, même défilement (aucun Lenis ici).
   Fichier propre au projet : le reste du dossier socle/ n'est pas modifié. */
import { rafraichir as rafraichirSocle } from './mesures.js?v=1';
import { boucle as boucleSocle } from './boucles.js?v=1';

const charges = {};
function script(src) {
  return (charges[src] ??= new Promise((ok, ko) => {
    const s = document.createElement('script');
    s.src = src; s.onload = ok; s.onerror = () => ko(new Error('pont : ' + src + ' introuvable'));
    document.head.appendChild(s);
  }));
}

/* Les scripts GSAP du gabarit sont en defer : ils sont là avant les modules, mais on attend au besoin. */
function attendreGsap() {
  if (window.gsap) return Promise.resolve();
  return new Promise((ok) => {
    const t0 = performance.now();
    const tour = () => (window.gsap || performance.now() - t0 > 3000 ? ok() : setTimeout(tour, 30));
    tour();
  });
}

export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null, Flip: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { return false; },
  rafraichir() { rafraichirSocle(); },
  mesurer() {},
  /* Les modules attendent fn(t, dt) en millisecondes ; la boucle du socle donne (dt, t) en secondes. */
  boucle(el, fn) {
    const b = boucleSocle(el, (dt, t) => fn(t * 1000, dt * 1000));
    return { arreter: () => b.arreter() };
  },
};

export async function pret(besoins = []) {
  const voulus = new Set(besoins.map((b) => b.toLowerCase()));
  await attendreGsap();
  const g = window.gsap || null;
  if (g && voulus.has('flip') && !window.Flip) { try { await script('/assets/vendor/Flip.min.js'); } catch (e) { console.error(e); } }
  socle.gsap = g;
  if (g && window.ScrollTrigger) socle.ScrollTrigger = window.ScrollTrigger;
  if (g && window.SplitText) socle.SplitText = window.SplitText;
  if (g && window.Flip && !socle.Flip) { g.registerPlugin(window.Flip); socle.Flip = window.Flip; }
  return socle;
}
