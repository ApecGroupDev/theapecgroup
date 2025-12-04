import React from 'react';

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCardNoImage: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <div className='relative flex items-center rounded-lg mt-6 overflow-visible w-36 h-12 sm:w-44 sm:h-16 md:w-56 md:h-20 lg:w-72 lg:h-28 xl:w-80 xl:h-32 2xl:w-112 2xl:h-36'>
      {/* Text content */}
      <div className='z-10 flex-1 text-center space-y-1'>
        <h2 className='text-[#c62931] font-normal sm:font-semibold text-3xs scrn-450:text-xs sm:text-2xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl'>
          {name}
        </h2>
        <hr className='border-2 border-red-600 mx-auto w-4/5 xl:w-60' />

        <p className='text-gray-600 font-semibold text-4xs scrn-350:text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm 2xl:text-base'>
          {title}
        </p>
        <hr className='border-1 border-gray-500 mt-1 mx-auto w-3/5 xl:w-72' />
      </div>
    </div>
  );
};

export default TeamCardNoImage;
