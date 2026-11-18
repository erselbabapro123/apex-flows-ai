import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(.16,1,.3,1)] active:scale-[0.98] min-h-[44px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_0_1px_rgba(109,157,255,.5)_inset,0_10px_40px_-10px_rgba(59,124,255,.7)] hover:bg-[#4a87ff] hover:shadow-[0_0_0_1px_rgba(165,193,255,.6)_inset,0_16px_60px_-12px_rgba(59,124,255,.9)]",
  secondary: "glass text-mist-100 hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-mist-200 hover:text-white",
  light: "bg-mist-100 text-ink-900 hover:bg-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", size = "md", arrow = true, className, external }: Props) {
  const inner = (
    <>
      {/* Hover'da kayan ışık şeridi */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
        />
      )}
      <span className="relative">{children}</span>
      {arrow && (
        <span className="relative grid h-5 w-5 place-items-center overflow-hidden">
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5"
          />
          <ArrowUpRight
            aria-hidden="true"
            className="absolute h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </span>
      )}
    </>
  );
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
