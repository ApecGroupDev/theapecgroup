import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
import News from '@/components/Home/news';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import Hero from '@/components/Home/hero';
import About from '@/components/Home/about';

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/WebBg.jpg')", // Your long background image
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'top', // Start the image from the top
        backgroundRepeat: 'no-repeat', // Prevent tiling
        minHeight: '100%', // Let the background scroll with the content
        width: '100%',
      }}
    >
      {/* Sections */}
      <Hero />
      <About />
      <FeatureBoxes />
      <MembershipLogosCarousel />
      <News />
    </div>
  );
};

export default Home;