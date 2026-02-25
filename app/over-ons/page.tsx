import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: site.pages.overOns.meta.title,
  description: site.pages.overOns.meta.description,
  openGraph: {
    title: site.pages.overOns.meta.title,
    description: site.pages.overOns.meta.description,
  },
};

export default function OverOnsPage() {
  const page = site.pages.overOns;

  return (
    <>
      <Breadcrumbs items={[{ label: "Over ons" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
        imageSrc={page.hero.imageSrc}
      />

      {/* Waar wij voor staan */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.waarWijVoorStaan.title}
            </h2>
            <ul className="space-y-4">
              {page.waarWijVoorStaan.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-lg">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Samenwerking */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.samenwerking.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {page.samenwerking.text}
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Maak kennis met KM Aanbouw"
        subtitle="Plan een adviesgesprek."
        primaryCta={{ label: "Adviesgesprek plannen", href: "/contact" }}
      />
    </>
  );
}
