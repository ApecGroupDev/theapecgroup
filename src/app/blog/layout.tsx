import Header from '@/components/header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/blog/Background_Blog-Test.jpg')] bg-cover bg-top bg-no-repeat min-h-screen">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
}