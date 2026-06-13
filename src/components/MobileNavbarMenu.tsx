"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

interface MobileNavbarMenuProps {
  lang: string;
  labels: {
    home: string;
    about: string;
    services: string;
    templates: string;
    contact: string;
    getStarted: string;
  };
}

export default function MobileNavbarMenu({ lang, labels }: MobileNavbarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-350 cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={closeMenu}
        />
      )}

      {/* Drawer menu */}
      <div
        className={`fixed inset-y-0 right-0 rtl:left-0 rtl:right-auto top-16 z-50 w-full max-w-[280px] bg-white dark:bg-slate-950 border-s border-slate-200 dark:border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-black text-brand uppercase tracking-wider">
              {lang === "ar" ? "قائمة التنقل" : "Navigation"}
            </span>
            <div className="h-0.5 w-10 bg-brand rounded-full" />
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href={`/${lang}`}
              onClick={closeMenu}
              className="text-base font-semibold text-slate-750 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {labels.home}
            </Link>
            <Link
              href={`/${lang}#about`}
              onClick={closeMenu}
              className="text-base font-semibold text-slate-750 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {labels.about}
            </Link>
            <Link
              href={`/${lang}#services`}
              onClick={closeMenu}
              className="text-base font-semibold text-slate-750 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {labels.services}
            </Link>
            <Link
              href={`/${lang}/templates`}
              onClick={closeMenu}
              className="text-base font-semibold text-slate-750 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {labels.templates}
            </Link>
            <Link
              href={`/${lang}#contact`}
              onClick={closeMenu}
              className="text-base font-semibold text-slate-750 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {labels.contact}
            </Link>
          </nav>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/${lang}#contact`}
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-accent hover:opacity-90 text-white font-extrabold text-sm transition-all shadow-md shadow-brand/10 hover:shadow-brand/20 cursor-pointer"
          >
            <span>{labels.getStarted}</span>
            <ArrowRight className={`h-4 w-4 transition-transform ${lang === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
