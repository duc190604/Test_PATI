import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PressLogosSection } from "@/components/sections/press-logos-section";
import { WhyBloatingSection } from "@/components/sections/why-bloating-section";
import { HiddenDrainageSection } from "@/components/sections/hidden-drainage-section";
import { AccumulationSection } from "@/components/sections/accumulation-section";
import { WhyNothingWorkedSection } from "@/components/sections/why-nothing-worked-section";
import { IngredientsSection } from "@/components/sections/ingredients-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { CommitmentSection } from "@/components/sections/commitment-section";
import { ExpertAdviceSection } from "@/components/sections/expert-advice-section";
import { StoriesSection } from "@/components/sections/stories-section";
import { FAQSection } from "@/components/sections/faq-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ActionSection } from "@/components/sections/action-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PressLogosSection />
      <WhyBloatingSection />
      <HiddenDrainageSection />
      <AccumulationSection />
      <WhyNothingWorkedSection />
      <IngredientsSection />
      <ReviewsSection />
      <CommitmentSection />
      <ExpertAdviceSection />
      <StoriesSection />
      <FAQSection />
      <MissionSection />
      <ActionSection />
    </main>
  )
}
