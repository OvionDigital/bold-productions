/**
 * Preview-build (astro.preview.config.mjs): de site in de Presentation Tool van Sanity.
 * Concepten in plaats van gepubliceerde inhoud, elke pagina per verzoek gerenderd (geen
 * build-cache), geen animaties en klikbare bewerk-overlays. In de gewone build altijd false,
 * zodat alles wat hiervan afhangt uit de productiebundel valt.
 */
export const isPreview = import.meta.env.PUBLIC_SANITY_PREVIEW === 'true';
