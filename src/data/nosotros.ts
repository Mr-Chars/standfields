import { SITE } from '@/config/site';

/**
 * Contenido de la página «Nosotros».
 *
 * Varios campos siguen siendo marcadores del diseño de referencia. Están
 * marcados con TODO y agrupados aquí para poder completarlos de una vez.
 */

export const intro = {
  eyebrow: 'Quiénes somos',
  title: 'Un equipo pequeño que entrega software terminado',
  paragraphs: [
    // TODO: sustituir «[año]» por el año real de fundación (ver SITE.foundingYear).
    `Standfields nació en ${SITE.foundingYear} construyendo sistemas a medida para empresas ` +
      'peruanas. Con el tiempo aprendimos dos cosas: que los talleres mecánicos no tenían ' +
      'software decente, y que Shopify es la plataforma donde el comercio en línea local ' +
      'crece más rápido.',
    'Hoy trabajamos solo en esos dos frentes. No somos una agencia que hace de todo.',
  ],
};

export const rules = [
  {
    title: 'Alcance por escrito',
    text:
      'Antes de empezar sabes exactamente qué se entrega, cuándo y por cuánto. Los cambios ' +
      'se cotizan aparte, no se discuten a mitad del camino.',
  },
  {
    title: 'Entregas visibles',
    text:
      'Cada dos semanas hay algo funcionando que puedes abrir y probar. Nada de meses sin ' +
      'ver nada.',
  },
  {
    title: 'El código es tuyo',
    text:
      'Repositorio y documentación se entregan al cierre. Si mañana quieres otro proveedor, ' +
      'puedes cambiar.',
  },
  {
    title: 'Decimos que no',
    text:
      'Si tu problema se resuelve con una herramienta que ya existe y cuesta menos, te lo ' +
      'decimos y no te vendemos un desarrollo.',
  },
];

export const founder = {
  // TODO: completar los datos reales del fundador antes de publicar.
  name: '[Nombre y apellido]',
  role: 'Fundador · Desarrollo y producto',
  bio: '[Dos o tres líneas sobre tu experiencia: años trabajando, tecnologías, tipo de proyectos que has entregado.]',
  portraitPlaceholder: 'Tu foto (retrato vertical)',
  facts: [
    { label: 'Atiende', value: 'Diagnóstico, alcance y desarrollo' },
    { label: 'Base', value: '[Ciudad], Perú' },
    { label: 'Contacto directo', value: '[correo o WhatsApp]' },
  ],
  note:
    'Cuando un proyecto lo exige, sumo colaboradores de confianza para diseño o ' +
    'infraestructura. La interlocución y la responsabilidad siguen siendo mías.',
};

export const numbers = [
  { value: '+40', label: 'Proyectos entregados' },
  { value: '8', label: 'Años en el mercado' },
  // TODO: sustituir «[n]» por el número real de talleres.
  { value: '[n]', label: 'Talleres usando Naix' },
  { value: '100%', label: 'Proyectos con código entregado' },
];
