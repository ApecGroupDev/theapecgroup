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
      imageSrc="/backgrounds/blog/Hero_Blog.webp"
      imageAlt="APEC Oil and Gas Industry Blog"
      eyebrow="APEC Blog · Industry Insights"
      heading={
        <>
          Insights That Fuel the Future —{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.5), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Oil and Gas Industry Blogs.
          </span>
        </>
      }
      subtext="Powered by 35+ years of industry experience, APEC's blog helps fuel retailers and energy professionals stay ahead with expert insights, trends, and compliance updates."
      buttonLabel="Read More"
      onButtonClick={scrollToContent}
    />
  );
};

export default Hero;
