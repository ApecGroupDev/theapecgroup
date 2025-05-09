import Hero from "./sections/hero";
import TeamPage from "./sections/main";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <TeamPage />
    </div>
  );
};

export default About;