import React from "react";
import Hero from "./sections/hero";
import MainContact from "./sections/main";
import Footer from "@/components/footer";

export const metadata = {
  title: "Petroleum Companies Jobs | APEC Careers",
  description: "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
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
