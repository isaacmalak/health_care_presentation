import type { ReactNode } from "react";

type Tone = "neutral" | "vital" | "amber" | "pulse";

const TONE_COLOR: Record<Tone, string> = {
  neutral: "var(--color-ink-soft)",
  vital: "var(--color-vital)",
  amber: "var(--color-amber)",
  pulse: "var(--color-pulse)",
};

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
  tone?: Tone;
}) {
  return (
    <div>
      <div
        className="font-display text-[44px] leading-none font-medium tabular-nums"
        style={{ color: TONE_COLOR[tone] }}
      >
        {value}
      </div>
      <div className="font-utility mt-2 text-[12px] text-ink-soft">{label}</div>
    </div>
  );
}

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  const bg =
    tone === "neutral" ? "var(--color-mist-soft)" : `color-mix(in srgb, ${TONE_COLOR[tone]} 14%, white)`;
  return (
    <span
      className="font-utility inline-flex items-center rounded-full px-3 py-1 text-[12px]"
      style={{ background: bg, color: tone === "neutral" ? "var(--color-ink-soft)" : TONE_COLOR[tone] }}
    >
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-utility inline-flex items-center rounded-full border px-3 py-1 text-[12px]"
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
  variant?: "primary" | "ghost" | "disabled";
}) {
  if (variant === "disabled") {
    return (
      <span
        className="font-utility inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[14px]"
        style={{ background: "var(--color-mist)", color: "var(--color-ink-soft)" }}
      >
        {children}
      </span>
    );
  }
  if (variant === "ghost") {
    return (
      <span
        className="font-utility inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[14px]"
        style={{ borderColor: "var(--color-ink)", color: "var(--color-ink)" }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className="font-utility inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[14px]"
      style={{ background: "var(--color-vital)", color: "var(--color-canvas)" }}
    >
      {children}
    </span>
  );
}

export function TextField({
  label,
  value,
  placeholder,
  state = "default",
  helper,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  state?: "default" | "focus" | "error";
  helper?: string;
}) {
  const borderColor =
    state === "error" ? "var(--color-pulse)" : state === "focus" ? "var(--color-vital)" : "var(--color-mist)";
  return (
    <div>
      <label className="font-utility block text-[12px] text-ink-soft">{label}</label>
      <div
        className="mt-1.5 rounded-sm border px-3 py-2 text-[14px]"
        dir="auto"
        style={{
          borderColor,
          borderWidth: state === "focus" ? 2 : 1,
          boxShadow: state === "focus" ? "0 0 0 3px var(--color-vital-dim)" : "none",
          color: value ? "var(--color-ink)" : "var(--color-ink-soft)",
        }}
      >
        {value ?? placeholder}
      </div>
      {helper && (
        <div
          className="font-utility mt-1 text-[11px]"
          style={{ color: state === "error" ? "var(--color-pulse)" : "var(--color-ink-soft)" }}
        >
          {helper}
        </div>
      )}
    </div>
  );
}

export function Select({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="font-utility block text-[12px] text-ink-soft">{label}</label>
      <div
        className="mt-1.5 flex items-center justify-between rounded-sm border px-3 py-2 text-[14px]"
        style={{ borderColor: "var(--color-mist)" }}
      >
        <span dir="auto">{value}</span>
        <span className="text-ink-soft">⌄</span>
      </div>
    </div>
  );
}

export function Checkbox({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border"
        style={{
          background: checked ? "var(--color-vital)" : "transparent",
          borderColor: checked ? "var(--color-vital)" : "var(--color-mist)",
          borderWidth: checked ? 0 : 1.5,
        }}
      >
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-[14px]">{label}</span>
    </div>
  );
}

export function Toggle({ on = false }: { on?: boolean }) {
  return (
    <div
      className="relative h-[22px] w-[38px] rounded-full"
      style={{ background: on ? "var(--color-vital)" : "var(--color-mist)" }}
    >
      <div
        className="absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white shadow-sm"
        style={{ insetInlineStart: on ? 19 : 3 }}
      />
    </div>
  );
}

export function ProgressBar({ value, tone = "vital" }: { value: number; tone?: Tone }) {
  return (
    <div className="h-[6px] w-full rounded-full" style={{ background: "var(--color-mist)" }}>
      <div
        className="h-full rounded-full"
        style={{ width: `${value}%`, background: TONE_COLOR[tone] }}
      />
    </div>
  );
}

export function Avatar({ initials, tone = "vital" }: { initials: string; tone?: Tone }) {
  return (
    <div
      className="font-utility flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-medium text-white"
      style={{ background: TONE_COLOR[tone] }}
    >
      {initials}
    </div>
  );
}

export function Alert({ tone, title, body }: { tone: Tone; title: string; body: string }) {
  return (
    <div
      className="rounded-sm border-s-[3px] px-4 py-2.5"
      style={{
        borderColor: TONE_COLOR[tone],
        background: `color-mix(in srgb, ${TONE_COLOR[tone]} 7%, var(--color-canvas))`,
      }}
    >
      <div className="text-[13.5px] font-medium" style={{ color: "var(--color-ink)" }}>
        {title}
      </div>
      <div className="mt-0.5 text-[12.5px] text-ink-soft">{body}</div>
    </div>
  );
}

/**
 * Fixed categorical order for charts — validated for CVD-safe adjacency
 * (amber ↔ teal ↔ coral; amber and coral never sit next to each other).
 * Run `validate_palette.js` again before adding a 4th slot.
 */
const CHART_COLORS = ["var(--color-amber)", "var(--color-vital-bright)", "var(--color-pulse)"];

export function BarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div>
      <div className="flex items-end gap-7" style={{ height: 130 }}>
        {data.map((d, i) => (
          <div key={d.label} className="flex h-full flex-1 flex-col items-center justify-end">
            <div
              className="font-utility mb-1.5 text-[13px] tabular-nums text-ink-soft"
              dir="ltr"
            >
              {d.value}
            </div>
            <div
              className="w-full rounded-t-[4px]"
              style={{
                height: `${Math.max((d.value / max) * 100, 4)}%`,
                background: CHART_COLORS[i % CHART_COLORS.length],
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 h-px w-full" style={{ background: "var(--color-mist)" }} />
      <div className="mt-2.5 flex gap-7">
        {data.map((d) => (
          <div key={d.label} className="font-utility flex-1 text-center text-[12px] text-ink-soft">
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineChart({
  points,
  labels,
  unit = "",
}: {
  points: number[];
  labels: string[];
  unit?: string;
}) {
  const width = 280;
  const chartHeight = 92;
  const topPad = 24; // headroom so the end-value label never clips the viewBox
  const bottomPad = 8;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const coords = points.map((p, i) => [
    i * stepX,
    chartHeight - bottomPad - ((p - min) / range) * (chartHeight - topPad - bottomPad),
  ]);
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${line} L${width},${chartHeight} L0,${chartHeight} Z`;
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <div dir="ltr">
      <svg
        width="100%"
        height={chartHeight}
        viewBox={`0 0 ${width} ${chartHeight}`}
        aria-hidden="true"
      >
        <line
          x1={0}
          y1={chartHeight - bottomPad}
          x2={width}
          y2={chartHeight - bottomPad}
          stroke="var(--color-mist)"
          strokeWidth={1}
        />
        <path d={area} fill="var(--color-vital)" opacity={0.1} />
        <path
          d={line}
          fill="none"
          stroke="var(--color-vital)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {coords.map(([x, y], i) => {
          const isLast = i === coords.length - 1;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isLast ? 5.5 : 4}
              fill={isLast ? "var(--color-vital)" : "var(--color-canvas)"}
              stroke="var(--color-vital)"
              strokeWidth={2}
            />
          );
        })}
        <text
          x={lastX - 10}
          y={lastY - 12}
          textAnchor="end"
          className="font-utility"
          style={{ fontSize: 14, fontWeight: 600, fill: "var(--color-ink)" }}
        >
          {points[points.length - 1]}
          {unit}
        </text>
      </svg>
      <div className="mt-2.5 flex" style={{ width }}>
        {labels.map((l) => (
          <div key={l} className="font-utility flex-1 text-center text-[11px] text-ink-soft">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * A circular meter: one ratio against its limit, not a multi-category pie.
 * (A 3-slice donut of the system's brand hues fails CVD all-pairs — in a
 * ring, every segment touches every other, including first↔last, and
 * amber/coral don't clear that bar. A single-value ring with a same-hue
 * track sidesteps the problem entirely and matches the dataviz skill's
 * own guidance: prefer a Meter over a pie for "one ratio vs. a limit.")
 */
export function ProgressRing({ value, label }: { value: number; label: string }) {
  const radius = 46;
  const stroke = 14;
  const size = (radius + stroke / 2) * 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <div className="flex items-center gap-7">
      <div className="relative shrink-0" style={{ width: size, height: size }} dir="ltr">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="color-mix(in srgb, var(--color-vital) 16%, var(--color-canvas))"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-vital)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display text-[26px] leading-none font-medium" dir="ltr">
            {value}%
          </div>
        </div>
      </div>
      <div className="max-w-[140px] text-[13px] text-ink-soft">{label}</div>
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border p-4" style={{ borderColor: "var(--color-mist)" }}>
      {children}
    </div>
  );
}
