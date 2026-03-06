"use client";

import React from "react";
import Image from "next/image";

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title }) => (
  <div className="group flex items-center gap-4 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg">
    {/* Avatar */}
    <div className="flex-shrink-0 relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#111]/[0.08] group-hover:border-[#c62931]/40 transition-colors duration-300">
      <Image
        src="/placeholders/profile.png"
        alt={`${name}'s profile`}
        fill
        className="object-cover"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <span
        className="text-sm font-black text-[#c62931] leading-tight tracking-tight"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {name}
      </span>
      <span className="text-xs text-[#111]/50 font-medium mt-0.5">{title}</span>
    </div>
  </div>
);

export default TeamCard;
