import '../styles/globals.css';
import ScrollToTopButton from '@/components/scrollToTop';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import HeadManager from './HeadManager'; // client wrapper

export const metadata: Metadata = {
  title: 'Petroleum Products Company | The APEC Group',
  description: 'The APEC Group is a petroleum products company offering fuels, lubricants, gas station construction, financing, compliance, and equipment services.',
  robots: 'index,follow',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://www.theapecgroup.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-300 text-gray-800">
      <HeadManager />
      <body className="min-h-screen">
        <div className="max-w-[2560px] mx-auto">{children}</div>
        <ScrollToTopButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
