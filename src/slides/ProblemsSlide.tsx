import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/deck/content";

const PROBLEMS = [
  {
    problem: "No direct patient follow-up",
    solution: "Automated follow-up scheduling and a dedicated communication channel for continuous care.",
  },
  {
    problem: "Doctors forget case details",
    solution: "A complete Electronic Health Record (EHR) plus Voice Notes to log case specifics quickly.",
  },
  {
    problem: "Disorganized schedules",
    solution: "Centralized online booking that prevents double-booking and streamlines clinic days.",
  },
  {
    problem: "Privacy & data confidentiality",
    solution: "Strict Role-Based Access Control (RBAC) and end-to-end encryption for data and messages.",
  },
  {
    problem: "No periodic communication",
    solution: "Secure patient–doctor chat for ongoing questions and medical guidance.",
  },
];

export function ProblemsSlide() {
  return (
    <SlideShell index={3} eyebrow="2 · Key problems addressed">
      <SlideTitle>Five pain points, each with a direct answer</SlideTitle>
      <div className="flex flex-col">
        {PROBLEMS.map(({ problem, solution }, i) => (
          <div
            key={problem}
            className="fragment fade-up grid grid-cols-[48px_300px_1fr] items-baseline gap-6 border-t py-3.5 portrait:grid-cols-[28px_1fr] portrait:gap-x-3 portrait:gap-y-1 portrait:py-3"
            style={{ borderColor: "var(--color-mist)" }}
          >
            <span className="font-utility text-[13px] text-pulse tabular-nums portrait:row-span-2 portrait:text-[11.5px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[21px] leading-tight portrait:text-[17px]">{problem}</span>
            <span className="text-[15.5px] leading-[1.45] text-ink-soft portrait:text-[13px]">
              {solution}
            </span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
