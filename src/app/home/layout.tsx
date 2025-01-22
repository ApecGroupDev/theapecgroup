import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'APEC Main Website',
  description: 'APEC Main Website',
  icons: {
    icon: '/logos/One-Stop-Shop-Logo.png',
  },
};

console.log('Home layout is being used!');

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Apply background styles to a wrapper */}
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
    </>
  );
}
