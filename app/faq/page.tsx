import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Teslim süresi, ödeme, revize, domain/hosting, otomasyon ve logo tasarımı hakkında sık sorulan sorular.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title={<>Kararınızı vermeden önce<br /><span className="text-mist-500">bilmeniz gerekenler.</span></>}
      >
        <Button href={whatsappLink("Merhaba, bir sorum var:")} variant="secondary">Sorunuz burada yoksa yazın</Button>
      </PageHero>
      <div className="-mt-16 md:-mt-24">
        <FAQSection withHeading={false} />
      </div>
      <CTABanner />
    </>
  );
}
