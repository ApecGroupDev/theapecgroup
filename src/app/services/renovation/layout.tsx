export default function ServicesRenovationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/services/renovation/Background_Renovation.jpg')] bg-cover bg-top bg-no-repeat min-h-screen">
      <div className="w-full">{children}</div>
    </div>
  );
}