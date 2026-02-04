import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { USPGrid } from "@/components/sections/usp-grid";
import { StickySectionTabs } from "@/components/sections/sticky-section-tabs";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { LeadForm } from "@/components/sections/lead-form";
import { CostCalculator } from "@/components/sections/cost-calculator";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: site.pages.prefabAanbouw.meta.title,
  description: site.pages.prefabAanbouw.meta.description,
  openGraph: {
    title: site.pages.prefabAanbouw.meta.title,
    description: site.pages.prefabAanbouw.meta.description,
  },
};

export default function PrefabAanbouwPage() {
  const page = site.pages.prefabAanbouw;

  return (
    <>
      <ServiceJsonLd
        name="Prefab aanbouw"
        description={page.meta.description}
      />
      <FAQJsonLd faqs={page.faq} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw/prefab-aanbouw" },
          { label: "Prefab aanbouw" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      <USPGrid title="Waarom prefab?" items={page.usp} />

      <StickySectionTabs tabs={page.sectionTabs} />

      {/* Voordelen Section */}
      <section id="voordelen" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.voordelen.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {page.voordelen.text}
            </p>
            <ul className="space-y-3 mb-8">
              {page.voordelen.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href={page.voordelen.cta.href}>
                {page.voordelen.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soorten Section */}
      <section id="soorten" className="py-16 lg:py-24 bg-muted/30 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {page.soorten.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            {page.soorten.intro}
          </p>

          <Tabs defaultValue={page.soorten.tabs[0].label} className="w-full">
            <TabsList className="mb-8 flex-wrap h-auto gap-2 bg-transparent p-0">
              {page.soorten.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {page.soorten.tabs.map((tab) => (
              <TabsContent key={tab.label} value={tab.label}>
                <Card>
                  <CardContent className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
                    <p className="text-muted-foreground mb-6">{tab.text}</p>
                    <ul className="space-y-2 mb-6">
                      {tab.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild>
                      <Link href={tab.link.href}>
                        {tab.link.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Kosten Section */}
      <section id="kosten" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {page.kosten.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            {page.kosten.intro}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Afmeting</th>
                      <th className="text-left p-4 font-semibold">Indicatie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.kosten.table.map((row, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-4">{row.size}</td>
                        <td className="p-4 font-medium">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-muted-foreground">{page.kosten.note}</p>
              <Button size="lg" asChild>
                <Link href={page.kosten.cta.href}>
                  {page.kosten.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section id="werkwijze" className="scroll-mt-32">
        <ProcessSteps title={page.werkwijze.title} steps={page.werkwijze.steps} />
      </section>

      {/* Recensies Section */}
      <section id="recensies" className="scroll-mt-32">
        <TestimonialSlider
          title={page.recensies.title}
          subtitle={page.recensies.subtitle}
          testimonials={site.testimonials}
        />
      </section>

      {/* Calculator teaser */}
      <CostCalculator title="Bereken je kosten" showExplanation={false} />

      {/* FAQ */}
      <FAQAccordion title="Veelgestelde vragen over prefab aanbouw" faqs={page.faq} />

      {/* Offerte Section */}
      <LeadForm
        title={page.offerte.title}
        subtitle={page.offerte.subtitle}
        bullets={page.offerte.bullets}
      />
    </>
  );
}
