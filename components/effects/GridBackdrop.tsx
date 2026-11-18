import { cn } from "@/lib/utils";

/** İnce çizgi ızgara + üstten yayılan ışık. Sayfa başlıklarının arkasında kullanılır. */
export function GridBackdrop({ className, glow = true }: { className?: string; glow?: boolean }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className="absolute inset-0 mask-radial opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center top",
        }}
      />
      {glow && (
        <>
          <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[70rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
          <div className="absolute left-[12%] top-[8rem] h-72 w-72 rounded-full bg-[#6d5dff]/10 blur-[110px]" />
        </>
      )}
    </div>
  );
}
