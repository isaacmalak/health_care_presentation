import type { ReactNode } from "react";

export function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <hr
      className="my-6 border-t"
      style={{ borderColor: dark ? "rgba(245,247,244,0.18)" : "var(--color-mist)" }}
    />
  );
}

export function Stat({
  value,
  label,
  tone = "vital",
}: {
  value: string;
  label: string;
  tone?: "vital" | "pulse" | "amber" | "ink";
}) {
  const colorVar =
    tone === "vital"
      ? "var(--color-vital)"
      : tone === "pulse"
        ? "var(--color-pulse)"
        : tone === "amber"
          ? "var(--color-amber)"
          : "var(--color-ink)";
  return (
    <div>
      <div
        className="font-display text-[56px] leading-none font-medium tabular-nums"
        style={{ color: colorVar }}
      >
        {value}
      </div>
      <div className="font-utility mt-3 text-[12px] uppercase tracking-[0.12em] text-ink-soft">
        {label}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-utility inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
      style={{ borderColor: "var(--color-mist)", color: "var(--color-ink-soft)" }}
    >
      {children}
    </span>
  );
}

export function Step({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5">
      <div
        className="font-utility shrink-0 pt-1 text-[13px] tabular-nums"
        style={{ color: "var(--color-vital)" }}
      >
        {index}
      </div>
      <div>
        <div className="font-display text-[22px] leading-tight">{title}</div>
        <p className="mt-1.5 max-w-sm text-[15px] leading-snug text-ink-soft">{body}</p>
      </div>
    </div>
  );
}
