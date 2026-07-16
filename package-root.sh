#!/usr/bin/env bash
# Package the site for deployment at a custom domain's ROOT path.
#   ./package-root.sh https://yourdomain.com
# Output: ~/Downloads/eos-omega-site-root.zip  (unzip → upload, done)
set -euo pipefail

DOMAIN="${1:-https://lesliezhang-cell.github.io/eos-omega}"
DOMAIN="${DOMAIN%/}"

echo "▶ Building for root path (site: $DOMAIN)…"
SITE_URL="$DOMAIN" BASE_PATH="/" npm run build

# robots.txt ships a hardcoded sitemap URL — point it at this deployment
cat > dist/robots.txt <<EOF
User-agent: *
Allow: /

Sitemap: $DOMAIN/sitemap-index.xml
EOF

ZIP=~/Downloads/eos-omega-site-root.zip
rm -f "$ZIP"
( cd dist && zip -rq "$ZIP" . -x ".*" )
echo "✓ $ZIP"
ls -lh "$ZIP" | awk '{print "  "$5"  "$9}'
