export default function ServicesImagingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      <div className='w-full'>{children}</div>
    </div>
  );
}