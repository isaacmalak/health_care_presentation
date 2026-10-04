import { SlideShell } from "@/components/deck/SlideShell";

export function ClosingSlide() {
  return (
    <SlideShell index={10} dark pulse>
      <div className="max-w-xl">
        <h2 className="font-display text-[42px] leading-tight">
          Keep the thread going.
        </h2>
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-canvas/70">
          Questions on the model, the numbers, or where it should reach next —
          bring them to the care navigation desk.
        </p>
        <div className="font-utility mt-14 flex flex-col gap-1 text-[13px] text-canvas/70">
          <span>Priya Anand, Director of Care Navigation</span>
          <span>care-navigation@harborhealth.org</span>
        </div>
      </div>
    </SlideShell>
  );
}
