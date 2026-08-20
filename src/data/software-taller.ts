import type { IconName } from '@/components/ui/Icon.astro';
import type { FaqItem } from '@/components/ui/Faq.astro';
import { ROUTES } from '@/config/routes';

/** Contenido de la página de Naix, el producto SaaS para talleres mecánicos. */

export const hero = {
  eyebrow: 'Naix — producto propio',
  title: 'Naix, el software integral para talleres mecánicos',
  lead:
    'Órdenes de servicio, control de clientes y base de datos de vehículos en una sola ' +
    'plataforma. Se usa desde el mostrador, el taller y el celular.',
  footnote: 'Sin tarjeta de crédito. Migramos tus datos actuales sin costo.',
  panelCaption: 'Vista del tablero',
  panelAlt:
    'Tablero de Naix: cobranza vencida, meta de cobro del mes, vehículos en el taller y ' +
    'la lista de asuntos que conviene atender primero.',
};

export const problems = [
  { key: 'A', text: 'Las órdenes viven en un cuaderno y nadie sabe cuántas están abiertas hoy.' },
  { key: 'B', text: 'El cliente llama para preguntar por su auto y hay que ir a buscar al mecánico.' },
  { key: 'C', text: 'No hay historial: cuando el vehículo vuelve, se empieza el diagnóstico de cero.' },
  { key: 'D', text: 'Al cierre de mes no se sabe qué se facturó, qué está pendiente ni qué se perdió.' },
];

/**
 * Los seis módulos del producto.
 *
 * `plan` marca los que el catálogo de planes deja fuera del gratuito: sin esa
 * etiqueta, la rejilla prometía como incluido lo que la tabla de precios cobra
 * aparte. Las claves que lo deciden son `module-dashboard`, `module-finance` y
 * `module-receipts` en el backend.
 */
export const modules: { icon: IconName; title: string; text: string; plan?: string }[] = [
  {
    icon: 'document',
    title: 'Órdenes de servicio',
    text:
      'Alta de la orden con motivo de ingreso, kilometraje y servicios cotizados, y ' +
      'estados: recibido, en proceso, en revisión, listo y entregado.',
  },
  {
    icon: 'user-plus',
    title: 'Control de clientes',
    text:
      'Ficha única con datos de contacto, vehículos asociados, visitas anteriores, ' +
      'trabajos realizados y saldo pendiente.',
  },
  {
    icon: 'car',
    title: 'Base de datos de vehículos',
    text:
      'Catálogo de marcas y modelos precargado. Placa, año, motorización, kilometraje ' +
      'y notas técnicas por unidad.',
  },
  {
    icon: 'briefcase',
    title: 'Equipo y permisos',
    text:
      'Cada servicio y cada subtarea con su mecánico asignado, y roles que deciden qué ' +
      'pantalla ve cada persona del taller.',
  },
  {
    icon: 'chart-line',
    title: 'Reportes y métricas',
    text:
      'Ingresos por periodo, ticket promedio, tiempos de reparación, margen por tipo de ' +
      'servicio y cuentas por cobrar.',
    plan: 'Plan Pro',
  },
  {
    icon: 'card',
    title: 'Cotizaciones y comprobantes',
    text:
      'Cotización dentro de la orden, con IGV incluido, sin IGV o + IGV, y comprobante ' +
      'en PDF con los datos del taller, su serie y su correlativo.',
    plan: 'Planes Taller y Pro',
  },
];

/** Aclaración al pie de la rejilla de módulos. */
export const modulesNote =
  'Los módulos con etiqueta de plan están disponibles en ese plan en adelante. ' +
  'El resto viene en los tres, incluido el gratuito.';

/**
 * Los tres momentos del taller, cada uno con su captura del producto.
 *
 * `alt` describe lo que se ve en la imagen; `placeholder` queda como respaldo
 * por si una fila se queda sin captura, que es lo que había antes de tenerlas.
 */
export const features = [
  {
    eyebrow: 'Recepción',
    title: 'Un vehículo entra y en cuatro pasos está registrado',
    text:
      'Cliente, vehículo, detalles de ingreso y servicios. Si el cliente ya existe, sus ' +
      'vehículos aparecen con su historial; si es nuevo, se registra sin salir de la ' +
      'pantalla. Se anota el kilometraje, lo que reporta el cliente y cómo llega el auto.',
    bullets: [
      'Kilometraje, nivel de combustible y observaciones de entrada',
      'Motivo de ingreso y fecha de entrega comprometida',
      'Técnico asignado desde el primer momento',
    ],
    placeholder: 'Pantalla de recepción / alta de orden',
    alt:
      'Alta de una orden en Naix: cliente y vehículo verificados, kilometraje de ' +
      'ingreso, técnico asignado y el motivo de ingreso que reportó el cliente.',
    /** Invierte el orden de las columnas, como en el diseño. */
    reversed: false,
  },
  {
    eyebrow: 'Taller',
    title: 'El tablero dice qué se trabaja ahora y quién lo tiene',
    text:
      'Cada servicio de la orden se parte en subtareas, y cada subtarea avanza por ' +
      'columnas: por hacer, en proceso, en revisión y finalizado. El avance de la orden ' +
      'se ve sin preguntarle a nadie.',
    bullets: [
      'Mecánico asignado por servicio y por subtarea',
      'Carga de trabajo por técnico y órdenes abiertas ahora mismo',
      'Funciona en tablet y celular dentro del taller',
    ],
    placeholder: 'Tablero de estados de órdenes',
    alt:
      'Tablero de progreso de una orden en Naix, con las subtareas repartidas entre las ' +
      'columnas Por hacer, En proceso, En revisión y Finalizado, cada una con su mecánico.',
    reversed: true,
  },
  {
    eyebrow: 'Cliente',
    title: 'Lo que se le cobra al cliente queda documentado',
    text:
      'Cada orden emite su comprobante en PDF con los datos del taller, el detalle de ' +
      'servicios, lo pagado y el saldo. La ficha del cliente guarda sus visitas, y desde ' +
      'ahí se le llama o se le escribe por WhatsApp.',
    bullets: [
      'Comprobante en PDF con serie y correlativo propios',
      'Historial de visitas y trabajos por vehículo',
      'Saldo pendiente y cuentas por cobrar al día',
    ],
    placeholder: 'Comprobante de servicio en PDF',
    alt:
      'Comprobante de servicio de Naix en PDF: datos del taller, cliente y vehículo, ' +
      'detalle de los servicios cobrados, total pagado y saldo pendiente.',
    reversed: false,
  },
];

/** Resumen de un plan en la rejilla de la página del producto. */
export interface PlanSummary {
  tier: string;
  price: string;
  unit: string;
  text: string;
  cta: string;
  featured: boolean;
  /** Distintivo sobre la tarjeta, como «Recomendado». */
  badge?: string;
  /** Sin precio de lista: se cotiza hablando y no entra en los datos estructurados. */
  quoted?: boolean;
}

export const planSummary: PlanSummary[] = [
  {
    tier: 'Gratis',
    price: 'Gratis',
    unit: ' sin tarjeta',
    text: 'Para el taller de una o dos personas que está empezando. 30 órdenes al mes, 2 usuarios, 150 clientes.',
    cta: 'Empezar gratis',
    featured: false,
  },
  {
    tier: 'Taller',
    price: 'S/ 89.00',
    unit: ' /mes',
    text: 'Para el taller establecido, con tres a cinco mecánicos. 200 órdenes al mes, 5 usuarios, comprobantes en PDF.',
    cta: 'Quiero este',
    featured: true,
    badge: 'Recomendado',
  },
  {
    tier: 'Pro',
    price: 'S/ 179.00',
    unit: ' /mes',
    text: 'Para el taller que quiere saber si gana dinero y en qué. Órdenes sin límite, 12 usuarios, tablero de dirección y finanzas.',
    // La prueba es de Pro y no del plan recomendado: `PLANS_TRIAL_PLAN=PRO` en el
    // backend, y al vencer la cuenta pasa a Gratis, no a Taller.
    cta: 'Probar Pro 14 días gratis',
    featured: false,
  },
  {
    tier: 'Multitaller',
    price: 'A medida',
    unit: '',
    text: 'Para cadenas con varias sedes. Sin topes de órdenes, usuarios, roles ni almacenamiento, y la cuota de talleres que necesite la cadena.',
    cta: 'Hablemos',
    featured: false,
    /*
     * Sin precio de lista a propósito: en el backend es `plans.is_public = false`
     * y `AvailablePlans` lo deja fuera del catálogo público. `quoted` es lo que
     * usa la página para excluirlo de los datos estructurados, donde una oferta
     * con `price` vacío sería inválida.
     */
    quoted: true,
  },
];

/** Aclara de qué plan es la prueba y en cuál termina. */
export const planSummaryNote =
  'La prueba de 14 días es del plan Pro, sin tarjeta. Al terminar, la cuenta pasa al ' +
  'plan Gratis y no se cobra nada si no eliges otro.';

/**
 * Varias sedes en una misma cuenta.
 *
 * Lo que se afirma aquí es lo que hace el sistema hoy: `enterprise_credentials`
 * une un usuario con cada uno de sus talleres, el `TenantScope` separa clientes,
 * vehículos, órdenes, trabajadores y gastos, y `users.max_enterprises` fija la
 * cuota —tres por defecto, ampliable por cuenta—. Lo que **no** existe todavía y
 * por eso no se promete: una vista consolidada de la cadena. Cada sede lleva
 * además su propia suscripción, porque `subscriptions` cuelga de la empresa.
 */
export const multiSite = {
  eyebrow: 'Varias sedes',
  title: '¿Tienes más de un taller?',
  text:
    'Naix maneja varias sedes desde una sola cuenta. Cambias de taller sin cerrar ' +
    'sesión, y cada uno guarda sus propios clientes, vehículos, órdenes, mecánicos y ' +
    'caja: los números de una sede nunca se mezclan con los de otra. El catálogo de ' +
    'marcas y modelos, en cambio, es común a todas.',
  bullets: [
    'Un mismo usuario entra a todos sus talleres y cambia de sede desde el menú',
    'Clientes, vehículos, órdenes, trabajadores y finanzas, separados por taller',
    'Roles y permisos propios de cada sede: el jefe de una no entra a la otra',
  ],
  footnote:
    'Toda cuenta puede tener hasta tres talleres propios. Si la cadena necesita más, ' +
    'ampliamos la cuota al contratar Multitaller. Cada sede lleva su propio plan.',
  cta: { label: 'Hablar de mi cadena', href: ROUTES.contacto },
};

export const faq: FaqItem[] = [
  {
    question: '¿Necesito instalar algo?',
    answer:
      'No. Naix funciona en el navegador desde cualquier computadora, tablet o celular. ' +
      'Solo necesitas internet.',
  },
  {
    question: '¿Pueden migrar mis datos actuales?',
    answer:
      'Sí. Si tienes tus clientes y vehículos en Excel o en otro sistema, los cargamos ' +
      'por ti sin costo adicional durante la puesta en marcha.',
  },
  {
    question: '¿Cuánto demora la implementación?',
    answer:
      'La cuenta de Naix queda operativa el mismo día. Con migración de datos y capacitación al ' +
      'equipo, entre 48 y 72 horas.',
  },
  {
    question: '¿Mis mecánicos van a poder usarlo?',
    answer:
      'Naix tiene una pantalla propia para el mecánico: ve solo las órdenes que tiene ' +
      'asignadas y mueve sus tareas. No entra a precios, ni a clientes, ni a finanzas. ' +
      'La capacitación toma una hora.',
  },
  {
    question: '¿Qué pasa con mis datos si cancelo?',
    answer:
      'No hay contrato de permanencia: cancelas cuando quieras. Si cierras la cuenta, te ' +
      'entregamos una copia de tus clientes, vehículos y órdenes.',
  },
];
