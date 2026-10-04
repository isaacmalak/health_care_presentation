import { SlideShell } from "@/components/deck/SlideShell";

const STAGES = [
  ["Referral or discharge", "Order drops into the shared record, flagged to a navigator the same day."],
  ["Navigator intake", "A call within 72 hours. Barriers — transport, meds, coverage — get named up front."],
  ["Shared care plan", "One page, visible to every clinician the patient sees next."],
  ["Follow-up cadence", "Checkpoints set by condition, not by whoever remembers to schedule one."],
  ["Outcome review", "Did it hold? The panel’s cadence adjusts from what actually happened."],
] as const;

export function JourneySlide() {
  return (
    <SlideShell index={5} eyebrow="How care moves">
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        One patient, five weeks, no silent gap.
      </h2>
      <div className="mt-12 flex max-w-4xl gap-0">
        {STAGES.map(([title, detail], i) => (
          <div key={title} className="relative flex-1 pr-6">
            {i < STAGES.length - 1 && (
              <div
                className="absolute top-[7px] left-0 h-px w-full"
                style={{ background: "var(--color-mist)" }}
              />
            )}
            <div
              className="relative h-3.5 w-3.5 rounded-full border-2"
              style={{ borderColor: "var(--color-vital)", background: "var(--color-canvas)" }}
            />
            <div className="font-utility mt-4 text-[11px] text-vital">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-display mt-1 text-[17px] leading-tight">{title}</div>
            <p className="mt-2 text-[13px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
