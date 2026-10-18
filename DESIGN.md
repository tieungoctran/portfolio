---
name: Trần Tiểu Ngọc
description: Press proof sheet portfolio for a Senior Graphic Designer (E-commerce) in HCMC
colors:
  coral: "#d34e36"
  coral-ink: "#b33d27"
  coral-tint: "#f0b4a8"
  ink: "#121212"
  paper: "#fdfbf7"
  paper-beige: "#f5f3ed"
  paper-line: "#e7e2d9"
  paper-text: "#3a3a3a"
  paper-muted: "#6b6b6b"
  process-cyan: "#3fa7cf"
  process-magenta: "#c8467f"
  process-yellow: "#e8c547"
  status-open: "#3f9a6b"
  dark-ground: "#121110"
  dark-surface: "#1a1817"
  dark-card: "#211f1d"
  dark-line: "#33302d"
  dark-text: "#a8a29b"
typography:
  display:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "clamp(4rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
  quote:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.6vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.375
  hand:
    fontFamily: "Birthstone, cursive"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0px"
  sm: "2px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  section-mobile: "56px"
  section: "112px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.coral-ink}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-beige}"
  social-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "40px"
  spec-table:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  signoff-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "64px 56px"
---

# Design System: Trần Tiểu Ngọc

## Overview

**Creative North Star: "The Press Proof Sheet"**

The site is set like a print shop proof of the designer's own work. Cream proof stock, thin ink hairlines, crop marks outside the trim, registration targets and a CMYK control strip carry the world; the measured results are the printed artwork. A proofer's coral pen is the only hand on the sheet: it circles, points and signs off, and nothing else is coral.

Density is editorial and calm: wide gutters, one reading axis, hairline rules instead of boxes, square corners. Warmth comes from the paper tint and the handwritten notes, never from saturation. Light and dark are equal citizens: in dark mode the sheet becomes a dark proof on ink ground and the pen turns to the coral tint.

**Key Characteristics:**
- Cream paper and ink, coral reserved for the proofer's pen and interaction states.
- Print-production marks (crop marks, registration mark, CMYK strip) as the only ornament.
- Hairline rules and tonal bands for structure; square or near-square corners.
- Be Vietnam Pro headings and numerals, Montserrat body, Montserrat Italic quotes, Birthstone for short handwritten notes.
- Tabular figures for every number, slug and date.
- Mobile shortened with horizontal snap rails and two-column spec grids.

## Colors

A warm paper-and-ink palette with one coral pen and three process inks held to the print motif.

### Primary
- **Proofer's Coral** (coral): the pen. Hand-drawn circles and leaders, active-nav underline, link underline decoration, bullet squares, text selection. Large marks and lines only.
- **Coral Ink** (coral-ink): coral at text sizes (role line, handwritten notes, link hover, primary button hover, focus outline). Passes AA on paper.
- **Coral Tint** (coral-tint): the pen and every coral role on dark grounds, plus dark-mode selection and focus.

### Secondary
- **Process Cyan, Magenta, Yellow** (process-cyan, process-magenta, process-yellow) with Ink as K: the CMYK control strip (100 / 50 / 25 percent patches mixed toward paper), the plate-register ghosts on the display numeral, and the C/M/Y/K separation tabs. Nowhere else.

### Neutral
- **Proof Ink** (ink): headings, primary text, primary button fill, the sign-off block ground.
- **Proof Stock** (paper): page ground and the proof sheet itself; text on ink.
- **Light Table Beige** (paper-beige): tonal bands (hero ground, workflow band, footer, active tab, tab panel) and secondary hover fill.
- **Hairline** (paper-line): every rule, divider and border in light mode.
- **Body Graphite** (paper-text) and **Slug Grey** (paper-muted): body copy, then captions, slugs and dates.
- **Dark proof set** (dark-ground, dark-surface, dark-card, dark-line, dark-text): page ground, sheet and bands, raised cards and the dark sign-off, rules, and body text in dark mode.
- **Open Green** (status-open): the Open to Work dot and the copied-email check only.

### Named Rules
**The One Pen Rule.** Coral is the proofer's pen. It marks, points, signs and reacts to hover or focus; it never fills a section, card or large surface.

**The Control Strip Rule.** Cyan, magenta and yellow appear only as process inks inside the print motif (control strip, plate ghosts, separation tabs). They never colour text, buttons or backgrounds.

**The Two Proofs Rule.** Every component ships light and dark together; a dark-mode coral is always coral-tint, never coral.

## Typography

**Display Font:** Be Vietnam Pro (with system-ui, sans-serif), weights 500 to 800
**Body Font:** Montserrat (with system-ui, sans-serif), 400 to 700 plus italic 400/500
**Handwriting:** Birthstone (with cursive)

**Character:** A crisp Vietnamese-ready grotesk sets the facts; a round geometric sans carries the reading; one italic voice for quotes; a single handwritten script as the proofer's signature.

### Hierarchy
- **Display** (800, clamp(4rem, 11vw, 6rem), 0.85, -0.04em, tabular): the single hero numeral only.
- **Headline** (700, clamp(2.25rem, 5vw, 3.5rem), 1.15, -0.03em): the page H1.
- **Title** (700, 1.875rem to 2.25rem, 1.2, -0.02em): section H2s, balanced wrap. Card and panel H3s step down to 1.125rem to 1.75rem at snug leading.
- **Spec figure** (700, 1.75rem to 1.875rem, -0.02em, tabular): measured results in spec columns.
- **Body** (400, 15px, 1.625): intros and panels, max 62ch; 13px to 14px in cards and lists.
- **Label / Slug** (400 to 600, 11px to 12px, tabular): job slug line, captions, dates, read times. Sentence case.
- **Quote** (Montserrat Italic, clamp(1.35rem, 2.6vw, 2rem), snug): the tagline and core belief.
- **Hand** (Birthstone, 1.375rem to 2.75rem, leading 1, rotated -2deg, coral-ink or coral-tint): short notes and the signature.

### Named Rules
**The Leader Rule.** Birthstone is only for a few words, and each note is tied to the fact it annotates by a pen leader or sits as a signature under a quote or portrait. Never a heading, never a paragraph.

**The Explicit Leading Rule.** A responsive Tailwind text size resets line-height, so every multi-line Vietnamese heading that changes size at a breakpoint repeats its leading at that breakpoint (for example a 1.2 heading sets it again with the sm prefix).

**The Unbroken Compound Rule.** "E-commerce" and "2D/3D" never break at the hyphen or slash; wrap them in a nowrap span in headings, roles and labels.

**The Tabular Figures Rule.** Numbers, dates, slugs and years use tabular figures.

## Layout

One centred container (1152px max) with 16px gutters on mobile and 24px from sm. Sections breathe at 56px vertical padding on mobile and 112px from sm, alternating paper and beige bands. Desktop uses a 12-column grid with a 7/5 or 8/4 split between content and a spec or intro column; section heads put the H2 on 7 columns and the intro on 5, bottom-aligned.

Mobile is deliberately short. Repeating sets (workflow steps, principles, projects) become horizontal snap rails that bleed to the screen edge, each item 84% wide (60% from sm), and turn into grids at md or lg. Short paired facts (hero spec column, sign-off reasons, footer link columns) sit in two-column grids rather than stacking. No horizontal page overflow at 375px.

**The Rail Not Stack Rule.** On mobile, a set of three or more parallel items becomes a snap rail or a two-column grid; it is never a long single-column stack.

## Elevation & Depth

Flat by default. Depth comes from tonal bands (paper against beige, or ground against surface in dark) and hairline rules. One exception exists: the hero proof sheet carries a soft, low ambient shadow because it is the physical sheet lifted off the light table.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 24px 48px -28px rgba(18,18,18,0.45)`; dark `0 24px 48px -28px rgba(0,0,0,0.9)`): the hero proof sheet only.

### Named Rules
**The One Sheet Rule.** Only the hero proof sheet casts a shadow. Cards, tabs, buttons and panels stay flat.

## Shapes

Square corners everywhere structural (sheet, panels, spec tables, image frames, sign-off block). Interactive controls use a barely-softened 2px corner. Fully round shapes are limited to the status dot and scrollbar thumb; bullets are small squares. Image frames carry crop marks just outside the trim instead of borders or radii.

## Components

### Buttons
- **Shape:** near-square (2px).
- **Primary:** ink fill, paper text, 14px by 20px, 14px semibold, leading icon (mail) and trailing arrow. Dark: paper fill, ink text.
- **Hover / Focus:** fill shifts to coral-ink (dark: coral-tint); focus is a 2px coral-ink outline at 3px offset (dark: coral-tint).
- **Secondary:** transparent with 1px ink border, hover fills beige (dark: card). On the ink sign-off block, the secondary border is paper at 40% and firms to full paper on hover.
- **Text action:** small Montserrat link with arrow, coral underline decoration (2px), hover to coral-ink.

### Cards / Containers (Proof cards)
- **Corner Style:** square.
- **Background:** none; the image sits on beige (dark: card) inside crop marks, 16:10.
- **Shadow Strategy:** none (see Elevation).
- **Caption:** 11px tabular slug with a registration mark, category and year; stock covers add the label "Ảnh minh họa tạm thời".
- **Hover:** image scales to 1.03 over 700ms, title turns coral-ink, arrow nudges up-right.

### Spec tables
Bordered hairline lists on paper (dark: ground), two columns of muted key and semibold ink value, 12px by 16px rows, hairline dividers.

### Separation tabs
Four C/M/Y/K tabs in a grid (2 up mobile, 4 up desktop). Each carries a 28px square plate chip in its process ink with the letter; the selected tab gains a 3px top rule in its ink and a beige fill. Full arrow-key, Home and End support.

### Navigation
Sticky 64px bar, paper at 95% with a light backdrop blur and a bottom hairline. Registration mark plus name (and role from sm) at left; 14px medium links; active link is ink semibold with a 2px coral underline. Theme toggle and a compact primary "Nhận CV" button at right. Mobile menu is a hairline-ruled list with a coral square marking the active page and a full-width primary button.

### Social icons
Four brand marks only (LinkedIn, Behance, Substack, Pinterest), inline SVG in currentColor inside 40px hairline-bordered squares; hover inverts to ink fill and paper glyph.

### Print marks (signature)
- **Crop marks:** four L-shaped 1px hairlines just outside a frame's corners, ink at 50% (dark: paper at 40%).
- **Registration mark:** ring, crosshair and dot in currentColor; logo glyph, slug prefix, workflow stations.
- **CMYK strip:** twelve patches (four inks at 100 / 50 / 25 percent mixed toward paper), horizontal 6px to 8px on top of the hero (mobile), footer and sign-off; vertical 10px on the hero sheet edge from lg.
- **Pen circle and pen leader:** coral strokes (3.2px and 2.4px, round caps) that draw once on load.

### Motion
Precise like a press: one signature ease `cubic-bezier(0.16, 1, 0.3, 1)`, no overshoot, durations 150ms (hover), 320ms (state), 700ms (entrance). Code lives in `src/lib/motion.ts`, `src/components/motion/` and the motion block of `src/index.css`.

- **Load clock:** the hero numeral's three process ghosts slide into register over 1.1s (0.25s delay) and fade while the numeral counts up to 5,000+; then the pen draws over 0.9s at 1.15s.
- **Ink pass (the only entrance):** blocks print left to right (clip-path) with an 8px rise when first scrolled into view, staggered 60 to 90ms, total under 400ms. Route changes get one short 0.42s ink pass.
- **Measured figures count up** once when visible (900ms, quartic ease-out); the final figure reserves the width and is what screen readers hear.
- **Reading progress:** a 3px CMYK control strip prints across the top edge with scroll.
- **Separation tabs:** a newly selected plate prints in (0.32s). **Press line:** the workflow line draws between registration marks as its stations appear.
- **Proof cards:** on hover or keyboard focus the trim marks step out 4px; the cover scales to 1.03.
- **Morphing icons** (`morphicons`, Lucide data from `lucide`): theme sun and moon, menu and close, copy and check.
- **Safety:** hidden states apply only under `html.motion-ready`, set by Layout when JS runs and motion is allowed, so content is visible without JS. Reduced motion removes every animation: figures show final values, the pen is drawn, the progress strip is hidden, icons swap without morphing.

## Do's and Don'ts

### Do:
- **Do** design every element in light and dark together, swapping coral for coral-tint on dark grounds.
- **Do** frame imagery with crop marks and a tabular slug caption, and label stock covers "Ảnh minh họa tạm thời".
- **Do** tie every Birthstone note to its fact with a pen leader, or use it as a signature.
- **Do** repeat leading at each breakpoint for multi-line headings and keep "E-commerce" unbroken.
- **Do** turn mobile sets into snap rails or two-column grids to cut scroll length.
- **Do** use hairline rules and tonal bands for structure.

### Don't:
- **Don't** put eyebrow or kicker labels above headings; the H2 opens the section.
- **Don't** add shadows beyond the hero sheet lift, and never a hard offset shadow.
- **Don't** use cyan, magenta or yellow outside the print motif, or coral as a fill.
- **Don't** use Birthstone for headings, body or anything longer than a short note.
- **Don't** add social icons beyond LinkedIn, Behance, Substack and Pinterest, or render them as glyph characters.
- **Don't** use em dashes in site copy.
- **Don't** round cards or panels; controls stop at 2px.
