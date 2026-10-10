/**
 * Klantlogo's ("Vertrouwd door"), per doelgroep een eigen strip zoals live.
 * Alt = organisatienaam.
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

/** Events (homepage, /events en dienstpagina's voor events) */
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

/** Artiesten (/artiesten en subpagina's) */
export const artistLogos: Logo[] = [
  { src: whyGoHome, alt: 'Why Go Home' },
  { src: deSfeermakers, alt: 'De Sfeermakers' },
  { src: saxypianoshow, alt: 'Saxypianoshow' },
  { src: sf, alt: 'SF' },
  { src: oneEternity, alt: 'One Eternity' },
  { src: proost, alt: 'Proost' },
  { src: ianZwaardski, alt: 'Ian Zwaardski' },
  { src: reinierPeters, alt: 'Reinier Peters' },
  { src: karakter, alt: 'Karakter' },
  { src: joriekeSterken, alt: 'Jorieke Sterken' },
];

/** Zakelijke events (/zakelijke-events en subpagina's) */
export const businessLogos: Logo[] = [
  { src: pimm, alt: 'PIM&M' },
  { src: waterschap, alt: 'Waterschap Rijn en IJssel' },
  { src: basil, alt: 'Basil' },
  { src: feestkoning, alt: 'Feestkoning' },
  { src: mediacows, alt: 'Mediacows' },
  { src: t3Live, alt: 'T3 Live' },
  { src: superminds, alt: 'Superminds' },
  { src: broodMetSpelen, alt: 'Brood met Spelen' },
  { src: deLiveFormule, alt: 'De Live Formule' },
];

export const trustedByTitle = 'Vertrouwd door';
