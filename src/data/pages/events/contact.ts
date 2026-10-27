/**
 * /contact — teksten letterlijk van www.weareboldproductions.com/contact.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { teamTiles } from '../../team';
import boldProductions98 from '../../../assets/images/contact/bold-productions-98.jpg';

export const page: PageData = {
  slug: 'events/contact',
  title: 'Contact',
  meta: {
    title: 'Contact Mike | Bold Productions',
    description:
      'Gewoon even praten. Geen gedoe of briefing nodig, maar direct contact met ons team. Bij jou, op locatie in Doetinchem of online.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Gewoon',
        titleAccent: 'even praten',
        accentInline: true,
        eyebrow: 'Geen drempel, geen gedoe.',
        secondaryCta: {
          label: 'Neem contact op',
          href: '#contact-section',
          icon: 'arrow-down',
        },
        image: {
          src: boldProductions98,
          alt: 'Actiefoto van PROOST! BAND tijdens een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        accent: 'green',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'contactSection',
      props: {
        id: 'contact-section',
        content: [
          {
            h: ['Hoe kunnen we je helpen?'],
            level: 2,
          },
          {
            p: [
              'Heb je een event op de planning en wil je weten wat Bold Productions voor je kan doen? Wil je een offerte aanvragen? Of heb je gewoon een vraag?',
            ],
          },
          {
            p: ['Neem contact op via het formulier, stuur een appje of bel direct. We reageren snel. Beloofd.'],
          },
        ],
        links: [
          {
            label: '+31 6 2332 86 55',
            href: 'tel:+31623328655',
          },
          {
            label: 'mike@weareboldproductions.com',
            href: 'mailto:mike@weareboldproductions.com',
          },
          {
            label: 'Stuur mij een Whatsapp',
            href: 'https://wa.me/31623328655?text=',
          },
        ],
      },
      form: {
        name: 'contact',
      },
    },
    {
      type: 'serviceTiles',
      props: {
        title: 'De mensen achter Bold.',
        gradient: 'yellow',
        variant: 'team',
        items: teamTiles({
          'mike-ampting': 'Mr. Bold himself',
        }),
      },
    },
    {
      type: 'map',
      props: {
        title: 'Waar vind je ons?',
        gradient: 'orange',
        text: [
          {
            p: ['Bold Productions is gevestigd in Doetinchem, Gelderland. Nationaal en internationaal inzetbaar.'],
          },
        ],
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.0049505398083!2d6.301741877602925!3d51.95210117811822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c785c004de0ae7%3A0x73bbc43bc991be87!2sBold%20Productions%20%7C%20by%20Mike%20Ampting!5e0!3m2!1snl!2snl!4v1775912062921!5m2!1snl!2snl',
        label: 'Kaart met de locatie van Bold Productions in Doetinchem',
      },
    },
  ],
};
