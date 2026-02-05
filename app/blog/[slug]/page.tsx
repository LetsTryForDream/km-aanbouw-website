import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";

// Sample blog posts - in production this would come from a CMS
const blogPosts = [
  {
    slug: "aanbouw-kosten-2025",
    title: "Aanbouw kosten in 2025: wat kost een aanbouw per m²?",
    excerpt: "Een overzicht van de kosten voor een aanbouw in 2025, inclusief factoren die de prijs beïnvloeden.",
    category: "Kosten",
    date: "2025-01-15",
    readTime: "5 min",
    content: `
      <h2>Wat kost een aanbouw in 2025?</h2>
      <p>De kosten van een aanbouw variëren sterk afhankelijk van afmeting, materialen, fundering en afwerkingsniveau. In 2025 liggen de prijzen voor een standaard aanbouw tussen €1.500 en €2.500 per vierkante meter.</p>
      
      <h3>Prijsfactoren</h3>
      <p>De belangrijkste factoren die de prijs bepalen:</p>
      <ul>
        <li><strong>Afmetingen:</strong> Hoe groter de aanbouw, hoe hoger de totale kosten (maar vaak lager per m²)</li>
        <li><strong>Fundering:</strong> Afhankelijk van grondsoort en bereikbaarheid</li>
        <li><strong>Constructie:</strong> Dragende muren, staal, lateien</li>
        <li><strong>Kozijnen en glas:</strong> HR++ of triple glas, schuifpui, daklicht</li>
        <li><strong>Afwerking:</strong> Casco, wind- en waterdicht of volledig turnkey</li>
      </ul>

      <h3>Prefab vs. traditioneel</h3>
      <p>Prefab aanbouwen zijn vaak 10-20% goedkoper dan traditionele aanbouwen, doordat er minder uren op locatie nodig zijn en het proces efficiënter verloopt.</p>

      <h3>Tip: vergelijk offertes</h3>
      <p>Vraag altijd meerdere offertes aan en let op wat er wél en niet is inbegrepen. Een goedkope offerte kan duur uitpakken als belangrijke posten ontbreken.</p>
    `,
  },
  {
    slug: "vergunning-aanbouw-nodig",
    title: "Heb ik een vergunning nodig voor mijn aanbouw?",
    excerpt: "Wanneer is een omgevingsvergunning verplicht en wanneer kun je vergunningvrij bouwen?",
    category: "Vergunningen",
    date: "2025-01-10",
    readTime: "4 min",
    content: `
      <h2>Vergunning of vergunningvrij?</h2>
      <p>Niet elke aanbouw vereist een vergunning. Of je vergunningvrij kunt bouwen hangt af van verschillende factoren.</p>
      
      <h3>Vergunningvrij bouwen (vaak mogelijk bij)</h3>
      <ul>
        <li>Uitbouw aan de achterzijde tot maximaal 4 meter diep</li>
        <li>Maximaal 50% van het achtererf bebouwd</li>
        <li>Hoogte niet hoger dan 5 meter (plat dak) of de bestaande nok</li>
        <li>Geen beschermd stadsgezicht of monument</li>
      </ul>

      <h3>Vergunning nodig (vaak wel bij)</h3>
      <ul>
        <li>Aanbouw aan de voorzijde</li>
        <li>Grotere uitbouw dan de standaardregels toestaan</li>
        <li>Beschermd stadsgezicht of monument</li>
        <li>Dakopbouw of extra verdieping</li>
      </ul>

      <h3>Twijfel? Laat het checken</h3>
      <p>KM Aanbouw helpt je graag met de vergunning-check. We bekijken je situatie en regelen waar nodig de aanvraag.</p>
    `,
  },
  {
    slug: "leefkeuken-realiseren",
    title: "Zo creëer je een leefkeuken met een aanbouw",
    excerpt: "Tips en inspiratie voor het realiseren van een ruime leefkeuken met een uitbouw.",
    category: "Inspiratie",
    date: "2025-01-05",
    readTime: "6 min",
    content: `
      <h2>Van kleine keuken naar leefkeuken</h2>
      <p>Een leefkeuken is de droom van veel huiseigenaren: koken, eten én leven in één ruimte. Met een aanbouw kun je deze droom realiseren.</p>
      
      <h3>Populaire indelingen</h3>
      <ul>
        <li><strong>Kookeiland:</strong> Centraal koken met zicht op de tuin en woonkamer</li>
        <li><strong>Lange tafel:</strong> Grote eettafel als hartje van de keuken</li>
        <li><strong>Zithoek:</strong> Comfortabele bank bij de keuken</li>
      </ul>

      <h3>Licht en uitzicht</h3>
      <p>Een grote schuifpui of harmonicadeuren maken de verbinding met de tuin. Een daklicht zorgt voor extra daglicht, zeker bij diepere uitbouwen.</p>

      <h3>Installaties niet vergeten</h3>
      <p>Denk vooraf goed na over:</p>
      <ul>
        <li>Positie van de afzuiging</li>
        <li>Voldoende stopcontacten (inductie, oven, koffiezetapparaat)</li>
        <li>Water- en afvoerleidingen</li>
        <li>Vloerverwarming (populair in leefkeukens)</li>
      </ul>
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Artikel niet gevonden",
    };
  }

  return {
    title: `${post.title} | KM Aanbouw Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Artikel niet gevonden</h1>
        <Button asChild>
          <Link href="/blog">Terug naar blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
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
                  {post.readTime} leestijd
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author/CTA */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-muted-foreground mb-4">
                Heb je vragen over dit onderwerp? Of wil je direct aan de slag met jouw aanbouwplannen?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/gratis-offerte">Gratis offerte aanvragen</Link>
                </Button>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/contact">Contact opnemen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CtaSection
        title="Klaar om te starten?"
        subtitle="Vraag een gratis offerte aan en ontvang binnen een week een voorstel op maat."
        primaryCta={{ label: "Gratis offerte", href: "/gratis-offerte" }}
        secondaryCta={{ label: "Bel ons", href: `tel:${site.brand.phone.replace(/\s/g, "")}` }}
      />
    </>
  );
}
