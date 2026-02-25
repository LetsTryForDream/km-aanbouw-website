import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: site.pages.blog.meta.title,
  description: site.pages.blog.meta.description,
  openGraph: {
    title: site.pages.blog.meta.title,
    description: site.pages.blog.meta.description,
  },
};

export default function BlogPage() {
  const page = site.pages.blog;

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

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
            {site.blog.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("nl-NL", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground flex-grow mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium">
                      Lees meer
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
        title="Klaar om te starten?"
        subtitle="Vraag een gratis offerte aan."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
