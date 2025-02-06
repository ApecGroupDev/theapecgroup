import Header from "@/components/header";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/AboutUsBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}>

      <Header />

      <div className="w-full">{children}</div>

    </div>
  );
}