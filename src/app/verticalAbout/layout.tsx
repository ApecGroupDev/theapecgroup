import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/aboutUs/Background_About2.png')] bg-cover bg-top bg-no-repeat min-h-screen">
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}