import { SlideShell } from "@/components/deck/SlideShell";

const PILLARS = [
  ["Foundations", "The color, type, and spacing tokens everything else is built from."],
  ["Components", "Buttons, stats, tags, dividers — built once, used everywhere, never rebuilt by hand."],
  ["Motion", "Durations and easings as tokens, so animation feels like one decision, not forty."],
  ["Governance", "The rules that keep Thread from drifting apart as more people use it."],
] as const;

export function PillarsSlide() {
  return (
    <SlideShell index={3} eyebrow="What you’re buying" transition="slide" autoAnimate>
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        Four layers. Each one depends on the last.
      </h2>
      <div className="mt-12 grid grid-cols-4 gap-8">
        {PILLARS.map(([title, detail], i) => (
          <div key={title} className="fragment fade-up border-t-2 pt-5" style={{ borderColor: "var(--color-vital)" }}>
            <div className="font-utility text-[12px] text-vital">0{i + 1}</div>
            <h3
              className="font-display mt-2 text-[20px] leading-snug"
              {...(title === "Foundations" ? { "data-id": "thread-topic" } : {})}
            >
              {title}
            </h3>
            <p className="mt-2 text-[13px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
