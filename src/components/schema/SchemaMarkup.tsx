"use client";
import Script from "next/script";

interface SchemaMarkupProps {
  id: string;
  data: Record<string, any>;
}

export default function SchemaMarkup({ id, data }: SchemaMarkupProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
