import Header from '@/components/header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/blog/BlogP3.png')] bg-cover bg-top bg-no-repeat min-h-screen">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
}