"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById("FinancingContactForm");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageHero
      imageSrc="/backgrounds/services/financing/Hero_Financing.webp"
      imageAlt="Gas Station Financing Services"
      eyebrow="Our Services · Gas Station Financing"
      heading={
        <>
          Flexible Gas Station Financing That Fuels Your{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Business Growth.
          </span>
        </>
      }
      subtext="35+ years helping fuel retailers secure funding for construction, equipment, and upgrades across Georgia."
      buttonLabel="Get a Quote"
      onButtonClick={scrollToForm}
    />
  );
};

export default Hero;
