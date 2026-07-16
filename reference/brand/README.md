# Brand source assets (NOT deployed)

| File | Role |
|---|---|
| `mark.svg` | **MASTER** — hand-recreated vector of the official mark (Ω + EOS crystal). Edit this. |
| `logo-original.jpeg` | The official raster logo (1254×1254, red-on-white). Visual reference only. |
| `og-render.html` | HTML template for the 1200×630 social card. |
| `process_logo.py` | Composes dark-square icons from the rendered mark. |
| `brand-lockup.png` | Transparent full lockup extracted from the original (light-bg use). |

The mark was rebuilt as vectors by measuring the original (ring ellipses, foot
polygons, crystal vertices traced row-by-row), so it stays crisp at any size —
no JPEG artifacts. Crystal nodes: T(626.5,322) V1L/V1R(553/700,426)
V2L/V2R(522/731,575) B(626.5,650) N(626.5,415), bar y=580, strokes 12.

## What ships to `public/`
- `brand-mark.svg` — copy of the master (used site-wide via `BrandMark.astro`)
- `brand-mark.png` — 1024 transparent raster (used by the OG card template)
- `icon-512.png` / `apple-touch-icon.png` (180) / `favicon-32.png` — mark on dark squares
- `og-card.png` — 1200×630 social card

## Regenerate everything
```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# 0. master SVG → public copy
cp reference/brand/mark.svg public/brand-mark.svg

# 1. transparent 1024 raster of the mark
cat > /tmp/mark_wrap.html <<'EOF'
<!doctype html><html><head><style>html,body{margin:0;padding:0}</style></head>
<body><img src="file:///ABS/PATH/eos-omega/reference/brand/mark.svg" width="1024" height="1024"></body></html>
EOF
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$PWD/public/brand-mark.png" --window-size=1024,1024 "file:///tmp/mark_wrap.html"

# 2. icons (needs python3 + Pillow)
python3 reference/brand/process_logo.py

# 3. social card → exact 1200×630
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 \
  --screenshot="$PWD/public/og-card.png" --window-size=1200,630 \
  "file://$PWD/reference/brand/og-render.html"
```

Note: the wordmark ("EOS OMEGA / ACCELERATION") is live text in `Logo.astro`
(white, for the dark site); only the mark comes from the artwork.
