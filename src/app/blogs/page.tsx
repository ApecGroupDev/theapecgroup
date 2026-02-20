import Footer from "@/components/footer";
import BlogMain from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import AccordionBlogs from "./sections/accordion";
import CTA from "@/components/cta";
import BlogSchema from "@/components/schema/BlogsSchema";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Oil and Gas Industry Blogs | The APEC Group",
  description:
    "Stay informed with The APEC Group's oil and gas industry blogs. Explore expert insights and trends at theapecgroup.com/blog for energy sector updates.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/blogs",
  },
};

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <BlogSchema />
      <Header white />
      <Hero />
      <BlogMain />
      <CTA />
      <AccordionBlogs />
      <Footer />
    </div>
  );
};

export default Contact;
