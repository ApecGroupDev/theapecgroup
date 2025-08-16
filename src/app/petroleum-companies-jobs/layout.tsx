import Header from "@/components/header";

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/careers/Background_Careers.webp")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
    </div>
  );
}