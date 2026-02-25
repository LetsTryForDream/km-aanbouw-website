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
      <ServiceJsonLd name="Dakkapel laten plaatsen" description={page.meta.description} />

      <Breadcrumbs
        items={[
          { label: "Dakkapel", href: "/dakkapel" },
          { label: "Dakkapel laten plaatsen" },
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

      {/* Keuzes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.keuzes.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.keuzes.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/gratis-offerte">
                Vraag een gratis offerte aan
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

      <LeadForm
        title="Vraag een gratis offerte aan"
        subtitle="Meer licht en stahoogte op zolder."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Advies op maat",
          "Duidelijke prijsopgave",
        ]}
      />
    </>
  );
}
