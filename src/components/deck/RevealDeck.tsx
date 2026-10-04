"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { RevealApi } from "reveal.js";

export function RevealDeck({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);

  useEffect(() => {
    if (!containerRef.current || deckRef.current) return;

    let deck: RevealApi | null = null;
    let cancelled = false;

    import("reveal.js").then(({ default: Reveal }) => {
      if (cancelled || !containerRef.current) return;
      deck = new Reveal(containerRef.current, {
        hash: true,
        embedded: false,
        controls: true,
        progress: true,
        center: false,
        width: 1280,
        height: 720,
        margin: 0,
        minScale: 0.2,
        maxScale: 1.4,
        transition: "fade",
        transitionSpeed: "fast",
        keyboard: true,
      });
      deck.initialize();
      deckRef.current = deck;
    });

    return () => {
      cancelled = true;
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
