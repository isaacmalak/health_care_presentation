type Tone = "vital" | "canvas" | "pulse";

const TONE_VAR: Record<Tone, string> = {
  vital: "var(--color-vital)",
  canvas: "var(--color-vital-bright)",
  pulse: "var(--color-pulse)",
};

/**
 * The deck's through-line: a thin vertical rail that runs down every slide,
 * standing for continuity of care. On marked slides it breaks into a single
 * heartbeat trace instead of staying decorative. Draws itself in and, on
 * pulse slides, sweeps the trace once the slide becomes current.
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
      className="pointer-events-none absolute top-16 bottom-16 start-16 w-px portrait:top-10 portrait:bottom-10 portrait:start-6"
    >
      <div
        className="vital-rail-line h-full w-full origin-top"
        style={{ background: color, opacity: pulse ? 0.35 : 0.55 }}
      />
      {pulse && (
        <svg
          className="vital-rail-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible portrait:top-[82%]"
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
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
        </svg>
      )}
    </div>
  );
}
