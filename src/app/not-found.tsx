'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl scrn-1500:text-7xl font-bold text-red-600">404</h1>
      <p className="text-xl scrn-1500:text-3xl mt-4 text-gray-700">Page Not Found</p>
      <p className="mt-2 scrn-1500:text-2xl text-gray-500">The page you're looking for does not exist.</p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 text-gray-800 underline underline-offset-8 decoration- space-y-2 text-lg scrn-1500:text-2xl hover:text-red-600 transition"
      >
        RETURN TO HOMEPAGE
      </Link>
    </div>
  );
}
