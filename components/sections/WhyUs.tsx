import { reasons } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

/** Bento ızgara: ilk kart büyük ve görsel ağırlıklı */
export function WhyUs() {
  const [first, ...rest] = reasons;
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Neden Apex Flows"
          title={<>Freelancer hızında,<br /><span className="text-mist-500">ajans kalitesinde.</span></>}
          description="Büyük ajansların sürecini ve standardını, yerel işletmelerin bütçesine ve temposuna uyarladık."
        />

        <RevealGroup className="mt-14 grid gap-4 md:mt-20 md:grid-cols-6" gap={0.08}>
          <RevealItem className="md:col-span-3 md:row-span-2">
            <SpotlightCard className="relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden p-8 md:p-10">
              <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[100px]" />
                <div
                  className="absolute inset-0 opacity-40 mask-radial"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <LogoMark className="absolute right-8 top-8 h-40 w-40 text-white/90 md:h-56 md:w-56" />
              </div>
              <first.icon className="h-6 w-6 text-accent-soft" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">{first.title}</h3>
              <p className="mt-3 max-w-sm text-mist-400">{first.text} Güzel görünen değil, iş getiren siteler tasarlıyoruz.</p>
            </SpotlightCard>
          </RevealItem>
          {rest.map((r, i) => (
            <RevealItem key={r.title} className={cn(i < 2 ? "md:col-span-3" : "md:col-span-2")}>
              <SpotlightCard className="h-full p-7">
                <r.icon className="h-5 w-5 text-accent-soft" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist-400">{r.text}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
