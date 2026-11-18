import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Sonsuz kayan bant. İçerik iki kez basılır, %50 kaydırılır. */
export function Marquee({ children, className, reverse }: { children: ReactNode; className?: string; reverse?: boolean }) {
  return (
    <div className={cn("group relative flex overflow-hidden mask-fade-x", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-12 pr-12 animate-marquee group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
