import { SlideShell } from "@/components/deck/SlideShell";

const COLORS = [
  ["Clinical White", "#f5f7f4"],
  ["Deep Chart Navy", "#121a2b"],
  ["Vital Teal", "#0f7a6c"],
  ["Pulse Coral", "#d85a36"],
  ["Mist Grey", "#d7ddd8"],
  ["Amber Flag", "#ad7a16"],
] as const;

export function ColorSlide() {
  return (
    <SlideShell index={2} eyebrow="Color" transition="slide">
      <div className="grid grid-cols-3 gap-6">
        {COLORS.map(([name, hex]) => (
          <div key={name} className="fragment fade-up">
            <div
              className="h-36 w-full rounded-sm border"
              style={{ background: hex, borderColor: "rgba(18,26,43,0.1)" }}
            />
            <div className="font-display mt-3 text-[17px]">{name}</div>
            <div className="font-utility text-[12px] text-ink-soft">{hex}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
