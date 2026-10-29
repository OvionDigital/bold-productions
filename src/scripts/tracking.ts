/**
 * Meetevents naar de dataLayer van GTM (TODO.md "meten bij de livegang"). GTM zet ze om in
 * GA4-events; zonder GTM (PUBLIC_ENABLE_TRACKING uit) blijft het een losse array.
 * - formulier_verzonden: vanuit contact-form.ts, pas na een geslaagde verzending.
 * - klik_telefoon / klik_email / klik_whatsapp: klik op een tel:-, mailto:- of WhatsApp-link
 *   (WhatsAppButton, ContactLinks, footer, rich text), via één listener op het document.
 */

type DataLayerEvent = { event: string } & Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushEvent(event: string, params: Record<string, string | undefined> = {}): void {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

function clickEventOf(href: string): string | null {
  if (href.startsWith('tel:')) return 'klik_telefoon';
  if (href.startsWith('mailto:')) return 'klik_email';
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'klik_whatsapp';
  return null;
}

export function initClickTracking(): void {
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href]');
    if (!link) return;
    const name = clickEventOf(link.href);
    if (name) pushEvent(name, { link_url: link.href });
  });
}
