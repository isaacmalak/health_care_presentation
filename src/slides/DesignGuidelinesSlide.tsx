import { SlideShell } from "@/components/deck/SlideShell";
import { Divider } from "@/components/deck/primitives";

const RULES = [
  [
    "Numbers get the serif, labels get the mono.",
    "Never swap them — that split is how a reader tells a headline from a readout at a glance.",
  ],
  [
    "Number a list only if order is real.",
    "The three pillars and the five journey stages earn digits; the four service lines don’t — they’re parallel, not sequential.",
  ],
  [
    "The vital rail breaks for a reason, not for rhythm.",
    "It pulses on the title, the outcomes slide, and the two dividers — the moments the deck is making a vitals claim, not every other slide.",
  ],
  [
    "Dark slides are punctuation.",
    "Reserved for the open and the two section breaks. If every slide goes dark, none of them do.",
  ],
] as const;

export function DesignGuidelinesSlide() {
  return (
    <SlideShell index={15} eyebrow="When to break it">
      <h2 className="font-display max-w-xl text-[30px] leading-tight">
        The rules this deck follows — and why.
      </h2>
      <div className="mt-8 max-w-3xl">
        {RULES.map(([rule, why], i) => (
          <div key={rule}>
            <div className="py-3">
              <h3 className="font-display text-[18px] leading-snug">{rule}</h3>
              <p className="mt-1.5 text-[13.5px] leading-snug text-ink-soft">{why}</p>
            </div>
            {i < RULES.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
