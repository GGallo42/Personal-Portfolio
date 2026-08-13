---
name: Field Notebook No. 001
description: A personal engineering portfolio built as the lab notebook the work was recorded in — black drafting stock, a printed graticule, oxblood bookcloth and a red correction pen.
colors:
  pad: "#17171a"
  pad-lift: "#202024"
  pad-sink: "#101012"
  ink: "#f0ece2"
  ink-soft: "#a29c90"
  oxblood: "#5a1f27"
  cloth-ink: "#f4eee4"
  pen: "#ef6a5c"
  accent-text: "#ef6a5c"
  grid-minor: "rgba(196, 206, 226, 0.09)"
  grid-major: "rgba(196, 206, 226, 0.18)"
  margin-rule: "rgba(239, 106, 92, 0.48)"
  rule: "rgba(239, 106, 92, 0.24)"
  rule-soft: "rgba(240, 236, 226, 0.14)"
  tape: "rgba(216, 206, 178, 0.42)"
  tape-edge: "rgba(184, 172, 140, 0.36)"
  print-mat: "#e8e4d8"
  print-edge: "rgba(0, 0, 0, 0.5)"
  cloth-edge: "rgba(0, 0, 0, 0.6)"
  stamp-wash: "rgba(23, 23, 26, 0.4)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 7.6vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  heading:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.6rem)"
    fontWeight: 700
    letterSpacing: "-0.018em"
    fontVariation: "'wdth' 106"
  subheading:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 104"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.28rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    fontVariation: "'wdth' 100"
  control:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  control-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
  secondary:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  display-compact:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 12vw, 3.4rem)"
    fontWeight: 800
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  index:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 87.5"
  figure-label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "-0.01em"
  figure-annotation:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "10.5px"
    fontWeight: 500
    fontVariation: "'wdth' 87.5"
  figure-axis:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "9.5px"
    fontWeight: 500
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 87.5"
  designator:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 87.5"
  label:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6rem"
    fontWeight: 600
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 87.5"
  data:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.63rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 87.5"
rounded:
  square: "0"
  hair: "2px"
  tab: "4px"
spacing:
  sheet-y: "5.5rem"
  sheet-x: "3rem"
  body-indent: "2.6rem"
  column-gap: "3.5rem"
  block-gap: "2.4rem"
  spine: "78px"
  rail: "46px"
  margin-rail: "118px"
  measure: "68ch"
  page-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.pen}"
    textColor: "{colors.pad}"
    typography: "{typography.body}"
    rounded: "{rounded.hair}"
    padding: "0.92rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pad}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hair}"
    padding: "0.92rem 1.35rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.pad}"
  button-sm:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hair}"
    padding: "0.6rem 0.95rem"
  tab-index:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cloth-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "1rem 0.62rem"
  tab-index-current:
    backgroundColor: "{colors.pad-lift}"
    textColor: "{colors.ink}"
  tab-action:
    backgroundColor: "{colors.pen}"
    textColor: "{colors.cloth-ink}"
    rounded: "{rounded.tab}"
    padding: "1rem 0.62rem"
  stamp:
    backgroundColor: "{colors.stamp-wash}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.15rem"
  pen-mark:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0"
  contact-value:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 0 1px"
---

# Design System: Field Notebook No. 001

## Overview

**Creative North Star: "The Engineering Notebook the Work Was Done In"**

This is a record, not a pitch. The site presents itself as a single bound notebook — No. 001, opened 2026 — laid on black drafting stock and printed with a cool graphite graticule. An oxblood bookcloth spine runs the full height of the left edge; index tabs project from the right; each screenful is a numbered *sheet* with a margin rail, a red margin rule and a body. Projects are Entries. Skills are an Inventory. Experience is a Log. The page closes with a countersign block waiting for a witness signature.

Density is high but never crowded, because the structure does the separating. There is not one card, panel or filled tile in the build. Every division is a rule: a 1px hairline, a dotted underline, a red margin stroke, a heavy 1.5px underline beneath an inventory label. Depth exists only where a physical object genuinely sits on top of the page — the binding, the tabs, the taped-in photographic prints, a button lifting under the cursor. Everything else is flat against the stock.

The evidence is drawn, not claimed. Five hand-authored SVG figures — a measured bar plot, a pipeline block diagram, a request-path diagram, an intercept plot, a key-sharing tree — stroke themselves in as you reach them, once, at a believable pen speed. Bone-white lead carries the structure of each drawing; the red pen carries the annotation, the finding, the one thing you are meant to notice. This world explicitly refuses the dark-glass developer portfolio: no glassmorphism, no gradient orbs, no rounded pill buttons, no logo-tile skill grid.

**Key Characteristics:**
- Black drafting stock under a two-density printed graticule (20px minor, 100px major)
- Oxblood bookcloth binding and right-edge index tabs as the only chrome
- Every sheet is margin rail + red margin rule + body; designators live in the margin, never above the heading
- Rules and dotted underlines instead of cards; zero container backgrounds in the content column
- Archivo with its width axis exercised for everything readable; Martian Mono strictly for designators and measured data
- Hand-drawn ink figures that stroke in once on scroll
- Taped-in photographic prints with CSS tape, a rubber property stamp, a witness/countersign block

## Colors

A warm carbon ground, a cool graphite grid printed on it, bone-white lead for the marks, oxblood for the binding, and exactly one red pen.

### Primary
- **Correction Pen** (`pen`, #ef6a5c): The single accent, and the only saturated hue in the mark layer. It is the primary action (Download resume), the persistent Resume index tab, the margin designators, the red margin rule down every sheet, the dash bullet on findings, the inventory cross-references, the annotation stroke and callouts inside figures, the link hover state, and the focus ring. Its job is annotation — it marks what matters on a page, not decoration.
- **Accent Text** (`accent-text`, #ef6a5c): Deliberately a separate token from `pen`, aliased to it today. Its whole purpose is to keep the mark colour and the surface colour independently addressable, so a pen-filled surface can be retoned without dragging pen-coloured text with it. Use `accent-text` for red *text and strokes on the ground* (role line, record organisation, stamp), and `pen` for surfaces, rules and marks.

### Secondary
- **Oxblood Bookcloth** (`oxblood`, #5a1f27): The binding. Fills the fixed spine, the index tabs, and the sticky top band it folds into below 1000px. It is always textured with two 1px repeating gradients at a 3px pitch (a woven-cloth weave), never a flat fill. Structural only — it never appears inside the content column.
- **Cloth Ink** (`cloth-ink`, #f4eee4): The printed-on-cloth voice, used only at 0.6–0.95 alpha over oxblood — spine numbers, tab labels, top-band mark. Slightly warmer and lighter than page ink so it reads as printing on fabric rather than pencil on paper.

### Neutral
- **Drafting Stock** (`pad`, #17171a): The page ground. Also the text colour on any pen-filled or ink-filled surface.
- **Lifted Stock** (`pad-lift`, #202024): The only lighter surface in the system. Used for an open index tab and the mobile contents menu — the two places a sheet is literally lifted off the pad.
- **Sunk Stock** (`pad-sink`, #101012): The colophon strip at the very bottom, below the last sheet.
- **Bone Lead** (`ink`, #f0ece2): Body text, headings, figure structure strokes, and the heavy underline beneath inventory labels. Warm off-white, never pure white.
- **Soft Lead** (`ink-soft`, #a29c90): Secondary prose — sheet intros, findings bodies, captions, labels, coursework, colophon. The greyed pencil of a supporting note.
- **Graticule** (`grid-minor` rgba(196,206,226,0.09) / `grid-major` rgba(196,206,226,0.18)): The printed grid, cool blue-grey against the warm ground so it reads as pre-printed ink rather than a lightened page.
- **Margin Rule** (`margin-rule`, 0.48 alpha pen): The single strongest hairline in the system — the vertical red rule separating margin from body.
- **Section Rule** (`rule`, 0.24 alpha pen): The horizontal divider between sheets and above the colophon.
- **Hair Rule** (`rule-soft`, 0.14 alpha ink): Every quiet divider — spec rows, list underlines, figure caption tops, contact rows, the witness line.
- **Tape** (`tape` / `tape-edge`): The gummed-paper gradient on taped-in prints.
- **Print Mat** (`print-mat`, #e8e4d8): The paper border around every photographic print, so photos read as physical prints laid on the page.

### Named Rules

**The Pen-or-Mark Rule.** The pen is either the surface or the mark, never both. A pen-filled surface (primary button, Resume tab) takes `pad` or `cloth-ink` for its text; pen-coloured text only ever appears on the drafting stock. `accent-text` exists precisely to keep those two roles separately tunable — never collapse them.

**The One Red Rule.** #ef6a5c is the only saturated hue in the mark layer, and oxblood is the only saturated hue in the chrome. Do not introduce a second accent, a status palette, or a hue-coded category system. If something needs to be distinguished, distinguish it with a rule, a designator, or the mono voice.

**The Printed-Grid Rule.** The graticule belongs to the page and to nothing else. `.page` carries it; the spine, the top band, and the colophon are deliberately un-gridded, because they are not the sheet.

## Typography

**Display Font:** Archivo variable, `wdth` 62–125, `wght` 400–800 (with Helvetica Neue, Arial)
**Body Font:** Archivo (same family, `wdth` 100)
**Label/Mono Font:** Martian Mono variable at `wdth` 87.5 (with ui-monospace, SFMono-Regular)

**Character:** One drafted grotesque doing all the reading, and one narrow monospace doing all the measuring. Archivo's width axis is treated as a hierarchy axis: the bigger the type, the wider the drafting. Martian Mono, condensed to 87.5, is the instrument voice — it never speaks a sentence.

### Hierarchy
- **Display** (800, clamp(3rem, 7.6vw, 5.4rem), 0.92, `wdth` 112, -0.035em): The name on the cover, and nothing else. Balanced wrapping. Drops to clamp(2.6rem, 12vw, 3.4rem) below 720px.
- **Heading** (700, clamp(1.9rem, 3.2vw, 2.75rem), 1.06, `wdth` 108, -0.028em): One per sheet. Balanced wrapping.
- **Title** (700, clamp(1.35rem, 2vw, 1.6rem), `wdth` 106, -0.018em): Log record titles, and the notebook mark in the mobile top band.
- **Subheading** (700, 1.06rem, `wdth` 104, -0.01em): In-body section heads inside a sheet.
- **Lede** (400, clamp(1.1rem, 1.5vw, 1.28rem), 1.5, max 46ch): The cover paragraph and nothing else. Full ink, not soft — it is the one paragraph a scanner will read.
- **Body** (400, 1.0625rem, 1.62, `wdth` 100, max 68ch): All prose. Drops to 1rem below 460px.
- **Designator** (mono 700, 0.68rem, 0.16em, uppercase, pen): The page/entry number in the margin rail. Its companion classification note sits at 0.62rem/500 in soft lead.
- **Label** (mono 600, 0.58–0.6rem, 0.16–0.2em, uppercase, soft lead): Spec terms, contact labels, signoff labels, stamp lines, colophon.
- **Data** (mono 500, 0.6–0.66rem, 0.1–0.15em, uppercase, soft lead): Dates, stack lines, captions, the witness line, inventory rows, plot notes.

Inside figures the two voices split by role: label text is Archivo 700 at 15px, annotation and axis text is Martian Mono 10px/9px in soft lead, and pen callouts are Martian Mono 10.5px in red.

### Named Rules

**The Mono-Is-Data Rule.** Martian Mono is reserved for designators, measured data, and labels. Never prose, never a heading, never a button, never a link a person reads as a sentence. The build enforces this with one shared selector list in `styles.css` — extend that list rather than reaching for the family ad hoc.

**The Width-Axis Rule.** Hierarchy is carried by Archivo's `wdth` axis as much as by size: 112 display / 108 heading / 106 title / 104 subheading / 100 body and buttons. A new role picks its width from that ramp; it does not invent a new one, and it never goes below 100 for readable text.

**The Real Casing Rule.** Uppercase-plus-tracking belongs to the mono voice only. Within it, measured values keep their true casing — "MHz" is never "MHZ", "−30%" is never re-set as a word. Readable type is never uppercased.

**The No-Kicker Rule.** A sheet's designator and classification live in the margin rail, beside the rule — never as a small tracked line stacked above the heading. Headings begin at the top of the body column.

## Layout

The frame is a fixed bookbinding: an oxblood spine of 78px pinned to the left edge, a 46px empty rail reserved on the right for the index tabs, and the graticuled page between them. Content is capped at 1200px and centred.

Every section is a `sheet`: a two-column CSS grid of `118px` margin rail + `minmax(0, 1fr)` body, padded 5.5rem top and bottom and 3rem on the right, with **no left padding** — the margin rail is the left padding. The body column carries a 1px left border in `margin-rule`; that stroke, not a gap, is what separates margin from body. Sheets are divided from one another by a single 1px `rule` hairline. The cover sheet is `min-height: 100vh` with centred content.

Reading measures are explicit and varied by role: prose 68ch, lede 46ch, sheet intro 58ch, figure caption 68ch, contact and signoff blocks 46rem, the spec table 40rem.

Inner layouts are all fractional two-column grids with a 2.4–3.5rem gutter: cover 1.06/0.94, about 1.1/0.9, split 1.08/0.92, plot 1fr/232px, inventory 3 equal columns, signoff 3 equal columns.

**Responsive behaviour** — four breakpoints, each doing one structural job:

- **≤1180px**: margin rail 96px, page cap 1000px, padding and gutters tighten. Nothing restructures.
- **≤1000px**: the binding folds up. The spine and index tabs are hidden and replaced by a sticky oxblood top band carrying the same woven texture, the notebook mark, and a hamburger that opens a full-width contents menu on `pad-lift`. The page loses its side margins entirely. The margin rail narrows to 52px and its designators rotate to `vertical-rl`, running along the rule as marginalia does. The cover collapses to one column and **reorders** so the primary CTA clears the fold: name → role → lede → actions → socials → spec table, with the property stamp released from its absolute corner position to close the sheet instead of opening it.
- **≤720px**: margin rail 42px. The classification note is dropped (two vertical labels do not fit a 42px gutter; the designator does the wayfinding and stays). All inner grids go single-column, buttons stretch to fill, and remaining wide figures scroll horizontally behind a right-edge mask fade. The pipeline figure instead **swaps layouts**: its wide variant is hidden and a purpose-drawn vertical variant is shown.
- **≤460px**: margin rail 34px, body type 1rem, spec rows stack, the stamp scales to 0.94 from its top-left corner.

### Named Rules

**The Margin Rule.** Every sheet is margin rail + red rule + body. The rail is never empty of purpose and never merely decorative padding; the body never starts at the viewport edge. The rail narrows at every breakpoint (118 → 96 → 52 → 42 → 34px) but is never removed.

**The Ruled-Not-Boxed Rule.** Separation is done with hairlines, dotted underlines and whitespace. Nothing in the content column gets a background fill, a border box, or a padded container. If a group needs to feel distinct, give it a rule and a label, not a card.

## Elevation & Depth

The system is flat by default and deliberately shadowless across all content. Depth exists only to say "this physical object is lying on top of the page," and there are exactly four such objects: the bookcloth binding, the index tabs, the taped-in prints, and a button under the cursor. Everything else — sheets, figures, tables, lists, the inventory — sits directly on the stock with no lift whatsoever. Tonal layering is used instead, and sparingly: `pad-lift` for the two surfaces that are genuinely lifted (open tab, mobile menu), `pad-sink` for the colophon.

### Shadow Vocabulary
- **Binding** (`box-shadow: 3px 0 14px rgba(0,0,0,0.22)`): The spine casting to the right onto the page.
- **Tab** (`box-shadow: -2px 2px 8px rgba(0,0,0,0.2)`): Index tabs casting back onto the page edge.
- **Print** (`box-shadow: 0 12px 26px rgba(0,0,0,0.34)`): A taped-in photographic print, the deepest shadow in the system.
- **Tape** (`box-shadow: 0 1px 3px rgba(0,0,0,0.28)`): The tape strip itself, barely off the surface.
- **Lift** (`box-shadow: 0 6px 14px rgba(0,0,0,0.28)`, with `translateY(-2px)`): Button hover and focus only.
- **Band** (`box-shadow: 0 3px 14px rgba(0,0,0,0.35)` / `0 14px 30px rgba(0,0,0,0.3)`): The sticky mobile band and its dropped menu.

### Named Rules

**The Object-Shadow Rule.** A shadow requires a physical object. Binding, tab, print, tape, and a lifted button are the complete list. Text, figures, tables and section groups never carry one — and no shadow is ever used to imply a card that isn't there.

**The Tooth Rule.** The page's material is one fixed, non-interactive noise layer over the whole viewport at 0.045 opacity, inverted so the speckle catches light the way black stock actually does. It is a single global layer — never re-applied per element.

## Shapes

Corners are effectively square. The only radii in the entire build are 2px on buttons (a cut edge, not a rounded one) and 4px on the *left two corners only* of an index tab, so the tab reads as a die-cut card projecting from the page. Nothing else — no photo, no figure, no table, no menu, no stamp — has a radius. Pills, capsules and soft rectangles are foreign to this world.

Strokes carry the form language. Borders come in four weights, each with a job: 1px hairlines for dividers, 1px dotted for list rows and spec rows, 1.5px solid ink as the heavy underline under an inventory label and as the signature rule in the countersign block, and 2px solid for a button edge and the stamp's frame.

Rotation is the system's one soft geometry, and it is always material rather than decorative: the property stamp is struck at −3.2° (−2.4° stacked, −2° below 460px), photographic prints sit at −1.4°, +1.1° and −2.6°, and the tape strips cross the corners at −30° and +26°.

Figure geometry is its own vocabulary: 1.75px round-capped bone strokes for structure, 1.6px pen strokes for annotation, an `8 6` dash for predicted or untrusted paths, and 13%/14% opacity fills for measured area.

### Named Rules

**The Square-Corner Rule.** Default radius is 0. The two exceptions (2px button, 4px tab leading edge) are the entire allowance. Never round a photograph, a figure, a table, or a surface.

**The Honest-Tilt Rule.** Rotation is reserved for objects that were physically placed — a struck stamp, a taped print, a tape strip. Type, rules and figures are never tilted.

## Components

### Buttons
- **Shape:** Cut square (2px radius), 2px border, no fill radius anywhere.
- **Primary:** Pen fill with drafting-stock text (`0.92rem 1.35rem`), Archivo 700 at `wdth` 100, 0.86rem, 0.02em tracking. Sentence case, not uppercase. Always paired with a 1rem inline stroke glyph.
- **Outline:** Transparent with bone border and bone text; the default for every secondary and in-entry link.
- **Small:** `0.6rem 0.95rem`, 0.78rem, 1.5px border — used for external evidence links (App Store, Google Play, project write-up).
- **Hover / Focus:** Both variants invert to a bone fill with drafting-stock text, lift 2px, and take the Lift shadow, over 220ms. Focus-visible shares the hover treatment plus the global 2px pen outline at 3px offset.
- **Below 720px:** primary action groups stretch buttons full-width (`flex: 1 1 auto`); compact groups stay intrinsic.

### Index Tabs (signature)
Fixed to the right edge, vertically centred, stacked with a 6px gap. Each tab is vertical-rl oxblood bookcloth with mono uppercase cloth-ink at 0.63rem/0.24em, a dark cloth edge, and radius on its leading corners only. Hover and focus slide the tab 6px out of the page. The current tab is tracked by an IntersectionObserver over the sections and renders as *opened*: `pad-lift` fill, bone text, held at the 6px offset. A persistent pen-red action tab (Resume) sits last, separated by a 0.9rem gap — when current it opens to `pad-lift` with pen text, honouring the Pen-or-Mark Rule.

### Navigation (mobile band)
Below 1000px the tabs and spine are replaced by a sticky oxblood band with the same woven texture, holding the notebook mark ("G. Gallo · No. 001") and a three-bar toggle that animates into an X. The menu drops full-width on `pad-lift` with a 2px oxblood bottom border; items are Archivo 600 at 0.95rem separated by dotted hairlines, with the resume item in pen. It closes on item click, on Escape (returning focus to the toggle), and on resize above 1000px.

### Margin Annotation
A right-aligned column in the rail holding a pen designator ("Pg. 3", "Entry 01") and a soft-lead classification ("Employment", "Hardware"). Below 1000px it becomes a row of vertical-rl labels running down the rule; below 720px the classification drops and only the designator survives.

### Ink Figures (signature)
Hand-authored inline SVG in a single pen-and-ink line language, sharing one stylesheet: bone `1.75px` structure strokes, pen `1.6px` annotation strokes, both round-capped and unfilled, mono annotation text, Archivo label text, dashed strokes for predicted paths, and low-opacity fills for measured area. Five captioned figures ship (a measured bar plot, the pipeline block diagram, a request-path diagram, an intercept plot, a sharing tree), rendered from six SVG elements because the pipeline carries a second, purpose-drawn vertical layout for narrow screens. Captions are mono uppercase above a hairline, numbered `Fig. 1–4` for entries and `Fig. A–C` for the cover, about and log sheets.

**Motion:** each stroke marked `.draw` is measured with `getTotalLength()` at load, given its own `--len` dash length and a cumulative `--delay` of `min(len × 0.45, 90)ms`, so the drawing runs at a roughly constant, believable pen speed rather than all-at-once. An IntersectionObserver at threshold 0.22 with a −8% bottom margin adds `.is-drawn` on first entry and then unobserves — the figure draws exactly once. Strokes take 900ms, text fades in at 620ms, fills at 500–620ms. Under `prefers-reduced-motion`, every figure is marked drawn immediately and rendered in its final state.

### Pen Mark (signature)

- **What:** A single hand-drawn ellipse (`.pen-mark`) ringing the primary call to action on the cover — the one hand gesture in the first viewport.
- **Stroke:** 2px `ink` (bone) at 0.92 opacity, `vector-effect: non-scaling-stroke` so the weight holds while the SVG stretches to the button via `preserveAspectRatio="none"`. Deliberately **not** `pen`: the mark crosses a pen-filled surface, and pen-on-pen is invisible (see The Pen-or-Mark Rule).
- **Geometry:** The path overshoots its own start, so the ring reads as a gesture rather than a closed shape.
- **Motion:** Inks in on scroll with the figures, via the same `stroke-dashoffset` mechanism and per-stroke `getTotalLength()`; it is included in the `.ink-figure, .pen-mark` observer set.
- **Use:** Once per page, on the single action the visitor is meant to take. A second circled thing spends the device.

### Taped Prints (signature)
Photographs are physical prints: a 9px `print-mat` paper border, a dark 1px edge, the Print shadow, and a small rotation, with two CSS-drawn gummed-tape strips crossing the top corners at −30°/+26°. Three sizes ship — portrait (1:1), wide (4:5, used for the group photo) and chip (max 148px, for an app icon). Captions are mono uppercase soft lead.

### Property Stamp (signature)
An absolutely positioned rubber stamp in the cover's top-right corner: pen text inside a 2px pen border with a 1px pen outline at 3px offset (the double-ruled edge of a real stamp), over a translucent stock wash, at 82% opacity and −3.2°. It lands once on arrival — a 560ms cubic-bezier from −9°/1.16× to rest, delayed 260ms.

### Records (Log entries)
A baseline-aligned header grid: Archivo title left, pen organisation beneath it, mono date pinned right across both rows, over a hairline. Findings below are a dash-bulleted list — a 12px × 1.5px pen dash at `top: 0.82em` — set in soft lead with key figures promoted to bone bold. Below 720px the date drops to its own row.

### Inventory
Three ungutted columns of listed materials under a mono label with a heavy 1.5px bone underline. Rows are dotted-hairline separated, in soft lead. An item that is actually used in a shipped entry carries a pen cross-reference ("E01", "E02 · E03") and is promoted to full bone via `:has(.inventory__ref)` — the reference earns the emphasis. This is the deliberate replacement for a logo-tile skill grid: no brand marks, no proficiency bars.

### Contact & Countersign
Contact is a label/value list on hairline rows; values are bone 600 with a pen-tinted underline that goes full pen on hover and focus. The countersign below is three signature blocks — a 1.5px bone rule, a mono label, and a value — for "Recorded by", "Witnessed by" (intentionally blank) and "Date".

### Cover Specification Table
A definition list on hairline-topped, dotted-separated rows: an 8.5rem mono uppercase term column against Archivo 500 values. It is the cover's factual block (degree, institution, expected, standing, seeking), and below 1000px it moves *below* the CTAs so the resume action stays above the fold. Below 460px the rows stack.

## Do's and Don'ts

### Do:
- **Do** put every new section on a `sheet`: margin rail, red margin rule, body. The designator goes in the rail.
- **Do** carry hierarchy on Archivo's width axis (112 / 108 / 106 / 104 / 100) alongside size and weight.
- **Do** reserve Martian Mono at `wdth` 87.5 for designators, labels and measured data, and add new cases to the shared selector list rather than declaring the family inline.
- **Do** use `accent-text` for red marks on the stock and `pen` for red surfaces, rules and strokes — keep the two roles separately addressable.
- **Do** separate with rules: 1px hairline for sections, 1px dotted for list rows, 1.5px bone for a heavy label underline or a signature line.
- **Do** draw new evidence as an SVG figure in the existing ink language — 1.75px bone structure, 1.6px pen annotation, round caps, `8 6` dash for anything predicted or untrusted — and mark its strokes `.draw` so it inherits the once-only draw-in.
- **Do** give a wide diagram a purpose-drawn narrow layout (`ink-figure--stack` on a `figure--dual`) when horizontal scrolling would show an incomplete diagram.
- **Do** present photographs as taped-in prints with the paper mat, and give each a `Fig.` caption.
- **Do** keep the resume action reachable from every width — the pen index tab on desktop, the pen menu item and the reordered cover on mobile.
- **Do** respect `prefers-reduced-motion`: figures render fully drawn, the stamp is already landed.

### Don't:
- **Don't** introduce a card, panel, tile, or any filled container in the content column. `pad-lift` and `pad-sink` are for the open tab, the mobile menu, and the colophon only.
- **Don't** add a second accent hue, a status colour set, or hue-coded categories. One pen, one bookcloth.
- **Don't** put pen text on a pen fill, or bone text on a bone fill.
- **Don't** set prose, headings, buttons, or link text in Martian Mono, and don't uppercase readable type.
- **Don't** stack a small tracked kicker above a heading — that information belongs in the margin rail.
- **Don't** round corners. 2px on a button and 4px on a tab's leading edge are the complete radius budget.
- **Don't** attach a shadow to anything that is not a physically overlapping object, and never use one to fake a container.
- **Don't** tilt type, rules or figures; rotation belongs to stamps, prints and tape.
- **Don't** re-apply the paper-tooth noise or the graticule to individual elements; both are single global layers on `body` and `.page`.
- **Don't** reintroduce icon-font glyphs or brand logo tiles for skills — the inventory's pen cross-reference is the emphasis mechanism, and every glyph in the build is an authored inline SVG path.
- **Don't** let a figure re-animate on scroll. Each draws exactly once and is then unobserved.
