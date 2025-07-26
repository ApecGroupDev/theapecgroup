import Footer from "@/components/footer";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canopy Imaging Solutions | APEC",
  description: "Canopy imaging solutions from APEC deliver custom visual designs and installations that transform gas station branding and customer appeal.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/canopy-imaging-solutions',
  },
};

const ServicesImaging: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainImaging />
      <Footer />
    </div>
  );
};

export default ServicesImaging;