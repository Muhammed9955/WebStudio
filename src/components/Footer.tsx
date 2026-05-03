import Link from "next/link";
import { MonitorSmartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-brand text-white rounded-lg group-hover:bg-brand-dark transition-colors">
              <MonitorSmartphone size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              WebStudio
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <Link href="/templates" className="hover:text-brand transition-colors">Templates</Link>
            <Link href="#" className="hover:text-brand transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand transition-colors">Terms</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} WebStudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
