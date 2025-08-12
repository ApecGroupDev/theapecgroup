'use client';

import Script from 'next/script';
import { useIsNotFound } from './NotFoundContext';

export default function HeadManager() {
  const is404 = useIsNotFound();

  if (is404) return null;

  return (
    <head>
      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="h5105p5iWJykIV1y3DbAOkWpFei5332BIw9M2XvO72s"
      />

      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WXLE69Q1SV"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WXLE69Q1SV');
        `}
      </Script>
    </head>
  );
}
