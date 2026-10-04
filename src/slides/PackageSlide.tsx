import { SlideShell } from "@/components/deck/SlideShell";

const TIERS = [
  {
    name: "Foundations",
    blurb: "Get the vocabulary in place.",
    items: ["Color, type & spacing tokens", "Figma variables, synced to code", "Usage documentation"],
    highlight: false,
  },
  {
    name: "Build",
    blurb: "Foundations, plus the parts teams actually assemble screens from.",
    items: ["Everything in Foundations", "Full component library (this deck’s five, and the rest)", "Motion tokens & transition rules"],
    highlight: true,
  },
  {
    name: "Partner",
    blurb: "Build, plus us in the room while it rolls out.",
    items: ["Everything in Build", "Governance review on your first two launches", "Direct line to the team that built it"],
    highlight: false,
  },
] as const;

export function PackageSlide() {
  return (
    <SlideShell index={11} eyebrow="What’s included" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Three ways to bring Thread in-house.
      </h2>
      <div className="mt-10 grid grid-cols-3 gap-8">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="fragment fade-up flex flex-col rounded-sm border p-6"
            style={{
              borderColor: tier.highlight ? "var(--color-vital)" : "var(--color-mist)",
              borderWidth: tier.highlight ? 2 : 1,
            }}
          >
            <h3 className="font-display text-[21px]">{tier.name}</h3>
            <p className="mt-1.5 text-[13px] leading-snug text-ink-soft">{tier.blurb}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
              {tier.items.map((item) => (
                <li key={item} className="flex gap-2 text-[13px] leading-snug text-ink-soft">
                  <span className="text-vital">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
