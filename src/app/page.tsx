import { RevealDeck } from "@/components/deck/RevealDeck";
import { TitleSlide } from "@/slides/TitleSlide";
import { ColorSlide } from "@/slides/ColorSlide";
import { TypeSlide } from "@/slides/TypeSlide";
import { ComponentsActionsSlide } from "@/slides/ComponentsActionsSlide";
import { ComponentsDisplaySlide } from "@/slides/ComponentsDisplaySlide";

export default function Home() {
  return (
    <RevealDeck>
      <TitleSlide />
      <ColorSlide />
      <TypeSlide />
      <ComponentsActionsSlide />
      <ComponentsDisplaySlide />
    </RevealDeck>
  );
}
