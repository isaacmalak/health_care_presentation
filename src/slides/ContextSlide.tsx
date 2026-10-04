import { SlideShell } from "@/components/deck/SlideShell";
import { Stat } from "@/components/deck/primitives";

export function ContextSlide() {
  return (
    <SlideShell index={3} eyebrow="Why this, why now">
      <h2 className="font-display max-w-xl text-[36px] leading-tight">
        Patients weren&rsquo;t falling through one crack. They were falling
        through the handoffs.
      </h2>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        Across last year&rsquo;s panel, the two weeks after a referral or a
        discharge accounted for most of the avoidable returns. Nobody owned
        that window.
      </p>
      <div className="mt-14 flex gap-16">
        <Stat value="41%" label="Referrals with no visible follow-up" tone="pulse" />
        <Stat value="11d" label="Average gap before next contact" tone="amber" />
        <Stat value="1 of 6" label="Clinicians who could see the full chart" tone="vital" />
      </div>
    </SlideShell>
  );
}
