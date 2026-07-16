# Brand source assets (NOT deployed)

Source of truth for the logo and every rasterized asset that ships in `public/`.
Nothing here is referenced by the site at runtime — it lives outside `dist/`.

| File | Role |
|---|---|
| `logo-original.jpeg` | **The official EOS OMEGA logo** (red-on-white, 1254×1254). Master source. |
| `process_logo.py` | Turns the master into transparent + icon assets in `public/`. |
| `og-render.html` | HTML template for the 1200×630 social card. |
| `brand-lockup.png` | Transparent full lockup (mark + wordmark), for light-background use. |
| `_preview-mark-on-dark.png` | QA preview of the transparent mark on dark. |

## What ships to `public/`
- `brand-mark.png` — transparent Ω+crystal mark (used everywhere on the dark site via `BrandMark.astro`)
- `icon-512.png`, `apple-touch-icon.png` (180), `favicon-32.png` — mark on a dark square
- `og-card.png` — 1200×630 social card

## Regenerate
```bash
# 1. transparent mark + icons  (needs: python3 + Pillow + numpy)
python3 reference/brand/process_logo.py

# 2. social card → exact 1200×630
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$PWD/public/og-card.png" --window-size=1200,630 \
  "file://$PWD/reference/brand/og-render.html"
```

Note: the wordmark in the master is dark crimson (for light backgrounds); on the
dark site the wordmark is live white text (`Logo.astro`) and only the **mark** is
used from the artwork.
