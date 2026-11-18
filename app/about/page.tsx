import type { Metadata } from "next";
import { differentiators, values } from "@/lib/data";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LogoMark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Apex Flows AI, işletmelerin dijital dünyada daha profesyonel görünmesini ve daha sistemli çalışmasını sağlayan modern bir dijital çözüm markasıdır.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={<>İyi işletmeler,<br /><span className="text-mist-500">iyi görünmeyi hak eder.</span></>}
      />

      <section className="pb-24 md:pb-36">
        <div className="container grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-mist-100 md:text-[2.1rem] md:leading-[1.25]">
              Apex Flows AI, işletmelerin dijital dünyada daha profesyonel görünmesini ve daha sistemli çalışmasını sağlayan modern bir dijital çözüm markasıdır.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-mist-400 md:col-span-5">
            <p>
              Mahallenin en iyi kafesinin, en titiz kliniğinin ya da en yetenekli berberinin internette sıradan görünmesi bizi hep rahatsız etti. Kaliteli iş yapan işletmeler, dijitalde de aynı kaliteyle temsil edilmeliydi.
            </p>
            <p>
              Bu yüzden büyük ajansların tasarım standardını ve sürecini, yerel işletmelerin bütçesine ve temposuna uyarladık. Üstüne, işletme sahiplerine zaman kazandıran yapay zekâ otomasyonlarını ekledik.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.06]">
        <div className="container grid gap-4 md:grid-cols-2">
          <Reveal>
            <SpotlightCard className="relative h-full overflow-hidden p-8 md:p-12">
              <LogoMark className="absolute -bottom-10 -right-10 h-56 w-56 text-white/[0.04]" accent="rgba(59,124,255,.12)" />
              <span className="eyebrow">Misyon</span>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-[2.6rem]">
                Her işletmeye, kendi değerini yansıtan bir dijital varlık kazandırmak.
              </h2>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="relative h-full overflow-hidden p-8 md:p-12">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[90px]" />
              <span className="eyebrow">Vizyon</span>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-[2.6rem]">
                Türkiye’de işletmelerin ilk tercih ettiği, akıllı dijital sistemler stüdyosu olmak.
              </h2>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Değerlerimiz" title={<>Nasıl çalışıyoruz.</>} />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <RevealItem key={v.title} className="group bg-ink-850 p-8 transition-colors duration-500 hover:bg-ink-800">
                <div className="flex items-center justify-between">
                  <v.icon className="h-6 w-6 text-accent-soft" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-xs text-mist-500">0{i + 1}</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-400">{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section border-t border-white/[0.06]">
        <div className="container grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Neden farklıyız" title={<>Sadece tasarım değil,<br /><span className="text-mist-500">çalışan bir sistem.</span></>} />
          </div>
          <RevealGroup className="divide-y divide-white/[0.07] border-y border-white/[0.07] md:col-span-7">
            {differentiators.map((d) => (
              <RevealItem key={d.title} className="flex gap-6 py-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10">
                  <d.icon className="h-5 w-5 text-accent-soft" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{d.title}</h3>
                  <p className="mt-2 text-mist-400">{d.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
