import '../styles/globals.css';
import ScrollToTopButton from '@/components/scrollToTop';
import type { Metadata } from 'next';
import CookieConsent from '@/components/cookieConsent';
import ScrollToHash from '@/components/ScrollToHash';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theapecgroup.com'),
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
    <html lang="en" className="text-gray-800">
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="h5105p5iWJykIV1y3DbAOkWpFei5332BIw9M2XvO72s"
        />
      </head>
      <body className="min-h-screen">
        <ScrollToHash />
        <div className="max-w-[2560px] mx-auto">{children}</div>
        <ScrollToTopButton />
        <CookieConsent />
      </body>
    </html>
  );
}
