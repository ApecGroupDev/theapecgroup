import Header from "@/components/header";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/services/Background_Services.jpg")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
    </div>
  );
}