import { SlideShell } from "@/components/deck/SlideShell";
import { Divider } from "@/components/deck/primitives";

const RULES = [
  [
    "Numbers get the serif, labels get the mono.",
    "Never swapped — that split is how a reader tells a headline from a readout at a glance.",
  ],
  [
    "Number a list only if the order is real.",
    "A sequence earns digits; a set of parallel options doesn’t. Numbering the unordered is how an interface lies.",
  ],
  [
    "Thread breaks for a reason, not for rhythm.",
    "The signature line pulses only on the open and the close — the moments the product is making a vitals claim.",
  ],
  [
    "Dark screens are punctuation.",
    "Reserved for moments that need weight. If every screen goes dark, none of them do.",
  ],
] as const;

export function DesignGuidelinesSlide() {
  return (
    <SlideShell index={10} eyebrow="Governance" transition="slide">
      <h2 className="font-display max-w-xl text-[28px] leading-tight">
        This is the part a component library doesn&rsquo;t give you.
      </h2>
      <div className="mt-6 max-w-3xl">
        {RULES.map(([rule, why], i) => (
          <div key={rule} className="fragment fade-up">
            <div className="py-2.5">
              <h3 className="font-display text-[17px] leading-snug">{rule}</h3>
              <p className="mt-1 text-[13px] leading-snug text-ink-soft">{why}</p>
            </div>
            {i < RULES.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
