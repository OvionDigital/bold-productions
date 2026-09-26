/**
 * Formulieren (gedeeld over pagina's). Teksten letterlijk van de live site.
 * Endpoint via PUBLIC_CONTACT_ENDPOINT (TODO: backend kiezen, zie README).
 */
import type { ContactFormProps } from '../components/ui/ContactForm.astro';

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
  success: {
    title: 'Goed bezig.',
    text: [
      { p: ['Het is verzonden. We nemen binnen één werkdag contact met je op voor een kort gesprek.'] },
      { p: ['In de tussentijd kun je alvast een kijkje nemen bij ', { text: 'onze cases', href: '/cases' }, '.'] },
    ],
  },
  error: 'Er is iets misgegaan met het verzenden van het formulier. Probeer het opnieuw.',
};
