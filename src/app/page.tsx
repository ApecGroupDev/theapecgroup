import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
// import News from '@/components/Home/news';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import Hero from '@/components/Home/hero';
import About from '@/components/Home/about';

const Home: React.FC = () => {
  return (
    <div>
      {/* Sections */}
      <Hero />
      <About />
      <FeatureBoxes />
      <MembershipLogosCarousel />
      {/* <News /> */}
    </div>
  );
};

export default Home;