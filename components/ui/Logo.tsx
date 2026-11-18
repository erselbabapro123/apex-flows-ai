import { cn } from "@/lib/utils";

export function LogoMark({ className, accent = "#3B7CFF" }: { className?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M14 88 L50 14 L86 88" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 68 L66 52" fill="none" stroke={accent} strokeWidth="6.5" strokeLinecap="round" />
      <circle cx="30" cy="68" r="6.5" fill={accent} />
      <circle cx="66" cy="52" r="6" fill="#0B0D10" stroke={accent} strokeWidth="4.5" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-mist-100", className)}>
      <LogoMark className="h-7 w-7" />
      <span className="font-display text-[15px] font-bold tracking-[0.04em]">
        APEX <span className="font-medium tracking-[0.2em] text-mist-400">FLOWS AI</span>
      </span>
    </span>
  );
}
