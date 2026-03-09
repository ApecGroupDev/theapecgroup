"use client";
import React from "react";
import ServicePage from "@/components/servicesMain";
import ElectricalContactForm from "@/components/electricalContactForm";

const MainElectrical: React.FC = () => (
  <ServicePage
    eyebrow="Gas Station Electrical"
    bannerHeading={
      <>
        Code-compliant, <br />
        built to last.
      </>
    }
    bannerBody={
      <>
        Running a gas station comes with unique electrical challenges. From
        hazardous location wiring to canopy lighting and underground systems,
        one mistake can lead to costly downtime, safety hazards, or regulatory
        violations. At <span className="font-semibold text-white/80">APEC</span>
        , we specialize in gas station electrical contracting — delivering
        turnkey installations, upgrades, and maintenance designed specifically
        for fueling environments. With decades of expertise, we ensure every
        project is code-compliant, efficient, and built to last.
      </>
    }
    bannerTagline="Let us handle your electrical systems so you can focus on fueling your customers — safely and profitably."
    whyHeading={
      <>
        Why Choose APEC For{" "}
        <span className="text-[#c62931]">Electrical Work?</span>
      </>
    }
    whySubtext="35+ years of proven experience with fuel stations and petroleum facilities."
    checklistItems={[
      "35+ years of proven experience with fuel stations and petroleum facilities",
      "Licensed, insured, and trusted for a spotless safety record",
      "Complete solutions — design, installation, upgrades, and emergency service",
      "Specialists in hazardous location and explosion-proof systems",
      "Code-compliant execution — NEC, OSHA, and local authority approved",
    ]}
    servicesHeading={
      <>
        Our Electrical <span className="text-[#c62931]">Services Include.</span>
      </>
    }
    badges={[
      "Power distribution and backup systems",
      "Canopy and parking lot lighting installation",
      "Underground electrical wiring",
      "Hazardous location and explosion-proof wiring",
      "Electrical system upgrades and retrofits",
      "Preventive maintenance and safety inspections",
      "24/7 emergency electrical services",
    ]}
    formId="ElectricalContactForm"
    formHeading={
      <>
        Electrical <span className="text-[#c62931]">Service Request.</span>
      </>
    }
    FormComponent={ElectricalContactForm}
  />
);

export default MainElectrical;
