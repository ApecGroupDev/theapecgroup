import Header from "@/components/header";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/aboutUs/Background_About.jpg')] bg-cover bg-top bg-no-repeat min-h-screen">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
}