/**
 * Configuración global del sitio.
 *
 * Todo lo que cambia entre entornos o al actualizar datos de contacto vive aquí:
 * ningún componente debe llevar un teléfono, un correo o una URL escritos a mano.
 */

/** Origen canónico en producción. Sin barra final. */
export const SITE_URL = 'https://standfields.com';

export const SITE = {
  name: 'Standfields',
  /** Se usa como sufijo de <title> en las páginas internas. */
  shortName: 'Standfields',
  tagline: 'Transformación digital para tu empresa',
  description:
    'Software de gestión para talleres mecánicos y desarrollo especializado en Shopify. ' +
    'Construimos el software que tu operación necesita y las tiendas que tu marca merece.',
  locale: 'es-PE',
  /** Atributo lang del documento. */
  lang: 'es',
  /** Zona geográfica que atiende la empresa. */
  areaServed: ['Perú', 'Latinoamérica'],
  foundingYear: '[año]', // TODO: reemplazar por el año real de fundación
} as const;

/**
 * El producto SaaS. Tiene marca propia («Naix») dentro de Standfields, así que
 * el nombre vive aquí y no escrito a mano en cada página: si mañana cambia, se
 * cambia en un solo sitio.
 *
 * `descriptor` acompaña al nombre en titulares y metadatos. La marca todavía no
 * tiene búsquedas propias, así que en los sitios que pesan para SEO —title,
 * H1, JSON-LD— el nombre viaja junto a la expresión que la gente sí busca.
 */
export const PRODUCT = {
  name: 'Naix',
  descriptor: 'software para talleres mecánicos',
  /** Para <title> y datos estructurados. */
  fullName: 'Naix, software para talleres mecánicos',
  tagline: 'Software integral para talleres mecánicos',
} as const;

export const CONTACT = {
  /** Formato E.164, sin espacios: se usa en tel: y en wa.me. */
  phoneE164: '+51967013414',
  /** Formato legible para mostrar en pantalla. */
  phoneDisplay: '+51 967 013 414',
  email: 'hola@standfields.com',
  /** TODO: reemplazar por la dirección real antes de publicar. */
  address: {
    street: '[Dirección]',
    city: 'Lima',
    country: 'Perú',
  },
  hours: [
    { days: 'Lun – Vie', time: '14:00 – 20:00' },
    { days: 'Sáb – Dom', time: '10:00 – 20:00' },
  ],
  /** Horario en formato schema.org para el JSON-LD. */
  openingHoursSpecification: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '20:00' },
    { days: ['Saturday', 'Sunday'], opens: '10:00', closes: '20:00' },
  ],
} as const;

/** Número de WhatsApp en el formato que espera wa.me (sin + ni espacios). */
const WHATSAPP_NUMBER = CONTACT.phoneE164.replace(/\D/g, '');

/**
 * Construye un enlace de WhatsApp con mensaje prellenado.
 * El texto se codifica siempre, así que es seguro pasar contenido dinámico.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Enlaces de WhatsApp reutilizados en varias páginas. */
export const WHATSAPP = {
  general: whatsappLink(),
  software: whatsappLink('Hola, quiero información de Naix, el software para talleres'),
  shopify: whatsappLink('Hola, quiero cotizar un proyecto Shopify'),
} as const;

export const TEL_LINK = `tel:${CONTACT.phoneE164}`;
export const MAILTO_LINK = `mailto:${CONTACT.email}`;
