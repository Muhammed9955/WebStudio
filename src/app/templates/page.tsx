import { templates } from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Templates | WebStudio",
  description: "Browse our collection of professional, ready-made website templates for Restaurants, Gyms, Clinics, and more.",
};

export default function TemplatesPage() {
  return (
    <div className="w-full py-16 md:py-24 bg-slate-50 dark:bg-slate-950 flex-grow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Choose Your Template
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Select from our highly-converting, professionally designed templates. All templates include mobile optimization and WhatsApp integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
}
