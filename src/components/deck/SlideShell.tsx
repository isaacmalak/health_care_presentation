import type { ReactNode } from "react";
import { VitalRail } from "./VitalRail";

export const SYSTEM_NAME = "Unified Medical Management System";

const TOTAL_SLIDES = 17;

// Hex, not CSS vars: reveal.js reads these to paint the full-viewport
// background layer and to pick light/dark controls.
const CANVAS_HEX = "#f5f7f4";
const INK_HEX = "#121a2b";

export function SlideShell({
  index,
  eyebrow,
  dark = false,
  pulse = false,
  rail = true,
  bare = false,
  transition,
  autoAnimate = false,
  children,
}: {
  index: number;
  eyebrow?: string;
  dark?: boolean;
  pulse?: boolean;
  rail?: boolean;
  bare?: boolean;
  /** Per-slide reveal.js transition override (default comes from RevealDeck config). */
  transition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
  /** Opt this slide into reveal.js's auto-animate morph with its neighbor. */
  autoAnimate?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className="relative h-full w-full overflow-hidden"
      style={{ color: dark ? "var(--color-canvas)" : "var(--color-ink)" }}
      data-background-color={dark ? INK_HEX : CANVAS_HEX}
      {...(transition ? { "data-transition": transition } : {})}
      {...(autoAnimate ? { "data-auto-animate": "" } : {})}
    >
      {rail && <VitalRail pulse={pulse} tone={dark ? "canvas" : "vital"} />}
      <div
        className={
          bare
            ? "relative h-full"
            : "relative flex h-full flex-col py-14 ps-32 pe-32 portrait:pt-10 portrait:pb-[76px] portrait:ps-12 portrait:pe-7"
        }
      >
        {!bare && eyebrow && (
          <p
            className="font-utility mb-6 text-[13px] tracking-[0.08em] uppercase portrait:mb-5 portrait:text-[11px]"
            style={{ color: dark ? "var(--color-vital-bright)" : "var(--color-vital)" }}
          >
            {eyebrow}
          </p>
        )}
        {!bare && <div className="flex min-h-0 flex-1 flex-col justify-start">{children}</div>}
        {bare && children}
        {/* Footer hugs the start edge: reveal.js's nav arrows own the bottom-end corner. */}
        {!bare && (
          <footer
            className="font-utility flex items-baseline gap-5 pt-6 text-[11px] portrait:gap-4 portrait:text-[10px]"
            style={{ opacity: 0.55 }}
          >
            <span className="tabular-nums">
              {String(index).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
            </span>
            <span>{SYSTEM_NAME}</span>
          </footer>
        )}
      </div>
    </section>
  );
}
