import ThirdSection from "./sections/3rdsection";
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
        <HorizontalScrollSection/>
      </div>

      <div>
        <ThirdSection />
      </div>
    </div>
  );
};

export default About;