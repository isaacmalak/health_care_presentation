import { SlideShell } from "@/components/deck/SlideShell";
import { Button, TextField, Select, Checkbox, Toggle } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return <div className="font-utility mb-2.5 text-[12px] text-vital">{children}</div>;
}

export function ComponentsActionsSlide() {
  return (
    <SlideShell index={4} eyebrow="المكوّنات — إجراءات وإدخال" transition="slide">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10">
        <div className="fragment fade-up">
          <Label>زر</Label>
          <div className="flex flex-wrap gap-2.5">
            <Button>أساسي</Button>
            <Button variant="ghost">ثانوي</Button>
            <Button variant="disabled">معطّل</Button>
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>خانة اختيار</Label>
          <div className="flex flex-col gap-3">
            <Checkbox label="غير محدد" />
            <Checkbox label="محدد" checked />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>مفتاح تبديل</Label>
          <div className="flex items-center gap-6">
            <Toggle />
            <Toggle on />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>حقل نصي</Label>
          <TextField label="البريد الإلكتروني" placeholder="you@example.com" />
        </div>

        <div className="fragment fade-up">
          <Label>حقل نصي · خطأ</Label>
          <TextField label="كلمة المرور" value="••••" state="error" helper="8 أحرف على الأقل" />
        </div>

        <div className="fragment fade-up">
          <Label>قائمة منسدلة</Label>
          <Select label="العيادة" value="الواحة — الفرع الرئيسي" />
        </div>
      </div>
    </SlideShell>
  );
}
