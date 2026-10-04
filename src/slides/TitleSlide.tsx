import { SlideShell } from "@/components/deck/SlideShell";

export function TitleSlide() {
  return (
    <SlideShell index={1} dark pulse>
      <div className="max-w-2xl">
        <p className="font-utility text-[12px] uppercase tracking-[0.3em] text-vital-bright">
          Harbor Health · FY26 Continuity Review
        </p>
        <h1 className="font-display mt-6 text-[64px] leading-[1.05] font-medium">
          The thread that keeps
          <br />
          care from breaking.
        </h1>
        <p className="mt-8 max-w-md text-[17px] leading-relaxed text-canvas/70">
          A year of closing the gaps between visits — what we built, what it
          moved, and where the next ninety days go.
        </p>
        <div className="font-utility mt-16 flex gap-10 text-[12px] uppercase tracking-[0.15em] text-canvas/50">
          <span>Care Delivery Review Board</span>
          <span>March 2026</span>
        </div>
      </div>
    </SlideShell>
  );
}
