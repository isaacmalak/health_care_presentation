import { SlideShell } from "@/components/deck/SlideShell";

export function TitleSlide() {
  return (
    <SlideShell index={1} dark pulse transition="zoom">
      <div className="flex flex-1 flex-col justify-center pb-10 portrait:pb-20">
        <p className="font-utility text-[14px] tracking-[0.08em] text-vital-bright uppercase portrait:text-[11px]">
          Business Requirements Document
        </p>
        <h1 className="font-display mt-7 max-w-[900px] text-[88px] leading-[1.02] font-medium tracking-[-0.02em] portrait:mt-5 portrait:text-[50px]">
          Unified Medical Management System
        </h1>
        <p className="mt-8 max-w-[620px] text-[19px] leading-[1.5] opacity-70 portrait:mt-6 portrait:text-[15px]">
          One platform connecting patients, doctors, assistants, and medical centers.
        </p>
      </div>
    </SlideShell>
  );
}
