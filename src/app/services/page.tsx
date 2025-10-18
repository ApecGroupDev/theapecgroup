import Hero from "./sections/hero";
import HeaderWhite from "@/components/headerWhite";
import MainServices from "./sections/main";
import Footer from "@/components/footer";
import { Metadata } from "next";
import CTA from "@/components/cta";
import IntroServices from "./sections/intro";
import ServicesSchema from "@/components/schema/ServicesSchema";

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
      <ServicesSchema />
      <HeaderWhite />
      <Hero />
      <IntroServices />
      <MainServices />
      <CTA />
      <Footer />
    </div>
  );
};

export default Services;