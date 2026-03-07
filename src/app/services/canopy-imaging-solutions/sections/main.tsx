"use client";
import React from "react";
import ServicePage from "@/components/servicesMain";
import ImagingContactForm from "@/components/imagingContactForm";

const MainImaging: React.FC = () => (
  <ServicePage
    eyebrow="Canopy Imaging"
    bannerHeading={
      <>
        Make a bold, <br />
        lasting impression.
      </>
    }
    bannerBody={
      <>
        Your canopy is more than a structure — it’s your gas station’s first
        impression.{" "}
        <span className="font-semibold text-white/80">The APEC Group</span>{" "}
        provides custom canopy imaging solutions that enhance your brand,
        attract customers, and help your station stand out. With 35+ years of
        experience, we handle design, production, and installation to ensure
        your canopy looks as good as it performs.
      </>
    }
    bannerTagline="Let’s help your station make a bold, lasting impression."
    whyHeading={
      <>
        Why Choose APEC For{" "}
        <span className="text-[#c62931]">Canopy Imaging?</span>
      </>
    }
    whySubtext="35+ years of experience, licensed and insured."
    checklistItems={[
      "35+ years’ experience managing petroleum system compliance",
      "Licensed, insured, and known for a spotless safety record",
      "Complete solutions — inspections, permitting, testing, remediation",
      "Trusted local experts on Georgia’s regulatory requirements",
      "Compliance guarantee — we stand behind our work",
    ]}
    servicesHeading={
      <>
        Our Canopy Imaging{" "}
        <span className="text-[#c62931]">Solutions Include.</span>
      </>
    }
    badges={[
      "Custom canopy design and branding",
      "Production of durable canopy signage and elements",
      "Full canopy imaging installation",
      "Canopy and C-store build-out",
      "LED lighting integration",
      "Refurbishment of existing canopies",
    ]}
    formId="ImagingContactForm"
    formHeading={
      <>
        Canopy Imaging <span className="text-[#c62931]">Service Request.</span>
      </>
    }
    FormComponent={ImagingContactForm}
  />
);

export default MainImaging;
