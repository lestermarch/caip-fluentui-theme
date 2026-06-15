"""Render the Fluent showcase to light + dark PNGs for the README."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:5181/"
OUT = Path(__file__).parent

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1280, "height": 900}, device_scale_factor=2)
    page = ctx.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(800)
    page.screenshot(path=str(OUT / "showcase-light.png"), full_page=True)
    print(f"wrote {OUT / 'showcase-light.png'}")

    page.click('label:has-text("Light theme")')
    page.wait_for_timeout(500)
    page.screenshot(path=str(OUT / "showcase-dark.png"), full_page=True)
    print(f"wrote {OUT / 'showcase-dark.png'}")

    browser.close()
