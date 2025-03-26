import Footer from "./sections/footerRenovation";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>

      <div>
        <Hero />
      </div>

      <div>
        <MainFinancing />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;