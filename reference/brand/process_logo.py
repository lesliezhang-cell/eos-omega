#!/usr/bin/env python3
"""Official EOS OMEGA logo -> site assets. Run from the repo root.

The site ships the ORIGINAL artwork (not a redraw). Pipeline:
  1. soft matte from redness (background is neutral white/grey -> alpha 0)
  2. median + gaussian on alpha (kills JPEG specks, feathers edges)
  3. un-blend from white: true color = (observed - (1-a)*255) / a
     -> no white fringe on semi-transparent edges
  4. crop the mark (feet reflections preserved; wordmark excluded via the
     empty gap between them), square-pad, 1024
  5. brand-mark.png (master raster) + brand-mark.webp (site, ~110KB)
  6. dark-square icons 512 / 180 / 32
"""
import numpy as np
from PIL import Image, ImageFilter

SRC = "reference/brand/logo-original.jpeg"

src = Image.open(SRC).convert("RGB")
big = src.resize((src.width * 2, src.height * 2), Image.LANCZOS)
im = np.asarray(big).astype(np.float32)
r, g, b = im[..., 0], im[..., 1], im[..., 2]

redness = r - np.maximum(g, b)
lo, hi = 10.0, 60.0
a = np.clip((redness - lo) / (hi - lo), 0, 1)

A = Image.fromarray((a * 255).astype(np.uint8)).filter(ImageFilter.MedianFilter(3))
A = A.filter(ImageFilter.GaussianBlur(1.0))
a = np.asarray(A).astype(np.float32) / 255.0

am = np.clip(a, 1e-3, 1)[..., None]
rgb = np.stack([r, g, b], axis=-1)
un = np.clip((rgb - (1 - am) * 255.0) / am, 0, 255)
full = Image.fromarray(np.dstack([un, (a * 255)[..., None]]).astype(np.uint8), "RGBA")
alpha = np.asarray(full)[..., 3]
H, W = alpha.shape

rowsum = (alpha > 90).sum(axis=1)
gap = [y for y in range(int(H * 0.55), int(H * 0.68)) if rowsum[y] == 0]
cut = gap[len(gap) // 2] if gap else int(H * 0.60)

reg = np.zeros_like(alpha, bool)
reg[:cut, :] = alpha[:cut, :] > 25
ys, xs = np.where(reg)
pad = 24
x0, y0 = max(0, xs.min() - pad), max(0, ys.min() - pad)
x1, y1 = min(W, xs.max() + 1 + pad), min(H, ys.max() + 1 + pad)
mark = full.crop((x0, y0, x1, y1))

s = max(mark.size)
sq = Image.new("RGBA", (s, s), (0, 0, 0, 0))
sq.paste(mark, ((s - mark.width) // 2, (s - mark.height) // 2), mark)
sq = sq.resize((1024, 1024), Image.LANCZOS)
sq.save("public/brand-mark.png")
sq.save("public/brand-mark.webp", "WEBP", quality=88, method=6)

BG = (10, 10, 12, 255)
def icon(size, frac=0.72):
    c = Image.new("RGBA", (size, size), BG)
    m = int(size * frac)
    mk = sq.resize((m, m), Image.LANCZOS)
    c.paste(mk, ((size - m) // 2, (size - m) // 2), mk)
    return c

icon(512).save("public/icon-512.png")
icon(180).save("public/apple-touch-icon.png")
icon(32, 0.86).save("public/favicon-32.png")

for bg, nm in [((12, 12, 14), "dark"), ((122, 122, 122), "gray")]:
    c = Image.new("RGBA", (1024, 1024), bg + (255,))
    c.alpha_composite(sq)
    c.convert("RGB").save(f"reference/brand/_preview-{nm}.png")
print("all assets written")
