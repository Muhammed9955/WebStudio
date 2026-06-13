"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

type PackageItem = {
  name: string;
  badge: string;
  description: string;
  goal: string;
  features: string[];
};

type PackagesLabels = {
  title: string;
  subtitle: string;
  ctaText: string;
  categories: {
    content: string;
    digital: string;
  };
  contentItems: PackageItem[];
  digitalItems: PackageItem[];
};

type PackagesProps = {
  lang: string;
  labels: PackagesLabels;
};

export default function Packages({ lang, labels }: PackagesProps) {
  const [activeTab, setActiveTab] = useState<"content" | "digital">("content");

  const handleSelectPackage = (packageName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const textarea = document.getElementById("message") as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = lang === "ar"
            ? `مرحباً MMS Creative Agency، أود الاستفسار والبدء في باقة: "${packageName}"`
            : `Hello MMS Creative Agency, I would like to inquire about and get started with the "${packageName}" package.`;
          
          // Dispatch input event to update React state inside ContactForm
          const event = new Event("input", { bubbles: true });
          textarea.dispatchEvent(event);
          textarea.focus();
        }
      }, 800); // Wait for scroll animation to complete
    }
  };

  const currentItems = activeTab === "content" ? labels.contentItems : labels.digitalItems;

  return (
    <section id="packages" className="w-full py-20 bg-background dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {labels.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-inner">
            <button
              onClick={() => setActiveTab("content")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "content"
                  ? "bg-white dark:bg-slate-800 text-brand shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {labels.categories.content}
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "digital"
                  ? "bg-white dark:bg-slate-800 text-brand shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {labels.categories.digital}
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
          {currentItems.map((pkg, idx) => {
            const isPopular = pkg.badge === "Popular" || pkg.badge === "Pro" || pkg.badge === "شائع" || pkg.badge === "احترافي";
            
            return (
              <div
                key={idx}
                className={`flex flex-col relative rounded-3xl p-6 bg-white dark:bg-slate-900/60 border hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group ${
                  isPopular
                    ? "border-brand shadow-lg shadow-brand/5 dark:shadow-brand/2"
                    : "border-slate-200/60 dark:border-slate-800/80 hover:border-brand/50"
                }`}
              >
                {/* Popular Badge Glow */}
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black bg-brand text-white uppercase tracking-widest shadow-md">
                    {pkg.badge}
                  </span>
                )}

                {/* Card Title */}
                <div className="mb-4 mt-2">
                  {!isPopular && (
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3 border border-slate-200/50 dark:border-slate-750/50">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                    {pkg.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow-0 min-h-[40px]">
                  {pkg.description}
                </p>

                {/* Features divider */}
                <div className="h-px bg-slate-100 dark:bg-slate-800/80 mb-6" />

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-brand/10 dark:bg-brand/20 flex items-center justify-center text-brand">
                        <Check className="h-3 w-3 stroke-[3px]" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-350 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Target Goal */}
                <div className="mt-auto">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-6 text-center">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider block">
                      {pkg.goal}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all duration-300 cursor-pointer ${
                      isPopular
                        ? "bg-brand hover:bg-brand-dark text-white dark:text-slate-950 shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-brand/40"
                    }`}
                  >
                    <span>{labels.ctaText}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
