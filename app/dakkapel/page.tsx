import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: site.pages.dakkapel.meta.title,
  description: site.pages.dakkapel.meta.description,
  openGraph: {
    title: site.pages.dakkapel.meta.title,
    description: site.pages.dakkapel.meta.description,
  },
};

export default function DakkapelOverviewPage() {
  const page = site.pages.dakkapel;

  return (
    <>
      <Breadcrumbs items={[{ label: "Dakkapel" }]} />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <p className="text-primary font-medium mb-4">{page.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl">
            {page.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {page.hero.subtitle}
          </p>
          <Button size="lg" asChild>
            <Link href="/gratis-offerte">
              Gratis offerte
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.keuzes.title}
            </h2>
            <ul className="space-y-4">
              {page.keuzes.bullets.map((bullet, i) => (
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
        title="Vraag een gratis offerte aan"
        subtitle="Meer licht en stahoogte op zolder."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
