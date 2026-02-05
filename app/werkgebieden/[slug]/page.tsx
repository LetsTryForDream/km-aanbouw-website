import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, ArrowRight } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return site.workAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = site.workAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
  };
}

export default async function WerkgebiedDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = site.workAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Werkgebieden", href: "/werkgebieden" },
          { label: area.name },
        ]}
      />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Werkgebied</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl">
            {area.h1}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            {area.intro}
          </p>
          <Button size="lg" asChild>
            <Link href="/gratis-offerte">
              Gratis offerte aanvragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Wat we vaak maken */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Wat we vaak maken in deze regio
            </h2>
            <ul className="space-y-4">
              {area.watWeMaken.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ook actief in de omgeving */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ook actief in de omgeving
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {area.omgeving}
          </p>
        </div>
      </section>

      {/* Andere werkgebieden */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Bekijk ook</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {site.workAreas
              .filter((a) => a.slug !== slug)
              .slice(0, 3)
              .map((otherArea) => (
                <Link key={otherArea.slug} href={`/werkgebieden/${otherArea.slug}`}>
                  <Card className="group hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {otherArea.name}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Vraag een gratis offerte aan"
        subtitle="Met foto's en globale maten kunnen we snel schakelen."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
