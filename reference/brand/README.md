# Brand source assets (NOT deployed)

Sources for the rasterized images that ship in `public/`. Nothing here is
referenced by the site — it lives outside `dist/` on purpose.

| Source | Generates | Command |
|---|---|---|
| `og-render.html` | `public/og-card.png` (1200×630 social card) | headless Chrome screenshot |
| `icon.svg` | `public/icon-512.png` + `public/apple-touch-icon.png` | `qlmanage` + `sips` |

## Regenerate

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# OG card → exact 1200×630
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --screenshot="$PWD/public/og-card.png" --window-size=1200,630 \
  "file://$PWD/reference/brand/og-render.html"

# Square icon 512 (qlmanage renders SVG → PNG), then 180 apple-touch-icon
TMP=$(mktemp -d)
qlmanage -t -s 512 -o "$TMP" reference/brand/icon.svg
cp "$TMP/icon.svg.png" public/icon-512.png
sips -z 180 180 public/icon-512.png --out public/apple-touch-icon.png
rm -rf "$TMP"
```

The favicon (`public/favicon.svg`) is authored by hand and needs no build step.
