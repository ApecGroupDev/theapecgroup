"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    content: (
      <div className="flex flex-col items-start ml-10 mt-10">
        <h1 className="text-5xl font-bold">Welcome to Section 1</h1>
        <p className="mt-4 text-lg">This is the first section with some cool content.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-700 rounded-full">
          Learn More
        </button>
      </div>
    ),
    background: "url('/backgrounds/Vision_2.png') no-repeat left center/contain",
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">Explore Section 2</h1>
        <p className="mt-4 text-lg">This section has a different background.</p>
        <img
          src="https://via.placeholder.com/800x600.png"
          alt="Placeholder"
          className="mt-4 rounded-lg opacity-50"
        />
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-start ml-10 mt-10">
        <h1 className="text-5xl">Our</h1>
        <h1 className="text-8xl font-bold text-red-600">VISION</h1>
        <p className="mt-4 text-lg max-w-md">
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
      section.scrollLeft += event.deltaY;
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
