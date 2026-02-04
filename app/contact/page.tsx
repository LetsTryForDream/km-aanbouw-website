import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: site.pages.contact.meta.title,
  description: site.pages.contact.meta.description,
  openGraph: {
    title: site.pages.contact.meta.title,
    description: site.pages.contact.meta.description,
  },
};

export default function ContactPage() {
  const page = site.pages.contact;

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefoon</h3>
                  <a
                    href={`tel:${site.brand.phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {site.brand.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a
                    href={`mailto:${site.brand.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {site.brand.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Werkgebied</h3>
                  <p className="text-muted-foreground">{site.brand.serviceArea}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bereikbaar</h3>
                  <p className="text-muted-foreground">Ma - Vr: 08:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Kaart: {site.brand.serviceArea}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {site.brand.address}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <LeadForm
        title="Vraag gratis een offerte aan"
        subtitle="Laat je gegevens achter en we nemen binnen 1 werkdag contact op."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Vrijblijvend advies",
          "Kostenindicatie op maat",
        ]}
      />
    </>
  );
}
