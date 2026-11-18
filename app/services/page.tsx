import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Web site tasarımı, AI otomasyon ve logo & marka kimliği hizmetlerimiz. İşletmenize ne sağladıklarını ve kimler için uygun olduklarını inceleyin.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title={<>İşletmenizin dijital<br /><span className="text-mist-500">altyapısını kuruyoruz.</span></>}
        description="Tek bir hizmetle başlayın ya da üçünü birlikte alın. Her biri tek başına değer üretir, birlikte bir sistem olur."
      >
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-mist-200 transition hover:border-white/25 hover:text-white">
              <s.icon className="h-4 w-4 text-accent-soft" aria-hidden="true" /> {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      {services.map((s, idx) => (
        <section key={s.slug} id={s.slug} className="section scroll-mt-24 border-t border-white/[0.06]">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent">
                      <s.icon className="h-6 w-6 text-accent-soft" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm text-mist-500">{s.index} / 0{services.length}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-8 text-[2.6rem] font-semibold leading-[1] tracking-tightest md:text-6xl">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-md text-[17px] leading-relaxed text-mist-400">{s.description}</p>
                </Reveal>
                <Reveal delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact#teklif" size="lg">{s.cta}</Button>
                  <Button href={whatsappLink(`Merhaba, ${s.title} hizmeti hakkında bilgi almak istiyorum.`)} variant="secondary" size="lg" arrow={false}>
                    WhatsApp
                  </Button>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 text-sm text-mist-500">
                    Başlangıç: <span className="font-medium text-mist-200">{s.from}</span>
                  </p>
                </Reveal>
              </div>
            </div>

            <RevealGroup className="grid gap-4 lg:col-span-7" gap={0.1}>
              <RevealItem>
                <SpotlightCard className="p-7 md:p-9">
                  <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-mist-500">Size sağladıkları</h3>
                  <ul className="mt-6 grid gap-4">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-4 text-[17px] leading-snug text-mist-100">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-soft">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </RevealItem>
              <div className="grid gap-4 md:grid-cols-2">
                <RevealItem>
                  <SpotlightCard className="h-full p-7">
                    <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-mist-500">Kimler için</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.forWho.map((w) => (
                        <li key={w} className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-mist-200">{w}</li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </RevealItem>
                <RevealItem>
                  <SpotlightCard className="h-full p-7">
                    <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-mist-500">Teslim edilenler</h3>
                    <ul className="mt-5 space-y-2.5">
                      {s.deliverables.map((d, i) => (
                        <li key={d} className="flex items-center gap-3 text-[15px] text-mist-200">
                          <span className="font-mono text-xs text-mist-500">0{i + 1}</span> {d}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </RevealItem>
              </div>
              {idx === 1 && (
                <RevealItem>
                  <div className="rounded-3xl border border-accent/25 bg-accent/[0.06] p-7 text-[15px] leading-relaxed text-mist-200">
                    <span className="font-medium text-white">Ücretsiz otomasyon analizi:</span> İşletmenizde hangi işlerin otomatiğe
                    bağlanabileceğini 30 dakikada çıkarıyor, size yazılı bir öneri gönderiyoruz.
                  </div>
                </RevealItem>
              )}
            </RevealGroup>
          </div>
        </section>
      ))}

      <CTABanner title={<>Hangi hizmetten<br />başlayacağınızı birlikte seçelim.</>} />
    </>
  );
}
