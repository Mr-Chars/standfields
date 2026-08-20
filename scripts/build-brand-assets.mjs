/**
 * Deriva los recursos de marca a partir del logotipo original.
 *
 * El archivo entregado es un PNG de 976×1088 con el logo en negro sobre blanco
 * opaco (691 kB). De ahí se generan:
 *
 *   src/assets/logo-mark.png       marca con fondo transparente (cabecera)
 *   src/assets/logo-mark-light.png la misma marca en blanco (pie, fondo azul)
 *   public/favicon.svg             favicon vectorial, monograma sobre azul
 *   public/favicon-32.png          respaldo PNG para navegadores sin SVG
 *   public/apple-touch-icon.png    icono de pantalla de inicio en iOS
 *   public/og-default.png          imagen social 1200×630 por defecto
 *
 * Uso: npm run brand
 */
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';

const SOURCE = 'src/assets/logo-standfields.png';
const NAVY = '#102542';
const CREAM = '#f9f5ec';

await mkdir('public', { recursive: true });

/**
 * El logo viene en negro sobre blanco opaco. Se usa la propia luminancia como
 * canal alfa: el blanco desaparece y el negro queda sólido, de forma que la
 * marca se apoya sobre cualquier fondo sin recurrir a `mix-blend-mode` (que en
 * el diseño de referencia obligaba a invertir la imagen sobre el azul).
 */
async function withAlphaFromLuminance({ light }) {
  const { data, info } = await sharp(SOURCE)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = info.width * info.height;
  const out = Buffer.alloc(pixels * 4);
  for (let i = 0; i < pixels; i += 1) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    // Luminancia perceptual: cuanto más oscuro el píxel, más opaco queda.
    const ink = 255 - Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);
    const tone = light ? 255 : 0;
    out[i * 4] = tone;
    out[i * 4 + 1] = tone;
    out[i * 4 + 2] = tone;
    out[i * 4 + 3] = ink;
  }

  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

const mark = await withAlphaFromLuminance({ light: false });
await mark.clone().resize({ width: 176 }).png({ compressionLevel: 9 }).toFile('src/assets/logo-mark.png');

const markLight = await withAlphaFromLuminance({ light: true });
await markLight
  .clone()
  .resize({ width: 176 })
  .png({ compressionLevel: 9 })
  .toFile('src/assets/logo-mark-light.png');

/* ── Favicon ──────────────────────────────────────────────────────────────
   Monograma en lugar del logotipo completo: a 16 px la corona de laurel se
   convierte en una mancha ilegible, mientras que la «S» sobre el azul de marca
   se reconoce en la pestaña. Es el mismo recurso que usaba la referencia. */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="Standfields">
  <rect width="240" height="240" rx="44" fill="${NAVY}"/>
  <text x="120" y="168" text-anchor="middle" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="150" font-weight="800" fill="${CREAM}">S</text>
</svg>
`;
await writeFile('public/favicon.svg', faviconSvg);

const faviconPng = (size) =>
  sharp(Buffer.from(faviconSvg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

await writeFile('public/favicon-32.png', await faviconPng(32));
await writeFile('public/apple-touch-icon.png', await faviconPng(180));
await writeFile('public/icon-512.png', await faviconPng(512));

/* ── Imagen social por defecto ────────────────────────────────────────────
   1200×630 es la proporción que recortan bien tanto Open Graph como Twitter.
   Se compone con la marca en blanco sobre el azul corporativo. */
const OG_W = 1200;
const OG_H = 630;
// El logotipo ya incluye el wordmark; para la tarjeta social se recorta la
// corona y se compone el nombre aparte, para no repetirlo dos veces.
const { width: srcW } = await sharp(SOURCE).metadata();
const ogMark = await markLight
  .clone()
  .extract({ left: 0, top: 0, width: srcW, height: 800 })
  .resize({ width: 230 })
  .png()
  .toBuffer();
const ogMarkWidth = 230;
const ogText = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <text x="600" y="452" text-anchor="middle" font-family="Archivo, Helvetica, Arial, sans-serif"
        font-size="76" font-weight="900" letter-spacing="6" fill="#ffffff">STANDFIELDS</text>
  <text x="600" y="516" text-anchor="middle" font-family="Archivo, Helvetica, Arial, sans-serif"
        font-size="27" font-weight="700" letter-spacing="7" fill="${CREAM}">TRANSFORMACIÓN DIGITAL PARA TU EMPRESA</text>
  <rect x="0" y="${OG_H - 12}" width="${OG_W}" height="12" fill="#31527a"/>
</svg>`;

await sharp({ create: { width: OG_W, height: OG_H, channels: 4, background: NAVY } })
  .composite([
    { input: ogMark, top: 92, left: Math.round((OG_W - ogMarkWidth) / 2) },
    { input: Buffer.from(ogText), top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og-default.png');

console.log('Recursos de marca generados.');
