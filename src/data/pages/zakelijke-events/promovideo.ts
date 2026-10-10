/**
 * /zakelijke-events/promovideo — teksten letterlijk van www.weareboldproductions.com/zakelijke-events/promovideo.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, businessLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import mikeWaterschapHuisfeestje159 from '../../../assets/images/zakelijke-events/casevideo/mike-waterschap-huisfeestje-159.jpg';
import rhbfoto412 from '../../../assets/images/aftermovie-laten-maken/rhbfoto-412.jpg';
import rhbfoto30 from '../../../assets/images/zakelijke-events/promovideo/rhbfoto-30.jpg';
import rhbfoto50 from '../../../assets/images/zakelijke-events/promovideo/rhbfoto-50.jpg';
import rhbfoto135 from '../../../assets/images/zakelijke-events/promovideo/rhbfoto-135.jpg';
import mikeAftermovie from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'zakelijke-events/promovideo',
  title: 'Promovideo',
  meta: {
    schema: { type: 'service', serviceType: 'Zakelijke Promovideo Productie' },
    title: 'Zakelijke promovideo laten maken? | Bold Productions',
    description:
      "Zorg voor een volle zaal. Bold creëert high-end event-video's die jouw doelgroep activeren en de kaartverkoop versnellen.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Jouw klant wil opkomst.',
        titleAccent: 'Geen excuses.',
        eyebrow: 'Regelen we',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Zo doen wij dat',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeWaterschapHuisfeestje159,
          alt: 'Sfeerbeelden van een bedrijfsfeest gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'logoMarquee',
      props: {
        title: trustedByTitle,
        logos: businessLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is een zakelijke promovideo?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Een zakelijke promotievideo is de eerste indruk van jouw event. Het moment waarop een genodigde besluit: dit wil ik meemaken. Of erger: dit sla ik over.',
            ],
          },
          {
            p: [
              'Want ook bij een uitnodiging is er geen garantie dat mensen komen. Zeker niet als de agenda vol is, de reis er ver bij zit of de verwachting laag is. Een zakelijk event promoten is daarom meer dan een uitnodiging sturen. Het gaat om het creëren van voorpret. Om laten voelen waarom dit event de moeite waard is.',
            ],
          },
          {
            p: ['Maar hier zit meteen het probleem.'],
          },
          {
            p: [
              'De meeste zakelijke promofilms zien er netjes uit. Strak. ',
              {
                text: 'On-brand',
                em: true,
              },
              '. En toch haalt de organisatie niet de opkomst die ze hoopt. Omdat netjes en strak geen gevoel geven. Mensen bevestigen hun aanwezigheid niet voor een programma. Ze komen voor een belofte. Een gevoel. Een reden om er écht bij te willen zijn.',
            ],
          },
          {
            p: [
              'Een goede zakelijke promotievideo geeft ze die reden. Hij is ',
              {
                text: 'professioneel',
                strong: true,
              },
              ', maar heeft een ',
              {
                text: 'knipoog',
                em: true,
              },
              '. Hij straalt kwaliteit uit, maar voelt menselijk. En hij laat mensen denken: dit wil ik niet missen.',
            ],
          },
        ],
        cta: {
          label: 'Ik ook niet',
          href: '/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: rhbfoto412,
          alt: 'Een saxofonist tijdens een live-optreden. Foto door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een zakelijke promovideo je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Betere opkomst voor je klant',
                  strong: true,
                },
                {
                  br: true,
                },
                'De juiste promovideo verlaagt de drempel om te bevestigen en vergroot de motivatie om daadwerkelijk te komen. Genodigden zien wat ze kunnen verwachten en willen er deel van zijn.',
              ],
              [
                {
                  text: 'Een sterk visitekaartje voor jouw bureau',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een professionele promotievideo laat zien wat jij als eventorganisatie in huis hebt. Hij versterkt jouw reputatie bij je klant en maakt het gesprek over de volgende opdracht makkelijker.',
              ],
              [
                {
                  text: 'Content die je klant meerdere keren inzet',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een goede zakelijke promovideo is niet alleen inzetbaar voor de aanloop naar dit event. Je klant zet hem in op de website, op LinkedIn en in toekomstige communicatie. Eén productie, langdurige waarde.',
              ],
              [
                {
                  text: 'Iemand die snapt wat je bedoelt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Geen tien feedbackrondes. Geen eindeloos bijsturen. Wij stellen de juiste vragen aan het begin zodat de promovideo klopt aan het einde. Zodat jij je kunt richten op wat jij het beste doet.',
              ],
              [
                {
                  text: 'Een partner die gewoon zorgt dat het goedkomt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je hebt al genoeg aan je hoofd als eventorganisator. Wij regelen de content. Van briefing tot oplevering. Zonder gedoe.',
              ],
            ],
            spaced: true,
          },
          {
            p: [],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Van briefing tot promovideo\nZonder gedoe.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We weten hoe druk het is als je een zakelijk event organiseert. Honderd dingen tegelijk. Leveranciers die afhaken. Planningen die schuiven. Het laatste wat je nodig hebt is een contentpartner die je meer werk bezorgt dan hij oplost. ',
              {
                br: true,
              },
              'Dus werken we strak. ',
              {
                text: 'Gestructureerd',
                strong: true,
              },
              '. Met korte lijnen en duidelijke afspraken.',
            ],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'strategie en briefing',
            text: [
              {
                p: [
                  'We beginnen met de juiste vragen. Wat is het doel van je event? Wie zijn de genodigden? Wat moet iemand voelen als hij de video ziet? Op basis daarvan maken we een concreet plan. Geen vage concepten, maar een heldere aanpak.',
                ],
              },
            ],
            image: {
              src: rhbfoto30,
              alt: 'Sfeerbeeld tijdens een festival. Foto door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'concept en planning',
            text: [
              {
                p: [
                  'We vertalen de briefing naar een concept. Welke beelden hebben we nodig? Schieten we nieuw materiaal, of werken we met bestaande beelden van vorige edities? Alles wordt vastgelegd in een draaiplanning die aansluit op jouw tijdlijn.',
                ],
              },
            ],
            image: {
              src: rhbfoto50,
              alt: 'Een serveerster tijdens een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'productie en post-productie',
            text: [
              {
                p: [
                  'Op locatie werken we professioneel en onopvallend. We weten hoe we bewegen binnen een zakelijke omgeving. Geen gedoe, geen verrassingen.',
                ],
              },
              {
                p: [
                  'We monteren de zakelijke promotievideo ',
                  {
                    text: 'on-brand',
                    em: true,
                  },
                  ' en op tijd. Inclusief advies over de beste manier om hem in te zetten. Want een goede video op het verkeerde moment is ook zonde.',
                ],
              },
            ],
            image: {
              src: rhbfoto135,
              alt: 'Sfeerbeeld tijdens een event. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
          href: '/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'testimonials',
      props: {
        eyebrow: 'Dit zeggen de',
        title: 'Evenementenbureas',
        gradient: 'orange',
        carousel: testimonialCarousel,
        items: pickTestimonials(['manon-diks', 'dorpsfeest-wehl']),
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        gradient: 'green',
        items: [
          {
            question: 'Onze klant twijfelt of een promovideo nodig is voor hun event. Hoe overtuigen we hen?',
            answer: [
              {
                p: [
                  'Laat ons dat doen. We kunnen je helpen met een concreet voorstel dat de meerwaarde van een promovideo zwart op wit zet. Zodat jij intern het gesprek voert met de juiste argumenten. En wij zorgen dat de video het bewijs levert.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie de video afstemmen op de huisstijl van onze eindklant?',
            answer: [
              {
                p: [
                  'Ja. We nemen de huisstijl en merkrichtlijnen van je eindklant mee vanaf het eerste gesprek. Logo, kleuren, tone of voice. Zodat de promovideo naadloos aansluit bij de communicatie van jouw klant.',
                ],
              },
            ],
          },
          {
            question:
              'Wij organiseren meerdere events per jaar voor verschillende klanten. Kunnen jullie een vaste partner zijn?',
            answer: [
              {
                p: [
                  'Ja, en dat is precies hoe we het liefste werken. Als vaste contentpartner leren we jouw werkwijze en je klantenportefeuille steeds beter kennen. Dat maakt elke productie soepeler en het resultaat sterker.',
                ],
              },
            ],
          },
          {
            question: 'Hoe gaan jullie om met vertrouwelijke opdrachten?',
            answer: [
              {
                p: [
                  'Met de nodige discretie. We werken regelmatig voor events die niet publiek worden gecommuniceerd. We bespreken vooraf wat wel en niet naar buiten mag en stemmen de productie daar op af.',
                ],
              },
            ],
          },
          {
            question: 'Wat als de planning van ons event verschuift?',
            answer: [
              {
                p: [
                  'Dat kennen we. Eventplanningen schuiven nu eenmaal. We werken flexibel en denken mee als de tijdlijn verandert. Zolang we dat tijdig weten, lossen we het op.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Een contentpartner die\ngewoon zorgt dat het goedkomt.',
          gradient: 'orange',
          text: [
            {
              p: ['Dat is wat je zoekt. Dat is wat wij zijn. Laten we kennismaken.'],
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
