import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/OurTeam_Bg.jpg')",
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center top', // Center horizontally, align top
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >

      <Header />

      <div className="w-full">{children}</div>

    </div>
  )
}