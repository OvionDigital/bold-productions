/**
 * Indeling (data/taxonomy.ts) ↔ Sanity-velden. In Studio staat elke keuze in een eigen
 * veld dat alleen verschijnt als het van toepassing is (doelgroep per soort, diensten
 * per doelgroep); zie studio/schemaTypes/taxonomy.ts.
 */
import { audiences, type Audience, type Category, type MultiTargeting, type Targeting } from '../../data/taxonomy';

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

/** Klantlogo's: Events en/of Business met per soort meerdere doelgroepen. */
export const multiTargetingProjection = 'categories, eventsAudiences, businessAudiences';

export type RawMultiTargeting = { categories?: string[] | null; eventsAudiences?: string[] | null; businessAudiences?: string[] | null };

/** Alleen geldige waarden; een doelgroep telt alleen als haar soort is aangevinkt. */
export function toMultiTargeting(raw: RawMultiTargeting): MultiTargeting {
  const categories = (raw.categories ?? []).filter((c): c is Category => c === 'events' || c === 'business');
  const of = (category: Category, values: string[] | null | undefined) =>
    categories.includes(category) ? (values ?? []).filter((v): v is Audience => audiences[category].some((a) => a.value === v)) : [];
  return { categories, audiences: [...of('events', raw.eventsAudiences), ...of('business', raw.businessAudiences)] };
}

/** MultiTargeting → Sanity-velden (seed). */
export function multiTargetingFields({ categories, audiences: chosen }: MultiTargeting): Record<string, unknown> {
  const pick = (category: Category) => chosen.filter((a) => audiences[category].some((x) => x.value === a));
  return {
    categories,
    ...(categories.includes('events') ? { eventsAudiences: pick('events') } : {}),
    ...(categories.includes('business') ? { businessAudiences: pick('business') } : {}),
  };
}

/**
 * Cases: Events en/of Business, per soort één of meer doelgroepen, per doelgroep de diensten
 * (Studio: caseTargetingFields). De eerste aangevinkte soort is de hoofdsoort (het adres).
 * Nog niet gemigreerd (oude velden category/…Audience): die ene indeling.
 */
export function toCaseTargets(raw: RawMultiTargeting & RawTargeting): Targeting[] {
  const { categories, audiences: chosen } = toMultiTargeting(raw);
  if (!chosen.length) {
    const single = toTargeting(raw);
    return single ? [single] : [];
  }
  return categories.flatMap((category) =>
    chosen
      .filter((audience) => audiences[category].some((a) => a.value === audience))
      .map((audience) => {
        const services = raw[servicesField[audience]];
        return { category, audience, services: Array.isArray(services) ? (services as string[]) : [] };
      }),
  );
}

/** Indelingen van een case → Sanity-velden (seed, migratie). */
export function caseTargetingFields(targets: Targeting[]): Record<string, unknown> {
  const fields = multiTargetingFields({
    categories: [...new Set(targets.map((t) => t.category))],
    audiences: targets.map((t) => t.audience),
  });
  for (const t of targets) if (t.services?.length) fields[servicesField[t.audience]] = t.services;
  return fields;
}
