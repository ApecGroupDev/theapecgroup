"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.theapecgroup.com/#localbusiness",
        "name": "The APEC Group",
        "url": "https://www.theapecgroup.com/",
        "telephone": "855-444-2732",
        "description": "One-stop-shop for all petroleum needs — fuels, tanks, pumps, compliance, and emergency services. Serving Georgia, Texas, and Atlanta since 1989.",
        "image": "https://www.theapecgroup.com/images/logo.webp",
        "logo": "https://www.theapecgroup.com/images/logo.webp",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Office - Tucker, GA; Branch Office - Houston, TX",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Atlanta Retailers Association",
            "sameAs": "https://www.araonline.us/"
          },
          {
            "@type": "Organization",
            "name": "Georgia Association of Convenience Stores (GACS)",
            "sameAs": "http://gacs.com/"
          },
          {
            "@type": "Organization",
            "name": "Greater Houston Retailers Cooperative Association (GHRA)",
            "sameAs": "https://www.ghraonline.com/"
          },
          {
            "@type": "Organization",
            "name": "Georgia Oilman’s Association",
            "sameAs": "https://www.georgiaoilmensassoc.com/"
          },
          {
            "@type": "Organization",
            "name": "Georgia Tank & Environmental Contractors Association (GTECA)",
            "sameAs": "https://www.gteca.com/"
          },
          {
            "@type": "Organization",
            "name": "Petroleum Equipment Institute (PEI)",
            "sameAs": "https://pei.org/"
          },
          {
            "@type": "Organization",
            "name": "Texas Food & Fuel Association",
            "sameAs": "https://www.tffa.com/"
          }
        ],
        "slogan": "One-Stop-Shop for All Your Petroleum Needs",
        "foundingDate": "1989",
        "missionStatement": "We provide fast and quality execution at great value to our customers.",
        "sameAs": [
          "https://www.facebook.com/theapecgroup",
          "https://www.linkedin.com/company/theapecgroup"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.theapecgroup.com/#petroleumService",
        "serviceType": "Petroleum Products and Fuel System Solutions",
        "provider": {
          "@id": "https://www.theapecgroup.com/#localbusiness"
        },
        "areaServed": [
          { "@type": "Place", "name": "Georgia" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Atlanta" }
        ],
        "description": "Complete petroleum solutions including fuel supply, lubricants, tank installation, monitoring, compliance management, and emergency response services."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.theapecgroup.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq1",
            "name": "Who do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with gas stations, fleet yards, fuel distributors, convenience stores, and commercial fueling sites across Georgia, Texas, and Atlanta."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq2",
            "name": "Do you supply petroleum products directly, or just install equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both. We provide fuels, lubricants, alternative fuels, and complete system services — tanks, pumps, lines, monitoring, compliance."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq3",
            "name": "Can you help me choose the right products or equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We assess your site’s needs, fuel types, and growth plans to recommend safe, efficient, future-ready solutions."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq4",
            "name": "Do you handle alternative fuels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — systems ready for ethanol blends, biodiesel, and more."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq5",
            "name": "Can you manage compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "100%. We handle permits, inspections, testing, and documentation — no hassle for you."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq6",
            "name": "What if I have an emergency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call us. Our emergency response team acts fast to limit damage and restore operations."
            }
          },
          {
            "@type": "Question",
            "@id": "https://www.theapecgroup.com/#faq7",
            "name": "Do you handle full fueling site projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — from design to sign-off, we manage it all."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="home-schema" data={schema} />;
}
