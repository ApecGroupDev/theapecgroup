import Footer from "@/components/footer";
import Main from "./sections/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future of Gas Stations: Tech & Trends to Watch",
  description: "Discover how the future of gas stations is evolving with smart tech, eco-fuels, and better convenience. See what's next in fuel station innovation.",
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