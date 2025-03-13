import Header from '@/components/header';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/homepage/Background.jpg')",
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

    </div>
  );
}
