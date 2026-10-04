import { SlideShell } from "@/components/deck/SlideShell";

const SYMPTOMS = [
  ["Three different blues", "Marketing’s site, the patient portal, and the navigator tool don’t look related — because nothing says they have to be."],
  ["Every new screen starts from zero", "No shared components, so every team re-solves the same button, the same table, the same empty state."],
  ["Trust leaks out at the edges", "Inconsistent UI reads as an unfinished product, in a category where patients already have to trust you with a lot."],
] as const;

export function ProblemSlide() {
  return (
    <SlideShell index={2} eyebrow="Why this matters" transition="slide">
      <h2 className="font-display max-w-xl text-[36px] leading-tight">
        Right now, your product doesn&rsquo;t look like one product.
      </h2>
      <div className="mt-12 flex max-w-4xl gap-10">
        {SYMPTOMS.map(([title, detail]) => (
          <div key={title} className="fragment fade-up flex-1">
            <h3 className="font-display text-[19px] leading-snug">{title}</h3>
            <p className="mt-2 text-[14px] leading-snug text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
      <p className="fragment fade-up mt-14 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        None of that is a people problem. It&rsquo;s a missing layer — one
        system every screen draws from instead of inventing its own.
      </p>
    </SlideShell>
  );
}
