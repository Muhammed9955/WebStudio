"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-350 cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Simple Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop to close menu when clicking outside */}
          <div className="fixed inset-0 top-16 z-40 bg-slate-900/10 dark:bg-slate-950/20" onClick={closeMenu} />

          {/* Simple Dropdown Container */}
          <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 p-5 shadow-xl flex flex-col space-y-2 animate-fade-in">
            <Link
              href={`/${lang}`}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {labels.home}
            </Link>
            <Link
              href={`/${lang}#about`}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {labels.about}
            </Link>
            <Link
              href={`/${lang}#services`}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {labels.services}
            </Link>
            <Link
              href={`/${lang}/templates`}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {labels.templates}
            </Link>
            <Link
              href={`/${lang}#contact`}
              onClick={closeMenu}
              className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              {labels.contact}
            </Link>
            
            <div className="pt-3 border-t border-slate-100 dark:border-slate-900">
              <Link
                href={`/${lang}#contact`}
                onClick={closeMenu}
                className="flex items-center justify-center py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-black text-sm transition-all"
              >
                {labels.getStarted}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
