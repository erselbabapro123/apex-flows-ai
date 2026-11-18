import Link from "next/link";
import type { ReactNode } from "react";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { nav, site, whatsappLink, instagramLink, mailLink } from "@/lib/site";
import { services } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 hairline" />
      <div className="container pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mist-400">{site.description}</p>
            <div className="mt-8 flex gap-3">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist-300 transition hover:border-white/25 hover:text-white">
                <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist-300 transition hover:border-white/25 hover:text-white">
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              <a href={mailLink} aria-label="E-posta" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist-300 transition hover:border-white/25 hover:text-white">
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </div>
          </div>

          <FooterCol title="Sayfalar" className="md:col-span-2">
            {[{ href: "/", label: "Ana Sayfa" }, ...nav, { href: "/contact", label: "İletişim" }].map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Hizmetler" className="md:col-span-2">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>{s.title}</FooterLink>
            ))}
            <FooterLink href="/pricing">Fiyatlandırma</FooterLink>
          </FooterCol>
          <FooterCol title="İletişim" className="md:col-span-3">
            <FooterLink href={whatsappLink()}>WhatsApp</FooterLink>
            <FooterLink href={mailLink}>{site.email}</FooterLink>
            <FooterLink href={instagramLink}>@{site.instagram}</FooterLink>
            <li className="flex items-center gap-2 pt-1 text-sm text-mist-500">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {site.location}
            </li>
          </FooterCol>
        </div>
      </div>

      {/* Dev wordmark */}
      <div aria-hidden="true" className="container mt-20 select-none">
        <div className="mask-fade-b bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display text-[22vw] font-bold leading-[0.8] tracking-tightest text-transparent md:text-[16.5vw] xl:text-[13.5rem]">
          APEX FLOWS
        </div>
      </div>

      <div className="container flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] py-8 text-xs text-mist-500 md:flex-row md:items-center">
        <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
        <p className="font-mono uppercase tracking-[0.18em]">Automation · Websites · Brand Identity</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist-500">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = "text-sm text-mist-300 transition-colors hover:text-white";
  return (
    <li>
      {external ? (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{children}</a>
      ) : (
        <Link href={href} className={cls}>{children}</Link>
      )}
    </li>
  );
}
