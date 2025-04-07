export default function ServicesLinkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/services/link/Background_Link.jpg')] bg-cover bg-top bg-no-repeat min-h-screen">
      <div className="w-full">{children}</div>
    </div>
  );
}