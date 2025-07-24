import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import MissionSection from "./sections/mission";
import ValuesSection from "./sections/values";
import VisionSection from "./sections/vision";

export const metadata = {
  title: "About The APEC Group | Petroleum Services",
  description: "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
};

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <MissionSection/>
      <ValuesSection/>
      <VisionSection/>
      {/* <ThirdSection /> */}
      <ChooseUs />
    </div>
  );
};

export default About;