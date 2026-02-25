import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { ChecklistSection } from "@/components/sections/checklist-section"

export const metadata: Metadata = {
  title: site.pages.prefabOpbouw.meta.title,
  description: site.pages.prefabOpbouw.meta.description,
  openGraph: {
    title: site.pages.prefabOpbouw.meta.title,
    description: site.pages.prefabOpbouw.meta.description,
  },
};

export default function PrefabOpbouwPage() {
  const page = site.pages.prefabOpbouw;

  return (
    <>
      <ServiceJsonLd name="Dakopbouw / opbouw" description={page.meta.description} />

      <Breadcrumbs
        items={[
          { label: "Opbouw", href: "/opbouw" },
          { label: "Dakopbouw / opbouw" },
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

      {/* Veelgevraagde opbouw-types */}
      <ChecklistSection title={page.types.title} items={page.types.bullets} images={page.types.images} />


      {/* Belangrijk: constructie & vergunning */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.belangrijk.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {page.belangrijk.text}
            </p>
            <Button asChild>
              <Link href="/gratis-offerte">
                Gratis offerte
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
        title="Gratis offerte aanvragen voor jouw dakopbouw"
        subtitle="We starten altijd met een haalbaarheidscheck."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Constructieve check",
          "Kostenindicatie op maat",
        ]}
      /> */}
    </>
  );
}
