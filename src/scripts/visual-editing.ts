/**
 * Alleen in de preview-build (astro.preview.config.mjs voegt dit script toe): klikbare bewerk-overlays van Sanity
 * (@sanity/visual-editing). Klik op een tekst → Studio opent het veld. Na een wijziging in
 * Studio laadt de pagina opnieuw (server-gerenderd, met het concept); de browser houdt de
 * scrollpositie vast. Navigatie in het voorbeeld wordt doorgegeven aan Presentation (URL-balk)
 * en andersom.
 */
import { enableVisualEditing, type HistoryAdapter } from '@sanity/visual-editing';

/** Content Lake heeft na een wijziging even nodig; en typen geeft veel wijzigingen achter elkaar. */
const RELOAD_DELAY = 600;
let reloadTimer: number | undefined;

function scheduleReload(): Promise<void> {
  window.clearTimeout(reloadTimer);
  reloadTimer = window.setTimeout(() => location.reload(), RELOAD_DELAY);
  // Blijft open: de pagina wordt toch vervangen
  return new Promise(() => {});
}

const currentUrl = () => location.pathname + location.search + location.hash;

const history: HistoryAdapter = {
  subscribe(navigate) {
    navigate({ type: 'push', url: currentUrl(), title: document.title });
    return () => {};
  },
  update(update) {
    if (update.type === 'pop') window.history.back();
    else if (update.url !== currentUrl()) location[update.type === 'replace' ? 'replace' : 'assign'](update.url);
  },
};

enableVisualEditing({
  history,
  // Boven navbar, menupaneel en WhatsApp-knop
  zIndex: 10000,
  refresh: () => scheduleReload(),
});
