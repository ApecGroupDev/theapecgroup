"use client";

import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative w-full bg-[#c62931] text-white py-12 my-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6">
          Let’s Start the Conversation
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          We look forward to helping you build, grow, and maintain your petroleum business with confidence.
        </p>

        {/* Contact Options */}
        <div className="space-y-6 text-lg font-medium">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-5 h-5 text-white" />
            <span>Call us today: 855-444-2732</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-5 h-5 text-white" />
            <span>Email: info@theapecgroup.com</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Or fill out the contact form — our team will get back to you within one business day.</span>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
