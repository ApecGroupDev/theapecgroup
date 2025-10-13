"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react"; // icon for no-image cards

type TeamMember = {
  name: string;
  title: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Mehboob "Ali" Husain', title: 'PRESIDENT', image: "/placeholders/profile.png" },
  { name: 'Mavis Brown', title: 'CONTROLLER', image: "/placeholders/profile.png" },
  { name: 'Earl Sego', title: 'VP OF CONSTRUCTION' },
  { name: 'Ron Brown', title: 'SERVICE MANAGER' },
  { name: 'Dami Ajasa', title: 'OPERATIONS MANAGER' },
  { name: 'Jorge Salazar', title: 'COO IMAGING AND CANOPIES' },
  { name: 'Walid Bayoumi', title: 'SALES EXECUTIVE' },
  { name: 'Rani Sonpari', title: 'CUSTOMER CARE' },
  { name: 'Billy Boulware', title: 'ASST. SERVICE MANAGER' },
  { name: 'Peggy Hulka', title: 'POS MANAGER' },
  { name: 'Michael Henning', title: 'PARTS SPECIALIST' },
  { name: 'Wade LeComte', title: 'COMMERCIAL SALES EXECUTIVE' },
];

const TeamPage: React.FC = () => {
  const execs = teamMembers.slice(0, 2); // Ali + Mavis
  const others = teamMembers.slice(2);

  return (
    <section className="my-14 rounded-2xl bg-gradient-to-b from-gray-50 to-white py-16 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Meet a Few of Our <span className="text-[#c62931]">Leaders</span>
        </h2>
        <p className="text-gray-600 my-4 text-2xl max-w-3xl mx-auto">
          100% privately owned and operated — committed to excellence across every project.
        </p>
      </div>

      {/* Top Executives (With Images) */}
      <div className="grid grid-cols-1 scrn-600:grid-cols-2 gap-10 scrn-1000:gap-14 mb-16">
        {execs.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Profile Image */}
            <div className="relative w-2/3 scrn-1000:w-1/2 mx-auto h-60 bg-gray-100">
              <Image
                src={member.image || "/placeholders/profile.png"}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // improves LCP for first card
              />
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                {member.name}
              </h3>
              <p className="text-xl uppercase tracking-wide text-red-600 mt-1">
                {member.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Team Members (No Images) */}
      <div className="grid grid-cols-1 scrn-600:grid-cols-2 scrn-1000:grid-cols-3 gap-8 scrn-1000:gap-12">
        {others.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-400 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center">
              <HardHat className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="uppercase tracking-wide text-gray-500 mt-1">
              {member.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
