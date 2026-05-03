import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Smartphone, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center]" />
        <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand bg-brand/10 mb-8 border border-brand/20">
            <span className="flex h-2 w-2 rounded-full bg-brand mr-2 animate-pulse"></span>
            Launch your business online today
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mb-6">
            Get a professional website for your business in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">48 hours</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
            Ready-made, highly-converting templates optimized for Restaurants, Gyms, and Clinics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/templates"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              View Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>Mobile optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <span>SEO friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="w-full py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why choose our templates?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We focus on what matters most: converting your visitors into customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400">Optimized for speed to ensure your customers never wait. Better speed means better conversion.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 text-brand">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Mobile First</h3>
              <p className="text-slate-600 dark:text-slate-400">Over 70% of your traffic comes from mobile. Our templates look beautiful on every device.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">WhatsApp Integration</h3>
              <p className="text-slate-600 dark:text-slate-400">Direct integration with WhatsApp to capture leads and orders immediately.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-20 bg-brand text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Browse our collection of premium templates and get your business online in record time.
          </p>
          <Link 
            href="/templates"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand bg-white rounded-xl hover:bg-slate-50 transition-colors shadow-lg"
          >
            Explore Templates Now
          </Link>
        </div>
      </section>
    </div>
  );
}
