"use client";

import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  openIds?: string[];
  defaultOpenIds?: string[];
  onChange?: (openIds: string[]) => void;
  className?: string;
  // Optional header
  eyebrow?: string;
  heading?: React.ReactNode;
  subtext?: string;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Accordion({
  items,
  allowMultiple = false,
  openIds,
  defaultOpenIds = [],
  onChange,
  className = "",
  eyebrow,
  heading,
  subtext,
}: AccordionProps) {
  const isControlled = Array.isArray(openIds);
  const [internalOpen, setInternalOpen] = useState<string[]>(defaultOpenIds);
  const currentOpen = isControlled ? openIds! : internalOpen;
  const idRoot = useId();
  const hasHeader = eyebrow || heading || subtext;

  const toggle = (id: string) => {
    const isOpen = currentOpen.includes(id);
    const next = allowMultiple
      ? isOpen
        ? currentOpen.filter((x) => x !== id)
        : [...currentOpen, id]
      : isOpen
        ? []
        : [id];

    if (!isControlled) setInternalOpen(next);
    onChange?.(next);
  };

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#f7f5f2] py-24 ${className}`}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.07] blur-[100px] pointer-events-none rounded-full" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — only renders if any header prop is passed */}
        {hasHeader && (
          <motion.div {...fadeUp(0)} className="mb-14">
            {eyebrow && (
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#c62931]" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                  {eyebrow}
                </span>
              </div>
            )}
            {(heading || subtext) && (
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                {heading && (
                  <h2
                    className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {heading}
                  </h2>
                )}
                {subtext && (
                  <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
                    {subtext}
                  </p>
                )}
              </div>
            )}
            <div className="mt-10 h-px bg-[#111]/[0.08]" />
          </motion.div>
        )}

        {/* Items */}
        <motion.div {...fadeUp(hasHeader ? 0.1 : 0)} className="space-y-3">
          {items.map((item) => {
            const isOpen = currentOpen.includes(item.id);
            const panelId = `${idRoot}-panel-${item.id}`;
            const headerId = `${idRoot}-header-${item.id}`;

            return (
              <motion.div
                key={item.id}
                layout
                transition={{
                  layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`relative rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#c62931]/50 shadow-xl"
                    : "border-[#111]/[0.08] hover:border-[#c62931]/30 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Red left-edge reveal */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] transition-transform duration-300 ease-out origin-bottom ${
                    isOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                />

                {/* Trigger */}
                <button
                  id={headerId}
                  onClick={() => toggle(item.id)}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center py-5 px-7 text-left group"
                >
                  <span
                    className={`font-black text-lg tracking-tight transition-colors duration-300 ${
                      isOpen
                        ? "text-[#c62931]"
                        : "text-[#111] group-hover:text-[#c62931]"
                    }`}
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`flex-shrink-0 ml-4 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#c62931] border-[#c62931] text-white"
                        : "border-[#111]/10 text-[#111]/40 group-hover:border-[#c62931]/40 group-hover:text-[#c62931]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {/* Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 pt-0">
                        <div className="h-px bg-[#111]/[0.07] mb-5" />
                        <div className="text-[#111]/60 leading-relaxed text-sm lg:text-base">
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
}
