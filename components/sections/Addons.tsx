import { addons } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Addons() {
  return (
    <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
      {addons.map((a) => (
        <RevealItem key={a.title} className="group bg-ink-850 p-7 transition-colors duration-500 hover:bg-ink-800">
          <a.icon className="h-5 w-5 text-mist-400 transition-colors duration-500 group-hover:text-accent-soft" strokeWidth={1.6} aria-hidden="true" />
          <h3 className="mt-6 font-sans text-[15px] font-medium tracking-normal text-mist-200">{a.title}</h3>
          <p className="mt-2 font-display text-2xl font-semibold text-mist-100">
            {a.price}
            <span className="ml-1 font-sans text-sm font-normal text-mist-500">{a.note}</span>
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
