import React from "react";
import HeaderWhite from "@/components/headerWhite";
import Hero from "./sections/hero";
import Footer from "@/components/footer";
import { Metadata } from "next";
import AccordionCareers from "./sections/accordion";
import MainCareers from "./sections/main";
import CareersSchema from "@/components/schema/CareersSchema";

export const metadata: Metadata = {
  title: "Petroleum Companies Jobs | APEC Careers",
  description: "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.theapecgroup.com/petroleum-companies-jobs',
  },
};

const CareersPage: React.FC = () => {

  return (
    <div className='flex flex-col'>
      <CareersSchema />
      <HeaderWhite />
      <Hero />
      <MainCareers />
      <AccordionCareers />
      <Footer />
    </div>
  );
};

export default CareersPage;
