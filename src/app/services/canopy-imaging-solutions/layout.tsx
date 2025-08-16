export default function ServicesImagingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/services/imaging-and-canopies/Background_Imaging.webp")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <div className='w-full'>{children}</div>
    </div>
  );
}