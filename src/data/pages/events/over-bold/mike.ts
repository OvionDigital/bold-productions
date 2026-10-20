/**
 * /over/mike — teksten letterlijk van www.weareboldproductions.com/over/mike.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import spotPleinpopAlphen00145503Still033 from '../../../../assets/images/aftermovie-laten-maken/spot-pleinpop-alphen-00-14-55-03-still033.jpg';
import mikeAmpting from '../../../../assets/images/team/mike-ampting.jpg';
import spotSeq01032214Still004 from '../../../../assets/images/over/mike/spot-seq-01-03-22-14-still004.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/over-bold/mike',
  title: 'Mike',
  meta: {
    schema: { type: 'profile' },
    title: 'Mike Ampting | Bold Productions',
    description:
      'Maak kennis met Mike Ampting, eigenaar van Bold Productions en specialist in eventcontent voor meer ticketverkoop.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Mike Ampting óf',
        titleAccent: 'Bold Productions',
        eyebrow: 'Creative Director en oprichter',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Ontdek meer',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: spotPleinpopAlphen00145503Still033,
          alt: 'PROOST! BAND op de foto door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        video: {
          id: '1113295446',
          hash: '2fa6fd18b8',
          title: 'Sfeervideo Mike – Bold Productions',
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
        title: 'Wie ben ik?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Ik ben Mike Ampting. Oprichter en ',
              {
                text: 'Creative Director',
                em: true,
              },
              ' van Bold Productions, een ',
              {
                text: 'contentproductiebedrijf',
                strong: true,
              },
              ' uit Doetinchem gespecialiseerd in de evenementensector.',
            ],
          },
          {
            p: [
              "Ik maak video's en foto's voor festivals, publieke events, artiesten en zakelijke evenementen. ",
              {
                br: true,
              },
              'Mijn werk omvat het hele traject. Van het eerste gesprek over wat een opdrachtgever wil bereiken, tot de strategie, het concept, de productie op locatie en de montage achteraf. Ik werk vanuit Doetinchem maar ben ',
              {
                text: 'actief door heel Nederland en internationaal',
                strong: true,
              },
              '.',
            ],
          },
          {
            p: [
              {
                text: 'Bold ',
                strong: true,
              },
              'goes international!',
            ],
          },
          {
            p: [
              'Naast videograaf ben ik ook conceptontwikkelaar. Ik denk mee over hoe content wordt ingezet, wanneer het live gaat en wat het teweeg moet brengen bij de ontvanger. Want goede beelden zonder strategie zijn zonde van het werk en jouw centjes!',
            ],
          },
          {
            p: ['Lijkt het je leuk om te connecten?'],
          },
          {
            // Links naar socials (op Webflow als h6 opgemaakt; het zijn geen koppen)
            ul: [
              [{ text: 'Mijn instagram', href: 'https://www.instagram.com/mikeampting/' }],
              [{ text: 'mijn Linkedin', href: 'https://www.linkedin.com/in/mikeampting/' }],
            ],
          },
          {
            p: [],
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
        title: 'Waarom de evenementensector?',
        gradient: 'green',
        text: 'Omdat ik er thuis ben. Ik had mijn camera op van alles kunnen richten. Maar ik koos voor events. Voor festivals. Voor artiesten. Voor de mensen die maandenlang werken aan één dag die voorbij vliegt voordat je het weet. Omdat ik weet hoe het voelt als alles samenkomt.\n\nAls de artiest het podium opgaat en de crowd volledig meegaat. Als de sfeer op een festival precies is wat de organisator voor ogen had. Dat zijn de momenten die ik wil vangen. En die ik wil laten voelen aan mensen die er niet bij waren. Ik geloof dat content meer kan doen dan vastleggen. Het kán FOMO creëren. Het kán tickets verkopen. Het kán een artiest aan meer boekingen helpen. En het kan laten zien wat een organisator heeft neergezet op een manier die geen woorden kunnen.\nDat is waarom ik doe wat ik doe.',
        image: {
          src: spotSeq01032214Still004,
          alt: 'Sfeerimpessie van een live-optreden vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
      },
    },
    {
      type: 'introHighlight',
      props: {
        id: 'first-section',
        content: [
          {
            p: [
              'Het gaat niet om zoveel mogelijk willen ',
              {
                text: 'vastleggen.',
                strong: true,
              },
              ' Het gaat om het vangen van de ',
              {
                text: 'juiste',
                strong: true,
              },
              ' momenten. Als dat lukt, hoef je niet uit te leggen hoe vet het was. Dan zien mensen het vanzelf. Of beter nog, dan ',
              {
                text: 'voelen',
                strong: true,
              },
              ' ze het',
            ],
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'samenwerken?',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel me over je event of project. Dan vertel ik wat ik voor je kan doen.'],
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
