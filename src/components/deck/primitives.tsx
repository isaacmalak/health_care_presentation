import type { ReactNode } from "react";

export function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <hr
      className="my-4 border-t"
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

export function Button({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <span
        className="font-utility inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[13px] tracking-[0.04em]"
        style={{ borderColor: "var(--color-ink)", color: "var(--color-ink)" }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className="font-utility inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[13px] tracking-[0.04em]"
      style={{ background: "var(--color-vital)", color: "var(--color-canvas)" }}
    >
      {children}
    </span>
  );
}
