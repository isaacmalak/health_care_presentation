import { SlideShell } from "@/components/deck/SlideShell";
import { Button, Tag } from "@/components/deck/primitives";

export function AppliedSlide() {
  return (
    <SlideShell index={8} eyebrow="Already shipped" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Not a moodboard. This is live in the navigator tool today.
      </h2>
      <p className="mt-3 max-w-xl text-[14px] leading-snug text-ink-soft">
        Same tokens, same components, applied to a real screen your
        navigators use every day.
      </p>

      <div
        className="fragment fade-up mt-9 w-full max-w-3xl overflow-hidden rounded-md border shadow-sm"
        style={{ borderColor: "var(--color-mist)" }}
      >
        <div
          className="flex items-center justify-between border-b px-5 py-3"
          style={{ borderColor: "var(--color-mist)", background: "var(--color-mist-soft)" }}
        >
          <span className="font-display text-[15px]">Navigator — Maria Chen</span>
          <div className="flex gap-2">
            <Tag>Panel: 68</Tag>
            <Tag>3 due today</Tag>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 p-6">
          <div>
            <div className="font-utility text-[10px] uppercase tracking-[0.15em] text-vital">
              Next follow-up
            </div>
            <div className="font-display mt-1 text-[19px]">R. Alvarez — discharge, day 2 of 3</div>
            <p className="mt-1 text-[13px] text-ink-soft">
              Cardiology follow-up pending. Call window closes in 14 hours.
            </p>
          </div>
          <div className="flex items-start">
            <Button>Call now</Button>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
