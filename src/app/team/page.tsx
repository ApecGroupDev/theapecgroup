import Hero from "./sections/hero";
import Main from "./sections/main";
import Footer from "./sections/footerTeam";

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default About;