import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/aboutUs/Background_About_Intact.png")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
  );
}