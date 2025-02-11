import ThirdSection from "./sections/3rdsection";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import HorizontalScrollSection from "./sections/principles";
import Footer from "./sections/footerAbout";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>

      <div className="mac-16:-mt-48">
        <HorizontalScrollSection />
      </div>

      <div className="lg:mt-52 xl:mt-24 mac-14:mt-44 2xl:mt-96 2k:mt-0">
        <ThirdSection />
      </div>

      <div className="lg:mt-24 xl:mt-44 mac-14:mt-72 2xl:mt-128 2k:mt-0">
        <ChooseUs />
      </div>

      <div className="2xl:mt-20 2k:mt-0">
        <Footer />
      </div>

    </div>
  );
};

export default About;