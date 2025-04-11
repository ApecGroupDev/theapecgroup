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
      section.scrollLeft += event.deltaY * 4;
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
        <div className="scrn-700:bg-[url('/backgrounds/Mission_bg.png')] justify-items-center bg-no-repeat bg-contain w-full overflow-hidden
        pt-12

        h-128"
        >
          <div className="flex flex-col ml-auto scrn-300:p-6 scrn-450:p-4 scrn-300:text-center scrn-450:text-center scrn-600:items-end scrn-600:mt-4 scrn-600:me-4 scrn-750:mt-6 scrn-750:me-6 scrn-800:mt-8 scrn-800:me-8 scrn-900:mt-8 scrn-900:me-10 scrn-1000:mt-12 scrn-1000:me-12 scrn-1250:mt-24 scrn-1250:me-20 scrn-1500:mt-20 scrn-1500:me-24 scrn-1900:mt-28 scrn-1900:me-32">
            <span className="text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-4xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1250:text-7xl scrn-2550:text-9xl italic">Our</span>
            <motion.span
              ref={missionRef}
              className="text-7xl scrn-300:text-5xl scrn-600:text-5xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1250:text-8xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2550:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: missionInView ? 0 : 50, opacity: missionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              MISSION
            </motion.span>
            <p className="scrn-300:text-lg text-pretty scrn-450:text-2xl scrn-300:mt-4 scrn-450:mt-6 scrn-600:mt-4 scrn-600:text-sm scrn-750:text-base scrn-800:text-base scrn-900:text-lg scrn-1000:text-lg scrn-1250:text-xl scrn-1000:mt-10 scrn-1500:mt-16 scrn-1500:text-2xl scrn-900:mt-6 scrn-1900:mt-20 scrn-1900:text-2xl scrn-2550:text-4xl tracking-widest scrn-600:text-end">
              To empower businesses with reliable, innovative, and efficient<br className="scrn-450:hidden" />
              petroleum equipment solutions that drive success<br className="scrn-450:hidden" />
              and ensure operational excellence.
            </p>
          </div>
        </div>
      ),
    },
    {
      // VALUES
      content: (
        <div className="flex flex-col scrn-300:mx-4 mx-auto items-center text-center w-full overflow-hidden
        pt-12

        h-128
        ">
          <span className="text-6xl scrn-300:text-4xl scrn-300:mt-4 scrn-450:mt-6 scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1250:text-7xl scrn-2550:text-9xl italic">Our</span>
          <motion.span
            ref={valuesRef}
            className="scrn-300:text-5xl text-7xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1250:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2550:text-10xl font-bold text-red-600"
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
              <CheckCircle size={48} className="text-red-600 scrn-300:hidden scrn-450:hidden scrn-600:hidden scrn-1250:block" />
              <CheckCircle size={20} className="text-red-600 scrn-1000:block scrn-1250:hidden" />
              <span className="scrn-1000:text-xl scrn-1250:text-xl scrn-1500:text-3xl scrn-1900:text-4xl scrn-2550:text-5xl font-bold text-gray-800">Customer Commitment</span>
            </div>
            <p className="scrn-300:text-sm scrn-1250:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2550:text-2xl text-gray-600">
              Delivering value, quality, and reliability with every project.
            </p>

            {/* Innovation */}
            <div className="flex items-center gap-4 scrn-2550:mt-10">
              <Lightbulb size={48} className="text-red-600 scrn-300:hidden scrn-450:hidden scrn-600:hidden scrn-1250:block" />
              <Lightbulb size={24} className="text-red-600 scrn-1000:block scrn-1250:hidden" />
              <span className="scrn-1000:text-xl scrn-1250:text-xl scrn-1500:text-3xl scrn-1900:text-4xl scrn-2550:text-5xl font-bold text-gray-800">Innovation</span>
            </div>
            <p className="scrn-300:text-sm scrn-1250:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2550:text-2xl text-gray-600">
              Embracing advancements to offer the best solutions.
            </p>

            {/* Integrity */}
            <div className="flex items-center gap-4 scrn-2550:mt-10">
              <ShieldCheck size={48} className="text-red-600 scrn-300:hidden scrn-450:hidden scrn-600:hidden scrn-1250:block" />
              <ShieldCheck size={24} className="text-red-600 scrn-1000:block scrn-1250:hidden" />
              <span className="scrn-1000:text-xl scrn-1250:text-xl scrn-1500:text-3xl scrn-1900:text-4xl scrn-2550:text-5xl font-bold text-gray-800">Integrity</span>
            </div>
            <p className="scrn-300:text-sm scrn-1250:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2550:text-2xl text-gray-600">
              Building trust through transparency and professionalism.
            </p>

            {/* Excellence */}
            <div className="flex items-center gap-4 scrn-1000:mt-0 scrn-2550:mt-10">
              <Award size={48} className="text-red-600 scrn-300:hidden scrn-450:hidden scrn-600:hidden scrn-1250:block" />
              <Award size={24} className="text-red-600 scrn-1000:block scrn-1250:hidden" />
              <span className="scrn-1000:text-xl scrn-1250:text-xl scrn-1500:text-3xl scrn-1900:text-4xl scrn-2550:text-5xl font-bold text-gray-800">Excellence</span>
            </div>
            <p className="scrn-300:text-sm scrn-1250:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2550:text-2xl text-gray-600">
              Striving for perfection in everything we do.
            </p>
          </div>
        </div>
      ),
    },
    {
      // VISION
      content: (
        <div className="scrn-700:bg-[url('/backgrounds/Vision_bg.png')] bg-no-repeat bg-right bg-contain w-full overflow-hidden
        pt-12

        h-128"
        >
          <div className="flex flex-col scrn-300:p-6 scrn-450:p-4 scrn-300:text-center scrn-450:text-center scrn-600:mt-4 scrn-600:ms-4 scrn-750:mt-6 scrn-750:ms-6 scrn-800:mt-8 scrn-800:ms-8 scrn-900:mt-8 scrn-900:ml-10 scrn-1000:mt-12 scrn-1000:ms-12 scrn-1250:mt-24 scrn-1250:ml-20 scrn-1500:ml-24 scrn-1500:mt-20 scrn-1900:ml-32 scrn-1900:mt-28">
            <span className="text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-4xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1250:text-7xl scrn-1500:text-7xl scrn-1900:text-7xl scrn-2550:text-9xl italic">Our</span>
            <motion.span
              ref={visionRef}
              className="text-7xl scrn-300:text-5xl scrn-600:text-5xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1250:text-8xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2550:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: visionInView ? 0 : 50, opacity: visionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              VISION
            </motion.span>
            <p className="scrn-300:text-lg text-pretty scrn-450:text-2xl scrn-300:mt-4 scrn-450:mt-6 scrn-600:text-sm scrn-600:mt-4 scrn-750:text-base scrn-800:text-base scrn-900:text-lg scrn-1000:text-lg scrn-1250:text-xl scrn-1000:mt-10 scrn-1250:mt-10 scrn-1500:mt-16 scrn-1500:text-2xl scrn-1900:mt-20 scrn-1900:text-2xl scrn-2550:text-4xl tracking-widest">
              To be the most trusted and innovative partner in the <br className="scrn-450:block scrn-600:block scrn-750:hidden" /> petroleum <br className="scrn-450:hidden scrn-600:hidden scrn-750:block" />
              equipment industry, leading with <br className="scrn-450:hidden scrn-600:block scrn-750:hidden" /> cutting-edge technology,<br className="scrn-450:hidden scrn-600:hidden scrn-750:block" />
              exceptional <br className="scrn-450:hidden scrn-600:block scrn-750:hidden" /> service, and sustainable practices.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full outline-dashed outline-lime-600 scrn-600:justify-end 
      h-128 
      scrn-450:h-140 
      scrn-600:h-124 
      scrn-600:mt-8 
      scrn-750:h-116 
      scrn-800:h-124 
      scrn-900:h-136 
      scrn-1000:h-152 
      scrn-1250:h-192 
      scrn-1500:h-208 
      scrn-1700:h-256 
      scrn-1900:h-240 
      scrn-2550:h-352"
    >
      <div
        ref={sectionRef}
        className="w-full overflow-x-scroll overflow-y-hidden flex scrn-750:whitespace-nowrap scrollbar-custom scrollbar scroll-smooth"
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
