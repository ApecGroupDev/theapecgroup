"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ConstructionSchema() {
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
          "Gas station construction services for safe, compliant fuel stations across Georgia, Texas, and Atlanta.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Office - Tucker, GA; Branch Office - Houston, TX",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/services/gas-station-construction#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you handle permits and compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we manage all permitting, inspections, and regulatory requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can you design and build the entire station?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely — we handle design, permitting, construction, and final inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Where do you provide these services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We serve Georgia, Texas, and Atlanta with local expertise."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build canopies and convenience store structures too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we provide full fueling site construction, including canopy and C-store build-out."
            }
          },
          {
            "@type": "Question",
            "name": "How long does construction take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Timelines vary by project size, but we provide clear schedules and deliver on time."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="construction-schema" data={schema} />;
}
