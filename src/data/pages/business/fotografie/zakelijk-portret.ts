/**
 * /business/fotografie/zakelijk-portret — teksten letterlijk van boldproductions.webflow.io/business/fotografie/zakelijk-portret (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import portretVrouwImg from '../../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-40-03-01-still001.jpg';
import mikeImg from '../../../../assets/images/team/mike-ampting.jpg';
import teamImg from '../../../../assets/images/over/bold-85.jpg';
import publiekImg from '../../../../assets/images/zakelijke-events/mike-skndag-65.jpg';
import crewDuoImg from '../../../../assets/images/over/rhbfoto-8.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fotografie/zakelijk-portret',
  title: "Portret- en teamfoto's",
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Zakelijke Portretfotografie',
    },
    title: 'Zakelijk portret laten maken | Portret- en teamfoto’s | Bold Productions',
    description: 'Zakelijke portretfotografie waarin mensen eruitzien zoals ze zijn. Bold maakt portretten en teamfoto’s voor je website, LinkedIn en communicatie.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Zakelijke portretten',
        titleAccent: 'zonder grijze muur.',
        eyebrow: 'Verrassend genoeg niet vanzelfsprekend.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Maken we voor je',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: portretVrouwImg,
          alt: 'Lachende vrouw aan het water, still uit een video van Bold Productions.',
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
        title: 'Je wilt een zakelijk portret. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Bijna altijd wel. Al is de vraag eronder vaak: hoe willen we overkomen?',
            ],
          },
          {
            p: [
              'Want een portret voor een advocatenkantoor ziet er anders uit dan een portret voor een installatiebedrijf. Allebei professioneel, maar professioneel betekent niet hetzelfde. Dat bepalen we vooraf, anders krijgt iedereen dezelfde foto tegen dezelfde grijze muur.',
            ],
          },
        ],
        cta: {
          label: 'Regelen we',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: mikeImg,
          alt: 'Mike Ampting, eigenaar van Bold Productions.',
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
              'Wat is zakelijke portretfotografie?',
            ],
            level: 3,
          },
          {
            p: [
              'Een zakelijk portret is de foto van jou of je collega’s die op je website staat, op LinkedIn, in offertes, bij persberichten, je e-mailhandtekening en op je beursstand.',
            ],
          },
          {
            p: [
              'Het is daarmee vaak het eerste wat iemand van je ziet. Nog voordat ze je site lezen of je spreken, hebben ze al een indruk gevormd. Daar kun je iets aan doen of niet.',
            ],
          },
          {
            h: [
              'Waarom de meeste zakelijke portretten niet werken',
            ],
            level: 3,
          },
          {
            p: [
              'Omdat het pasfoto’s zijn met betere belichting.',
            ],
          },
          {
            p: [
              'Iedereen tegen dezelfde achtergrond, dezelfde houding, dezelfde ingestudeerde glimlach. Keurig, en volledig uitwisselbaar. Je zou de koppen kunnen omwisselen tussen twee bedrijven en niemand zou het merken.',
            ],
          },
          {
            p: [
              'Een goed portret laat iets zien van wie iemand is. Dat is niet hetzelfde als geforceerd origineel doen met een gekke pose. Het gaat erom dat iemand ontspannen genoeg is om zichzelf te zijn, en dat is vooral een kwestie van tijd nemen.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een zakelijk\nportret op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Een betere eerste indruk, voordat je iets hebt gezegd',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je foto gaat aan elk gesprek vooraf. Op LinkedIn, in een offerte, in de zoekresultaten. Die indruk maak je maar één keer.',
              ],
              [
                {
                  text: 'Eén stijl voor het hele team',
                  strong: true,
                },
                {
                  br: true,
                },
                'Niets ziet er zo rommelig uit als een teampagina met acht foto’s uit acht verschillende jaren, half vakantiekiekjes. Eén shoot lost dat op',
              ],
              [
                {
                  text: 'Sterker richting sollicitanten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen willen weten met wie ze gaan werken. Portretten waarin collega’s er benaderbaar uitzien, doen meer dan een alinea over de bedrijfscultuur.',
              ],
              [
                {
                  text: 'Vertrouwen bij klanten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Zeker in advies en dienstverlening koopt men de persoon. Een goed portret maakt je benaderbaar voordat iemand belt.',
              ],
              [
                {
                  text: 'Materiaal dat jaren meegaat',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een portret veroudert pas als iemand er echt anders uitziet of vertrekt. Tot die tijd gebruik je het overal.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Tijd nemen, dat is het hele geheim.',
            text: [
              {
                p: [
                  'Niemand staat ontspannen voor een camera in de eerste twee minuten. Wie dat niet inplant, krijgt matige foto’s.',
                ],
              },
            ],
            image: {
              src: teamImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, met zijn team.',
            },
          },
          {
            number: '02',
            title: 'Stijl bepalen',
            text: [
              {
                p: [
                  'Hoe willen jullie overkomen, en waar komen de foto’s te staan? Binnen of buiten, op de werkvloer of neutraal, strak of losjes. Dat leggen we vooraf vast, zodat alle portretten op elkaar aansluiten ook als we ze over meerdere dagen maken.',
                ],
              },
            ],
            image: {
              src: publiekImg,
              alt: 'Publiek luistert naar een presentatie tijdens een zakelijk event.',
            },
          },
          {
            number: '03',
            title: 'De shoot',
            text: [
              {
                p: [
                  'We werken met een schema zodat niemand lang hoeft te wachten, maar nemen per persoon genoeg tijd. Mensen die het ongemakkelijk vinden, krijgen van ons geen instructies maar even een praatje. Na een minuut of twee is dat meestal opgelost.',
                ],
              },
            ],
            image: {
              src: crewDuoImg,
              alt: 'Fotograaf en videograaf van Bold Productions op weg naar een opname.',
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
            question: 'Wat kost een zakelijk portret?',
            answer: [
              {
                p: [
                  'Meestal rekenen we per dagdeel. De prijs hangt af van het aantal collega’s, of we op locatie of met een neutrale achtergrond werken en of er teamfoto’s bij komen. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het per persoon?',
            answer: [
              {
                p: [
                  'Reken op tien tot vijftien minuten. Dat klinkt kort, maar met een goede voorbereiding is dat genoeg. We werken met een schema zodat niemand zijn halve dag kwijt is.',
                ],
              },
            ],
          },
          {
            question: 'Onze collega’s vinden het vreselijk om op de foto te gaan.',
            answer: [
              {
                p: [
                  'Dat is de normaalste zaak en we zijn eraan gewend. We geven geen poseaanwijzingen en beginnen met een praatje in plaats van met de camera. In de praktijk is het bijna altijd binnen een paar minuten opgelost.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie op locatie komen?',
            answer: [
              {
                p: [
                  'Ja, en meestal is dat het beste. Op jullie eigen werkvloer zijn mensen meer op hun gemak en vertelt de achtergrond iets over het bedrijf. Wil je een neutrale achtergrond, dan nemen we een mobiele set mee.',
                ],
              },
            ],
          },
          {
            question: 'Wat moeten onze mensen aantrekken?',
            answer: [
              {
                p: [
                  'Daar krijgen jullie vooraf een korte briefing over, zodat niemand op de dag zelf voor verrassingen staat. Hoofdlijn: draag wat je normaal naar je werk draagt en laat drukke patronen en felle logo’s thuis.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen we later nieuwe collega’s laten bijfotograferen?',
            answer: [
              {
                p: [
                  'Ja. We leggen de stijl, belichting en achtergrond vast, zodat een portret dat we over een jaar maken naadloos aansluit bij de rest.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie ook creatieve teamfoto’s?',
            answer: [
              {
                p: [
                  'Ja. We maken de klassieke groepsfoto als je die nodig hebt, maar denken graag mee over iets wat jullie echt op de homepage willen zetten. Op de werkvloer, in actie, of met een idee dat bij jullie past.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie dit combineren met bedrijfsfotografie?',
            answer: [
              {
                p: [
                  'Ja, en dat is de slimste manier. De mensen zijn er toch, de locatie staat er toch. Portretten, teamfoto’s en sfeerbeeld van de werkvloer uit één dag levert een complete set op in dezelfde stijl.',
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
          title: 'Wanneer is jouw portret voor het laatst bijgewerkt?',
          text: [
            {
              p: [
                'Helpen we mee.',
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
