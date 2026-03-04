"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById("ComplianceContactForm");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageHero
      imageSrc="/backgrounds/services/compliance/Hero_Compliance.webp"
      imageAlt="Environmental Compliance Solutions"
      eyebrow="Our Services · Environmental Compliance"
      heading={
        <>
          Environmental Compliance Solutions That Protect Your Business{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            and the Environment.
          </span>
        </>
      }
      subtext="35+ years of experience keeping petroleum businesses compliant across Georgia — trusted by fuel retailers, distributors, and fleet operators."
      buttonLabel="Get a Quote"
      onButtonClick={scrollToForm}
    />
  );
};

export default Hero;
