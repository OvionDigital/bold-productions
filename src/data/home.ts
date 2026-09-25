/**
 * Homepage-inhoud. Teksten letterlijk van www.weareboldproductions.com.
 * Componenten bevatten geen teksten; alles komt hier vandaan.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import heroImage from '../assets/images/home/hero-festival-optreden.jpg';

export const meta = {
  title: 'Bold Productions | Event & Artiesten Content',
  description:
    'High-end video en fotografie voor festivals, artiesten en zakelijke events. Content met maximale impact. Get Bold.',
  // TODO: og-afbeelding lokaal zetten (live: 69f75c0061fe159a93c0a8f9_logot humbnails.jpg.jpeg)
  ogImage: undefined as string | undefined,
};

export const hero: HeroProps = {
  title: 'Video’s die je event',
  titleAccent: 'laten leven',
  eyebrow: 'Ervoor. Tijdens. Erna',
  primaryCta: { label: 'Bold to action', href: '/offerte-aanvragen' },
  secondaryCta: { label: 'Waarom zou je?', href: '#first-section', icon: 'arrow-down' },
  image: {
    src: heroImage,
    alt: 'Actiefoto van een live-optreden tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
  },
  video: { id: '1180112930', hash: '2fa6fd18b8', title: 'Sfeervideo Bold Productions', loadOnMobile: true },
};
