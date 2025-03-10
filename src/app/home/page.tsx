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
      <div>
        <Hero />
      </div>

      <div>
        <About />
      </div>

      <div>
        <FeatureBoxes />
      </div>

      <div>
        <MembershipLogosCarousel />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;