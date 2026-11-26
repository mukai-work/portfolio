"""サイト共通のOG画像（opengraph-image.png・twitter-image.png、1200×630）を作る。

scripts/og_image.html をブラウザで開いて撮るだけ。文言を変えるときは HTML を直してから
  py -3.11 scripts/make_og_image.py
"""
import shutil
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
HTML = ROOT / "scripts" / "og_image.html"
OG = ROOT / "src" / "app" / "opengraph-image.png"
TW = ROOT / "src" / "app" / "twitter-image.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    page.goto(HTML.as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    ok = page.evaluate("document.fonts.check('700 32px \"Noto Sans JP\"')")
    if not ok:
        raise SystemExit("Noto Sans JP が読み込めていません（ネット接続を確認）")
    page.screenshot(path=str(OG), clip={"x": 0, "y": 0, "width": 1200, "height": 630})
    browser.close()

shutil.copyfile(OG, TW)
print("保存:", OG)
print("保存:", TW)
