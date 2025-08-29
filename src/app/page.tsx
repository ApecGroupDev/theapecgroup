import About from "./home/sections/about";
import FeatureBoxes from "./home/sections/featureboxes";
import Hero from "./home/sections/hero";
import MembershipLogosCarousel from "./home/sections/membershiplogoslider";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from 'next';

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
        <Hero />
        <About />
        <FeatureBoxes />
        <MembershipLogosCarousel />
      </div>
    </HomePageLayout>
  );
}
