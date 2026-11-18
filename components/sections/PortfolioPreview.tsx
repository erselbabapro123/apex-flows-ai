import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "./ProjectVisual";

export function PortfolioPreview() {
  const featured = projects.slice(0, 4);
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Seçili çalışmalar"
            title={<>Sektörünüze özel<br /><span className="text-mist-500">tasarlanmış deneyimler.</span></>}
          />
          <Button href="/portfolio" variant="secondary" className="self-start md:self-auto">Tüm çalışmalar</Button>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2" gap={0.1}>
          {featured.map((p, i) => (
            <RevealItem key={p.slug} className={i % 2 === 1 ? "md:mt-20" : undefined}>
              <Link href={`/portfolio#${p.slug}`} className="group block">
                <ProjectVisual project={p} />
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-500">
                      {p.sector} · Konsept
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-white">{p.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] text-mist-400">{p.summary}</p>
                  </div>
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink-900">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
