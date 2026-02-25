import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: site.pages.werkgebieden.meta.title,
  description: site.pages.werkgebieden.meta.description,
  openGraph: {
    title: site.pages.werkgebieden.meta.title,
    description: site.pages.werkgebieden.meta.description,
  },
};

export default function WerkgebiedenPage() {
  const page = site.pages.werkgebieden;

  return (
    <>
      <Breadcrumbs items={[{ label: "Werkgebieden" }]} />

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

      {/* Grote steden */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {page.grootteSteden.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            {page.grootteSteden.steden}
          </p>
        </div>
      </section>

      {/* Specifieke werkgebieden */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Populaire werkgebieden
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.workAreas.map((area) => (
              <Link key={area.slug} href={`/werkgebieden/${area.slug}`}>
                <Card className="h-full group hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {area.intro}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Bekijk meer
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Per provincie */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Per provincie (grote en middelgrote steden)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.provincies.map((provincie) => (
              <div key={provincie.name}>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {provincie.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {provincie.steden}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Woon je ergens anders?"
        subtitle="Vraag een offerte aan — we werken landelijk en plannen efficiënt."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
