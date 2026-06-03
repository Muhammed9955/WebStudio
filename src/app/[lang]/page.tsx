import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Smartphone, Globe } from "lucide-react";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden bg-gradient-to-b from-background to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center]" />
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand bg-brand/10 mb-8 border border-brand/20">
            <span className="flex h-2 w-2 rounded-full bg-brand me-2 animate-pulse"></span>
            {dict.home.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mb-6 leading-tight">
            {dict.home.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">
              {dict.home.titleHighlight}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {dict.home.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href={`/${lang}/templates`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-secondary hover:opacity-90 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {dict.home.viewTemplates}
              <ArrowRight className="ms-2 rtl:rotate-180 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>{dict.home.features.noCoding}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>{dict.home.features.mobileOptimized}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>{dict.home.features.seoFriendly}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="w-full py-20 bg-background dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {dict.home.whyChoose.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {dict.home.whyChoose.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200/50 dark:border-slate-800">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.home.whyChoose.fast.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {dict.home.whyChoose.fast.description}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200/50 dark:border-slate-800">
              <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 text-brand">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.home.whyChoose.mobile.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {dict.home.whyChoose.mobile.description}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200/50 dark:border-slate-800">
              <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.home.whyChoose.whatsapp.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {dict.home.whyChoose.whatsapp.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-20 bg-brand text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {dict.home.cta.title}
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.home.cta.subtitle}
          </p>
          <Link 
            href={`/${lang}/templates`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand bg-white rounded-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            {dict.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
