import Link from "next/link";
import { MonitorSmartphone } from "lucide-react";
import { getDictionary, Locale } from "@/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Navbar({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as Locale);

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
            <MonitorSmartphone size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            {dict.navbar.title}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href={`/${lang}/templates`} className="text-sm font-medium text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors">
            {dict.navbar.templates}
          </Link>
          <Link href={`/${lang}#how-it-works`} className="text-sm font-medium text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden sm:block">
            {dict.navbar.howItWorks}
          </Link>
          
          <LanguageSwitcher lang={lang as Locale} />

          <Link 
            href={`/${lang}/templates`} 
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-accent hover:opacity-90 rounded-lg transition-colors"
          >
            {dict.navbar.getStarted}
          </Link>
        </div>
      </div>
    </nav>
  );
}
