/**
 * /business/content/referentievideo — teksten letterlijk van boldproductions.webflow.io/business/content/referentievideo (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import gesprekImg from '../../../../assets/images/zakelijke-events/aftermovie/mikexdeliveformule-finis-100-jaar-77.jpg';
import portretVrouwImg from '../../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-40-03-01-still001.jpg';
import publiekImg from '../../../../assets/images/zakelijke-events/mike-skndag-65.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import montageImg from '../../../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/referentievideo',
  title: 'Referentievideo',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Testimonial Video Productie',
    },
    title: 'Testimonial video laten maken | Klantverhalen die overtuigen | Bold Productions',
    description: 'Een testimonial video waarin je klant iets zegt wat ertoe doet. Bold maakt klantverhalen die twijfelende prospects over de streep trekken.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Je beste verkoper',
        titleAccent: 'werkt niet bij jou.',
        eyebrow: 'Hij is een van je klanten.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe zit dat?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: gesprekImg,
          alt: 'Gasten in gesprek tijdens een bedrijfsfeest.',
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
        title: 'Je wilt een referentievideo. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Bijna altijd wel. Dit is een van de weinige dingen waar we zelden omheen hoeven.',
            ],
          },
          {
            p: [
              'Want als een prospect twijfelt, helpt geen enkele claim van jou. Hij wil weten of iemand anders met hetzelfde probleem er goed uit is gekomen. Dat is precies wat een klantverhaal doet. De vraag is dus niet óf je er een moet maken, maar welke klant erin moet en waar het gesprek over gaat.',
            ],
          },
        ],
        cta: {
          label: 'Wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: portretVrouwImg,
          alt: 'Lachende vrouw aan het water, still uit een video van Bold Productions.',
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
              'Wat is een testimonial video?',
            ],
            level: 3,
          },
          {
            p: [
              'Een testimonial video, ook wel referentievideo of klantverhaal, is een video waarin een klant vertelt wat jullie voor hem hebben gedaan en wat het heeft opgeleverd. Bedoeld om nieuwe klanten over hun twijfel heen te helpen. Klinkt simpel, toch?',
            ],
          },
          {
            h: [
              'Waarom de meeste testimonial video’s niets doen',
            ],
            level: 4,
          },
          {
            p: [
              'Omdat er een tevreden klant in een stoel zit die zegt dat hij zeer tevreden is.',
            ],
          },
          {
            p: [
              'Dat is geen bewijs. Dat is een compliment, en complimenten zijn gratis. Een prospect die twijfelt heeft daar niks aan, want hij hoort het van elke leverancier. Een klantverhaal werkt pas als het concreet is. Wat was het probleem precies? Wat ging er bijna mis? Waarom koos die klant uiteindelijk voor jullie en niet voor de andere partij? En wat is er daarna meetbaar veranderd?',
            ],
          },
          {
            p: [
              'Die vragen stellen is ongemakkelijk. Daarom stellen de meeste videomakers ze niet. Wij wel, want zonder die antwoorden heb je een vriendelijk filmpje in plaats van een verkoopinstrument.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een testimonial video laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Twijfel wegnemen bij mensen die je nog niet kennen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Dit is de video die je stuurt als een prospect aarzelt. Niet omdat jij zegt dat het goed komt, maar omdat iemand anders dat al heeft meegemaakt.',
              ],
              [
                {
                  text: 'Je sales een kortere weg geven',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een gesprek waarin je het bewijs al hebt geleverd, verloopt anders dan een gesprek waarin je het nog moet opbouwen.',
              ],
              [
                {
                  text: 'Een referentie die jaren meegaat',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een logo op je website veroudert nooit, maar overtuigt ook niemand. Een verhaal van een klant blijft jaren bruikbaar, in pitches, op je site en in je mailings.',
              ],
              [
                {
                  text: 'Jezelf positioneren via de klanten die je wil hebben',
                  strong: true,
                },
                {
                  br: true,
                },
                'De klant die je in beeld brengt, bepaalt wie zich aangesproken voelt. Kies dus niet de aardigste klant, maar de klant die lijkt op de klant die je meer wil.',
              ],
              [
                {
                  text: 'Een klant die zich gewaardeerd voelt',
                  strong: true,
                },
                {
                  br: true,
                },
                'In beeld komen is voor veel opdrachtgevers een compliment. Het is een van de weinige marketingmiddelen die de relatie beter maakt in plaats van iets vraagt.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Een goed gesprek, geen script.',
            text: [
              {
                p: [
                  'De beste zin uit een testimonial video is bijna nooit de zin die iemand van tevoren had bedacht.',
                ],
              },
              {
                p: [
                  {
                    text: 'Welke klant, welk verhaal',
                    strong: true,
                  },
                  {
                    br: true,
                  },
                  'We kiezen samen wie er in beeld komt. Niet de aardigste klant, maar degene wiens situatie lijkt op die van de prospects die jij wil overtuigen. Dat is een strategische keuze, geen beleefdheidskwestie.',
                ],
              },
            ],
            image: {
              src: publiekImg,
              alt: 'Publiek luistert naar een presentatie tijdens een zakelijk event.',
            },
          },
          {
            number: '02',
            title: 'De vragen vooraf',
            text: [
              {
                p: [
                  'We bepalen welke vragen beantwoord moeten worden. Wat was het probleem, wat was de twijfel, wat is er veranderd. Die vragen krijgt je klant niet van tevoren, want dan krijg je voorbereide antwoorden en daar prikt men doorheen.',
                ],
              },
              {
                p: [
                  'Geen script, geen autocue. Wij stellen de vragen en vragen door op het moment dat het interessant wordt. Mensen die het spannend vinden, krijgen van ons de tijd in plaats van instructies.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '03',
            title: 'Beeld dat het verhaal ondersteunt',
            text: [
              {
                p: [
                  'Woorden alleen zijn niet genoeg. We filmen ook waar het werk gebeurde: de locatie, het product, het resultaat. Zo zie je wat je hoort, en dat maakt het geloofwaardig.',
                ],
              },
            ],
            image: {
              src: montageImg,
              alt: 'Montageplek van Bold Productions met een interview op het scherm.',
            },
          },
        ],
        cta: {
          label: 'Dat wil ik',
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
            question: 'Wat is een testimonial video precies?',
            answer: [
              {
                p: [
                  'Een film waarin een bestaande klant vertelt wat jullie voor hem hebben gedaan en wat dat opleverde. Ook wel referentievideo of klantverhaal genoemd. Het verschil met gewone content: de boodschap komt niet van jou maar van iemand die het heeft meegemaakt, en dat is precies waarom hij werkt bij mensen die twijfelen.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost een testimonial video laten maken?',
            answer: [
              {
                p: [
                  'Dat hangt af van waar je klant zit, hoeveel ondersteunend beeld we filmen en of we meerdere klantverhalen in één traject opnemen. De opname zelf duurt vaak een halve dag. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Onze klant wil hier vast niet aan meewerken.',
            answer: [
              {
                p: [
                  'Dat valt bijna altijd mee. In beeld komen voelt voor de meeste opdrachtgevers als een compliment, zeker als jij het vraagt en niet een onbekende videomaker. Help het ze makkelijk maken: wij komen naar hen toe, het kost hooguit een paar uurtjes en ze hoeven niets voor te bereiden.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang is een testimonial video?',
            answer: [
              {
                p: [
                  'Meestal twee tot drie minuten voor de volledige versie, plus kortere cuts van dertig tot zestig seconden. Die korte versies gebruik je op social, de lange stuur je naar iemand die al serieus kijkt.',
                ],
              },
            ],
          },
          {
            question: 'Mogen we het script vooraf met onze klant doornemen?',
            answer: [
              {
                p: [
                  'We werken niet met een script, en dat is bewust. Voorbereide antwoorden klinken als voorbereide antwoorden. Wel delen we vooraf de onderwerpen, zodat niemand verrast wordt. En je klant krijgt de montage altijd te zien voordat hij live gaat.',
                ],
              },
            ],
          },
          {
            question: 'Wat als onze klant iets zegt wat we liever niet uitzenden?',
            answer: [
              {
                p: [
                  'Dan halen we het eruit. Wij monteren, dus jij bepaalt wat er in de eindversie staat. In de praktijk zijn de eerlijke stukken juist de stukken die het sterkst werken, dus we gaan er wel het gesprek over aan.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie dit combineren met een opdracht die we toch al doen?',
            answer: [
              {
                p: [
                  'Ja, en dat is de slimste manier. Draaien we toch een contentdag of een bedrijfsfilm, dan kost een testimonial video relatief weinig extra. Zeker als de klant die je in beeld wil toch aanwezig is. Veel opdrachtgevers plakken er meteen een paar korte quotes aan vast voor hun socials.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op drie tot vijf weken, afhankelijk van hoe snel je klant kan. De opname zelf duurt vaak niet langer dan een halve dag.',
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
          title: 'Welke klant zou dit voor jullie willen doen?',
          text: [
            {
              p: [
                'Grote kans dat je er nu al eentje in gedachten hebt.',
                {
                  br: true,
                },
                'Haak ons aan en we maken samen een verkooptool voor je.',
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
