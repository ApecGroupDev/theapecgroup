import React from 'react';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <div className='relative flex items-center rounded-lg overflow-visible w-36 h-16 sm:w-44 sm:h-16 md:w-56 md:h-20 lg:w-72 lg:h-28 xl:w-80 xl:h-32 2xl:w-112 2xl:h-36'>
      {/* Text content */}
      <div className='z-10 flex-1 text-end'>
        <h2 className='text-[#c62931] font-normal sm:font-semibold text-3xs scrn-450:text-xs sm:text-2xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl'>
          {name}
        </h2>
        <p className='text-gray-600 font-semibold text-4xs scrn-350:text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base'>
          {title}
        </p>
      </div>

      <div className='relative bg-gradient-to-r from-[#c62931] to-transparent clip-parallelogram overflow-visible w-16 h-16 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-36 lg:h-28 xl:w-40 xl:h-32 2xl:w-44 2xl:h-36 ps-0.5 lg:ps-1'>
        <div className='bg-white clip-parallelogram flex items-center justify-center w-16 h-16 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-36 lg:h-28 xl:w-40 xl:h-32 2xl:w-44 2xl:h-36'>
          <Image
            src="/placeholders/profile.png"
            alt={`${name}'s profile`}
            fill
            className='object-contain'
          />
        </div>
      </div>

    </div>
  );
};

export default TeamCard;
