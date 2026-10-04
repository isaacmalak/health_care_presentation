import { SlideShell } from "@/components/deck/SlideShell";
import { Button, TextField, Select, Checkbox, Toggle } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return (
    <div className="font-utility mb-2.5 text-[10px] uppercase tracking-[0.12em] text-vital">
      {children}
    </div>
  );
}

export function ComponentsActionsSlide() {
  return (
    <SlideShell index={4} eyebrow="Components — Actions & Inputs" transition="slide">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10">
        <div className="fragment fade-up">
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

        <div className="fragment fade-up">
          <Label>Text field</Label>
          <TextField label="Email" placeholder="you@example.com" />
        </div>

        <div className="fragment fade-up">
          <Label>Text field · error</Label>
          <TextField label="Password" value="••••" state="error" helper="At least 8 characters" />
        </div>

        <div className="fragment fade-up">
          <Label>Select</Label>
          <Select label="Clinic" value="Riverside — Main" />
        </div>
      </div>
    </SlideShell>
  );
}
