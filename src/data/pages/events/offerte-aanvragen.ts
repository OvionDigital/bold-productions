/**
 * /offerte-aanvragen — teksten letterlijk van www.weareboldproductions.com/offerte-aanvragen.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import hf20260404141600F53da6ceF2c742669148Fed3 from '../../../assets/images/offerte-aanvragen/hf-20260404-141600-f53da6ce-f2c7-4266-9148-fed3481c249c.jpg';
import hf20260501121116608252682b8c4682B3b9Fcce from '../../../assets/images/offerte-aanvragen/hf-20260501-121116-60825268-2b8c-4682-b3b9-fcce2af3e714.jpg';

export const page: PageData = {
  slug: 'events/offerte-aanvragen',
  title: 'Offerte aanvragen',
  meta: {
    schema: { type: 'webpage', relation: 'mainEntity' },
    title: 'Offerte aanvragen voor je event? | Bold Productions',
    description:
      'Geen standaard prijslijst, maar een eerlijk verhaal. Ontvang een voorstel op maat voor jouw event. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Vertel ons',
        titleAccent: 'over je event',
        accentInline: true,
        eyebrow: 'Dan vertellen wij wat we voor je kunnen doen.',
        secondaryCta: {
          label: 'Vraag een offerte aan',
          href: '#offerte-section',
          icon: 'arrow-down',
        },
        image: {
          src: hf20260404141600F53da6ceF2c742669148Fed3,
          alt: 'Bold Productions in de schijnwerpers.',
        },
        video: {
          id: '1180112930',
          hash: '2fa6fd18b8',
          title: 'Sfeervideo Offerte aanvragen – Bold Productions',
        },
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'contactSection',
      props: {
        id: 'offerte-section',
        content: [
          {
            h: ['Geen standaard offerte. Wel een eerlijk verhaal.'],
            level: 2,
          },
          {
            p: ['Elke opdracht is anders. Dus elke offerte is anders.'],
          },
          {
            p: [
              'Vul het formulier in en vertel ons wat je organiseert, wat je wil bereiken en welke diensten je in gedachten hebt. Dan nemen we contact met je op voor een kort gesprek. En daarna volgt een offerte die past bij jouw event en jouw doelstellingen.',
            ],
          },
          {
            p: ['Geen verrassing achteraf. Geen onnodige feedbackrondes. Gewoon duidelijke afspraken.'],
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
            label: 'Stuur ons een appje!',
            href: 'https://wa.me/31623328655?text=',
          },
        ],
        formWidth: 'narrow',
      },
      form: {
        name: 'offerte',
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Wat gebeurt er na je aanvraag?',
        gradient: 'yellow',
        body: [
          {
            ul: [
              [
                {
                  text: 'Het Bold-signaal gaat af',
                  strong: true,
                },
                {
                  br: true,
                },
                'We komen in actie.',
              ],
              [
                {
                  text: 'We nemen contact op',
                  strong: true,
                },
                {
                  br: true,
                },
                'Binnen één werkdag bellen of mailen we je voor een kort kennismakingsgesprek.',
              ],
              [
                {
                  text: 'We stellen de juiste vragen',
                  strong: true,
                },
                {
                  br: true,
                },
                'We willen begrijpen wat je wil bereiken. Niet alleen wat je wil laten maken.',
              ],
              [
                {
                  text: 'Je ontvangt een offerte op maat',
                  strong: true,
                },
                {
                  br: true,
                },
                'Geen standaard prijslijst. Maar een voorstel dat past bij jouw event en jouw doelstellingen.',
              ],
            ],
            spaced: true,
          },
          {
            quote: [
              {
                text: 'Mike Ampting — ',
                strong: true,
              },
              {
                text: 'Creative Director, Bold Productions',
                em: true,
              },
            ],
          },
        ],
        media: {
          type: 'image',
          src: hf20260501121116608252682b8c4682B3b9Fcce,
          alt: 'In de schijnwerpers: Bold Productions contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
  ],
};
