import { SlideShell } from "@/components/deck/SlideShell";
import { Stat, Tag, Divider } from "@/components/deck/primitives";

export function DesignComponentsSlide() {
  return (
    <SlideShell index={14} eyebrow="Building blocks">
      <h2 className="font-display max-w-lg text-[30px] leading-tight">
        Four components, reused on every slide above.
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-x-14 gap-y-8">
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Eyebrow</div>
          <p className="font-utility mt-2 text-[11px] uppercase tracking-[0.22em] text-vital">
            Where this component sits
          </p>
          <p className="mt-2 text-[13px] text-ink-soft">
            Mono, uppercase, wide tracking — names the slide&rsquo;s job before the headline does.
          </p>
        </div>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Stat</div>
          <div className="mt-1">
            <Stat value="92%" label="Example metric" tone="vital" />
          </div>
        </div>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Divider</div>
          <Divider />
          <p className="text-[13px] text-ink-soft">
            Hairline in Mist Grey — separates list items without boxing them.
          </p>
        </div>
        <div>
          <div className="font-utility text-[11px] uppercase tracking-[0.15em] text-vital">Tag</div>
          <div className="mt-1 flex gap-2">
            <Tag>Partner</Tag>
            <Tag>Example</Tag>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
