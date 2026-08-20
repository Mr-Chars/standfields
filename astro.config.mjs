// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/config/site.ts';

// Sitio 100% estático: Cloudflare Pages sirve `dist/` desde su CDN sin runtime,
// por lo que no hace falta adaptador. Si algún día se añade una ruta dinámica,
// habría que incorporar @astrojs/cloudflare y cambiar `output` a 'server'.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    // URLs limpias: /precios/ en lugar de /precios.html
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  // El sitio no publica contenido en Markdown; desactivar el resaltado evita
  // cargar Shiki, que usa estilos en línea incompatibles con la CSP.
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    /**
     * Astro inserta en cada página un <meta http-equiv="content-security-policy">
     * con el hash de cada script y hoja de estilo que él mismo emite. Así
     * `script-src` queda sin `unsafe-inline`: un script inyectado no tiene hash
     * válido y el navegador lo rechaza.
     *
     * El maquetado usa atributos `style` para pasar variables CSS puntuales
     * (`--min`, `--fs`), que viajan en el atributo y no en una hoja de estilo.
     * Se habilitan sólo para `style-src-attr`; `style-src` sigue exigiendo hash.
     * El resto de directivas (marco, formularios, orígenes de imagen y fuente)
     * van en las cabeceras HTTP de `public/_headers`.
     */
    csp: {
      styleDirective: {
        resources: [{ resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    build: {
      // Cloudflare Pages sirve los assets con hash e inmutables; agrupar el CSS
      // en un único archivo evita cascadas de peticiones en la ruta crítica.
      cssCodeSplit: false,
    },
  },
});
