/**
 * Contactformulieren ([data-contact-form]): verzenden via fetch (FormData, POST) naar
 * het action-attribuut, knop op "Verzenden..." tijdens verzenden, daarna succes- of
 * foutmelding (Webflow w-form-done / w-form-fail). Honeypot gevuld = stil negeren.
 *
 * Ook: "Anders"-tekstvelden ([data-form-other]) tonen en verplicht maken zodra die keuze
 * gemaakt is (verborgen = disabled, dus niet verzonden), en meerkeuzevelden met
 * [data-multiselect-required] minstens één keuze laten hebben (eigen validatiemelding;
 * het paneel gaat open zodat de browser de melding kan tonen).
 */
const REQUIRED_CHOICE_MESSAGE = 'Kies minstens één optie.';

function initOtherFields(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>('[data-form-other]').forEach((wrapper) => {
    const input = wrapper.querySelector<HTMLInputElement>('input');
    const controlName = wrapper.dataset.formOther;
    const triggerValue = wrapper.dataset.formOtherValue;
    if (!input || !controlName) return;

    const update = () => {
      const control = form.elements.namedItem(controlName);
      const chosen = control instanceof HTMLSelectElement
        ? control.value === triggerValue
        : [...form.querySelectorAll<HTMLInputElement>(`input[name="${CSS.escape(controlName)}"]`)].some((box) => box.checked && box.value === triggerValue);
      wrapper.hidden = !chosen;
      input.disabled = !chosen;
      input.required = chosen;
    };
    form.addEventListener('change', (event) => {
      if ((event.target as HTMLInputElement | null)?.name === controlName) update();
    });
    form.addEventListener('reset', () => requestAnimationFrame(update));
    update();
  });
}

function initRequiredChoices(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLDetailsElement>('[data-multiselect-required]').forEach((details) => {
    const boxes = [...details.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
    const first = boxes[0];
    if (!first) return;

    const update = () => first.setCustomValidity(boxes.some((box) => box.checked) ? '' : REQUIRED_CHOICE_MESSAGE);
    boxes.forEach((box) => box.addEventListener('change', update));
    form.addEventListener('reset', () => requestAnimationFrame(update));
    update();
  });

  // Een gesloten <details> kan de melding niet tonen: openen, maar alleen als dit het eerste
  // ongeldige veld is ('invalid' komt voor elk ongeldig veld; de browser toont alleen het eerste)
  let reported = false;
  form.addEventListener(
    'invalid',
    (event) => {
      if (reported) return;
      reported = true;
      setTimeout(() => (reported = false));
      const details = (event.target as Element).closest<HTMLDetailsElement>('[data-multiselect-required]');
      if (details) details.open = true;
    },
    true,
  );
}

export function initContactForms(): void {
  document.querySelectorAll<HTMLElement>('[data-contact-form]').forEach((root) => {
    const form = root.querySelector<HTMLFormElement>('[data-contact-form-form]');
    const submit = root.querySelector<HTMLButtonElement>('[data-contact-form-submit]');
    const success = root.querySelector<HTMLElement>('[data-contact-form-success]');
    const error = root.querySelector<HTMLElement>('[data-contact-form-error]');
    if (!form || !submit || !success || !error) return;

    initOtherFields(form);
    initRequiredChoices(form);

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
