import { SlideShell } from "@/components/deck/SlideShell";

const COLORS = [
  ["Clinical white", "#f5f7f4"],
  ["Deep navy", "#121a2b"],
  ["Vital teal", "#0f7a6c"],
  ["Coral", "#d85a36"],
  ["Mist gray", "#d7ddd8"],
  ["Amber", "#ad7a16"],
] as const;

export function ColorSlide() {
  return (
    <SlideShell index={13} eyebrow="Color" transition="slide">
      <div className="grid grid-cols-3 gap-6 portrait:grid-cols-2 portrait:gap-4">
        {COLORS.map(([name, hex]) => (
          <div key={name} className="fragment fade-up">
            <div
              className="h-36 w-full rounded-sm border portrait:h-28"
              style={{ background: hex, borderColor: "rgba(18,26,43,0.1)" }}
            />
            <div className="font-display mt-3 text-[18px] portrait:mt-2 portrait:text-[16px]">{name}</div>
            <div className="font-utility text-[13px] text-ink-soft portrait:text-[12px]">{hex}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
