import Footer from "./sections/footerImaging";
import Hero from "./sections/hero";
import MainImaging from "./sections/main";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Hero />
      </div>

      <div>
        <MainImaging />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;