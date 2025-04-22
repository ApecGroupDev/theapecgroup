import Hero from "./sections/hero";
import MainServices from "./sections/main";
import Footer from "@/components/footer";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainServices />
      <Footer />
    </div>
  );
};

export default Services;