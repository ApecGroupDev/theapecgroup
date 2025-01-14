import '../styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'APEC Main Website',
  description: 'APEC Main Website',
  icons: {
    icon: '/logos/One-Stop-Shop-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-200 text-gray-800">
      <body
        style={{
          backgroundImage: "url('/backgrounds/WebBg2.jpg')",
          backgroundSize: 'cover', // Cover the entire container
          backgroundPosition: 'center top', // Center horizontally, align top
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <div className="w-full">{children}</div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
