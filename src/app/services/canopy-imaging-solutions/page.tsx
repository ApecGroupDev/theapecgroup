import Footer from "@/components/footer";
import MainImaging from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Canopy Imaging Solutions | APEC",
  description: "Transform gas stations with APEC's advanced canopy imaging services. Visit theapecgroup.com/services/imaging-and-canopies for cutting-edge visual designs.",
};

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