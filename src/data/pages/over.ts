/**
 * /over — teksten letterlijk van www.weareboldproductions.com/over.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../lib/sections';
import { teamTiles } from '../../data/team';
import { testimonialCarousel, pickTestimonials } from '../../data/testimonials';
import tijdlijnVoorLegendsOfRock from '../../assets/images/home/tijdlijn-voor-legends-of-rock.jpg';
import mikeAmpting from '../../assets/images/team/mike-ampting.jpg';
import f7ab9527E17b4f6d8e7fBd8d80c6a87a from '../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import boldDoorgedraaid2 from '../../assets/images/events/eventvideos/bold-doorgedraaid-2.jpg';
import boldDoorgedraaid5 from '../../assets/images/over/bold-doorgedraaid-5.jpg';
import boldDoorgedraaid3 from '../../assets/images/events/promovideos/bold-doorgedraaid-3.jpg';
import bold85 from '../../assets/images/over/bold-85.jpg';
import rhbfoto8 from '../../assets/images/over/rhbfoto-8.jpg';
import mikeAftermovie from '../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'over',
  title: 'Over',
  meta: {
    schema: { type: 'webpage', relation: 'publisher' },
    title: 'Over Bold Productions',
    description:
      'Maak kennis met ons team. Wij zijn dé eventspecialist die content maakt die tickets verkoopt. Ontdek waar wij voor staan.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'We are',
        titleAccent: 'Bold Productions',
        eyebrow: 'Een contentproductiebedrijf dat één ding retegoed doet.\nEvents. En dat al jaren.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Ontdek meer',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: tijdlijnVoorLegendsOfRock,
          alt: 'Actiefoto van een zanger die het publiek bespringt tijdens Legends of Rock. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
        },
        video: {
          id: '1113295446',
          hash: '2fa6fd18b8',
          title: 'Sfeervideo Over – Bold Productions',
        },
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Waarom Bold Productions bestaat',
        gradient: 'orange',
        body: [
          {
            p: [
              'In een tijd waarin iedereen beelden kan maken, gaat het er meer dan ooit om dat ze worden gemaakt door iemand die weet wat beelden moeten teweegbrengen.',
            ],
          },
          {
            p: [
              'Wij geloven dat goede eventcontent meer doet dan vastleggen. Het creëert ',
              {
                text: 'FOMO',
                em: true,
              },
              '. Het verkoopt tickets. Het bouwt aan een merk. En het laat mensen voelen wat ze voelden lang nadat het event voorbij is.',
            ],
          },
          {
            p: [
              'Daarom specialiseren we ons in de evenementensector met Bold Productions. Niet omdat we geen andere content kunnen maken. Maar omdat we ervan overtuigd zijn dat specialisatie ',
              {
                text: 'het verschil maakt tussen aardige content en content die werkt',
                strong: true,
              },
              '.',
            ],
          },
          {
            p: [
              'De wereld van video verandert snel. AI-tools, nieuwe cameratechnieken, andere manieren van editten en distribueren. Wij staan er niet wantrouwend tegenover. We omarmen het.',
            ],
          },
          {
            p: [
              'Niet omdat het hip is. Maar omdat het ons in staat stelt om ',
              {
                text: 'sneller',
                strong: true,
              },
              ', ',
              {
                text: 'scherper',
                strong: true,
              },
              ' en ',
              {
                text: 'creatiever',
                strong: true,
              },
              ' te werken. Zodat jij content krijgt die niet alleen goed is voor nu, maar ook klaar is voor morgen.',
            ],
          },
          {
            p: ['We experimenteren. We leren. En we passen toe wat werkt.'],
          },
        ],
        media: {
          type: 'image',
          src: mikeAmpting,
          alt: 'Creative Director Mike Ampting. Eigenaar van Bold Productions contentspecialist voor Events & Artiesten.',
        },
        reverse: true,
        triangles: true,
        spacing: 'section',
        animate: false,
      },
    },
    {
      type: 'imageFeature',
      props: {
        title: 'Hoe het begon',
        gradient: 'green',
        text: 'Bold Productions. Opgericht door Mike Ampting. Vanuit een simpele overtuiging.\nDe evenementensector verdient meer dan een generalist die ook wel een eventje doet. We weten hoe een festival voelt. We begrijpen hoe een boeker denkt.\n\nEn we weten wat een same-day edit kan doen voor de kaartverkoop van de volgende dag. Dat weet je niet uit een boek. Dat weet je omdat je er jaren middenin zit.\nVanuit Doetinchem — ja, Doetinchem — werken we voor events, artiesten en zakelijke opdrachtgevers door heel Nederland en daarbuiten. Want goede content heeft geen last van een postcode. Bold international? Dat klinkt groter dan we zijn. Maar we komen graag langs. Waar je ook zit.',
        image: {
          src: f7ab9527E17b4f6d8e7fBd8d80c6a87a,
          alt: 'Bold Productions tijdens het editen van videografie.',
        },
      },
    },
    {
      type: 'serviceTiles',
      props: {
        title: 'De mensen achter Bold',
        gradient: 'yellow',
        variant: 'team',
        items: teamTiles({
          'rik-hendriks': 'De (FPV) piloot',
          'tom-van-heteren': 'Onze Tarzan',
        }),
      },
    },
    {
      type: 'introHighlight',
      props: {
        id: 'first-section',
        content: [
          {
            p: [
              'We beginnen nooit met een camera. We beginnen met vragen. Wat wil je ',
              {
                text: 'bereiken?',
                strong: true,
              },
              'Wie is je ',
              {
                text: 'doelgroep?',
                strong: true,
              },
              'Wat moet iemand ',
              {
                text: 'voelen',
                strong: true,
              },
              'als hij jouw content ziet? Pas als dat helder is, maken we een ',
              {
                text: 'plan.',
                strong: true,
              },
              'En dan gaan we aan de slag. ',
            ],
          },
        ],
      },
    },
    {
      type: 'polaroidStack',
      props: {
        eyebrow: 'Het bold-team',
        title: 'in actie',
        gradient: 'green',
        photos: [
          {
            src: boldDoorgedraaid2,
            alt: 'Team Bold Productions, contentspecialist voor Events & Artiesten, tijdens het Doorgedraaid Feestival.',
          },
          {
            src: boldDoorgedraaid5,
            alt: 'Mike Ampting, eigenaar van Bold Productions tijdens een opdracht.',
          },
          {
            src: boldDoorgedraaid3,
            alt: 'Mike Ampting, Creative Director van Bold Productions, aan het werk tijdens een festival.',
          },
          {
            src: bold85,
            alt: 'Mike Ampting, eigenaar van Bold Productions met zijn team.',
          },
          {
            src: rhbfoto8,
            alt: 'Fotograaf en videograaf actief tijdens een opdracht met Bold Productions, contentspecialist voor Events & Artiesten.',
          },
        ],
      },
    },
    {
      type: 'testimonials',
      props: {
        eyebrow: 'Check wat',
        title: 'onze opdrachtgevers zeggen',
        gradient: 'orange',
        carousel: testimonialCarousel,
        items: pickTestimonials(['reinier-peters', 'ralph-buisman', 'merijn-peters', 'manon-diks', 'dorpsfeest-wehl']),
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Benieuwd wat Bold\nvoor jou kan doen?',
          gradient: 'orange',
          text: [
            {
              p: ['Slide dan in onze DM. Of vul het formulier in, mag ook.'],
            },
          ],
        },
        media: {
          type: 'image',
          src: mikeAftermovie,
          alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het opnemen van een aftermovie.',
        },
        triangles: true,
        spacing: 'section',
        animate: false,
      },
      form: {
        name: 'contact',
      },
    },
  ],
};
