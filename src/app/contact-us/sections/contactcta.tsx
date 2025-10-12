"use client";

import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#c62931] to-[#921c23] text-white py-24 mt-20 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl scrn-750:text-5xl font-extrabold tracking-tight mb-6"
        >
          Let’s Start the Conversation
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/90 max-w-2xl mx-auto mb-10"
        >
          Ready to grow your petroleum business? Let’s discuss how APEC can help
          you build, maintain, and scale with confidence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-14"
        >
          <a
            href="#MainContactForm"
            className="inline-block bg-white text-[#c62931] font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#f9f9f9] hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
          </a>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col scrn-750:flex-row items-center justify-center gap-8 text-white/90 text-base"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-white" />
            <span>855-444-2732</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-white" />
            <span>info@theapecgroup.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-white" />
            <span>We’ll reply within one business day</span>
          </div>
        </motion.div>

        {/* Decorative bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
