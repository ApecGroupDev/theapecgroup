import MainContact from "./sections/main";
import Hero from "./sections/hero";
import { Metadata } from "next";
import GoogleMaps from "./sections/googleMaps";
import OurOffices from "./sections/ourOffices";
import IntroContact from "./sections/intro";
import HowWeWork from "./sections/howWeWork";
import ContactCTA from "./sections/contactcta";
import ContactPageSchema from "@/components/schema/ContactSchema";

export const metadata: Metadata = {
  title: "Contact The APEC Group | Petroleum Services",
  description:
    "Reach out to The APEC Group for expert petroleum services and solutions. Connect with our team for inquiries and support.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/contact-us",
  },
  openGraph: {
    title: "Contact The APEC Group | Petroleum Services",
    description: "Reach out to The APEC Group for expert petroleum services and solutions. Connect with our team for inquiries and support.",
  },
  twitter: {
    title: "Contact The APEC Group | Petroleum Services",
    description: "Reach out to The APEC Group for expert petroleum services and solutions. Connect with our team for inquiries and support.",
  },
};

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ContactPageSchema />
      <Hero />
      <IntroContact />
      <OurOffices />
      <ContactCTA />
      <HowWeWork />
      <MainContact />
      <GoogleMaps />
    </div>
  );
};

export default Contact;
