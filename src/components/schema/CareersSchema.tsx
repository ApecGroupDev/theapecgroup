"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function CareersSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.theapecgroup.com/#organization",
        "name": "The APEC Group",
        "url": "https://www.theapecgroup.com",
        "logo": "https://www.theapecgroup.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/theapecgroup/",
          "https://www.facebook.com/theapecgroup/"
        ],
        "description":
          "Join APEC Group for petroleum careers in gas station construction, fuel delivery, and compliance across Georgia, Texas, and the Southeast.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Office - Tucker, GA; Branch Office - Houston, TX",
          "addressCountry": "US"
        }
      },
      {
        "@type": "JobPosting",
        "@id": "https://www.theapecgroup.com/careers#service-technician",
        "title": "Service Technician",
        "description":
          "Looking for an experienced technician with expertise in POS systems and fuel dispensers. Past certifications and at least two years of experience are required. Must be willing to work long hours and be on-call on weekends.",
        "datePosted": "2025-07-14",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@id": "https://www.theapecgroup.com/#organization"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Office - Tucker, GA",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "postalCode": "30084",
            "addressCountry": "US"
          }
        },
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "United States"
        },
        "validThrough": "2025-12-31T23:59",
        "industry": "Petroleum Services",
        "identifier": {
          "@type": "PropertyValue",
          "name": "APEC Careers",
          "value": "service-technician-2025"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/careers#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need petroleum industry experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Not always. We offer training for many roles — especially in fuel delivery and equipment service."
            }
          },
          {
            "@type": "Question",
            "name": "How fast is the hiring process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We typically schedule interviews within a week of reviewing applications."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide safety and compliance training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely. We prioritize safety and ensure all employees are trained to industry standards."
            }
          },
          {
            "@type": "Question",
            "name": "Where do you operate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our core operations are in Georgia, Texas, and surrounding Southeastern states."
            }
          },
          {
            "@type": "Question",
            "name": "What types of petroleum jobs are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "From field techs to project managers, drivers, and compliance specialists — if it fuels the industry, we hire for it."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="careers-schema" data={schema} />;
}
