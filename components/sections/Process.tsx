"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="section">
      <div className="container grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Reveal><span className="eyebrow">Süreç</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1.02] tracking-tightest md:text-6xl">
                Dört adımda<br /><span className="text-mist-500">yayındasınız.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-mist-400">
                Belirsizlik yok. Her adımın ne zaman biteceğini baştan bilir, her aşamada onayınızla ilerleriz.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-9">
              <Button href="/contact#teklif" variant="secondary">Keşif görüşmesi planla</Button>
            </Reveal>
          </div>
        </div>

        <ol ref={ref} className="relative md:col-span-7">
          <li aria-hidden="true" className="absolute bottom-4 left-[27px] top-4 w-px bg-white/[0.08] md:left-[31px]">
            <motion.span style={{ scaleY }} className="absolute inset-0 origin-top bg-gradient-to-b from-accent via-accent to-accent/0" />
          </li>
          {processSteps.map((p, i) => (
            <li key={p.step} className="relative pb-14 pl-20 last:pb-0 md:pl-24">
              <Reveal delay={i * 0.04}>
                <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-ink-850 text-mist-100 md:h-16 md:w-16">
                  <p.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-accent-soft">{p.step}</span>
                  <span className="h-px w-8 bg-white/15" />
                  <span className="text-mist-500">{p.time}</span>
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist-400 md:text-base">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
