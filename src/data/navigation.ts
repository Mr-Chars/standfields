import { ROUTES } from '@/config/routes';
import { CONTACT, WHATSAPP } from '@/config/site';

export interface NavItem {
  label: string;
  href: string;
  /** Sección que debe marcarse como activa cuando esta entrada corresponde. */
  key?: 'home' | 'saas' | 'shopify' | 'casos' | 'precios' | 'nosotros';
  /** Submenú desplegable en escritorio, lista indentada en móvil. */
  children?: { label: string; description: string; href: string }[];
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Inicio', href: ROUTES.home, key: 'home' },
  { label: 'Naix', href: ROUTES.softwareTaller, key: 'saas' },
  {
    label: 'Servicios Shopify',
    href: ROUTES.serviciosShopify,
    key: 'shopify',
    children: [
      {
        label: 'Tiendas desde cero',
        description: 'Diseño y lanzamiento completo',
        href: ROUTES.shopifyTiendas,
      },
      {
        label: 'Customización avanzada',
        description: 'Liquid, secciones y performance',
        href: ROUTES.shopifyCustomizacion,
      },
      {
        label: 'Apps a medida',
        description: 'Integraciones y automatización',
        href: ROUTES.shopifyApps,
      },
    ],
  },
  { label: 'Casos', href: ROUTES.casos, key: 'casos' },
  { label: 'Precios', href: ROUTES.precios, key: 'precios' },
  { label: 'Nosotros', href: ROUTES.nosotros, key: 'nosotros' },
];

export const FOOTER_NAV = [
  {
    title: 'Producto',
    links: [
      { label: 'Naix · software de taller', href: ROUTES.softwareTaller },
      { label: 'Módulos', href: `${ROUTES.softwareTaller}#modulos` },
      { label: 'Planes y precios', href: ROUTES.precios },
      { label: 'Preguntas frecuentes', href: `${ROUTES.softwareTaller}#faq` },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'E-commerce Shopify', href: ROUTES.serviciosShopify },
      { label: 'Tiendas desde cero', href: ROUTES.shopifyTiendas },
      { label: 'Customización avanzada', href: ROUTES.shopifyCustomizacion },
      { label: 'Apps a medida', href: ROUTES.shopifyApps },
    ],
  },
] as const;

/** Accesos directos del pie: cada uno con su nombre accesible explícito. */
export const FOOTER_SOCIAL = [
  { label: 'Escríbenos por WhatsApp', href: WHATSAPP.general, icon: 'whatsapp' as const, external: true },
  { label: `Escríbenos a ${CONTACT.email}`, href: `mailto:${CONTACT.email}`, icon: 'mail' as const, external: false },
  { label: 'Ver nuestro portafolio', href: ROUTES.casos, icon: 'briefcase' as const, external: false },
];

export const LEGAL_LINKS = [
  { label: 'Términos y condiciones', href: ROUTES.contacto },
  { label: 'Política de privacidad', href: ROUTES.contacto },
];
