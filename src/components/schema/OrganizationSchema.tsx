import SchemaMarkup from "./SchemaMarkup";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The APEC Group",
    "url": "https://www.theapecgroup.com",
    "logo": "https://www.theapecgroup.com/logos/APEC.webp",
    "description":
      "The APEC Group is your one-stop-shop for petroleum construction, fuel tank services, and compliance solutions. Serving Georgia, Texas, and Atlanta since 1989 with fast, high-quality execution and great value.",
    "foundingDate": "1989",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "855-444-2732",
      "contactType": "Customer Service",
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "4732-E North Royal Atlanta Drive",
        "addressLocality": "Tucker",
        "addressRegion": "GA",
        "postalCode": "30084",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    ],
    "sameAs": [],
  };

  return <SchemaMarkup id="organization-schema" data={schema} />;
}
