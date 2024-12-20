import React from 'react';
import FeatureBoxes from '@/components/featureboxes';
import MembershipLogosGrid from '@/components/membershiplogogrid';
import MembershipLogosCarousel from '@/components/membershiplogoslider';
import News from '@/components/news';

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