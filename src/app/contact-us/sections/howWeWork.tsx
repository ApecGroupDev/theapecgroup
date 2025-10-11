"use client";

import React from "react";
import { Clock, ClipboardCheck, FileText, Handshake, ShieldCheck, Wrench, Building2, MessageSquare } from "lucide-react";

const HowWeWork = () => {
  return (
    <section className="relative w-full bg-gray-50 py-20">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        {/* HOW WE WORK */}
        <div>
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            How We <span className="text-[#c62931]">Work With You</span>
          </h2>

          <div className="grid scrn-600:grid-cols-2 scrn-1000:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <Clock className="w-10 h-10 text-[#c62931]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600">
                We respond to all inquiries within one business day.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <ClipboardCheck className="w-10 h-10 text-[#c62931]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                Our experts review your project and provide tailored recommendations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <FileText className="w-10 h-10 text-[#c62931]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Site Visit or Estimate
              </h3>
              <p className="text-gray-600">
                For larger projects, we schedule a detailed inspection or quote.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <Handshake className="w-10 h-10 text-[#c62931]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Follow-Through
              </h3>
              <p className="text-gray-600">
                We stay connected from your first call to project completion — and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE APEC */}
        <div className="pt-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Why Choose <span className="text-[#c62931]">The APEC Group</span>
          </h2>

          <div className="grid scrn-600:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-7 h-7 text-[#c62931] flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                30+ years of hands-on petroleum experience
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Wrench className="w-7 h-7 text-[#c62931] flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Licensed, insured, and safety-certified professionals
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <Building2 className="w-7 h-7 text-[#c62931] flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Deep local expertise across Georgia, Texas, and Atlanta
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <MessageSquare className="w-7 h-7 text-[#c62931] flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Transparent communication and reliable project delivery
              </p>
            </div>

            <div className="flex items-start space-x-4 col-span-2 justify-center">
              <Handshake className="w-7 h-7 text-[#c62931] flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                One trusted partner for construction, electrical, financing, and compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
