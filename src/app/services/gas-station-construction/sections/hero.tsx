"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById("ConstructionContactForm");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageHero
      imageSrc="/backgrounds/services/construction/Hero_Construction.webp"
      imageAlt="Gas Station Construction Services"
      eyebrow="Our Services · Gas Station Construction"
      heading={
        <>
          Gas Station Construction That Builds Your Business on a{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Solid Foundation.
          </span>
        </>
      }
      subtext="Trusted by fuel retailers across Georgia for 35+ years — licensed, insured, and known for safety-first construction."
      buttonLabel="Get a Quote"
      onButtonClick={scrollToForm}
    />
  );
};

export default Hero;
