import type { Metadata } from "next";
import { ArrowUpRight, Clock, Instagram, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink, instagramLink, mailLink } from "@/lib/site";
import { services } from "@/lib/data";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim & Teklif",
  description: "Projenizi anlatın, aynı gün size özel yol haritası ve net fiyat iletelim. WhatsApp, e-posta veya Instagram üzerinden ulaşın.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "En hızlı yanıt", href: whatsappLink(), highlight: true },
  { icon: Mail, label: "E-posta", value: site.email, href: mailLink },
  { icon: Instagram, label: "Instagram", value: `@${site.instagram}`, href: instagramLink },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={<>Projenizi<br /><span className="text-mist-500">bize anlatın.</span></>}
        description="Formu doldurun ya da doğrudan yazın. Size özel yol haritasını ve net fiyatı aynı gün iletelim."
      />

      <section className="scroll-mt-24 pb-24 md:pb-36" id="teklif">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <RevealGroup className="space-y-3">
              {channels.map((c) => (
                <RevealItem key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={
                      "group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-0.5 " +
                      (c.highlight ? "border-[#25D366]/30 bg-[#25D366]/[0.07] hover:border-[#25D366]/60" : "border-white/[0.08] bg-ink-850 hover:border-white/20")
                    }
                  >
                    <span className={"grid h-12 w-12 place-items-center rounded-xl " + (c.highlight ? "bg-[#25D366] text-ink-950" : "bg-white/[0.06] text-mist-100")}>
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-mist-400">{c.label}</span>
                      <span className="block truncate font-medium text-mist-100">{c.value}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-mist-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2} className="rounded-2xl border border-white/[0.08] bg-ink-850 p-6">
              <h2 className="font-sans text-base font-medium tracking-normal text-mist-100">Hızlı teklif</h2>
              <p className="mt-1 text-sm text-mist-400">Hizmeti seçin, WhatsApp mesajınız hazır gelsin.</p>
              <ul className="mt-5 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={whatsappLink(`Merhaba, ${s.title} için hızlı teklif almak istiyorum. İşletmem: `)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] items-center justify-between rounded-xl border border-white/[0.06] px-4 text-sm text-mist-200 transition hover:border-accent/50 hover:bg-accent/[0.06] hover:text-white"
                    >
                      <span className="flex items-center gap-3"><s.icon className="h-4 w-4 text-accent-soft" aria-hidden="true" /> {s.title}</span>
                      <span className="text-xs text-mist-500">{s.from}’den</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25} className="flex items-center gap-3 px-1 text-sm text-mist-400">
              <Clock className="h-4 w-4 text-accent-soft" aria-hidden="true" /> {site.responseTime}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
