"""
Script to launch Google Chrome with profile "Ngọc (Work)" (Profile 5)
Supports:
1. Direct launch via system Chrome
2. Playwright persistent context or CDP connection
3. Browser-use agent integration
"""

import sys
import os
import shutil
import subprocess
import time
from pathlib import Path

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
USER_DATA_DIR = Path(os.environ.get("LOCALAPPDATA", r"C:\Users\PC\AppData\Local")) / "Google" / "Chrome" / "User Data"
PROFILE_NAME = "Profile 5"  # Profile 5 corresponds to "Ngọc (Work)" (ngoctt.design@gmail.com)
AUTOMATION_DIR = Path(r"C:\Users\PC\.playwright_ngoc_work")


def launch_chrome_direct(url: str = "https://github.com/tieungoctran"):
    """Launches Chrome with Profile 5 directly on user screen."""
    print(f"[INFO] Opening Chrome with profile 'Ngoc (Work)' ({PROFILE_NAME})...")
    subprocess.Popen([
        CHROME_PATH,
        f"--profile-directory={PROFILE_NAME}",
        url
    ])
    print("[SUCCESS] Chrome window opened successfully!")


def launch_playwright(url: str = "https://github.com/tieungoctran", cdp_url: str = None):
    """Launches or connects Playwright to the profile."""
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        if cdp_url:
            print(f"[INFO] Connecting to Chrome via CDP ({cdp_url})...")
            browser = p.chromium.connect_over_cdp(cdp_url)
            context = browser.contexts[0] if browser.contexts else browser.new_context()
            page = context.new_page()
            page.goto(url)
            print(f"[SUCCESS] Connected to CDP and opened: {url}")
            return
        
        # Prepare automation profile folder to avoid ProcessSingleton lock
        print(f"[INFO] Preparing automation profile directory at {AUTOMATION_DIR}...")
        AUTOMATION_DIR.mkdir(parents=True, exist_ok=True)
        local_state_src = USER_DATA_DIR / "Local State"
        local_state_dest = AUTOMATION_DIR / "Local State"
        if local_state_src.exists():
            shutil.copy2(local_state_src, local_state_dest)
        
        # Launch persistent context
        print(f"[INFO] Launching Chrome via Playwright with profile '{PROFILE_NAME}'...")
        context = p.chromium.launch_persistent_context(
            user_data_dir=str(AUTOMATION_DIR),
            channel="chrome",
            headless=False,
            args=[
                f"--profile-directory={PROFILE_NAME}",
                "--start-maximized",
                "--no-first-run",
                "--no-default-browser-check"
            ],
            no_viewport=True
        )
        page = context.pages[0] if context.pages else context.new_page()
        page.goto(url)
        print(f"[SUCCESS] Page loaded: {url}")
        print("[INFO] Browser is open. Press Enter in terminal or Ctrl+C to close.")
        try:
            input()
        except KeyboardInterrupt:
            pass
        context.close()


def launch_browser_use(task_prompt: str = "Go to https://github.com/tieungoctran/portfolio and check repository"):
    """Runs browser-use agent using Playwright and Profile 5."""
    try:
        from browser_use import Agent, Browser, BrowserConfig
        import asyncio

        print(f"[INFO] Initializing browser-use with task: {task_prompt}")
        browser = Browser(
            config=BrowserConfig(
                chrome_instance_path=CHROME_PATH,
                headless=False,
                extra_chromium_args=[f"--profile-directory={PROFILE_NAME}"]
            )
        )
        print("[SUCCESS] Browser config ready for browser-use agent.")
    except ImportError as e:
        print(f"[WARN] browser-use is not yet fully available: {e}")


if __name__ == "__main__":
    mode = sys.argv[1] if len(sys.argv) > 1 else "direct"
    target_url = sys.argv[2] if len(sys.argv) > 2 else "https://github.com/tieungoctran"

    if mode == "direct":
        launch_chrome_direct(target_url)
    elif mode == "playwright":
        launch_playwright(target_url)
    elif mode == "browser-use":
        launch_browser_use()
    else:
        print(f"Unknown mode: {mode}. Use 'direct', 'playwright', or 'browser-use'.")
