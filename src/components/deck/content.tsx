import type { ReactNode } from "react";

/** Slide headline + optional one-line lead, shared by every content slide. */
export function SlideTitle({ children, lead }: { children: ReactNode; lead?: ReactNode }) {
  return (
    <div className="mb-9 max-w-[960px] portrait:mb-6">
      <h2 className="font-display text-[44px] leading-[1.1] font-medium tracking-[-0.01em] portrait:text-[30px]">
        {children}
      </h2>
      {lead && (
        <p className="mt-3 text-[17px] leading-[1.5] text-ink-soft portrait:mt-2.5 portrait:text-[14px]">
          {lead}
        </p>
      )}
    </div>
  );
}

/** A titled group of requirements, revealed as one fragment. */
export function FeatureGroup({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`fragment fade-up border-t pt-3.5 portrait:pt-2.5 ${className}`}
      style={{ borderColor: "var(--color-mist)" }}
    >
      <h3 className="font-utility text-[12.5px] font-medium text-vital portrait:text-[11.5px]">
        {title}
      </h3>
      <ul className="mt-2 flex flex-col gap-1.5 portrait:mt-1.5 portrait:gap-1">
        {items.map((item) => (
          <li
            key={item}
            className="relative ps-4 text-[15px] leading-[1.45] portrait:text-[13px] portrait:leading-[1.4]"
          >
            <span
              aria-hidden="true"
              className="absolute start-0 top-[0.62em] h-[5px] w-[5px] rounded-full"
              style={{ background: "var(--color-vital)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
