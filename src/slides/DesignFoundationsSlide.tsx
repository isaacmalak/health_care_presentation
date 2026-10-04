import { SlideShell } from "@/components/deck/SlideShell";

const COLORS = [
  ["Clinical White", "#f5f7f4", "canvas"],
  ["Deep Chart Navy", "#121a2b", "ink"],
  ["Vital Teal", "#0f7a6c", "vital"],
  ["Pulse Coral", "#d85a36", "pulse"],
  ["Mist Grey", "#d7ddd8", "mist"],
  ["Amber Flag", "#ad7a16", "amber"],
] as const;

export function DesignFoundationsSlide() {
  return (
    <SlideShell index={12} eyebrow="Foundations">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Color and type, chosen on purpose.
      </h2>
      <div className="mt-8 grid grid-cols-6 gap-4">
        {COLORS.map(([name, hex]) => (
          <div key={name}>
            <div
              className="h-16 w-full rounded-sm border"
              style={{ background: hex, borderColor: "rgba(18,26,43,0.1)" }}
            />
            <div className="font-display mt-2 text-[13px]">{name}</div>
            <div className="font-utility text-[11px] text-ink-soft">{hex}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-[13px] leading-snug text-ink-soft">
        Teal stands in for vitality instead of the expected clinical blue;
        coral carries warmth and alerts; navy is the only near-black, reserved
        for ink and the two divider slides.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-10 border-t pt-8" style={{ borderColor: "var(--color-mist)" }}>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Display</div>
          <div className="font-display mt-2 text-[32px]">Fraunces</div>
          <div className="text-[13px] text-ink-soft">Headlines and big numbers. Used with restraint.</div>
        </div>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Body</div>
          <div className="font-body mt-2 text-[22px]">Inter</div>
          <div className="text-[13px] text-ink-soft">Everything you read at paragraph length.</div>
        </div>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Utility</div>
          <div className="font-utility mt-2 text-[20px]">IBM Plex Mono</div>
          <div className="text-[13px] text-ink-soft">Labels, stats, footers — the clinical-readout voice.</div>
        </div>
      </div>
    </SlideShell>
  );
}
