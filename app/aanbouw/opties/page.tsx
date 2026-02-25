import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section"; // Import CtaSection here
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: site.pages.aanbouwOpties.meta.title,
  description: site.pages.aanbouwOpties.meta.description,
  openGraph: {
    title: site.pages.aanbouwOpties.meta.title,
    description: site.pages.aanbouwOpties.meta.description,
  },
};

export default function AanbouwOptiesPage() {
  const page = site.pages.aanbouwOpties;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Opties" },
        ]}
      />

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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Populaire aanbouw-opties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.optionPages.map((option) => (
              <Link key={option.slug} href={`/aanbouw/opties/${option.slug}`}>
                <Card className="h-full group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">
                      {option.intro.substring(0, 100)}...
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Meer info
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Klik door naar de optie die je zoekt"
        subtitle="Of vraag direct een offerte aan."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
