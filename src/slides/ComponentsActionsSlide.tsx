import { SlideShell } from "@/components/deck/SlideShell";
import { Button, TextField, Select, Checkbox, Toggle } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return <div className="font-utility mb-2.5 text-[12px] text-vital">{children}</div>;
}

export function ComponentsActionsSlide() {
  return (
    <SlideShell index={15} eyebrow="Components — Actions & inputs" transition="slide">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10 portrait:grid-cols-2 portrait:gap-x-5 portrait:gap-y-7">
        <div className="fragment fade-up portrait:col-span-2">
          <Label>Button</Label>
          <div className="flex flex-wrap gap-2.5">
            <Button>Primary</Button>
            <Button variant="ghost">Secondary</Button>
            <Button variant="disabled">Disabled</Button>
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Checkbox</Label>
          <div className="flex flex-col gap-3">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" checked />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>Toggle</Label>
          <div className="flex items-center gap-6">
            <Toggle />
            <Toggle on />
          </div>
        </div>

        <div className="fragment fade-up portrait:col-span-2">
          <Label>Text field</Label>
          <TextField label="Email" placeholder="you@example.com" />
        </div>

        <div className="fragment fade-up portrait:col-span-2">
          <Label>Text field · Error</Label>
          <TextField label="Password" value="••••" state="error" helper="At least 8 characters" />
        </div>

        <div className="fragment fade-up portrait:col-span-2">
          <Label>Select</Label>
          <Select label="Clinic" value="Al Waha — Main branch" />
        </div>
      </div>
    </SlideShell>
  );
}
