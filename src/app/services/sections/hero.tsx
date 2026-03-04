"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <PageHero
      imageSrc="/backgrounds/services/Hero_Services.webp"
      imageAlt="Petroleum Equipment Services"
      eyebrow="Our Services · APEC Group"
      heading={
        <>
          Petroleum Equipment Services That{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Fuel Your Business Success.
          </span>
        </>
      }
      subtext="Decades of expertise delivering petroleum equipment solutions across Georgia — trusted by fuel retailers, distributors, and fleet operators to keep their businesses running strong."
      buttonLabel="Explore Services"
      onButtonClick={scrollToContent}
    />
  );
};

export default Hero;
