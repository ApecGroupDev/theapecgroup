"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, ShieldCheck, Award } from "lucide-react";

const sections = [
  {
    content: (
      <div className="flex flex-col ml-auto items-end 2xl:mt-28 2xl:me-32">
        <span className="2xl:text-7xl 2k:text-9xl italic">Our</span>
        <span className="2xl:text-8xl 2k:text-10xl font-bold text-red-600">MISSION</span>
        <p className="2xl:mt-20 2xl:text-2xl 2k:text-4xl tracking-widest text-end">
          To empower businesses with reliable, innovative, and efficient<br />
          petroleum equipment solutions that drive success<br />
          and ensure operational excellence.
        </p>
      </div>
    ),
    background: "url('/backgrounds/Vision_2.png') no-repeat left center/contain",
  },
  {
    content: (
      <div className="flex flex-col mx-auto items-center 2xl:mt-20 text-center">
        <span className="2xl:text-7xl 2k:text-9xl italic">Our</span>
        <span className="2xl:text-8xl 2k:text-10xl font-bold text-red-600">VALUES</span>

        <div className="2xl:mt-20 tracking-widest flex flex-col gap-8 max-w-4xl">
          {/* Customer Commitment */}
          <div className="flex items-center gap-4">
            <CheckCircle size={48} className="text-red-600" />
            <span className="2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Customer Commitment</span>
          </div>
          <p className="2xl:text-xl 2k:text-2xl text-gray-600">
            Delivering value, quality, and reliability with every project.
          </p>

          {/* Innovation */}
          <div className="flex items-center gap-4 2k:mt-10">
            <Lightbulb size={48} className="text-red-600" />
            <span className="2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Innovation</span>
          </div>
          <p className="2xl:text-xl 2k:text-2xl text-gray-600">
            Embracing advancements to offer the best solutions.
          </p>

          {/* Integrity */}
          <div className="flex items-center gap-4 2k:mt-10">
            <ShieldCheck size={48} className="text-red-600" />
            <span className="2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Integrity</span>
          </div>
          <p className="2xl:text-xl 2k:text-2xl text-gray-600">
            Building trust through transparency and professionalism.
          </p>

          {/* Excellence */}
          <div className="flex items-center gap-4 2k:mt-10">
            <Award size={48} className="text-red-600" />
            <span className="2xl:text-4xl 2k:text-5xl font-bold text-gray-800">Excellence</span>
          </div>
          <p className="2xl:text-xl 2k:text-2xl text-gray-600">
            Striving for perfection in everything we do.
          </p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-start 2xl:ml-32 2xl:mt-28">
        <span className="2xl:text-7xl 2k:text-9xl italic">Our</span>
        <span className="2xl:text-8xl 2k:text-10xl font-bold text-red-600">VISION</span>
        <p className="2xl:mt-20 2xl:text-2xl 2k:text-4xl tracking-widest">
          To be the most trusted and innovative partner in the petroleum<br />
          equipment industry, leading with cutting-edge technology,<br />
          exceptional service, and sustainable practices.
        </p>
      </div>
    ),
    background: "url('/backgrounds/Vision_1.png') no-repeat right center/contain",
  },
];

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
      section.scrollLeft += event.deltaY * 6;
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

  return (
    <div className="relative w-full h-screen">
      <div
        ref={sectionRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden flex whitespace-nowrap scroll-smooth"
      >
        <div className="flex flex-nowrap">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="w-screen h-screen flex relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ background: section.background }}
            >
              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
