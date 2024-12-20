import React from 'react';
import FeatureBoxes from '@/components/Home/featureboxes';
import News from '@/components/Home/news';
import MembershipLogosCarousel from '@/components/Home/membershiplogoslider';
import MembershipLogosGrid from '@/components/Home/membershiplogogrid';

const Home: React.FC = () => {
  return (
    <div>
      <FeatureBoxes />
      <MembershipLogosGrid />
      <MembershipLogosCarousel />
      <News />
    </div>
  );
};

export default Home;