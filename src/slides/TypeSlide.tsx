import { SlideShell } from "@/components/deck/SlideShell";

const SCALE = [4, 8, 12, 16, 24, 32, 48, 64];

export function TypeSlide() {
  return (
    <SlideShell index={3} eyebrow="الطباعة" transition="slide">
      <div className="flex flex-col gap-8">
        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-display text-[80px] leading-none">أب</div>
          <div className="text-end">
            <div className="font-display text-[16px]">Amiri</div>
            <div className="font-utility text-[12px] text-ink-soft">العرض · 400 / 700</div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-body text-[52px] leading-none">أب</div>
          <div className="text-end">
            <div className="font-body text-[16px]">IBM Plex Sans Arabic</div>
            <div className="font-utility text-[12px] text-ink-soft">النص الأساسي · 400 / 500 / 600</div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-utility text-[40px] leading-none">أب</div>
          <div className="text-end">
            <div className="font-utility text-[16px]">Noto Kufi Arabic</div>
            <div className="font-utility text-[12px] text-ink-soft">النصوص الوظيفية · 400 / 500</div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end gap-3">
          {SCALE.map((v) => (
            <div key={v} className="text-center">
              <div
                className="mx-auto"
                style={{ width: Math.max(v / 2, 3), height: v, background: "var(--color-vital)" }}
              />
              <div className="font-utility mt-1 text-[10px] text-ink-soft">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
