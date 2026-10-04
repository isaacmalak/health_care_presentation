import { SlideShell } from "@/components/deck/SlideShell";

const QUARTERS = [
  ["Q1", "Close the medication gap", "Pharmacy reconciliation joins the shared record so navigators see fills, not just orders."],
  ["Q2", "Extend the 72-hour rule to ED visits", "Same contact-window commitment, applied to emergency department discharges."],
  ["Q3", "Open navigator capacity", "Hire to bring the panel cap from 85 to 70 per navigator as volume grows."],
] as const;

export function RoadmapSlide() {
  return (
    <SlideShell index={9} eyebrow="Next three quarters">
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        Same model, two more places it needs to reach.
      </h2>
      <div className="mt-12 grid grid-cols-3 gap-10">
        {QUARTERS.map(([q, title, detail]) => (
          <div key={q} className="border-t-2 pt-5" style={{ borderColor: "var(--color-vital)" }}>
            <div className="font-utility text-[12px] tracking-[0.15em] text-vital">{q} FY27</div>
            <h3 className="font-display mt-2 text-[19px] leading-snug">{title}</h3>
            <p className="mt-2 text-[13.5px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
