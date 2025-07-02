import Hero from "./sections/hero";
import MainServices from "./sections/main";
import Footer from "@/components/footer";

export const metadata = {
  title: "Petroleum Equipment Services | The APEC Group",
  description: "Achieve regulatory compliance with APEC's specialized environmental services for petroleum. Visit theapecgroup.com/services/compliance for sustainable solutions.",
};

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