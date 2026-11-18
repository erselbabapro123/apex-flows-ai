import { Hero } from "@/components/sections/Hero";
import { SectorMarquee } from "@/components/sections/SectorMarquee";
import { Statement } from "@/components/sections/Statement";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorMarquee />
      <Statement />
      <ServicesShowcase />
      <WhyUs />
      <Process />
      <PortfolioPreview />
      <PricingPreview />
      <FAQSection />
      <CTABanner />
    </>
  );
}
