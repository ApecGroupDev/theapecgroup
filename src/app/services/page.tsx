import Footer from "./sections/footerServices";
import Hero from "./sections/hero";
import MainServices from "./sections/main";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>

      <div>
        <MainServices />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;