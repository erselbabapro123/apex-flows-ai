import { Button } from "@/components/ui/Button";
import { GridBackdrop } from "@/components/effects/GridBackdrop";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center overflow-hidden pt-24 text-center">
      <GridBackdrop />
      <div className="container">
        <p className="font-mono text-sm tracking-[0.3em] text-accent-soft">404</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tightest md:text-7xl">Bu sayfa akıştan çıkmış.</h1>
        <p className="mx-auto mt-5 max-w-md text-mist-400">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Ana sayfaya dön</Button>
        </div>
      </div>
    </section>
  );
}
