"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const text =
  "Müşterileriniz sizi önce internette görür. Orada nasıl göründüğünüz, kapınızdan girip girmeyeceklerine karar verir.";
const highlight = new Set(["internette", "görür.", "karar", "verir."]);

/** Kaydırdıkça kelime kelime aydınlanan manifesto metni */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Neden şimdi</span>
        <p ref={ref} className="mt-8 max-w-5xl font-display text-[2rem] font-semibold leading-[1.12] tracking-tightest md:text-6xl md:leading-[1.05]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={highlight.has(w)}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range, accent }: { children: string; progress: MotionValue<number>; range: [number, number]; accent: boolean }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }} className={accent ? "text-accent-soft" : "text-mist-100"}>
        {children}
      </motion.span>
    </span>
  );
}
