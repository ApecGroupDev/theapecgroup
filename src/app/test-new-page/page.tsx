import Header from "@/components/header";
import Footer from "@/components/footer";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canopy Imaging Solutions | APEC",
  description: "Canopy imaging solutions from APEC deliver custom visual designs and installations that transform gas station branding and customer appeal.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/canopy-imaging-solutions',
  },
};

const ServicesImaging: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <MainImaging />
      <div className="w-full">
        <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      </div>
      <div className='bg-gray-800'>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesImaging;