import Header from '@/components/header';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/backgrounds/contact/Background_Contact.webp")] bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
    </div>
  );
}