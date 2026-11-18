"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";
import { cn, ease } from "@/lib/utils";

const serviceOptions = ["Web Sitesi", "AI Otomasyon", "Logo & Branding", "Henüz emin değilim"];
const budgets = ["10.000 TL altı", "10.000 – 20.000 TL", "20.000 – 40.000 TL", "40.000 TL üzeri"];
const sectorsList = ["Kafe / Restoran", "Kuaför / Berber", "Klinik / Sağlık", "Butik / Mağaza", "Stüdyo / Spor", "Diğer"];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [selected, setSelected] = useState<string[]>(["Web Sitesi"]);
  const [budget, setBudget] = useState(budgets[1]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggle(s: string) {
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Adınızı yazın.";
    if (!data.phone?.trim() && !data.email?.trim()) next.phone = "Telefon veya e-posta bırakın.";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Geçerli bir e-posta yazın.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: selected, budget }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850/90 p-6 shadow-card backdrop-blur-xl md:p-10">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="relative flex min-h-[520px] flex-col items-center justify-center text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15">
              <CheckCircle2 className="h-8 w-8 text-accent-soft" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">Talebiniz bize ulaştı.</h3>
            <p className="mt-3 max-w-sm text-mist-400">Mesai saatlerinde 2 saat içinde size dönüş yapıyoruz. Acil ise WhatsApp’tan da yazabilirsiniz.</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent-soft hover:text-white">
              WhatsApp’a geç <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative space-y-7">
            <fieldset>
              <legend className="text-sm font-medium text-mist-200">Hangi hizmetle ilgileniyorsunuz?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceOptions.map((s) => {
                  const on = selected.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(s)}
                      className={cn(
                        "min-h-[44px] rounded-full border px-4 text-sm transition-all duration-300",
                        on ? "border-accent bg-accent text-white shadow-[0_8px_30px_-10px_rgba(59,124,255,.9)]" : "border-white/10 text-mist-300 hover:border-white/25 hover:text-white",
                      )}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label="Ad Soyad" autoComplete="name" error={errors.name} required />
              <Field name="business" label="İşletme adı" autoComplete="organization" />
              <Field name="phone" label="Telefon" type="tel" autoComplete="tel" inputMode="tel" error={errors.phone} />
              <Field name="email" label="E-posta" type="email" autoComplete="email" error={errors.email} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="sector" className="text-sm font-medium text-mist-200">Sektör</label>
                <select id="sector" name="sector" defaultValue="" className="mt-2 h-12 w-full appearance-none rounded-xl border border-white/10 bg-ink-900 px-4 text-[15px] text-mist-100 outline-none transition focus:border-accent">
                  <option value="" disabled>Seçin</option>
                  {sectorsList.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <fieldset>
                <legend className="text-sm font-medium text-mist-200">Bütçe aralığı</legend>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={budget === b}
                      onClick={() => setBudget(b)}
                      className={cn(
                        "min-h-[44px] rounded-xl border px-2 text-[12px] transition-all duration-300",
                        budget === b ? "border-accent/60 bg-accent/10 text-white" : "border-white/10 text-mist-400 hover:border-white/25",
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-mist-200">Projenizi bize anlatın</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="İşletmeniz, hedefiniz ve varsa beğendiğiniz örnek siteler…"
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-[15px] text-mist-100 outline-none transition placeholder:text-mist-500 focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 text-[15px] font-medium text-white shadow-[0_10px_40px_-10px_rgba(59,124,255,.8)] transition hover:bg-[#4a87ff] disabled:opacity-70"
              >
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
                {status === "loading" ? "Gönderiliyor" : "Teklif talebini gönder"}
                {status !== "loading" && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
              </button>
              <p className="text-xs text-mist-500">Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</p>
            </div>
            {status === "error" && (
              <p role="alert" className="text-sm text-signal-soft">
                Bir sorun oluştu. Lütfen tekrar deneyin ya da{" "}
                <a href={whatsappLink()} className="underline">WhatsApp’tan yazın</a>.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-mist-200">
        {label} {required && <span className="text-accent-soft">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-e` : undefined}
        className={cn(
          "mt-2 h-12 w-full rounded-xl border bg-ink-900 px-4 text-[15px] text-mist-100 outline-none transition placeholder:text-mist-500 focus:border-accent",
          error ? "border-signal/70" : "border-white/10",
        )}
      />
      {error && <p id={`${id}-e`} className="mt-1.5 text-xs text-signal-soft">{error}</p>}
    </div>
  );
}
