import MainLink from "./sections/main";
import Hero from "./sections/hero";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata = {
  title: "Gas Station Pump Advertising | The APEC Group",
  description: "Elevate your brand with The APEC Group's gas station pump advertising. Discover effective, high-visibility marketing solutions.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/gas-station-pump-advertising',
  },
};

const ServicesLink: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <MainLink />
      <Footer />
    </div>
  );
};

export default ServicesLink;