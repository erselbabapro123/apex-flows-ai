import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { PortfolioGrid } from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Çalışmalar",
  description: "Kafe, klinik, berber, çiçekçi, pilates stüdyosu ve detailing işletmeleri için web, otomasyon ve marka konsept çalışmaları.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Çalışmalar"
        title={<>Sektöre özel düşünülmüş<br /><span className="text-mist-500">konsept çalışmalar.</span></>}
        description="Her sektörün müşterisi farklı davranır. Bu konseptler, aynı yaklaşımı sizin işletmenize nasıl uygulayacağımızı gösteriyor."
      />
      <section className="pb-24 md:pb-36">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
      <CTABanner title={<>Sıradaki çalışma<br />sizin işletmeniz olsun.</>} />
    </>
  );
}
