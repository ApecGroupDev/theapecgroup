import Footer from "@/components/footer";
import MainCompliance from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import AccordionCompliance from "./sections/accordion";
import ServicesBoxLinks from "@/components/servicesLinks";
import CTA from "@/components/cta";
import EnvironmentalComplianceSchema from "@/components/schema/EnvironmentalComplianceSchema";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Environmental Compliance Solutions | APEC",
  description:
    "APEC provides environmental compliance solutions for fuel stations, offering testing, training, and eco-friendly petroleum site services.",
  robots: "index,follow",
  alternates: {
    canonical:
      "https://www.theapecgroup.com/services/environmental-compliance-solutions",
  },
};

const ServicesCompliance: React.FC = () => {
  return (
    <div className="flex flex-col">
      <EnvironmentalComplianceSchema />
      <Header white />
      <Hero />
      <MainCompliance />
      <AccordionCompliance />
      <CTA />
      <ServicesBoxLinks />
      <Footer />
    </div>
  );
};

export default ServicesCompliance;
