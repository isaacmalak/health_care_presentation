import { SlideShell } from "@/components/deck/SlideShell";

const CHECKS = [
  ["Ink on Canvas", "16.1:1", "AAA"],
  ["Vital Teal on Canvas", "4.9:1", "AA"],
  ["Canvas on Ink", "16.1:1", "AAA"],
  ["Pulse Coral on Canvas", "3.6:1", "AA (large text)"],
] as const;

export function AccessibilitySlide() {
  return (
    <SlideShell index={9} eyebrow="Built to hold up" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Accessible by default, not by a later pass.
      </h2>
      <p className="mt-3 max-w-xl text-[14px] leading-snug text-ink-soft">
        Every text/background pairing in Thread is checked against WCAG
        before it ships as a token, not audited after the fact.
      </p>

      <div className="mt-9 max-w-2xl">
        <div className="font-utility grid grid-cols-[1fr_auto_auto] gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.1em] text-ink-soft">
          <span>Pairing</span>
          <span>Contrast</span>
          <span>Rating</span>
        </div>
        {CHECKS.map(([pair, ratio, rating]) => (
          <div
            key={pair}
            className="fragment fade-up grid grid-cols-[1fr_auto_auto] gap-x-8 border-t py-3 text-[14px]"
            style={{ borderColor: "var(--color-mist)" }}
          >
            <span className="font-display">{pair}</span>
            <span className="font-utility text-vital">{ratio}</span>
            <span className="font-utility text-ink-soft">{rating}</span>
          </div>
        ))}
      </div>

      <p className="fragment fade-up mt-10 max-w-xl text-[13.5px] leading-snug text-ink-soft">
        Motion respects <code className="font-utility text-vital">prefers-reduced-motion</code> —
        every animation in this deck, including the one that brought you
        here, turns off automatically when a viewer has asked for that.
      </p>
    </SlideShell>
  );
}
