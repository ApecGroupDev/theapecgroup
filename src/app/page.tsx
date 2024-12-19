import React from 'react';
import FeatureBoxes from '@/components/featureboxes';
import MembershipLogosGrid from '@/components/membershiplogogrid';
import MembershipLogosCarousel from '@/components/membershiplogoslider';

const Home: React.FC = () => {
  return (
    <div>
      <FeatureBoxes />
      <MembershipLogosGrid />
      <MembershipLogosCarousel />
    </div>
  );
};

export default Home;