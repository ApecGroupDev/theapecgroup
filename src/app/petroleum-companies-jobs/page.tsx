import React from "react";
import Hero from "./sections/hero";
import MainContact from "./sections/main";
import Footer from "@/components/footer";
import { Metadata } from "next";

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
      <Hero />
      <MainContact />
      <Footer />
    </div>
  );
};

export default CareersPage;
