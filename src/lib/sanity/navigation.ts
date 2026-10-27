/**
 * Menu's en footerkolommen uit Sanity (singleton `siteNavigation`, in Studio "Menu, footer & contact";
 * schema: studio/schemaTypes/documents/siteNavigation.ts). Per deel van de site (events,
 * business, neutraal): ontbreekt dat deel in Sanity, dan geldt src/data/navigation.ts.
 * Het logo-doel (`home`) en de wisselknop Events ↔ Business (`switchTo`) blijven vast. BaseLayout haalt dit op via getNavigation().
 * Social media (`socials`, één lijst voor de hele site): getSocials(); leeg in Sanity = src/data/navigation.ts.
 * Contactgegevens (footer, WhatsApp-knop, organisatie in de structured data): getContact(); per veld terugval.
 */
import { sanityClient, isSanityConfigured } from './client';
import { isPreview } from '../preview';
import {
  navigation as localNavigation,
  type NavButton,
  type NavGroup,
  type NavLink,
  type SiteContact,
  type SiteNavigation,
  type SiteSection,
  siteContact as localContact,
  socials as localSocials,
  socialPlatforms,
  type Social,
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

const SOCIALS_QUERY = `*[_id == "siteNavigation"][0].socials[]{ platform, url }`;

async function fetchSocials(): Promise<readonly Social[]> {
  if (!isSanityConfigured || !sanityClient) return localSocials;
  const raw = await sanityClient.fetch<{ platform?: string | null; url?: string | null }[] | null>(SOCIALS_QUERY);
  const list = (raw ?? []).flatMap(({ platform, url }) => {
    const known = socialPlatforms.find((p) => p.value === platform);
    return known && url ? [{ label: known.label, href: url, icon: known.icon }] : [];
  });
  return list.length ? list : localSocials;
}

let socialsCache: Promise<readonly Social[]> | undefined;

/** Social-medialinks (footer en sameAs in de structured data); één keer per build, in de preview per verzoek. */
export function getSocials(): Promise<readonly Social[]> {
  if (isPreview) return fetchSocials();
  socialsCache ??= fetchSocials();
  return socialsCache;
}

const CONTACT_QUERY = `*[_id == "siteNavigation"][0].contact{ email, phone, street, postalCode, city, kvk }`;

async function fetchContact(): Promise<SiteContact> {
  if (!isSanityConfigured || !sanityClient) return localContact;
  const raw = await sanityClient.fetch<Partial<Record<keyof SiteContact, string | null>> | null>(CONTACT_QUERY);
  const entries = Object.keys(localContact).map((key) => {
    const value = raw?.[key as keyof SiteContact]?.trim();
    return [key, value || localContact[key as keyof SiteContact]];
  });
  return Object.fromEntries(entries) as SiteContact;
}

let contactCache: Promise<SiteContact> | undefined;

/** Contactgegevens; één keer per build, in de preview per verzoek. */
export function getContact(): Promise<SiteContact> {
  if (isPreview) return fetchContact();
  contactCache ??= fetchContact();
  return contactCache;
}
