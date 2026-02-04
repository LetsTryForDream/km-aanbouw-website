import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: site.pages.projecten.meta.title,
  description: site.pages.projecten.meta.description,
  openGraph: {
    title: site.pages.projecten.meta.title,
    description: site.pages.projecten.meta.description,
  },
};

export default function ProjectenPage() {
  const page = site.pages.projecten;

  return (
    <>
      <Breadcrumbs items={[{ label: "Projecten" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      <ProjectGrid
        title="Onze projecten"
        projects={site.projects}
        showFilters={true}
      />

      <CTASection
        title="Ook meer woonruimte?"
        subtitle="Vraag een gratis offerte aan voor jouw project."
        primaryCta={site.global.primaryCta}
        secondaryCta={site.global.secondaryCta}
      />
    </>
  );
}
