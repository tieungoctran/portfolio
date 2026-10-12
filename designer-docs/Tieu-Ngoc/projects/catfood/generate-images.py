"""Generate Miu Miu cat food ad images using Gemini Pro (Nano Banana Pro)."""

import os
import sys
from pathlib import Path

from google import genai
from google.genai import types

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).resolve().parents[2] / ".env")
    API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    print("ERROR: GEMINI_API_KEY not set"); sys.exit(1)

client = genai.Client(api_key=API_KEY)
MODEL = "gemini-3-pro-image-preview"
OUT = Path(__file__).parent / "images"
OUT.mkdir(exist_ok=True)

BASE_STYLE = (
    "Ultra HD photorealistic advertisement image, solid rich teal-green background color (#007B69), "
    "4:5 portrait aspect ratio, premium studio lighting, warm cozy commercial pet advertisement style. "
    "Clean minimal composition. No text overlay anywhere in the image. "
    "Ultra realistic, high-quality commercial pet food advertisement style. "
)

POUCH_DESC = (
    'a light green and teal colored stand-up pouch product bag labeled "Miu Miu" '
    'with a cute cartoon cat face design (two round eyes, small nose, curved smile) '
    'in Vietnamese cat food brand style'
)

PROMPTS = {
    "01-pure-comfort": (
        f"{BASE_STYLE}"
        f"A small adorable grey tabby kitten, full body visible including tail, lying flat on its back, "
        f"viewed directly from above (bird's eye view), body compact and relaxed, tail curled gently, "
        f"eyes closed peacefully with a content blissful expression. Both front paws wrapped around and "
        f"hugging {POUCH_DESC} held close to its chest. "
        f"Beneath and around the kitten, a scattering of cat food kibble pieces (small brown/tan crunchy kibble) "
        f"covers the surface, as if the kitten has nestled itself comfortably into a bed of kibble. "
        f"A few small soft pink heart doodle accents floating near the top for a cute affectionate touch."
    ),
    "02-sunglasses": (
        f"{BASE_STYLE}"
        f"Extreme close-up macro shot of an adorable cat's face wearing large green-framed sunglasses "
        f"(matching teal-green theme color). Tight framing on the upper half of the face showing fur texture "
        f"in detail, whiskers, nose visible at bottom edge. The green sunglasses lenses act as a mirror, "
        f"reflecting a clear blue sky with soft white clouds, and within that reflection, a pair of small "
        f"cat paws are holding up {POUCH_DESC} toward the sky. "
        f"Glossy green plastic frame with realistic highlights. Warm golden sunlight on fur."
    ),
    "03-claw-machine": (
        f"{BASE_STYLE}"
        f"A miniature pastel mint-green claw machine arcade game on the right side. Inside the machine, "
        f"multiple {POUCH_DESC} pouches are visible as prizes. The claw mechanism holds one pouch. "
        f"A small tabby kitten stands on its hind legs, front paws on the prize opening, "
        f"intently looking inside at the pouches. Playful, humorous, engaging mood."
    ),
    "04-kibble-cat-silhouette": (
        f"{BASE_STYLE}"
        f"A stream of cat food kibble pieces (small brown/tan crunchy kibble, realistic texture) "
        f"pours from an open {POUCH_DESC} positioned in the top-right of the frame. "
        f"The kibble artfully forms the silhouette shape of a sitting cat in the center-bottom area. "
        f"Clever, artistic, satisfying composition. Clean and minimal."
    ),
    "05-three-cats-competing": (
        f"{BASE_STYLE}"
        f"Three adult cats of different breeds and colors (one orange tabby, one black, one Siamese) "
        f"gathered closely around a single {POUCH_DESC}, each looking intensely at the product "
        f"as if claiming it. Playful competition mood. Viewed from slightly overhead."
    ),
    "06-newspaper": (
        f"{BASE_STYLE}"
        f"A faux newspaper with fancy serif headlines laid on the teal-green background. "
        f"Two {POUCH_DESC} pouches placed on top of the newspaper as if they are the subject of news. "
        f"A cat's striped paw reaches in from the bottom-right, resting on the newspaper as if reading it. "
        f"The newspaper has faux headlines and placeholder text. Humorous, newsworthy mood."
    ),
    "07-window-reach": (
        f"{BASE_STYLE}"
        f"A tabby cat perched on a windowsill, head and front paw extending through an open window "
        f"with light blue-green wooden shutters. The cat reaches down toward {POUCH_DESC} "
        f"placed on a small wooden table just outside. Bright natural light from exterior. "
        f"Charming, mischievous, tempting mood."
    ),
    "08-spotlight-busted": (
        f"Ultra HD photorealistic advertisement image, solid black background, "
        f"4:5 portrait aspect ratio, high-contrast theatrical lighting. "
        f"A tabby cat rendered in grayscale, clutching a fully colored {POUCH_DESC}, "
        f"dramatically caught in a circular white spotlight from above on a stark black background. "
        f"The cat looks slightly startled or defiant. Only the product pouch is in full color (teal-green), "
        f"everything else is black and white. Bold, dramatic, mischievous mood."
    ),
    "09-tic-tac-toe": (
        f"{BASE_STYLE}"
        f"A game of Tic-Tac-Toe (noughts and crosses) drawn with clean white lines on the teal-green background. "
        f"Three {POUCH_DESC} pouches serve as the 'O' pieces placed in the grid. "
        f"White 'X' marks fill other squares. An orange tabby cat's paw reaches in from the right side "
        f"making the winning move. Playful, triumphant, clever mood."
    ),
    "10-shadow-cat": (
        f"{BASE_STYLE}"
        f"A single {POUCH_DESC} stands upright, casting a long distinct shadow. "
        f"The shadow is ingeniously shaped to resemble a cat silhouette, complete with pointed ears "
        f"and a tail. Strong single-source light from the right creating a sharp shadow. "
        f"Clean, minimalist, elegant, and highly conceptual composition."
    ),
}


def generate_image(name: str, prompt: str) -> bool:
    out_path = OUT / f"{name}.png"
    if out_path.exists():
        print(f"[SKIP] {name} already exists")
        return True

    print(f"[GEN] {name}...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio="1:1",
                    image_size="2K",
                ),
            ),
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data:
                with open(out_path, "wb") as f:
                    f.write(part.inline_data.data)
                print(f"[OK]  {name} -> {out_path}")
                return True

        print(f"[WARN] {name}: no image in response")
        return False

    except Exception as e:
        print(f"[ERR] {name}: {e}")
        return False


if __name__ == "__main__":
    subset = sys.argv[1:] if len(sys.argv) > 1 else list(PROMPTS.keys())
    results = {}
    for name in subset:
        if name in PROMPTS:
            results[name] = generate_image(name, PROMPTS[name])
        else:
            print(f"[SKIP] Unknown: {name}")

    ok = sum(1 for v in results.values() if v)
    print(f"\nDone: {ok}/{len(results)} images generated")
