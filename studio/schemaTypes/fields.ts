import { defineField } from 'sanity';

/**
 * Velden die in meerdere secties terugkomen. Waarden gelijk aan de props van de
 * Astro-componenten (HeadingGradient, Accent), titels in begrijpelijk Nederlands.
 */
export const gradientOptions = [
  { title: 'Oranje', value: 'orange' },
  { title: 'Geel', value: 'yellow' },
  { title: 'Groen', value: 'green' },
  { title: 'Accentkleur van de pagina', value: 'accent' },
  { title: 'Wit (geen kleurverloop)', value: 'none' },
];

export const accentOptions = [
  { title: 'Oranje', value: 'orange' },
  { title: 'Geel', value: 'yellow' },
  { title: 'Groen', value: 'green' },
];

export const gradientField = (initialValue: string, name = 'gradient') =>
  defineField({
    name,
    title: 'Kleur titel',
    type: 'string',
    options: { list: gradientOptions, layout: 'radio', direction: 'horizontal' },
    initialValue,
  });

/** Pijl op de tweede heroknop (Button icon); live meestal omlaag naar de eerste sectie. */
export const arrowIconField = () =>
  defineField({
    name: 'icon',
    title: 'Pijl',
    type: 'string',
    options: {
      list: [
        { title: 'Naar rechts', value: 'arrow-right' },
        { title: 'Omlaag', value: 'arrow-down' },
      ],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'arrow-down',
  });

/** Titels mogen over meerdere regels: Enter = nieuwe regel (Heading zet '\n' om naar <br>). */
export const titleField = (title = 'Titel', required = true) =>
  defineField({
    name: 'title',
    title,
    type: 'text',
    rows: 2,
    description: 'Enter = nieuwe regel in de titel.',
    validation: required ? (r) => r.required() : undefined,
  });

export const anchorIdField = (initialValue?: string) =>
  defineField({
    name: 'anchorId',
    title: 'Anker-ID (optioneel)',
    type: 'string',
    description:
      'Voor een knop die naar deze sectie springt: een knop met link "#first-section" scrolt naar de sectie met anker-ID "first-section".',
    initialValue,
    validation: (r) =>
      r.custom((value?: string) => (!value || /^[a-z0-9-]+$/.test(value) ? true : 'Alleen kleine letters, cijfers en streepjes.')),
  });

/** Platte tekst uit Portable Text, voor previews in de sectielijst. */
export function plainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map((b: { children?: { text?: string }[] }) => (b.children ?? []).map((c) => c.text ?? '').join(''))
    .join(' ')
    .trim();
}
