import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: site.pages.privacy.meta.title,
  description: site.pages.privacy.meta.description,
};

export default function PrivacyPage() {
  const page = site.pages.privacy;

  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={[]}
        showGrid={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>1. Wie zijn wij?</h2>
            <p>
              KM Aanbouw is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen de volgende persoonsgegevens:</p>
            <ul>
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Adres/postcode (voor offertes en planning)</li>
              <li>Projectwensen en bijlagen (foto&apos;s, tekeningen)</li>
            </ul>

            <h2>3. Waarvoor gebruiken wij je gegevens?</h2>
            <p>Wij verwerken persoonsgegevens voor de volgende doelen:</p>
            <ul>
              <li>Contact opnemen naar aanleiding van een offerte-aanvraag</li>
              <li>Opstellen en versturen van offertes</li>
              <li>Uitvoeren van overeenkomsten</li>
              <li>Verbeteren van onze dienstverlening</li>
            </ul>

            <h2>4. Bewaartermijn</h2>
            <p>
              Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld, 
              tenzij wettelijk een langere bewaartermijn verplicht is.
            </p>

            <h2>5. Delen met derden</h2>
            <p>
              Wij delen persoonsgegevens alleen met derden als dit noodzakelijk is voor de uitvoering van onze diensten 
              (bijvoorbeeld onderaannemers voor de bouw). Wij verkopen geen gegevens aan derden.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Onze website kan functionele en analytische cookies plaatsen om de website te laten werken en om 
              anonieme gebruiksstatistieken te verzamelen. Marketing-cookies plaatsen wij alleen met jouw toestemming.
            </p>

            <h2>7. Jouw rechten</h2>
            <p>Je hebt het recht om:</p>
            <ul>
              <li>Je persoonsgegevens in te zien</li>
              <li>Je persoonsgegevens te laten corrigeren of verwijderen</li>
              <li>Bezwaar te maken tegen de verwerking</li>
              <li>Je gegevens over te laten dragen</li>
            </ul>
            <p>
              Neem hiervoor contact met ons op via{" "}
              <a href={`mailto:${site.brand.email}`}>{site.brand.email}</a>.
            </p>

            <h2>8. Beveiliging</h2>
            <p>
              Wij nemen passende maatregelen om misbruik, verlies, onbevoegde toegang en andere ongewenste handelingen 
              met persoonsgegevens tegen te gaan.
            </p>

            <h2>9. Contact</h2>
            <p>
              Vragen over deze privacyverklaring? Neem contact op via{" "}
              <a href={`mailto:${site.brand.email}`}>{site.brand.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
