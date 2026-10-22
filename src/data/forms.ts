/**
 * Formulieren (gedeeld over pagina's). Teksten letterlijk van de live site.
 * Verzenden naar de Pages Function functions/api/form.ts (mail via Resend), of naar
 * PUBLIC_CONTACT_ENDPOINT als die gezet is.
 * Pagina's kiezen een formulier op naam (getForm); het berichtveld kan per pagina een
 * andere placeholder krijgen (bijv. /contact en /trouwfilm). Op Business-pagina's linkt de
 * succesmelding naar de Business-cases.
 */
import type { ContactFormProps } from '../components/ui/ContactForm.astro';
import type { FormChoice } from '../lib/sections';
import { audiences, services } from './taxonomy';
import { sectionOf } from './navigation';

const action = import.meta.env.PUBLIC_CONTACT_ENDPOINT || '/api/form';

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
  action,
  optionalLabel: '(optioneel)',
  submitLabel: 'Verzenden',
  submittingLabel: 'Verzenden...',
  fields: [
    { name: 'Naam', label: 'Naam', type: 'text', placeholder: 'Voor- en achternaam', required: true, maxlength: 256, autocomplete: 'name' },
    { name: 'Bedrijfsnaam', label: 'Bedrijfsnaam', type: 'text', placeholder: 'Jouw bedrijfsnaam', required: true, maxlength: 256, autocomplete: 'organization' },
    { name: 'E-mailadres', label: 'E-mailadres', type: 'email', placeholder: 'jouw@emailadres.nl', required: true, maxlength: 256, autocomplete: 'email' },
    { name: 'Telefoonnummer', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', required: true, maxlength: 256, autocomplete: 'tel' },
    { name: 'Bericht', label: 'Bericht', type: 'textarea', placeholder: 'Vertel ons over je idee, uitdaging en wensen.', required: true, maxlength: 5000 },
  ],
  success: success('Het is verzonden. We nemen binnen één werkdag contact met je op voor een kort gesprek.'),
  error,
};

/** /offerte-aanvragen (Webflow wf-form-Offerte). Radio "Nee" had live per abuis de waarde "Ja". */
export const offerteForm: ContactFormProps = {
  name: 'Offerte',
  action,
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

/** /business/offerte-aanvragen: eigen velden voor bedrijven. Diensten zoals in het menu (taxonomy). */
export const businessOfferteForm: ContactFormProps = {
  name: 'Offerte Business',
  action,
  optionalLabel: '(optioneel)',
  submitLabel: 'Verzenden',
  submittingLabel: 'Verzenden...',
  labelSpacing: 'all',
  fields: [
    { type: 'heading', label: 'Over jou en je bedrijf' },
    { name: 'Naam', label: 'Naam', type: 'text', placeholder: 'Voor- en achternaam', required: true, maxlength: 256, autocomplete: 'name' },
    {
      type: 'select',
      name: 'Functie',
      label: 'Functie',
      placeholder: 'Kies je functie',
      options: ['Marketing of communicatie', 'HR of recruitment', 'Directie of eigenaar', 'Anders'],
      required: true,
      other: { name: 'Functie (anders)', label: 'Welke functie?', placeholder: 'Jouw functie' },
    },
    { name: 'Bedrijfsnaam', label: 'Bedrijfsnaam', type: 'text', placeholder: 'Jouw bedrijfsnaam', required: true, maxlength: 256, autocomplete: 'organization' },
    { name: 'E-mailadres', label: 'E-mailadres', type: 'email', placeholder: 'jouw@emailadres.nl', required: true, maxlength: 256, autocomplete: 'email' },
    { name: 'Telefoonnummer', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', required: true, maxlength: 256, autocomplete: 'tel' },
    { name: 'Website bedrijf', label: 'Website van het bedrijf', type: 'text', placeholder: 'www.jouwbedrijf.nl', maxlength: 256, autocomplete: 'url' },
    { type: 'heading', label: 'Over je doel' },
    { name: 'Wat wil je bereiken', label: 'Wat wil je bereiken of oplossen?', type: 'textarea', placeholder: 'Onze vacatures blijven openstaan', required: true, maxlength: 5000 },
    {
      type: 'checkboxes',
      name: 'Waar denk je aan',
      label: 'Waar denk je aan?',
      placeholder: 'Selecteer dienst(en)',
      countLabel: '{n} diensten geselecteerd',
      options: [
        ...audiences.business.map((audience) => ({ group: audience.title, options: services[audience.value].map((service) => service.title) })),
        'Weet ik nog niet, ik wil advies.',
      ],
      required: true,
    },
    {
      type: 'checkboxes',
      name: 'Waar ingezet',
      label: 'Waar wordt het ingezet?',
      placeholder: 'Selecteer een of meer',
      countLabel: '{n} geselecteerd',
      options: ['Website', 'Social media', 'LinkedIn', 'Advertenties', 'Recruitment', 'Beurs of presentatie', 'Intern', 'Anders'],
      required: true,
      other: { name: 'Waar ingezet (anders)', label: 'Waar dan?', placeholder: 'Waar wordt het ingezet?' },
    },
    { name: 'Voor wie', label: 'Voor wie is het bedoeld?', type: 'text', placeholder: 'Bijv. sollicitanten, klanten of medewerkers', maxlength: 256 },
    { type: 'heading', label: 'Over de productie' },
    {
      type: 'radio',
      name: 'Wanneer klaar',
      label: 'Wanneer moet het klaar zijn?',
      options: ['Binnen 1 maand', '1 tot 3 maanden', '3 tot 6 maanden', 'Geen vaste deadline'],
      required: true,
    },
    {
      name: 'Budget',
      label: 'Budgetindicatie',
      type: 'text',
      placeholder: 'Bijv. € 5.000',
      hint: 'Een budget helpt bij een offerte en concept op maat',
      maxlength: 256,
    },
    { name: 'Locatie', label: 'Waar zou gefilmd of gefotografeerd worden?', type: 'text', placeholder: 'Bijv. op kantoor in Utrecht', required: true, maxlength: 256 },
    {
      type: 'radio',
      name: 'Wie beslist mee',
      label: 'Wie beslist mee?',
      options: ['Alleen ik', 'Ik met een of twee collega’s', 'Meerdere afdelingen of directie'],
      required: true,
    },
    {
      type: 'checkboxes',
      name: 'Al aanwezig',
      label: 'Heb je al iets liggen?',
      placeholder: 'Selecteer een of meer',
      countLabel: '{n} geselecteerd',
      options: ['Briefing', 'Huisstijl', 'Bestaand beeld', 'Een idee', 'Nog niets'],
      required: true,
    },
    { type: 'heading', label: 'Tot slot' },
    {
      type: 'radio',
      name: 'Gevonden via',
      label: 'Hoe heb je Bold Productions gevonden?',
      options: ['LinkedIn', 'Google', 'Aanbeveling', 'Via Bold Events', 'Anders'],
      other: { name: 'Gevonden via (anders)', label: 'Hoe dan?', placeholder: 'Hoe heb je ons gevonden?' },
    },
    { name: 'Nog iets', label: 'Is er nog iets wat we moeten weten?', type: 'textarea', placeholder: 'Alles wat helpt', maxlength: 5000 },
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

const forms = { contact: contactForm, offerte: offerteForm, 'offerte-business': businessOfferteForm, trouwfilm: weddingForm } satisfies Record<FormChoice['name'], ContactFormProps>;

/** Formulier op naam, met eventueel een andere placeholder voor het berichtveld; `path` = pagina
 * waarop het staat (Business: succesmelding linkt naar /business/cases). */
export function getForm({ name, messagePlaceholder }: FormChoice, path = ''): ContactFormProps {
  let form = forms[name];
  if (messagePlaceholder) {
    form = {
      ...form,
      fields: form.fields.map((field) => ('name' in field && field.name === 'Bericht' ? { ...field, placeholder: messagePlaceholder } : field)),
    };
  }
  if (sectionOf(path) === 'business') {
    form = { ...form, success: { ...form.success, text: JSON.parse(JSON.stringify(form.success.text).replaceAll('"/events/cases"', '"/business/cases"')) } };
  }
  return form;
}
