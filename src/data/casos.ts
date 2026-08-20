import { ROUTES } from '@/config/routes';

/** Portafolio: cada caso declara su categoría, que alimenta los filtros. */

export type CaseCategory = 'software' | 'shopify';

export interface CaseStudy {
  id: string;
  category: CaseCategory;
  /** Etiqueta visible sobre el título. */
  kicker: string;
  title: string;
  text: string;
  placeholder: string;
  /** Etiquetas cortas de tecnología o sector. */
  tags?: string[];
  /** Cifras destacadas, si el caso las tiene. */
  stats?: { value: string; label: string }[];
  /** Enlace de detalle, sólo en el caso del producto propio. */
  link?: { label: string; href: string };
  /** El caso del producto propio se destaca con fondo azul. */
  featured?: boolean;
}

export const FILTERS: { value: 'todos' | CaseCategory; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'software', label: 'Software a medida' },
  { value: 'shopify', label: 'Shopify' },
];

export const CASES: CaseStudy[] = [
  {
    id: 'scrum-process-manager',
    category: 'software',
    kicker: 'Software a medida · 2024',
    title: 'Scrum Process Manager',
    text:
      'Herramienta para gestionar el ciclo de vida del marco Scrum: product backlog, ' +
      'sprint backlog, daily y métricas de ritmo de entrega en un solo tablero.',
    placeholder: 'Captura de Scrum Process Manager',
    tags: ['Web app', 'Dashboards'],
  },
  {
    id: 'sistema-clinico',
    category: 'software',
    kicker: 'Software a medida · 2023',
    title: 'Sistema clínico',
    text:
      'Agenda de citas, historias clínicas y gestión de pacientes y doctores para un ' +
      'policlínico. Reemplazó el registro en papel de tres consultorios.',
    placeholder: 'Captura del sistema clínico',
    tags: ['Salud', 'Multi-usuario'],
  },
  {
    id: 'software-talleres',
    category: 'software',
    kicker: 'Producto propio · 2025',
    title: 'Naix, software para talleres mecánicos',
    // TODO: sustituir «[n]» por el número real de talleres.
    text:
      'Nuestro producto propio, en operación en [n] talleres de Lima. Órdenes de servicio, ' +
      'control de clientes y base de datos de vehículos.',
    placeholder: 'Captura de Naix',
    link: { label: 'Ver el producto', href: ROUTES.softwareTaller },
    featured: true,
  },
  {
    id: 'tienda-marca',
    category: 'shopify',
    kicker: 'Shopify · tienda desde cero',
    // TODO: sustituir «[nombre]» por el nombre real del cliente.
    title: 'Tienda de marca [nombre]',
    text:
      'Migración desde plataforma antigua, 400 SKU con variantes por talla y color, ' +
      'tema propio e integración de stock con el ERP.',
    placeholder: 'Captura de la tienda',
    stats: [
      { value: '+68%', label: 'Conversión móvil' },
      { value: '6 sem.', label: 'Al aire' },
    ],
  },
  {
    id: 'optimizacion-marca-deportiva',
    category: 'shopify',
    kicker: 'Shopify · customización',
    // TODO: sustituir «[marca deportiva]» por el nombre real del cliente.
    title: 'Optimización de [marca deportiva]',
    text:
      'Reemplazamos cinco apps por código propio en el tema, rehicimos la ficha de ' +
      'producto y bajamos el tiempo de carga en móvil de 5.8s a 1.6s.',
    placeholder: 'Captura de la tienda optimizada',
    tags: ['Liquid', 'Performance'],
  },
  {
    id: 'app-integracion-erp',
    category: 'shopify',
    kicker: 'Shopify · app a medida',
    title: 'App de integración con ERP',
    text:
      'App privada que sincroniza stock, precios y pedidos entre Shopify y el ERP de una ' +
      'distribuidora, con listas de precio por cliente mayorista.',
    placeholder: 'Captura del panel de la app',
    tags: ['Remix', 'GraphQL API', 'B2B'],
  },
];
