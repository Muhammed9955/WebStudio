"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ lang }: { lang: 'en' | 'ar' }) {
  const pathname = usePathname();
  const nextLang = lang === 'en' ? 'ar' : 'en';

  // Calculate the target pathname
  let targetPath = `/${nextLang}`;
  if (pathname) {
    if (pathname === '/en' || pathname === '/ar') {
      targetPath = `/${nextLang}`;
    } else if (pathname.startsWith('/en/')) {
      targetPath = pathname.replace('/en/', `/${nextLang}/`);
    } else if (pathname.startsWith('/ar/')) {
      targetPath = pathname.replace('/ar/', `/${nextLang}/`);
    }
  }

  // Set the locale cookie
  const handleClick = () => {
    document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <Link
      href={targetPath}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-all hover:scale-105 active:scale-95 shadow-sm"
    >
      <Globe size={14} className="text-slate-500 group-hover:text-brand" />
      <span>{lang === 'en' ? 'العربية' : 'English'}</span>
    </Link>
  );
}
