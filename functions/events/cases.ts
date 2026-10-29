/**
 * Pages Function op /events/cases: ?filter=events (de doelgroep van vóór de herstructurering,
 * oude links en /cases?filter=events via _redirects) 301 naar ?filter=organisatoren.
 * _redirects kan niet op een query string matchen, vandaar deze functie. Al het andere gaat
 * ongewijzigd naar de statische pagina (next()).
 */

interface Context {
  request: Request;
  next: () => Promise<Response>;
}

const RENAMED_FILTERS: Record<string, string> = { events: 'organisatoren' };

export const onRequestGet = async ({ request, next }: Context): Promise<Response> => {
  const url = new URL(request.url);
  const renamed = RENAMED_FILTERS[url.searchParams.get('filter') ?? ''];
  if (!renamed) return next();
  url.searchParams.set('filter', renamed);
  return Response.redirect(url.toString(), 301);
};
