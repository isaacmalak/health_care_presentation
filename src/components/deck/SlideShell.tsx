import type { ReactNode } from "react";
import { VitalRail } from "./VitalRail";

const TOTAL_SLIDES = 15;

export function SlideShell({
  index,
  eyebrow,
  dark = false,
  pulse = false,
  rail = true,
  bare = false,
  children,
}: {
  index: number;
  eyebrow?: string;
  dark?: boolean;
  pulse?: boolean;
  rail?: boolean;
  bare?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className="relative h-full w-full overflow-hidden"
      style={{
        background: dark ? "var(--color-ink)" : "var(--color-canvas)",
        color: dark ? "var(--color-canvas)" : "var(--color-ink)",
      }}
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
        {!bare && <div className="flex flex-1 flex-col justify-center">{children}</div>}
        {bare && children}
        {!bare && (
          <footer
            className="font-utility flex items-baseline justify-between pt-8 text-[10px] uppercase tracking-[0.18em]"
            style={{ opacity: 0.55 }}
          >
            <span>Harbor Health — FY26 Continuity Review</span>
            <span>
              {String(index).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
            </span>
          </footer>
        )}
      </div>
    </section>
  );
}
