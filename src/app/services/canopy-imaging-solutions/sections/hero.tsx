"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById("ImagingContactForm");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageHero
      imageSrc="/backgrounds/services/imaging-and-canopies/Hero_Imaging.webp"
      imageAlt="Custom Canopy Imaging for Gas Stations"
      eyebrow="Our Services · Canopy Imaging & Installation"
      heading={
        <>
          Custom Canopy Imaging That Elevates Your Gas Station&apos;s{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Brand.
          </span>
        </>
      }
      subtext="35+ years helping fuel retailers across Georgia create standout stations with custom canopy designs and installations."
      buttonLabel="Get a Quote"
      onButtonClick={scrollToForm}
    />
  );
};

export default Hero;
