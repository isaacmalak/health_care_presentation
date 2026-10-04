import { SlideShell } from "@/components/deck/SlideShell";

export function DesignDividerSlide() {
  return (
    <SlideShell index={11} dark pulse>
      <div className="max-w-xl">
        <p className="font-utility text-[12px] uppercase tracking-[0.3em] text-vital-bright">
          Appendix
        </p>
        <h2 className="font-display mt-6 text-[48px] leading-tight">
          The design system behind this deck.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-canvas/70">
          Built by hand for Harbor Health, not pulled from a template —
          four pages covering the palette, type, structure, and the
          components every slide above is made from.
        </p>
      </div>
    </SlideShell>
  );
}
