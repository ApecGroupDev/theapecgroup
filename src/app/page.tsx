import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import Hero from '@/components/Home/hero';
import About from '@/components/Home/about';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div className='md:mt-12'>
        <Hero />
      </div>

      <div className='md:mt-12'>
        <About />
      </div>

      <div className='md:mt-8'>
        <FeatureBoxes />
      </div>

      <div className='md:mt-36 md:mb-28'>
        <MembershipLogosCarousel />
      </div>
    </div>
  );
};

export default Home;