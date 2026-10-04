import { SlideShell } from "@/components/deck/SlideShell";
import { Stat, Tag, Divider, Button } from "@/components/deck/primitives";

export function DesignComponentsSlide() {
  return (
    <SlideShell index={7} eyebrow="Building blocks" transition="slide">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Five components. Everything above is built from these.
      </h2>

      <div className="mt-8 grid grid-cols-3 gap-x-12 gap-y-9">
        <div className="fragment fade-up">
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Eyebrow</div>
          <p className="font-utility mt-2 text-[11px] uppercase tracking-[0.22em] text-vital">
            Where this sits
          </p>
          <p className="mt-2 text-[13px] text-ink-soft">
            Mono, uppercase, wide tracking — names the slide&rsquo;s job before the headline does.
          </p>
        </div>
        <div className="fragment fade-up">
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Stat</div>
          <div className="mt-1">
            <Stat value="92%" label="Example metric" tone="vital" />
          </div>
        </div>
        <div className="fragment fade-up">
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Divider</div>
          <Divider />
          <p className="text-[13px] text-ink-soft">
            Hairline in Mist Grey — separates list items without boxing them.
          </p>
        </div>
        <div className="fragment fade-up">
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Tag</div>
          <div className="mt-1 flex gap-2">
            <Tag>Partner</Tag>
            <Tag>Example</Tag>
          </div>
        </div>
        <div className="fragment fade-up">
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Button</div>
          <div className="mt-1 flex gap-2">
            <Button>Get started</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
