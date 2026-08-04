import Hero from "./sections/hero";
import MainServices from "./sections/main";
import { Metadata } from "next";
import CTA from "@/components/cta";
import IntroServices from "./sections/intro";
import ServicesSchema from "@/components/schema/ServicesSchema";

export const metadata: Metadata = {
  title: "Petroleum Equipment Services & Repairs | The APEC Group",
  description:
    "APEC provides petroleum equipment services, construction, tank repair, and environmental compliance for fuel stations. Reliable energy partner.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/services",
  },
  openGraph: {
    title: "Petroleum Equipment Services & Repairs | The APEC Group",
    description: "APEC provides petroleum equipment services, construction, tank repair, and environmental compliance for fuel stations. Reliable energy partner.",
  },
  twitter: {
    title: "Petroleum Equipment Services & Repairs | The APEC Group",
    description: "APEC provides petroleum equipment services, construction, tank repair, and environmental compliance for fuel stations. Reliable energy partner.",
  },
};

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ServicesSchema />
      <Hero />
      <IntroServices />
      <MainServices />
      <CTA />
    </div>
  );
};

export default Services;
