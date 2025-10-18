"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function EnvironmentalComplianceSchema() {
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
          "Environmental compliance services for petroleum systems, ensuring regulatory safety and reliability across Georgia, Texas, and Atlanta.",
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
        "@id": "https://www.theapecgroup.com/environmental-compliance#service",
        "serviceType": "Environmental Compliance Solutions",
        "provider": {
          "@id": "https://www.theapecgroup.com/#localbusiness",
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" },
        ],
        "description":
          "Specialized environmental compliance services for petroleum systems, including inspections, testing, permitting, spill prevention, and remediation.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/environmental-compliance#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name":
              "Who do you serve with your environmental compliance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We support gas stations, fleet yards, fuel distributors, C-stores, and other commercial fueling sites.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you handle all compliance paperwork and permitting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we take care of permits, reports, documentation, and liaising with regulators so you stay ahead.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide spill prevention and response?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely — we offer prevention systems, emergency response, and cleanup services.",
            },
          },
          {
            "@type": "Question",
            "name": "Are your services specific to Georgia and Texas regulations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we have deep local expertise and handle compliance to match all regional codes.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you test our tanks and lines for leaks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we provide certified testing and inspections to detect issues before they become costly problems.",
            },
          },
        ],
      },
    ],
  };

  return <SchemaMarkup id="environmental-compliance-schema" data={schema} />;
}
