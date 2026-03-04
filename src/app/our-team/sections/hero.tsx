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
      imageSrc="/backgrounds/ourTeam/Hero_Team.webp"
      imageAlt="Meet the APEC Group Team"
      eyebrow="Our Team · APEC Group"
      heading={
        <>
          Meet the Experts Powering Safe, Smart, and{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Compliant Fueling Solutions.
          </span>
        </>
      }
      subtext="Backed by decades of experience, our team brings deep technical knowledge, customer-first service, and a commitment to doing things right — every time."
      buttonLabel="Meet the Team"
      onButtonClick={scrollToContent}
    />
  );
};

export default Hero;
