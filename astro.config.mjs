import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// EOS OMEGA Acceleration — official site
// Bilingual: English (default, no prefix) + Chinese (/zh)
export default defineConfig({
  // GitHub Pages project site: https://lesliezhang-cell.github.io/eos-omega/
  site: 'https://lesliezhang-cell.github.io',
  base: '/eos-omega',
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
