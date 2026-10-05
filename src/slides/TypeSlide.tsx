import { SlideShell } from "@/components/deck/SlideShell";

const SCALE = [4, 8, 12, 16, 24, 32, 48, 64];

const ROW = "fragment fade-up flex items-end justify-between gap-4 border-b pb-6 portrait:pb-4";

export function TypeSlide() {
  return (
    <SlideShell index={14} eyebrow="Typography" transition="slide">
      <div className="flex flex-col gap-8 portrait:gap-5">
        <div className={ROW} style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-display text-[80px] leading-none portrait:text-[56px]">Aa</div>
          <div className="text-end">
            <div className="font-display text-[16px]">Fraunces</div>
            <div className="font-utility text-[12px] text-ink-soft">Display · 400 / 500 / 600</div>
          </div>
        </div>

        <div className={ROW} style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-body text-[52px] leading-none portrait:text-[40px]">Aa</div>
          <div className="text-end">
            <div className="font-body text-[16px]">Inter</div>
            <div className="font-utility text-[12px] text-ink-soft">Body · 400 / 500 / 600</div>
          </div>
        </div>

        <div className={ROW} style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-utility text-[40px] leading-none portrait:text-[32px]">Aa</div>
          <div className="text-end">
            <div className="font-utility text-[16px]">IBM Plex Mono</div>
            <div className="font-utility text-[12px] text-ink-soft">Utility · 400 / 500</div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end justify-center gap-3 portrait:gap-2">
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
