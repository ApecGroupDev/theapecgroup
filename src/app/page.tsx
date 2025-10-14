import Header from "@/components/header";
import About from "./home/sections/about";
import FeatureBoxes from "./home/sections/featureboxes";
import Hero from "./home/sections/hero";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from 'next';
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import HeroText from "./home/sections/heroText";
import Introductory from "./home/sections/introductory";
import AccordionHome from "./home/sections/accordion";
import MembershipGrid from "./home/sections/membership";

export const metadata: Metadata = {
  title: 'Petroleum Products Company | The APEC Group',
  description:
    'The APEC Group is a petroleum products company offering fuels, lubricants, gas station construction, financing, compliance, and equipment services.',
  robots: 'index,follow',
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <HomePageLayout>
      <div className="flex flex-col">
        <Header />
        <Hero />
        <HeroText />
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
