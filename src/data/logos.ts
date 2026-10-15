/**
 * Klantlogo's ("Vertrouwd door"), per doelgroep een eigen strip zoals live.
 * Alt = organisatienaam. Indeling (soort + doelgroep): data/taxonomy.ts.
 */
import type { Logo } from '../components/sections/LogoMarquee.astro';
import type { Targeting } from './taxonomy';
import vunzigeDeuntjes from '../assets/logos/vunzige-deuntjes.png';
import proost from '../assets/logos/proost.png';
import zinInDeZomer from '../assets/logos/zin-in-de-zomer.png';
import dorpsfeestWehl from '../assets/logos/dorpsfeest-wehl.png';
import soenda from '../assets/logos/soenda.webp';
import bospop from '../assets/logos/bospop.svg';
import zwarteCross from '../assets/logos/zwarte-cross.svg';
import drift from '../assets/logos/drift.svg';
import doorgedraaid from '../assets/logos/doorgedraaid.png';
import whyGoHome from '../assets/logos/why-go-home-logo-square-wh.png';
import deSfeermakers from '../assets/logos/logo-4.png';
import saxypianoshow from '../assets/logos/logometschaduw.png';
import sf from '../assets/logos/img-1111.png';
import oneEternity from '../assets/logos/one-eternity-png.png';
import ianZwaardski from '../assets/logos/zwaardski-wit.svg';
import reinierPeters from '../assets/logos/logo-icon-rp-white.png';
import karakter from '../assets/logos/karakter-logo-zwart-met-witte-letters.png';
import joriekeSterken from '../assets/logos/2025-2301-v1-sg-vector-logo-kln.png';
import pimm from '../assets/logos/pimm-logo.png';
import waterschap from '../assets/logos/frame.png';
import basil from '../assets/logos/basil-logo-tagline-wit.webp';
import feestkoning from '../assets/logos/logo-feest-koning-small-300x300-1-vectorized.png';
import mediacows from '../assets/logos/mediacows-png.png';
import t3Live from '../assets/logos/middel-1-4x.png';
import superminds from '../assets/logos/image-1.png';
import broodMetSpelen from '../assets/logos/brood-met-spelen-ong.png';
import deLiveFormule from '../assets/logos/frame-1.png';

/** Logo met indeling (soort + doelgroep, geen diensten), voor het CMS */
export type TaggedLogo = Logo & Omit<Targeting, 'services'>;

/** Events (homepage, /events en dienstpagina's voor events) */
export const clientLogos: TaggedLogo[] = [
  { src: vunzigeDeuntjes, alt: 'Vunzige Deuntjes', category: 'events', audience: 'organisatoren' },
  { src: proost, alt: 'Proost', category: 'events', audience: 'artiesten' },
  { src: zinInDeZomer, alt: 'Zin in de Zomer', category: 'events', audience: 'organisatoren' },
  { src: dorpsfeestWehl, alt: 'Dorpsfeest Wehl', category: 'events', audience: 'organisatoren' },
  { src: soenda, alt: 'Soenda', category: 'events', audience: 'organisatoren' },
  { src: bospop, alt: 'Bospop', category: 'events', audience: 'organisatoren' },
  { src: zwarteCross, alt: 'Zwarte Cross', category: 'events', audience: 'organisatoren' },
  { src: drift, alt: 'Drift', category: 'events', audience: 'organisatoren' },
  { src: doorgedraaid, alt: 'Doorgedraaid', category: 'events', audience: 'organisatoren' },
];

/** Artiesten (/artiesten en subpagina's) */
export const artistLogos: TaggedLogo[] = [
  { src: whyGoHome, alt: 'Why Go Home', category: 'events', audience: 'artiesten' },
  { src: deSfeermakers, alt: 'De Sfeermakers', category: 'events', audience: 'artiesten' },
  { src: saxypianoshow, alt: 'Saxypianoshow', category: 'events', audience: 'artiesten' },
  { src: sf, alt: 'SF', category: 'events', audience: 'artiesten' },
  { src: oneEternity, alt: 'One Eternity', category: 'events', audience: 'artiesten' },
  { src: proost, alt: 'Proost', category: 'events', audience: 'artiesten' },
  { src: ianZwaardski, alt: 'Ian Zwaardski', category: 'events', audience: 'artiesten' },
  { src: reinierPeters, alt: 'Reinier Peters', category: 'events', audience: 'artiesten' },
  { src: karakter, alt: 'Karakter', category: 'events', audience: 'artiesten' },
  { src: joriekeSterken, alt: 'Jorieke Sterken', category: 'events', audience: 'artiesten' },
];

/** Zakelijke events (/zakelijke-events en subpagina's) */
export const businessLogos: TaggedLogo[] = [
  { src: pimm, alt: 'PIM&M', category: 'events', audience: 'zakelijke-events' },
  { src: waterschap, alt: 'Waterschap Rijn en IJssel', category: 'events', audience: 'zakelijke-events' },
  { src: basil, alt: 'Basil', category: 'events', audience: 'zakelijke-events' },
  { src: feestkoning, alt: 'Feestkoning', category: 'events', audience: 'zakelijke-events' },
  { src: mediacows, alt: 'Mediacows', category: 'events', audience: 'zakelijke-events' },
  { src: t3Live, alt: 'T3 Live', category: 'events', audience: 'zakelijke-events' },
  { src: superminds, alt: 'Superminds', category: 'events', audience: 'zakelijke-events' },
  { src: broodMetSpelen, alt: 'Brood met Spelen', category: 'events', audience: 'zakelijke-events' },
  { src: deLiveFormule, alt: 'De Live Formule', category: 'events', audience: 'zakelijke-events' },
];

export const trustedByTitle = 'Vertrouwd door';
