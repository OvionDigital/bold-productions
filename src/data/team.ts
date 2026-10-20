/**
 * Het team ("De mensen achter Bold"): één bron voor /cases, /over en /contact.
 * Elke pagina kiest de volgorde en mag de functieomschrijving overschrijven (live
 * verschilt die per pagina). Video's in public/video/ spelen af bij hover.
 * Teksten letterlijk van de live site (ook "Ralph buisman"; "Vidoegraaf" in oktober 2026 verbeterd).
 */
import type { ServiceTile } from '../components/sections/ServiceTiles.astro';
import rik from '../assets/images/team/rik-hendriks.jpg';
import tom from '../assets/images/team/tom-van-heteren.jpg';
import ralph from '../assets/images/team/ralph-buisman.jpg';
import mike from '../assets/images/team/mike-ampting.jpg';
import freelancers from '../assets/images/team/freelancers.svg';

export const team = {
  'rik-hendriks': {
    name: 'Rik Hendriks',
    role: 'De straaljagerpiloot',
    image: { src: rik, alt: 'Team Bold Productions tijdens het schieten van drone-shots tijdens het Doorgedraaid Feestival.' },
    video: '/video/team-rik-hendriks.webm',
  },
  'tom-van-heteren': {
    name: 'Tom van Heteren',
    role: 'Onze eigen Tarzan',
    image: { src: tom, alt: 'Tom van Heteren. Videograaf en Fotograaf voor Bold Productions, contentspecialist voor Events & Artiesten.' },
    video: '/video/team-tom-van-heteren.webm',
  },
  'ralph-buisman': {
    name: 'Ralph buisman',
    role: 'Brabantse gezelligheid',
    image: { src: ralph, alt: 'Ralph Buisman. Fotograaf voor Bold Productions, contentspecialist voor Events & Artiesten.' },
    video: '/video/team-ralph-buisman.webm',
  },
  'mike-ampting': {
    name: 'Mike Ampting',
    role: 'Shaken, not stirred.',
    image: { src: mike, alt: 'Creative Director Mike Ampting. Eigenaar van Bold Productions contentspecialist voor Events & Artiesten.' },
    video: '/video/team-mike-ampting.webm',
  },
  freelancers: {
    name: 'freelancers',
    role: 'De mensen die we vertrouwen\nmet jouw event',
    image: { src: freelancers, alt: '' },
    video: undefined,
  },
} satisfies Record<string, { name: string; role: string; image: ServiceTile['image']; video?: string }>;

export type TeamMemberId = keyof typeof team;

export const teamOrder: TeamMemberId[] = ['rik-hendriks', 'tom-van-heteren', 'ralph-buisman', 'mike-ampting', 'freelancers'];

/** Tegels voor ServiceTiles (variant 'team'), met per pagina eventueel andere functies. */
export function teamTiles(roles: Partial<Record<TeamMemberId, string>> = {}, ids: TeamMemberId[] = teamOrder): ServiceTile[] {
  return ids.map((id) => {
    const member = team[id];
    return { label: member.name, subtitle: roles[id] ?? member.role, image: member.image, video: member.video };
  });
}
