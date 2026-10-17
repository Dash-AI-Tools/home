---
name: Dash AI Open Source
description: Open-source tools from Dash AI, set as a black-and-white editorial broadsheet with one purple signal.
colors:
  ink: "#0a0a0a"
  paper: "#ffffff"
  paper-tint: "#f2f2f0"
  ink-soft: "#55555a"
  hairline: "#dcdcdc"
  signal: "#6a27ee"
  signal-ink: "#5a1fd6"
  signal-wash: "#f0eafe"
  night-ground: "#0b0b0b"
  night-tint: "#141414"
  night-surface: "#101010"
  night-ink: "#f5f5f2"
  night-ink-soft: "#a5a5a0"
  night-hairline: "#2a2a2a"
  night-signal: "#8f5cff"
  night-signal-ink: "#b79bff"
  code-ground: "#0a1030"
  code-ink: "#e8ebfa"
  code-dim: "#8089b4"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 5.4vw, 4.6rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono Variable, Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  none: "0"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "clamp(64px, 9vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "46px"
    padding: "0 20px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "46px"
    padding: "0 20px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "40px"
    padding: "0 16px"
  chip-selected:
    backgroundColor: "{colors.signal-wash}"
    textColor: "{colors.signal-ink}"
  status-badge:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  band-inverted:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "clamp(64px, 9vw, 112px) 0"
  band-close:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(36px, 6vw, 72px)"
  code-block:
    backgroundColor: "{colors.code-ground}"
    textColor: "{colors.code-ink}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Dash AI Open Source

## Overview

**Creative North Star: "The Broadsheet Slash"**

The site reads like a printed broadsheet that happens to be interactive: black ink on white stock, enormous tightly tracked grotesque headlines, heavy rules that divide the page the way column rules divide a newspaper, and a single purple that appears only where the eye must land. The purple is the Dash AI slash. It is the one signal color, and the leaning slab-and-slash of the logo (a skew of -22 degrees) is the only gesture the system repeats: the closing band's block, the row-hover tick, the theme-switch wipe, the logo hover.

Density is calm and spacious. Content sits in a 1180px column with generous section padding, separated by rules rather than boxes. Real screenshots of the shipped tools are the only imagery, shown in window frames. Light and dark are both first-class; dark swaps ink and paper and brightens the purple, and the inverted bands flip with them.

**Key Characteristics:**
- Black and white with one purple signal; everything else is a tint of ink.
- Zero border radius on every surface and control.
- Rules carry hierarchy: 2px ink under the header, 3px ink atop the project register, 1px hairlines between rows.
- Display type is huge and tight (Bricolage Grotesque, 750); reading text is Geist; Geist Mono is for metadata and code.
- Inverted full-bleed bands (black in light, near-white in dark) break the page's rhythm.
- No cards: grids are divided by hairlines.

## Colors

A monochrome palette of ink and paper with a single violet signal; the violet is rare and never decorative filler.

### Primary
- **Slash Violet** (#6a27ee): the signal. Primary button fill, selection, focus outlines, the logo slash, the row-hover tick, the solid skewed block in the closing band, and the "live" status dot. Dark theme uses **Night Violet** (#8f5cff).
- **Violet Ink** (#5a1fd6): violet used as text (links, the "AI" accent word, selected chip text), tuned for contrast on paper. Dark theme uses #b79bff.
- **Violet Wash** (#f0eafe): background of a selected chip only (dark: #1a1546).

### Neutral
- **Ink** (#0a0a0a): text, all heavy rules, the logo slab, inverted band fill, selected tab fill.
- **Paper** (#ffffff): page ground and window surfaces.
- **Paper Tint** (#f2f2f0): inline code, window title bars, secondary grounds.
- **Soft Ink** (#55555a): secondary copy, captions, metadata.
- **Hairline** (#dcdcdc): 1px dividers within content and the capability grid.
- **Night Ground** (#0b0b0b), **Night Tint** (#141414), **Night Surface** (#101010), **Night Ink** (#f5f5f2), **Night Soft Ink** (#a5a5a0), **Night Hairline** (#2a2a2a): the dark theme counterparts, selected by `data-theme="dark"`.
- **Code Navy** (#0a1030, text #e8ebfa, comments #8089b4): the quickstart code block and terminal screenshot ground; the one place a colored dark appears in both themes.

### Named Rules
**The One Signal Rule.** Violet is the only chromatic color. It marks the action, the live state, and the slash; it is never used for large fills except the closing band's slash block.
**The Violet Ink Rule.** Violet as text uses Violet Ink (#5a1fd6 light, #b79bff dark); the bright violet is for fills and outlines.
**The Inversion Rule.** Inverted bands re-point the tokens (ink, soft ink, rules, surface) so every child stays legible; never hard-code a color inside a band.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Geist Variable fallback)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SF Mono, Menlo)

**Character:** A characterful grotesque set huge and compressed against a neutral, quiet reading face. Headlines are shouted in print fashion; body copy stays plain.

### Hierarchy
- **Display** (750, clamp(2.8rem, 5.4vw, 4.6rem), 0.95, -0.055em): the page h1; project pages use clamp(2.6rem, 6vw, 4.8rem).
- **Headline** (750, clamp(2.2rem, 4.6vw, 3.6rem), 1.05, -0.05em): section h2s; the closing band h2 is smaller at clamp(1.9rem, 3.8vw, 3rem), max 20ch.
- **Title** (750 in the register at 2rem, else 600 at 1.1rem; -0.03em / -0.015em): register project names and spec-grid headings.
- **Body** (400, 1.0625rem, 1.6): paragraphs capped at 68ch; the lede is clamp(1.1rem, 1.5vw, 1.25rem) in Soft Ink, max 56-62ch.
- **Label** (Geist Mono, 0.74-0.82rem, uppercase with 0.04-0.06em tracking for fact and meta terms): metadata terms, status badges, window titles, copy button.

### Named Rules
**The Mono-For-Data Rule.** Geist Mono is only for code, metadata terms, status badges, and window titles. It never sets headings or prose.
**The Tight Display Rule.** Display and headline tracking stays at -0.05em or tighter and line-height at or under 1.05; loosening it breaks the broadsheet voice.

## Layout

A single centered column of `min(100% - 48px, 1180px)` (32px gutters under 560px). Sections use fluid vertical padding of clamp(64px, 9vw, 112px). Two-column splits (hero, about, survey, quickstart) use 5fr / 7fr with a fluid gap and collapse to one column at 960px. The capability grid is three columns, two at 960px, one at 560px. The project register is a three-part row (name, description, go-arrow) that stacks at 720px. The sticky header is 60px tall. Page rhythm comes from rules and full-bleed inverted bands, not from boxes.

## Elevation & Depth

Flat. The shadow token is set to none; depth is conveyed by 2px ink borders, rules, and the inversion of whole bands. Windows, the survey form, the meta strip and the capability grid all take a 2px ink outline instead of a shadow. The header carries a subtle backdrop blur over a translucent ground.

### Named Rules
**The Flat Print Rule.** Surfaces are flat at rest and never lifted by a shadow; separation is a rule or a color inversion.

## Shapes

Square. Every radius token resolves to 0: buttons, chips, inputs, windows, status badges, the closing band, and the register arrow. The recurring non-rectangular form is the slash: a -22 degree skew (skewX(-22deg)) used for the closing band's purple block, the register hover tick, and the survey-sent sweep.

## Components

### Buttons
- **Shape:** square (0), 46px high, 0 20px padding, 600 weight, 0.98rem.
- **Primary:** Slash Violet fill with white text (dark theme: Night Violet with near-black text).
- **Ghost:** Paper fill, ink text, 1px strong-rule (ink) border. Inside inverted bands, transparent with an ink-colored border.
- **Hover / Focus:** lifts 1px, arrow icon slides 2px; focus is a 2px violet outline with 3px offset.

### Chips
- **Style:** square, 40px high, 1px ink border, ink text.
- **State:** selected shows Violet Wash fill, violet border, Violet Ink text and a check mark; selecting plays a short scale pop.

### Status badge
Mono uppercase 0.74rem, 1px ink border, square, with a dot: filled violet for live, hollow ring for open/upcoming.

### Cards / Containers
There are no cards. Containers are outlined by 2px ink (windows, survey, meta strip, capability grid) with internal hairline dividers. The capability grid is a 1px-gap grid on a hairline background; its cells are plain paper.

### Inputs / Fields
- **Style:** textarea with 1px ink border, square, paper ground, 14px 16px padding.
- **Focus:** 2px violet outline plus violet border.

### Navigation
Header: sticky, 60px, 2px ink bottom rule. Brand is the Mark plus "Dash" in bold and "AI" in light. Links are 0.95rem Soft Ink that turn ink on a Paper Tint ground on hover and for the current page. The theme toggle is a 38px square icon button; switching runs a view-transition wipe along the slash angle. Under 720px the project links hide.

### Project register (signature)
An ink 3px rule on top, rows separated by 1px ink rules. Each row: 2rem project name, Soft Ink description, mono meta list, a square-cornered go-arrow. On hover the row gains a paper background and wider inset, the name slides 14px right, a violet skewed tick draws in beside it, and the arrow fills violet.

### Inverted band
`.section.tint` is full bleed, black in light theme and near-white (#f5f5f2) in dark, with tokens re-pointed. It holds the screenshot tabs; the selected tab is filled with the band's ink.

### Closing band
A solid black (dark theme: near-white) square block with a solid Slash Violet parallelogram skewed -22 degrees at the right, behind a large headline and buttons that invert to the band's ink.

### Screenshot window
Real product screenshots in a 2px ink outlined frame with a 38px Paper Tint title bar (three dots, mono title). Light and dark screenshot variants swap with the theme.

### Code block
Code Navy ground, 0.9rem mono at 1.75 line height, 24px padding, with an absolute-positioned mono copy button that reads "Copied" for 1.8s.

### Brand mark
The Dash AI logo: a slab (ink in light, near-white in dark) with a violet slash. On hover the slab and slash slide apart.

## Do's and Don'ts

### Do:
- **Do** use ink and paper for everything and reserve Slash Violet for the action, live state and slash.
- **Do** build hierarchy with rules: 2px ink for major edges, 3px atop the register, 1px hairlines inside.
- **Do** keep radius at 0 and shadows at none.
- **Do** define every new color as a light/dark pair under `data-theme`.
- **Do** show only real screenshots of shipped tools, in the window frame.
- **Do** repeat the -22 degree slash as the only decorative gesture.
- **Do** honor reduced motion: transitions and the entrance/wipe animations switch off.

### Don't:
- **Don't** introduce a second chromatic color or pastel tones.
- **Don't** round corners or use pills.
- **Don't** wrap content in cards; divide with hairlines.
- **Don't** set headings in Geist or body copy in Bricolage Grotesque.
- **Don't** use bright violet as small text on paper; use Violet Ink.
- **Don't** invent projects, features or stats; only real tools appear.
