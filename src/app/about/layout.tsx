import Header from "@/components/header";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/AboutUsBG.jpg')",
        backgroundSize: '100% 100%', // Cover the entire container
        backgroundPosition: 'center top', // Center horizontally, align top
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>

      <Header />

      <div className="w-full">{children}</div>

    </div>
  );
}