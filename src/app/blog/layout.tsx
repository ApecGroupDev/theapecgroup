import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "",
        backgroundSize: "",
        backgroundPosition: "",
        backgroundRepeat: "",
        minHeight: "100vh",
      }}
    >

      <Header />

      <div className="w-full">{children}</div>

      <Footer />

    </div>
  )
}