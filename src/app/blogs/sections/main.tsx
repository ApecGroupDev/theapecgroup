"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogData } from "../components/blogData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const MainBlog: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Latest Articles
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            From the <span className="text-[#c62931]">Blog.</span>
          </h2>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogData.map((blog, i) => (
          <motion.div key={i} {...fadeUp(0.06 + i * 0.05)}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col overflow-hidden border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl transition-all duration-300 hover:shadow-2xl h-full relative"
            >
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out z-10" />

              {/* Image */}
              <div className="h-48 w-full overflow-hidden flex-shrink-0">
                <div className="relative h-full w-full">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 flex-grow">
                <h3
                  className="text-base font-black text-[#111] group-hover:text-[#c62931] mb-2 leading-tight tracking-tight transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {blog.title}
                </h3>
                <p className="text-sm text-[#111]/50 leading-relaxed flex-grow">
                  {blog.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#c62931] text-xs font-bold tracking-wide">
                  <span>Read More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default MainBlog;
