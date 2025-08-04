export default function ServicesConstructionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/services/electrical/Background_Electrical_Intact.jpg")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <div className='w-full'>{children}</div>
    </div>
  );
}