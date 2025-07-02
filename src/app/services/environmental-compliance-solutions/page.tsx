import Footer from "@/components/footer";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Environmental Compliance Solutions | APEC",
  description: "Stay compliant with APEC's tailored environmental services for petroleum industries. Visit theapecgroup.com/services/compliance for eco-friendly solutions.",
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