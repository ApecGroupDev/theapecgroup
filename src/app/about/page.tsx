import ThirdSection from "./sections/3rdsection";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import HorizontalScrollSection from "./sections/principles";
import Footer from "./sections/footerAbout";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <HorizontalScrollSection />
      <ThirdSection />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default About;