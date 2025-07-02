import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Convenience Store Remodel | The APEC Group",
  description: "Transform your convenience store with The APEC Group's expert renovation services. Visit theapecgroup.com/services/renovation for modern store solutions.",
};

const ServicesRenovation: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesRenovation;