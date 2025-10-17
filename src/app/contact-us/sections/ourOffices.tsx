"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const OurOffices = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our <span className="text-[#c62931]">Offices</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We proudly serve clients from our headquarters in Georgia and our branch office in Texas —
            ensuring fast response times and dedicated local support.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid scrn-750:grid-cols-2 gap-10">
          {/* Main Office */}
          <div className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center items-center mb-6">
              <MapPin className="w-6 h-6 text-[#c62931] mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Main Office</h3>
            </div>
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              4732-E North Royal Atlanta Drive <br />
              Tucker, GA 30084
            </p>
          </div>

          {/* Branch Office */}
          <div className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center items-center mb-6">
              <MapPin className="w-6 h-6 text-[#c62931] mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Branch Office</h3>
            </div>
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              505 Garden Oaks Blvd <br />
              Houston, TX 77018
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 flex flex-col scrn-600:flex-row justify-center items-center scrn-600:space-x-10 space-y-5 scrn-600:space-y-0 text-gray-700 text-lg">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-[#c62931]" />
            <a href="tel:855-444-2732" className="hover:text-[#c62931] transition-colors">
              855-444-2732
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-[#c62931]" />
            <a href="mailto:Sales@TheAPECgroup.com" className="hover:text-[#c62931] transition-colors">
              Sales@TheAPECgroup.com
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-[#c62931]" />
            <span>Monday–Friday, 9AM–5PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
