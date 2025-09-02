import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Station Construction Services | APEC",
  description: "Gas station construction services by APEC. We build durable, compliant fuel stations with full design, installation, and project management support.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/gas-station-construction',
  },
};

const ServicesConstruction: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesConstruction;