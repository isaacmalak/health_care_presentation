import { SlideShell } from "@/components/deck/SlideShell";

export function TitleSlide() {
  return (
    <SlideShell index={1} dark pulse transition="zoom">
      <div className="max-w-2xl">
        <p className="font-utility text-[12px] uppercase tracking-[0.3em] text-vital-bright">
          Design system
        </p>
        <h1 className="font-display mt-6 text-[104px] leading-none font-medium">
          Thread
        </h1>
      </div>
    </SlideShell>
  );
}
