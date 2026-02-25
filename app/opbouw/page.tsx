import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: site.pages.prefabOpbouw.meta.title,
  description: site.pages.prefabOpbouw.meta.description,
  openGraph: {
    title: site.pages.prefabOpbouw.meta.title,
    description: site.pages.prefabOpbouw.meta.description,
  },
};

export default function OpbouwPage() {
  const page = site.pages.prefabOpbouw;

  return (
    <>
      <Breadcrumbs items={[{ label: "Opbouw" }]} />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <p className="text-primary font-medium mb-4">{page.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl">
            {page.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {page.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/gratis-offerte">
                Gratis offerte aanvragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/projecten">Bekijk projecten</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.types.title}
            </h2>
            <ul className="space-y-4 mb-8">
              {page.types.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-lg">{bullet}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mb-4">{page.belangrijk.title}</h3>
            <p className="text-muted-foreground mb-6">{page.belangrijk.text}</p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Gratis offerte aanvragen voor jouw dakopbouw"
        subtitle="We starten altijd met een haalbaarheidscheck."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
