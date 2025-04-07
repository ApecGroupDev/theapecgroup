import Footer from "./sections/footerRenovation";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
const ServicesRenovation: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesRenovation;