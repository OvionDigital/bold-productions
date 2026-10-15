/**
 * Indeling (data/taxonomy.ts) ↔ Sanity-velden. In Studio staat elke keuze in een eigen
 * veld dat alleen verschijnt als het van toepassing is (doelgroep per soort, diensten
 * per doelgroep); zie studio/schemaTypes/taxonomy.ts.
 */
import type { Audience, Category, Targeting } from '../../data/taxonomy';

export const servicesField: Record<Audience, string> = {
  organisatoren: 'servicesOrganisatoren',
  artiesten: 'servicesArtiesten',
  'zakelijke-events': 'servicesZakelijkeEvents',
  fundament: 'servicesFundament',
  campagnes: 'servicesCampagnes',
  content: 'servicesContent',
  fotografie: 'servicesFotografie',
};

/** In een GROQ-projectie te plakken. */
export const targetingProjection = ['category', 'eventsAudience', 'businessAudience', ...Object.values(servicesField)].join(', ');

export type RawTargeting = { category?: string | null; eventsAudience?: string | null; businessAudience?: string | null } & {
  [field: string]: unknown;
};

/** `null` als soort of doelgroep ontbreekt. Velden van een andere soort/doelgroep tellen niet mee. */
export function toTargeting(raw: RawTargeting): Targeting | null {
  const category: Category | null = raw.category === 'business' ? 'business' : raw.category === 'events' ? 'events' : null;
  const audience = (category === 'business' ? raw.businessAudience : raw.eventsAudience) as Audience | null | undefined;
  if (!category || !audience || !(audience in servicesField)) return null;
  const services = raw[servicesField[audience]];
  return { category, audience, services: Array.isArray(services) ? (services as string[]) : [] };
}

/** Targeting → Sanity-velden (seed). */
export function targetingFields({ category, audience, services }: Targeting): Record<string, unknown> {
  const fields: Record<string, unknown> = { category, [category === 'business' ? 'businessAudience' : 'eventsAudience']: audience };
  if (services?.length) fields[servicesField[audience]] = services;
  return fields;
}
