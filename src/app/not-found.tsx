'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 scrn-1000:py-40 scrn-1200:py-52">
        <h1 className="text-5xl scrn-1500:text-7xl font-bold text-red-600 mt-12">404</h1>
        <p className="text-xl scrn-1500:text-3xl mt-4 text-gray-700">Page Not Found</p>
        <p className="mt-2 scrn-1500:text-2xl text-gray-500">The page you&apos;re looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 tracking-wide inline-block px-6 py-3 rounded-2xl outline outline-red-600 text-gray-700 text-lg scrn-1500:text-2xl hover:text-white hover:bg-red-600 hover:scale-105 transform transition duration-300"
        >
          RETURN TO HOMEPAGE
        </Link>
      </main>
      <div className="w-full">
        <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      </div>
      <div className='bg-gray-800'>
        <Footer />
      </div>
    </div>
  );
}
