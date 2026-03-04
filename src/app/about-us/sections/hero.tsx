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
      imageSrc="/backgrounds/aboutUs/Hero_About.webp"
      imageAlt="Oil Extractors for Petroleum Collection"
      eyebrow="About Us · APEC Group"
      heading={
        <>
          Trusted Petroleum Infrastructure & Compliance Experts —{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Since 1989.
          </span>
        </>
      }
      subtext="One-Stop-Shop for all your Petroleum needs — 35+ years of trusted service across Georgia."
      buttonLabel="Explore More"
      onButtonClick={scrollToContent}
    />
  );
};

export default Hero;
