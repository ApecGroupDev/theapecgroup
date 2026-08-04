import React from "react";
import Hero from "./sections/hero";
import { Metadata } from "next";
import MainCareers from "./sections/main";
import CareersSchema from "@/components/schema/CareersSchema";
import IntroCareers from "./sections/intro";
import AccordionCareers from "./sections/accordion";

export const metadata: Metadata = {
  title: "Petroleum Companies Jobs | APEC Careers",
  description:
    "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.theapecgroup.com/petroleum-companies-jobs",
  },
  openGraph: {
    title: "Petroleum Companies Jobs | APEC Careers",
    description: "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
  },
  twitter: {
    title: "Petroleum Companies Jobs | APEC Careers",
    description: "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
  },
};

const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <CareersSchema />
      <Hero />
      <IntroCareers />
      <MainCareers />
      <AccordionCareers />
    </div>
  );
};

export default CareersPage;
