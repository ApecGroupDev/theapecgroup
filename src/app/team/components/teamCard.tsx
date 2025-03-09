import React from 'react';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <div className="relative flex items-center rounded-lg overflow-visible outline-dashed outline-green-600 xl:w-80 xl:h-32 scrn-1500:w-112 scrn-1500:h-36 scrn-1700:w-116 w-128 h-48">

      {/* Text content */}
      <div className="z-10 flex-1 text-end">
        <h2 className="text-red-600 font-bold xl:text-lg scrn-1500:text-xl 2xl:text-xl">{name}</h2>
        <p className="text-gray-600 xl:text-base scrn-1500:text-lg 2xl:text-lg">{title}</p>
      </div>

      <div className="relative w-56 h-48 xl:w-40 xl:h-32 scrn-1500:w-44 scrn-1500:h-36 ps-1 bg-gradient-to-r from-red-600 to-transparent clip-parallelogram overflow-visible">
        <div className="absolute w-56 h-48 xl:w-40 xl:h-32 scrn-1500:w-44 scrn-1500:h-36 bg-white clip-parallelogram flex items-center justify-center">
          <Image
            src="/placeholders/profile.png" 
            alt={`${name}'s profile`} 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default TeamCard;
