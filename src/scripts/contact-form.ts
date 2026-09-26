/**
 * Contactformulieren ([data-contact-form]): verzenden via fetch (FormData, POST) naar
 * het action-attribuut, knop op "Verzenden..." tijdens verzenden, daarna succes- of
 * foutmelding (Webflow w-form-done / w-form-fail). Honeypot gevuld = stil negeren.
 */
export function initContactForms(): void {
  document.querySelectorAll<HTMLElement>('[data-contact-form]').forEach((root) => {
    const form = root.querySelector<HTMLFormElement>('[data-contact-form-form]');
    const submit = root.querySelector<HTMLButtonElement>('[data-contact-form-submit]');
    const success = root.querySelector<HTMLElement>('[data-contact-form-success]');
    const error = root.querySelector<HTMLElement>('[data-contact-form-error]');
    if (!form || !submit || !success || !error) return;

    const label = submit.querySelector<HTMLElement>('.button__label');
    const idleText = label?.textContent ?? '';
    const busyText = form.dataset.submittingLabel ?? idleText;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      error.hidden = true;

      const data = new FormData(form);
      if (data.get('website')) return; // honeypot

      const endpoint = form.getAttribute('action');
      if (!endpoint) {
        // TODO(formulier): nog geen backend gekoppeld
        console.warn('[contact-form] Geen action/endpoint ingesteld; formulier niet verzonden.');
        error.hidden = false;
        return;
      }

      submit.disabled = true;
      if (label) label.textContent = busyText;
      try {
        const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        form.hidden = true;
        success.hidden = false;
        success.focus?.();
      } catch {
        error.hidden = false;
      } finally {
        submit.disabled = false;
        if (label) label.textContent = idleText;
      }
    });
  });
}
