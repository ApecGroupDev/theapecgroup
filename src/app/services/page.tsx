import Hero from "./sections/hero";
import HeaderWhite from "@/components/headerWhite";
import MainServices from "./sections/main";
import Footer from "@/components/footer";
import { Metadata } from "next";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Petroleum Equipment Services & Repairs | The APEC Group",
  description: "APEC provides petroleum equipment services, construction, tank repair, and environmental compliance for fuel stations. Reliable energy partner.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services',
  },
};

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <HeaderWhite />
      <Hero />
      <MainServices />
      <CTA />
      <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      <Footer />
    </div>
  );
};

export default Services;