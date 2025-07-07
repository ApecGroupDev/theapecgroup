import React from 'react';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCardNoImage: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <div className='relative flex items-center rounded-lg overflow-visible w-36 scrn-300:h-12 scrn-450:w-44 scrn-450:h-16 scrn-600:w-44 scrn-600:h-16 scrn-750:w-56 scrn-750:h-20 scrn-800:w-56 scrn-800:h-20 scrn-900:w-60 scrn-900:h-24 scrn-1000:w-72 scrn-1000:h-28 scrn-1250:w-80 scrn-1250:h-32 scrn-1500:w-112 scrn-1500:h-36 scrn-1700:w-116 scrn-1900:w-116 scrn-1900:h-40 scrn-2500:w-128 scrn-2500:h-48'>
      {/* Text content */}
      <div className='z-10 flex-1 text-center space-y-1'>
        <h2 className='text-[#c62931] font-normal scrn-600:font-semibold text-3xs scrn-450:text-xs scrn-600:text-2xs scrn-750:text-xs scrn-1000:text-base scrn-1250:text-lg scrn-1500:text-xl'>
          {name}
        </h2>
        <hr className='border-2 border-red-600 mx-auto w-60'/>
        
        <p className='text-gray-600 font-semibold text-4xs scrn-350:text-3xs scrn-600:text-3xs scrn-750:text-2xs scrn-800:text-2xs scrn-900:text-xs scrn-1000:text-xs scrn-1250:text-sm scrn-1500:text-base'>
            {title}
        </p>
        <hr className='border-1 border-gray-500 mt-1 mx-auto w-72'/>
      </div>
    </div>
  );
};

export default TeamCardNoImage;
