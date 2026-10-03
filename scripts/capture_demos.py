"""業種デモ20件のスクリーンショットを撮影し public/demos/{slug}.webp に保存する。

使い方: python scripts/capture_demos.py [BASE_URL]
  BASE_URL 省略時は本番URL。ローカル確認時は http://localhost:3210 などを渡す。
撮影は Chrome のヘッドレスモード（追加依存なし）、変換は Pillow。
"""

import re
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
BASE = sys.argv[1] if len(sys.argv) > 1 else "https://portfolio-three-blond-25spxsuyxc.vercel.app"
OUT = ROOT / "public" / "demos"
WIDTH, HEIGHT = 1280, 800
THUMB_WIDTH = 960


def slugs() -> list[str]:
    src = (ROOT / "src" / "data" / "demos.ts").read_text(encoding="utf-8")
    return re.findall(r'slug:\s*"([^"]+)"', src)


def capture(slug: str, tmp: Path) -> Path:
    png = tmp / f"{slug}.png"
    subprocess.run(
        [
            CHROME,
            "--headless=new",
            "--hide-scrollbars",
            "--disable-gpu",
            f"--window-size={WIDTH},{HEIGHT}",
            "--virtual-time-budget=10000",
            f"--screenshot={png}",
            f"{BASE}/demos/{slug}",
        ],
        check=True,
        capture_output=True,
        timeout=90,
    )
    return png


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as d:
        tmp = Path(d)
        for slug in slugs():
            png = capture(slug, tmp)
            img = Image.open(png).convert("RGB")
            h = round(img.height * THUMB_WIDTH / img.width)
            img = img.resize((THUMB_WIDTH, h), Image.LANCZOS)
            dest = OUT / f"{slug}.webp"
            img.save(dest, "WEBP", quality=78, method=6)
            print(f"{slug}: {dest.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
