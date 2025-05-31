import ThirdSection from "./sections/3rdsection";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import MissionSection from "./sections/mission";
import ValuesSection from "./sections/values";
import VisionSection from "./sections/vision";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <MissionSection />
      <ValuesSection />
      <VisionSection />
      <ThirdSection />
      <ChooseUs />
    </div>
  );
};

export default About;