/**
 * /business/content/productvideo — teksten letterlijk van boldproductions.webflow.io/business/content/productvideo (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import paellaImg from '../../../../assets/images/cases/bold-productions-x-paella-dinershow-horizontaal-17.jpg';
import gerechtImg from '../../../../assets/images/zakelijke-events/promovideo/rhbfoto-135.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import hapjesImg from '../../../../assets/images/cases/superminds/240920164220-esprit-ict-jitskeseckel.jpg';
import editenImg from '../../../../assets/images/events/tijdlijn-post-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/productvideo',
  title: 'Productvideo',
  meta: {
    title: 'Productvideo laten maken | Verkoopt wat een foto niet kan | Bold Productions',
    description: 'Een productvideo die laat zien hoe het werkt en waarom het beter is. Bold maakt productvideo’s voor webshops, campagnes en sales. Bekijk de aanpak.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Een productvideo die doet',
        titleAccent: 'wat een foto niet kan.',
        eyebrow: 'Laten zien hoe het werkt. En waarom het beter is.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Daag ons uit',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: paellaImg,
          alt: 'Kok bereidt een grote pan paella.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Je wilt een productvideo. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Soms is de echte vraag een andere. Niet “hoe laten we ons product beter zien”, maar “waarom zou iemand voor ons kiezen en niet voor de goedkopere”.',
            ],
          },
          {
            p: [
              'Dat is geen specificatievraag. Dat is een vraag over wat jouw product oplost en voor wie. Daar beginnen we, want anders maak je een video van iets wat mensen nog steeds niet nodig vinden.',
            ],
          },
        ],
        cta: {
          label: 'Vertel me meer',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: gerechtImg,
          alt: 'Opgemaakt gerecht op een bord, gefotografeerd door Bold Productions.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: [
              'Wat is een productvideo?',
            ],
            level: 3,
          },
          {
            p: [
              'Een productvideo laat zien wat je product is, hoe het werkt en wat iemand eraan heeft. In een paar seconden tot een paar minuten, afhankelijk van waar hij staat.',
            ],
          },
          {
            p: [
              'Online kan niemand je product vastpakken. Niet draaien, niet voelen, niet uitproberen. Een foto laat zien hoe het eruitziet. Een productvideo laat zien hoe het is. Dat verschil bepaalt vaak of iemand op kopen klikt of verder zoekt.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een productvideo laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Minder twijfel voor de aankoop',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen haken af bij onduidelijkheid. Een video die laat zien hoe iets werkt en neemt precies de vragen weg waar iemand anders over blijft nadenken.',
              ],
              [
                {
                  text: 'Beter verkopen op je productpagina',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een productvideo op de pagina houdt bezoekers langer vast en beantwoordt vragen die anders bij je klantenservice terechtkomen.',
              ],
              [
                {
                  text: 'Materiaal dat overal werkt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je productpagina, je advertenties, je socials, een beurs, je sales. Eén productie, veel plekken.',
              ],
              [
                {
                  text: 'Je product uitleggen zonder handleiding',
                  strong: true,
                },
                {
                  br: true,
                },
                'Is je product nieuw of complex, dan kost uitleggen tijd. Een video doet dat één keer, voor iedereen, zonder dat jij erbij hoeft te zijn.',
              ],
              [
                {
                  text: 'Iets waar je concurrent niet bij kan',
                  strong: true,
                },
                {
                  br: true,
                },
                'Hetzelfde product bij een andere leverancier ziet er in een standaard productvideo precies hetzelfde uit. In een goede niet.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Eerst de vraag, dan het product voor de camera.',
            text: [
              {
                p: [
                  'Een productvideo die begint bij “wat moeten we laten zien” wordt een opsomming. Een die begint bij “wat moet iemand gaan denken” wordt een verkoopinstrument.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '02',
            title: 'Doel en concept',
            text: [
              {
                p: [
                  'Waar komt deze video te staan en wie kijkt ernaar? Iemand op je productpagina is al geïnteresseerd, iemand die hem voorbij ziet komen als advertentie nog niet. Op basis daarvan werken we één concept helemaal uit, inclusief de redenering erachter. Geen rijtje opties waar jij uit moet kiezen, want dan wordt het altijd de veilige route en die onthoudt niemand.',
                ],
              },
            ],
            image: {
              src: hapjesImg,
              alt: 'Hapjes worden geserveerd tijdens een bedrijfsevent.',
            },
          },
          {
            number: '03',
            title: 'Productie',
            text: [
              {
                p: [
                  'In de studio, op locatie of bij een gebruiker thuis. Welke het wordt, volgt uit het idee en niet andersom. Gefilmd, AI of een mix, afhankelijk van wat het product vraagt en wat er praktisch mogelijk is.',
                ],
              },
            ],
            image: {
              src: editenImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het editen van videobeelden.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Wat kost een productvideo laten maken?',
            answer: [
              {
                p: [
                  'Dat hangt af van het aantal producten, of we in de studio of op locatie draaien en hoeveel versies je nodig hebt. Meerdere producten op één dag maakt de prijs per video een stuk lager. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang moet een productvideo zijn?',
            answer: [
              {
                p: [
                  'Op je productpagina werkt dertig tot zestig seconden goed, want daar kijkt iemand die al geïnteresseerd is. Als advertentie is korter beter, soms maar zes tot tien seconden. We leveren meerdere lengtes zodat je overal de juiste hebt.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben een hele productlijn. Kunnen jullie die in één keer doen?',
            answer: [
              {
                p: [
                  'Ja, en dat is de slimste manier. We zetten de productie zo op dat elk product dezelfde stijl krijgt en dat nieuwe producten later toe te voegen zijn.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie productvideo’s maken voor onze webshop?',
            answer: [
              {
                p: [
                  'Ja. Voor webshops leveren we meestal een korte versie voor op de productpagina plus verticale cuts voor social en advertenties. We houden rekening met de eisen van je platform, zoals bestandsgrootte en verhouding.',
                ],
              },
            ],
          },
          {
            question: 'Kan een productvideo ook met AI?',
            answer: [
              {
                p: [
                  'Ja, helemaal of gedeeltelijk. Vooral handig als het product nog niet bestaat, als je het in een onmogelijke omgeving wil tonen of als je veel varianten hebt. Gaat het om materiaal of vakmanschap dat je moet voelen, dan is echt beeld geloofwaardiger. Dat bepalen we per product.',
                ],
              },
            ],
          },
          {
            question: 'Moeten we het product naar jullie opsturen?',
            answer: [
              {
                p: [
                  'Dat kan, en voor kleinere producten is dat vaak het makkelijkst. We draaien dan in een gecontroleerde omgeving. Is het product groot, kwetsbaar of alleen op locatie te zien, dan komen wij naar jullie toe.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op vier tot zes weken van eerste gesprek tot oplevering. Gaat het om één product in een eenvoudige opzet, dan kan het sneller. Zit je vast aan een lanceerdatum, zeg dat meteen.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben al productfoto’s. Is video dan nog nodig?',
            answer: [
              {
                p: [
                  'Foto’s laten zien hoe iets eruitziet. Video laat zien hoe het werkt, hoe groot het is en hoe het voelt in gebruik.',
                ],
              },
            ],
          },
        ],
        gradient: 'green',
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Wat weet een klant nog niet over jullie product?',
          text: [
            {
              p: [
                'Dat is precies wat er in de video moet.',
                {
                  br: true,
                },
                'Maken we voor je.',
              ],
            },
          ],
          gradient: 'orange',
        },
        media: {
          type: 'image',
          src: formImg,
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
