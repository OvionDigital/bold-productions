/**
 * Klantlogo's ("Vertrouwd door"), per doelgroep een eigen strip zoals live.
 * Alt = organisatienaam. Indeling: één of meer soorten en doelgroepen (data/taxonomy.ts);
 * een strip toont de logo's van de doelgroep van de pagina (logosForPath), max. 10 willekeurig.
 */
import type { Logo } from '../components/sections/LogoMarquee.astro';
import { matchingPath, type MultiTargeting } from './taxonomy';
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

/** Logo met indeling (soorten + doelgroepen, geen diensten), voor het CMS */
export type TaggedLogo = Logo & MultiTargeting;

/** Events (homepage, /events en dienstpagina's voor events) */
export const clientLogos: TaggedLogo[] = [
  { src: vunzigeDeuntjes, alt: 'Vunzige Deuntjes', categories: ['events'], audiences: ['organisatoren'] },
  { src: proost, alt: 'Proost', categories: ['events'], audiences: ['organisatoren', 'artiesten'] },
  { src: zinInDeZomer, alt: 'Zin in de Zomer', categories: ['events'], audiences: ['organisatoren'] },
  { src: dorpsfeestWehl, alt: 'Dorpsfeest Wehl', categories: ['events'], audiences: ['organisatoren'] },
  { src: soenda, alt: 'Soenda', categories: ['events'], audiences: ['organisatoren'] },
  { src: bospop, alt: 'Bospop', categories: ['events'], audiences: ['organisatoren'] },
  { src: zwarteCross, alt: 'Zwarte Cross', categories: ['events'], audiences: ['organisatoren'] },
  { src: drift, alt: 'Drift', categories: ['events'], audiences: ['organisatoren'] },
  { src: doorgedraaid, alt: 'Doorgedraaid', categories: ['events'], audiences: ['organisatoren'] },
];

/** Artiesten (/artiesten en subpagina's) */
export const artistLogos: TaggedLogo[] = [
  { src: whyGoHome, alt: 'Why Go Home', categories: ['events'], audiences: ['artiesten'] },
  { src: deSfeermakers, alt: 'De Sfeermakers', categories: ['events'], audiences: ['artiesten'] },
  { src: saxypianoshow, alt: 'Saxypianoshow', categories: ['events'], audiences: ['artiesten'] },
  { src: sf, alt: 'SF', categories: ['events'], audiences: ['artiesten'] },
  { src: oneEternity, alt: 'One Eternity', categories: ['events'], audiences: ['artiesten'] },
  { src: proost, alt: 'Proost', categories: ['events'], audiences: ['organisatoren', 'artiesten'] },
  { src: ianZwaardski, alt: 'Ian Zwaardski', categories: ['events'], audiences: ['artiesten'] },
  { src: reinierPeters, alt: 'Reinier Peters', categories: ['events'], audiences: ['artiesten'] },
  { src: karakter, alt: 'Karakter', categories: ['events'], audiences: ['artiesten'] },
  { src: joriekeSterken, alt: 'Jorieke Sterken', categories: ['events'], audiences: ['artiesten'] },
];

/** Zakelijke events (/zakelijke-events en subpagina's) */
export const businessLogos: TaggedLogo[] = [
  { src: pimm, alt: 'PIM&M', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: waterschap, alt: 'Waterschap Rijn en IJssel', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: basil, alt: 'Basil', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: feestkoning, alt: 'Feestkoning', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: mediacows, alt: 'Mediacows', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: t3Live, alt: 'T3 Live', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: superminds, alt: 'Superminds', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: broodMetSpelen, alt: 'Brood met Spelen', categories: ['events'], audiences: ['zakelijke-events'] },
  { src: deLiveFormule, alt: 'De Live Formule', categories: ['events'], audiences: ['zakelijke-events'] },
];

export const trustedByTitle = 'Vertrouwd door';

/**
 * Logo's voor een strip op deze pagina: met de soort én doelgroep van het pad; zijn die er
 * niet, dan met de soort, en anders alle logo's. De strip kiest er zelf max. 10 willekeurig uit.
 */
export const logosForPath = matchingPath;
