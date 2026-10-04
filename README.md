# Thread — A Design System Proposal

A 12-slide pitch deck, built with [Next.js](https://nextjs.org) and [reveal.js](https://revealjs.com), presenting **Thread**, a healthcare design system, as a proposal for a client ("Harbor Health"). The whole deck is the design system — foundations, components, motion, accessibility, governance, and packages — not a separate business review with a design-system appendix.

reveal.js is driven directly via its vanilla client API inside a client component, rather than a third-party React wrapper.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate with arrow keys, `Space`, or the on-screen controls. Several slides use fragment reveals (press right/down to step through them), and slide 3 → 4 uses reveal.js's auto-animate to morph a pillar heading straight into the next slide's title.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Structure

- `src/components/deck/RevealDeck.tsx` — initializes reveal.js on the client against a fixed 1280×720 canvas (reveal.js scales the whole deck to fit the viewport, so layout never reflows). Configures the deck-wide `slide` transition, fragments, and auto-animate.
- `src/components/deck/SlideShell.tsx` — shared slide chrome: the eyebrow label, the footer, the vital-rail motif, and per-slide `transition`/`autoAnimate` overrides.
- `src/components/deck/VitalRail.tsx` — the deck's signature element ("Thread" itself, explained on slide 5): draws in via CSS keyframes when a slide becomes current, respecting `prefers-reduced-motion`.
- `src/components/deck/primitives.tsx` — reusable content building blocks (`Stat`, `Tag`, `Divider`, `Button`), documented on slide 7.
- `src/slides/` — one component per slide, assembled in order on `src/app/page.tsx`.

## The deck

1. Title — "Thread"
2. The problem (why a client would want this)
3. What's included — four pillars (auto-animates into slide 4)
4. Foundations — color & type
5. Structure & signature — grid, spacing, and where the name comes from
6. Motion — the animation tokens, demonstrated live via fragments
7. Components — the five building blocks
8. Applied — Thread on a real screen, not a moodboard
9. Accessibility — contrast ratios (computed, not guessed) and reduced-motion handling
10. Governance — the rules that keep it consistent after launch
11. Package — three tiers to bring it in-house
12. Closing CTA

Design tokens live in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font loading via `next/font/google`: Fraunces, Inter, IBM Plex Mono).

To add a slide: create a component in `src/slides/` using `SlideShell`, give it the next `index`, bump `TOTAL_SLIDES` in `SlideShell.tsx`, and import it into `src/app/page.tsx`.
