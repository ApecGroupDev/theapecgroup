import Hero from "./sections/hero";
const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default About;