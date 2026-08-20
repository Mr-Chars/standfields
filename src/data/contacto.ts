import { ROUTES } from '@/config/routes';

/** Contenido y campos del formulario de contacto. */

export const intro = {
  eyebrow: 'Hablemos',
  title: 'Cuéntanos qué necesitas',
  lead:
    'La vía más rápida es WhatsApp: respondemos dentro del horario de atención, ' +
    'normalmente en menos de una hora. Si prefieres escribir el detalle, usa el formulario.',
};

export const interests = [
  'Naix — software para talleres mecánicos',
  'Tienda Shopify desde cero',
  'Customización de mi tienda Shopify',
  'App a medida para Shopify',
  'Otro tipo de software',
];

export const usefulLinks = [
  { label: 'Ver planes y precios', href: ROUTES.precios },
  { label: 'Preguntas frecuentes de Naix', href: `${ROUTES.softwareTaller}#faq` },
  { label: 'Casos y portafolio', href: ROUTES.casos },
];
