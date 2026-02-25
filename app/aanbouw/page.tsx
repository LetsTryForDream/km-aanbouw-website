import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: site.pages.aanbouw.meta.title,
  description: site.pages.aanbouw.meta.description,
  openGraph: {
    title: site.pages.aanbouw.meta.title,
    description: site.pages.aanbouw.meta.description,
  },
};

export default function AanbouwPage() {
  const page = site.pages.aanbouw;

  return (
    <>
      <Breadcrumbs items={[{ label: "Aanbouw" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      {/* Welke aanbouw past bij jou? */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Welke aanbouw past bij jou?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {page.types.map((type) => (
              <Card key={type.title} className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{type.desc}</p>
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href={type.href}>
                      Meer info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waar letten we op */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.quality.title}
            </h2>
            <ul className="space-y-4">
              {page.quality.bullets.map((bullet, i) => (
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
        subtitle="En ontvang een helder plan van aanpak."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
