"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { RevealApi } from "reveal.js";

/**
 * Landscape screens get the fixed 1280×720 canvas. Portrait screens (phones,
 * tablets held upright) get a narrow canvas whose height follows the
 * viewport's own aspect ratio, so the deck fills the screen instead of
 * shrinking a 16:9 frame into a letterbox. Slides adapt to it with
 * Tailwind's `portrait:` variant, which matches the same orientation rule.
 */
const LANDSCAPE = { width: 1280, height: 720 };
const PORTRAIT_WIDTH = 420;
const PORTRAIT_MIN_HEIGHT = 820;

function canvasFor(viewportWidth: number, viewportHeight: number) {
  if (viewportWidth > viewportHeight) return LANDSCAPE;
  return {
    width: PORTRAIT_WIDTH,
    height: Math.max(
      PORTRAIT_MIN_HEIGHT,
      Math.round((PORTRAIT_WIDTH * viewportHeight) / viewportWidth),
    ),
  };
}

export function RevealDeck({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);

  useEffect(() => {
    if (!containerRef.current || deckRef.current) return;

    let cancelled = false;
    let canvas = canvasFor(window.innerWidth, window.innerHeight);

    const onResize = () => {
      const next = canvasFor(window.innerWidth, window.innerHeight);
      if (next.width === canvas.width && next.height === canvas.height) return;
      canvas = next;
      deckRef.current?.configure(next);
    };

    import("reveal.js").then(({ default: Reveal }) => {
      if (cancelled || !containerRef.current) return;
      const deck = new Reveal(containerRef.current, {
        hash: true,
        embedded: false,
        controls: true,
        controlsTutorial: false,
        progress: true,
        center: false,
        ...canvas,
        margin: 0,
        minScale: 0.2,
        maxScale: 1.6,
        // Keep the paged deck on phones; the portrait canvas handles small screens.
        scrollActivationWidth: 0,
        transition: "slide",
        transitionSpeed: "default",
        backgroundTransition: "fade",
        autoAnimate: true,
        autoAnimateDuration: 0.7,
        autoAnimateEasing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        fragments: true,
        keyboard: true,
        touch: true,
      });
      deck.initialize();
      deckRef.current = deck;
      window.addEventListener("resize", onResize);
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      try {
        deckRef.current?.destroy();
      } catch {
        // reveal.js throws if the DOM is already gone during HMR teardown
      }
      deckRef.current = null;
    };
  }, []);

  return (
    <div className="reveal" ref={containerRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
