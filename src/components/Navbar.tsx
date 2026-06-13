import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getDictionary, Locale } from "@/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import MobileNavbarMenu from "./MobileNavbarMenu";

export default async function Navbar({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as Locale);

  const labels = {
    home: dict.navbar.home || (lang === "ar" ? "الرئيسية" : "Home"),
    about: dict.navbar.about || (lang === "ar" ? "من نحن" : "About Us"),
    services: dict.navbar.services || (lang === "ar" ? "خدماتنا" : "Services"),
    templates: dict.navbar.templates,
    contact: dict.navbar.contact || (lang === "ar" ? "اتصل بنا" : "Contact"),
    getStarted: dict.navbar.getStarted,
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
            <Sparkles size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            {dict.navbar.title}
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {/* Desktop Nav Links */}
          <Link href={`/${lang}`} className="text-sm font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden md:block">
            {labels.home}
          </Link>
          <Link href={`/${lang}#about`} className="text-sm font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden md:block">
            {labels.about}
          </Link>
          <Link href={`/${lang}#services`} className="text-sm font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden md:block">
            {labels.services}
          </Link>
          <Link href={`/${lang}/templates`} className="text-sm font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden md:block">
            {labels.templates}
          </Link>
          <Link href={`/${lang}#contact`} className="text-sm font-semibold text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden md:block">
            {labels.contact}
          </Link>
          
          <ThemeToggle />
          <LanguageSwitcher lang={lang as Locale} />

          <Link 
            href={`/${lang}#contact`} 
            className="hidden lg:inline-flex px-4 py-2 text-sm font-medium text-white bg-accent hover:opacity-90 rounded-lg transition-colors"
          >
            {labels.getStarted}
          </Link>

          {/* Mobile Nav Toggle */}
          <MobileNavbarMenu lang={lang} labels={labels} />
        </div>
      </div>
    </nav>
  );
}
