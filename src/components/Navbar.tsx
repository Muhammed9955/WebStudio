import Link from "next/link";
import { MonitorSmartphone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
            <MonitorSmartphone size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            WebStudio
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/templates" className="text-sm font-medium text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors">
            Templates
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors hidden sm:block">
            How it works
          </Link>
          <Link 
            href="/templates" 
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
