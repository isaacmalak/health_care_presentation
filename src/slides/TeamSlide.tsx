import { SlideShell } from "@/components/deck/SlideShell";
import { Tag } from "@/components/deck/primitives";

const ROLES = [
  ["19", "Care navigators", "Caseload capped at 85 so the follow-up window never slips."],
  ["34", "Primary & behavioral clinicians", "Across six clinics, reading from the same care plan."],
  ["4", "Partner health systems", "Receive and send referrals through the shared record, not a fax line."],
];

export function TeamSlide() {
  return (
    <SlideShell index={8} eyebrow="Who’s in the room">
      <h2 className="font-display max-w-lg text-[32px] leading-tight">
        The model is a staffing ratio before it&rsquo;s software.
      </h2>
      <div className="mt-12 grid grid-cols-3 gap-10">
        {ROLES.map(([count, title, detail]) => (
          <div key={title}>
            <div className="font-display text-[44px] leading-none text-vital">{count}</div>
            <div className="font-display mt-2 text-[17px]">{title}</div>
            <p className="mt-2 text-[13px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-wrap gap-2">
        <Tag>Riverside Medical Group</Tag>
        <Tag>County Behavioral Health</Tag>
        <Tag>Alden Payer Network</Tag>
        <Tag>Lower Valley Hospital</Tag>
      </div>
    </SlideShell>
  );
}
