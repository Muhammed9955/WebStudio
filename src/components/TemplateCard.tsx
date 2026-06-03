import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Template } from "@/data/templates";

export default function TemplateCard({ template, lang }: { template: Template; lang: string }) {
  const phoneNumber = "+201032137085";
  const titleText = template.title[lang as "en" | "ar"] || template.title.en;
  
  const defaultMessage = encodeURIComponent(
    lang === "ar"
      ? `مرحباً، أنا مهتم بطلب قالب ${titleText} لعملي.`
      : `Hello, I'm interested in ordering the ${titleText} template for my business.`
  );
  
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
  const shortDescriptionText = template.shortDescription[lang as "en" | "ar"] || template.shortDescription.en;

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={template.imageUrl} 
          alt={titleText} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <Link 
            href={`/${lang}/templates/${template.slug}`}
            className="text-white font-medium hover:underline flex items-center gap-1"
          >
            {lang === "ar" ? "عرض التفاصيل" : "View Details"}
          </Link>
          <Link 
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline flex items-center gap-1"
          >
            {lang === "ar" ? "التجربة الحية" : "Live Demo"}{" "}
            <ExternalLink size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{titleText}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{shortDescriptionText}</p>
        
        <div className="flex flex-col gap-3">
          <Link 
            href={`/${lang}/templates/${template.slug}`}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {lang === "ar" ? "تفاصيل أكثر" : "Learn More"}
          </Link>
          <Link 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-accent hover:opacity-90 text-white text-center font-medium transition-all flex items-center justify-center gap-2 shadow-md shadow-accent/20"
          >
            <MessageCircle size={20} />
            {lang === "ar" ? "طلب هذا القالب" : "Order this template"}
          </Link>
        </div>
      </div>
    </div>
  );
}
