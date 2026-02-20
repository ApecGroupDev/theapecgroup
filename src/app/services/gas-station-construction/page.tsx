import Footer from "@/components/footer";
import MainConstruction from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import AccordionConstruction from "./sections/accordion";
import ServicesBoxLinks from "@/components/servicesLinks";
import CTA from "@/components/cta";
import ConstructionSchema from "@/components/schema/ConstructionSchema";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Gas Station Construction Services | APEC",
  description:
    "Gas station construction services by APEC. We build durable, compliant fuel stations with full design, installation, and project management support.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/services/gas-station-construction",
  },
};

const ServicesConstruction: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ConstructionSchema />
      <Header white />
      <Hero />
      <MainConstruction />
      <AccordionConstruction />
      <CTA />
      <ServicesBoxLinks />
      <Footer />
    </div>
  );
};

export default ServicesConstruction;
