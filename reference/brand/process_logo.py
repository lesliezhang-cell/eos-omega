#!/usr/bin/env python3
"""Compose app icons from the rendered vector mark (public/brand-mark.png).

Pipeline:
  1. reference/brand/mark.svg is the MASTER (hand-recreated vector of the
     official logo; logo-original.jpeg is the visual reference).
  2. Render it transparent at 1024 with headless Chrome (see README).
  3. Run this script to compose the dark-square icons.
"""
from PIL import Image
mark = Image.open("public/brand-mark.png").convert("RGBA")
BG = (10, 10, 12, 255)
def icon(size, frac=0.72):
    c = Image.new("RGBA", (size, size), BG)
    m = int(size * frac)
    mk = mark.resize((m, m), Image.LANCZOS)
    c.paste(mk, ((size - m) // 2, (size - m) // 2), mk)
    return c
icon(512).save("public/icon-512.png")
icon(180).save("public/apple-touch-icon.png")
icon(32, 0.86).save("public/favicon-32.png")
print("icons written")
