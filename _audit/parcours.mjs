/* Parcours propres à la MARPA de Bréval :
   - semaine de l'accueil : changer de semaine replace les rendez-vous, le total suit le nombre de créneaux affichés ;
   - prochain rendez-vous (Animations) : date future, cohérente avec le planning ;
   - agenda : les dates passées sont rangées à part, un filtre réduit la liste ;
   - demande de visite : préremplie par ?sujet=visite, pas d'envoi sans les champs obligatoires, message « simulé » à la fin ;
   - tiroir demandé par ?service= ouvert à l'arrivée. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    /* Semaine */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.evaluate(() => document.querySelector('#semaine').scrollIntoView());
    await attendre(800);
    const boutons = page.locator('.smn [aria-pressed]');
    const n = await boutons.count();
    if (n < 2) R.echec('semaine', `${n} bouton de semaine`, { page: '/' });
    else {
      await boutons.nth(1).click();
      await attendre(1400);
      const { visibles, total } = await page.evaluate(() => ({
        visibles: [...document.querySelectorAll('.smn__creneau')].filter((c) => !c.hidden && c.offsetParent).length,
        total: parseInt((document.querySelector('.smn__recap-total b') || {}).textContent || '0', 10),
      }));
      if (!visibles || visibles !== total) R.echec('semaine', `créneaux affichés ${visibles}, total annoncé ${total}`, { page: '/' });
    }

    /* Prochain rendez-vous */
    await page.goto(BASE + '/les-animations', { waitUntil: 'load' });
    await attendrePret(page);
    const p = await page.evaluate(() => ({ jour: document.querySelector('[data-prochain-jour]').textContent, quoi: document.querySelector('[data-prochain-quoi]').textContent }));
    if (!p.quoi || /plus bas/.test(p.quoi)) R.regarder('prochain rendez-vous', `texte : ${p.jour} / ${p.quoi}`, { page: '/les-animations' });

    /* Agenda : filtre */
    const filtres = page.locator('.agd__filtre');
    if (await filtres.count() > 1) {
      const avant = await page.locator('.agd__date:visible').count();
      await filtres.nth(1).click();
      await attendre(700);
      const apres = await page.locator('.agd__date:visible').count();
      if (apres >= avant) R.regarder('agenda', `le filtre ne réduit pas la liste (${avant} → ${apres})`, { page: '/les-animations' });
    }

    /* Demande de visite */
    await page.goto(BASE + '/contact?sujet=visite#visite', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(600);
    const coche = await page.evaluate(() => ({ sujet: (document.querySelector('select[name="sujet"]') || {}).value, demande: (document.querySelector('[name="demande"]:checked') || {}).value }));
    if (coche.sujet !== 'visite' || coche.demande !== 'visite') R.echec('demande de visite', `?sujet=visite ne présélectionne pas la visite (${JSON.stringify(coche)})`, { page: '/contact' });

    /* Tiroir demandé */
    await page.goto(BASE + '/les-services?service=linge#les-cinq', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(800);
    const ouvert = await page.evaluate(() => (document.querySelector('.ofr__tiroir.est-ouvert') || {}).id);
    if (ouvert !== 'linge') R.echec('services', `?service=linge ouvre « ${ouvert} »`, { page: '/les-services' });
  } finally { await ctx.close(); }
}
