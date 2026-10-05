import { SlideShell } from "@/components/deck/SlideShell";
import { BarChart, LineChart, ProgressRing } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return <div className="font-utility mb-4 text-[12px] text-vital portrait:mb-2">{children}</div>;
}

function FlowNode({ children }: { children: string }) {
  return (
    <div
      className="rounded-sm border px-4 py-3 text-center text-[14px] portrait:px-3 portrait:py-2 portrait:text-[13px]"
      style={{ borderColor: "var(--color-mist)" }}
    >
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <svg
      className="mx-1 shrink-0 portrait:mx-0 portrait:w-7"
      width="40"
      height="16"
      viewBox="0 0 40 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 8H38M38 8L30 2M38 8L30 14"
        stroke="var(--color-ink-soft)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const USAGE = [
  { label: "Buttons", value: 128 },
  { label: "Cards", value: 64 },
  { label: "Alerts", value: 40 },
];

const ADOPTION = [12, 24, 31, 45, 63, 78];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const CHART_BOX = "flex items-center justify-center h-[150px] portrait:h-[118px]";

export function ChartsDiagramsSlide() {
  return (
    <SlideShell index={17} eyebrow="Charts & diagrams" transition="slide">
      <div className="grid grid-cols-2 gap-x-16 gap-y-9 portrait:grid-cols-1 portrait:gap-y-5">
        <div className="fragment fade-up">
          <Label>Bar chart — component usage</Label>
          <div className={CHART_BOX}>
            <BarChart data={USAGE} />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Progress ring — screens on the system</Label>
          <div className={CHART_BOX}>
            <ProgressRing value={64} label="of product screens use design-system components directly" />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Line chart — adoption by month</Label>
          <div className={CHART_BOX}>
            <LineChart points={ADOPTION} labels={MONTHS} unit="%" />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Flow diagram — system structure</Label>
          <div className={CHART_BOX}>
            <FlowNode>Tokens</FlowNode>
            <FlowArrow />
            <FlowNode>Components</FlowNode>
            <FlowArrow />
            <FlowNode>Screens</FlowNode>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
