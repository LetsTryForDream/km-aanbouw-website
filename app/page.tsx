import { site } from "@/src/content/site";
import { Hero } from "@/components/sections/hero";
import { USPGrid } from "@/components/sections/usp-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQJsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sun } from "lucide-react";

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

      {/* Populaire oplossingen */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            {home.sections.solutionsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {home.sections.solutions.map((solution, index) => {
              const icons = [Home, Building2, Sun];
              const Icon = icons[index];
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.desc}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Meer info
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <USPGrid title={home.sections.uspsTitle} items={home.sections.usps} />

      <ProcessSteps
        title={home.sections.processTitle}
        steps={home.sections.process}
      />

      {/* Werkgebied */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {home.sections.werkgebiedTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {home.sections.werkgebiedText}
            </p>
            <Link
              href="/werkgebieden"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Bekijk alle werkgebieden
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider
        title="Wat klanten zeggen"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      <FAQAccordion title="Veelgestelde vragen" faqs={home.faq} />

      <CtaSection
        title="Wil je weten wat in jouw woning het slimst is?"
        subtitle="Vraag een gratis offerte aan."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />
    </>
  );
}
