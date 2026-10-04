import { SlideShell } from "@/components/deck/SlideShell";
import { Stat } from "@/components/deck/primitives";

export function OutcomesSlide() {
  return (
    <SlideShell index={6} eyebrow="What changed" pulse>
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        Twelve months after the handoff window got an owner.
      </h2>
      <div className="mt-14 grid grid-cols-4 gap-10">
        <Stat value="↓18%" label="30-day readmissions" tone="vital" />
        <Stat value="92%" label="Referrals contacted in 72h" tone="vital" />
        <Stat value="14,200" label="Patients on an active panel" tone="ink" />
        <Stat value="↓6.3d" label="Average gap before next contact" tone="amber" />
      </div>
      <p className="mt-14 max-w-xl text-[14px] leading-relaxed text-ink-soft">
        The gap didn&rsquo;t close because people worked harder — it closed
        because exactly one person owned it, every time.
      </p>
    </SlideShell>
  );
}
