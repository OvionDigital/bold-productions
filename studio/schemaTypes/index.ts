import { richText } from './objects/richText';
import { ctaButton } from './objects/ctaButton';
import { imageWithAlt } from './objects/imageWithAlt';
import { vimeoVideo } from './objects/vimeoVideo';
import { testimonial } from './documents/testimonial';
import { clientLogo } from './documents/clientLogo';
import { caseStudy } from './documents/caseStudy';
import { teamMember } from './documents/teamMember';
import { page } from './documents/page';
import { siteNavigation } from './documents/siteNavigation';
import { sectionTypes } from './sections';

export const schemaTypes = [
  richText,
  ctaButton,
  imageWithAlt,
  vimeoVideo,
  ...sectionTypes,
  testimonial,
  clientLogo,
  caseStudy,
  teamMember,
  page,
  siteNavigation,
];
