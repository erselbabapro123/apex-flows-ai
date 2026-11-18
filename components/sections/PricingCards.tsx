import type { ReactNode } from "react";
import { Check, Clock, Sparkles } from "lucide-react";
import { plans, type Plan } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <RevealGroup className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5" gap={0.12}>
      {plans.map((plan) => (
        <RevealItem key={plan.id} className={cn(plan.featured && "lg:-my-6")}>
          {plan.featured ? (
            <FeaturedFrame>
              <PlanBody plan={plan} compact={compact} />
            </FeaturedFrame>
          ) : (
            <div className="group/plan relative h-full rounded-[1.75rem] border border-white/[0.08] bg-ink-850/80 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16] hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,.9)]">
              <PlanBody plan={plan} compact={compact} />
            </div>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/** Dönen konik ışıkla çerçevelenmiş "En Popüler" kart */
function FeaturedFrame({ children }: { children: ReactNode }) {
  return (
    <div className="group/plan relative h-full rounded-[1.85rem] p-px transition-transform duration-500 hover:-translate-y-1.5">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[1.85rem]">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow [background:conic-gradient(from_0deg,transparent_0deg,#3B7CFF_70deg,#A5C1FF_110deg,transparent_170deg,transparent_360deg)]" />
      </div>
      <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/25 blur-[60px]" />
      <div className="relative h-full rounded-[1.8rem] bg-gradient-to-b from-[#111a2e] via-ink-850 to-ink-850">
        <span className="absolute -top-px left-1/2 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_-8px_rgba(59,124,255,.9)]">
          <Sparkles className="h-3 w-3" aria-hidden="true" /> En Popüler
        </span>
        {children}
      </div>
    </div>
  );
}

function PlanBody({ plan, compact }: { plan: Plan; compact: boolean }) {
  const features = compact ? plan.features.slice(0, 5) : plan.features;
  return (
    <div className="flex h-full flex-col p-7 md:p-9">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist-400">
          <Clock className="h-3 w-3" aria-hidden="true" /> {plan.delivery}
        </span>
      </div>
      <p className="mt-2 text-sm text-mist-400">{plan.tagline}</p>

      <div className="mt-8 flex items-baseline gap-2">
        <span className="font-display text-[3.4rem] font-semibold leading-none tracking-tightest text-mist-100 md:text-6xl">
          {plan.price}
        </span>
        <span className="text-lg font-medium text-mist-400">TL</span>
      </div>
      <p className="mt-2 text-xs text-mist-500">Tek seferlik · KDV hariç</p>

      <div className="mt-8">
        <Button
          href={whatsappLink(`Merhaba, ${plan.name} paketi hakkında bilgi almak istiyorum.`)}
          variant={plan.featured ? "primary" : "secondary"}
          size="lg"
          className="w-full"
        >
          {plan.cta}
        </Button>
      </div>

      <div aria-hidden="true" className="my-8 h-px hairline" />

      <ul className="space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] text-mist-200">
            <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full", plan.featured ? "bg-accent text-white" : "bg-white/[0.07] text-mist-200")}>
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            {f}
          </li>
        ))}
        {compact && plan.features.length > features.length && (
          <li className="pl-8 text-sm text-mist-500">+ {plan.features.length - features.length} özellik daha</li>
        )}
      </ul>
    </div>
  );
}
