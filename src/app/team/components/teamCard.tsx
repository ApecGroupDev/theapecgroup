import React from 'react';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <div className="relative flex items-center rounded-lg overflow-visible
      w-36 
      scrn-300:h-12 
      scrn-450:w-44 
      scrn-450:h-16 
      scrn-600:w-44 
      scrn-600:h-16 
      scrn-750:w-56 
      scrn-750:h-20 
      scrn-800:w-56 
      scrn-800:h-20 
      scrn-900:w-60 
      scrn-900:h-24 
      scrn-1000:w-72 
      scrn-1000:h-28 
      scrn-1250:w-80 
      scrn-1250:h-32 
      scrn-1500:w-112 
      scrn-1500:h-36 
      scrn-1700:w-116 
      scrn-1900:w-116 
      scrn-1900:h-40 
      scrn-2500:w-128 
      scrn-2500:h-48"
    >

      {/* Text content */}
      <div className="z-10 flex-1 text-end">
        <h2 className="text-red-600 font-normal scrn-600:font-semibold
          text-3xs
          scrn-450:text-xs 
          scrn-600:text-2xs  
          scrn-750:text-xs 
          scrn-1000:text-base
          scrn-1250:text-lg 
          scrn-1500:text-xl"
        >{name}
        </h2>
        <p className="text-gray-600 font-semibold
          text-4xs 
          scrn-350:text-3xs 
          scrn-600:text-3xs 
          scrn-750:text-2xs 
          scrn-800:text-2xs 
          scrn-900:text-xs 
          scrn-1000:text-xs 
          scrn-1250:text-sm 
          scrn-1500:text-base"
        >{title}
        </p>
      </div>

      <div className="relative bg-gradient-to-r from-red-600 to-transparent clip-parallelogram overflow-visible
        w-16
        h-12
        scrn-450:w-24 
        scrn-450:h-16 
        scrn-600:w-24 
        scrn-600:h-16 
        scrn-750:w-28 
        scrn-750:h-20 
        scrn-800:w-28 
        scrn-800:h-20 
        scrn-900:w-32 
        scrn-900:h-24 
        scrn-1000:w-36 
        scrn-1000:h-28 
        scrn-1250:w-40 
        scrn-1250:h-32 
        scrn-1500:w-44 
        scrn-1500:h-36 
        scrn-1900:w-48 
        scrn-1900:h-40 
        scrn-2500:w-56 
        scrn-2500:h-48 
        scrn-300:ps-0.5 
        scrn-450:ps-0.5 
        scrn-600:ps-0.5 
        scrn-1000:ps-1"
      >
        <div className="bg-white clip-parallelogram flex items-center justify-center
          w-16 
          h-12
          scrn-450:w-24 
          scrn-450:h-16 
          scrn-600:w-24 
          scrn-600:h-16 
          scrn-750:w-28 
          scrn-750:h-20 
          scrn-800:w-28 
          scrn-800:h-20 
          scrn-900:w-32 
          scrn-900:h-24 
          scrn-1000:w-36 
          scrn-1000:h-28 
          scrn-1250:w-40 
          scrn-1250:h-32 
          scrn-1500:w-44 
          scrn-1500:h-36 
          scrn-1900:w-48 
          scrn-1900:h-40 
          scrn-2500:w-56 
          scrn-2500:h-48"
        >
          <Image
            src="/placeholders/profile.png"
            alt={`${name}'s profile`}
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default TeamCard;
