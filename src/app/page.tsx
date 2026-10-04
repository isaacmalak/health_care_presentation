import { RevealDeck } from "@/components/deck/RevealDeck";
import { TitleSlide } from "@/slides/TitleSlide";
import { AgendaSlide } from "@/slides/AgendaSlide";
import { ContextSlide } from "@/slides/ContextSlide";
import { ApproachSlide } from "@/slides/ApproachSlide";
import { JourneySlide } from "@/slides/JourneySlide";
import { OutcomesSlide } from "@/slides/OutcomesSlide";
import { ServiceLinesSlide } from "@/slides/ServiceLinesSlide";
import { TeamSlide } from "@/slides/TeamSlide";
import { RoadmapSlide } from "@/slides/RoadmapSlide";
import { ClosingSlide } from "@/slides/ClosingSlide";
import { DesignDividerSlide } from "@/slides/DesignDividerSlide";
import { DesignFoundationsSlide } from "@/slides/DesignFoundationsSlide";
import { DesignStructureSlide } from "@/slides/DesignStructureSlide";
import { DesignComponentsSlide } from "@/slides/DesignComponentsSlide";
import { DesignGuidelinesSlide } from "@/slides/DesignGuidelinesSlide";

export default function Home() {
  return (
    <RevealDeck>
      <TitleSlide />
      <AgendaSlide />
      <ContextSlide />
      <ApproachSlide />
      <JourneySlide />
      <OutcomesSlide />
      <ServiceLinesSlide />
      <TeamSlide />
      <RoadmapSlide />
      <ClosingSlide />
      <DesignDividerSlide />
      <DesignFoundationsSlide />
      <DesignStructureSlide />
      <DesignComponentsSlide />
      <DesignGuidelinesSlide />
    </RevealDeck>
  );
}
