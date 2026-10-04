import { SlideShell } from "@/components/deck/SlideShell";

const SCALE = [4, 8, 12, 16, 24, 32, 48, 64];

export function TypeSlide() {
  return (
    <SlideShell index={3} eyebrow="Typography" transition="slide">
      <div className="flex flex-col gap-8">
        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-display text-[88px] leading-none">Aa</div>
          <div className="text-right">
            <div className="font-display text-[15px]">Fraunces</div>
            <div className="font-utility text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              Display · 400 / 500 / 600
            </div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-body text-[56px] leading-none">Aa</div>
          <div className="text-right">
            <div className="font-body text-[15px]">Inter</div>
            <div className="font-utility text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              Body · 400 / 500 / 600
            </div>
          </div>
        </div>

        <div className="fragment fade-up flex items-end justify-between border-b pb-6" style={{ borderColor: "var(--color-mist)" }}>
          <div className="font-utility text-[40px] leading-none">Aa</div>
          <div className="text-right">
            <div className="font-utility text-[15px]">IBM Plex Mono</div>
            <div className="font-utility text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              Utility · 400 / 500
            </div>
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
