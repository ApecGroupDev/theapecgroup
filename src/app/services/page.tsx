import Hero from "./sections/hero";
import MainServices from "./sections/main";
import Footer from "@/components/footer";

export const metadata = {
  title: "Petroleum Equipment Services & Repairs | The APEC Group",
  description: "APEC provides petroleum equipment services, construction, tank repair, and environmental compliance for fuel stations. Reliable energy partner.",
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