import Header from "@/components/header";
import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Station Construction Services | APEC",
  description: "Build reliable gas stations with APEC's expert construction services. Visit theapecgroup.com/services/construction for quality energy infrastructure solutions.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/services/gas-station-electrical',
  },
};

const ServicesConstruction: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesConstruction;