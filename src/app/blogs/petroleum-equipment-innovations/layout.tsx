export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white bg-cover bg-top bg-no-repeat min-h-screen'>
      <div className='w-full'>{children}</div>
    </div>
  );
}