import About from "./home/sections/about";
import FeatureBoxes from "./home/sections/featureboxes";
import Hero from "./home/sections/hero";
import MembershipLogosCarousel from "./home/sections/membershiplogoslider";
import HomePageLayout from "./layouts/homepageLayout";

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
