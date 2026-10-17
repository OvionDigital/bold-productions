import { defineType, defineField } from 'sanity';

/**
 * Afbeelding met alt-tekst. De alt-tekst staat normaal op de afbeelding zelf, in Media
 * (tool bovenin): die geldt op elke plek waar de afbeelding gebruikt wordt. Het veld hier
 * is voor een afwijkende tekst op deze ene plek. De site: eigen tekst, anders die uit Media.
 */
export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Afbeelding',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Afwijkende alt-tekst (optioneel)',
      description:
        'Leeg = de alt-tekst uit Media (geldt overal waar deze afbeelding staat; aanpassen via Media → afbeelding → Alt text). Vul hier alleen iets in als het op deze plek anders moet.',
      type: 'string',
    }),
  ],
});
