import Hero from "./sections/hero";
import TeamPage from "./sections/main";
import Footer from "./sections/footerTeam";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>

      <div>
        <TeamPage />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default About;