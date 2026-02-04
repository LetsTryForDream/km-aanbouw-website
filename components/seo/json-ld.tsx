import { site } from "@/src/content/site";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.name,
    description: site.brand.tagline,
    telephone: site.brand.phone,
    email: site.brand.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.brand.address,
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    areaServed: site.workAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    priceRange: "€€€",
    openingHours: "Mo-Fr 08:00-17:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: site.brand.name,
    },
    description,
    areaServed: {
      "@type": "Place",
      name: site.brand.serviceArea,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
