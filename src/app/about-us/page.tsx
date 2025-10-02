import { Metadata } from 'next';
import ChooseUs from "./sections/chooseus";
import Hero from "./sections/hero";
import MissionSection from "./sections/mission";
import ValuesSection from "./sections/values";
import VisionSection from "./sections/vision";
import HeaderWhite from '@/components/headerWhite';
import Footer from '@/components/footer';
import IntroAbout from './sections/intro';
import CTA from '@/components/cta';

export const metadata: Metadata = {
  title: "About The APEC Group | Petroleum Services",
  description: "Discover The APEC Group’s legacy in petroleum services since 1989. Explore our innovative energy solutions and commitment to excellence.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/about-us',
  },
};

const About: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <HeaderWhite />
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
