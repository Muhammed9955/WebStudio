import Link from "next/link";
import { MonitorSmartphone } from "lucide-react";
import { getDictionary, Locale } from "@/dictionaries";

export default async function Footer({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as Locale);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
              <MonitorSmartphone size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              {dict.navbar.title}
            </span>
          </Link>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <Link href={`/${lang}`} className="hover:text-brand transition-colors">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link href={`/${lang}/templates`} className="hover:text-brand transition-colors">
              {dict.navbar.templates}
            </Link>
            <Link href="#" className="hover:text-brand transition-colors">
              {lang === 'ar' ? 'الخصوصية' : 'Privacy'}
            </Link>
            <Link href="#" className="hover:text-brand transition-colors">
              {lang === 'ar' ? 'الشروط' : 'Terms'}
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {dict.navbar.title}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
