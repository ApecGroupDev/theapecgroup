import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}>

      <Header />

      <div className="w-full">{children}</div>

      <Footer />

    </div>
  );
}