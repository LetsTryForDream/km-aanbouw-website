import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { LeadForm } from "@/components/sections/lead-form";

export const metadata: Metadata = {
  title: site.pages.gratisOfferte.meta.title,
  description: site.pages.gratisOfferte.meta.description,
  openGraph: {
    title: site.pages.gratisOfferte.meta.title,
    description: site.pages.gratisOfferte.meta.description,
  },
};

export default function GratisOffertePage() {
  const page = site.pages.gratisOfferte;

  return (
    <>
      <Breadcrumbs items={[{ label: "Gratis offerte" }]} />

      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium mb-4">{page.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance max-w-4xl mx-auto">
            {page.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      <LeadForm
        title="Offerte aanvragen"
        subtitle="Vul het formulier in en we nemen binnen 1 werkdag contact op."
        bullets={[
          "Gewenste afmetingen (ongeveer is prima)",
          "Foto's van de huidige situatie",
          "Jouw wens: aanbouw/uitbouw/opbouw/dakkapel",
          "Postcode voor planning en bereikbaarheid",
        ]}
      />
    </>
  );
}
