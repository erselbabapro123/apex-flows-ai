"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { GridBackdrop } from "@/components/effects/GridBackdrop";
import { ease } from "@/lib/utils";

/** İç sayfaların ortak açılış alanı */
export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <GridBackdrop />
      <div className="container">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 }} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
          className="mt-6 max-w-5xl text-balance text-[2.9rem] font-semibold leading-[0.98] tracking-tightest md:text-[5.5rem]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.45 }} className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-mist-400 md:text-lg">
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.6 }} className="mt-10">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
