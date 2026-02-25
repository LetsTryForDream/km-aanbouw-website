import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid gap-8 lg:gap-12 items-center lg:grid-cols-2`}>
          <div >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">Contact met KM Aanbouw</h2>
            <div className="max-w-3xl">
              <p>Heb je een vraag, wil je sparren over een idee of direct een offerte aanvragen? Neem contact op via het formulier of bel/mail ons.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bel ons</h3>
                  <a
                    href={`tel:${site.brand.phoneE164}`}
                    className="text-primary font-medium hover:underline transition-colors"
                  >
                    {site.brand.phoneDisplay}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Direct advies</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a
                    href={`mailto:${site.brand.email}`}
                    className="text-primary font-medium hover:underline transition-colors break-all"
                  >
                    {site.brand.email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Reactie binnen 24 uur</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Werkgebied</h3>
                  <p className="text-foreground font-medium">{site.brand.serviceArea}, Nederland</p>
                  <p className="text-sm text-muted-foreground mt-1">We komen graag langs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Bereikbaar</p>
                  <p className="text-sm text-muted-foreground mt-1">Maandag t/m vrijdag: 08:00 - 17:00</p>
                  <p className="text-sm text-muted-foreground mt-1">Zaterdag: 09:00 - 13:00</p>
                  <p className="text-sm text-muted-foreground mt-1">Zondag: gesloten</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Direct WhatsApp</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Stuur ons een bericht via WhatsApp voor snelle vragen of om een foto van je situatie te delen.
                    </p>
                    <Button variant="secondary" asChild>
                      <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer">
                        Start WhatsApp chat
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-foreground/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Gratis huisbezoek</h3>
                    <p className="text-accent-foreground/80 mb-4">
                      Plan een vrijblijvend huisbezoek in en ontvang binnen een week een offerte op maat.
                    </p>
                    <Button variant="secondary" asChild>
                      <Link href="/gratis-offerte">
                        Plan huisbezoek
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address */}
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-4">KM Aanbouw</h3>
                <div className="space-y-4 text-muted-foreground text-center p-8">
                  <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Werkgebied: {site.brand.serviceArea}, Nederland
                  </p>
                </div>
              </div>
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8!2d4.4251!3d52.0199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5a5b5a5b5a5%3A0x0!2sDe%20Aanbouw%20Expert!5e0!3m2!1snl!2snl!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="De Aanbouw Expert locatie"
                  className="w-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <LeadForm
        title="Vraag gratis een offerte aan"
        subtitle="Laat uw gegevens achter en we nemen binnen 1 werkdag contact met u op voor een vrijblijvend adviesgesprek."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Vrijblijvend advies aan huis",
          "Offerte op maat binnen een week",
        ]}
      />
    </>
  );
}
