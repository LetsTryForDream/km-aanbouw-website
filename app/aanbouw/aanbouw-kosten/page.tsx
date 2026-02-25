import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { CostCalculator } from "@/components/sections/cost-calculator";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";

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
      <ServiceJsonLd name="Aanbouw kosten berekenen" description={page.meta.description} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Aanbouw kosten" },
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

      {/* Prijsfactoren */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {page.prijsfactoren.title}
              </h2>
              <ul className="space-y-3">
                {page.prijsfactoren.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {page.besparen.title}
              </h2>
              <ul className="space-y-3 mb-8">
                {page.besparen.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparante offerte */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.transparant.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {page.transparant.text}
            </p>
            <Button size="lg" asChild>
              <Link href="/gratis-offerte">
                Gratis offerte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <CostCalculator title="Bereken je aanbouw kosten" showExplanation={true} /> */}

      {/* <LeadForm
        title="Gratis offerte aanvragen"
        subtitle="Met afmetingen + foto's kunnen we sneller en scherper rekenen."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Gedetailleerde offerte",
          "Inclusief planning",
        ]}
      /> */}
    </>
  );
}
