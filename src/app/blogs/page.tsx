import HeaderWhite from "@/components/headerWhite";
import Footer from "@/components/footer";
import BlogMain from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oil and Gas Industry Blogs | The APEC Group",
  description: "Stay informed with The APEC Group's oil and gas industry blogs. Explore expert insights and trends at theapecgroup.com/blog for energy sector updates.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/blogs',
  },
};

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <HeaderWhite />
      <Hero />
      <BlogMain />
      <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      <Footer />
    </div>
  );
};

export default Contact;