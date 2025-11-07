import Header from "@/components/header";
import About from "./home/sections/about";
import FeatureBoxes from "./home/sections/featureboxes";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Introductory from "./home/sections/introductory";
import AccordionHome from "./home/sections/accordion";
import MembershipGrid from "./home/sections/membership";
import HomeSchema from "@/components/schema/HomeSchema";
import Hero1 from "./home/sections/hero1";
import Hero2 from "./home/sections/hero2";
import Hero3 from "./home/sections/hero3";

export const metadata: Metadata = {
  title: "Petroleum Products Company | The APEC Group",
  description:
    "The APEC Group is a petroleum products company offering fuels, lubricants, gas station construction, financing, compliance, and equipment services.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/", // ✅ use full absolute URL (recommended by Next.js SEO docs)
  },
};

export default function Page() {
  return (
    <HomePageLayout>
      {/* ✅ JSON-LD Schema */}
      <HomeSchema />

      {/* ✅ Main Page Sections */}
      <div className="flex flex-col">
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <About />
        <MembershipGrid />
        <Introductory />
        <FeatureBoxes />
        <CTA />
        <AccordionHome />
        <Footer />
      </div>
    </HomePageLayout>
  );
}
