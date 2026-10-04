import { SlideShell } from "@/components/deck/SlideShell";
import { Divider } from "@/components/deck/primitives";

const LINES = [
  ["Primary care", "6 clinics", "The panel’s front door and the navigator’s home base."],
  ["Behavioral health", "3 clinics + telehealth", "Co-located, same chart — referred in one click, not a separate fax."],
  ["Chronic condition management", "4,100 patients", "Diabetes, COPD, and heart failure cohorts on a fixed check-in cadence."],
  ["Care navigation", "19 navigators", "The thread running through all three — one navigator per patient, not per department."],
] as const;

export function ServiceLinesSlide() {
  return (
    <SlideShell index={7} eyebrow="Where we show up">
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        Four lines. One record underneath all of them.
      </h2>
      <div className="mt-10 max-w-3xl">
        {LINES.map(([name, scale, detail], i) => (
          <div key={name}>
            <div className="flex items-baseline gap-8 py-3">
              <h3 className="font-display w-[19rem] shrink-0 text-[19px]">{name}</h3>
              <span className="font-utility w-36 shrink-0 text-[12px] text-vital">{scale}</span>
              <p className="text-[14px] leading-snug text-ink-soft">{detail}</p>
            </div>
            {i < LINES.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
