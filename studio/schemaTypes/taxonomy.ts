import { defineField, defineArrayMember, type FieldsetDefinition } from 'sanity';

/**
 * Indeling van cases en testimonials: eerst Events óf Business, dan één doelgroep binnen die
 * soort, en (alleen cases) de diensten van die doelgroep. Klantlogo's: Events en/of Business
 * en per soort meerdere doelgroepen (multiTargetingFields).
 * Gelijk houden met src/data/taxonomy.ts (waarden) en src/lib/sanity/taxonomy.ts (veldnamen).
 */
type Option = { value: string; title: string };

const categories: Option[] = [
  { value: 'events', title: 'Events' },
  { value: 'business', title: 'Business' },
];

const audiences: Record<'events' | 'business', Option[]> = {
  events: [
    { value: 'organisatoren', title: 'Organisatoren' },
    { value: 'artiesten', title: 'Artiesten' },
    { value: 'zakelijke-events', title: 'Zakelijke events' },
  ],
  business: [
    { value: 'fundament', title: 'Fundament' },
    { value: 'campagnes', title: 'Campagnes' },
    { value: 'content', title: 'Content' },
    { value: 'fotografie', title: 'Fotografie' },
  ],
};

/** Diensten per doelgroep (= submenu's in het menu): veldnaam en opties */
const services: { category: 'events' | 'business'; audience: string; name: string; options: Option[] }[] = [
  {
    category: 'events',
    audience: 'organisatoren',
    name: 'servicesOrganisatoren',
    options: [
      { value: 'Promovideo', title: "Promovideo's" },
      { value: 'Eventvideo', title: "Eventvideo's" },
      { value: 'Aftermovie', title: 'Aftermovie' },
      { value: 'Social content', title: 'Social content' },
      { value: 'Fotografie', title: 'Fotografie' },
    ],
  },
  {
    category: 'events',
    audience: 'artiesten',
    name: 'servicesArtiesten',
    options: [
      { value: 'Bandpromo', title: 'Bandpromo' },
      { value: 'Artiestenpromo', title: 'Artiestenpromo' },
      { value: 'Recap', title: 'Recap' },
      { value: 'Social content', title: 'Social content' },
      { value: 'Fotografie', title: 'Fotografie' },
    ],
  },
  {
    category: 'events',
    audience: 'zakelijke-events',
    name: 'servicesZakelijkeEvents',
    options: [
      { value: 'Promovideo', title: "Promovideo's" },
      { value: 'Aftermovie', title: 'Aftermovie' },
      { value: 'Fotografie', title: 'Fotografie' },
      { value: 'Casevideo', title: 'Casevideo' },
    ],
  },
  {
    category: 'business',
    audience: 'fundament',
    name: 'servicesFundament',
    options: [
      { value: 'Brandfilm', title: 'Brandfilm' },
      { value: 'Bedrijfsfilm', title: 'Bedrijfsfilm' },
      { value: 'Employer branding', title: 'Employer branding' },
    ],
  },
  {
    category: 'business',
    audience: 'campagnes',
    name: 'servicesCampagnes',
    options: [
      { value: 'Commercial', title: 'Commercial' },
      { value: 'Merkactivatie', title: 'Merkactivatie' },
      { value: 'Werving', title: 'Werving' },
    ],
  },
  {
    category: 'business',
    audience: 'content',
    name: 'servicesContent',
    options: [
      { value: 'AI', title: 'AI' },
      { value: 'Contentcreatie', title: 'Contentcreatie' },
      { value: 'Referentievideo', title: 'Referentievideo' },
      { value: 'Social content', title: 'Social content' },
      { value: 'Productvideo', title: 'Productvideo' },
      { value: 'Projectvideo', title: 'Projectvideo' },
    ],
  },
  {
    category: 'business',
    audience: 'fotografie',
    name: 'servicesFotografie',
    options: [
      { value: 'Bedrijfsfotografie', title: 'Bedrijfsfotografie' },
      { value: 'Productfotografie', title: 'Productfotografie' },
      { value: "Portret- en teamfoto's", title: "Portret- en teamfoto's" },
      { value: 'Projectfotografie', title: 'Projectfotografie' },
    ],
  },
];

type Doc = { category?: string; eventsAudience?: string; businessAudience?: string } | undefined;

const audienceOf = (doc: Doc) => (doc?.category === 'business' ? doc.businessAudience : doc?.category === 'events' ? doc.eventsAudience : undefined);
const titleOf = (list: Option[], value?: string) => list.find((o) => o.value === value)?.title;

export const targetingFieldset: FieldsetDefinition = { name: 'targeting', title: 'Events of Business, doelgroep en diensten' };

/** Velden van de indeling. `services: false` = alleen soort + doelgroep (testimonials). */
export function targetingFields({ services: withServices = true, group }: { services?: boolean; group?: string } = {}) {
  const audienceField = (category: 'events' | 'business') =>
    defineField({
      name: `${category}Audience`,
      title: 'Doelgroep',
      type: 'string',
      fieldset: 'targeting',
      group,
      options: { list: audiences[category], layout: 'radio' },
      hidden: ({ parent }) => (parent as Doc)?.category !== category,
      validation: (r) =>
        r.custom((value, context) => ((context.parent as Doc)?.category === category && !value ? 'Kies een doelgroep.' : true)),
    });

  const fields = [
    defineField({
      name: 'category',
      title: 'Events of Business',
      type: 'string',
      fieldset: 'targeting',
      group,
      options: { list: categories, layout: 'radio', direction: 'horizontal' },
      validation: (r) => r.required().error('Kies Events of Business.'),
    }),
    audienceField('events'),
    audienceField('business'),
  ];
  if (!withServices) return fields;
  return [
    ...fields,
    ...services.map((s) =>
      defineField({
        name: s.name,
        title: `Diensten (${titleOf(audiences[s.category], s.audience)})`,
        description: 'Meerdere mogelijk.',
        type: 'array',
        fieldset: 'targeting',
        group,
        of: [defineArrayMember({ type: 'string' })],
        options: { list: s.options },
        hidden: ({ parent }) => (parent as Doc)?.category !== s.category || audienceOf(parent as Doc) !== s.audience,
      }),
    ),
  ];
}

/** "Events · Organisatoren" voor previews in lijsten. */
export function targetingLabel(doc: Doc): string | undefined {
  if (!doc?.category) return undefined;
  const category = doc.category === 'business' ? 'business' : 'events';
  return [titleOf(categories, doc.category), titleOf(audiences[category], audienceOf(doc))].filter(Boolean).join(' · ');
}

type MultiDoc = { categories?: string[]; eventsAudiences?: string[]; businessAudiences?: string[] } | undefined;

/**
 * Klantlogo's: Events en/of Business (vinkjes), en onder elke aangevinkte soort haar
 * doelgroepen (Events drie, Business vier; allebei aangevinkt = alle zeven). Een logostrip
 * toont de logo's van de doelgroep van de pagina.
 */
export function multiTargetingFields() {
  return [
    defineField({
      name: 'categories',
      title: 'Events en/of Business',
      type: 'array',
      fieldset: 'targeting',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: categories, layout: 'grid' },
      validation: (r) => r.required().min(1).error('Kies Events, Business of allebei.'),
    }),
    ...(['events', 'business'] as const).map((category) =>
      defineField({
        name: `${category}Audiences`,
        title: `Doelgroepen ${titleOf(categories, category)}`,
        description: 'Meerdere mogelijk.',
        type: 'array',
        fieldset: 'targeting',
        of: [defineArrayMember({ type: 'string' })],
        options: { list: audiences[category] },
        hidden: ({ parent }) => !((parent as MultiDoc)?.categories ?? []).includes(category),
        validation: (r) =>
          r.custom((value, context) =>
            ((context.parent as MultiDoc)?.categories ?? []).includes(category) && !(value as string[] | undefined)?.length
              ? 'Kies minstens één doelgroep.'
              : true,
          ),
      }),
    ),
  ];
}

/** "Events: Organisatoren, Artiesten · Business: Content" voor previews in lijsten. */
export function multiTargetingLabel(doc: MultiDoc): string | undefined {
  const parts = (doc?.categories ?? []).map((category) => {
    const list = audiences[category === 'business' ? 'business' : 'events'];
    const chosen = (category === 'business' ? doc?.businessAudiences : doc?.eventsAudiences) ?? [];
    const names = chosen.map((value) => titleOf(list, value)).filter(Boolean);
    return [titleOf(categories, category), names.join(', ')].filter(Boolean).join(': ');
  });
  return parts.length ? parts.join(' · ') : undefined;
}
