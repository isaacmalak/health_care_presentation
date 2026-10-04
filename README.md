# Harbor Health — FY26 Continuity Review

A slide deck built with [Next.js](https://nextjs.org) and [reveal.js](https://revealjs.com), using reveal.js's vanilla API directly inside a client component rather than a third-party React wrapper.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate with arrow keys, `Space`, or the on-screen controls (reveal.js's `hash: true` is on, so individual slides are linkable and deep-linkable).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Structure

- `src/components/deck/RevealDeck.tsx` — initializes reveal.js on the client against a fixed 1280×720 canvas (reveal.js scales the whole deck to fit the viewport, so layout never reflows).
- `src/components/deck/SlideShell.tsx` — shared slide chrome: the eyebrow label, the footer, and the vital-rail motif.
- `src/components/deck/VitalRail.tsx` — the deck's signature element, documented on slide 13.
- `src/components/deck/primitives.tsx` — small content building blocks (`Stat`, `Tag`, `Divider`, `Step`) reused across slides.
- `src/slides/` — one component per slide, assembled in order on `src/app/page.tsx`.

## Design system

The deck documents its own design system on its last four slides (12–15): the color and type tokens, the grid/spacing scale and the vital-rail signature, the reusable components, and the rules the deck follows. Those same tokens live in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font loading via `next/font/google`: Fraunces, Inter, IBM Plex Mono).

To add a slide: create a component in `src/slides/` using `SlideShell`, give it the next `index`, bump `TOTAL_SLIDES` in `SlideShell.tsx`, and import it into `src/app/page.tsx`.
