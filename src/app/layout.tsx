import '../styles/globals.css';
import ScrollToTopButton from '@/components/scrollToTop';
import type { Metadata } from 'next';
import CookieConsent from '@/components/cookieConsent';
import ScrollToHash from '@/components/ScrollToHash';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';

const metropolis = localFont({
  src: [
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-800-normal.woff2', weight: '800', style: 'normal' },
    { path: '../../node_modules/@fontsource/metropolis/files/metropolis-latin-900-normal.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-metropolis',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theapecgroup.com'),
  title: {
    default: 'The APEC Group | Petroleum Solutions',
    template: '%s | The APEC Group',
  },
  description: 'One-stop-shop for all petroleum needs — fuels, tanks, pumps, compliance, and emergency services.',
  openGraph: {
    title: 'The APEC Group | Petroleum Solutions',
    description: 'One-stop-shop for all petroleum needs — fuels, tanks, pumps, compliance, and emergency services.',
    url: 'https://www.theapecgroup.com',
    siteName: 'The APEC Group',
    images: [
      {
        url: '/logos/APEC.webp',
        width: 1200,
        height: 630,
        alt: 'The APEC Group Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The APEC Group | Petroleum Solutions',
    description: 'One-stop-shop for all petroleum needs — fuels, tanks, pumps, compliance, and emergency services.',
    images: ['/logos/APEC.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${metropolis.variable} text-gray-800`} suppressHydrationWarning>
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="h5105p5iWJykIV1y3DbAOkWpFei5332BIw9M2XvO72s"
        />
      </head>
      <body className="min-h-screen font-sans flex flex-col" suppressHydrationWarning>
        <Header />
        <ScrollToHash />
        <div className="max-w-[2560px] mx-auto w-full flex-1">{children}</div>
        <Footer />
        <ScrollToTopButton />
        <CookieConsent />
      </body>
    </html>
  );
}
