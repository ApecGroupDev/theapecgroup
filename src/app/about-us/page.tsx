import { Metadata } from "next";
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import IntroAbout from "./sections/intro";
import CTA from "@/components/cta";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import MissionVisionValues from "./sections/main";

export const metadata: Metadata = {
  title: "About The APEC Group | Petroleum Services",
  description:
    "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/about-us",
  },
  openGraph: {
    title: "About The APEC Group | Petroleum Services",
    description: "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
  },
  twitter: {
    title: "About The APEC Group | Petroleum Services",
    description: "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
  },
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <OrganizationSchema />
      {/* Sections */}
      <Hero />
      <IntroAbout />
      <MissionVisionValues />
      <ChooseUs />
      <CTA />
    </div>
  );
};

export default About;
