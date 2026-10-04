import { SlideShell } from "@/components/deck/SlideShell";
import { Card, Badge, Tag, Alert, Stat, Avatar, ProgressBar } from "@/components/deck/primitives";

function Label({ children }: { children: string }) {
  return <div className="font-utility mb-2.5 text-[12px] text-vital">{children}</div>;
}

export function ComponentsDisplaySlide() {
  return (
    <SlideShell index={5} eyebrow="المكوّنات — عرض وتنبيهات" transition="slide">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10">
        <div className="fragment fade-up">
          <Label>بطاقة</Label>
          <Card>
            <div className="font-display text-[17px]">لوحة المنسّق</div>
            <div className="mt-1 text-[13px] text-ink-soft">68 مريضاً نشطاً</div>
          </Card>
        </div>

        <div className="fragment fade-up">
          <Label>شارة</Label>
          <div className="flex flex-wrap gap-2">
            <Badge>افتراضي</Badge>
            <Badge tone="vital">نشط</Badge>
            <Badge tone="amber">قيد الانتظار</Badge>
            <Badge tone="pulse">متأخر</Badge>
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>وسم</Label>
          <div className="flex flex-wrap gap-2">
            <Tag>أمراض القلب</Tag>
            <Tag>الصحة النفسية</Tag>
          </div>
        </div>

        <div className="fragment fade-up col-span-2">
          <Label>تنبيه</Label>
          <div className="flex flex-col gap-2.5">
            <Alert tone="vital" title="تمت المزامنة" body="تم تحديث خطة الرعاية قبل دقيقتين." />
            <Alert tone="pulse" title="يتطلب إجراءً" body="نافذة الاتصال للمتابعة تُغلق خلال 14 ساعة." />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>الصورة الرمزية</Label>
          <div className="flex gap-2">
            <Avatar initials="م س" />
            <Avatar initials="ع ف" tone="amber" />
            <Avatar initials="ل ن" tone="pulse" />
          </div>
        </div>

        <div className="fragment fade-up">
          <Label>إحصائية</Label>
          <Stat value="92%" label="تواصل في الوقت المحدد" />
        </div>

        <div className="fragment fade-up">
          <Label>شريط تقدم</Label>
          <div className="flex flex-col gap-3 pt-2">
            <ProgressBar value={72} />
            <ProgressBar value={40} tone="amber" />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
