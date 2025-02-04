import ThirdSection from "./sections/3rdsection";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import HorizontalScrollSection from "./sections/principles";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>

      <div>
        <HorizontalScrollSection />
      </div>

      <div className="2xl:mt-80">
        <ThirdSection />
      </div>

      <div className="2xl:mt-128">
        <ChooseUs />
      </div>
    </div>
  );
};

export default About;