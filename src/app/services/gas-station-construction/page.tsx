import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Gas Station Construction Services | APEC",
  description: "Gas station construction services by APEC. We build durable, compliant fuel stations with full design, installation, and project management support.",
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