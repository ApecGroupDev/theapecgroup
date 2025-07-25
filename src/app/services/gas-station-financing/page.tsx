import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Station Financing Experts | APEC",
  description: "APEC offers gas station financing with flexible funding options for construction, equipment, and improvements. Power your energy project today.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/gas-station-financing',
  },
};

const ServicesFinancing: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesFinancing;