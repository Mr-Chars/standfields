/**
 * Descarga los subconjuntos latin y latin-ext de Archivo y Manrope desde Google
 * Fonts y los deja autohospedados en public/fonts, junto con src/styles/fonts.css.
 *
 * Google sirve estas dos familias como fuentes variables: un mismo .woff2 cubre
 * todo el rango de pesos, así que se guarda un archivo por familia y subconjunto
 * y se declara el rango completo en `font-weight`.
 *
 * Uso: npm run fonts
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const FONT_DIR = 'public/fonts';
const CSS_FILE = 'src/styles/fonts.css';
const SUBSETS = new Set(['latin', 'latin-ext']);

/** Rango de pesos que publica cada familia variable. */
const FAMILIES = [
  { name: 'Archivo', range: [400, 900] },
  { name: 'Manrope', range: [400, 800] },
];

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function fetchBinary(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

const faces = [];

await mkdir(FONT_DIR, { recursive: true });

for (const family of FAMILIES) {
  const [min, max] = family.range;
  const css = await fetchText(
    `https://fonts.googleapis.com/css2?family=${family.name}:wght@${min}..${max}&display=swap`,
  );

  const blocks = css.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g);
  for (const [, subset, body] of blocks) {
    if (!SUBSETS.has(subset)) continue;
    const unicodeRange = body.match(/unicode-range:\s*([^;]+);/)?.[1].trim();
    const source = body.match(/url\(([^)]+)\)/)?.[1];
    if (!unicodeRange || !source) continue;

    const file = `${family.name.toLowerCase()}-${subset}.woff2`;
    const bytes = await fetchBinary(source);
    await writeFile(join(FONT_DIR, file), bytes);
    faces.push({ family: family.name, weights: `${min} ${max}`, file, unicodeRange, size: bytes.length });
  }
}

const css = `/* GENERADO POR scripts/fetch-fonts.mjs — no editar a mano.
   Fuentes autohospedadas: sin peticiones a terceros, CSP más estricta y una
   conexión menos en la ruta crítica. \`unicode-range\` hace que el navegador
   descargue solo el subconjunto que la página necesita (el castellano entra
   entero en \`latin\`, así que \`latin-ext\` normalmente no llega a pedirse). */

${faces
  .map(
    (f) => `@font-face {
  font-family: '${f.family}';
  font-style: normal;
  font-weight: ${f.weights};
  font-display: swap;
  src: url('/fonts/${f.file}') format('woff2');
  unicode-range: ${f.unicodeRange};
}`,
  )
  .join('\n\n')}
`;

await writeFile(CSS_FILE, css);

const total = faces.reduce((sum, f) => sum + f.size, 0);
for (const f of faces) console.log(`${f.file.padEnd(28)} ${(f.size / 1024).toFixed(1)} kB`);
console.log(`total ${(total / 1024).toFixed(1)} kB en ${faces.length} archivos`);
