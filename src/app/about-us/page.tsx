import { Metadata } from "next";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import MissionSection from "./sections/mission";
import ValuesSection from "./sections/values";
import VisionSection from "./sections/vision";
import Footer from "@/components/footer";
import IntroAbout from "./sections/intro";
import CTA from "@/components/cta";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "About The APEC Group | Petroleum Services",
  description:
    "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/about-us",
  },
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <OrganizationSchema />
      {/* Sections */}
      <Header white />
      <Hero />
      <IntroAbout />
      <MissionSection />
      <ValuesSection />
      <VisionSection />
      <ChooseUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
