import '../styles/globals.css';
import ScrollToTopButton from '@/components/scrollToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Atlanta Petroleum Equipment Company - APEC',
  description: 'Petroleum Equipment Services APEC is dedicated to delivering exceptional results through meticulous project management and outstanding execution. Our success stems from in-depth project analysis, constant communication with customers, and proactive planning to address unforeseen challenges. This commitment has driven our rapid growth and established us as a trusted partner in the petroleum industry. APEC offers a wide range of services, including canopy installation, construction, environmental compliance inspections and testing, C-store renovations, digital marketing for Anthem dispensers, and financing solutions.',
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
