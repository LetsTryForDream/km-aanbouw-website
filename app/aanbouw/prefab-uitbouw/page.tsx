import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { ChecklistSection } from "@/components/sections/checklist-section"

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
      <ServiceJsonLd name="Prefab uitbouw" description={page.meta.description} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Prefab uitbouw" },
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

      {/* Populaire keuzes */}
      <ChecklistSection title={page.populaireKeuzes.title} items={page.populaireKeuzes.bullets} images={page.populaireKeuzes.images} />
      
      {/* Waar we op letten */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.waarWeLetten.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.waarWeLetten.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/gratis-offerte">
                Laat ons meedenken over indeling en licht
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSlider
        title="Klanten over KM Aanbouw"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      {/* <LeadForm
        title="Gratis offerte aanvragen"
        subtitle="Laat ons meedenken over indeling en licht."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Heldere opties",
          "Kostenindicatie + planning",
        ]}
      /> */}
    </>
  );
}
