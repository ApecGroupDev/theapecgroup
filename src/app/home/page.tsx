import React from 'react';
import Hero from '@/app/home/sections/hero';
import About from '@/app/home/sections/about';
import FeatureBoxes from './sections/featureboxes';
import MembershipLogosCarousel from './sections/membershiplogoslider';
import Footer from './sections/footerHome';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <div className='mt-40 md:mt-12 w-800:mt-14'>
        <Hero />
      </div>

      <div className='mt-40 md:mt-12'>
        <About />
      </div>

      <div className='mt-40 md:mt-12 xl:mt-12 mac-16:mt-20 2xl:mt-24 2k:mt-32'>
        <FeatureBoxes />
      </div>

      <div className='mt-40 md:mt-40 md:mb-28 lg:mt-60 lg:mb-40 xl:mt-72 xl:mb-40 mac-14:mt-72 mac-16:mt-96 2xl:mt-96 2xl:mb-56 2k:mt-96 2k:mb-80' >
        <MembershipLogosCarousel />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;