import type { IconName } from '@/components/ui/Icon.astro';
import { ROUTES } from '@/config/routes';

/**
 * Contenido de la portada.
 *
 * Separado del maquetado a propósito: quien edite un dato o un titular no
 * necesita tocar una línea de HTML ni de CSS.
 */

export const heroStats = [
  { value: '+40', label: 'Proyectos entregados' },
  { value: '8', label: 'Años construyendo software' },
  { value: '72h', label: 'Puesta en marcha de Naix' },
  { value: 'Perú', label: 'Y toda Latinoamérica' },
];

export const intro = {
  eyebrow: '01 — Qué hacemos',
  title:
    'Construimos el software que tu operación necesita y las tiendas que tu marca merece.',
  text:
    'Standfields trabaja en dos frentes: Naix, nuestro software integral para talleres ' +
    'mecánicos, y desarrollo especializado sobre Shopify para marcas que venden en línea. ' +
    'Un mismo equipo, dos productos con foco.',
  link: { label: 'Conoce al equipo', href: ROUTES.nosotros },
};

export const saasCard = {
  eyebrow: 'Naix — producto propio',
  title: 'Naix, software integral para talleres mecánicos',
  text:
    'Naix reúne toda la operación del taller en un solo lugar: recepción del vehículo, orden de ' +
    'servicio, avance del trabajo, historial del cliente y facturación.',
  features: [
    'Órdenes de servicio con estados y tiempos',
    'Control de clientes y su historial completo',
    'Base de datos de vehículos por marca y modelo',
    'Varias sedes en una cuenta, con los datos de cada taller por separado',
  ],
  actions: {
    primary: { label: 'Empezar prueba gratis', href: ROUTES.softwareTaller },
    secondary: { label: 'Ver el producto', href: ROUTES.softwareTaller },
  },
};

export const shopifyCard = {
  eyebrow: 'Servicios — E-commerce',
  title: 'Desarrollo Shopify de punta a punta',
  text:
    'Diseñamos, construimos y extendemos tiendas Shopify. Desde el lanzamiento de una ' +
    'marca nueva hasta apps privadas que resuelven procesos que ningún plugin cubre.',
  links: [
    { label: 'Tiendas desde cero', href: ROUTES.shopifyTiendas },
    { label: 'Customización avanzada', href: ROUTES.shopifyCustomizacion },
    { label: 'Apps a medida', href: ROUTES.shopifyApps },
  ],
};

export const productDetail = {
  eyebrow: '02 — El producto por dentro',
  title: 'El taller deja de vivir en cuadernos y hojas de cálculo',
  text:
    'Cada vehículo que entra queda registrado, cada orden tiene un responsable y un ' +
    'estado, y en el mostrador se sabe en qué va cada reparación. La información deja de ' +
    'depender de quién esté ese día detrás del mostrador.',
  modules: [
    {
      title: 'Órdenes de servicio',
      text: 'Motivo de ingreso, servicios cotizados, mano de obra y estado, en un solo documento.',
    },
    {
      title: 'Control de clientes',
      text: 'Ficha única por cliente con sus vehículos, visitas anteriores y trabajos realizados.',
    },
    {
      title: 'Base de datos de vehículos',
      text: 'Marcas y modelos precargados; placa, año y motorización quedan en la ficha del auto.',
    },
  ],
  panelCaption: 'Naix · vista de órdenes',
  panelPlaceholder: 'Captura del panel de Naix',
  panelAlt:
    'Listado de órdenes de servicio de Naix: buscador por cliente o placa, filtros por ' +
    'estado, carga de trabajo por técnico y las órdenes con su vehículo, su mecánico y ' +
    'su importe.',
  link: { label: 'Ver todos los módulos', href: ROUTES.softwareTaller },
};

export const shopifyServices: {
  icon: IconName;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: 'storefront',
    title: 'Tiendas desde cero',
    text:
      'Arquitectura de catálogo, diseño de tema, pasarelas de pago, envíos y puesta en ' +
      'producción. Tu marca vendiendo en semanas, no en meses.',
    href: ROUTES.shopifyTiendas,
  },
  {
    icon: 'code',
    title: 'Customización avanzada',
    text:
      'Intervención de temas en Liquid, secciones editables por tu equipo, checkout ' +
      'extensions y optimización de velocidad y SEO técnico.',
    href: ROUTES.shopifyCustomizacion,
  },
  {
    icon: 'grid-plus',
    title: 'Apps a medida',
    text:
      'Apps privadas y públicas sobre la API de Shopify: integración con tu ERP, lógica ' +
      'de precios propia, automatizaciones y paneles internos.',
    href: ROUTES.shopifyApps,
  },
];

export const recentWork = [
  {
    tag: 'Software a medida',
    title: 'Scrum Process Manager',
    text: 'Herramienta de gestión del ciclo de vida Scrum: backlog, sprints y métricas de entrega en un tablero.',
  },
  {
    tag: 'Software a medida',
    title: 'Sistema clínico',
    text: 'Citas, historias clínicas y gestión de pacientes y doctores para un policlínico en operación.',
  },
  {
    tag: 'Shopify',
    // TODO: sustituir «[nombre]» por el nombre real del cliente.
    title: 'Tienda de marca [nombre]',
    text: 'Lanzamiento completo con tema propio, catálogo de 400 SKU e integración con el ERP del cliente.',
  },
];

export const process = [
  {
    step: 'Paso 01',
    title: 'Diagnóstico',
    text: 'Una llamada de 30 minutos para entender tu operación, tus cuellos de botella y tu presupuesto.',
  },
  {
    step: 'Paso 02',
    title: 'Propuesta y alcance',
    text: 'Alcance escrito, plazo y precio cerrado. Sin sorpresas a mitad del proyecto.',
  },
  {
    step: 'Paso 03',
    title: 'Construcción por sprints',
    text: 'Entregas cada dos semanas en un enlace de prueba que puedes revisar y comentar.',
  },
  {
    step: 'Paso 04',
    title: 'Lanzamiento y soporte',
    text: 'Capacitación a tu equipo, migración de datos y acompañamiento los primeros meses.',
  },
];

export const testimonial = {
  quote: '«Pasamos de anotar las órdenes en un cuaderno a saber exactamente en qué va cada vehículo.»',
  // TODO: sustituir por el nombre real del cliente y de su taller.
  author: 'Factoria Garcia',
  role: 'Dueño · Mecánico, Lima',
  link: { label: 'Leer el caso completo', href: ROUTES.casos },
};
