"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** İmlecin altında yumuşak ışık ve kenar parlaması oluşturan kart */
export function SpotlightCard({
  children,
  className,
  glow = "59,124,255",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      style={{ "--glow": glow } as CSSProperties}
      className={cn(
        "group/card relative isolate overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-850/80 shadow-card transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-white/[0.14]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx,50%) var(--my,0%), rgba(var(--glow),0.13), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}
