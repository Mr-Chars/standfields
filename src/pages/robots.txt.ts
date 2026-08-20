import type { APIRoute } from 'astro';
import { SITE_URL } from '@/config/site';

/**
 * robots.txt generado en el build.
 *
 * Se emite desde código en lugar de dejarlo estático en `public/` para que la
 * URL del sitemap salga siempre de `SITE_URL` y no se quede desfasada si el
 * dominio cambia.
 */
export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
