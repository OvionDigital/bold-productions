/**
 * Inhoud van /events. Teksten letterlijk van www.weareboldproductions.com/events.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import type { TextMediaProps } from '../components/sections/TextMedia.astro';
import type { TimelineProps } from '../components/sections/Timeline.astro';
import type { CaseSpotlightProps } from '../components/sections/CaseSpotlight.astro';
import type { TestimonialsProps } from '../components/sections/Testimonials.astro';
import type { ImageFeatureProps } from '../components/sections/ImageFeature.astro';
import type { ServiceTilesProps } from '../components/sections/ServiceTiles.astro';
import type { FaqProps } from '../components/sections/Faq.astro';
import type { PageData } from '../lib/sections';
import heroImage from '../assets/images/events/hero-hrieps-festival.jpg';
import optredenInTent from '../assets/images/events/optreden-in-tent.jpg';
import preProductie from '../assets/images/events/tijdlijn-pre-productie.jpg';
import productie from '../assets/images/events/tijdlijn-productie.jpg';
import postProductie from '../assets/images/events/tijdlijn-post-productie.jpg';
import bioscoop from '../assets/images/events/bioscoop.jpg';
import dienstPromovideos from '../assets/images/events/dienst-promovideos.jpg';
import dienstEventvideos from '../assets/images/events/dienst-eventvideos.avif';
import dienstSocialContent from '../assets/images/events/dienst-social-content.avif';
import dienstAftermovies from '../assets/images/events/dienst-aftermovies.jpg';
import dienstFotografie from '../assets/images/events/dienst-fotografie.jpg';
import mikeAftermovie from '../assets/images/events/mike-aftermovie.jpg';
import { clientLogos, trustedByTitle } from './logos';
import { pickTestimonials } from './testimonials';

export const meta: PageData['meta'] = {
  title: 'Eventcontent laten maken? | Bold Productions',
  description:
    'Creëer FOMO en verkoop meer tickets. Strategische eventcontent voor, tijdens en na je event. Ontdek Bold.',
};

export const hero: HeroProps = {
  title: 'Je event',
  titleAccent: 'promoten en verkopen?',
  eyebrow: 'Maak je videocontent bold',
  secondaryCta: { label: 'Doen we voor je', href: '#first-section', icon: 'arrow-down' },
  image: {
    src: heroImage,
    alt: 'Sfeerbeeld van het Hrieps Muziekfestival in Grijpskerke. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
  },
  video: { id: '1074314358', hash: '2fa6fd18b8', title: 'Sfeervideo eventcontent Bold Productions' },
  accent: 'green',
};

export const breadcrumbs: Crumb[] = [{ label: 'Events' }];

export const trustedBy: LogoMarqueeProps = {
  title: trustedByTitle,
  logos: clientLogos,
};

export const biggerThanTheDay: TextMediaProps = {
  id: 'first-section',
  title: 'Je event is groter dan de dag zelf',
  gradient: 'orange',
  body: [
    {
      p: [
        { text: 'Ervoor', strong: true },
        ' wil je FOMO creëren en tickets verkopen. ',
        { text: 'Tijdens', strong: true },
        ' wil je de ',
        { text: 'climax', em: true },
        ' vastleggen en delen. ',
        { text: 'Erna', strong: true },
        ' wil je de euforie verlengen en aan klantenbinding doen. ',
      ],
    },
    { p: ['Dat lukt alleen met ', { text: 'strategische eventcontent', strong: true }, '.'] },
    {
      ul: [
        [
          'Dan heeft elk moment van zichtbaarheid — hoe klein dat stukje content ook mag zijn — een rol in het grote geheel.',
        ],
        ['Dan krijgt je event een visuele stijl die meteen voor herkenning (en hunkering) zorgt bij je doelgroep.'],
        ['Dan blijft je event overeind in een concurrerende markt. '],
      ],
    },
    {
      p: [
        'En dat maakt al je inspanningen, alle stress, en alle onverwachte wendingen in aanloop naar je event, meer dan de moeite waard.',
      ],
    },
  ],
  cta: { label: 'Maak het waar(d)', href: '/events/offerte-aanvragen' },
  media: {
    type: 'image',
    src: optredenInTent,
    alt: 'Sfeerbeeld van een live-optreden in een tent. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
  },
  reverse: true,
  triangles: true,
  spacing: 'section',
  animate: false,
};

export const timeline: TimelineProps = {
  title: 'We schieten geen\nlosse flodders',
  gradient: 'yellow',
  reverse: true,
  intro: [
    {
      p: [
        'We schieten gericht, volgens plan. En dat plan maken we samen met jou. ',
        { text: 'Wat wil je bereiken? Bij wie wil je dat bereiken? Wat moeten zij voelen?', em: true },
      ],
    },
    {
      p: [
        'Klinkt misschien abstract, maar wij maken het concreet voor je. Je krijgt van ons een contentstrategie waarmee je ',
        { text: 'visuele impact', strong: true },
        ' maakt. Voor, tijdens en na je event.',
      ],
    },
  ],
  steps: [
    {
      number: '01',
      title: 'Pre-productie',
      text: [
        {
          p: [
            'Hier wordt strategie ',
            { text: 'tactiek', em: true },
            '. Concept, draaiplanning en crew.. we brengen alles in lijn met de strategie.',
          ],
        },
      ],
      image: { src: preProductie, alt: 'Team Bold Productions tijdens een opname van een aftermovie.' },
    },
    {
      number: '02',
      title: 'Productie',
      text: [
        {
          p: [
            'Op locatie leggen we het ',
            { text: 'moment suprême', em: true },
            ' vast. Sfeer, actie en emotie. Alles komt voorbij, maar altijd met jouw doelstellingen in het vizier.',
          ],
        },
      ],
      image: { src: productie, alt: 'Team Bold Productions tijdens opname van Legends of Rock.' },
    },
    {
      number: '03',
      title: 'Post-productie',
      text: [
        {
          p: [
            'We monteren en editten het geschoten materiaal. En een deel daarvan is direct inzetbaar, als same-day edits. Ook krijg je advies over de juiste timing en kanalen.',
          ],
        },
      ],
      image: {
        src: postProductie,
        alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het editen van videobeelden.',
      },
    },
  ],
  cta: { label: "Let's talk strategy", href: '/events/offerte-aanvragen', accent: 'yellow' },
};

export const caseSpotlight: CaseSpotlightProps = {
  title: 'Uitgelichte case',
  gradient: 'green',
  caseSlug: 'pluggerz-x-zwarte-cross-2026',
};

export const testimonials: TestimonialsProps = {
  eyebrow: 'Dit zeggen de',
  title: 'Festivals',
  gradient: 'orange',
  carousel: { label: 'Testimonials', prevLabel: 'Vorige', nextLabel: 'Volgende' },
  items: pickTestimonials(['ralph-buisman', 'dorpsfeest-wehl', 'siemen-peters']),
};

export const cinema: ImageFeatureProps = {
  id: 'cinema',
  title: 'Een keer wat anders dan\nEen losse download-link',
  gradient: 'green',
  text: 'We nodigen je liever uit in onze eigen bioscoop. Hier bekijken we samen de première. Dus we nemen plaats voor een groot scherm, met goed geluid en natuurlijk popcorn: het enige (film)cliché dat je van ons krijgt.',
  image: {
    src: bioscoop,
    alt: 'Klanten tijdens een videopresentatie in de mini-bioscoop van Bold Productions.',
  },
};

export const services: ServiceTilesProps = {
  title: 'Wat ga je daar zien?',
  gradient: 'yellow',
  text: [
    {
      p: [
        'Ligt eraan. Het doel is leidend. Niet de middelen. Maar er zijn natuurlijk een aantal ',
        { text: 'usual suspects', em: true },
        '. Hieronder zie je wat we ',
        { text: 'zouden', em: true },
        ' kunnen doen rondom je event.',
      ],
    },
  ],
  items: [
    {
      label: "Promovideo's",
      href: '/events/organisatoren/promovideos',
      image: {
        src: dienstPromovideos,
        alt: 'Sfeerbeeld van PROOST! BAND tijdens een live-optreden. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
      },
    },
    {
      label: "Eventvideo's",
      href: '/events/organisatoren/eventvideos',
      image: { src: dienstEventvideos, alt: 'Sfeerbeeld van een tentfeest.' },
    },
    {
      label: 'Social content',
      href: '/events/organisatoren/social-content',
      image: {
        src: dienstSocialContent,
        alt: 'Foto van een event bij De Vaste Clique. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
      },
    },
    {
      label: 'Aftermovies',
      href: '/events/organisatoren/aftermovie',
      image: {
        src: dienstAftermovies,
        alt: 'Sfeerbeeld van het Solexrace festival. Fotografie door Bold Productions contentspecialist voor Events & Artiesten.',
      },
    },
    {
      label: 'Fotografie',
      href: '/events/organisatoren/fotografie',
      image: {
        src: dienstFotografie,
        alt: 'Sfeerbeeld van een live-optreden. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
      },
    },
  ],
};

export const faq: FaqProps = {
  title: 'Veelgestelde vragen',
  gradient: 'green',
  items: [
    {
      question: 'Hoe vroeg voor mijn event moet ik beginnen met het laten maken van video content?',
      answer: [
        {
          p: [
            'Hoe eerder, hoe beter. Voor een promovideo adviseren we minimaal 6 weken voor je event te starten. Voor een volledige contentstrategie — inclusief promovideo, eventvideo en aftermovie — begin je het liefst 3 maanden van tevoren. Zo heb je genoeg tijd om de content strategisch in te zetten en maximaal effect te bereiken.',
          ],
        },
      ],
    },
    {
      question: 'Wat kost het laten maken van een eventvideo?',
      answer: [
        {
          p: [
            'Dat hangt af van de omvang van je event, het type content en de diensten die je nodig hebt. Elke opdracht is anders, dus elke offerte is anders. Vraag een offerte aan en we maken een voorstel dat past bij jouw event en budget.',
          ],
        },
      ],
    },
    {
      question: 'Wat is het verschil tussen een promovideo, een eventvideo en een aftermovie?',
      answer: [
        {
          p: [
            'Een promovideo maak je vóór je event om FOMO te creëren en tickets te verkopen. Een eventvideo leg je vast tijdens het event zelf — soms same-day, om live FOMO te creëren. Een aftermovie is een bewerkter stuk content dat het gevoel van je event samenvat en naspeelt, en de basis vormt voor promotie van je volgende editie.',
          ],
        },
      ],
    },
    {
      question: 'Kunnen jullie zowel video als fotografie verzorgen op ons event?',
      answer: [
        {
          p: [
            'Ja. We werken regelmatig met een gecombineerde aanpak waarbij we tegelijkertijd video en foto produceren. Zo hoef je niet met meerdere partijen te schakelen en klopt de stijl van alle content.',
          ],
        },
      ],
    },
    {
      question: 'Maken jullie ook content voor kleinere events of alleen grote festivals?',
      answer: [
        {
          p: [
            'We werken voor events van verschillende schaalgroottes. Van intiem clubevent tot meerdaags festival. Wat telt is niet de grootte van je event, maar de ambitie om te groeien.',
          ],
        },
      ],
    },
  ],
};

export const contactSection: TextMediaProps = {
  intro: {
    title: 'Gauw even praten?',
    gradient: 'orange',
    text: [
      {
        p: [
          'Lijkt ons een goed idee. Want het liefst begin je 3 maanden voor je event met de eerste ',
          { text: 'teasers', em: true },
          '. Dus we zijn nooit te vroeg voor een eerste overleg en kennismaking.',
        ],
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
};
