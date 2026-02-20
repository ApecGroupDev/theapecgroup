import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import AccordionFinancing from "./sections/accordion";
import ServicesBoxLinks from "@/components/servicesLinks";
import CTA from "@/components/cta";
import FinancingSchema from "@/components/schema/FinancingSchema";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Gas Station Financing Experts | APEC",
  description: "APEC offers gas station financing with flexible funding options for construction, equipment, and improvements. Power your energy project today.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services/gas-station-financing',
  },
};

const ServicesFinancing: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <FinancingSchema />
      <Header white />
      <Hero />
      <MainFinancing />
      <AccordionFinancing />
      <CTA />
      <ServicesBoxLinks />
      <Footer />
    </div>
  );
};

export default ServicesFinancing;