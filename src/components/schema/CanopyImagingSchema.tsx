"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function CanopyImagingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.theapecgroup.com/#localbusiness",
        "name": "The APEC Group",
        "url": "https://www.theapecgroup.com",
        "telephone": "855-444-2732",
        "description":
          "Custom canopy imaging solutions for gas stations in Georgia, Texas, and Atlanta. Design, production, and installation for standout branding.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Office - Tucker, GA; Branch Office - Houston, TX",
          "addressCountry": "US",
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.theapecgroup.com/canopy-imaging#service",
        "serviceType": "Canopy Imaging Solutions",
        "provider": {
          "@type": "LocalBusiness",
          "name": "The APEC Group",
          "@id": "https://www.theapecgroup.com/#localbusiness",
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" },
        ],
        "description":
          "Full-service canopy imaging including custom design, production, installation, and refurbishment for gas stations.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/canopy-imaging#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you handle both design and installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we provide full-service canopy imaging from design to final install.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you update or refresh an existing canopy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely — we can refurbish, rebrand, or upgrade your current canopy for a fresh new look.",
            },
          },
          {
            "@type": "Question",
            "name": "Where do you offer canopy imaging services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve Georgia, Texas, and Atlanta with local expertise.",
            },
          },
          {
            "@type": "Question",
            "name": "Are the materials weather-resistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we use high-quality, durable materials built to withstand the elements and keep your station looking sharp.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you integrate lighting or digital signage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we can incorporate LED lighting and digital elements into your canopy design.",
            },
          },
        ],
      },
    ],
  };

  return <SchemaMarkup id="canopy-imaging-schema" data={schema} />;
}
