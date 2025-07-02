import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Gas Station Construction Services | APEC",
  description: "Build reliable gas stations with APEC's expert construction services. Visit theapecgroup.com/services/construction for quality energy infrastructure solutions.",
};

const ServicesConstruction: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesConstruction;