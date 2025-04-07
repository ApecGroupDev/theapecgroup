import Footer from "./sections/footerFinancing";
import MainFinancing from "./sections/main";
import Hero from "./sections/hero";
const ServicesFinancing: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainFinancing />
      <Footer />
    </div>
  );
};

export default ServicesFinancing;