import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { CostCalculator } from "@/components/sections/cost-calculator";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: site.pages.aanbouwKosten.meta.title,
  description: site.pages.aanbouwKosten.meta.description,
  openGraph: {
    title: site.pages.aanbouwKosten.meta.title,
    description: site.pages.aanbouwKosten.meta.description,
  },
};

export default function AanbouwKostenPage() {
  const page = site.pages.aanbouwKosten;

  return (
    <>
      <ServiceJsonLd
        name="Aanbouw kosten berekenen"
        description={page.meta.description}
      />
      <FAQJsonLd faqs={page.faq} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw/prefab-aanbouw" },
          { label: "Aanbouw kosten" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      <CostCalculator title="Bereken je aanbouw kosten" showExplanation={true} />

      <FAQAccordion title="Veelgestelde vragen over kosten" faqs={page.faq} />

      <LeadForm
        title="Vraag een nauwkeurige offerte aan"
        subtitle="Voor een exacte prijsopgave nemen we contact met je op."
        bullets={["Reactie binnen 1 werkdag", "Gedetailleerde offerte", "Inclusief planning"]}
      />
    </>
  );
}
