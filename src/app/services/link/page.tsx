import Footer from "./sections/footerLink";
import MainLink from "./sections/main";
import Hero from "./sections/hero";
const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>

      <div>
        <Hero />
      </div>

      <div>
        <MainLink />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;