import MainLink from "./sections/main";
import Hero from "./sections/hero";
import Footer from "@/components/footer";
const ServicesLink: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainLink />
      <Footer />
    </div>
  );
};

export default ServicesLink;