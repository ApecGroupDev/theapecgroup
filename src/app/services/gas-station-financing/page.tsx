import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Gas Station Financing Solutions | APEC",
  description: "Secure funding for gas stations with APEC's tailored financing services. Visit theapecgroup.com/services/financing for flexible energy project solutions.",
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