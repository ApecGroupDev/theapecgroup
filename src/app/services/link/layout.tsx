import Header from "@/components/header";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/services/link/Background_Link.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>

      <div className="w-full">{children}</div>

    </div>
  );
}