import { RevealDeck } from "@/components/deck/RevealDeck";
import { TitleSlide } from "@/slides/TitleSlide";
import { OverviewSlide } from "@/slides/OverviewSlide";
import { ProblemsSlide } from "@/slides/ProblemsSlide";
import { RolesSlide } from "@/slides/RolesSlide";
import {
  PatientPortalSlide,
  DoctorPortalSlide,
  AssistantPortalSlide,
  CenterDashboardSlide,
  AdminPanelSlide,
} from "@/slides/PortalSlides";
import { ArchitectureSlide } from "@/slides/ArchitectureSlide";
import { SecuritySlide } from "@/slides/SecuritySlide";
import { DesignSystemDividerSlide } from "@/slides/DesignSystemDividerSlide";
import { ColorSlide } from "@/slides/ColorSlide";
import { TypeSlide } from "@/slides/TypeSlide";
import { ComponentsActionsSlide } from "@/slides/ComponentsActionsSlide";
import { ComponentsDisplaySlide } from "@/slides/ComponentsDisplaySlide";
import { ChartsDiagramsSlide } from "@/slides/ChartsDiagramsSlide";

export default function Home() {
  return (
    <RevealDeck>
      {/* Business requirements */}
      <TitleSlide />
      <OverviewSlide />
      <ProblemsSlide />
      <RolesSlide />
      <PatientPortalSlide />
      <DoctorPortalSlide />
      <AssistantPortalSlide />
      <CenterDashboardSlide />
      <AdminPanelSlide />
      <ArchitectureSlide />
      <SecuritySlide />
      {/* Appendix: visual language */}
      <DesignSystemDividerSlide />
      <ColorSlide />
      <TypeSlide />
      <ComponentsActionsSlide />
      <ComponentsDisplaySlide />
      <ChartsDiagramsSlide />
    </RevealDeck>
  );
}
