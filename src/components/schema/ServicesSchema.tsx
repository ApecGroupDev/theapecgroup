"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The APEC Group",
    "url": "https://www.theapecgroup.com/services/",
    "logo": "https://www.theapecgroup.com/wp-content/uploads/2022/11/APEC-Logo.png",
    "image": "https://www.theapecgroup.com/wp-content/uploads/2022/11/gas-station-header.jpg",
    "description":
      "The APEC Group offers end-to-end petroleum equipment services including environmental compliance, construction, financing, remodels, and canopy imaging solutions. Serving Georgia, Texas, and Atlanta.",
    "telephone": "855-444-2732",
    "email": "sales@theapecgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tucker",
      "addressRegion": "GA",
      "postalCode": "30084",
      "addressCountry": "US",
    },
    "areaServed": ["US-GA", "US-TX", "Atlanta"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "sameAs": [
      "https://www.linkedin.com/company/theapecgroup",
      "https://www.facebook.com/theapecgroup",
    ],
    "serviceType": "Petroleum Equipment Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Petroleum Equipment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Environmental Compliance & Inspections",
            "description":
              "Regulatory compliance, inspections, and reporting for petroleum businesses.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Station Financing",
            "description":
              "Flexible funding solutions for construction, upgrades, and renovations.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Canopy & Imaging Solutions",
            "description":
              "Custom canopy designs, signage, and imaging for fuel stations.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Convenience Store Remodels",
            "description":
              "Modern renovations and layout upgrades for C-stores.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Station Construction",
            "description":
              "Turnkey station construction from permitting to grand opening.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pump Advertising & Digital Marketing",
            "description":
              "High-impact, location-based pump advertising solutions.",
          },
        },
      ],
    },
  };

  return <SchemaMarkup id="services-schema" data={schema} />;
}
