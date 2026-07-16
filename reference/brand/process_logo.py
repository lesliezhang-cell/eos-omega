#!/usr/bin/env python3
"""Official EOS OMEGA logo (red-on-white JPEG) -> site-ready assets.

Keying strategy: the logo is RED on a neutral (white/grey) background, and the
source is a JPEG (edge ringing + a faint vignette + mirror reflections under the
feet). We key on *redness* so every neutral pixel — background, grey JPEG dust,
white gloss — goes fully transparent, then crop to the SOLID logo bbox so the
faint reflections below the feet are trimmed off.
"""
import os, shutil
import numpy as np
from PIL import Image

SRC = os.path.join(os.path.dirname(__file__), "logo-original.jpeg")
if not os.path.exists(SRC):
    SRC = os.path.expanduser("~/Downloads/photo_2026-07-16 15.36.53.jpeg")
PROJ = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
PUB = os.path.join(PROJ, "public")
REF = os.path.join(PROJ, "reference/brand")
os.makedirs(REF, exist_ok=True)
_master = os.path.join(REF, "logo-original.jpeg")
if os.path.abspath(SRC) != os.path.abspath(_master):
    shutil.copy(SRC, _master)

im = np.asarray(Image.open(SRC).convert("RGB")).astype(np.float32)
r, g, b = im[..., 0], im[..., 1], im[..., 2]
lum = 0.299 * r + 0.587 * g + 0.114 * b
redness = r - 0.5 * (g + b)              # high for red art, ~0 for neutral

a = (redness - 10.0) * 3.2               # ramp: neutral -> 0, red -> opaque
a[lum > 232] = 0                         # belt-and-suspenders: kill near-white
a = np.clip(a, 0, 255)
a[a < 40] = 0                            # drop the faintest veil / fringe
rgba = np.dstack([r, g, b, a]).astype(np.uint8)
full = Image.fromarray(rgba, "RGBA")
W, H = full.size
alpha = np.asarray(full)[..., 3]


def solid_bbox(region_y1, thr):
    reg = np.zeros_like(alpha, bool)
    reg[0:region_y1, :] = alpha[0:region_y1, :] > thr
    ys, xs = np.where(reg)
    return xs.min(), ys.min(), xs.max() + 1, ys.max() + 1


def pad(box, p):
    x0, y0, x1, y1 = box
    return (max(0, x0 - p), max(0, y0 - p), min(W, x1 + p), min(H, y1 + p))


# MARK: search top 58% (excludes wordmark); bbox on SOLID pixels (thr=110) so
# the faint reflections under the feet fall outside the crop.
mbox = pad(solid_bbox(int(H * 0.58), 110), 22)
mark = full.crop(mbox)
ms = max(mark.size)
mark_sq = Image.new("RGBA", (ms, ms), (0, 0, 0, 0))
mark_sq.paste(mark, ((ms - mark.width) // 2, (ms - mark.height) // 2), mark)
mark_sq.save(os.path.join(PUB, "brand-mark.png"))
print("brand-mark.png", mark_sq.size)

# Full transparent lockup (reference only)
lb = pad(solid_bbox(H, 110), 28)
full.crop(lb).save(os.path.join(REF, "brand-lockup.png"))

# Icons: mark on a dark square
BG = (10, 10, 12, 255)
def icon(size, frac=0.66):
    c = Image.new("RGBA", (size, size), BG)
    m = int(size * frac)
    mk = mark_sq.resize((m, m), Image.LANCZOS)
    c.paste(mk, ((size - m) // 2, (size - m) // 2), mk)
    return c
icon(512).save(os.path.join(PUB, "icon-512.png"))
icon(180).save(os.path.join(PUB, "apple-touch-icon.png"))
icon(32, 0.80).save(os.path.join(PUB, "favicon-32.png"))

# QA previews
for bg, nm in [((122, 122, 122), "gray"), ((14, 14, 16), "dark")]:
    c = Image.new("RGBA", mark_sq.size, bg + (255,))
    c.alpha_composite(mark_sq)
    c.convert("RGB").save(os.path.join(REF, f"_preview-{nm}.png"))
print("done")
