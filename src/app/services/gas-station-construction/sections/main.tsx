"use client";
import React from "react";
import ServicePage from "@/components/servicesMain";
import ConstructionContactForm from "@/components/constructionContactForm";

const MainConstruction: React.FC = () => (
  <ServicePage
    eyebrow="Gas Station Construction"
    bannerHeading={
      <>
        Built right <br />
        the first time.
      </>
    }
    bannerBody={
      <>
        Building a gas station isn’t just about concrete and pumps — it’s about
        creating a safe, compliant, and profitable site that will serve your
        customers for years.{" "}
        <span className="font-semibold text-white/80">The APEC Group</span>{" "}
        offers complete gas station construction services, from design to final
        inspection. With more than 35 years of experience, we manage every
        detail so you can focus on your business.
      </>
    }
    bannerTagline="Safely, efficiently, and to code — every time."
    whyHeading={
      <>
        Why Choose APEC For{" "}
        <span className="text-[#c62931]">Construction?</span>
      </>
    }
    whySubtext="35+ years of proven leadership, safety, and client trust."
    checklistItems={[
      "Long-term careers in fuel infrastructure and petroleum construction",
      "Hands-on work: gas station builds, tank installations, system upgrades",
      "Team-first culture with a serious focus on safety",
      "Projects throughout Georgia",
      "35+ years of proven leadership and client trust",
    ]}
    servicesHeading={
      <>
        Our Construction{" "}
        <span className="text-[#c62931]">Services Include.</span>
      </>
    }
    badges={[
      "Custom station design and layout",
      "Permitting and site preparation",
      "Fuel tank and dispenser installation",
      "Canopy and C-store build-out",
      "Environmental compliance support",
      "Complete project management",
    ]}
    formId="ConstructionContactForm"
    formHeading={
      <>
        Construction <span className="text-[#c62931]">Service Request.</span>
      </>
    }
    FormComponent={ConstructionContactForm}
  />
);

export default MainConstruction;
