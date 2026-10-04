# Thread — Design System

A 5-slide visual reference, built with [Next.js](https://nextjs.org) and [reveal.js](https://revealjs.com): color, typography, and real rendered UI components for **Thread**, a healthcare design system — meant to hand off before a Figma file or development starts, not as a pitch deck. Minimal copy throughout; the components speak for themselves.

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

1. **Cover** — wordmark only
2. **Color** — the six tokens, swatch + hex
3. **Typography** — Fraunces / Inter / IBM Plex Mono specimens, plus the spacing scale
4. **Components — Actions & Inputs** — button, checkbox, toggle, text field (default/error), select
5. **Components — Display & Feedback** — card, badge, tag, alert, avatar, stat, progress bar

## Structure

- `src/components/deck/RevealDeck.tsx` — initializes reveal.js on the client against a fixed 1280×720 canvas (reveal.js scales the whole deck to fit the viewport, so layout never reflows).
- `src/components/deck/SlideShell.tsx` — shared slide chrome: the eyebrow label, footer, and the vital-rail signature. Content anchors directly under the eyebrow (not vertically centered) so every slide shares the same rhythm regardless of how much it holds.
- `src/components/deck/VitalRail.tsx` — the deck's signature line, drawn in via CSS keyframes when a slide becomes current, respecting `prefers-reduced-motion`.
- `src/components/deck/primitives.tsx` — the actual component set: `Button`, `TextField`, `Select`, `Checkbox`, `Toggle`, `Card`, `Badge`, `Tag`, `Alert`, `Avatar`, `Stat`, `ProgressBar`, `Divider`.
- `src/slides/` — one component per slide, assembled in order on `src/app/page.tsx`.

Design tokens live in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font loading via `next/font/google`: Fraunces, Inter, IBM Plex Mono).

To add a slide: create a component in `src/slides/` using `SlideShell`, give it the next `index`, bump `TOTAL_SLIDES` in `SlideShell.tsx`, and import it into `src/app/page.tsx`. To add a component: build it in `primitives.tsx` against the existing tokens (don't introduce new colors — reuse the six).
