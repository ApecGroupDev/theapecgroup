import '../styles/globals.css';
import ScrollToTopButton from '@/components/scrollToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Petroleum Products Company | The APEC Group',
  description: 'The APEC Group is a petroleum products company offering fuels, lubricants, gas station construction, financing, compliance, and equipment services.',
  robots: 'index,follow',
  icons: {
    icon: '/logos/One-Stop-Shop-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='bg-gray-300 text-gray-800'>
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
      <body className='min-h-screen'>
        {/* Render children */}
        <div className='max-w-[2560px] mx-auto'>
          {children}
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
