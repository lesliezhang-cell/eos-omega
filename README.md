# EOS OMEGA Acceleration

Official website for **EOS OMEGA Acceleration** — an officially recognized EOS accelerator.

🔴 **Live:** https://lesliezhang-cell.github.io/eos-omega/

## Stack
- [Astro](https://astro.build) (static, multi-page)
- Bilingual: English (`/`) + 中文 (`/zh`)
- Custom CSS design system — dark + crimson glow
- Hosted on GitHub Pages (`gh-pages` branch)

## Develop
```bash
npm install
npm run dev        # http://localhost:4330/eos-omega/
```

## Build & deploy
```bash
npm run build      # outputs to dist/
npm run deploy     # builds + pushes dist/ to the gh-pages branch
```

## Structure
- `src/i18n/content.ts` — **all copy, both languages** (edit here)
- `src/i18n/config.ts` — locale + base-path routing helpers
- `src/components/` — section components (Hero, Programs, Portfolio, …)
- `src/pages/` — routes (EN); `src/pages/zh/` — Chinese routes
- `src/components/BrandMark.astro` / `EOSMark.astro` — logo marks (swap with official vector assets)
- `public/` — favicon, `.nojekyll`

## Before going to production
The site ships with **professional placeholder content**. Replace:
- Real program data, stats, portfolio companies, mentors (`content.ts`)
- Official EOS / Vaulta partner lockup (`EOSMark.astro`)
- VC / media / community links (currently invented placeholders)
- Wire the application form (`ApplyBody.astro`) to a real backend / Formspree
