import { site } from "@/src/content/site";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/popular-solutions"
import { ReasonSection } from "@/components/sections/reason-section"
import { ServiceArea } from "@/components/sections/service-area"

import { USPGrid } from "@/components/sections/usp-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQJsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import { ArrowRight, Home, Building2, Sun } from "lucide-react";

type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};


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
        ctas={home.hero.ctas as HeroCta[]}
        isVideo={true}
        videoSrc="/videos/landing-video.mp4"
      />

      {/* Populaire oplossingen */}

      <Solutions />
      <ReasonSection />

      {/* <USPGrid title={home.sections.uspsTitle} items={home.sections.usps} /> */}

      <ProcessSteps
        title={home.sections.processTitle}
        steps={home.sections.process}
      />
      <ServiceArea />

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
      />
    </>
  );
}
