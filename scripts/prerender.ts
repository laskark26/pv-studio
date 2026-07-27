/**
 * Prérendu statique post-build.
 *
 * Sert dist/ localement, visite chaque URL avec un navigateur sans interface,
 * puis réécrit le HTML obtenu dans dist/<route>/index.html.
 *
 * Aucune modification du code applicatif n'est requise : le bundle client
 * reste identique et hydrate le HTML généré.
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

import { getPrerenderPaths, getSitemapRoutes } from '../src/utils/routes';
import { SITE_URL } from '../src/utils/siteUrl';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const PORT = 4321;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Serveur statique minimal avec repli SPA.
 *
 * Le repli sert le template ORIGINAL mis en cache au démarrage, jamais un
 * fichier déjà réécrit par le prérendu : sinon les métadonnées de la première
 * page traitée fuiteraient dans toutes les suivantes.
 */
function startServer(templateHtml: string) {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent((req.url || '/').split('?')[0]);
    const filePath = path.join(DIST, url);

    // Fichier d'asset existant : on le sert tel quel.
    if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
      try {
        const body = await readFile(filePath);
        res.writeHead(200, {
          'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream',
        });
        return res.end(body);
      } catch {
        return res.writeHead(404).end('Not found');
      }
    }

    // Toute route applicative reçoit le template vierge.
    res.writeHead(200, { 'Content-Type': MIME['.html'] });
    res.end(templateHtml);
  });

  return new Promise<ReturnType<typeof createServer>>(resolve => {
    server.listen(PORT, () => resolve(server));
  });
}

/** dist/index.html pour `/`, dist/<route>/index.html sinon. */
function outputPathFor(route: string): string {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.replace(/^\//, ''), 'index.html');
}

function buildSitemap(): string {
  const urls = getSitemapRoutes()
    .map(r => {
      const loc = `${SITE_URL}${r.canonicalPath === '/' ? '/' : r.canonicalPath}`;
      const lastmod = r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : '';
      return `  <url>
    <loc>${loc}</loc>${lastmod}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    console.error('✗ dist/index.html introuvable — lancer `vite build` avant le prérendu.');
    process.exit(1);
  }

  const routes = getPrerenderPaths();
  console.log(`Prérendu de ${routes.length} URLs (base: ${SITE_URL})\n`);

  // Capturé avant toute réécriture : sert de repli pour toutes les routes.
  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8');
  const server = await startServer(template);
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  let ok = 0;
  const failures: string[] = [];

  try {
    const page = await browser.newPage();
    // Les images distantes ne servent à rien pour le HTML : on les coupe.
    await page.setRequestInterception(true);
    page.on('request', req => {
      if (['image', 'font', 'media'].includes(req.resourceType())) req.abort();
      else req.continue();
    });

    for (const route of routes) {
      try {
        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30_000,
        });
        // L'app est montée quand #root a du contenu.
        await page.waitForFunction('document.querySelector("#root")?.children.length > 0', {
          timeout: 15_000,
        });

        const html = await page.content();

        // Garde-fou : des métadonnées en double signalent une fuite entre pages.
        const titleCount = (html.match(/<title[\s>]/g) || []).length;
        const canonicalCount = (html.match(/rel="canonical"/g) || []).length;
        if (titleCount !== 1 || canonicalCount !== 1) {
          throw new Error(
            `métadonnées en double (title×${titleCount}, canonical×${canonicalCount})`
          );
        }

        const out = outputPathFor(route);
        await mkdir(path.dirname(out), { recursive: true });
        await writeFile(out, html, 'utf-8');

        ok++;
        console.log(`  ✓ ${route}`);
      } catch (err) {
        failures.push(route);
        console.error(`  ✗ ${route} — ${(err as Error).message.split('\n')[0]}`);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(), 'utf-8');
  console.log(`\n  ✓ sitemap.xml — ${getSitemapRoutes().length} URLs canoniques`);

  console.log(`\n${ok}/${routes.length} pages prérendues.`);
  if (failures.length) {
    console.error(`Échecs : ${failures.join(', ')}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
