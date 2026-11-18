import type { Metadata } from "next";
import { Check, Minus, ShieldCheck } from "lucide-react";
import { comparison, plans } from "@/lib/data";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCards } from "@/components/sections/PricingCards";
import { Addons } from "@/components/sections/Addons";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Paketler & Fiyatlandırma",
  description: "Starter, Business ve Premium web sitesi paketleri; logo, kurumsal kimlik, otomasyon ve bakım ek hizmetleri. Net fiyat, net teslim süresi.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Paketler"
        title={<>Yatırımınızı<br /><span className="text-mist-500">net görün.</span></>}
        description="Sabit fiyat, yazılı teslim tarihi ve dahil olan her şey baştan belli. Hangi paketin size uygun olduğundan emin değilseniz birlikte seçelim."
      />

      <section className="relative pb-24 pt-6 md:pb-36">
        <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />
        <div className="container">
          <PricingCards />
          <Reveal className="mt-14 flex flex-col items-center justify-center gap-3 text-center text-sm text-mist-400 md:flex-row">
            <ShieldCheck className="h-5 w-5 text-accent-soft" aria-hidden="true" />
            %50 ön ödeme ile başlarız, kalan tutar yalnızca siz siteyi onayladıktan sonra alınır.
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.06]">
        <div className="container">
          <SectionHeading eyebrow="Karşılaştırma" title="Paketler yan yana." />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-white/[0.07]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Paket karşılaştırma tablosu</caption>
              <thead>
                <tr className="border-b border-white/[0.07] bg-white/[0.02]">
                  <th scope="col" className="p-5 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-mist-500">Özellik</th>
                  {plans.map((p) => (
                    <th key={p.id} scope="col" className={"p-5 font-display text-base font-semibold " + (p.featured ? "text-accent-soft" : "text-mist-100")}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-white/[0.05] last:border-0 transition-colors hover:bg-white/[0.02]">
                    <th scope="row" className="p-5 font-normal text-mist-300">{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={i} className={"p-5 " + (plans[i].featured ? "bg-accent/[0.04]" : "")}>
                        {v === true ? (
                          <Check className="h-4 w-4 text-accent-soft" aria-label="Dahil" />
                        ) : v === false ? (
                          <Minus className="h-4 w-4 text-mist-500" aria-label="Dahil değil" />
                        ) : (
                          <span className="text-mist-100">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.06]">
        <div className="container">
          <SectionHeading
            eyebrow="Ek hizmetler"
            title={<>İhtiyacınız kadarını<br /><span className="text-mist-500">ekleyin.</span></>}
            description="Ek hizmetler herhangi bir pakete eklenebilir ya da tek başına satın alınabilir."
          />
          <div className="mt-12">
            <Addons />
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner title={<>Hangi paket size uygun?<br />2 dakikada birlikte seçelim.</>} />
    </>
  );
}
