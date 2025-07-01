import Footer from "@/components/footer";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";

const ServicesImaging: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <MainImaging />
        <Footer />
    </div>
  );
};

export default ServicesImaging;