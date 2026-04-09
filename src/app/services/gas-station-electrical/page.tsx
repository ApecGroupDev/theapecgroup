import Footer from "@/components/footer";
import MainElectrical from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import ServicesBoxLinks from "@/components/servicesLinks";
import AccordionElectrical from "./sections/accordion";
import CTA from "@/components/cta";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Gas Station Electrical Contractors | APEC Electrical Services",
  description:
    "Trusted gas station electrical contractors. APEC delivers safe, code-compliant installations, canopy lighting, wiring & 24/7 support for fuel stations.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/services/gas-station-electrical",
  },
};

const ServicesElectrical: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <MainElectrical />
      <AccordionElectrical />
      <CTA />
      <ServicesBoxLinks />
      <Footer />
    </div>
  );
};

export default ServicesElectrical;
