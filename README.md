# Standfields — sitio web

Sitio corporativo de Standfields construido con [Astro](https://astro.build) y
preparado para desplegarse en Cloudflare Pages. Es un sitio **estático**: no hay
servidor propio, ni base de datos, ni secretos.

Portado desde el diseño de referencia de `Rediseño web Standfields/` (export de
Claude Design), conservando su sistema de diseño, su tipografía y su maquetado.

---

## Requisitos

- **Node.js ≥ 22.12** (ver [`.nvmrc`](.nvmrc); Astro 7 no arranca con Node 20).
- npm 10 o superior.

```bash
nvm use          # toma la versión de .nvmrc
npm install
npm run dev      # http://localhost:4321
```

## Comandos

| Comando           | Qué hace                                                        |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente.                  |
| `npm run build`   | Genera el sitio estático en `dist/`.                             |
| `npm run preview` | Sirve `dist/` como lo hará Cloudflare.                           |
| `npm run check`   | Comprueba tipos y plantillas (`astro check`).                    |
| `npm run fonts`   | Regenera las fuentes autohospedadas desde Google Fonts.          |
| `npm run brand`   | Regenera favicon, iconos y la imagen social desde el logotipo.   |

`fonts` y `brand` sólo hay que ejecutarlos si cambian las familias tipográficas
o el logotipo; sus resultados están versionados en el repositorio.

---

## Estructura

```
src/
├── config/
│   ├── site.ts          Dominio, marca, producto (Naix), contacto y WhatsApp
│   └── routes.ts        Mapa único de rutas: ningún enlace se escribe a mano
├── data/                Contenido de cada página, separado del maquetado
│   ├── navigation.ts    Menú principal, pie y enlaces legales
│   ├── home.ts  software-taller.ts  shopify.ts  casos.ts
│   └── precios.ts  nosotros.ts  contacto.ts
├── lib/
│   └── structured-data.ts   Constructores de JSON-LD + serializador seguro
├── layouts/
│   └── BaseLayout.astro     <head>, cabecera, <main>, pie
├── components/
│   ├── Seo.astro            Meta, canónica, Open Graph, Twitter, JSON-LD
│   ├── SiteHeader.astro     Cabecera fija, submenú y panel móvil
│   ├── SiteFooter.astro
│   ├── sections/            Bloques compuestos reutilizables
│   │   ├── PageHero.astro      Cabecera de página interna (3 repartos)
│   │   ├── CtaSection.astro    Cierre azul, presente en las 10 páginas
│   │   ├── MetaStrip.astro     Franja de inversión / plazo / modalidad
│   │   └── HeroParticles.astro Constelación animada de la portada
│   └── ui/                  Primitivas
│       ├── Section.astro  Button.astro  Icon.astro
│       ├── Faq.astro      Breadcrumbs.astro  ImagePlaceholder.astro
├── styles/
│   ├── tokens.css       Color, tipografía, espaciado, elevación, movimiento
│   ├── fonts.css        GENERADO — @font-face de las fuentes locales
│   └── global.css       Reset, utilidades y clases de maquetado compartidas
└── pages/               Una página por ruta (ver más abajo)

public/
├── _headers             Cabeceras de seguridad y caché para Cloudflare Pages
├── fonts/               Archivo y Manrope variables, subconjuntos latin
└── favicon.svg, apple-touch-icon.png, og-default.png, …

scripts/
├── fetch-fonts.mjs      Descarga y deduplica las fuentes
└── build-brand-assets.mjs  Deriva iconos e imagen social del logotipo
```

### Rutas

| URL                                   | Página                       |
| ------------------------------------- | ---------------------------- |
| `/`                                   | Portada                      |
| `/naix-software-taller/`              | Naix, el SaaS para talleres  |
| `/servicios-shopify/`                 | Índice de servicios Shopify  |
| `/servicios-shopify/tiendas/`         | Tiendas desde cero           |
| `/servicios-shopify/customizacion/`   | Customización avanzada       |
| `/servicios-shopify/apps/`            | Apps a medida                |
| `/casos/`                             | Portafolio, con filtros      |
| `/precios/`                           | Planes y tarifas             |
| `/nosotros/`                          | Equipo y forma de trabajar   |
| `/contacto/`                          | Contacto y formulario        |
| `/404/`                               | Error, `noindex`             |

Las URLs llevan barra final (`trailingSlash: 'always'`) y se generan como
directorios, sin `.html`.

---

## Cómo se edita el contenido

**Ningún texto vive en el maquetado.** Para cambiar un titular, un precio o un
plan se edita el archivo correspondiente de `src/data/`, y la página se
reconstruye sola. Lo mismo con el teléfono, el correo o los horarios, que salen
de `src/config/site.ts` y se propagan a la cabecera, el pie, el formulario y el
JSON-LD a la vez.

Para añadir una página nueva:

1. Añade su ruta a `src/config/routes.ts`.
2. Crea `src/data/<pagina>.ts` con el contenido.
3. Crea `src/pages/<pagina>.astro` usando `BaseLayout`, `PageHero`, `Section` y
   `CtaSection`.
4. Si debe salir en el menú, añádela a `src/data/navigation.ts`.

El sitemap la recoge automáticamente.

### El producto se llama Naix

El SaaS multi-tenant para talleres mecánicos tiene marca propia dentro de
Standfields. Su nombre y su descriptor viven en `PRODUCT`
(`src/config/site.ts`), no escritos a mano en cada página.

La ruta es `/naix-software-taller/` a propósito: la marca todavía no tiene
búsquedas propias, así que la URL, el `<title>`, el H1 y el JSON-LD llevan el
nombre **y** la expresión que la gente sí busca («software taller mecánico»). En
el menú y en el cuerpo del texto se usa «Naix» a secas.

### Marcadores pendientes

El diseño de referencia se entregó con datos sin resolver. Están marcados con
`TODO` y agrupados en `src/data/` y `src/config/site.ts`:

```bash
grep -rn "TODO" src/
```

Cubren el año de fundación, la dirección, el nombre y la biografía del fundador,
los nombres de tres clientes y el número de talleres que usan Naix.

### Imágenes

Hay 16 huecos de imagen sin material (capturas del producto, tiendas de clientes,
retrato del equipo). Se pintan con `ImagePlaceholder`, que ocupa exactamente el
espacio de la imagen final para que el layout no se mueva al sustituirlo. El
propio componente documenta cómo cambiarlo por `<Image>` de `astro:assets`.

---

## Decisiones técnicas

### Rendimiento

- **Cero JavaScript de framework.** El único JS que se envía son cuatro islas
  propias (menú, filtros, conmutadores de precio, formulario), todas mejoras
  progresivas: sin ellas la página sigue siendo funcional y completa.
- **Fuentes autohospedadas.** Archivo y Manrope se sirven desde el propio
  dominio en cuatro archivos `.woff2` variables (105 kB en total; sólo ~58 kB
  llegan al navegador porque el castellano entra entero en el subconjunto
  `latin`). Se precargan los dos que usa el primer pintado.
- **CSS en un solo archivo** con hash inmutable, cacheado un año.
- Las imágenes pasan por `astro:assets`: WebP, tamaños por densidad y
  `width`/`height` explícitos para no provocar saltos de layout.
- La animación de la portada se detiene cuando sale de pantalla, cuando la
  pestaña pasa a segundo plano y cuando el sistema pide movimiento reducido.
- El campo de partículas (~480 en 1440×760) resuelve los enlaces con una rejilla
  espacial en lugar de comparar cada pareja: 2.000 distancias por fotograma en
  vez de 115.000.

### Accesibilidad

- Un `<main>` por página, `<h1>` único y jerarquía de encabezados sin saltos.
- Enlace «Saltar al contenido» como primer elemento enfocable.
- Todo el contenido interactivo funciona con teclado; el submenú se abre con
  `:focus-within` y el panel móvil se cierra con `Esc` devolviendo el foco.
- Foco visible en todos los controles, con variante clara sobre fondo azul.
- Contraste verificado: **0 fallos** de WCAG AA en las 11 páginas.
- Los filtros del portafolio anuncian el recuento en una región `role="status"`.

### Seguridad

- Sin dependencias de terceros en tiempo de ejecución: el sitio no carga ningún
  script, fuente ni imagen de otro dominio.
- **CSP en dos capas.** Astro emite en cada página un `<meta>` con el hash de
  cada script y estilo propios, de modo que `script-src` no necesita
  `unsafe-inline`; `public/_headers` añade el resto de directivas (marco,
  formularios, orígenes de imagen y fuente) más `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy` y HSTS.
- El JSON-LD se serializa escapando `<`, `>` y `&`, para que ningún dato pueda
  cerrar la etiqueta `<script>`.
- El formulario de contacto no envía nada a ningún servidor: compone un mensaje
  y lo abre en WhatsApp o en el gestor de correo del usuario, que decide si lo
  manda. No hay datos personales en tránsito ni claves que guardar.
- Los enlaces externos llevan `rel="noopener noreferrer"`.

### SEO

Cada página declara título, descripción, canónica, Open Graph, Twitter Card y
sus bloques JSON-LD (`ProfessionalService`, `WebSite`, `BreadcrumbList`, y según
el caso `FAQPage`, `SoftwareApplication`, `Service`, `CollectionPage`,
`ContactPage`). El `sitemap-index.xml` y el `robots.txt` se generan en el build a
partir de `SITE_URL`.

---

## Despliegue en Cloudflare Pages

El sitio es estático; **no hace falta adaptador**.

### Configuración del proyecto

| Ajuste                  | Valor          |
| ----------------------- | -------------- |
| Framework preset        | Astro          |
| Build command           | `npm run build`|
| Build output directory  | `dist`         |
| Variable de entorno     | `NODE_VERSION` = `24.17.0` |

Cloudflare también respeta el archivo `.nvmrc`, así que la variable es
redundante salvo que se quiera fijar otra versión.

### Antes del primer despliegue

1. Cambia `SITE_URL` en `src/config/site.ts` si el dominio no es
   `https://standfields.com`. De ahí salen la canónica, el sitemap, el
   `robots.txt` y las URLs de Open Graph.
2. Resuelve los `TODO` de `src/data/` (ver arriba).
3. Comprueba que `Strict-Transport-Security` de `public/_headers` es lo que
   quieres: son dos años con `preload`, y revertirlo lleva tiempo.

`public/_headers` se copia tal cual a la raíz del build y Cloudflare lo aplica
sin configuración adicional.

---

## Diferencias respecto al diseño de referencia

El export original tenía cinco problemas que se corrigieron al portarlo. Son las
únicas desviaciones intencionadas:

1. **Titulares invisibles sobre azul.** El reset del sistema de diseño forzaba
   `color: #1A202C` en todos los `h1`–`h4`, así que los catorce titulares de las
   secciones azules quedaban con un contraste de 1.06:1. Ahora los encabezados
   heredan el color de su sección.
2. **Desborde horizontal en móvil.** La cabecera medía 477 px en un viewport de
   390 px y sacaba scroll lateral en las diez páginas. La marca ahora puede
   encogerse y el wordmark se oculta por debajo de 400 px.
3. **Contraste en la tabla de precios.** Los «Sí» y los guiones estaban en 1.0:1
   y 2.9:1.
4. **Sin `<main>`, sin enlace de salto, sin `<title>` ni metadatos.**
5. **Botones de WhatsApp que llevaban a la página de contacto.** Ahora abren
   WhatsApp con un mensaje prellenado, que es lo que su etiqueta promete.

Además, por indicación del cliente, la portada **no** sigue al export sino al
banner que hoy está en producción (`web.standfields.com`): campo de partículas
denso en `#112D69` con enlaces cortos, y el recuadro blanco translúcido bajo el
titular. Los parámetros están documentados en `HeroParticles.astro`; aquel
banner usa tsParticles y aquí se reproduce con canvas plano para no cargar una
dependencia de ~40 kB.

---

## Verificación

Antes de publicar conviene comprobar:

```bash
npm run check     # 0 errores de tipos
npm run build     # 11 páginas
npm run preview   # revisión manual
```
