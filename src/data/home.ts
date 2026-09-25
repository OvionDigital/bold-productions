/**
 * Homepage-inhoud. Teksten letterlijk van www.weareboldproductions.com.
 * Componenten bevatten geen teksten; alles komt hier vandaan.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import heroImage from '../assets/images/home/hero-festival-optreden.jpg';
import logoVunzigeDeuntjes from '../assets/logos/vunzige-deuntjes.png';
import logoProost from '../assets/logos/proost.png';
import logoZinInDeZomer from '../assets/logos/zin-in-de-zomer.png';
import logoDorpsfeestWehl from '../assets/logos/dorpsfeest-wehl.png';
import logoSoenda from '../assets/logos/soenda.webp';
import logoBospop from '../assets/logos/bospop.svg';
import logoZwarteCross from '../assets/logos/zwarte-cross.svg';
import logoDrift from '../assets/logos/drift.svg';
import logoDoorgedraaid from '../assets/logos/doorgedraaid.png';

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

export const trustedBy: LogoMarqueeProps = {
  title: 'Vertrouwd door',
  logos: [
    { src: logoVunzigeDeuntjes, alt: 'Vunzige Deuntjes' },
    { src: logoProost, alt: 'Proost' },
    { src: logoZinInDeZomer, alt: 'Zin in de Zomer' },
    { src: logoDorpsfeestWehl, alt: 'Dorpsfeest Wehl' },
    { src: logoSoenda, alt: 'Soenda' },
    { src: logoBospop, alt: 'Bospop' },
    { src: logoZwarteCross, alt: 'Zwarte Cross' },
    { src: logoDrift, alt: 'Drift' },
    { src: logoDoorgedraaid, alt: 'Doorgedraaid' },
  ],
};
