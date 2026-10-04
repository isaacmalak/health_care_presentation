import { SlideShell } from "@/components/deck/SlideShell";

export function TitleSlide() {
  return (
    <SlideShell index={1} dark pulse transition="zoom">
      <div className="max-w-2xl">
        <p className="font-utility text-[12px] uppercase tracking-[0.3em] text-vital-bright">
          A design system proposal
        </p>
        <h1 className="font-display mt-6 text-[96px] leading-none font-medium">
          Thread
        </h1>
        <p className="font-display mt-6 max-w-lg text-[26px] leading-snug text-canvas/90">
          One visual language, built once, that holds together every screen
          you ship after this one.
        </p>
        <div className="font-utility mt-16 flex gap-10 text-[12px] uppercase tracking-[0.15em] text-canvas/50">
          <span>Prepared for Harbor Health</span>
          <span>March 2026</span>
        </div>
      </div>
    </SlideShell>
  );
}
