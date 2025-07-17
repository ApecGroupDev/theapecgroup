import Hero from "./sections/hero";
import TeamPage from "./sections/main";

export const metadata = {
  title: "Meet Our Team | The APEC Group",
  description: "Meet The APEC Group’s expert team, delivering innovative petroleum solutions since 1989. Learn about our dedicated professionals. ",
};

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <TeamPage />
    </div>
  );
};

export default About;