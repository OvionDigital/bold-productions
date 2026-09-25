/**
 * Alle testimonials op één plek. Pagina's kiezen ze op id met pickTestimonials().
 * Teksten letterlijk van de live site (met de afgesproken aanpassingen bij
 * 'reinier-peters' en 'dorpsfeest-wehl').
 * Later te vervangen door een content collection of CMS met dezelfde velden.
 */
import type { Testimonial } from '../components/ui/TestimonialCard.astro';
import reinier from '../assets/images/testimonials/reinier-peters.jpg';
import ralph from '../assets/images/testimonials/ralph-buisman.jpg';
import merijn from '../assets/images/testimonials/merijn-peters.jpg';
import manon from '../assets/images/testimonials/manon-diks.jpg';
import dorpsfeest from '../assets/images/testimonials/dorpsfeest-wehl.jpg';
import siemen from '../assets/images/testimonials/siemen-peters.jpg';

export const testimonials = {
  'reinier-peters': {
    quote:
      'Een promo laten maken door BOLD Productions! Laagdrempelig contact met veel persoonlijke aandacht. Een supergave promo geschoten uiteindelijk met leuke mensen!',
    // Artiesten- en privénaam zijn gelijk: één keer tonen
    name: 'Reinier Peters',
    image: { src: reinier, alt: 'Reinier Peters' },
  },
  'ralph-buisman': {
    quote:
      'Wanneer je next level content vraagt, maar er nog een schepje bovenop gedaan wordt. Fijn in de samenwerking, denkt volledig mee om uw event in video en zelfs fotografie nog mooier vast te leggen dan het al was.',
    name: 'Ralph Buisman',
    organisation: 'RHBFOTO',
    image: { src: ralph, alt: 'Ralph Buisman' },
  },
  'merijn-peters': {
    quote:
      'Wij hebben Bold Productions de opdracht gegeven om een bandpromo te maken en het resultaat mag er zeker zijn! Wij zijn zeer tevreden en we kijken nu al uit naar een volgende samenwerking.',
    name: 'Merijn Peters',
    organisation: 'KARAKTER',
    image: { src: merijn, alt: 'Merijn Peters' },
  },
  'manon-diks': {
    quote:
      'Bold snapt wat ik en de klant willen qua beeld zonder teveel te zeggen en voert dat uit in detail. Tevens zijn ze ook hele fijne jongens in de omgang! Altijd een feestje om samen te werken.',
    name: 'Manon Diks',
    organisation: 'De Live Formule',
    image: { src: manon, alt: 'Manon Diks' },
  },
  'dorpsfeest-wehl': {
    quote:
      'Dankzij de foto’s en video’s leefde Dorpsfeest Wehl al weken vóór het eerste biertje. Tijdens het weekend voelden we de kracht van content.',
    // Alleen de organisatie tonen (live staat als naam 'Organisatie')
    organisation: 'Dorpsfeest Wehl',
    image: { src: dorpsfeest, alt: 'Dorpsfeest Wehl' },
  },
  'siemen-peters': {
    quote:
      'Met onze evenementen Doorgedraaid Feestival & Piraten Café hebben we een fantastische samenwerking met Mike en zijn team! We vinden het ontzettend fijn hoe ze met ons meedenken en samen sparren om tot een passend en uniek concept te komen. ',
    name: 'Siemen Peters',
    organisation: 'Organisatie Doorgedraaid Feestival',
    image: { src: siemen, alt: 'Siemen Peters' },
  },
} satisfies Record<string, Testimonial>;

export type TestimonialId = keyof typeof testimonials;

export const pickTestimonials = (ids: TestimonialId[]): Testimonial[] => ids.map((id) => testimonials[id]);
