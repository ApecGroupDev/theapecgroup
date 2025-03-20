import Footer from "./sections/footerImaging";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";

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