export default function ServicesComplianceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/services/compliance/Background_Compliance.webp")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <div className='w-full'>{children}</div>
    </div>
  );
}