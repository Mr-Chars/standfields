import type { IconName } from '@/components/ui/Icon.astro';
import { ROUTES } from '@/config/routes';

/**
 * Contenido de las cuatro páginas de servicios Shopify: el índice y las tres
 * fichas de servicio. Se mantienen juntas porque comparten datos (los precios y
 * plazos del índice son los mismos que encabezan cada ficha).
 */

export const hub = {
  eyebrow: 'Servicios — E-commerce',
  title: 'Construimos y extendemos tiendas Shopify',
  lead:
    'Tres servicios que se combinan según el momento de tu marca: lanzar la tienda, ' +
    'llevar el tema hasta donde el estándar no llega, o construir la app que tu ' +
    'operación necesita.',
  stats: [
    { value: 'Shopify', label: 'Nuestra única plataforma' },
    { value: '4–8', label: 'Semanas para lanzar' },
    { value: 'Liquid', label: 'Temas propios, no plantillas' },
    { value: '90+', label: 'Puntaje objetivo en PageSpeed' },
  ],
  problemsTitle: 'Las tiendas no se caen por diseño. Se caen por lo que no se ve.',
  problems: [
    {
      title: 'Catálogos que no escalan',
      text: 'Variantes mal modeladas, colecciones manuales, filtros que nadie usa.',
    },
    {
      title: 'Doce apps peleando entre ellas',
      text: 'Cada plugin agrega scripts; la tienda carga en seis segundos y el móvil abandona.',
    },
    {
      title: 'Procesos fuera del sistema',
      text: 'Pedidos que se copian a mano al ERP, stock que se actualiza dos veces al día.',
    },
  ],
  services: [
    {
      index: '01',
      title: 'Tiendas desde cero',
      meta: 'Desde S/ 4,500 · 4–8 semanas',
      text:
        'Arquitectura de catálogo, tema propio, pasarelas de pago locales, reglas de ' +
        'envío, políticas legales y capacitación para que tu equipo publique solo.',
      href: ROUTES.shopifyTiendas,
    },
    {
      index: '02',
      title: 'Customización avanzada',
      meta: 'Desde S/ 1,800 · 2–4 semanas',
      text:
        'Intervención de tu tema en Liquid, secciones editables desde el theme editor, ' +
        'extensiones de checkout, y trabajo de velocidad y SEO técnico.',
      href: ROUTES.shopifyCustomizacion,
    },
    {
      index: '03',
      title: 'Apps a medida',
      meta: 'Desde S/ 6,000 · 6–12 semanas',
      text:
        'Apps privadas o públicas sobre la API de Shopify: integración con tu ERP, ' +
        'precios por cliente, automatizaciones de stock y paneles internos.',
      href: ROUTES.shopifyApps,
    },
  ],
  featuredCase: {
    // TODO: sustituir «[nombre del cliente]» por el nombre real.
    title: 'Tienda de marca [nombre del cliente]',
    text:
      'Migración desde una plataforma antigua, catálogo de 400 SKU con variantes por ' +
      'talla y color, e integración con el ERP del cliente para stock en tiempo real.',
    placeholder: 'Captura de la tienda del cliente',
    stats: [
      { value: '+68%', label: 'Conversión móvil' },
      { value: '1.4s', label: 'Carga en móvil' },
      { value: '6', label: 'Semanas al aire' },
    ],
  },
  stack: {
    title: 'Herramientas del ecosistema, sin atajos',
    tags: [
      'Liquid',
      'Online Store 2.0',
      'Hydrogen',
      'Storefront API',
      'Admin GraphQL API',
      'Checkout Extensions',
      'Shopify Functions',
      'Metaobjects',
      'Shopify Flow',
      'Shopify Payments',
      'Culqi / Niubiz',
      'Klaviyo',
    ],
  },
};

/* ── Servicio 01: tiendas desde cero ────────────────────────────────────── */

export const tiendas = {
  eyebrow: 'Servicio 01',
  title: 'Tiendas Shopify desde cero',
  lead:
    'Tu marca vendiendo en línea con un tema propio, catálogo bien modelado y pagos ' +
    'locales configurados. Sin plantillas compradas ni parches de última hora.',
  heroPlaceholder: 'Captura de una tienda lanzada',
  heroActions: {
    primary: 'Pedir cotización por WhatsApp',
    secondary: { label: 'Ver tiendas hechas', href: ROUTES.casos },
  },
  priceFrom: '4500',
  meta: [
    { label: 'Inversión', value: 'Desde S/ 4,500' },
    { label: 'Plazo', value: '4 a 8 semanas' },
    { label: 'Ideal para', value: 'Marcas nuevas' },
    { label: 'Incluye', value: 'Capacitación' },
  ],
  scopeTitle: 'El alcance completo, escrito antes de empezar',
  scope: [
    {
      title: 'Arquitectura de catálogo',
      text: 'Productos, variantes, colecciones automáticas y metafields definidos para crecer.',
    },
    {
      title: 'Diseño y tema propio',
      text: 'Home, colección, producto, carrito y páginas de contenido diseñadas para tu marca.',
    },
    {
      title: 'Pagos y envíos',
      text: 'Shopify Payments o pasarela local, zonas de envío, tarifas y retiro en tienda.',
    },
    {
      title: 'Carga de productos',
      text: 'Hasta 150 SKU cargados por nosotros con imágenes optimizadas y textos SEO base.',
    },
    {
      title: 'Analítica y píxeles',
      text: 'GA4, Meta Pixel y eventos de compra validados antes del lanzamiento.',
    },
    {
      title: 'Correos transaccionales',
      text: 'Confirmación, envío y recuperación de carrito con la identidad de tu marca.',
    },
    {
      title: 'Páginas legales',
      text: 'Términos, privacidad, cambios y devoluciones, y libro de reclamaciones.',
    },
    {
      title: 'Capacitación y soporte',
      text: 'Dos sesiones grabadas para tu equipo y 30 días de soporte post-lanzamiento.',
    },
  ],
  processTitle: 'Cinco etapas, cada una con algo que revisar',
  process: [
    {
      step: 'Sem. 1',
      title: 'Descubrimiento',
      text: 'Catálogo, público, referencias y requisitos de operación.',
    },
    {
      step: 'Sem. 2',
      title: 'Diseño',
      text: 'Maquetas de las cinco plantillas clave para aprobar antes de codear.',
    },
    {
      step: 'Sem. 3–5',
      title: 'Construcción',
      text: 'Tema en Liquid, carga de catálogo y configuración de pagos y envíos.',
    },
    {
      step: 'Sem. 6',
      title: 'Pruebas',
      text: 'Compras reales de prueba, revisión móvil y ajustes de velocidad.',
    },
    {
      step: 'Sem. 7',
      title: 'Lanzamiento',
      text: 'Dominio, capacitación al equipo y 30 días de acompañamiento.',
    },
  ],
  fitTitle: 'Tiene sentido si…',
  fit: [
    'Vendes por WhatsApp o Instagram y quieres una tienda propia.',
    'Tienes una tienda física y quieres el canal online.',
    'Vienes de otra plataforma y necesitas migrar sin perder SEO.',
  ],
  notFitTitle: 'Mejor otro servicio si…',
  notFit: [
    {
      text: 'Ya tienes tienda y solo quieres mejorarla: ve a ',
      linkLabel: 'customización',
      href: ROUTES.shopifyCustomizacion,
      after: '.',
    },
    {
      text: 'Necesitas integrar tu ERP o lógica propia: ve a ',
      linkLabel: 'apps a medida',
      href: ROUTES.shopifyApps,
      after: '.',
    },
    { text: 'Solo necesitas una web informativa, sin carrito ni pagos.', linkLabel: '', href: '', after: '' },
  ],
  cta: {
    title: 'Lancemos tu tienda.',
    text:
      'Cuéntanos cuántos productos tienes y para cuándo la necesitas. Te enviamos ' +
      'alcance, plazo y precio cerrado en 48 horas.',
    secondary: { label: 'Ver los otros servicios', href: ROUTES.serviciosShopify },
  },
};

/* ── Servicio 02: customización avanzada ────────────────────────────────── */

export const customizacion = {
  eyebrow: 'Servicio 02',
  title: 'Customización avanzada de tu tema',
  lead:
    'Ya tienes tienda. Intervenimos el tema en Liquid para que haga exactamente lo que ' +
    'tu negocio necesita, y lo dejamos rápido y editable por tu equipo.',
  heroPlaceholder: 'Antes / después del tema',
  heroActions: {
    primary: 'Enviar el enlace de mi tienda',
    secondary: { label: 'Ver rangos de precio', href: ROUTES.precios },
  },
  priceFrom: '1800',
  meta: [
    { label: 'Inversión', value: 'Desde S/ 1,800' },
    { label: 'Plazo', value: '2 a 4 semanas' },
    { label: 'Modalidad', value: 'Proyecto o bolsa de horas' },
    { label: 'Entrega', value: 'En tema duplicado' },
  ],
  diagnosisTitle: 'Primero medimos, después tocamos código',
  diagnosisText:
    'Revisamos tu tienda en cuatro frentes y te entregamos un informe con lo que hay ' +
    'que arreglar, ordenado por impacto sobre la venta. El diagnóstico es gratuito y ' +
    'no obliga a contratar.',
  diagnosis: [
    { title: 'Velocidad', text: 'Scripts, imágenes, apps que sobran' },
    { title: 'Conversión', text: 'Ficha, carrito y checkout' },
    { title: 'SEO técnico', text: 'Estructura, datos y redirecciones' },
    { title: 'Autonomía', text: 'Qué puede editar tu equipo solo' },
  ],
  jobsTitle: 'Lo que más nos piden',
  jobs: [
    {
      title: 'Secciones editables',
      text: 'Bloques nuevos en el theme editor para que marketing arme landings sin pedirte nada.',
    },
    {
      title: 'Ficha de producto',
      text: 'Selector de variantes por imagen, tabla de tallas, bundles y venta cruzada.',
    },
    {
      title: 'Velocidad',
      text: 'Limpieza de scripts heredados, carga diferida e imágenes servidas al tamaño real.',
    },
    {
      title: 'Checkout extensions',
      text: 'Campos extra, mensajes por método de envío y validaciones en el checkout.',
    },
    {
      title: 'Filtros y búsqueda',
      text: 'Filtros por metafields, orden por disponibilidad y resultados predictivos.',
    },
    {
      title: 'Reemplazo de apps',
      text: 'Reescribimos en el tema lo que hoy pagas mensual y frena tu tienda.',
    },
  ],
  methodTitle: 'Sin tocar tu tienda en producción',
  method: [
    {
      title: 'Duplicamos el tema',
      text: 'Trabajamos sobre una copia con vista previa compartida. Tu tienda sigue vendiendo igual.',
    },
    {
      title: 'Entregas semanales',
      text: 'Cada viernes un enlace con lo avanzado y la lista de lo que sigue.',
    },
    {
      title: 'Publicación acordada',
      text: 'Se publica en el horario de menor tráfico, con plan de retorno si algo falla.',
    },
    {
      title: 'Documentación',
      text: 'Vídeo corto explicando cada sección nueva y cómo editarla sin ayuda.',
    },
  ],
  cta: {
    title: 'Empieza por el diagnóstico gratuito.',
    text:
      'Mándanos la URL de tu tienda por WhatsApp. En 48 horas recibes el informe con lo ' +
      'que arreglaríamos primero.',
    secondary: { label: 'Necesito una app a medida', href: ROUTES.shopifyApps },
  },
};

/* ── Servicio 03: apps a medida ─────────────────────────────────────────── */

export const apps = {
  eyebrow: 'Servicio 03',
  title: 'Apps a medida para Shopify',
  lead:
    'Cuando ningún plugin del App Store resuelve tu proceso, lo construimos. Apps ' +
    'privadas para tu operación, o públicas si quieres venderlas.',
  heroPlaceholder: 'Captura del panel de la app',
  heroActions: {
    primary: 'Contar mi caso por WhatsApp',
    secondary: { label: 'Ver desarrollos previos', href: ROUTES.casos },
  },
  priceFrom: '6000',
  meta: [
    { label: 'Inversión', value: 'Desde S/ 6,000' },
    { label: 'Plazo', value: '6 a 12 semanas' },
    { label: 'Tipo', value: 'Privada o pública' },
    { label: 'Código', value: 'Es tuyo' },
  ],
  problemsTitle: 'Problemas que no se resuelven con una app del store',
  problems: [
    {
      icon: 'sparkle' as IconName,
      title: 'Integración con tu ERP',
      text: 'Stock, precios y pedidos sincronizados en ambos sentidos, con registro de errores y reintentos.',
    },
    {
      icon: 'layers' as IconName,
      title: 'Precios por cliente',
      text: 'Listas mayoristas, descuentos por volumen y catálogos visibles solo para clientes aprobados.',
    },
    {
      icon: 'pulse' as IconName,
      title: 'Automatizaciones',
      text: 'Reglas propias: reponer stock, etiquetar pedidos, avisar a bodega o pausar productos sin inventario.',
    },
    {
      icon: 'panel' as IconName,
      title: 'Paneles internos',
      text: 'Vistas para tu equipo dentro del admin de Shopify: picking, despacho, control de calidad.',
    },
    {
      icon: 'bookmark' as IconName,
      title: 'Configuradores de producto',
      text: 'Productos armados por el cliente (medidas, materiales, grabados) con precio calculado al vuelo.',
    },
    {
      icon: 'chart-bar' as IconName,
      title: 'Reportes propios',
      text: 'Métricas que Shopify no da: margen por SKU, rotación por bodega, recompra por cohorte.',
    },
  ],
  processTitle: 'Especificación primero, código después',
  processText:
    'Un desarrollo mal especificado se paga dos veces. Antes de escribir código dejamos ' +
    'por escrito qué hace la app, qué no hace, y cómo se comporta cuando algo falla.',
  process: [
    {
      title: 'Levantamiento',
      text: 'Dos o tres sesiones con quien hoy hace el proceso a mano.',
    },
    {
      title: 'Especificación funcional',
      text: 'Documento con pantallas, reglas de negocio y casos borde. Se aprueba antes de continuar.',
    },
    {
      title: 'Sprints de dos semanas',
      text: 'Cada sprint deja algo funcionando en un ambiente de pruebas con datos reales.',
    },
    {
      title: 'Puesta en producción',
      text: 'Instalación en tu tienda, monitoreo de errores y alertas configuradas.',
    },
    {
      title: 'Entrega del código',
      text: 'Repositorio, documentación técnica y traspaso. El código es tuyo, no queda cautivo.',
    },
  ],
  stackTitle: 'Tecnología estándar del ecosistema',
  stack: [
    'Remix',
    'Node.js',
    'TypeScript',
    'Admin GraphQL API',
    'Webhooks',
    'Shopify Functions',
    'Polaris',
    'App Bridge',
    'PostgreSQL',
    'Redis',
    'Docker',
    'GitHub Actions',
  ],
  cta: {
    title: 'Descríbenos el proceso que hoy haces a mano.',
    text:
      'Si se puede resolver con una app existente, te lo decimos. Si no, te enviamos una ' +
      'estimación de alcance y plazo.',
    secondary: { label: 'Enviar formulario detallado', href: ROUTES.contacto },
  },
};
