import Footer from "./sections/footerContact";
import MainContact from "./sections/main";
import Hero from "./sections/hero";
const Contact: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainContact />
      <Footer />
    </div>
  );
};

export default Contact;