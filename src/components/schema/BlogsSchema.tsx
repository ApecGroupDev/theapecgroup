"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The APEC Group Blog",
    "url": "https://www.theapecgroup.com/blogs",
    "description":
      "Expert insights, compliance updates, and petroleum trends from The APEC Group. Helping fuel retailers and industry pros stay informed and competitive.",
    "publisher": {
      "@type": "Organization",
      "name": "The APEC Group",
      "url": "https://www.theapecgroup.com",
    },
  };

  return <SchemaMarkup id="blog-schema" data={schema} />;
}
