import HeaderWhite from "@/components/headerWhite";
import Footer from "@/components/footer";
import MainConstruction from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Station Construction Services | APEC",
  description: "Gas station construction services by APEC. We build durable, compliant fuel stations with full design, installation, and project management support.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services/gas-station-construction',
  },
};

const ServicesConstruction: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <HeaderWhite />
      <Hero />
      <MainConstruction />
      <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      <Footer />
    </div>
  );
};

export default ServicesConstruction;