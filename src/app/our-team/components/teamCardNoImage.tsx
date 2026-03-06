"use client";

import React from "react";

type TeamCardProps = {
  name: string;
  title: string;
};

const TeamCardNoImage: React.FC<TeamCardProps> = ({ name, title }) => (
  <div className="group flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg">
    <span
      className="text-sm font-black text-[#c62931] leading-tight tracking-tight"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {name}
    </span>
    <div className="my-2 h-px bg-[#c62931]/30" />
    <span className="text-xs text-[#111]/50 font-medium">{title}</span>
  </div>
);

export default TeamCardNoImage;
