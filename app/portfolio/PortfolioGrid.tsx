"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { cn, ease } from "@/lib/utils";

const filters = ["Tümü", "Web", "Otomasyon", "Branding"] as const;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tümü");
  const list = filter === "Tümü" ? projects : projects.filter((p) => p.services.includes(filter));

  return (
    <>
      <div role="group" aria-label="Çalışmaları filtrele" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative min-h-[44px] rounded-full px-5 text-sm transition-colors duration-300",
              filter === f ? "text-ink-900" : "border border-white/10 text-mist-300 hover:border-white/25 hover:text-white",
            )}
          >
            {filter === f && (
              <motion.span layoutId="pf-pill" className="absolute inset-0 -z-10 rounded-full bg-mist-100" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-x-5 gap-y-16 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.slug}
              id={p.slug}
              layout
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease }}
              className="group scroll-mt-28"
            >
              <ProjectVisual project={p} />
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-500">{p.sector}</span>
                <span className="text-mist-500">·</span>
                {p.services.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-mist-300">{s}</span>
                ))}
                <span className="ml-auto rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-mist-400">Konsept çalışma</span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-2 text-mist-400">{p.summary}</p>

              {/* Öncesi / sonrası */}
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">Öncesi</div>
                  <ul className="mt-3 space-y-1.5 text-[13px] text-mist-400">
                    {p.before.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div className="grid place-items-center">
                  <ArrowRight className="h-4 w-4 text-accent-soft" aria-hidden="true" />
                </div>
                <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-soft">Sonrası</div>
                  <ul className="mt-3 space-y-1.5 text-[13px] text-mist-100">
                    {p.after.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
