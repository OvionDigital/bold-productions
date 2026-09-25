/**
 * Klantlogo's ("Vertrouwd door"). Alt = organisatienaam.
 */
import type { Logo } from '../components/sections/LogoMarquee.astro';
import vunzigeDeuntjes from '../assets/logos/vunzige-deuntjes.png';
import proost from '../assets/logos/proost.png';
import zinInDeZomer from '../assets/logos/zin-in-de-zomer.png';
import dorpsfeestWehl from '../assets/logos/dorpsfeest-wehl.png';
import soenda from '../assets/logos/soenda.webp';
import bospop from '../assets/logos/bospop.svg';
import zwarteCross from '../assets/logos/zwarte-cross.svg';
import drift from '../assets/logos/drift.svg';
import doorgedraaid from '../assets/logos/doorgedraaid.png';

export const clientLogos: Logo[] = [
  { src: vunzigeDeuntjes, alt: 'Vunzige Deuntjes' },
  { src: proost, alt: 'Proost' },
  { src: zinInDeZomer, alt: 'Zin in de Zomer' },
  { src: dorpsfeestWehl, alt: 'Dorpsfeest Wehl' },
  { src: soenda, alt: 'Soenda' },
  { src: bospop, alt: 'Bospop' },
  { src: zwarteCross, alt: 'Zwarte Cross' },
  { src: drift, alt: 'Drift' },
  { src: doorgedraaid, alt: 'Doorgedraaid' },
];

export const trustedByTitle = 'Vertrouwd door';
