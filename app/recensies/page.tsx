import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: site.pages.recensies.meta.title,
  description: site.pages.recensies.meta.description,
  openGraph: {
    title: site.pages.recensies.meta.title,
    description: site.pages.recensies.meta.description,
  },
};

export default function RecensiesPage() {
  const page = site.pages.recensies;

  return (
    <>
      <Breadcrumbs items={[{ label: "Recensies" }]} />

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.testimonials.map((testimonial, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-muted-foreground flex-grow mb-4">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.place}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-4 h-4 ${
                            starIndex < testimonial.rating
                              ? "text-accent fill-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ook een plan?"
        subtitle="Vraag een offerte aan."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
