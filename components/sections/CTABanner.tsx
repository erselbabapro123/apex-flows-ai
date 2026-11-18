import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

export function CTABanner({
  title = <>İşinizi bir sonraki<br />seviyeye taşıyalım.</>,
  text = "30 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı dinleyelim, size özel yol haritasını ve net fiyatı aynı gün iletelim.",
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="relative px-3 pb-24 md:px-6 md:pb-36">
      <Reveal>
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 px-6 py-20 text-center md:rounded-[2.5rem] md:px-16 md:py-32">
          <div aria-hidden="true" className="absolute inset-0 -z-0">
            <div className="absolute left-1/2 top-full h-[44rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[120px]" />
            <div
              className="absolute inset-0 opacity-50 mask-radial"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <LogoMark className="absolute -right-16 -top-10 h-72 w-72 rotate-12 text-white/[0.04]" accent="rgba(59,124,255,.08)" />
          </div>
          <div className="relative">
            <span className="eyebrow justify-center">Hazır mısınız?</span>
            <h2 className="mx-auto mt-6 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[0.98] tracking-tightest md:text-7xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-mist-300">{text}</p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href="/contact#teklif" size="lg">Ücretsiz Teklif Al</Button>
              <Button href={whatsappLink()} variant="light" size="lg">WhatsApp’tan Yazın</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
