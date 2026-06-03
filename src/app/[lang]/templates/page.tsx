import { templates } from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import { getDictionary, hasLocale, Locale } from "@/dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: `${dict.templates.title} | WebStudio`,
    description: dict.templates.subtitle,
  };
}

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div className="w-full py-16 md:py-24 bg-background dark:bg-slate-950 flex-grow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            {dict.templates.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {dict.templates.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
