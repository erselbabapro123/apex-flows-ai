import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PricingCards } from "./PricingCards";

export function PricingPreview() {
  return (
    <section className="section relative overflow-hidden" id="paketler">
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Paketler"
          title={<>Net fiyat.<br /><span className="text-mist-500">Sürpriz yok.</span></>}
          description="İşletmenizin bugünkü ihtiyacına göre başlayın, büyüdükçe genişletin. Tüm paketlerde kaynak dosyalar ve erişimler size aittir."
        />
        <div className="mt-16 md:mt-24">
          <PricingCards compact />
        </div>
        <Reveal className="mt-14 flex justify-center">
          <Button href="/pricing" variant="secondary">Tüm paket detaylarını gör</Button>
        </Reveal>
      </div>
    </section>
  );
}
