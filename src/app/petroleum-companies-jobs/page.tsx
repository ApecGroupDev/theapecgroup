import React from "react";
import HeaderWhite from "@/components/headerWhite";
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
      <HeaderWhite />
      <Hero />
      <MainContact />
      <div className="h-4 bg-gradient-to-r from-gray-800 to-red-600 -mb-1" />
      <Footer />
    </div>
  );
};

export default CareersPage;
