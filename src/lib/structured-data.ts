import { CONTACT, PRODUCT, SITE, SITE_URL } from '@/config/site';
import { ROUTES } from '@/config/routes';

/**
 * Serializa un bloque JSON-LD para incrustarlo en un <script>.
 *
 * `JSON.stringify` no escapa `<`, así que un dato que contuviera la secuencia
 * `</script>` cerraría la etiqueta antes de tiempo y el resto se interpretaría
 * como HTML. Escapar `<`, `>` y `&` a su forma `\uXXXX` deja el JSON válido y
    .replace(/\u2028/g, '\\u2028')
 * el parseo de JavaScript en motores antiguos y se escapan por lo mismo.
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

const absolute = (path: string) => new URL(path, SITE_URL).href;

/** Identidad de la organización. Se emite una sola vez, desde el layout. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE.name,
  url: SITE_URL,
  logo: absolute('/icon-512.png'),
  image: absolute('/og-default.png'),
  description: SITE.description,
  slogan: SITE.tagline,
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressCountry: 'PE',
  },
  areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
  openingHoursSpecification: CONTACT.openingHoursSpecification.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  })),
  knowsAbout: [
    'Naix, software de gestión para talleres mecánicos',
    'Desarrollo Shopify',
    'Aplicaciones a medida',
  ],
} as const;

/** Sitio web, con la acción de búsqueda omitida porque no hay buscador interno. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  inLanguage: SITE.locale,
  publisher: { '@id': `${SITE_URL}/#organization` },
} as const;

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

/** Construye el BreadcrumbList a partir de la misma miga que se pinta en pantalla. */
export function breadcrumbSchema(items: BreadcrumbEntry[], currentPath: string) {
  const trail = [{ label: 'Inicio', href: ROUTES.home }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absolute(crumb.href ?? currentPath),
    })),
  };
}

/** Página de preguntas frecuentes, para los fragmentos enriquecidos de Google. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Ficha de Naix, el producto SaaS, con sus planes. */
export function softwareSchema(plans: { name: string; price: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: PRODUCT.name,
    alternateName: PRODUCT.fullName,
    description: PRODUCT.tagline,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: absolute(ROUTES.softwareTaller),
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.price,
      priceCurrency: 'PEN',
      description: plan.description,
      availability: 'https://schema.org/InStock',
    })),
  };
}

/** Servicio profesional (páginas de Shopify). */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  priceFrom?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: SITE.areaServed,
    ...(input.priceFrom && {
      offers: {
        '@type': 'Offer',
        price: input.priceFrom,
        priceCurrency: 'PEN',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: input.priceFrom,
          priceCurrency: 'PEN',
        },
      },
    }),
  };
}
