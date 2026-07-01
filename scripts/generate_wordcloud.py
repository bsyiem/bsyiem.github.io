"""
Generates a HoloLens-shaped word cloud for the hero section.

Requirements (already installed):
    pip install "rembg[cpu]" wordcloud pillow numpy

Usage:
    1. Save the HoloLens side-profile image to:
           assets/images/hololens_source.jpg
    2. Run from the project root:
           python scripts/generate_wordcloud.py
    3. Output written to:
           assets/images/wordcloud_headset.png
"""

import io, sys, os
import numpy as np
from PIL import Image
from wordcloud import WordCloud

# ── Research keywords + relative weights ────────────────────────────────────
# Higher number = appears larger / more often
WORDS = {
    # Core concepts — largest
    "HCI":                  100,
    "XR":                    90,
    "AR":                    85,
    "VR":                    80,
    "AI":                    75,
    # Key areas — large
    "Extended Reality":      60,
    "Mixed Reality":         55,
    "Attention":             50,
    "Collaboration":         48,
    "User Behaviour":        45,
    "Design":                42,
    "Adaptive Agents":       40,
    # Supporting terms — medium
    "Immersive":             36,
    "Spatial Computing":     34,
    "Presence":              32,
    "Gaze":                  30,
    "Embodiment":            28,
    "Haptics":               26,
    "Tracking":              25,
    "Gesture":               24,
    "Perception":            24,
    "Cognition":             22,
    "Usability":             22,
    "STEM Education":        20,
    "Human Factors":         20,
    "Interaction":           20,
    "Eye Tracking":          22,
    "Spatial":               18,
    "Wearable":              18,
    "Ergonomics":            16,
    # Filler terms — small but numerous
    "Interface":             15,
    "Biometrics":            14,
    "Agency":                14,
    "Ethics":                13,
    "Display":               13,
    "FOV":                   12,
    "Depth":                 12,
    "Simulation":            12,
    "Affordance":            11,
    "Navigation":            11,
    "Spatial Audio":         11,
    "Field Study":           10,
    "Lab Study":             10,
    "Head Mounted":          10,
    "Immersion":             10,
    "Research":              10,
    "Work Practice":          9,
    "Visualisation":          9,
    "Accessibility":          9,
    "Feedback":               9,
    "Latency":                8,
    "Calibration":            8,
    "Motion":                 8,
    "Comfort":                8,
    "Task Performance":       8,
    "Social XR":              8,
    "Remote Work":            8,
    "Spatial Mapping":        8,
    "Hologram":               7,
    "Digital Twin":           7,
    "Telepresence":           7,
    "Object Recognition":     7,
    "Hand Tracking":          7,
    "Head Tracking":          7,
}

# ── Colour palette (site accent colours) ────────────────────────────────────
PALETTE = ["#1a4fa8", "#c0622a", "#1a7048", "#8a2f6b", "#111110", "#2a2a28"]

def site_color_func(word, font_size, position, orientation, random_state=None, **kwargs):
    """Assign site accent colours; larger words get the bolder hues."""
    rng = random_state or __import__("random")
    if font_size > 60:
        return rng.choice(PALETTE[:4])        # vivid accent colours
    elif font_size > 30:
        return rng.choice(PALETTE[:5])
    else:
        return rng.choice(PALETTE[2:])        # smaller = greens/dark

TARGET_LONG_EDGE = 4000   # upscale mask to this many pixels on the longer side

def build_mask(image_path: str) -> np.ndarray:
    """
    Convert a clean black-on-white silhouette image directly to a wordcloud mask.
    Wordcloud convention: 255 (white) = skip, 0 (black) = draw words.
    Upscales to TARGET_LONG_EDGE so the output PNG is high-resolution.
    """
    print("  Building mask from B&W silhouette…")
    img = Image.open(image_path).convert("L")   # grayscale

    # Upscale to high resolution
    w, h = img.size
    scale = TARGET_LONG_EDGE / max(w, h)
    new_w, new_h = int(w * scale), int(h * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    print(f"  Resized {w}x{h} to {new_w}x{new_h}")

    arr = np.array(img)
    # Dark pixels (headset) → 0 (draw words); light pixels (bg) → 255 (skip)
    mask = np.where(arr < 180, 0, 255).astype(np.uint8)
    print(f"  Mask size: {mask.shape[1]}×{mask.shape[0]}  "
          f"fill px: {(mask==0).sum():,}  bg px: {(mask==255).sum():,}")
    return mask

def generate(source_path: str, out_path: str):
    if not os.path.exists(source_path):
        print(f"\nERROR: source image not found at:\n  {source_path}")
        print("Save the HoloLens side-profile image there and re-run.\n")
        sys.exit(1)

    print(f"Source : {source_path}")
    mask = build_mask(source_path)

    print("Generating word cloud…")
    wc = WordCloud(
        mask=mask,
        background_color=None,       # transparent PNG
        mode="RGBA",
        color_func=site_color_func,
        max_words=8000,
        prefer_horizontal=0.6,
        min_font_size=2,
        max_font_size=None,
        relative_scaling=0.2,        # lower = more uniformly sized → packs tighter
        collocations=False,
        repeat=True,
        margin=0,                    # zero margin = absolute tightest packing
    ).generate_from_frequencies(WORDS)

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    wc.to_image().save(out_path, "PNG")
    print(f"Saved  : {out_path}")

if __name__ == "__main__":
    ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    generate(
        source_path=os.path.join(ROOT, "assets", "images", "hololens_source.jpg"),
        out_path   =os.path.join(ROOT, "assets", "images", "wordcloud_headset.png"),
    )
