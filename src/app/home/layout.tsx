import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/WebBg2.jpg')",
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center top', // Center horizontally, align top
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="w-full">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
