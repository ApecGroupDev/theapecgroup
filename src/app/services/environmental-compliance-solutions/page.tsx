import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Environmental Compliance Solutions | APEC",
  description: "APEC provides environmental compliance solutions for fuel stations, offering testing, training, and eco-friendly petroleum site services.",
};

const ServicesCompliance: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesCompliance;