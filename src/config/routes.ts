/**
 * Mapa único de rutas del sitio.
 *
 * Cualquier enlace interno debe salir de aquí: renombrar una página se hace en
 * un solo sitio y TypeScript señala los usos que quedaron sueltos.
 */
export const ROUTES = {
  home: '/',
  /** Marca + palabra clave: la gente busca «software taller», no «Naix». */
  softwareTaller: '/naix-software-taller/',
  serviciosShopify: '/servicios-shopify/',
  shopifyTiendas: '/servicios-shopify/tiendas/',
  shopifyCustomizacion: '/servicios-shopify/customizacion/',
  shopifyApps: '/servicios-shopify/apps/',
  casos: '/casos/',
  precios: '/precios/',
  nosotros: '/nosotros/',
  contacto: '/contacto/',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/** Identificador de la sección activa, para marcar el enlace actual en la cabecera. */
export type NavKey =
  | 'home'
  | 'saas'
  | 'shopify'
  | 'casos'
  | 'precios'
  | 'nosotros'
  | 'contacto';
