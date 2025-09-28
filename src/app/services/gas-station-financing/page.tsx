import HeaderWhite from "@/components/headerWhite";
import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

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
      <HeaderWhite />
      <Hero />
      <MainFinancing />
      <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      <Footer />
    </div>
  );
};

export default ServicesFinancing;