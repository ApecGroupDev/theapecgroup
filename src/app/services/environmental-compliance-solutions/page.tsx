import HeaderWhite from "@/components/headerWhite";
import Footer from "@/components/footer";
import MainCompliance from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Compliance Solutions | APEC",
  description: "APEC provides environmental compliance solutions for fuel stations, offering testing, training, and eco-friendly petroleum site services.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services/environmental-compliance-solutions',
  },
};

const ServicesCompliance: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <HeaderWhite />
      <Hero />
      <MainCompliance />
      <div className="w-full">
        <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      </div>
      <div className='bg-gray-800'>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesCompliance;