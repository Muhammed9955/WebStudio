"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type ContactFormProps = {
  lang: string;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
  };
};

export default function ContactForm({ lang, labels }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Lead - Elevora Agency Form Submission",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(lang === "ar" 
          ? "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى." 
          : "An error occurred while sending the message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(lang === "ar" 
        ? "حدث خطأ في الاتصال، يرجى المحاولة لاحقاً." 
        : "Connection error. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-brand/5 border border-brand/20 rounded-2xl text-center space-y-4 animate-fade-in">
        <div className="h-16 w-16 rounded-full bg-brand/10 flex items-center justify-center text-brand">
          <CheckCircle2 className="h-10 w-10 animate-bounce" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {labels.success}
        </h3>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-all shadow-md"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {labels.message}
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center w-full py-4 px-6 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 shadow-lg shadow-brand/10 hover:shadow-brand/20 cursor-pointer"
      >
        {isLoading ? (
          <span className="flex h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin me-2" />
        ) : (
          <Send className="me-2 h-5 w-5" />
        )}
        {labels.submit}
      </button>
    </form>
  );
}
