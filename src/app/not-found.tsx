import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Header />
      <main className="relative flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c62931] opacity-[0.08] blur-[120px] pointer-events-none rounded-full" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
            Page Not Found
          </p>
          <h1 className="text-8xl md:text-9xl font-black text-[#c62931] leading-none">
            404
          </h1>
          <p className="text-lg md:text-xl text-white/50 mt-6 max-w-md leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 group inline-flex items-center gap-2 bg-[#c62931] hover:bg-[#a8232a] text-white font-medium text-sm tracking-wide px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,41,49,0.5)]"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
