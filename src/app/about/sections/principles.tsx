"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HorizontalScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHorizontalScrollActive, setIsHorizontalScrollActive] = useState(false);
  const [canScrollVertically, setCanScrollVertically] = useState(false);

  useEffect(() => {
    heroRef.current = document.querySelector("#hero-section");

    const handleScroll = (event: WheelEvent) => {
      const hero = heroRef.current;
      const section = sectionRef.current;
      if (!hero || !section) return;

      const heroRect = hero.getBoundingClientRect();

      // If Hero is still in view, allow normal scrolling
      if (heroRect.bottom > 5) {
        setIsHorizontalScrollActive(false);
        setCanScrollVertically(false);
        return;
      }

      // Lock vertical scrolling
      setIsHorizontalScrollActive(true);
      document.body.style.overflow = "hidden"; // Disable page scroll

      const maxScrollLeft = section.scrollWidth - section.clientWidth;

      if (section.scrollLeft >= maxScrollLeft) {
        setCanScrollVertically(true);
        document.body.style.overflow = ""; // Restore normal scrolling
        return;
      }

      event.preventDefault(); // Stop unintended vertical movement
      section.scrollLeft += event.deltaY; // Scroll horizontally
      updateProgress();
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

      if (section.scrollLeft >= scrollWidth) {
        setCanScrollVertically(true);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Reset scroll behavior
    };
  }, [canScrollVertically]);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-screen overflow-x-auto overflow-y-hidden flex whitespace-nowrap bg-blue-500 scroll-smooth ${
        canScrollVertically ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-nowrap">
        {["Section 1", "Section 2"].map((text, index) => (
          <motion.div
            key={index}
            className="w-screen h-screen flex items-center justify-center text-white text-4xl font-bold"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              backgroundColor: `rgb(${100 + index * 50}, 50, 200)`,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gray-300 rounded-full">
        <motion.div
          className="h-2 bg-white rounded-full"
          style={{ width: `${scrollProgress}%` }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
