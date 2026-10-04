import type { ReactNode } from "react";
import { VitalRail } from "./VitalRail";

const TOTAL_SLIDES = 5;

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
      style={{
        background: dark ? "var(--color-ink)" : "var(--color-canvas)",
        color: dark ? "var(--color-canvas)" : "var(--color-ink)",
      }}
      {...(transition ? { "data-transition": transition } : {})}
      {...(autoAnimate ? { "data-auto-animate": "" } : {})}
    >
      {rail && <VitalRail pulse={pulse} tone={dark ? "canvas" : "vital"} />}
      <div
        className={
          bare
            ? "relative h-full"
            : "relative flex h-full flex-col py-14 pl-32 pr-20"
        }
      >
        {!bare && eyebrow && (
          <p
            className="font-utility mb-10 text-[11px] uppercase tracking-[0.22em]"
            style={{ color: dark ? "var(--color-vital-bright)" : "var(--color-vital)" }}
          >
            {eyebrow}
          </p>
        )}
        {!bare && <div className="flex flex-1 flex-col justify-start">{children}</div>}
        {bare && children}
        {!bare && (
          <footer
            className="font-utility flex items-baseline justify-between pt-8 text-[10px] uppercase tracking-[0.18em]"
            style={{ opacity: 0.55 }}
          >
            <span>Thread</span>
            <span>
              {String(index).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
            </span>
          </footer>
        )}
      </div>
    </section>
  );
}
