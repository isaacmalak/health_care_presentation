import { SlideShell } from "@/components/deck/SlideShell";

const SCALE = [4, 8, 12, 16, 24, 32, 48, 64];

export function DesignStructureSlide() {
  return (
    <SlideShell index={5} eyebrow="Structure & signature" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        A fixed canvas, a spacing scale, and the thread itself.
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-14">
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">
            Canvas & spacing
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] leading-snug text-ink-soft">
            Every slide is a fixed 1280×720 canvas — reveal.js scales the
            whole deck to fit the screen, so nothing reflows and spacing
            stays exact. Margins and gaps are pulled from one scale, in px:
          </p>
          <div className="mt-4 flex items-end gap-3">
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

        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">
            Where the name comes from
          </div>
          <p className="mt-2 max-w-sm text-[13.5px] leading-snug text-ink-soft">
            A thin line runs down the left edge of every slide — continuity,
            made literal. On the open and the close, it breaks into a single
            heartbeat trace instead of staying decoration. That line is Thread.
          </p>
          <div
            className="relative mt-5 flex h-28 w-full items-center rounded-sm border px-10"
            style={{ borderColor: "var(--color-mist)" }}
          >
            <div className="h-full w-px" style={{ background: "var(--color-vital)", opacity: 0.55 }} />
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
              width="132"
              height="56"
              viewBox="0 0 132 56"
              fill="none"
            >
              <path
                d="M0 28 H40 L47 10 L57 48 L64 20 L70 28 H132"
                stroke="var(--color-vital)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
