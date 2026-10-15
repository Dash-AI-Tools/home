---
name: Dash AI Open Source
description: A character-goods catalog for small open-source tools. Each project is a named plate with a birthday and one line.
colors:
  navy: "#12224a"
  violet: "#7b2ff7"
  violet-text: "#6320d8"
  violet-text-dark: "#b79bff"
  ink-soft: "#3b4a78"
  ground: "#ede7ff"
  ground-2: "#e2d9fb"
  surface: "#ffffff"
  keyline: "#ffffff"
  lilac: "#f7f3ff"
  sky: "#dcebff"
  rose: "#ffe2ee"
  sun: "#fff0bf"
  mint: "#d3f6e4"
  rose-ribbon: "#ff5c9a"
  sun-ribbon: "#f5a300"
  mint-ribbon: "#12b87a"
  code-ink: "#ece8ff"
  night-ground: "#0c1330"
  night-ground-2: "#121b40"
  night-surface: "#172250"
  night-ink: "#f1eeff"
  night-ink-soft: "#b6bfe0"
  night-ring: "#3b4a8a"
  night-code: "#060a1d"
  night-lilac: "#1c2556"
  night-sky: "#15305a"
  night-rose: "#5c1e48"
  night-sun: "#52430a"
  night-mint: "#153a30"
typography:
  display:
    fontFamily: "'Fredoka Variable', 'Fredoka', ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Fredoka Variable', 'Fredoka', ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Fredoka Variable', 'Fredoka', ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Fredoka Variable', 'Fredoka', ui-rounded, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  ai-face:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "0.01em"
rounded:
  pill: "999px"
  plate: "34px"
  panel: "28px"
  hero-plate: "44px"
  inset: "20px"
  field: "22px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  plate-gap: "clamp(14px, 2vw, 24px)"
  section: "clamp(48px, 7vw, 96px)"
  plate-pad: "clamp(18px, 2vw, 26px)"
  max: "1360px"
components:
  plate:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.navy}"
    rounded: "{rounded.plate}"
    padding: "26px"
  name-pill:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "8px 20px 9px"
  name-pill-violet:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "8px 20px 9px"
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-violet:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  chip-selected:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
---

# Design System: Dash AI Open Source

## Overview

**Creative North Star: "The Character Catalog"**

The org is a character-goods catalog. Each project is a plate: a pastel card with a white keyline, a small mascot built only from the Dash AI slash mark, a quoted function label, a navy name pill, a birthday and one line. The page reads like a shelf of collectible goods, not a SaaS landing page. It is flat and friendly, with rounded display type and fat outlines, but it carries real engineering facts (MIT, screenshots, Docker, Postgres) in plain words.

Navy and violet are the only saturated colors in the chrome. Everything else is a pastel ground or one pastel per plate, with a single saturated "ribbon" color per project drawn on its character's slash. Light and dark are both first-class: dark swaps the grounds and flips the ink without changing the structure.

The build departs from the original first-viewport sketch (one tall lead plate plus a 2x2 grid). The shipped hero is a three-plate roster: DocMyRepos (hatched), openspec-hud (unhatched egg) and "Your idea" (unhatched egg), under a headline and intro.

**Key Characteristics:**
- Pastel plate per project on a lavender ground, white keyline plus navy ring around every raised object.
- Characters drawn from the slab-and-slash mark only; hatched characters have eyes, unhatched ones are dashed outlines with closed lids.
- Fredoka for display and labels, Figtree for reading text.
- Pill is the only control shape; large soft radii on every panel.
- Straight-quoted function label on every plate.

## Colors

A lavender catalog shelf: one cool pastel ground, five pastel plate tones, navy ink, and violet as the single accent.

### Primary
- **Slab Navy** (#12224a): text ink in light mode, the name pill, primary button, code block, the mark's slab, and the ring around raised objects.
- **Slash Violet** (#7b2ff7): the mark's slash, focus outlines, selection, selected chips and tabs, violet buttons, the "Coming soon" status pill, link underlines on plates, scrollbars.
- **Violet Ink** (#6320d8; #b79bff in dark): violet used as text on pastel (quote labels, the hero accent word). Always use this, never the bright violet, for text on a pastel.

### Secondary (plate tones and their ribbons)
- **Lilac** (#f7f3ff), the default plate and DocMyRepos; ribbon is Slash Violet.
- **Sky** (#dcebff), openspec-hud; ribbon is Slash Violet, so its name pill is violet.
- **Mint** (#d3f6e4), "Your idea"; ribbon **Mint Ribbon** (#12b87a).
- **Rose** (#ffe2ee) with **Rose Ribbon** (#ff5c9a) and **Sun** (#fff0bf) with **Sun Ribbon** (#f5a300) are defined as plate tones and used by no shipped plate; they are available for future projects.

### Neutral
- **Lavender Ground** (#ede7ff): page background. **Deep Lavender** (#e2d9fb): the tinted alternate sections and scrollbar track.
- **Paper White** (#ffffff): surfaces, keylines, chips, fields.
- **Soft Navy** (#3b4a78): secondary text.
- **Code Ink** (#ece8ff) on navy: code block text.

### Dark set
Applied by `:root[data-theme='dark']` and, when no explicit theme is chosen, by `prefers-color-scheme: dark` (`:root:not([data-theme='light'])`); both blocks carry the same values. A header toggle writes `data-theme` and persists it as `dash-theme`.
- **Night Ground** (#0c1330) page, **Night Ground 2** (#121b40) alternate sections, **Night Surface** (#172250) surfaces.
- **Night Ink** (#f1eeff) text and the inverted name pill and primary button (with navy text); **Night Ink Soft** (#b6bfe0) secondary text.
- **Night Ring** (#3b4a8a) outlines; the keyline becomes the ground color so the plate edge reads as a cut-out.
- Plate tones go deep: Night Lilac (#1c2556), Sky (#15305a), Rose (#5c1e48), Sun (#52430a), Mint (#153a30). Ribbons stay saturated. The character slab becomes light (#e9e4ff) and the eyes invert.

### Named Rules
**The Two Saturated Rule.** Navy and violet are the only saturated colors in structure. Ribbon colors appear only on a character's slash.
**The Violet Ink Rule.** Violet as text always uses the text-safe value (#6320d8 light, #b79bff dark); bright violet is for fills, outlines and decoration.
**The Ink Inversion Rule.** Dark mode inverts navy fills (name pill, primary button) to Night Ink with navy text rather than keeping navy on navy.

## Typography

**Display Font:** Fredoka Variable (with Fredoka, ui-rounded, system-ui)
**Body Font:** Figtree Variable (with Figtree, system-ui)

**Character:** Fredoka is the bubble-faced voice of the catalog: headings, names, buttons, chips, labels. Figtree carries paragraphs, the wordmark and the AI letters. Code uses the system monospace stack.

### Hierarchy
- **Display** (700, clamp 2.6-4.5rem, 1, -0.03em): the single hero h1, max 14ch.
- **Headline** (700, clamp 2-3.6rem, 1, -0.02em): section h2; the closer is larger (up to 4.6rem, -0.03em).
- **Title** (600-700, 1.3-2.7rem, 1): plate names (1.3-1.75rem; lead 1.8-2.5rem), spec-list h3 (1.7-2.7rem), step headings (1.9rem).
- **Body** (400, 1.125rem, 1.55): paragraphs; secondary copy 1-1.05rem in Soft Navy; prose capped at 44-58ch.
- **Label** (Fredoka 600-700, 0.9-1.25rem): quote labels (0.9rem, 0.06em), buttons (1.25rem), chips (1.1rem), plate links (1.1rem).

### Named Rules
**The Straight Quote Rule.** Function labels and the spec-list headings are wrapped in straight ASCII double quotes ("). Curly quotes are not used; the spec list generates its marks in CSS and the plate label includes them in markup.
**The AI Face Rule.** The letters "AI" inside headings are wrapped in the `ai` class and set in Figtree 800 (+0.01em), because Fredoka's capital I reads as a lowercase l. In the wordmark, "AI" is Figtree 300 beside "Dash" in Figtree 800.
**The Display-Is-Rounded Rule.** Headings, names and controls are Fredoka; body copy is never Fredoka.

## Layout

A single centered wrap, `min(100% - 2 x gutter, 1360px)`, with a fluid gutter of 16-56px. Sections use fluid vertical padding of 48-96px and alternate between the ground and the tinted Deep Lavender band. Sticky 64px header with a blurred ground wash.

The hero is a headline-and-intro row (side by side from 960px, stacked below) over the roster. The roster is one column on phones, two columns from 560px, three equal columns from 960px, with plates stretching to equal height and the link pinned to the bottom. Other sections use two-column splits at 860-960px: character beside copy (About, openspec-hud, survey head, closer), a 240px tab rail beside the screenshot stage, 5fr/7fr for the spec list and quickstart. Everything collapses to a single column below.

Gaps are 14-24px between plates, 12px between chips, 40px between spec columns. Screenshot images scroll sideways (min 760px) on phones rather than shrinking.

## Elevation & Depth

Flat fills with a physical-goods lift. Every raised object (plates, screenshot stage, code block, step cards, buttons) stacks a keyline border, a 3px navy ring and a soft drop shadow. There are no offset hard shadows.

### Shadow Vocabulary
- **Goods Lift** (`box-shadow: 0 14px 28px -12px rgb(18 34 74 / 0.32), 0 3px 6px -2px rgb(18 34 74 / 0.14)`; dark: `0 18px 30px -14px rgb(0 0 0 / 0.7), 0 3px 6px -2px rgb(0 0 0 / 0.4)`): resting depth for plates, panels and buttons.
- **Keyline Ring** (`border: 5px solid keyline` plus `box-shadow: 0 0 0 3px ring`): the double outline on plates, stage, code and step cards. Inset screenshots use 4px keyline plus 3px ring.

### Named Rules
**The Cut-Out Rule.** Raised objects always carry the keyline plus ring pair; the keyline is white in light mode and the ground color in dark mode.

## Shapes

Round everywhere. Pills (999px) for every control, name, status, chip, tab and link tag. Plates 34px, panels and cards 28px, the openspec-hud feature plate 44px, inset screenshots 20px, textarea 22px, focus ring 6px. Characters are rounded slabs with a slanted slash; the slab is the left, rounded block, the slash a tilted bar at the right. Outlines are thick (3-5px). Dashed 44/34 strokes mark an unhatched character.

## Components

### Plate
The core unit. A flex column on a tone background, 34px radius, keyline plus ring plus Goods Lift. Anatomy, top to bottom:
1. **Quoted function label**, right-aligned, Fredoka 700 0.9rem, 0.06em, Violet Ink, written in capitals inside straight quotes: "DOCS SEARCH".
2. **Character**, full width (max 360px in the three-roster), the slab-and-slash mark with a face.
3. **Name pill**, Fredoka 600, navy pill with white text (inverted in dark). The sky plate (openspec-hud) uses a violet pill with white text, because its ribbon is violet.
4. **Born line**, Figtree 700 0.95rem, ink: status and date, for example "Live · MIT · born 9 Oct 2026".
5. **Description**, 1rem Soft Navy, max 44ch.
6. **Link**, Fredoka 600 1.1rem, underlined with a 3px violet rule and a trailing arrow, pinned to the bottom (`margin-top: auto`).
Optional at-a-glance chips ("Self-hosted", "Markdown + OKF") sit between description and link: white pills with a 3px ring border.
The whole plate is an anchor; hover lifts 5px and tilts -0.5deg. Plates enter with a 0.9s staggered pop (70ms per index). Eyes blink on hover and pupils follow the pointer; reduced motion disables both.

### Egg (unhatched plate)
Same anatomy, `kind="egg"`. The character has no fill: slab and slash are dashed outlines (18px stroke, dash 44/34) in the slab and ribbon colors, with closed-lid arcs and a small mouth instead of eyes and pupils. The born line states the truth in plain words ("Coming soon", "Not hatched yet"), never a date it cannot back. Hover wiggles the body. The same unhatched character is reused on the openspec-hud feature plate and the survey head.

### Buttons
Pill, Fredoka 600 1.25rem, 16px 28px, Goods Lift. Primary is navy with white text (inverted in dark); Violet has white text; Ghost is transparent with a 3px inset ring. Hover lifts 3px and tilts -1deg, with the arrow nudging 4px right; active settles back. Disabled drops to 0.6 opacity.

### Ruled spec list
A borderless list divided by 3px ring rules above each item and below the last. Each row is a two-column grid (5fr/7fr from 860px): a Fredoka h3 wrapped in straight violet-ink quotes on the left and a Soft Navy paragraph (max 58ch) on the right. No cards, no icons.

### Survey chips and field
Multi-select chips are hidden checkboxes behind pills: white fill, 3px ring, Fredoka 600 1.1rem. Hover lifts and tilts; checked fills violet with white text; focus draws the 3px violet outline. Beneath is a labelled textarea (22px radius, 3px ring) and a violet send button with a status note. The same pill treatment is used by the screenshot tabs (vertical rail from 960px, scrolling row below, selected state violet).

### Code block
Navy block, keyline plus ring, 28px radius, system monospace 0.95rem at 1.75 line height. Comments #9aa6d8, prompt marks #b79bff, and a violet pill Copy button top right.

### Navigation
Wordmark (mark at 46px plus "Dash AI") at left; text links (600, 1rem) that underline on hover and a 44px round theme toggle with a ring border that rotates on hover. Section links hide below 720px.

## Do's and Don'ts

### Do:
- **Do** give every project its own plate: tone, ribbon, quoted function label, name pill, born line, one-line description, link.
- **Do** draw characters only from the slab-and-slash mark; hatched ones with eyes, unhatched ones as dashed eggs.
- **Do** keep the quote label in straight ASCII quotes and literal in meaning.
- **Do** set "AI" in headings with the `ai` class (Figtree 800).
- **Do** use Violet Ink for violet text on pastels and put bright violet on fills and outlines.
- **Do** ship both themes: define every new color as a light/dark pair and mirror it in the `data-theme` and `prefers-color-scheme` blocks.
- **Do** use the keyline plus ring pair on any raised object.

### Don't:
- **Don't** use curly quotes around labels.
- **Don't** add a third saturated color to the chrome; extra hues belong on a ribbon only.
- **Don't** use hard offset shadows; depth is the soft Goods Lift plus the ring.
- **Don't** set body copy in Fredoka or headings in system fonts.
- **Don't** fill an egg or give it eyes; it stays unhatched until the project ships.
- **Don't** build the dark hero, screenshot, three-feature-cards template.
- **Don't** show a project that is not real, or invent features, dates or stats for an unhatched plate.
