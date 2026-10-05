import { SlideShell } from "@/components/deck/SlideShell";
import { FeatureGroup, SlideTitle } from "@/components/deck/content";

type Group = { title: string; items: string[]; className?: string };

const COLS = {
  2: "grid-cols-2",
  3: "grid-cols-3",
} as const;

function PortalSlide({
  index,
  numeral,
  name,
  lead,
  groups,
  cols,
}: {
  index: number;
  numeral: string;
  name: string;
  lead: string;
  groups: Group[];
  cols: keyof typeof COLS;
}) {
  return (
    <SlideShell index={index} eyebrow={`4 · Functional requirements — ${numeral}`}>
      <SlideTitle lead={lead}>{name}</SlideTitle>
      <div
        className={`grid ${COLS[cols]} gap-x-10 gap-y-7 portrait:grid-cols-1 portrait:gap-y-3`}
      >
        {groups.map((group) => (
          <FeatureGroup
            key={group.title}
            title={group.title}
            items={group.items}
            className={group.className}
          />
        ))}
      </div>
    </SlideShell>
  );
}

export function PatientPortalSlide() {
  return (
    <PortalSlide
      index={5}
      numeral="I"
      name="Patient Portal"
      lead="Patients manage their entire healthcare journey on their own."
      cols={3}
      groups={[
        {
          title: "Account management",
          items: ["Self-registration, profile setup, and personal information."],
        },
        {
          title: "Appointments",
          items: [
            "Search doctors by specialty, location, rating, or center.",
            "Book with any doctor on the platform.",
            "Cancel or reschedule existing appointments.",
          ],
        },
        {
          title: "Electronic health record",
          items: [
            "Full history and past visits, across every doctor in the system.",
            "Case details as recorded by the treating physician.",
          ],
        },
        {
          title: "Document & result uploads",
          items: ["Lab results, X-rays, and documents for the doctor to review before or during the visit."],
        },
        {
          title: "Treatment plan & follow-ups",
          items: [
            "Prescriptions and assigned medications.",
            "Recommended treatment plan.",
            "Upcoming follow-up appointments.",
          ],
        },
        {
          title: "Doctor–patient communication",
          items: ["Secure chat for updates, questions, and discussing test results."],
        },
      ]}
    />
  );
}

export function DoctorPortalSlide() {
  return (
    <PortalSlide
      index={6}
      numeral="II"
      name="Doctor Portal"
      lead="The doctor's daily workspace for clinical consultations."
      cols={2}
      groups={[
        {
          title: "Consultations & clinical sessions",
          className: "row-span-3 portrait:row-span-1",
          items: [
            "Review case notes, labs, and X-rays prepared before the exam.",
            "Document diagnoses and issue prescriptions.",
            "Voice notes: record audio straight into the patient's file — no typing.",
            "Set and record the next follow-up date.",
          ],
        },
        {
          title: "Patient communication",
          items: ["Secure chat to monitor progress, answer queries, and give periodic guidance."],
        },
        {
          title: "Schedule & bookings",
          items: ["Daily, weekly, and monthly appointment views."],
        },
        {
          title: "Affiliation settings",
          items: ["Practice independently or as part of a medical center."],
        },
      ]}
    />
  );
}

export function AssistantPortalSlide() {
  return (
    <PortalSlide
      index={7}
      numeral="III"
      name="Doctor's Assistant Portal"
      lead="Streamlines clinic workflow and takes admin work off the physician."
      cols={2}
      groups={[
        {
          title: "Schedule & booking management",
          items: [
            "View all existing and upcoming bookings in the doctor's calendar.",
            "Add bookings manually for walk-ins and phone reservations.",
            "Monitor the daily queue and check patients in on arrival.",
            "Schedule, modify, or cancel follow-ups for the doctor.",
          ],
        },
        {
          title: "Patient management & data entry",
          items: [
            "Add new patients and create profiles for those not yet registered.",
            "Enter basic demographics and medical history.",
            "Log initial case details, vital signs, and chief complaints before the visit.",
          ],
        },
      ]}
    />
  );
}

export function CenterDashboardSlide() {
  return (
    <PortalSlide
      index={8}
      numeral="IV"
      name="Medical Center Dashboard"
      lead="For facilities that house multiple clinics and practitioners."
      cols={2}
      groups={[
        {
          title: "Medical staff management",
          items: [
            "Add or remove doctors and assistants under the center.",
            "Allocate clinics and working hours or shifts per doctor.",
          ],
        },
        {
          title: "Monitoring & reporting",
          items: [
            "Monitor the consolidated booking schedule for the whole center.",
            "Track performance: booking volume per doctor, patient attendance.",
            "Operational reports — never exposing private medical records.",
          ],
        },
      ]}
    />
  );
}

export function AdminPanelSlide() {
  return (
    <PortalSlide
      index={9}
      numeral="V"
      name="Super Admin Panel"
      lead="The central control hub for the entire platform."
      cols={3}
      groups={[
        {
          title: "Entity management",
          items: ["Approve, activate, or suspend independent doctors, medical centers, and assistants."],
        },
        {
          title: "User management",
          items: ["Oversee patient accounts and resolve technical support tickets."],
        },
        {
          title: "Monitoring & analytics",
          items: ["Dashboard of total bookings, platform growth, and overall activity."],
        },
      ]}
    />
  );
}
