import type { FaqItem } from '@/components/ui/Faq.astro';
import { ROUTES } from '@/config/routes';

/** Planes, tarifas y tabla comparativa. */

export const intro = {
  eyebrow: 'Planes y tarifas',
  title: 'Precios claros, sin letra chica',
  lead:
    'Son dos negocios distintos con formas de cobrar distintas: Naix se paga por mes y se ' +
    'cancela cuando quieras; los servicios de Shopify se cotizan por ' +
    'proyecto con precio cerrado.',
};

export const views = [
  {
    id: 'saas',
    kicker: 'Naix · suscripción mensual',
    title: 'Naix, software para talleres mecánicos',
    text:
      'Cuatro planes por suscripción, desde una versión gratuita hasta la cadena con ' +
      'varias sedes. Órdenes de servicio, clientes, vehículos y facturación.',
    cta: 'Ver los cuatro planes',
  },
  {
    id: 'shopify',
    kicker: 'Servicios · Por proyecto',
    title: 'Desarrollo Shopify',
    text:
      'Tiendas desde cero, customización de temas y apps a medida. Rangos referenciales y ' +
      'precio cerrado tras el diagnóstico.',
    cta: 'Ver tarifas por proyecto',
  },
] as const;

/** Filas de límites que se repiten dentro de cada tarjeta de plan. */
export interface PlanLimit {
  label: string;
  value: string;
}

export interface Plan {
  id: string;
  tier: string;
  /** Precio mensual y anual; el conmutador alterna entre ambos. */
  monthly: { price: string; unit: string; note: string };
  yearly: { price: string; unit: string; note: string };
  text: string;
  limits: PlanLimit[];
  extras?: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  {
    id: 'gratis',
    tier: 'Gratis',
    monthly: { price: 'Gratis', unit: '', note: 'Sin costo, sin tarjeta' },
    yearly: { price: 'Gratis', unit: '', note: 'Sin costo, sin tarjeta' },
    text: 'Para el taller de una o dos personas que está empezando.',
    limits: [
      { label: 'Órdenes de servicio al mes', value: '30' },
      { label: 'Usuarios con acceso', value: '2' },
      { label: 'Clientes', value: '150' },
      { label: 'Vehículos', value: '200' },
      { label: 'Roles', value: '2' },
      { label: 'Almacenamiento de imágenes', value: '200 MB' },
    ],
    cta: { label: 'Empezar gratis', href: ROUTES.softwareTaller },
  },
  {
    id: 'taller',
    tier: 'Taller',
    monthly: { price: 'S/ 89.00', unit: '/ mes', note: 'S/ 890.00 si pagas al año' },
    yearly: { price: 'S/ 890.00', unit: '/ año', note: 'Equivale a S/ 74.17 por mes' },
    text: 'Para el taller establecido, con tres a cinco mecánicos.',
    limits: [
      { label: 'Órdenes de servicio al mes', value: '200' },
      { label: 'Usuarios con acceso', value: '5' },
      { label: 'Clientes', value: 'Sin límite' },
      { label: 'Vehículos', value: 'Sin límite' },
      { label: 'Roles', value: '4' },
      { label: 'Almacenamiento de imágenes', value: '2 GB' },
    ],
    extras: ['Comprobantes en PDF', 'Consulta de RUC y DNI'],
    cta: { label: 'Quiero este', href: ROUTES.contacto },
    featured: true,
    badge: 'Recomendado',
  },
  {
    id: 'pro',
    tier: 'Pro',
    monthly: { price: 'S/ 179.00', unit: '/ mes', note: 'S/ 1790.00 si pagas al año' },
    yearly: { price: 'S/ 1790.00', unit: '/ año', note: 'Equivale a S/ 149.17 por mes' },
    text: 'Para el taller que quiere saber si gana dinero y en qué.',
    limits: [
      { label: 'Órdenes de servicio al mes', value: 'Sin límite' },
      { label: 'Usuarios con acceso', value: '12' },
      { label: 'Clientes', value: 'Sin límite' },
      { label: 'Vehículos', value: 'Sin límite' },
      { label: 'Roles', value: '8' },
      { label: 'Almacenamiento de imágenes', value: '10 GB' },
    ],
    extras: ['Tablero de dirección', 'Finanzas, márgenes y cuentas por cobrar'],
    // La prueba gratuita es de este plan, no del recomendado: `PLANS_TRIAL_PLAN=PRO`.
    cta: { label: 'Probar Pro 14 días gratis', href: ROUTES.contacto },
  },
  {
    /*
     * Sin precio de lista: en el backend es `plans.is_public = false`, así que ni
     * siquiera sale en el catálogo que consume la app. Se cotiza hablando, y por
     * eso el conmutador mensual/anual muestra lo mismo en las dos posiciones.
     */
    id: 'multitaller',
    tier: 'Multitaller',
    monthly: { price: 'A medida', unit: '', note: 'Se cotiza según el número de sedes' },
    yearly: { price: 'A medida', unit: '', note: 'Se cotiza según el número de sedes' },
    text: 'Para cadenas y talleres con varias sedes.',
    limits: [
      { label: 'Órdenes de servicio al mes', value: 'Sin límite' },
      { label: 'Usuarios con acceso', value: 'Sin límite' },
      { label: 'Clientes', value: 'Sin límite' },
      { label: 'Vehículos', value: 'Sin límite' },
      { label: 'Roles', value: 'Sin límite' },
      { label: 'Almacenamiento de imágenes', value: 'Sin límite' },
    ],
    extras: [
      'Todo lo del plan Pro',
      'Metas y sugerencias automáticas',
      'Cuota de talleres ampliada para la cadena',
    ],
    cta: { label: 'Hablemos', href: ROUTES.contacto },
  },
];

export const planNote =
  'Todos los planes incluyen migración de datos y capacitación inicial sin costo. ' +
  'Sin contrato de permanencia. La prueba de 14 días es del plan Pro: al terminar, la ' +
  'cuenta pasa al plan Gratis y no se cobra nada si no eliges otro.';

/*
 * «IGV incluido» y no «+ IGV»: los importes de `plans.price_monthly` en el
 * backend se guardan con el impuesto dentro y la factura lo desglosa hacia atrás
 * (`subtotal = total / 1.18`). Anunciarlos sin IGV prometía S/ 89 y facturaba
 * S/ 105 — un 18 % de diferencia entre la página y el cargo real.
 */
export const billingNote = 'Con el plan anual pagas 10 meses. Precios en soles, IGV incluido.';

/**
 * Tabla comparativa, agrupada por bloques y con una columna por plan.
 *
 * Los valores salen de `PlanCatalogSeeder` en el backend, donde `null` significa
 * ilimitado. «Metas y sugerencias automáticas» vuelve a la tabla ahora que
 * Multitaller le da una columna donde decir que sí: es la única clave del
 * catálogo (`module-insights`) que ningún otro plan enciende.
 *
 * «Talleres propios en la misma cuenta» no sale del catálogo de planes sino de
 * `users.max_enterprises`, que es por cuenta y no por plan; de ahí que los tres
 * planes con precio muestren la misma cifra.
 */
export const comparison: {
  group: string;
  rows: { label: string; values: [string, string, string, string] }[];
}[] = [
  {
    group: 'Funcionalidades',
    rows: [
      { label: 'Tablero de dirección', values: ['—', '—', 'Sí', 'Sí'] },
      { label: 'Finanzas, márgenes y cuentas por cobrar', values: ['—', '—', 'Sí', 'Sí'] },
      { label: 'Metas y sugerencias automáticas', values: ['—', '—', '—', 'Sí'] },
      { label: 'Comprobantes en PDF', values: ['—', 'Sí', 'Sí', 'Sí'] },
      { label: 'Consulta de RUC y DNI', values: ['—', 'Sí', 'Sí', 'Sí'] },
    ],
  },
  {
    group: 'Límites',
    rows: [
      { label: 'Órdenes de servicio al mes', values: ['30', '200', 'Sin límite', 'Sin límite'] },
      { label: 'Usuarios con acceso', values: ['2', '5', '12', 'Sin límite'] },
      { label: 'Clientes', values: ['150', 'Sin límite', 'Sin límite', 'Sin límite'] },
      { label: 'Vehículos', values: ['200', 'Sin límite', 'Sin límite', 'Sin límite'] },
      { label: 'Roles', values: ['2', '4', '8', 'Sin límite'] },
      { label: 'Almacenamiento de imágenes', values: ['200 MB', '2 GB', '10 GB', 'Sin límite'] },
      { label: 'Talleres propios en la misma cuenta', values: ['3', '3', '3', 'A medida'] },
    ],
  },
];

export const shopifyPricing = {
  title: 'Se cotizan por proyecto, con precio cerrado',
  text:
    'Los rangos de abajo son referenciales y dependen del tamaño del catálogo y del ' +
    'alcance. Después del diagnóstico recibes un precio fijo por escrito.',
  items: [
    {
      title: 'Tiendas desde cero',
      range: 'S/ 4,500 – 12,000',
      text: 'Tema propio, hasta 150 SKU cargados, pagos y envíos configurados, capacitación.',
      href: ROUTES.shopifyTiendas,
    },
    {
      title: 'Customización',
      range: 'S/ 1,800 – 6,000',
      text: 'Por proyecto, o bolsa de 20 horas al mes para mejoras continuas.',
      href: ROUTES.shopifyCustomizacion,
    },
    {
      title: 'Apps a medida',
      range: 'Desde S/ 6,000',
      text: 'Depende del alcance funcional. Se estima después de la especificación.',
      href: ROUTES.shopifyApps,
    },
  ],
};

export const faq: FaqItem[] = [
  {
    // Por transferencia y Yape, no con tarjeta: `PLANS_GATEWAY=manual` en el
    // backend, y la suscripción la activa una persona al confirmar el pago. Se
    // pondrá «tarjeta» cuando la pasarela esté conectada.
    question: '¿Cómo se paga Naix?',
    answer:
      'Por transferencia o Yape. Confirmado el pago, activamos el plan el mismo día y ' +
      'emitimos factura o boleta a tu nombre.',
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer:
      'Sí, en cualquier momento. Lo pides desde la pantalla de planes de tu cuenta y ' +
      'ajustamos el cobro del siguiente periodo.',
  },
  {
    question: '¿Cómo se pagan los proyectos de Shopify?',
    answer: 'En tres partes: 40% al firmar, 30% en la aprobación del diseño y 30% al lanzar.',
  },
  {
    question: '¿El costo de Shopify está incluido?',
    answer:
      'No. La suscripción a Shopify, el dominio y las apps de terceros se pagan ' +
      'directamente a cada proveedor. Te ayudamos a elegir el plan más conveniente.',
  },
];
