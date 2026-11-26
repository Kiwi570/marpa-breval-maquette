/* La fleur de « La Maison des Fleurs » : cinq pétales et un cœur, dessinés en code.
   Elle sert à l'intro (objet qui glisse jusqu'à la page), à l'ouverture de l'accueil, au voile et à l'appel final.
   Les pétales sont placés par l'attribut transform d'un groupe <g> (jamais par une transformation CSS) ;
   seul le chemin .petale est animé, depuis le centre de la fleur (0 0). */
import { brut } from '../../outils/gabarit.mjs';

const PETALE = 'M0 -7 C 15 -15 18 -40 0 -47 C -18 -40 -15 -15 0 -7 Z';

export function fleur({ classe = '', attrs = '', trait = false } = {}) {
  const petales = [0, 72, 144, 216, 288].map((a, i) => `<g transform="rotate(${a})"><path class="petale" style="--i:${i}" d="${PETALE}"/></g>`).join('');
  return brut(`<svg class="fleur${trait ? ' fleur--trait' : ''}${classe ? ' ' + classe : ''}" viewBox="-50 -50 100 100" aria-hidden="true" focusable="false"${attrs ? ' ' + attrs : ''}><g class="fleur-petales">${petales}</g><circle class="fleur-coeur" r="10"/></svg>`);
}
