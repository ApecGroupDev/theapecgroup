"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function FinancingSchema() {
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
          "Gas station financing solutions for construction, equipment, and upgrades across Georgia, Texas, and Atlanta.",
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
        "@type": "Service",
        "@id": "https://www.theapecgroup.com/services/financing#service",
        "serviceType": "Gas Station Financing",
        "provider": {
          "@id": "https://www.theapecgroup.com/#localbusiness"
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" }
        ],
        "description":
          "Flexible financing solutions for gas station construction, equipment, upgrades, and remodels."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/services/financing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide financing directly or connect us with lenders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We work with trusted lending partners to connect you with the best funding options for your needs."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with both construction and equipment financing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we provide solutions for both construction and equipment, as well as upgrades and remodels."
            }
          },
          {
            "@type": "Question",
            "name": "Where do you offer gas station financing services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Georgia, Texas, and Atlanta — with local expertise to match regional requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Is financing available for remodels or site upgrades?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely — we can help secure funding for improvements, expansions, or compliance upgrades."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can financing be arranged?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Timelines vary, but we work to secure fast approvals so you can keep your project moving."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="financing-schema" data={schema} />;
}
