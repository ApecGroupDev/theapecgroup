import HeaderWhite from "@/components/headerWhite";
import Footer from "@/components/footer";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import AccordionImaging from "./sections/accordion";
import ServicesBoxLinks from "@/components/servicesLinks";
import CTA from "@/components/cta";
import CanopyImagingSchema from "@/components/schema/CanopyImagingSchema";

export const metadata: Metadata = {
  title: "Canopy Imaging Solutions | APEC",
  description: "Canopy imaging solutions from APEC deliver custom visual designs and installations that transform gas station branding and customer appeal.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services/canopy-imaging-solutions',
  },
};

const ServicesImaging: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <CanopyImagingSchema />
      <HeaderWhite />
      <Hero />
      <MainImaging />
      <AccordionImaging />
      <CTA />
      <ServicesBoxLinks />
      <Footer />
    </div>
  );
};

export default ServicesImaging;