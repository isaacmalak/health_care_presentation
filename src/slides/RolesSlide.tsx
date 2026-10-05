import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/deck/content";
import { Avatar } from "@/components/deck/primitives";

const ROLES = [
  {
    initials: "PT",
    role: "Patient",
    tone: "vital",
    duties: "Registers, books appointments, tracks health across doctors, uploads documents, chats with the doctor.",
  },
  {
    initials: "DR",
    role: "Doctor",
    tone: "vital",
    duties: "Runs clinical sessions, diagnoses, records voice notes, issues prescriptions, answers patients.",
  },
  {
    initials: "AS",
    role: "Doctor's assistant",
    tone: "amber",
    duties: "Handles admin tasks, logs initial case details, adds new patients, organizes schedules.",
  },
  {
    initials: "MC",
    role: "Medical center manager",
    tone: "amber",
    duties: "Oversees the doctors of one facility and tracks operational performance.",
  },
  {
    initials: "SA",
    role: "Super admin",
    tone: "pulse",
    duties: "Full platform privileges: manages all entities and maintains system settings.",
  },
] as const;

export function RolesSlide() {
  return (
    <SlideShell index={4} eyebrow="3 · User personas & roles">
      <SlideTitle>Five roles, five dedicated dashboards</SlideTitle>
      <div className="grid grid-cols-5 gap-6 portrait:grid-cols-1 portrait:gap-0">
        {ROLES.map(({ initials, role, tone, duties }) => (
          <div
            key={role}
            className="fragment fade-up border-t pt-4 portrait:grid portrait:grid-cols-[36px_1fr] portrait:gap-x-3.5 portrait:py-3"
            style={{ borderColor: "var(--color-mist)" }}
          >
            <Avatar initials={initials} tone={tone} />
            <div>
              <div className="font-display mt-4 text-[20px] leading-tight portrait:mt-0 portrait:text-[17px]">
                {role}
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.5] text-ink-soft portrait:mt-1 portrait:text-[13px] portrait:leading-[1.4]">
                {duties}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
