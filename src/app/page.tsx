import React from 'react';
import FeatureBoxes from '@/components/featureboxes';
import MembershipLogosGrid from '@/components/membershiplogogrid';

const Home: React.FC = () => {
  return (
    <div>
      <FeatureBoxes />
      <MembershipLogosGrid />
    </div>
  );
};

export default Home;