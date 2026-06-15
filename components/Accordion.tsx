"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  numbered?: boolean;
  defaultOpenIndex?: number;
  numberClassName?: string;
}

export default function Accordion({
  items,
  numbered = false,
  defaultOpenIndex,
  numberClassName = "bg-light-green text-primary",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-card border border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-header-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left transition-colors hover:bg-light-green/40"
            >
              <span className="flex items-center gap-3 font-semibold text-dark-text">
                {numbered && (
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${numberClassName}`}
                  >
                    {index + 1}
                  </span>
                )}
                {item.title}
              </span>
              <IconChevronDown
                aria-hidden="true"
                size={20}
                className={`shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${index}`}
                  role="region"
                  aria-labelledby={`accordion-header-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-5 pb-4 text-muted ${
                      numbered ? "sm:pl-[3.25rem]" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
