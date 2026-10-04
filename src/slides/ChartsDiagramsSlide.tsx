import { SlideShell } from "@/components/deck/SlideShell";
import { BarChart, LineChart, ProgressRing } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return <div className="font-utility mb-4 text-[12px] text-vital">{children}</div>;
}

function FlowNode({ children }: { children: string }) {
  return (
    <div
      className="rounded-sm border px-4 py-3 text-center text-[14px]"
      style={{ borderColor: "var(--color-mist)" }}
    >
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <svg
      className="mx-1 shrink-0"
      width="40"
      height="16"
      viewBox="0 0 40 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M39 8H2M2 8L10 2M2 8L10 14"
        stroke="var(--color-ink-soft)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const USAGE = [
  { label: "الأزرار", value: 128 },
  { label: "البطاقات", value: 64 },
  { label: "التنبيهات", value: 40 },
];

const ADOPTION = [12, 24, 31, 45, 63, 78];
const MONTHS = ["ينا", "فبر", "مار", "أبر", "ماي", "يون"];

export function ChartsDiagramsSlide() {
  return (
    <SlideShell index={6} eyebrow="المخططات والرسوم البيانية" transition="slide">
      <div className="grid grid-cols-2 gap-x-16 gap-y-9">
        <div className="fragment fade-up">
          <Label>رسم بياني شريطي — استخدام المكوّنات</Label>
          <BarChart data={USAGE} />
        </div>

        <div className="fragment fade-up">
          <Label>مؤشر دائري — تطابق الشاشات مع النظام</Label>
          <ProgressRing value={64} label="من شاشات المنتج تستخدم مكوّنات نبض مباشرة" />
        </div>

        <div className="fragment fade-up">
          <Label>رسم بياني خطي — تبنّي النظام عبر الأشهر</Label>
          <LineChart points={ADOPTION} labels={MONTHS} unit="%" />
        </div>

        <div className="fragment fade-up">
          <Label>مخطط تدفق — بنية النظام</Label>
          <div className="flex items-center" style={{ height: 100 }}>
            <FlowNode>الرموز</FlowNode>
            <FlowArrow />
            <FlowNode>المكوّنات</FlowNode>
            <FlowArrow />
            <FlowNode>الشاشات</FlowNode>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
