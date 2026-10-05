import { SlideShell } from "@/components/deck/SlideShell";

export function DesignSystemDividerSlide() {
  return (
    <SlideShell index={12} eyebrow="Appendix" dark pulse transition="fade">
      <div className="flex flex-1 flex-col justify-center pb-10 portrait:pb-20">
        <h2 className="font-display text-[80px] leading-[1.04] font-medium tracking-[-0.02em] portrait:text-[48px]">
          Visual language
        </h2>
        <p className="mt-6 max-w-[560px] text-[19px] leading-[1.5] opacity-70 portrait:text-[15px]">
          Color, typography, and the UI components the portals are built from.
        </p>
      </div>
    </SlideShell>
  );
}
