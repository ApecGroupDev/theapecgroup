import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import Hero from '@/components/Home/hero';
import About from '@/components/Home/about';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div className='md:mt-12 w-800:mt-14'>
        <Hero />
      </div>

      <div className='md:mt-12'>
        <About />
      </div>

      <div className='md:mt-8 xl:mt-12 mac-16:mt-20'>
        <FeatureBoxes />
      </div>

      <div className='md:mt-40 md:mb-28 w-800:mt-48 w-900:mb-48 lg:mt-60 lg:mb-40 xl:mb-52 mac-14:mt-72 mac-16:mt-80' >
        <MembershipLogosCarousel />
      </div>
    </div>
  );
};

export default Home;