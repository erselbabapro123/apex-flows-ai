"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, whatsappLink, site, instagramLink } from "@/lib/site";
import { cn, ease } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
      >
        <nav
          aria-label="Ana menü"
          className={cn(
            "mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 md:h-16 md:pl-6",
            scrolled || open
              ? "border border-white/[0.08] bg-ink-900/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,.9)] backdrop-blur-2xl"
              : "border border-transparent",
          )}
        >
          <Link href="/" aria-label={`${site.name} ana sayfa`} className="relative z-10">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      active ? "text-white" : "text-mist-400 hover:text-white",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden px-3 text-sm text-mist-300 transition-colors hover:text-white md:inline-flex lg:hidden xl:inline-flex"
            >
              İletişim
            </Link>
            <Button href="/contact#teklif" size="md" className="hidden sm:inline-flex">
              Teklif Al
            </Button>
            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist-100 lg:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobil tam ekran menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-ink-950 px-6 pb-10 pt-28 lg:hidden"
          >
            <div aria-hidden="true" className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/25 blur-[120px]" />
            <ul className="relative flex flex-col">
              {[{ href: "/", label: "Ana Sayfa" }, ...nav, { href: "/contact", label: "İletişim" }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease }}
                  className="border-b border-white/[0.06]"
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 font-display text-[2rem] font-semibold tracking-tight text-mist-100"
                  >
                    {item.label}
                    <ArrowUpRight className="h-6 w-6 text-mist-500" aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mt-auto grid gap-3"
            >
              <Button href={whatsappLink()} size="lg" className="w-full">
                WhatsApp’tan yazın
              </Button>
              <Button href={instagramLink} variant="secondary" size="lg" className="w-full">
                @{site.instagram}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
