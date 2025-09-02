import Footer from "@/components/footer";
import Main from "./sections/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Oil & Gas Equipment Companies in the USA",
  description: "Meet the biggest oil and gas equipment companies in the USA. Learn who’s leading in drilling, services, and innovation.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/blogs/top-oil-and-gas-equipment-companies-usa',
  },
};

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Main />
      <div className="w-full">
        <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      </div>
      <div className='bg-gray-800'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;