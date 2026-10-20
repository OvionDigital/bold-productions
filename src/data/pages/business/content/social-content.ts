/**
 * /business/content/social-content — teksten letterlijk van boldproductions.webflow.io/business/content/social-content (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import netwerken2Img from '../../../../assets/images/zakelijke-events/mike-skndag-137.jpg';
import kantoorImg from '../../../../assets/images/zakelijke-events/promovideo/rhbfoto-50.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import setImg from '../../../../assets/images/events/tijdlijn-pre-productie.jpg';
import polaroid1Img from '../../../../assets/images/polaroids/polaroid-1.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/social-content',
  title: 'Social content',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Social Media Content voor bedrijven',
    },
    title: 'Social content voor bedrijven | Drie pilaren, één plan | Bold Productions',
    description: 'Meer posten is geen strategie. Bold maakt social content vanuit drie pilaren: entertainment, persoonlijkheid en promotie. Van één sessie per kwartaal tot maandelijks.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Meer posten is',
        titleAccent: 'geen strategie.',
        eyebrow: 'Vaker niks te zeggen hebben ook niet.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Helpen we je mee',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: netwerken2Img,
          alt: 'Gasten in gesprek tijdens een zakelijk event.',
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
        title: 'Je wilt meer content. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Meestal niet.',
            ],
          },
          {
            p: [
              'Want als je kanalen niet groeien, ligt dat zelden aan de frequentie. Dan ligt het eraan dat niemand een reden heeft om te blijven kijken. Drie keer per week iets posten wat niemand boeit, levert precies niks op.',
            ],
          },
          {
            p: [
              'De vraag is dus niet hoeveel content je nodig hebt. De vraag is waarom iemand naar jou zou kijken.',
            ],
          },
          {
            h: [
              'Wat wij maken',
            ],
            level: 4,
          },
          {
            p: [
              'Videocontent voor je socials. Doorlopend, met een plan erachter.',
              {
                br: true,
              },
              'Geen losse filmpjes die toevallig ontstaan omdat iemand zijn telefoon pakte. Maar een serie die klopt: vaste onderwerpen, een herkenbare vorm en een reden waarom iemand de volgende keer blijft hangen.',
            ],
          },
          {
            p: [
              'Met als doel dat je kanalen groeien, dat mensen bij je terechtkomen en dat je er uiteindelijk iets mee verkoopt. Alle drie, in die volgorde.',
            ],
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: kantoorImg,
          alt: 'Medewerker aan het werk achter een buffet.',
        },
        triangles: true,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Onze methode: drie pilaren',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Elk bedrijf dat aan social begint, loopt tegen dezelfde vraag aan. Waar gaat het in godsnaam over?',
            ],
          },
          {
            p: [
              'Daar hebben we een methode voor ontwikkeld. Alles wat je als bedrijf op social kunt laten zien, valt onder drie pilaren.',
            ],
          },
          {
            ul: [
              [
                {
                  text: 'Entertainment.',
                  strong: true,
                },
                {
                  br: true,
                },
                'Content die mensen bekijken omdat hij leuk is, niet omdat hij over jou gaat. Dit is wat je bereik oplevert en wat gedeeld wordt.',
              ],
              [
                {
                  text: 'Persoonlijkheid.',
                  strong: true,
                },
                {
                  br: true,
                },
                'De mensen achter het bedrijf, hoe het er bij jullie aan toegaat, waar jullie in geloven. Dit is wat van volgers klanten maakt, want mensen kopen van mensen.',
              ],
              [
                {
                  text: 'Promotie.',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je dienst, je product, je aanbod. Dit is waar het uiteindelijk om draait, en precies de reden dat de andere twee bestaan. Alleen promotie posten werkt niet, want dan kijkt niemand.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Eerst de pilaren invullen. Dan de camera.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Zonder plan word je afhankelijk van inval, en inval komt nooit op dinsdagochtend.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Doel en doelgroep',
            text: [
              {
                p: [
                  'Wat wil je bereiken? Meer volgers is geen doel, dat is een getal. Wil je bekender worden, aanvragen binnenhalen of een bepaald type klant aantrekken? Daar hangt alles aan vast.',
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
            title: 'De invulling van de pilaren',
            text: [
              {
                p: [
                  'Entertainment, persoonlijkheid en promotie liggen vast. Wat erin komt niet. We bepalen samen welke onderwerpen bij jouw bedrijf passen en wat jouw doelgroep wil zien. Daar zit vaak verschil tussen wat jij het leukst vindt om te vertellen en wat werkt, en dat gesprek voeren we gewoon.',
                ],
              },
            ],
            image: {
              src: setImg,
              alt: 'Team Bold Productions tijdens een opname op een filmset.',
            },
          },
          {
            number: '03',
            title: 'Productie in sessies',
            text: [
              {
                p: [
                  'We filmen in blokken, meerdere afleveringen per opnamedag. Dat is efficiënter en het houdt de stijl consistent. Op locatie bewegen we mee met het werk in plaats van het stil te leggen.',
                ],
              },
            ],
            image: {
              src: polaroid1Img,
              alt: 'Cameraman van Bold Productions filmt backstage in roze licht.',
            },
          },
        ],
        cta: {
          label: 'Klinkt goed',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: [
              'Zo veel content als dat jij nodig hebt',
            ],
            level: 3,
          },
          {
            p: [
              'Onze methode schaalt namelijk mee.',
            ],
          },
          {
            p: [
              'Eén draaidag per kwartaal is genoeg om ongeveer een tot twee keer per week zichtbaar te blijven. Draai je op meerdere kanalen of wil je echt groeien, dan kunnen we opschalen naar maandelijks. Het ritme bepaal je op basis van hoeveel content je nodig hebt, niet op basis van wat wij graag willen verkopen.',
              {
                br: true,
              },
              'Wat niet verandert is de opzet. Dezelfde drie pilaren, hetzelfde plan, alleen een andere frequentie.',
            ],
          },
        ],
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Hoe vaak moeten we filmen?',
            answer: [
              {
                p: [
                  'Dat hangt af van hoeveel content je nodig hebt. Eén opnamesessie per kwartaal is genoeg om structureel zichtbaar te blijven. Wil je sneller groeien of zit je op meerdere kanalen, dan gaan we naar maandelijks. We beginnen met een ritme dat je zeker volhoudt en schalen op zodra het werkt.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost social media content uitbesteden?',
            answer: [
              {
                p: [
                  'Dat hangt af van het aantal opnamesessies, hoeveel video’s je per maand wil. We werken met vaste afspraken per periode in plaats van per losse video. Vraag een offerte aan en je krijgt een onderbouwd voorstel.',
                ],
              },
            ],
          },
          {
            question: 'Moeten alle drie de pilaren even zwaar wegen?',
            answer: [
              {
                p: [
                  'Nee, de verhouding verschilt per bedrijf en per fase. Begin je net, dan heb je meer entertainment nodig om überhaupt gezien te worden. Heb je al een publiek, dan mag promotie zwaarder wegen. Die balans bepalen we samen en stellen we bij op basis van wat werkt.',
                ],
              },
            ],
          },
          {
            question: 'Verzorgen jullie ook het posten en de planning?',
            answer: [
              {
                p: [
                  'Nee we posten niet voor je. Dat moet je zelf doen. Wel leveren we alles zo aan dat je alleen nog maar op posten hoeft te klikken.',
                ],
              },
            ],
          },
          {
            question: 'Voor welke kanalen maken jullie content?',
            answer: [
              {
                p: [
                  'Instagram, TikTok, LinkedIn en YouTube. We leveren in de juiste verhoudingen en lengtes per kanaal, zodat jij niet achteraf zit te croppen. Welke kanalen zinvol zijn, hangt af van je doelgroep en dat bepalen we vooraf.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil met contentcreatie?',
            answer: [
              {
                p: [
                  'Contentcreatie levert de voorraad: één of meerdere opnamedagen met foto en video waar je lang mee vooruit kunt. Social content is doorlopend en strategisch: drie vaste pilaren, herkenbare formats en een plan dat je kanalen laat groeien. Veel klanten doen allebei.',
                ],
              },
            ],
          },
          {
            question: 'Moeten onze medewerkers in beeld?',
            answer: [
              {
                p: [
                  'Niet per se, maar het helpt enorm. De pilaar persoonlijkheid draait erom, en content met een gezicht erin presteert vrijwel altijd beter. Wil je dat niet, dan vullen we die pilaar anders in, rond het werk, het product of het proces.',
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
        ],
        gradient: 'green',
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Waarom zou iemand jullie volgen?',
          text: [
            {
              p: [
                'Als je dat antwoord scherp hebt, maken wij er content van. Heb je het niet, dan beginnen we daar.',
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
