import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ServicesShowcase() {
  return (
    <section className="section" id="hizmetler">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Hizmetler"
            title={<>Üç uzmanlık.<br /><span className="text-mist-500">Tek bir dijital sistem.</span></>}
          />
          <p className="max-w-sm text-mist-400 md:pb-2">
            Markanız, web siteniz ve otomasyonlarınız aynı ekipte, birbirine uyumlu tasarlanır. Parça parça değil, bütün olarak.
          </p>
        </div>

        <RevealGroup className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3" gap={0.12}>
          {services.map((s) => (
            <RevealItem key={s.slug}>
              <Link href={`/services#${s.slug}`} className="block h-full">
                <SpotlightCard className="flex h-full min-h-[440px] flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent text-mist-100 transition-colors duration-500 group-hover/card:border-accent/40 group-hover/card:text-accent-soft">
                      <s.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-mist-500">{s.index}</span>
                  </div>
                  <h3 className="mt-10 text-[1.85rem] font-semibold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist-400">{s.short}</p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-mist-300">{d}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-end justify-between pt-10">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">Başlangıç</div>
                      <div className="mt-1 font-display text-xl font-semibold text-mist-100">{s.from}</div>
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-mist-200 transition-all duration-500 group-hover/card:rotate-45 group-hover/card:border-accent group-hover/card:bg-accent group-hover/card:text-white">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </SpotlightCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
