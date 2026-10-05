import type { ReactNode } from "react";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/deck/content";

const RBAC_RULES = [
  ["Assistants", "write preliminary notes only — never alter finalized diagnoses."],
  ["Center managers", "cannot access patient medical details."],
  ["Doctors", "view records of their assigned patients only."],
] as const;

function Pillar({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="fragment fade-up border-t pt-4 portrait:pt-3"
      style={{ borderColor: "var(--color-vital)" }}
    >
      <div className="font-utility text-[12px] text-vital portrait:text-[11px]">{label}</div>
      <h3 className="font-display mt-2 text-[24px] leading-tight portrait:mt-1 portrait:text-[19px]">{title}</h3>
      <div className="mt-3 text-[15px] leading-[1.5] text-ink-soft portrait:mt-2 portrait:text-[13px]">
        {children}
      </div>
    </div>
  );
}

export function SecuritySlide() {
  return (
    <SlideShell index={11} eyebrow="6 · Security & compliance">
      <SlideTitle>Private by default, traceable by design</SlideTitle>
      <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-10 portrait:grid-cols-1 portrait:gap-6">
        <Pillar label="01" title="Data encryption">
          End-to-end encryption for health records, uploaded documents, chat messages, and voice
          notes.
        </Pillar>
        <Pillar label="02" title="Role-based access control">
          <ul className="flex flex-col gap-2.5 portrait:gap-1.5">
            {RBAC_RULES.map(([who, rule]) => (
              <li key={who}>
                <span className="font-medium text-ink">{who}</span> {rule}
              </li>
            ))}
          </ul>
        </Pillar>
        <Pillar label="03" title="Audit logging">
          Immutable logs of every critical system action, for accountability and traceability.
        </Pillar>
      </div>
    </SlideShell>
  );
}
