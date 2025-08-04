import Footer from "@/components/footer";
import Main from "./sections/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Gas Station Financing Options in Atlanta",
  description: "Looking to build a gas station? Find the best gas station financing companies in Atlanta offering expert advice, equipment, and support.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/blogs',
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