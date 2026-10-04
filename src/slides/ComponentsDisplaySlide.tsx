import { SlideShell } from "@/components/deck/SlideShell";
import { Card, Badge, Tag, Alert, Stat, Avatar, ProgressBar } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return (
    <div className="font-utility mb-2.5 text-[10px] uppercase tracking-[0.12em] text-vital">
      {children}
    </div>
  );
}

export function ComponentsDisplaySlide() {
  return (
    <SlideShell index={5} eyebrow="Components — Display & Feedback" transition="slide">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10">
        <div className="fragment fade-up">
          <Label>Card</Label>
          <Card>
            <div className="font-display text-[16px]">Navigator panel</div>
            <div className="mt-1 text-[12.5px] text-ink-soft">68 active patients</div>
          </Card>
        </div>

        <div className="fragment fade-up">
          <Label>Badge</Label>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge tone="vital">Active</Badge>
            <Badge tone="amber">Pending</Badge>
            <Badge tone="pulse">Overdue</Badge>
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Tag</Label>
          <div className="flex flex-wrap gap-2">
            <Tag>Cardiology</Tag>
            <Tag>Behavioral</Tag>
          </div>
        </div>

        <div className="fragment fade-up col-span-2">
          <Label>Alert</Label>
          <div className="flex flex-col gap-2.5">
            <Alert tone="vital" title="Synced" body="Care plan updated 2 minutes ago." />
            <Alert tone="pulse" title="Action needed" body="Follow-up call window closes in 14 hours." />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Avatar</Label>
          <div className="flex gap-2">
            <Avatar initials="MC" />
            <Avatar initials="RA" tone="amber" />
            <Avatar initials="JP" tone="pulse" />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Stat</Label>
          <Stat value="92%" label="On-time contact" />
        </div>

        <div className="fragment fade-up">
          <Label>Progress</Label>
          <div className="flex flex-col gap-3 pt-2">
            <ProgressBar value={72} />
            <ProgressBar value={40} tone="amber" />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
