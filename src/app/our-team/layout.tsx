import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/ourTeam/Background_Team.webp")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
  );
}