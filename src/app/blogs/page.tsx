import Footer from "@/components/footer";
import MainContact from "./sections/main";
import Hero from "./sections/hero";

export const metadata = {
  title: "Oil and Gas Industry Blogs | The APEC Group",
  description: "Stay informed with The APEC Group's oil and gas industry blogs. Explore expert insights and trends at theapecgroup.com/blog for energy sector updates.",
};

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