import { LogoMark } from "@/components/ui/Logo";
import { Marquee } from "@/components/ui/Marquee";
import { sectors } from "@/lib/data";

export function SectorMarquee() {
  return (
    <section aria-label="Çalıştığımız sektörler" className="relative border-y border-white/[0.06] bg-ink-950/60 py-8 md:py-10">
      <p className="container mb-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-mist-500">
        Yerel işletmeler ve büyüyen markalar için
      </p>
      <Marquee>
        {sectors.map((s) => (
          <span key={s} className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-medium tracking-tight text-mist-400/80 md:text-3xl">
            {s}
            <LogoMark className="h-4 w-4 text-mist-500/60" accent="#3A404B" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
