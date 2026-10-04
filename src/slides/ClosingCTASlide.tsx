import { SlideShell } from "@/components/deck/SlideShell";
import { Button } from "@/components/deck/primitives";

export function ClosingCTASlide() {
  return (
    <SlideShell index={12} dark pulse transition="zoom">
      <div className="max-w-xl">
        <h2 className="font-display text-[42px] leading-tight">
          Let&rsquo;s build with Thread.
        </h2>
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-canvas/70">
          Start with Foundations and grow into Build whenever the team is
          ready — the tokens don&rsquo;t change underneath you.
        </p>
        <div className="mt-10">
          <Button>Start with Foundations</Button>
        </div>
        <div className="font-utility mt-14 flex flex-col gap-1 text-[13px] text-canvas/70">
          <span>Priya Anand, Design Systems Lead</span>
          <span>thread@yourstudio.com</span>
        </div>
      </div>
    </SlideShell>
  );
}
