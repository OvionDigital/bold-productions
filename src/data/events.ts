/**
 * Inhoud van /events. Teksten letterlijk van www.weareboldproductions.com/events.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import type { TextMediaProps } from '../components/sections/TextMedia.astro';
import heroImage from '../assets/images/events/hero-hrieps-festival.jpg';
import optredenInTent from '../assets/images/events/optreden-in-tent.jpg';
import { clientLogos, trustedByTitle } from './logos';

export const meta = {
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
        ['Dan heeft elk moment van zichtbaarheid — hoe klein dat stukje content ook mag zijn — een rol in het grote geheel.'],
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
  cta: { label: 'Maak het waar(d)', href: '/offerte-aanvragen' },
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
