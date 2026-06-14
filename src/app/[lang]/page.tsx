import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Megaphone, Code2, Palette, Video, Sparkles, Mail, Phone } from "lucide-react";
import { getDictionary, hasLocale, Locale } from "@/dictionaries";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Packages from "@/components/Packages";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSlider from "@/components/HeroSlider";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  // Map icons to the services items in dictionaries
  const serviceIcons = [
    <Megaphone key="marketing" className="h-7 w-7" />,
    <Code2 key="software" className="h-7 w-7" />,
    <Palette key="design" className="h-7 w-7" />,
    <Video key="video" className="h-7 w-7" />,
    <Zap key="ready" className="h-7 w-7" />
  ];

  return (
    <div className="flex flex-col w-full bg-background dark:bg-slate-950">
      {/* Hero Section Slider */}
      <HeroSlider slides={dict.home.slider || []} lang={lang} />


      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {dict.services.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {dict.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {dict.services.items.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                  {serviceIcons[index] || <Sparkles className="h-7 w-7" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-background dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column: Wording */}
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-brand bg-brand/10 w-fit border border-brand/20">
                {dict.about.title}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {dict.about.subtitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {dict.about.description1}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {dict.about.description2}
              </p>
            </div>
            
            {/* Right Column: Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {dict.about.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-brand mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process/How It Works Section */}
      <section id="process" className="w-full py-20 bg-background dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {dict.process.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {dict.process.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
            {/* Draw a subtle connector line on desktop */}
            <div className="hidden md:block absolute top-[54px] left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />
            
            {dict.process.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                <div className="h-16 w-16 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-xl text-brand mb-6 shadow-sm group-hover:border-brand dark:group-hover:border-brand transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <Packages 
        lang={lang} 
        labels={{
          title: dict.packages.title,
          subtitle: dict.packages.subtitle,
          ctaText: dict.packages.ctaText,
          categories: {
            content: dict.packages.categories.content,
            digital: dict.packages.categories.digital
          },
          contentItems: dict.packages.contentItems,
          digitalItems: dict.packages.digitalItems
        }}
      />

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {dict.faq.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {dict.faq.subtitle}
            </p>
          </div>
          
          <FaqAccordion items={dict.faq.items} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-background dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {dict.contact.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              {dict.contact.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <Link href="tel:+201032137085" className="flex items-center gap-2 hover:text-brand transition-colors bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
                <Phone className="h-4.5 w-4.5 text-brand" />
                <span>+20 103 213 7085</span>
              </Link>
              <Link href="mailto:muhamed.dev.95@gmail.com" className="flex items-center gap-2 hover:text-brand transition-colors bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm">
                <Mail className="h-4.5 w-4.5 text-brand" />
                <span>muhamed.dev.95@gmail.com</span>
              </Link>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-100 dark:shadow-none">
            <ContactForm
              lang={lang}
              labels={{
                name: dict.contact.nameLabel,
                email: dict.contact.emailLabel,
                message: dict.contact.messageLabel,
                submit: dict.contact.submitButton,
                success: dict.contact.successMessage
              }}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-20 bg-brand text-white relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {dict.home.cta.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.home.cta.subtitle}
          </p>
          <Link 
            href={`/${lang}/templates`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand bg-white rounded-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-dark/20"
          >
            {dict.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
