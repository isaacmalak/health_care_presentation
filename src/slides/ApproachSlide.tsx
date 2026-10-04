import { SlideShell } from "@/components/deck/SlideShell";
import { Divider } from "@/components/deck/primitives";

const PILLARS = [
  {
    name: "One navigator, one panel",
    detail:
      "Every patient gets a named care navigator who follows them across settings, not a queue of whoever’s free.",
  },
  {
    name: "One record, read by everyone",
    detail:
      "Referrals, discharge notes, and the care plan live in a single chart every clinician and the navigator can open.",
  },
  {
    name: "Contact inside 72 hours",
    detail:
      "Every referral and discharge gets a scheduled human follow-up before the 72-hour mark, not a letter in the mail.",
  },
];

export function ApproachSlide() {
  return (
    <SlideShell index={4} eyebrow="The Harbor model">
      <h2 className="font-display max-w-lg text-[34px] leading-tight">
        Three commitments, in this order.
      </h2>
      <p className="mt-3 max-w-md text-[14px] text-ink-soft">
        Each one only works once the one before it is in place.
      </p>
      <div className="mt-10 max-w-2xl">
        {PILLARS.map((p, i) => (
          <div key={p.name}>
            <div className="flex gap-6">
              <span className="font-utility w-6 shrink-0 pt-1 text-[13px] text-vital">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[22px]">{p.name}</h3>
                <p className="mt-1.5 max-w-lg text-[15px] leading-snug text-ink-soft">
                  {p.detail}
                </p>
              </div>
            </div>
            {i < PILLARS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
