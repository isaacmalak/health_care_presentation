import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/deck/content";
import { Tag } from "@/components/deck/primitives";

const FACETS = [
  { label: "Connects", items: ["Patients", "Doctors", "Doctor's assistants", "Medical center managers"] },
  { label: "Manages", items: ["Appointments", "Medical records", "Prescriptions"] },
  { label: "Guarantees", items: ["Privacy", "Streamlined data access", "Continuous care"] },
];

export function OverviewSlide() {
  return (
    <SlideShell index={2} eyebrow="1 · Project overview">
      <SlideTitle>Digitizing healthcare as one connected ecosystem</SlideTitle>
      <p className="max-w-[880px] text-[21px] leading-[1.55] portrait:text-[15.5px]">
        A comprehensive medical platform that manages appointments, medical records, and
        prescriptions end to end — with a dedicated dashboard for every type of user.
      </p>
      <div className="mt-12 grid grid-cols-3 gap-10 portrait:mt-9 portrait:grid-cols-1 portrait:gap-6">
        {FACETS.map((facet) => (
          <div
            key={facet.label}
            className="fragment fade-up border-t pt-4 portrait:pt-3"
            style={{ borderColor: "var(--color-mist)" }}
          >
            <div className="font-utility text-[12.5px] font-medium text-vital">{facet.label}</div>
            <div className="mt-3 flex flex-wrap gap-2 portrait:mt-2.5">
              {facet.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
