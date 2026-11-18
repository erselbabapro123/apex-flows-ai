import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Gerçek görsel yokken projeyi temsil eden kompozisyon:
 * projenin kendi paletinde bir tarayıcı ve telefon maketi.
 * Gerçek ekran görüntüleri geldiğinde next/image ile değiştirin.
 */
export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const [bg, accent, light] = project.palette;
  return (
    <div
      className={cn("relative aspect-[4/3] overflow-hidden rounded-2xl", className)}
      style={{ background: `radial-gradient(120% 90% at 80% 0%, ${accent}33 0%, transparent 55%), ${bg}` }}
      role="img"
      aria-label={`${project.title} konsept tasarım önizlemesi`}
    >
      {/* Masaüstü */}
      <div
        className="absolute left-[7%] top-[12%] w-[72%] overflow-hidden rounded-lg shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.02]"
        style={{ background: light }}
      >
        <div className="flex h-5 items-center gap-1 px-2" style={{ background: `${bg}14` }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: `${bg}40` }} />
          ))}
        </div>
        <div className="p-[7%]">
          <div className="h-1.5 w-8 rounded-full" style={{ background: accent }} />
          <div className="mt-3 font-display text-[clamp(14px,2.2vw,26px)] font-semibold leading-none tracking-tight" style={{ color: bg }}>
            {project.title}
          </div>
          <div className="mt-3 h-1.5 w-[70%] rounded" style={{ background: `${bg}22` }} />
          <div className="mt-1.5 h-1.5 w-[55%] rounded" style={{ background: `${bg}22` }} />
          <div className="mt-4 h-5 w-20 rounded-full" style={{ background: accent }} />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-square rounded-md" style={{ background: i === 1 ? `${accent}55` : `${bg}14` }} />
            ))}
          </div>
        </div>
      </div>
      {/* Telefon */}
      <div
        className="absolute bottom-[-6%] right-[7%] w-[24%] overflow-hidden rounded-[14px] border-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,.7)] transition-transform delay-75 duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-4"
        style={{ background: bg, borderColor: `${light}30` }}
      >
        <div className="aspect-[9/17] p-[12%]">
          <div className="h-1 w-5 rounded-full" style={{ background: accent }} />
          <div className="mt-2 h-2 w-[80%] rounded" style={{ background: light }} />
          <div className="mt-1 h-2 w-[60%] rounded" style={{ background: light }} />
          <div className="mt-3 aspect-square rounded-md" style={{ background: `${accent}66` }} />
          <div className="mt-3 h-4 rounded-full" style={{ background: accent }} />
        </div>
      </div>
    </div>
  );
}
