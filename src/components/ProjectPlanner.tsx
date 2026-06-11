"use client";

import { useState } from "react";
import { MessageCircle, Check, HelpCircle } from "lucide-react";

type ProjectPlannerProps = {
  lang: string;
  labels: {
    title: string;
    subtitle: string;
    servicesLabel: string;
    budgetLabel: string;
    estimateLabel: string;
    timelineText: string;
    whatsappButton: string;
    customServices: { id: string; name: string; days: number }[];
    budgets: string[];
  };
};

export default function ProjectPlanner({ lang, labels }: ProjectPlannerProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>(labels.budgets[0]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate timeline based on selected services
  const calculateTimeline = () => {
    if (selectedServices.length === 0) return 0;
    // Total days is the sum of selected services days (with a 20% discount on parallel tasks)
    const totalDays = selectedServices.reduce((acc, serviceId) => {
      const service = labels.customServices.find((s) => s.id === serviceId);
      return acc + (service ? service.days : 0);
    }, 0);
    return Math.max(7, Math.round(totalDays * 0.8));
  };

  const timelineDays = calculateTimeline();

  const handleWhatsAppSend = () => {
    const phoneNumber = "+201032137085";
    const selectedNames = selectedServices
      .map((id) => labels.customServices.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text =
      lang === "ar"
        ? `مرحباً إليفوريا، قمت بتقدير مشروعي عبر الحاسبة التفاعلية:\n- الخدمات المطلوبة: ${selectedNames || "لم يتم التحديد"}\n- الميزانية المحددة: ${selectedBudget}\n- الوقت المتوقع: ${timelineDays} يوم عمل.\nدعنا نبدأ بمناقشة خطة العمل!`
        : `Hello Elevora, I estimated my project using your interactive planner:\n- Services Needed: ${selectedNames || "None selected"}\n- Budget Range: ${selectedBudget}\n- Calculated Timeline: ${timelineDays} business days.\nLet's discuss our strategic blueprint!`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {labels.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {labels.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        {/* Services Multi-Select */}
        <div>
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wider">
            {labels.servicesLabel}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {labels.customServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-start transition-all cursor-pointer ${
                    isSelected
                      ? "border-brand bg-brand/5 text-slate-900 dark:text-white"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <span className="text-sm font-semibold">{service.name}</span>
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center border ${
                      isSelected
                        ? "bg-brand border-brand text-white"
                        : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    }`}
                  >
                    {isSelected && <Check className="h-3 w-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget Selection */}
        <div>
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wider">
            {labels.budgetLabel}
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {labels.budgets.map((budget) => {
              const isSelected = selectedBudget === budget;
              return (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`py-3 px-2 text-center rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {budget}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results / Live Calculation */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800/60 space-y-4">
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
            {labels.estimateLabel}
          </h4>
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-slate-500 dark:text-slate-400">{labels.timelineText}</span>
            <span className="text-slate-900 dark:text-white font-extrabold text-lg">
              {timelineDays === 0 ? "—" : `${timelineDays} ${lang === "ar" ? "يوم عمل" : "Days"}`}
            </span>
          </div>
        </div>

        {/* Send to WhatsApp */}
        <button
          onClick={handleWhatsAppSend}
          disabled={selectedServices.length === 0}
          className="flex items-center justify-center w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#128C7E] disabled:opacity-50 text-white font-bold transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-500/10 cursor-pointer"
        >
          <MessageCircle className="me-2 h-5 w-5" />
          {labels.whatsappButton}
        </button>
      </div>
    </div>
  );
}
