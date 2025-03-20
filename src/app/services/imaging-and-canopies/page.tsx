import Footer from "./sections/footerImaging";
import MainImaging from "./sections/main";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>

      <div>
        <MainImaging />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Services;