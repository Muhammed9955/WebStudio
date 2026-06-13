import { templates } from "@/data/templates";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { getDictionary, hasLocale, Locale } from "@/dictionaries";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string; id: string }> }
): Promise<Metadata> {
  const { lang, id } = await params;
  if (!hasLocale(lang)) return { title: "Template Not Found" };

  const template = templates.find((t) => t.slug === id);
  
  if (!template) {
    const dict = await getDictionary(lang);
    return { title: dict.templates.notFound };
  }
  
  return {
    title: `${template.title[lang as Locale]} | MMS Creative Agency`,
    description: template.description[lang as Locale],
  };
}

export default async function TemplateDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  if (!hasLocale(lang)) notFound();

  const template = templates.find((t) => t.slug === id);

  if (!template) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  const phoneNumber = "+201032137085";
  const defaultMessage = encodeURIComponent(
    lang === "ar"
      ? `مرحباً MMS Creative Agency، أنا مهتم بطلب باقة النمو ${template.title.ar} لعملي.`
      : `Hello MMS Creative Agency, I'm interested in ordering the ${template.title.en} growth solution for my business.`
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="w-full bg-background dark:bg-slate-950 flex-grow py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          href={`/${lang}/templates`} 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand mb-8 transition-colors"
        >
          <ArrowLeft className="me-2 rtl:rotate-180 h-4 w-4" />
          {dict.templates.back}
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image & Demo */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <Image 
                src={template.imageUrl} 
                alt={`${template.title[lang as Locale]} screenshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex justify-center">
              <Link 
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 rounded-xl transition-colors shadow-sm w-full sm:w-auto"
              >
                {dict.templates.viewDemo}
                <ExternalLink className="ms-2 rtl:rotate-180 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right Column: Details & CTA */}
          <div className="flex flex-col">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand bg-brand/10 mb-6 border border-brand/20 w-max">
              {dict.templates.premiumBadge}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              {template.title[lang as Locale]}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {template.description[lang as Locale]}
            </p>
            
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{dict.templates.keyFeatures}</h2>
            <ul className="grid sm:grid-cols-2 gap-4 mb-12">
              {template.features[lang as Locale].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{dict.templates.getThisWebsite}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {dict.templates.deliveryDetail}
              </p>
              
              <Link 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 px-6 rounded-xl bg-accent hover:opacity-90 text-white text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/30"
              >
                <MessageCircle className="me-2 h-6 w-6" />
                {dict.templates.orderWhatsApp}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all templates and locales
export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  const localesList = ["en", "ar"];
  
  for (const locale of localesList) {
    for (const template of templates) {
      params.push({
        lang: locale,
        id: template.slug,
      });
    }
  }
  
  return params;
}
