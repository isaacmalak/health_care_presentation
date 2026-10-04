import { SlideShell } from "@/components/deck/SlideShell";

const COLORS = [
  ["أبيض سريري", "#f5f7f4"],
  ["كحلي عميق", "#121a2b"],
  ["فيروزي حيوي", "#0f7a6c"],
  ["مرجاني نابض", "#d85a36"],
  ["رمادي ضبابي", "#d7ddd8"],
  ["كهرماني", "#ad7a16"],
] as const;

export function ColorSlide() {
  return (
    <SlideShell index={2} eyebrow="الألوان" transition="slide">
      <div className="grid grid-cols-3 gap-6">
        {COLORS.map(([name, hex]) => (
          <div key={name} className="fragment fade-up">
            <div
              className="h-36 w-full rounded-sm border"
              style={{ background: hex, borderColor: "rgba(18,26,43,0.1)" }}
            />
            <div className="font-display mt-3 text-[18px]">{name}</div>
            <div className="font-utility text-right text-[13px] text-ink-soft" dir="ltr">
              {hex}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
