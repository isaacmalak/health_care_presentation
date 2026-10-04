import { SlideShell } from "@/components/deck/SlideShell";

const TOKENS = [
  ["fast", "180ms", "Hover states, toggles — anything that should feel instant."],
  ["base", "350ms", "Slide and panel transitions. The deck you’re watching uses this."],
  ["morph", "700ms", "Auto-animate moves, like the one that just got you to this slide."],
] as const;

export function MotionSlide() {
  return (
    <SlideShell index={6} eyebrow="Motion" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Motion is a token too — not a per-developer judgment call.
      </h2>
      <p className="mt-3 max-w-xl text-[14px] leading-snug text-ink-soft">
        Three durations, one easing curve. Every animated thing in this deck,
        including the fragments on this slide, picks from this list — press
        the right arrow.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-10">
        {TOKENS.map(([name, value, detail], i) => (
          <div
            key={name}
            className={`fragment ${i === 0 ? "fade-left" : i === 1 ? "fade-up" : "fade-right"}`}
          >
            <div className="font-utility text-[12px] text-vital">{name}</div>
            <div className="font-display mt-1 text-[28px]">{value}</div>
            <p className="mt-2 text-[13px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>

      <p className="fragment fade-up mt-12 max-w-xl text-[13.5px] leading-snug text-ink-soft">
        Easing: <code className="font-utility text-vital">cubic-bezier(.22, .61, .36, 1)</code> — a
        quick start that settles instead of overshooting. Used everywhere, so
        nothing in the product feels like it was animated by a different hand.
      </p>
    </SlideShell>
  );
}
