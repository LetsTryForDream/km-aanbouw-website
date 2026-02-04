import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: site.pages.dakkapel.meta.title,
  description: site.pages.dakkapel.meta.description,
  openGraph: {
    title: site.pages.dakkapel.meta.title,
    description: site.pages.dakkapel.meta.description,
  },
};

export default function DakkapelPage() {
  const page = site.pages.dakkapel;

  return (
    <>
      <ServiceJsonLd
        name="Dakkapel laten plaatsen"
        description={page.meta.description}
      />

      <Breadcrumbs
        items={[
          { label: "Dakkapel", href: "/dakkapel/dakkapel-laten-plaatsen" },
          { label: "Dakkapel laten plaatsen" },
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
            <ul className="space-y-3">
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

      <CTASection
        title="Meer licht en ruimte op zolder?"
        subtitle="Vraag een gratis offerte aan voor je dakkapel."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />

      <LeadForm
        title="Vraag een offerte aan"
        subtitle="Laat je gegevens achter en we nemen binnen 1 werkdag contact op."
        bullets={["Reactie binnen 1 werkdag", "Advies op maat", "Duidelijke prijsopgave"]}
      />
    </>
  );
}
