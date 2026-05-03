import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Template } from "@/data/templates";

export default function TemplateCard({ template }: { template: Template }) {
  const phoneNumber = "1234567890";
  const defaultMessage = encodeURIComponent(`Hello, I'm interested in ordering the ${template.title} template for my business.`);
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={template.imageUrl} 
          alt={template.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <Link 
            href={`/templates/${template.slug}`}
            className="text-white font-medium hover:underline flex items-center gap-1"
          >
            View Details
          </Link>
          <Link 
            href={template.demoUrl}
            className="text-white font-medium hover:underline flex items-center gap-1"
          >
            Live Demo <ExternalLink size={16} />
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{template.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{template.shortDescription}</p>
        
        <div className="flex flex-col gap-3">
          <Link 
            href={`/templates/${template.slug}`}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Learn More
          </Link>
          <Link 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-brand hover:bg-brand-dark text-white text-center font-medium transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Order this template
          </Link>
        </div>
      </div>
    </div>
  );
}
