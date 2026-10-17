/**
 * Menu's en footerkolommen uit Sanity (singleton `siteNavigation`, in Studio "Menu & footer";
 * schema: studio/schemaTypes/documents/siteNavigation.ts). Per deel van de site (events,
 * business, neutraal): ontbreekt dat deel in Sanity, dan geldt src/data/navigation.ts.
 * Het logo-doel (`home`) en de wisselknop Events ↔ Business (`switchTo`) blijven vast. BaseLayout haalt dit op via getNavigation().
 */
import { sanityClient, isSanityConfigured } from './client';
import { isPreview } from '../preview';
import {
  navigation as localNavigation,
  type NavButton,
  type NavGroup,
  type NavLink,
  type SiteNavigation,
  type SiteSection,
} from '../../data/navigation';
import type { Accent } from '../../components/ui/Button.astro';

const linkProjection = `{ label, href }`;
const menuProjection = `{ label, href, inHeader, children[]${linkProjection} }`;
const footerProjection = `{ label, href, links[]{ label, href, bold } }`;
const partProjection = `{ cta${linkProjection}, menu[]${menuProjection}, footer[]${footerProjection} }`;

const QUERY = `*[_id == "siteNavigation"][0]{
  events${partProjection},
  business${partProjection},
  neutral{ buttons[]{ label, shortLabel, href, accent }, footer[]${footerProjection} }
}`;

type RawLink = { label?: string | null; href?: string | null; bold?: boolean | null };
type RawMenuGroup = RawLink & { inHeader?: boolean | null; children?: RawLink[] | null };
type RawFooterColumn = RawLink & { links?: RawLink[] | null };
type RawButton = RawLink & { shortLabel?: string | null; accent?: Accent | null };
interface RawPart {
  cta?: RawLink | null;
  menu?: RawMenuGroup[] | null;
  footer?: RawFooterColumn[] | null;
  buttons?: RawButton[] | null;
}
type RawNavigation = Partial<Record<SiteSection, RawPart | null>>;

const isComplete = <T extends RawLink>(item: T | null | undefined): item is T & { label: string; href: string } =>
  Boolean(item?.label && item.href);

const link = (item: RawLink & { label: string; href: string }): NavLink => ({
  label: item.label,
  href: item.href,
  bold: item.bold || undefined,
});

const menuGroup = (group: RawMenuGroup & { label: string; href: string }): NavGroup => ({
  ...link(group),
  inHeader: group.inHeader || undefined,
  children: (group.children ?? []).filter(isComplete).map(link),
});

const footerColumn = (column: RawFooterColumn & { label: string; href: string }): NavGroup => ({
  ...link(column),
  children: (column.links ?? []).filter(isComplete).map(link),
});

const button = (item: RawButton & { label: string; href: string }): NavButton => ({
  ...link(item),
  shortLabel: item.shortLabel || undefined,
  accent: item.accent ?? 'orange',
});

/** Eén deel: wat in Sanity is ingevuld vervangt het overeenkomstige stuk uit src/data. */
function toPart(raw: RawPart | null | undefined, local: SiteNavigation): SiteNavigation {
  if (!raw) return local;
  const menu = raw.menu?.filter(isComplete).map(menuGroup);
  const footer = raw.footer?.filter(isComplete).map(footerColumn);
  const buttons = raw.buttons?.filter(isComplete).map(button);
  return {
    home: local.home,
    nav: local.nav.length && menu?.length ? menu : local.nav,
    cta: local.cta && isComplete(raw.cta) ? link(raw.cta) : local.cta,
    buttons: local.buttons && buttons?.length ? buttons : local.buttons,
    switchTo: local.switchTo,
    footer: footer?.length ? footer : local.footer,
  };
}

async function fetchNavigation(): Promise<Record<SiteSection, SiteNavigation>> {
  if (!isSanityConfigured || !sanityClient) return localNavigation;
  const raw = await sanityClient.fetch<RawNavigation | null>(QUERY);
  if (!raw) return localNavigation;
  return {
    events: toPart(raw.events, localNavigation.events),
    business: toPart(raw.business, localNavigation.business),
    neutral: toPart(raw.neutral, localNavigation.neutral),
  };
}

let cache: Promise<Record<SiteSection, SiteNavigation>> | undefined;

/** Eén keer per build; in de preview per verzoek. */
export function getNavigation(): Promise<Record<SiteSection, SiteNavigation>> {
  if (isPreview) return fetchNavigation();
  cache ??= fetchNavigation();
  return cache;
}
