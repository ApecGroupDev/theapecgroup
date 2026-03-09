"use client";
import React from "react";
import ServicePage from "@/components/servicesMain";
import ComplianceContactForm from "@/components/complianceContactForm";

const MainCompliance: React.FC = () => (
  <ServicePage
    eyebrow="Environmental Compliance"
    bannerHeading={
      <>
        Protect your business <br />
        and the environment.
      </>
    }
    bannerBody={
      <>
        Environmental regulations in the petroleum industry are complex — and
        failing to comply can put your business, customers, and community at
        risk. At{" "}
        <span className="font-semibold text-white/80">The APEC Group</span>, we
        provide custom environmental compliance solutions that protect your
        business from fines, shutdowns, and environmental harm. With 35+ years
        of expertise, we help fuel retailers and operators meet or exceed all
        local, state, and federal requirements.
      </>
    }
    bannerTagline="Let us handle compliance so you can focus on your business with peace of mind."
    whyHeading={
      <>
        Why Choose APEC For <span className="text-[#c62931]">Compliance?</span>
      </>
    }
    whySubtext="35+ years of expertise, licensed and compliance-guaranteed."
    checklistItems={[
      "35+ years’ experience managing petroleum system compliance",
      "Licensed, insured, and known for a spotless safety record",
      "Complete solutions — inspections, permitting, testing, remediation",
      "Trusted local experts on Georgia’s regulatory requirements",
      "Compliance guarantee — we stand behind our work",
    ]}
    servicesHeading={
      <>
        Our Compliance <span className="text-[#c62931]">Services Include.</span>
      </>
    }
    badges={[
      "Fuel system inspections and leak detection",
      "Tank and line testing",
      "Compliance documentation and reporting",
      "Permitting and regulatory liaison",
      "Spill prevention and emergency response",
      "Environmental remediation and cleanup",
    ]}
    formId="ComplianceContactForm"
    formHeading={
      <>
        Compliance <span className="text-[#c62931]">Service Request.</span>
      </>
    }
    FormComponent={ComplianceContactForm}
  />
);

export default MainCompliance;
