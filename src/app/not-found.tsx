import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 lg:py-40 xl:py-52">
        <h1 className="text-5xl 2xl:text-7xl font-bold text-red-600 mt-12">404</h1>
        <p className="text-xl 2xl:text-3xl mt-4 text-gray-700">Page Not Found</p>
        <p className="mt-2 2xl:text-2xl text-gray-500">The page you&apos;re looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 tracking-wide inline-block px-6 py-3 rounded-2xl outline outline-red-600 text-gray-700 text-lg 2xl:text-2xl hover:text-white hover:bg-red-600 hover:scale-105 transform transition duration-300"
        >
          RETURN TO HOMEPAGE
        </Link>
      </main>
      <div className='bg-gray-800'>
        <Footer />
      </div>
    </div>
  );
}
