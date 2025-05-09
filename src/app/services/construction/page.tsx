import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
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