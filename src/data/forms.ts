/**
 * Formulieren (gedeeld over pagina's). Teksten letterlijk van de live site.
 * Endpoint via PUBLIC_CONTACT_ENDPOINT (TODO: backend kiezen, zie README).
 * Pagina's kiezen een formulier op naam (getForm); het berichtveld kan per pagina een
 * andere placeholder krijgen (bijv. /contact en /trouwfilm).
 */
import type { ContactFormProps } from '../components/ui/ContactForm.astro';
import type { FormChoice } from '../lib/sections';

const success = (first: string): ContactFormProps['success'] => ({
  title: 'Goed bezig.',
  text: [
    { p: [first] },
    { p: ['In de tussentijd kun je alvast een kijkje nemen bij ', { text: 'onze cases', href: '/events/cases' }, '.'] },
  ],
});

const error = 'Er is iets misgegaan met het verzenden van het formulier. Probeer het opnieuw.';

export const contactForm: ContactFormProps = {
  name: 'Contact',
  action: import.meta.env.PUBLIC_CONTACT_ENDPOINT,
  optionalLabel: '(optioneel)',
  submitLabel: 'Verzenden',
  submittingLabel: 'Verzenden...',
  fields: [
    { name: 'Naam', label: 'Naam', type: 'text', placeholder: 'Voor- en achternaam', required: true, maxlength: 256, autocomplete: 'name' },
    { name: 'Bedrijfsnaam', label: 'Bedrijfsnaam', type: 'text', placeholder: 'Jouw bedrijfsnaam', maxlength: 256, autocomplete: 'organization' },
    { name: 'E-mailadres', label: 'E-mailadres', type: 'email', placeholder: 'jouw@emailadres.nl', required: true, maxlength: 256, autocomplete: 'email' },
    { name: 'Telefoonnummer', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', maxlength: 256, autocomplete: 'tel' },
    { name: 'Bericht', label: 'Bericht', type: 'textarea', placeholder: 'Vertel ons over je event, datum en wensen…', required: true, maxlength: 5000 },
  ],
  success: success('Het is verzonden. We nemen binnen één werkdag contact met je op voor een kort gesprek.'),
  error,
};

/** /offerte-aanvragen (Webflow wf-form-Offerte). Radio "Nee" had live per abuis de waarde "Ja". */
export const offerteForm: ContactFormProps = {
  name: 'Offerte',
  action: import.meta.env.PUBLIC_CONTACT_ENDPOINT,
  optionalLabel: '(optioneel)',
  submitLabel: 'Verzenden',
  submittingLabel: 'Verzenden...',
  labelSpacing: 'all',
  fields: [
    { type: 'heading', label: 'Persoonlijke gegevens' },
    { name: 'Naam', label: 'Naam', type: 'text', placeholder: 'Voor- en achternaam', required: true, maxlength: 256, autocomplete: 'name' },
    { name: 'Bedrijfsnaam', label: 'Bedrijfsnaam', type: 'text', placeholder: 'Jouw bedrijfsnaam', required: true, maxlength: 256, autocomplete: 'organization' },
    { name: 'E-mailadres', label: 'E-mailadres', type: 'email', placeholder: 'jouw@emailadres.nl', required: true, maxlength: 256, autocomplete: 'email' },
    { name: 'Telefoonnummer', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', required: true, maxlength: 256, autocomplete: 'tel' },
    { type: 'heading', label: 'Over je aanvraag' },
    { name: 'Wat-organiseer-je', label: 'Wat organiseer je?', type: 'textarea', placeholder: 'Wat ben je van plan?', required: true, maxlength: 5000 },
    { name: 'Wanneer', label: 'Wanneer vindt je event plaats?', type: 'text', placeholder: 'Op welke dag(en)?', required: true, maxlength: 256 },
    { name: 'Waar', label: 'Waar vindt je event plaats?', type: 'text', placeholder: 'Locatie', required: true, maxlength: 256 },
    { name: 'Aantal-bezoekers', label: 'Hoeveel bezoekers verwacht je?', type: 'text', placeholder: 'Wat schat je in?', required: true, maxlength: 256 },
    { type: 'heading', label: 'Over je contentwensen' },
    {
      type: 'checkboxes',
      name: 'Diensten',
      label: 'Welke diensten heb je nodig?',
      placeholder: 'Selecteer dienst(en)',
      countLabel: '{n} diensten geselecteerd',
      options: ['Promovideo', 'Eventvideo / same-day edit', 'Aftermovie', 'Social content', 'Fotografie', 'Bandpromo', 'Artiestenpromo', 'Anders'],
    },
    {
      name: 'Waarmee-kan-ik-je-helpen',
      label: 'Wat wil je bereiken met de content?',
      type: 'textarea',
      placeholder: 'Waarmee kan ik je helpen?',
      required: true,
      maxlength: 5000,
    },
    {
      type: 'radio',
      name: 'Eerder-samengewerkt-met-contentmaker',
      label: 'Heb je al eerder met een contentmaker samengewerkt?',
      options: ['Ja', 'Nee'],
      required: true,
    },
    {
      type: 'radio',
      name: 'Beeldmateriaal-van-vorige-edities',
      label: 'Heb je beeldmateriaal van vorige edities beschikbaar?',
      options: ['Ja', 'Nee'],
      required: true,
    },
    { name: 'Hoe-heb-je-ons-gevonden', label: 'Hoe heb je Bold Productions gevonden?', type: 'textarea', placeholder: 'Hoe heb je ons gevonden?', maxlength: 5000 },
  ],
  success: success('Je aanvraag is binnen. We nemen binnen één werkdag contact met je op voor een kort gesprek.'),
  error,
};

/** /trouwfilm: eigen velden (namen en pakket) */
export const weddingForm: ContactFormProps = {
  ...contactForm,
  name: 'Trouwfilm',
  optionalLabel: '',
  fields: [
    { name: 'Naam', label: 'Jullie namen', type: 'text', placeholder: 'Voor- en achternaam', required: true, maxlength: 256, autocomplete: 'name' },
    { name: 'Pakket', label: 'Welk pakket hebben jullie op het oog?', type: 'text', placeholder: 'Essential, Luxe of BOLD', required: true, maxlength: 256 },
    { name: 'E-mailadres', label: 'E-mailadres', type: 'email', placeholder: 'jouw@emailadres.nl', required: true, maxlength: 256, autocomplete: 'email' },
    { name: 'Telefoonnummer', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', required: true, maxlength: 256, autocomplete: 'tel' },
    { name: 'Bericht', label: 'Bericht', type: 'textarea', placeholder: 'Vertel ons over jullie datum en wensen…', required: true, maxlength: 5000 },
  ],
};

const forms = { contact: contactForm, offerte: offerteForm, trouwfilm: weddingForm } satisfies Record<FormChoice['name'], ContactFormProps>;

/** Formulier op naam, met eventueel een andere placeholder voor het berichtveld. */
export function getForm({ name, messagePlaceholder }: FormChoice): ContactFormProps {
  const form = forms[name];
  if (!messagePlaceholder) return form;
  return {
    ...form,
    fields: form.fields.map((field) => ('name' in field && field.name === 'Bericht' ? { ...field, placeholder: messagePlaceholder } : field)),
  };
}
