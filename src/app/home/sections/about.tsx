"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div className='bg-transparent py-16 flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className='flex flex-col items-center justify-center gap-y-4 h-auto max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl w-full bg-transparent'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 w-full'>
          <div className="grid mx-4 gap-4 scrn-1000:grid-cols-[1fr_2fr]">

            {/* Left Image Section */}
            <div className="hidden scrn-1000:flex justify-start items-start">
              <Image
                src="/products/aboutUsSection.webp"
                alt="Hero"
                width={500}
                height={800}
                className="h-auto w-auto max-w-full max-h-full object-cover my-auto"
              />
            </div>

            {/* Right Text Section */}
            <div className="w-full">
              {/* Animated Welcome Text */}
              <motion.p
                ref={ref} // Set the ref to the element
                className='text-2xl scrn-750:text-3xl scrn-1500:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl font-semibold italic'
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Welcome to
              </motion.p>
              <p className='text-4xl scrn-1500:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-[#c62931]'>
                APEC
              </p>
              <p className='scrn-300:text-lg text-xl scrn-750:text-lg scrn-1000:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl scrn-2k:text-5xl font-medium text-gray-800'>
                Petroleum Equipment Services
              </p>
              <div className='mt-4 space-y-2 text-justify scrn-1300:text-lg scrn-1400:text-2xl tracking-widest text-gray-800'>
                <p>
                  The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
                  From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
                  line of petroleum equipment, installation, repair and support services.
                </p>
                <p>
                  APEC is committed to providing only the highest quality products and services available. Our industry continues
                  to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
                  and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
                </p>
              </div>

              {/* Button */}
              <div className='mt-8 scrn-300:mt-4 scrn-400:mt-2 scrn-750:mt-4 scrn-850:mt-6 scrn-1700:mt-12 scrn-2k:mt-20 flex justify-center'>
                <button
                  className='scrn-300:px-6 scrn-400:px-8 px-16 scrn-750:px-12 scrn-300:text-xs scrn-400:text-xs scrn-750:text-sm scrn-1000:px-20 scrn-2k:px-28 py-1 border-2 border-[#c62931] text-gray-800 scrn-1000:text-lg scrn-1700:text-2xl font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200'>
                  Sales@TheAPECgroup.com
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
