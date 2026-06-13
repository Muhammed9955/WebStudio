"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Phone, Mail, ArrowRight } from "lucide-react";

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

  // Prevent background scrolling when menu is open
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
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-fade-in overflow-y-auto">
          {/* Overlay Header */}
          <div className="flex items-center justify-between h-16 w-full max-w-5xl mx-auto">
            {/* Responsive Logo in Overlay */}
            <Link href={`/${lang}`} onClick={closeMenu} className="flex items-center gap-2 group">
              <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
                <Sparkles size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                MMS Creative
              </span>
            </Link>

            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-350 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav className="flex flex-col items-center justify-center space-y-6 my-auto py-8">
            <Link
              href={`/${lang}`}
              onClick={closeMenu}
              className="text-2xl font-black text-slate-850 dark:text-white hover:text-brand dark:hover:text-brand transition-colors text-center py-2"
            >
              {labels.home}
            </Link>
            <Link
              href={`/${lang}#about`}
              onClick={closeMenu}
              className="text-2xl font-black text-slate-850 dark:text-white hover:text-brand dark:hover:text-brand transition-colors text-center py-2"
            >
              {labels.about}
            </Link>
            <Link
              href={`/${lang}#services`}
              onClick={closeMenu}
              className="text-2xl font-black text-slate-850 dark:text-white hover:text-brand dark:hover:text-brand transition-colors text-center py-2"
            >
              {labels.services}
            </Link>
            <Link
              href={`/${lang}/templates`}
              onClick={closeMenu}
              className="text-2xl font-black text-slate-850 dark:text-white hover:text-brand dark:hover:text-brand transition-colors text-center py-2"
            >
              {labels.templates}
            </Link>
            <Link
              href={`/${lang}#contact`}
              onClick={closeMenu}
              className="text-2xl font-black text-slate-850 dark:text-white hover:text-brand dark:hover:text-brand transition-colors text-center py-2"
            >
              {labels.contact}
            </Link>

            <Link
              href={`/${lang}#contact`}
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 mt-4 rounded-2xl bg-brand hover:bg-brand-dark text-white font-extrabold text-base transition-all shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{labels.getStarted}</span>
              <ArrowRight className={`h-5 w-5 transition-transform ${lang === "ar" ? "rotate-180" : ""}`} />
            </Link>
          </nav>

          {/* Footer info at the bottom of the overlay */}
          <div className="flex flex-col items-center gap-4 border-t border-slate-200/50 dark:border-slate-800/80 pt-6 max-w-lg mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center text-sm font-semibold text-slate-650 dark:text-slate-400">
              <Link href="tel:+201032137085" className="flex items-center justify-center gap-2 hover:text-brand transition-colors py-2 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                <Phone size={16} className="text-brand" />
                <span>+20 103 213 7085</span>
              </Link>
              <Link href="mailto:muhamed.dev.95@gmail.com" className="flex items-center justify-center gap-2 hover:text-brand transition-colors py-2 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                <Mail size={16} className="text-brand" />
                <span>muhamed.dev.95@gmail.com</span>
              </Link>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
              &copy; {new Date().getFullYear()} MMS Creative Agency.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
