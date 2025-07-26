import Hero from "./sections/hero";
import TeamPage from "./sections/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | The APEC Group",
  description: "Meet The APEC Group’s expert team, delivering innovative petroleum solutions since 1989. Learn about our dedicated professionals.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/our-team',
  },
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