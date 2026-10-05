import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/deck/content";

type Layer = { label: string; title: string; tech: string; note: string };

const CLIENTS: Layer[] = [
  {
    label: "Front-end",
    title: "Web portals",
    tech: "Next.js",
    note: "Patient, Doctor, Assistant, and Admin apps.",
  },
  {
    label: "Mobile-ready",
    title: "Mobile apps",
    tech: "Flutter · BLoC/Cubit · Hive",
    note: "Same endpoints; Hive for offline caching.",
  },
];

const API: Layer = {
  label: "Back-end",
  title: "RESTful API layer",
  tech: "FastAPI (Python) or Frappe/ERPNext",
  note: "API-driven, built on Clean Architecture.",
};

const REALTIME: Layer = {
  label: "Real-time",
  title: "Doctor–patient chat",
  tech: "WebSockets / real-time listeners",
  note: "Live messaging between patient and doctor.",
};

const DATA: Layer[] = [
  {
    label: "Database",
    title: "SQL database",
    tech: "Relational",
    note: "Handles complex relationships.",
  },
  {
    label: "Storage",
    title: "Cloud storage",
    tech: "Firebase or Supabase",
    note: "Voice notes, chat media, labs and X-rays.",
  },
];

function Node({ layer, accent = false }: { layer: Layer; accent?: boolean }) {
  return (
    <div
      className="rounded-sm border px-4 py-3 portrait:px-3.5 portrait:py-2.5"
      style={{
        borderColor: accent ? "var(--color-vital)" : "var(--color-mist)",
        background: accent ? "color-mix(in srgb, var(--color-vital) 6%, var(--color-canvas))" : "transparent",
      }}
    >
      <div className="font-utility text-[11px] text-vital portrait:text-[10px]">{layer.label}</div>
      <div className="font-display mt-1 text-[18px] leading-tight portrait:text-[16px]">{layer.title}</div>
      <div className="font-utility mt-1.5 text-[12px] portrait:mt-1 portrait:text-[11px]">{layer.tech}</div>
      <div className="mt-1 text-[13px] leading-snug text-ink-soft portrait:text-[12px]">{layer.note}</div>
    </div>
  );
}

/** Points right in landscape (left-to-right flow), down in portrait (stacked flow). */
function Connector() {
  return (
    <div className="flex items-center justify-center portrait:h-12" aria-hidden="true">
      <svg
        className="portrait:rotate-90"
        width="44"
        height="16"
        viewBox="0 0 44 16"
        fill="none"
      >
        <path
          d="M2 8H41M41 8L33 2M41 8L33 14"
          stroke="var(--color-ink-soft)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ArchitectureSlide() {
  return (
    <SlideShell index={10} eyebrow="5 · Proposed architecture & tech stack">
      <SlideTitle lead="API-driven and built on Clean Architecture, so every interface shares one back-end.">
        One API, many interfaces
      </SlideTitle>
      <div className="grid grid-cols-[1fr_56px_1fr_56px_1fr] items-center portrait:grid-cols-1 portrait:items-stretch">
        <div className="fragment fade-up flex flex-col gap-3 portrait:grid portrait:grid-cols-2 portrait:gap-2.5">
          {CLIENTS.map((layer) => (
            <Node key={layer.title} layer={layer} />
          ))}
        </div>
        <div className="fragment fade-up">
          <Connector />
        </div>
        <div className="fragment fade-up flex flex-col gap-3 portrait:grid portrait:grid-cols-2 portrait:gap-2.5">
          <Node layer={API} accent />
          <Node layer={REALTIME} />
        </div>
        <div className="fragment fade-up">
          <Connector />
        </div>
        <div className="fragment fade-up flex flex-col gap-3 portrait:grid portrait:grid-cols-2 portrait:gap-2.5">
          {DATA.map((layer) => (
            <Node key={layer.title} layer={layer} />
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
