import Footer from "@/components/footer";
import MainContact from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The APEC Group | Petroleum Services",
  description: "Reach out to The APEC Group for expert petroleum services and solutions. Connect with our team for inquiries and support.",
  alternates: {
    canonical: 'https://www.theapecgroup.com/contact-us',
  },
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