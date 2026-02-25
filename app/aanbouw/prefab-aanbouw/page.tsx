import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";

import { ChecklistSection } from "@/components/sections/checklist-section"

export const metadata: Metadata = {
  title: site.pages.prefabAanbouw.meta.title,
  description: site.pages.prefabAanbouw.meta.description,
  openGraph: {
    title: site.pages.prefabAanbouw.meta.title,
    description: site.pages.prefabAanbouw.meta.description,
  },
};

export default function PrefabAanbouwPage() {
  const page = site.pages.prefabAanbouw;

  return (
    <>
      <ServiceJsonLd name="Prefab aanbouw" description={page.meta.description} />
      <FAQJsonLd faqs={page.faq} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Prefab aanbouw" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
        imageSrc={page.hero.imageSrc}
      />

      {/* Voordelen Section */}
      <ChecklistSection title={page.voordelen.title} items={page.voordelen.bullets} images={page.voordelen.images} />

      {/* Perfect voor Section */}
      <ChecklistSection title={page.perfectVoor.title} items={page.perfectVoor.bullets} images={page.perfectVoor.images} />

      <ProcessSteps
        title={site.pages.home.sections.processTitle}
        steps={site.pages.home.sections.process}
      />

      <TestimonialSlider
        title="Klanten over KM Aanbouw"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      <FAQAccordion title="Veelgestelde vragen over prefab aanbouw" faqs={page.faq} />

      {/* <LeadForm
        title="Gratis offerte aanvragen"
        subtitle="Met richtmaten en foto's van je gevel krijg je sneller een scherpe prijs."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Heldere opties (casco/sleutelklaar)",
          "Kostenindicatie + planning",
        ]}
      /> */}
    </>
  );
}
