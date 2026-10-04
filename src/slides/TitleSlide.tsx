import { SlideShell } from "@/components/deck/SlideShell";

export function TitleSlide() {
  return (
    <SlideShell index={1} dark pulse transition="zoom">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-utility text-[14px] text-vital-bright">نظام تصميم</p>
        <h1 className="font-display mt-10 text-[110px] leading-[1.3] font-bold">نبض</h1>
      </div>
    </SlideShell>
  );
}
