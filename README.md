# Unified Medical Management System — Presentation

A 17-slide deck, built with [Next.js](https://nextjs.org) and [reveal.js](https://revealjs.com), presenting the Business Requirements Document for the **Unified Medical Management System**, a platform connecting patients, doctors, doctor's assistants, medical center managers, and super admins. An appendix covers the visual language the portals are built from: color, typography, real rendered UI components, and charts.

reveal.js is driven directly via its vanilla client API inside a client component, rather than a third-party React wrapper.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate with arrow keys, `Space`, the on-screen controls, or by swiping on touch screens. Most slides use fragment reveals — press right/down to step through each block.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## The deck

**Business requirements**

1. **Title** — Unified Medical Management System
2. **Project overview** — who it connects, what it manages, what it guarantees
3. **Key problems addressed** — five pain points, each with its solution
4. **User personas & roles** — patient, doctor, assistant, center manager, super admin
5. **Patient Portal**
6. **Doctor Portal**
7. **Doctor's Assistant Portal**
8. **Medical Center Dashboard**
9. **Super Admin Panel**
10. **Architecture & tech stack** — clients → API layer → data & storage
11. **Security & compliance** — encryption, RBAC rules, audit logging

**Appendix: visual language**

12. **Divider**
13. **Color** — the six tokens, swatch + hex
14. **Typography** — Fraunces / Inter / IBM Plex Mono specimens, plus the spacing scale
15. **Components — Actions & inputs** — button, checkbox, toggle, text field (default/error), select
16. **Components — Display & feedback** — card, badge, tag, alert, avatar, stat, progress bar
17. **Charts & diagrams** — a bar chart, a progress ring, a line chart, and a flow diagram

## Layout notes

- **Full-bleed backgrounds, fixed canvas.** Slides carry no background of their own. Each `<section>` sets `data-background-color` (via `SlideShell`'s `dark` prop), and reveal.js paints it on its full-viewport background layer — so the color reaches every screen edge while the slide content keeps its fixed canvas and scales as a unit.
- **Two canvases.** Landscape screens get a fixed 1280×720 canvas. Portrait screens (phones, upright tablets) get a 420px-wide canvas whose height follows the viewport's aspect ratio (min 820px), so a phone gets a full-screen, single-column deck rather than a tiny letterboxed 16:9 frame. `RevealDeck` picks the canvas and re-configures reveal.js on resize; slides adapt with Tailwind's `portrait:` variant, which matches the same orientation rule. reveal.js's automatic scroll view is disabled (`scrollActivationWidth: 0`) so phones keep the paged deck.
- **Nav arrows own the bottom-end corner.** The footer (page number + system name) hugs the start edge so reveal.js's controls never cover it at any size.
- **Chart colors are validated, not eyeballed.** `BarChart`'s categorical order (amber → teal → coral in `primitives.tsx`) was run through a colorblind-safety checker — the raw amber/coral pair fails adjacent-pair contrast for deuteranopia, so teal sits between them. `LineChart` is a single series, so it takes one hue. There's no 3-color pie/donut: `ProgressRing` is a single-value meter instead.

## Structure

- `src/components/deck/RevealDeck.tsx` — initializes reveal.js on the client and chooses the landscape or portrait canvas.
- `src/components/deck/SlideShell.tsx` — shared slide chrome: eyebrow label, footer, background color, and the vital-rail signature. Holds `SYSTEM_NAME` and `TOTAL_SLIDES`.
- `src/components/deck/VitalRail.tsx` — the deck's signature line, drawn in via CSS keyframes when a slide becomes current, respecting `prefers-reduced-motion`.
- `src/components/deck/content.tsx` — `SlideTitle` and `FeatureGroup`, the building blocks of the requirements slides.
- `src/components/deck/primitives.tsx` — the UI component set: `Button`, `TextField`, `Select`, `Checkbox`, `Toggle`, `Card`, `Badge`, `Tag`, `Alert`, `Avatar`, `Stat`, `ProgressBar`, `BarChart`, `LineChart`, `ProgressRing`, `Divider`.
- `src/slides/` — one component per slide (the five portal slides share `PortalSlides.tsx`), assembled in order on `src/app/page.tsx`.

Design tokens live in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font loading via `next/font/google`: Fraunces, Inter, IBM Plex Mono).

To add a slide: create a component in `src/slides/` using `SlideShell`, give it the next `index`, bump `TOTAL_SLIDES` in `SlideShell.tsx`, import it into `src/app/page.tsx`, and add `portrait:` classes so it still fits the narrow canvas. To add a component: build it in `primitives.tsx` against the existing tokens (don't introduce new colors — reuse the six).
