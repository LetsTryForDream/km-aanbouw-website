import type { Metadata } from "next";
import { Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: site.pages.garanties.meta.title,
  description: site.pages.garanties.meta.description,
  openGraph: {
    title: site.pages.garanties.meta.title,
    description: site.pages.garanties.meta.description,
  },
};

export default function GarantiesPage() {
  const page = site.pages.garanties;

  return (
    <>
      <Breadcrumbs items={[{ label: "Garanties" }]} />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <p className="text-primary font-medium mb-4">{page.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl">
            {page.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.verwachten.title}
            </h2>
            <ul className="space-y-4">
              {page.verwachten.bullets.map((bullet, i) => (
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

      <CtaSection
        title="Vraag een offerte aan"
        subtitle="Met heldere garantie-afspraken."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
