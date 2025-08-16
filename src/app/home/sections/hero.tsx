import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='relative'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover scrn-750:object-center z-10 scrn-600:mt-4 scrn-750:mt-0 object-[85%_center] scrn-350:object-[88%_center] scrn-400:object-[90%_center] scrn-450:object-[93%_center] scrn-500:object-[96%_center] scrn-550:object-[99%_center] scrn-600:object-[80%_center]'>
        <source src="/videos/PumpAnimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative flex flex-col-reverse scrn-600:flex-row items-center justify-between bg-transparent h-140 scrn-400:h-140 scrn-600:h-124 scrn-750:h-120 scrn-800:h-124 scrn-900:h-136 scrn-1000:h-160 scrn-1100:h-168 scrn-1150:h-168 scrn-1200:h-176 scrn-1300:h-188 scrn-1400:h-198 scrn-1500:h-216 scrn-1600:h-228 scrn-1700:h-248 scrn-1800:h-260 scrn-1900:h-272 scrn-2000:h-280 scrn-2100:h-288 scrn-2200:h-304 scrn-2300:h-308 scrn-2350:h-320 scrn-2400:h-324 scrn-2500:h-339'>
        <div className='items-start gap-1 scrn-1500:ms-16 scrn-2300:ms-8 -space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5 z-20 hidden scrn-600:flex'>

          {/* Authorized Distributor Section - fixed left */}
          <div className="text-[#c62931] my-auto scale-50 scrn-800:scale-75 scrn-1000:scale-100 -ms-8 scrn-800:-ms-2 scrn-1000:ms-2">
            <p className="font-semibold italic text-sm mb-2 scrn-600:text-base scrn-800:text-xl">
              Authorized Distributor For:
            </p>
            <div className="grid grid-cols-1 gap-4 scrn-1000:gap-2 scrn-1300:gap-6 scrn-1000:ms-4">
              <Image src="/logos/Auth_Dis/Auth_Dis_Dover.webp" alt="Dover" width={180} height={60} className='scrn-1200:scale-90' />
              <Image src="/logos/Auth_Dis/Auth_Dis_Wayne2.webp" alt="Wayne" width={180} height={60} quality={60} className='scrn-1200:scale-90' />
              <Image src="/logos/Auth_Dis/Auth_Dis_Verifone.webp" alt="Verifone" width={180} height={60} className='scrn-1200:scale-90' />
              <Image src="/logos/Auth_Dis/Auth_Dis_OPW.webp" alt="OPW" width={180} height={60} className='scrn-1200:scale-90' />
              <Image src="/logos/Auth_Dis/Auth_Dis_Franklin.webp" alt="Franklin" width={180} height={60} className='scrn-1200:scale-90' />
            </div>
          </div>

          {/* Animated Logo - center-shifted */}
          <div className="-space-y-1.5 text-center scrn-600:text-left -ms-16 scrn-1000:-ms-8 scrn-1300:ms-0">
            <Image
              src="/logos/One-Stop-Shop.gif"
              alt="Animated Logo"
              unoptimized
              width={800}
              height={800}
              className='mx-auto scrn-600:mx-0 mt-24 scrn-700:mt-20 scrn-1000:mt-8 scrn-1300:mt-12 scrn-1400:mt-8
              w-48 
              scrn-700:w-60
              scrn-800:w-64
              scrn-900:w-64
              scrn-1000:w-72
              scrn-1100:w-80
              scrn-1200:w-80 
              scrn-1400:w-96
              scrn-1500:w-120
              scrn-1600:w-128
              scrn-1800:w-140'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;