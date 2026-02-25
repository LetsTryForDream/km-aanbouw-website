import { site } from "@/src/content/site";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.brand.name,
    description: site.brand.tagline,
    telephone: site.brand.phone,
    email: site.brand.email,
    url: "https://kmaanbouw.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.brand.address,
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    priceRange: "€€€",
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: [
      "https://www.facebook.com/kmaanbouw",
      "https://www.instagram.com/kmaanbouw",
    ],
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
