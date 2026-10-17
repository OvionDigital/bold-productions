import type { DocumentActionComponent, DocumentActionsResolver } from 'sanity';
import { casePath, pagePath, SITE_URL } from './presentation';

type Doc = { slug?: { current?: string }; category?: string } | null;

/** URL-pad van de gepubliceerde versie; null = (nog) niet op de site */
function publishedPath(type: string, doc: Doc): string | null {
  if (!doc) return null;
  if (!doc.slug?.current) return null;
  return type === 'caseStudy' ? casePath(doc.category, doc.slug.current) : pagePath(doc.slug.current);
}

/** "Bekijk op de site": opent de gepubliceerde pagina in een nieuw tabblad (menu naast Publiceren) */
const ViewOnSite: DocumentActionComponent = (props) => {
  const path = publishedPath(props.type, props.published as Doc);
  return {
    label: 'Bekijk op de site',
    title: path
      ? `${SITE_URL}${path} — na publiceren duurt het ± 2 minuten voordat de site is bijgewerkt.`
      : 'Deze pagina is nog niet gepubliceerd.',
    disabled: !path,
    onHandle: () => {
      window.open(`${SITE_URL}${path}`, '_blank', 'noopener');
      props.onComplete();
    },
  };
};

const TYPES_WITH_URL = ['page', 'caseStudy'];

export const documentActions: DocumentActionsResolver = (prev, { schemaType }) =>
  TYPES_WITH_URL.includes(schemaType) ? [...prev, ViewOnSite] : prev;
