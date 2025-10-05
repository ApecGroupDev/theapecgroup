"use client";

import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
};

export default function Accordion({
  items,
  allowMultiple = false,
  openIds,
  defaultOpenIds = [],
  onChange,
  className = "",
}: AccordionProps) {
  const isControlled = Array.isArray(openIds);
  const [internalOpen, setInternalOpen] = useState<string[]>(defaultOpenIds);
  const currentOpen = isControlled ? openIds! : internalOpen;
  const idRoot = useId();

  const toggle = (id: string) => {
    const isOpen = currentOpen.includes(id);
    let next: string[];
    if (allowMultiple) {
      next = isOpen ? currentOpen.filter((x) => x !== id) : [...currentOpen, id];
    } else {
      next = isOpen ? [] : [id];
    }

    if (!isControlled) setInternalOpen(next);
    onChange?.(next);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* full-width container */}
      <div className="w-full divide-y divide-gray-300 bg-white/60 backdrop-blur-md rounded-lg">
        {items.map((item) => {
          const isOpen = currentOpen.includes(item.id);
          const panelId = `${idRoot}-panel-${item.id}`;
          const headerId = `${idRoot}-header-${item.id}`;

          return (
            <motion.div
              key={item.id}
              layout
              className="w-full overflow-hidden"
              transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            >
              <button
                id={headerId}
                onClick={() => toggle(item.id)}
                aria-controls={panelId}
                aria-expanded={isOpen}
                className={`w-full text-left flex justify-between items-center py-4 px-5 transition-all duration-300
                  hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-red-500`}
              >
                <span className="font-semibold text-lg scrn-1000:text-xl text-[#c62931]">
                  {item.title}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-3 flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#c62931]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative w-full min-w-full flex-shrink-0 overflow-hidden"
                  >
                    <div className="px-10 py-5 pt-2 text-gray-800 tracking-wide leading-relaxed w-full">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
