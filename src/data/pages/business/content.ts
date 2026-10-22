/**
 * /business/content — teksten letterlijk van boldproductions.webflow.io/business/content (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import setImg from '../../../assets/images/events/tijdlijn-pre-productie.jpg';
import montageImg from '../../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import cameramanImg from '../../../assets/images/events/tijdlijn-productie.jpg';
import gesprekImg from '../../../assets/images/zakelijke-events/aftermovie/mikexdeliveformule-finis-100-jaar-77.jpg';
import netwerken2Img from '../../../assets/images/zakelijke-events/mike-skndag-137.jpg';
import paellaImg from '../../../assets/images/cases/bold-productions-x-paella-dinershow-horizontaal-17.jpg';
import bouwImg from '../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-38.jpg';
import aiLogoImg from '../../../assets/images/offerte-aanvragen/hf-20260404-141600-f53da6ce-f2c7-4266-9148-fed3481c249c.jpg';
import bioscoopImg from '../../../assets/images/events/bioscoop.jpg';
import formImg from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content',
  title: 'Content',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Doorlopende content voor bedrijven',
    },
    title: 'Contentcreatie voor bedrijven | Doorlopend beeld dat werkt | Bold Productions',
    description: 'Contentcreatie, social content, klantverhalen en AI. Bold zorgt dat je doorlopend beeld hebt om mee naar buiten te treden, zonder elke week opnieuw te bedenken wat.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Het probleem is niet',
        titleAccent: 'dat je geen beeld kunt maken',
        eyebrow: 'Het probleem is dat het elke keer blijft liggen.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Helpen we mee',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: setImg,
          alt: 'Team Bold Productions tijdens een opname op een filmset.',
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
        title: 'Er is altijd iets belangrijkers dan content.',
        gradient: 'orange',
        body: [
          {
            p: [
              'Een ',
              {
                text: 'brandfilm',
                href: '/business/fundament/brandfilm',
              },
              ' maak je één keer en gebruik je jaren. Een ',
              {
                text: 'campagne',
                href: '/business/campagnes',
              },
              ' loopt een paar maanden en is dan voorbij.',
            ],
          },
          {
            p: [
              'Maar daartussenin moet er elke week iets uit. Een post, een mailing, een pagina die beeld nodig heeft, een sales die iets wil kunnen sturen. En dát is waar het bij de meeste bedrijven stokt.',
            ],
          },
          {
            p: [
              'Niet omdat ze geen beeld kunnen maken. Omdat het elke keer opnieuw een klusje is, en dus elke keer opnieuw blijft liggen.',
            ],
          },
          {
            p: [
              'Onze content lost dat op. Niet met één video, maar met een voorraad, een ritme en een plan.',
            ],
          },
        ],
        cta: {
          label: 'En dat wil je',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: montageImg,
          alt: 'Montageplek van Bold Productions met een interview op het scherm.',
        },
        triangles: true,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'ZICHTBAAR BLIJVEN',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Het hele jaar door, zonder dat het elke week een klusje is.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Contentcreatie',
            text: [
              {
                p: [
                  'Eén opnamedag, honderden beelden. Foto en video tegelijk, genoeg om je hele jaar mee te vullen. Je team hoeft er maar één keer tijd voor vrij te maken.',
                ],
              },
            ],
            image: {
              src: cameramanImg,
              alt: 'Cameraman van Bold Productions tijdens een opname.',
            },
            cta: {
              label: 'Meer over contentcreatie',
              href: '/business/content/contentcreatie',
            },
          },
          {
            number: '02',
            title: 'Referentievideo',
            text: [
              {
                p: [
                  'Jouw verhaal, verteld door jouw klanten. Beter bewijs is er niet',
                ],
              },
            ],
            image: {
              src: gesprekImg,
              alt: 'Gasten in gesprek tijdens een bedrijfsfeest.',
            },
            cta: {
              label: 'Meer over referentievideo\'s',
              href: '/business/content/referentievideo',
            },
          },
          {
            number: '03',
            title: 'Social content',
            text: [
              {
                p: [
                  'Drie pilaren, één plan, en nooit meer de vraag wat je deze week gaat posten. Van één sessie per kwartaal tot maandelijks.',
                ],
              },
            ],
            image: {
              src: netwerken2Img,
              alt: 'Gasten in gesprek tijdens een zakelijk event.',
            },
            cta: {
              label: 'Meer over social content',
              href: '/business/content/social-content',
            },
          },
          {
            number: '04',
            title: 'Productvideo',
            text: [
              {
                p: [
                  'Een foto laat zien hoe het eruitziet. Video laat zien hoe het werkt, hoe groot het is en waarom het beter is.',
                ],
              },
            ],
            image: {
              src: paellaImg,
              alt: 'Kok bereidt een grote pan paella.',
            },
            cta: {
              label: 'Meer over productvideo\'s',
              href: '/business/content/productvideo',
            },
          },
          {
            number: '05',
            title: 'Projectvideo',
            text: [
              {
                p: [
                  'Het eindresultaat ziet er vanzelfsprekend uit. Juist daarom moet je laten zien wat erin zat.',
                ],
              },
            ],
            image: {
              src: bouwImg,
              alt: 'Bezoekers bekijken een bouwproject van Waterschap Rijn en IJssel.',
            },
            cta: {
              label: 'Meer over projectvideo\'s',
              href: '/business/content/projectvideo',
            },
          },
          {
            number: '06',
            title: 'AI',
            text: [
              {
                p: [
                  'Beeld van wat nog niet bestaat, of van wat allang voorbij is. Varianten zonder tien keer de studio in. We zetten het in waar het iets toevoegt en zeggen het eerlijk wanneer niet.',
                ],
              },
            ],
            image: {
              src: aiLogoImg,
              alt: 'Bold Productions in de schijnwerpers.',
            },
            cta: {
              label: 'Lees meer over AI',
              href: '/business/content/ai',
            },
          },
        ],
        cta: {
          label: 'Plan een afspraak',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'MOGELIJK MAKEN WAT NIET KAN',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Een product dat nog in productie zit. Een foto uit 1963 die beweegt en een verhaal vertelt.',
            ],
          },
        ],
        steps: [],
      },
    },
    {
      type: 'imageFeature',
      props: {
        title: 'Meer posten is geen strategie',
        text: 'Dat is de valkuil waar vrijwel elk bedrijf in trapt. Het gaat niet goed op social, dus moet er vaker iets uit. Drie keer per week iets posten wat niemand boeit, levert alleen werk op. De vraag is niet hoeveel content je nodig hebt. De vraag is waarom iemand naar jou zou kijken.\nDaar beginnen we. Wat is er interessant aan wat jullie doen, voor wie, en hoe laat je dat zien in plaats van het te vertellen? Pas als dat scherp is, maken we een plan en pakken we de camera.\nEn ja, dat betekent soms dat we zeggen dat je niet meer content nodig hebt maar een betere reden om naar je te kijken.',
        image: {
          src: bioscoopImg,
          alt: 'Klanten tijdens een videopresentatie in de mini-bioscoop van Bold Productions.',
        },
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Waar beginnen we als we nog helemaal niets hebben?',
            answer: [
              {
                p: [
                  'Bij contentcreatie. Eén opnamedag levert je genoeg beeld op om maanden vooruit te kunnen, en dan weet je meteen wat je wel en niet gebruikt. Op basis daarvan kunnen we verder bouwen.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil tussen contentcreatie en social content?',
            answer: [
              {
                p: [
                  'Contentcreatie levert de voorraad: één of meerdere opnamedagen met foto en video waar je lang mee vooruit kunt. Social content is doorlopend en strategisch: drie vaste pilaren, een herkenbaar format en een plan dat je kanalen laat groeien. Veel klanten doen allebei.',
                ],
              },
            ],
          },
          {
            question: 'Hoe vaak moeten jullie langskomen?',
            answer: [
              {
                p: [
                  'Dat hangt af van hoeveel je nodig hebt. Eén opnamesessie per kwartaal is genoeg om structureel zichtbaar te blijven. Wil je sneller groeien of zit je op meerdere kanalen, dan gaan we naar maandelijks. We beginnen met een ritme dat je zeker volhoudt.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen we meerdere dingen uit één opnamedag halen?',
            answer: [
              {
                p: [
                  'Vaak wel, en dat is de slimste manier. Zijn we er toch, dan kunnen we een referentievideo, productbeeld en social content in dezelfde dag meenemen. Dat vraagt wel dat je vooraf weet wat je nodig hebt, dus breng dat mee naar het eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Verzorgen jullie ook het posten en de planning?',
            answer: [
              {
                p: [
                  'Nee posten doen we niet. Maar denken wel mee met de planning.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel zien we resultaat?',
            answer: [
              {
                p: [
                  'Reken op drie tot zes maanden voordat je echt iets ziet bewegen in bereik en aanvragen. Dat is geen slap antwoord maar hoe het werkt. Wie je iets anders belooft, verkoopt je een sprookje.',
                ],
              },
            ],
          },
          {
            question: 'Moeten we eerst een brandfilm of bedrijfsfilm hebben?',
            answer: [
              {
                p: [
                  'Nee, dat is geen voorwaarde. Content werkt wel beter als mensen al enig idee hebben wie je bent, dus als je allebei overweegt, is fundament de logische eerste stap. Maar wachten is zelden nodig.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie aansluiten bij ons marketingbureau?',
            answer: [
              {
                p: [
                  'Ja. Wij maken de content, zij zetten hem in. Dat werkt het beste als die partij vroeg aan tafel zit, want hun plan bepaalt mede waar onze pilaren over gaan.',
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
          title: 'Wanneer heb je voor het laatst iets gepost waar je trots op was?',
          text: [
            {
              p: [
                'Als dat even geleden is, weet je waar het aan ligt.',
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
