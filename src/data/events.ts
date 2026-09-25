/**
 * Inhoud van /events. Teksten letterlijk van www.weareboldproductions.com/events.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { Crumb } from '../components/layout/Breadcrumbs.astro';
import heroImage from '../assets/images/events/hero-hrieps-festival.jpg';
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
