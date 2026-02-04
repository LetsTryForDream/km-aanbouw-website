import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { LeadForm } from "@/components/sections/lead-form";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: site.pages.prefabUitbouw.meta.title,
  description: site.pages.prefabUitbouw.meta.description,
  openGraph: {
    title: site.pages.prefabUitbouw.meta.title,
    description: site.pages.prefabUitbouw.meta.description,
  },
};

export default function PrefabUitbouwPage() {
  const page = site.pages.prefabUitbouw;

  return (
    <>
      <ServiceJsonLd
        name="Prefab uitbouw"
        description={page.meta.description}
      />
      <FAQJsonLd faqs={page.faq} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw/prefab-aanbouw" },
          { label: "Prefab uitbouw" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.content.title}
            </h2>
            {page.content.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground mb-4">
                {p}
              </p>
            ))}
            <ul className="space-y-3 mt-8">
              {page.content.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQAccordion title="Veelgestelde vragen over prefab uitbouw" faqs={page.faq} />

      <CTASection
        title="Meer ruimte in je woning?"
        subtitle="Vraag een gratis offerte aan voor je uitbouw."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />

      <LeadForm
        title="Vraag een offerte aan"
        subtitle="Laat je gegevens achter en we nemen binnen 1 werkdag contact op."
        bullets={["Reactie binnen 1 werkdag", "Vrijblijvend advies", "Kostenindicatie op maat"]}
      />
    </>
  );
}
