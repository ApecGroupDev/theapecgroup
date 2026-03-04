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
      imageSrc="/backgrounds/careers/Hero_Careers.webp"
      imageAlt="Petroleum Companies Jobs in Georgia"
      eyebrow="Careers · Join The APEC Group"
      heading={
        <>
          Petroleum Companies Jobs in{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Georgia & Beyond.
          </span>
        </>
      }
      subtext="Looking for real opportunity in the petroleum industry? At The APEC Group, we specialize in petroleum equipment, gas station construction, fuel system services, and environmental compliance."
      buttonLabel="Apply Now"
      onButtonClick={scrollToContent}
    />
  );
};

export default Hero;
