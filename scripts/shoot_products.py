"""製品デモ（/hakaru・/helpia）の画面を撮って public/products/ に保存する。

使い方: next start -p 3456 を起動した状態で  py -3.11 scripts/shoot_products.py [ベースURL]
製品の見た目や数字を変えたら撮り直す。
"""
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3456"
OUT = Path(__file__).resolve().parent.parent / "public" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# (保存名, パス, 撮る前に見せたい要素, クリックする要素)
SHOTS = [
    ("hakaru-overview", "/hakaru", ".stacks", None),
    ("hakaru-diff", "/hakaru", "article.item", None),
    ("helpia-overview", "/helpia", ".share", None),
    ("helpia-bars", "/helpia", ".bars", ".tabs button:nth-child(2)"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 750}, device_scale_factor=2)
    for name, path, anchor, click in SHOTS:
        page.goto(BASE + path, wait_until="networkidle")
        page.wait_for_selector(anchor)
        if click:
            page.click(click)
        el = page.locator(anchor).first
        el.scroll_into_view_if_needed()
        # 見せたい要素の少し上から、本文の幅（main.wrap）だけを 16:10 で切り取る。
        # 左右の余白を入れないので、画面の中の文字が大きく見える
        box = el.bounding_box()
        top = max(0, box["y"] + page.evaluate("window.scrollY") - 60)
        page.evaluate(f"window.scrollTo(0, {top})")
        page.wait_for_timeout(300)
        wrap = page.locator("main.wrap").bounding_box()
        width = wrap["width"]
        dest = OUT / f"{name}.png"
        page.screenshot(path=str(dest), clip={"x": wrap["x"], "y": 0, "width": width, "height": width * 10 / 16})
        print("保存:", dest)
    browser.close()
