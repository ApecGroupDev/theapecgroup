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
    <div className={`w-full space-y-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {items.map((item) => {
        const isOpen = currentOpen.includes(item.id);
        const panelId = `${idRoot}-panel-${item.id}`;
        const headerId = `${idRoot}-header-${item.id}`;

        return (
          <motion.div
            key={item.id}
            layout
            transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            className={`rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 ${isOpen ? "border-[#c62931]" : "border-gray-200"
              }`}
          >
            <button
              id={headerId}
              onClick={() => toggle(item.id)}
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center py-5 px-6 text-left group"
            >
              <span
                className={`font-semibold text-lg lg:text-xl transition-colors ${isOpen ? "text-[#c62931]" : "text-gray-800 group-hover:text-[#c62931]"
                  }`}
              >
                {item.title}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 ml-4 text-[#c62931]"
              >
                {isOpen ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
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
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-gray-700 leading-relaxed lg:text-lg">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
