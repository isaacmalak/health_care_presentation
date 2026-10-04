import { SlideShell } from "@/components/deck/SlideShell";

const ITEMS = [
  ["01", "Why continuity, why now", "The gap we kept finding in the data."],
  ["02", "The Harbor model", "Three moves that close it."],
  ["03", "How care moves", "A patient’s path through the model."],
  ["04", "What changed", "Twelve months of numbers."],
  ["05", "Where we show up", "Service lines and who holds them."],
  ["06", "Who’s in the room", "Team, partners, capacity."],
  ["07", "Next three quarters", "What we’re building on this."],
] as const;

export function AgendaSlide() {
  return (
    <SlideShell index={2} eyebrow="What’s ahead">
      <div className="flex max-w-3xl flex-col gap-5">
        {ITEMS.map(([num, title, detail]) => (
          <div key={num} className="flex items-baseline gap-6">
            <span className="font-utility w-6 shrink-0 text-[13px] text-vital">{num}</span>
            <div>
              <span className="font-display text-[20px]">{title}</span>
              <span className="ml-3 text-[14px] text-ink-soft">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
