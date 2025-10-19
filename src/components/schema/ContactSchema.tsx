"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "The APEC Group",
      "url": "https://www.theapecgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "855-444-2732",
        "contactType": "Customer Service",
        "areaServed": ["US-GA", "US-TX"],
        "availableLanguage": "English",
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tucker",
        "addressRegion": "GA",
        "addressCountry": "US",
      },
    },
  };

  return <SchemaMarkup id="contact-page-schema" data={schema} />;
}
