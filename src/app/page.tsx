import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
// import News from '@/components/Home/news';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import Hero from '@/components/Home/hero';
import About from '@/components/Home/about';

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/WebBg.jpg')",
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center top', // Center horizontally, align top
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw', // Use full viewport width
        margin: 0,
        padding: 0,
      }}
    >
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