'use client';

import { useBackgroundIndex } from '@/contexts/BackgroundContext';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { imageIndex } = useBackgroundIndex();

  const backgroundImages = [
     "/backgrounds/ourTeam/Background_Team_1.png",
     "/backgrounds/ourTeam/Background_Team_2.png",
     "/backgrounds/ourTeam/Background_Team_1.png",
     "/backgrounds/ourTeam/Background_Team_2.png",
  ];

  const backgroundUrl = imageIndex !== null ? backgroundImages[imageIndex] : backgroundImages[0];

  return (
    <div
      className='bg-cover bg-top bg-no-repeat min-h-screen'
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <div className='w-full'>{children}</div>
    </div>
  );
}
