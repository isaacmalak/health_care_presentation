import { RevealDeck } from "@/components/deck/RevealDeck";
import { TitleSlide } from "@/slides/TitleSlide";
import { ProblemSlide } from "@/slides/ProblemSlide";
import { PillarsSlide } from "@/slides/PillarsSlide";
import { DesignFoundationsSlide } from "@/slides/DesignFoundationsSlide";
import { DesignStructureSlide } from "@/slides/DesignStructureSlide";
import { MotionSlide } from "@/slides/MotionSlide";
import { DesignComponentsSlide } from "@/slides/DesignComponentsSlide";
import { AppliedSlide } from "@/slides/AppliedSlide";
import { AccessibilitySlide } from "@/slides/AccessibilitySlide";
import { DesignGuidelinesSlide } from "@/slides/DesignGuidelinesSlide";
import { PackageSlide } from "@/slides/PackageSlide";
import { ClosingCTASlide } from "@/slides/ClosingCTASlide";

export default function Home() {
  return (
    <RevealDeck>
      <TitleSlide />
      <ProblemSlide />
      <PillarsSlide />
      <DesignFoundationsSlide />
      <DesignStructureSlide />
      <MotionSlide />
      <DesignComponentsSlide />
      <AppliedSlide />
      <AccessibilitySlide />
      <DesignGuidelinesSlide />
      <PackageSlide />
      <ClosingCTASlide />
    </RevealDeck>
  );
}
