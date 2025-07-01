'use client';

import { useBackgroundIndex } from '@/contexts/BackgroundContext';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { imageIndex } = useBackgroundIndex();

  const backgroundImages = [
     "/backgrounds/services/link/Background_Link_1.jpg",
     "/backgrounds/services/link/Background_Link_2.jpg",
     "/backgrounds/services/link/Background_Link_3.jpg",
     "/backgrounds/services/link/Background_Link_4.jpg",
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
