import Hero from "./sections/hero";
import MainServices from "./sections/main";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainServices />
    </div>
  );
};

export default Services;