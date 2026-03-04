"use client";

import React, { useEffect } from "react";
import PageHero from "@/components/pageHero";

const Hero: React.FC = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById("MainContactForm");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <PageHero
      imageSrc="/backgrounds/contact/Hero_Contact.webp"
      imageAlt="Contact APEC Group"
      eyebrow="Get In Touch"
      heading={
        <>
          Let's Build Smarter,{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Safer
          </span>{" "}
          Fuel Solutions.
        </>
      }
      subtext="35+ years of trusted petroleum expertise. Fully licensed and insured. Serving across Georgia and Texas with compliance-first solutions."
      buttonLabel="Contact Us Now"
      onButtonClick={scrollToForm}
    />
  );
};

export default Hero;
