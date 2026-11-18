"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { trust } from "@/lib/data";
import { ease } from "@/lib/utils";
import { HeroConsole } from "./HeroConsole";

const lines: { text: string; accent?: boolean }[][] = [
  [{ text: "İşletmenizi" }],
  [{ text: "dijitalin" }, { text: "zirvesine", accent: true }],
  [{ text: "taşıyoruz." }],
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax: metin yukarı kayıp söner, arka plan daha yavaş hareket eder
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  let wordIndex = 0;

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-32 md:pt-44">
      {/* ── Arka plan katmanları ── */}
      <motion.div aria-hidden="true" style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 mask-radial"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Dönen konik halka */}
        <div className="absolute left-1/2 top-[-30rem] h-[60rem] w-[60rem] -translate-x-1/2 animate-spin-slow rounded-full opacity-60 blur-3xl [background:conic-gradient(from_0deg,transparent_0deg,rgba(59,124,255,.35)_60deg,transparent_140deg,rgba(109,93,255,.25)_220deg,transparent_300deg)]" />
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
        {/* Dikey ışık hüzmeleri */}
        <div className="absolute left-[18%] top-0 h-[70%] w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0" />
        <div className="absolute right-[22%] top-0 h-[55%] w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: textOpacity }} className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-[13px] text-mist-300 backdrop-blur"
        >
          <span className="relative flex h-5 items-center rounded-full bg-accent/15 px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-soft">
            <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            AI
          </span>
          Web · Otomasyon · Marka — tek stüdyoda
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-5xl text-[3.1rem] font-semibold leading-[0.95] tracking-tightest sm:text-7xl md:text-[6.4rem]">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => {
                const i = wordIndex++;
                return (
                  <span key={w.text} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <motion.span
                      initial={{ y: "110%", rotate: 4, filter: "blur(10px)" }}
                      animate={{ y: "0%", rotate: 0, filter: "blur(0px)" }}
                      transition={{ duration: 1.1, ease, delay: 0.3 + i * 0.09 }}
                      className={
                        "inline-block origin-bottom-left " + (w.accent ? "text-accent-gradient" : "text-gradient")
                      }
                    >
                      {w.text}
                    </motion.span>
                    {" "}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
          className="mx-auto mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-mist-400 md:text-lg"
        >
          Güven veren web siteleri, kendi kendine çalışan AI otomasyonları ve akılda kalan marka kimlikleri.
          Daha profesyonel görünün, daha sistemli çalışın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Magnetic>
            <Button href="/contact#teklif" size="lg" className="w-full sm:w-auto">
              Ücretsiz Teklif Al
            </Button>
          </Magnetic>
          <Button href="/pricing" variant="secondary" size="lg" arrow={false}>
            Paketleri Gör
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-mist-400"
        >
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-accent/15">
                <Check className="h-2.5 w-2.5 text-accent-soft" strokeWidth={3} aria-hidden="true" />
              </span>
              {t}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <HeroConsole />
    </section>
  );
}
