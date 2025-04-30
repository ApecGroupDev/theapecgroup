"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Lightbulb, ShieldCheck, Award } from "lucide-react";

const HorizontalScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHorizontalScrollActive, setIsHorizontalScrollActive] = useState(false);
  const [canScrollVertically, setCanScrollVertically] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector("#hero-section");

    const handleScroll = (event: WheelEvent) => {
      const hero = heroRef.current;
      const section = sectionRef.current;
      if (!hero || !section) return;

      const heroRect = hero.getBoundingClientRect();

      if (heroRect.bottom > 5) {
        setIsHorizontalScrollActive(false);
        setCanScrollVertically(false);
        return;
      }

      setIsHorizontalScrollActive(true);

      const maxScrollLeft = section.scrollWidth - section.clientWidth;

      if (section.scrollLeft >= maxScrollLeft) {
        setCanScrollVertically(true);
        return;
      }

      event.preventDefault();
      section.scrollLeft += event.deltaY * 2;
      updateProgress();
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0].clientX;
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touchEndX = event.touches[0].clientX;
      const touchEndY = event.touches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        event.preventDefault();
        sectionRef.current?.scrollBy({ left: diffX, behavior: "smooth" });
        updateProgress();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isHorizontalScrollActive || canScrollVertically) return;

      const section = sectionRef.current;
      if (!section) return;

      if (event.key === "ArrowRight") {
        section.scrollLeft += 50;
      } else if (event.key === "ArrowLeft") {
        section.scrollLeft -= 50;
      }
      updateProgress();
    };

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrollWidth = section.scrollWidth - section.clientWidth;
      const progress = (section.scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [canScrollVertically]);

  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  const sections = [
    {
      // MISSION
      content: (
        <div className="scrn-700:bg-[url('/backgrounds/Mission_bg.png')] justify-items-center bg-no-repeat bg-contain w-full overflow-hidden max-w-[2560px]
          pt-12
          scrn-500:pt-8
          scrn-600:pt-12
          scrn-700:pt-0

          h-128 
          scrn-400:h-132
          scrn-500:h-132
          scrn-700:h-128
          scrn-750:h-124
          scrn-800:h-132
          scrn-900:h-140
          scrn-1000:h-152
          scrn-1100:h-168
          scrn-1200:h-188
          scrn-1300:h-198
          scrn-1400:h-216
          scrn-1450:h-224
          scrn-1500:h-208 
          scrn-1550:h-216
          scrn-1600:h-240
          scrn-1650:h-248
          scrn-1700:h-256
          scrn-1800:h-264
          scrn-1850:h-272
          scrn-1900:h-272
          scrn-2000:h-280
          scrn-2100:h-296
          scrn-2200:h-308
          scrn-2250:h-312
          scrn-2300:h-320
          scrn-2350:h-326
          scrn-2450:h-339
          scrn-2550:h-352"
        >
          <div className="flex flex-col ml-auto scrn-300:p-6 scrn-450:p-4 text-center scrn-700:text-end scrn-600:mt-4 scrn-600:me-4 scrn-750:mt-6 scrn-750:me-6 scrn-800:mt-8 scrn-800:me-8 scrn-900:mt-8 scrn-900:me-10 scrn-1000:mt-12 scrn-1000:me-12 scrn-1250:mt-24 scrn-1250:me-20 scrn-1500:mt-20 scrn-1500:me-24 scrn-1900:mt-28 scrn-1900:me-32">
            <span className="text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-5xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-2500:text-9xl italic">Our</span>
            <motion.span
              ref={missionRef}
              className="text-7xl scrn-300:text-5xl scrn-600:text-6xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1200:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: missionInView ? 0 : 50, opacity: missionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              MISSION
            </motion.span>
            <p className="text-pretty tracking-widest
              scrn-300:text-lg 
              scrn-450:text-lg 
              scrn-600:text-base
              scrn-700:text-sm
              scrn-800:text-sm
              scrn-900:text-base
              scrn-1000:text-base
              scrn-1100:text-xl
              scrn-1250:text-xl
              scrn-1300:text-2xl
              scrn-1500:text-2xl
              scrn-1800:text-3xl
              scrn-2500:text-4xl

              scrn-500:mx-12
              scrn-700:mx-0
            
              scrn-300:mt-4
              scrn-450:mt-6 
              scrn-600:mt-4
              scrn-700:mt-4
              scrn-1000:mt-10 
              scrn-1500:mt-16 
              scrn-900:mt-6 
              scrn-1900:mt-20"
            >
              To empower businesses with reliable, innovative, <br className="scrn-450:hidden scrn-700:block" /> and efficient
              petroleum equipment solutions <br className="scrn-450:hidden scrn-700:block" /> that drive success
              and ensure <br className="scrn-450:hidden scrn-700:block" /> operational excellence.
            </p>
          </div>
        </div>
      ),
    },
    {
      // VALUES
      content: (
        <div className="flex flex-col scrn-300:mx-4 mx-auto items-center text-center w-full overflow-hidden max-w-[2560px]
          pt-12
          scrn-500:pt-0
          scrn-600:pt-6
          scrn-700:pt-0
          scrn-1100:pt-8

          h-128 
          scrn-400:h-132
          scrn-500:h-124
          scrn-700:h-128
          scrn-750:h-124
          scrn-800:h-132
          scrn-900:h-140
          scrn-1000:h-152
          scrn-1100:h-168
          scrn-1200:h-188
          scrn-1300:h-198
          scrn-1400:h-216
          scrn-1450:h-224
          scrn-1500:h-208 
          scrn-1550:h-216
          scrn-1600:h-240
          scrn-1650:h-248
          scrn-1700:h-256
          scrn-1800:h-264
          scrn-1850:h-272
          scrn-1900:h-272
          scrn-2000:h-280
          scrn-2100:h-296
          scrn-2200:h-308
          scrn-2250:h-312
          scrn-2300:h-320
          scrn-2350:h-326
          scrn-2450:h-339
          scrn-2550:h-352"
        >
          <span className="text-6xl scrn-300:text-4xl scrn-300:mt-4 scrn-450:mt-6 scrn-1900:mt-24 scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1250:text-7xl scrn-2500:text-9xl italic">Our</span>
          <motion.span
            ref={valuesRef}
            className="scrn-300:text-5xl text-7xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1250:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-red-600"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: valuesInView ? 0 : 50, opacity: valuesInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            VALUES
          </motion.span>

          <div className="tracking-widest flex flex-col scrn-450:gap-2 scrn-750:gap-3 scrn-800:gap-4 scrn-900:gap-5 scrn-1000:gap-5 scrn-1250:gap-8 max-w-4xl
          scrn-300:mt-6 
          scrn-750:mt-8 
          scrn-800:mt-12 
          scrn-900:mt-12 
          scrn-1000:mt-12 
          scrn-1250:mt-8 
          scrn-1500:mt-12 
          scrn-1900:mt-20"
          >
            {/* Customer Commitment */}
            <div className="flex items-center gap-4">
              <CheckCircle size={48} className="text-red-600 hidden scrn-1600:block" />
              <CheckCircle size={20} className="text-red-600 scrn-1000:block scrn-1600:hidden" />
              <span className="scrn-1000:text-xl scrn-1200:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold text-gray-800">Customer Commitment</span>
            </div>
            <p className="scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2500:text-2xl text-gray-600">
              Delivering value, quality, and reliability with every project.
            </p>

            {/* Innovation */}
            <div className="flex items-center gap-4 scrn-2500:mt-10">
              <Lightbulb size={48} className="text-red-600 hidden scrn-1600:block" />
              <Lightbulb size={24} className="text-red-600 scrn-1000:block scrn-1600:hidden" />
              <span className="scrn-1000:text-xl scrn-1200:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold text-gray-800">Innovation</span>
            </div>
            <p className="scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2500:text-2xl text-gray-600">
              Embracing advancements to offer the best solutions.
            </p>

            {/* Integrity */}
            <div className="flex items-center gap-4 scrn-2500:mt-10">
              <ShieldCheck size={48} className="text-red-600 hidden scrn-1600:block" />
              <ShieldCheck size={24} className="text-red-600 scrn-1000:block scrn-1600:hidden" />
              <span className="scrn-1000:text-xl scrn-1200:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold text-gray-800">Integrity</span>
            </div>
            <p className="scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2500:text-2xl text-gray-600">
              Building trust through transparency and professionalism.
            </p>

            {/* Excellence */}
            <div className="flex items-center gap-4 scrn-1000:mt-0 scrn-2500:mt-10">
              <Award size={48} className="text-red-600 hidden scrn-1600:block" />
              <Award size={24} className="text-red-600 scrn-1000:block scrn-1600:hidden" />
              <span className="scrn-1000:text-xl scrn-1200:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold text-gray-800">Excellence</span>
            </div>
            <p className="scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2500:text-2xl text-gray-600">
              Striving for perfection in everything we do.
            </p>
          </div>
        </div>
      ),
    },
    {
      // VISION
      content: (
        <div className="scrn-700:bg-[url('/backgrounds/Vision_bg.png')] bg-no-repeat bg-right bg-contain w-full overflow-hidden max-w-[2560px]
          pt-12
          scrn-500:pt-8
          scrn-600:pt-12
          scrn-700:pt-0

          h-128 
          scrn-400:h-132
          scrn-500:h-124
          scrn-700:h-128
          scrn-750:h-124
          scrn-800:h-132
          scrn-900:h-140
          scrn-1000:h-152
          scrn-1100:h-168
          scrn-1200:h-188
          scrn-1300:h-198
          scrn-1400:h-216
          scrn-1450:h-224
          scrn-1500:h-208 
          scrn-1550:h-216
          scrn-1600:h-240
          scrn-1650:h-248
          scrn-1700:h-256
          scrn-1800:h-264
          scrn-1850:h-272
          scrn-1900:h-272
          scrn-2000:h-280
          scrn-2100:h-296
          scrn-2200:h-308
          scrn-2250:h-312
          scrn-2300:h-320
          scrn-2350:h-326
          scrn-2450:h-339
          scrn-2550:h-352"
        >
          <div className="flex flex-col scrn-300:p-6 scrn-450:p-4 text-center scrn-700:text-start scrn-700:items-start scrn-600:mt-4 scrn-600:ms-4 scrn-750:mt-6 scrn-750:ms-6 scrn-800:mt-8 scrn-800:ms-8 scrn-900:mt-8 scrn-900:ml-10 scrn-1000:mt-12 scrn-1000:ms-12 scrn-1250:mt-24 scrn-1250:ml-20 scrn-1500:ml-24 scrn-1500:mt-20 scrn-1900:ml-32 scrn-1900:mt-28">
            <span className="text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-5xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1500:text-7xl scrn-1900:text-7xl scrn-2500:text-9xl italic">Our</span>
            <motion.span
              ref={visionRef}
              className="text-7xl scrn-300:text-5xl scrn-600:text-6xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1200:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: visionInView ? 0 : 50, opacity: visionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              VISION
            </motion.span>
            <p className="text-pretty tracking-widest
            scrn-300:text-lg 
              scrn-450:text-lg 
              scrn-600:text-base
              scrn-700:text-sm
              scrn-800:text-sm
              scrn-900:text-base
              scrn-1000:text-base
              scrn-1100:text-xl
              scrn-1250:text-xl
              scrn-1300:text-2xl
              scrn-1500:text-2xl
              scrn-1800:text-3xl
              scrn-2500:text-4xl

              scrn-500:mx-12
              scrn-700:mx-0
            
              scrn-300:mt-4
              scrn-450:mt-6 
              scrn-600:mt-4
              scrn-700:mt-4
              scrn-1000:mt-10 
              scrn-1500:mt-16 
              scrn-900:mt-6 
              scrn-1900:mt-20">
              To be the most trusted and innovative partner in the <br className="scrn-450:block scrn-600:block" /> petroleum
              equipment industry, leading with <br className="scrn-450:hidden scrn-600:block" /> cutting-edge technology,
              exceptional <br className="scrn-450:hidden scrn-600:block" /> service, and sustainable practices.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full scrn-600:justify-end 
      h-128 
      scrn-400:h-132
      scrn-500:h-124
      scrn-600:h-124 
      scrn-700:h-128
      scrn-750:h-124
      scrn-800:h-132 
      scrn-900:h-140 
      scrn-1000:h-152 
      scrn-1100:h-168
      scrn-1200:h-188
      scrn-1300:h-198
      scrn-1400:h-216
      scrn-1450:h-224
      scrn-1500:h-208 
      scrn-1550:h-216
      scrn-1600:h-240
      scrn-1650:h-248
      scrn-1700:h-256
      scrn-1800:h-264
      scrn-1850:h-272 
      scrn-1900:h-272
      scrn-2000:h-280
      scrn-2100:h-296
      scrn-2200:h-308
      scrn-2250:h-312
      scrn-2300:h-320
      scrn-2350:h-326
      scrn-2450:h-339
      scrn-2550:h-352"
    >
      <div
        ref={sectionRef}
        className="flex w-full overflow-x-auto scrollbar-visible scroll-smooth"
      >
        <div className="flex flex-nowrap min-w-max">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="w-screen flex relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-200">
        <div
          className=" bg-blue-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
