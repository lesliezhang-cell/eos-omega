#!/usr/bin/env bash
# One-shot deploy: build the site and push dist/ to the gh-pages branch.
# GitHub Pages serves it at https://lesliezhang-cell.github.io/eos-omega/
set -euo pipefail

REPO_URL="https://github.com/lesliezhang-cell/eos-omega.git"

echo "▶ Building…"
npm run build

echo "▶ Publishing dist/ to gh-pages…"
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -fq "$REPO_URL" gh-pages
rm -rf .git
cd ..

echo "✓ Deployed → https://lesliezhang-cell.github.io/eos-omega/"
