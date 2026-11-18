import { faqs } from "@/lib/data";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export function FAQSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section">
      <div className="container grid gap-12 md:grid-cols-12">
        {withHeading && (
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionHeading eyebrow="SSS" title={<>Aklınızdaki<br />sorular.</>} />
              <Reveal delay={0.15} className="mt-8">
                <p className="text-mist-400">Burada olmayan bir sorunuz mu var?</p>
                <div className="mt-5">
                  <Button href={whatsappLink("Merhaba, bir sorum var:")} variant="secondary">WhatsApp’tan sorun</Button>
                </div>
              </Reveal>
            </div>
          </div>
        )}
        <Reveal className={withHeading ? "md:col-span-8" : "md:col-span-12"}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
    </section>
  );
}
