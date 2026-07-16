# Brand source assets (NOT deployed)

| File | Role |
|---|---|
| `logo-original.jpeg` | **The official logo** (1254×1254, red-on-white). Master source. |
| `process_logo.py` | Extraction pipeline: original → transparent mark + icons. |
| `og-render.html` | HTML template for the 1200×630 social card. |
| `mark.svg` | Vector recreation (traced geometry). Kept as backup only — the site ships the original artwork. |
| `_preview-dark/gray.png` | QA composites of the extraction. |

## The site ships the ORIGINAL artwork
`process_logo.py` keys the original professionally: soft alpha matte from
redness, JPEG-speck cleanup, then **un-blend from white** so semi-transparent
edge pixels recover their true color (no white fringe, no grey veil). Feet
reflections are preserved; the wordmark is excluded (the site renders
"EOS OMEGA / ACCELERATION" as live white text in `Logo.astro`).

## What ships to `public/`
- `brand-mark.webp` — 1024², ~110 KB (used site-wide via `BrandMark.astro`)
- `brand-mark.png` — 1024² master raster (used by the OG card template)
- `icon-512.png` / `apple-touch-icon.png` (180) / `favicon-32.png`
- `og-card.png` — 1200×630 social card

## Regenerate
```bash
# from repo root — needs python3 + Pillow + numpy
python3 reference/brand/process_logo.py

# social card → exact 1200×630
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$PWD/public/og-card.png" --window-size=1200,630 \
  "file://$PWD/reference/brand/og-render.html"
```
