import { site } from "@/src/content/site";
import { Hero } from "@/components/sections/hero";
import { USPGrid } from "@/components/sections/usp-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { FAQJsonLd } from "@/components/seo/json-ld";

export default function HomePage() {
  const { home } = site.pages;

  return (
    <>
      <FAQJsonLd faqs={home.faq} />
      
      <Hero
        kicker={home.hero.kicker}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        bullets={home.hero.bullets}
        ctas={home.hero.ctas}
      />

      <USPGrid
        title={home.sections.uspsTitle}
        items={home.sections.usps}
      />

      {/* SEO Block */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {home.sections.seoBlockTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {home.sections.seoBlockText}
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps
        title={home.sections.processTitle}
        steps={home.sections.process}
      />

      <TestimonialSlider
        title="Wat klanten zeggen"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      <FAQAccordion title="Veelgestelde vragen" faqs={home.faq} />

      <CTASection
        title="Klaar voor meer woonruimte?"
        subtitle="Vraag vandaag nog een gratis offerte aan of bereken direct de kosten."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />
    </>
  );
}
