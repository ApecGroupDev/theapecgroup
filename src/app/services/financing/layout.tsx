export default function ServicesFinancingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/backgrounds/services/financing/Background_Financing.jpg')] bg-cover bg-top bg-no-repeat min-h-screen">
      <div className="w-full">{children}</div>
    </div>
  );
}