type Tone = "vital" | "canvas" | "pulse";

const TONE_VAR: Record<Tone, string> = {
  vital: "var(--color-vital)",
  canvas: "var(--color-vital-bright)",
  pulse: "var(--color-pulse)",
};

/**
 * The deck's through-line: a thin vertical rail that runs down every slide,
 * standing for continuous monitoring / continuity of care. On marked slides
 * it breaks into a single heartbeat trace instead of staying decorative.
 */
export function VitalRail({
  pulse = false,
  tone = "vital",
}: {
  pulse?: boolean;
  tone?: Tone;
}) {
  const color = TONE_VAR[tone];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-16 bottom-16 left-16 w-px"
      style={{ background: color, opacity: pulse ? 0.35 : 0.55 }}
    >
      {pulse && (
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
          width="132"
          height="56"
          viewBox="0 0 132 56"
          fill="none"
        >
          <path
            d="M0 28 H40 L47 10 L57 48 L64 20 L70 28 H132"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
