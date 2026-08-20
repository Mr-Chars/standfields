import type { IconName } from '@/components/ui/Icon.astro';
import type { FaqItem } from '@/components/ui/Faq.astro';

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

export const modules: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'document',
    title: 'Órdenes de servicio',
    text:
      'Alta de la orden con diagnóstico, repuestos, mano de obra y estados: recibido, ' +
      'en proceso, esperando repuesto, listo, entregado.',
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
      'Catálogo de marcas, modelos, años y motorizaciones precargado. Placa, kilometraje ' +
      'y notas técnicas por unidad.',
  },
  {
    icon: 'calendar',
    title: 'Agenda y citas',
    text:
      'Reserva de horarios por bahía y por mecánico, con recordatorio automático al ' +
      'cliente el día previo.',
  },
  {
    icon: 'chart-line',
    title: 'Reportes y métricas',
    text:
      'Ingresos por periodo, ticket promedio, tiempos de reparación y ranking de ' +
      'servicios más vendidos.',
  },
  {
    icon: 'card',
    title: 'Cotizaciones y facturación',
    text:
      'Cotización enviada por WhatsApp, aprobación del cliente registrada y comprobante ' +
      'emitido desde la misma orden.',
  },
];

export const features = [
  {
    eyebrow: 'Recepción',
    title: 'Un vehículo entra y en 40 segundos está registrado',
    text:
      'Se busca por placa: si el vehículo ya existe, aparece con su historial. Si es ' +
      'nuevo, se elige marca y modelo del catálogo y se registra el kilometraje. Se anota ' +
      'lo que reporta el cliente y se toman fotos del estado de entrada.',
    bullets: [
      'Búsqueda por placa, cliente o teléfono',
      'Fotos del estado de entrada adjuntas a la orden',
      'Checklist de recepción firmado en pantalla',
    ],
    placeholder: 'Pantalla de recepción / alta de orden',
    /** Invierte el orden de las columnas, como en el diseño. */
    reversed: false,
  },
  {
    eyebrow: 'Taller',
    title: 'El tablero dice qué se trabaja ahora y qué está frenado',
    text:
      'Cada orden avanza por columnas visibles para todo el equipo. Si falta un repuesto, ' +
      'la orden se marca y se ve el motivo del retraso sin preguntar a nadie.',
    bullets: [
      'Asignación de mecánico y bahía',
      'Alertas de órdenes detenidas más de 48 horas',
      'Funciona en tablet y celular dentro del taller',
    ],
    placeholder: 'Tablero de estados de órdenes',
    reversed: true,
  },
  {
    eyebrow: 'Cliente',
    title: 'El dueño del auto se entera antes de llamar',
    text:
      'Cada cambio de estado puede enviar un mensaje por WhatsApp con el avance y el ' +
      'enlace a la cotización. Menos llamadas al mostrador y aprobaciones más rápidas.',
    bullets: [
      'Cotización aprobada por el cliente con registro de fecha',
      'Recordatorio de mantenimiento según kilometraje',
      'Historial descargable en PDF para reventa del vehículo',
    ],
    placeholder: 'Notificación / cotización vista por el cliente',
    reversed: false,
  },
];

export const planSummary = [
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
    cta: 'Probar 14 días gratis',
    featured: true,
    badge: 'Recomendado',
  },
  {
    tier: 'Pro',
    price: 'S/ 179.00',
    unit: ' /mes',
    text: 'Para el taller que quiere saber si gana dinero y en qué. Órdenes sin límite, 12 usuarios, tablero de dirección y finanzas.',
    cta: 'Quiero este',
    featured: false,
  },
];

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
      'La vista de taller de Naix tiene botones grandes y solo tres acciones: tomar la orden, ' +
      'marcar avance y cerrarla. La capacitación toma una hora.',
  },
  {
    question: '¿Qué pasa con mis datos si cancelo?',
    answer:
      'Puedes exportar todo en Excel en cualquier momento. No hay contrato de permanencia.',
  },
];
