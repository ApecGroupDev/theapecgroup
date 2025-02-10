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
      content: (
        <div className="bg-[url('/backgrounds/Mission_bg.png')] bg-no-repeat lg:bg-left bg-center bg-contain w-full">
          <div className="flex flex-col ml-auto items-end lg:mt-12 lg:me-12 xl:mt-24 xl:me-20 mac-14:mt-20 mac-14:me-24 2xl:mt-28 2xl:me-32">
            <span className="lg:text-5xl xl:text-7xl mac-14:text-7xl 2xl:text-7xl 2k:text-9xl italic">Our</span>
            <motion.span
              ref={missionRef}
              className="lg:text-6xl xl:text-8xl mac-14:text-8xl 2xl:text-8xl 2k:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: missionInView ? 0 : 50, opacity: missionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              MISSION
            </motion.span>
            <p className="lg:text-lg xl:text-xl lg:mt-10 mac-14:mt-16 mac-14:text-2xl 2xl:mt-20 2xl:text-2xl 2k:text-4xl tracking-widest text-end">
              To empower businesses with reliable, innovative, and efficient<br />
              petroleum equipment solutions that drive success<br />
              and ensure operational excellence.
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col mx-auto items-center xl:mt-12 mac-14:mt-16 2xl:mt-20 text-center w-full">
          <span className="xl:text-7xl mac-14:text-7xl 2xl:text-7xl 2k:text-9xl italic">Our</span>
          <motion.span
            ref={valuesRef}
            className="xl:text-7xl mac-14:text-8xl 2xl:text-8xl 2k:text-10xl font-bold text-red-600"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: valuesInView ? 0 : 50, opacity: valuesInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            VALUES
          </motion.span>

          <div className="xl:mt-8 mac-14:mt-12 2xl:mt-20 tracking-widest flex flex-col gap-8 max-w-4xl">
            {/* Customer Commitment */}
            <div className="flex items-center gap-4">
              <CheckCircle size={48} className="text-red-600" />
              <span className="xl:text-xl mac-14:text-3xl 2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Customer Commitment</span>
            </div>
            <p className="xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600">
              Delivering value, quality, and reliability with every project.
            </p>

            {/* Innovation */}
            <div className="flex items-center gap-4 2k:mt-10">
              <Lightbulb size={48} className="text-red-600" />
              <span className="xl:text-xl mac-14:text-3xl 2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Innovation</span>
            </div>
            <p className="xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600">
              Embracing advancements to offer the best solutions.
            </p>

            {/* Integrity */}
            <div className="flex items-center gap-4 2k:mt-10">
              <ShieldCheck size={48} className="text-red-600" />
              <span className="xl:text-xl mac-14:text-3xl 2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Integrity</span>
            </div>
            <p className="xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600">
              Building trust through transparency and professionalism.
            </p>

            {/* Excellence */}
            <div className="flex items-center gap-4 2k:mt-10">
              <Award size={48} className="text-red-600" />
              <span className="xl:text-xl mac-14:text-3xl 2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Excellence</span>
            </div>
            <p className="xl:text-lg mac-14:text-xl 2xl:text-xl 2k:text-2xl text-gray-600">
              Striving for perfection in everything we do.
            </p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-[url('/backgrounds/Vision_bg.png')] bg-no-repeat lg:bg-left xl:bg-right bg-contain w-full">
          <div className="flex flex-col items-start xl:mt-24 xl:ml-20 mac-14:ml-24 mac-14:mt-20 2xl:ml-32 2xl:mt-28">
            <span className="xl:text-7xl mac-14:text-7xl 2xl:text-7xl 2k:text-9xl italic">Our</span>
            <motion.span
              ref={visionRef}
              className="xl:text-8xl mac-14:text-8xl 2xl:text-8xl 2k:text-10xl font-bold text-red-600"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: visionInView ? 0 : 50, opacity: visionInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              VISION
            </motion.span>
            <p className="xl:text-xl xl:mt-10 mac-14:mt-16 mac-14:text-2xl 2xl:mt-20 2xl:text-2xl 2k:text-4xl tracking-widest">
              To be the most trusted and innovative partner in the petroleum<br />
              equipment industry, leading with cutting-edge technology,<br />
              exceptional service, and sustainable practices.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <div
        ref={sectionRef}
        className="w-full xl:h-screen overflow-x-auto overflow-y-hidden flex whitespace-nowrap scroll-smooth"
      >
        <div className="flex flex-nowrap">
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
