import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, ArrowLeft } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CtaSection from "@/components/sections/cta-section"; // Import CtaSection

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return site.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project niet gevonden",
    };
  }

  return {
    title: `${project.title} | Projecten`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = site.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Projecten", href: "/projecten" },
          { label: project.title },
        ]}
      />

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/projecten">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar projecten
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Hoofdfoto project</p>
                  </div>
                </div>
              </Card>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">Foto {i}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge>{project.type}</Badge>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {project.place}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {project.summary}
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4">Kenmerken</h2>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button size="lg" asChild>
                <Link href="/contact#offerte">
                  Ook zo'n project? Vraag offerte aan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Geïnspireerd door dit project?"
        subtitle="Laat ons weten wat jij in gedachten hebt."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />
    </>
  );
}
