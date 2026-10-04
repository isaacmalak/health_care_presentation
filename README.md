# نبض (Nabd) — Design System

A 6-slide visual reference, built with [Next.js](https://nextjs.org) and [reveal.js](https://revealjs.com): color, typography, real rendered UI components, and a chart/diagram slide for **نبض** ("Nabd" / "pulse"), a healthcare design system — in Arabic, right-to-left. Meant to hand off before a Figma file or development starts, not as a pitch deck. Minimal copy throughout; the components speak for themselves.

reveal.js is driven directly via its vanilla client API inside a client component, rather than a third-party React wrapper.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate with arrow keys, `Space`, or the on-screen controls. The component slides use fragment reveals — press right/down to step through each one.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## The deck

1. **الغلاف (Cover)** — wordmark only
2. **الألوان (Color)** — the six tokens, swatch + hex
3. **الطباعة (Typography)** — Amiri / IBM Plex Sans Arabic / Noto Kufi Arabic specimens, plus the spacing scale
4. **المكوّنات — إجراءات وإدخال (Components — Actions & Inputs)** — button, checkbox, toggle, text field (default/error), select
5. **المكوّنات — عرض وتنبيهات (Components — Display & Feedback)** — card, badge, tag, alert, avatar, stat, progress bar
6. **المخططات والرسوم البيانية (Charts & Diagrams)** — a bar chart and a flow diagram

## RTL notes

`<html dir="rtl" lang="ar">` drives the mirroring. A few things were handled deliberately rather than left to chance:

- **Logical over physical properties.** `SlideShell` and `VitalRail` use Tailwind's logical utilities (`ps-*`/`pe-*`, `start-*`, `border-s-*`, `text-end`) instead of `pl-*`/`left-*`/`text-right`, so the rail, padding, and alert accent border all land on the correct side under `dir="rtl"` without per-element overrides. The one exception is `Toggle`'s knob, which sets `insetInlineStart` directly in a style prop since it's an animated positional value, not a static utility class.
- **`dir="auto"` on mixed-content fields.** `TextField` and `Select` render values that are sometimes Arabic (a clinic name) and sometimes inherently Latin (an email address) — `dir="auto"` lets the browser's bidi algorithm pick the right direction per value instead of hardcoding one.
- **No uppercase/heavy tracking on Arabic labels.** The original Latin deck used `uppercase` + wide `tracking` on mono labels for a "technical readout" feel. Arabic has no letter case, and wide tracking breaks the cursive joining between letters, so labels instead lean on Noto Kufi Arabic's inherently geometric character for that same effect.
- **Fonts actually support Arabic.** Fraunces/Inter/IBM Plex Mono (the original Latin stack) don't cover Arabic. The display/body/utility roles are now Amiri, IBM Plex Sans Arabic, and Noto Kufi Arabic respectively — chosen to preserve the same serif/humanist/geometric contrast the original pairing had.
- **Numerals stay Western.** Hex codes, pixel values, and percentages use Latin digits (`0–9`) rather than Eastern Arabic-Indic numerals (`٠-٩`), matching common practice in Arabic tech/design contexts and avoiding a a-f hex digits mismatch.
- **Codes and small charts stay LTR internally.** Hex values and the spacing-scale bar chart are wrapped in `dir="ltr"` so they read in their native order regardless of the surrounding RTL text.
- **Chart colors are validated, not eyeballed.** `BarChart`'s categorical order (amber → teal → coral in `primitives.tsx`) was run through a colorblind-safety checker before use — the system's raw amber/coral pair fails adjacent-pair contrast for deuteranopia, so the fixed order keeps teal between them instead. Value labels stay in neutral ink; only the bar fill carries series identity.

## Structure

- `src/components/deck/RevealDeck.tsx` — initializes reveal.js on the client against a fixed 1280×720 canvas (reveal.js scales the whole deck to fit the viewport, so layout never reflows).
- `src/components/deck/SlideShell.tsx` — shared slide chrome: the eyebrow label, footer, and the vital-rail signature. Content anchors directly under the eyebrow (not vertically centered) so every slide shares the same rhythm regardless of how much it holds.
- `src/components/deck/VitalRail.tsx` — the deck's signature line, drawn in via CSS keyframes when a slide becomes current, respecting `prefers-reduced-motion`.
- `src/components/deck/primitives.tsx` — the actual component set: `Button`, `TextField`, `Select`, `Checkbox`, `Toggle`, `Card`, `Badge`, `Tag`, `Alert`, `Avatar`, `Stat`, `ProgressBar`, `BarChart`, `Divider`.
- `src/slides/` — one component per slide, assembled in order on `src/app/page.tsx`.

Design tokens live in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font loading via `next/font/google`: Amiri, IBM Plex Sans Arabic, Noto Kufi Arabic).

To add a slide: create a component in `src/slides/` using `SlideShell`, give it the next `index`, bump `TOTAL_SLIDES` in `SlideShell.tsx`, and import it into `src/app/page.tsx`. To add a component: build it in `primitives.tsx` against the existing tokens (don't introduce new colors — reuse the six), and use logical positioning so it still works under RTL.
