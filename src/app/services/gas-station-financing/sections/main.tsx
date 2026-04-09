"use client";
import React from "react";
import ServicePage from "@/components/servicesMain";

const MainFinancing: React.FC = () => (
  <ServicePage
    eyebrow="Gas Station Financing"
    bannerHeading={
      <>
        Funding that <br />
        fits your vision.
      </>
    }
    bannerBody={
      <>
        Building or upgrading a gas station takes more than a great plan — it
        takes the right financing to bring it to life.{" "}
        <span className="font-semibold text-white/80">The APEC Group</span>{" "}
        offers tailored gas station financing solutions to help you fund
        construction, equipment, and site improvements. With over 35 years of
        experience in the petroleum industry, we understand your business needs
        and connect you with financing that works.
      </>
    }
    bannerTagline="Let’s power your energy project with funding that fits."
    whyHeading={
      <>
        Why Choose APEC For <span className="text-[#c62931]">Financing?</span>
      </>
    }
    whySubtext="35+ years of petroleum experience, trusted by operators across Georgia."
    checklistItems={[
      "35+ years’ experience in petroleum projects and financing",
      "Flexible funding options for construction, equipment, and upgrades",
      "Guidance from experts who understand fuel site operations",
      "Local expertise across Georgia",
      "Trusted by fuel retailers, distributors, and fleet operators",
    ]}
    servicesHeading={
      <>
        Our Financing <span className="text-[#c62931]">Solutions Include.</span>
      </>
    }
    badges={[
      "Construction loans for new fuel stations",
      "Equipment financing (pumps, tanks, monitoring systems)",
      "Funding for upgrades and remodels",
      "Refinance options for existing fuel sites",
      "Consultation on project cost planning",
    ]}
    formId="FinancingContactForm"
    formHeading={
      <>
        Financing <span className="text-[#c62931]">Service Request.</span>
      </>
    }
    formspreeUrl="https://formspree.io/f/mkgbynvy"
    formPlaceholder="Tell us about your financing needs..."
    formButtonLabel="Send Request"
  />
);

export default MainFinancing;
