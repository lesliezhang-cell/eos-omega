import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// EOS OMEGA Acceleration — official site
// Bilingual: English (default, no prefix) + Chinese (/zh)
//
// Two deploy targets, controlled by env vars (defaults = GitHub Pages):
//   GitHub Pages (default):  npm run build
//   Custom domain @ root:    SITE_URL=https://yourdomain.com BASE_PATH=/ npm run build
const SITE = process.env.SITE_URL || 'https://lesliezhang-cell.github.io';
const BASE = process.env.BASE_PATH || '/eos-omega';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
