"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full p-6 text-start font-semibold text-slate-900 dark:text-white hover:text-brand dark:hover:text-brand transition-colors cursor-pointer"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand dark:text-brand" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100 dark:border-slate-800" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
