import React from 'react';
import Hero from '@/app/home/sections/hero';
import About from '@/app/home/sections/about';
import FeatureBoxes from './sections/featureboxes';
import MembershipLogosCarousel from './sections/membershiplogoslider';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <About />
      <FeatureBoxes />
      <MembershipLogosCarousel />
    </div>
  );
};

export default Home;