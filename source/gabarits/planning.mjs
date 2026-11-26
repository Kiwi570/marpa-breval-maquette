/* Planning des animations : une seule source (donnees/planning.json) pour la semaine type de l'accueil (semainier),
   l'agenda des temps forts et le prochain rendez-vous de la page Animations. */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export const heureTexte = (h) => { if (!h) return ''; const [hh, mm] = h.split(':'); return `${+hh} h${mm !== '00' ? ' ' + mm : ''}`; };
const jourSemaine = (d) => (new Date(d + 'T12:00:00').getDay() + 6) % 7;
export const dateTexte = (d) => { const x = new Date(d + 'T12:00:00'); return `${JOURS[jourSemaine(d)].toLowerCase()} ${x.getDate() === 1 ? '1er' : x.getDate()} ${MOIS[x.getMonth()]}`; };
const lundi = (d) => { const x = new Date(d + 'T12:00:00'); x.setDate(x.getDate() - jourSemaine(d)); return x.toISOString().slice(0, 10); };
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const MOIS_COURT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const court = (d) => { const x = new Date(d + 'T12:00:00'); return `${x.getDate() === 1 ? '1er' : x.getDate()} ${MOIS_COURT[x.getMonth()]}`; };

/* Données du module semainier : une formule par semaine complète du planning, créneaux confirmés et datés seulement. */
export function semaine(planning, { depuis = '2026-11-23' } = {}) {
  const ev = planning.evenements.filter((e) => e.heure && !e.confirmer && e.date >= depuis);
  const semaines = [...new Set(ev.map((e) => lundi(e.date)))].sort();
  const creneaux = new Map();
  const formules = semaines.map((l) => {
    const places = {};
    const fin = new Date(l + 'T12:00:00'); fin.setDate(fin.getDate() + 6);
    for (const e of ev.filter((x) => lundi(x.date) === l)) {
      const j = jourSemaine(e.date), m = +e.heure.slice(0, 2) < 12 ? 0 : 1;
      const id = `${slug(e.titre)}-${j}-${m}`;
      if (!creneaux.has(id)) creneaux.set(id, { id, type: e.type, titre: `${heureTexte(e.heure)} · ${e.court || e.titre}`, minutes: 1 });
      places[id] = `${j}-${m}`;
    }
    const n = Object.keys(places).length;
    return { id: 's' + l, nom: `${court(l)} – ${court(fin.toISOString().slice(0, 10))}`, description: `Semaine du ${dateTexte(l)} au ${dateTexte(fin.toISOString().slice(0, 10))}\u00a0: ${n} rendez-vous.`, places, lundi: l };
  });
  return {
    libelle: 'Semaine',
    jours: JOURS, courts: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'], moments: ['Matin', 'Après-midi'],
    types: planning.types, creneaux: [...creneaux.values()], formules,
  };
}

/* Temps forts pour l'agenda (dates passées comprises : le module les grise). */
export const tempsForts = (planning) => planning.evenements.filter((e) => e.fort);
export const typeNom = (planning, id) => (planning.types.find((t) => t.id === id) || {}).nom || '';
