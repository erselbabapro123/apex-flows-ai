"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Bot, CalendarCheck, CheckCircle2, Globe, MessageCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn, ease } from "@/lib/utils";

const flow = [
  { icon: MessageCircle, title: "Yeni mesaj", meta: "Instagram DM · WhatsApp" },
  { icon: Bot, title: "AI asistan yanıtlar", meta: "Fiyat, saat, konum" },
  { icon: CalendarCheck, title: "Randevu oluşturulur", meta: "Takvime otomatik eklenir" },
  { icon: Send, title: "Onay & hatırlatma", meta: "Müşteriye mesaj gider" },
];

const events = [
  { icon: MessageCircle, text: "Yeni DM: “Yarın 14:00 müsait mi?”", tag: "Gelen" },
  { icon: Bot, text: "AI asistan uygun saatleri paylaştı", tag: "Otomatik" },
  { icon: CalendarCheck, text: "Randevu oluşturuldu · Perşembe 14:00", tag: "Takvim" },
  { icon: Globe, text: "Web formu: Business paketi talebi", tag: "Lead" },
  { icon: Send, text: "Hatırlatma mesajı gönderildi", tag: "Otomatik" },
  { icon: CheckCircle2, text: "Müşteri randevuyu onayladı", tag: "Tamam" },
];

export function HeroConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [24, 0]);
  const scale = useTransform(p, [0, 1], [0.9, 1]);
  const y = useTransform(p, [0, 1], [60, 0]);

  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(3);

  useEffect(() => {
    const a = setInterval(() => setActive((v) => (v + 1) % flow.length), 1500);
    const b = setInterval(() => setTick((v) => v + 1), 2300);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  const feed = Array.from({ length: 4 }, (_, k) => {
    const n = tick - k;
    return { ...events[((n % events.length) + events.length) % events.length], key: n };
  });

  return (
    <div ref={ref} className="container relative mt-16 pb-10 md:mt-24 [perspective:1600px]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease, delay: 1.05 }}
      >
        <motion.div
          style={{ rotateX, scale, y, transformOrigin: "50% 0%" }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Panelin arkasındaki ışıma */}
          <div aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-10 -z-10 rounded-[3rem] bg-accent/20 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-900/80 p-2 shadow-[0_50px_120px_-40px_rgba(0,0,0,.9)] backdrop-blur-2xl md:rounded-[2rem]">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px hairline" />
            {/* Pencere çubuğu */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-mist-500">apexflows / işletmeniz</span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Canlı
              </span>
            </div>

            <div className="grid gap-2 md:grid-cols-12">
              {/* Site önizleme */}
              <div className="relative hidden overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850 p-6 md:col-span-5 md:block">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">Web sitesi</div>
                <div className="mt-6 h-2 w-16 rounded-full bg-accent" />
                <div className="mt-5 space-y-2.5">
                  <div className="h-5 w-[85%] rounded-md bg-mist-100/90" />
                  <div className="h-5 w-[60%] rounded-md bg-mist-100/90" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-[90%] rounded bg-white/10" />
                  <div className="h-2 w-[75%] rounded bg-white/10" />
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-9 w-28 rounded-full bg-accent shadow-[0_8px_30px_-8px_rgba(59,124,255,.8)]" />
                  <div className="h-9 w-24 rounded-full border border-white/10" />
                </div>
                <div className="mt-7 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      className="aspect-[4/5] rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
                    />
                  ))}
                </div>
              </div>

              {/* Otomasyon akışı */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850 p-5 md:col-span-4 md:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">AI akışı</span>
                  <span className="font-mono text-[10px] text-accent-soft">7/24</span>
                </div>
                <div className="relative mt-5">
                  <div aria-hidden="true" className="absolute bottom-6 left-[21px] top-6 w-px bg-white/10" />
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-[18px] z-20 h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_4px_rgba(59,124,255,.7)]"
                    animate={{ top: ["24px", "calc(100% - 28px)"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                  <ol className="relative space-y-3">
                  {flow.map((f, i) => (
                    <li
                      key={f.title}
                      className={cn(
                        "relative flex items-center gap-3 rounded-xl border p-2.5 transition-all duration-500",
                        active === i
                          ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_30px_-10px_rgba(59,124,255,.8)]"
                          : "border-white/[0.06] bg-white/[0.02]",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors duration-500",
                          active === i ? "bg-accent text-white" : "bg-ink-700 text-mist-400",
                        )}
                      >
                        <f.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[13px] font-medium text-mist-100">{f.title}</span>
                        <span className="block truncate text-[11px] text-mist-500">{f.meta}</span>
                      </span>
                    </li>
                  ))}
                  </ol>
                </div>
              </div>

              {/* Canlı aktivite */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850 p-5 md:col-span-3 md:p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">Aktivite</span>
                <ul className="mt-5 space-y-2.5" aria-live="off">
                  <AnimatePresence initial={false} mode="popLayout">
                    {feed.map((e, i) => (
                      <motion.li
                        key={e.key}
                        layout
                        initial={{ opacity: 0, y: -16, scale: 0.96 }}
                        animate={{ opacity: 1 - i * 0.2, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.6, ease }}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <div className="flex items-center justify-between">
                          <e.icon className="h-3.5 w-3.5 text-accent-soft" aria-hidden="true" />
                          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist-500">{e.tag}</span>
                        </div>
                        <p className="mt-2 text-[12px] leading-snug text-mist-200">{e.text}</p>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            </div>
          </div>
          {/* Alt kenarda söndürme */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-[2rem] bg-gradient-to-t from-ink-900 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
