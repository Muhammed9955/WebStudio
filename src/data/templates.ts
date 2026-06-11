export type LocalizedString = {
  en: string;
  ar: string;
};

export type LocalizedArray = {
  en: string[];
  ar: string[];
};

export type Template = {
  id: string;
  slug: string;
  imageUrl: string;
  demoUrl: string;
  themeColor: string;
  title: LocalizedString;
  description: LocalizedString;
  shortDescription: LocalizedString;
  features: LocalizedArray;
};

export const templates: Template[] = [
  {
    id: "restaurant",
    slug: "restaurant",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://cuisine-nextjs.vercel.app/",
    themeColor: "amber",
    title: {
      en: "Restaurant & Cafe Growth System",
      ar: "نظام نمو المطاعم والكافيهات"
    },
    shortDescription: {
      en: "Digital menu + WhatsApp ordering + Local Google Maps optimization & Instagram ads setup",
      ar: "منيو رقمي + طلبات واتساب + تهيئة خرائط جوجل المحلية وإعلانات انستغرام"
    },
    description: {
      en: "A comprehensive solution to pack your tables and boost delivery. Includes a stunning digital menu, instant WhatsApp order capture, local SEO Google Maps setup, and initial Instagram launch ads.",
      ar: "حل متكامل لزيادة زبائنك ومبيعات التوصيل. يشمل منيو رقمي تفاعلي، استقبال طلبات واتساب، تهيئة كاملة لخرائط جوجل لجذب زوار منطقتك، وحملة إعلانية أولية على انستغرام."
    },
    features: {
      en: [
        "Interactive Digital Menu",
        "Direct WhatsApp Order Funnel",
        "Local Google Maps Ranking",
        "Instagram Ad Campaign Setup",
        "Customer Reviews System",
        "Mobile-Optimized Experience"
      ],
      ar: [
        "منيو رقمي تفاعلي بالكامل",
        "نظام تلقي طلبات فوري عبر واتساب",
        "تحسين ترتيبك على خرائط جوجل محلياً",
        "إطلاق وإعداد إعلانات انستغرام",
        "نظام تقييمات وآراء العملاء",
        "تصميم متجاوب وسريع للهواتف"
      ]
    }
  },
  {
    id: "gym",
    slug: "gym",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/gymlife/",
    themeColor: "red",
    title: {
      en: "Fitness Gym & Personal Trainer System",
      ar: "نظام صالات الجيم والمدربين"
    },
    shortDescription: {
      en: "Package showcase + booking scheduler + lead generation ads on Meta & Instagram",
      ar: "عرض باقات الاشتراك + حجز المواعيد + إعلانات جلب المشتركين على ميتا وانستغرام"
    },
    description: {
      en: "Accelerate your gym's membership signups. We build a high-energy platform showcasing classes and packages, set up automated scheduling, and run lead-gen ads to bring in new members.",
      ar: "ضاعف اشتراكات الجيم والتدريب الخاص بك. نصمم منصة مفعمة بالحيوية لعرض باقات العضوية، نربط نظام الحجز التلقائي، ونطلق حملة إعلانية لجلب عملاء مهتمين بالاشتراك فوراً."
    },
    features: {
      en: [
        "Membership Showcase & Pricing",
        "Interactive Booking & Schedules",
        "Meta Lead-Generation Ads Setup",
        "Trainer & Coach Bios",
        "High-Conversion Landing Page",
        "WhatsApp Lead Follow-up Integration"
      ],
      ar: [
        "عرض باقات الاشتراك والأسعار",
        "نظام تفاعلي لحجز الحصص والمواعيد",
        "إعداد إعلانات جلب البيانات على ميتا",
        "السيرة الذاتية للمدربين وخبراتهم",
        "صفحة هبوط (Landing Page) عالية التحويل",
        "تكامل تتبع واستقطاب العملاء عبر واتساب"
      ]
    }
  },
  {
    id: "clinic",
    slug: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/medcare/",
    themeColor: "blue",
    title: {
      en: "Medical Clinic Patient Acquisition System",
      ar: "نظام جذب المرضى للعيادات الطبية"
    },
    shortDescription: {
      en: "Professional medical website + WhatsApp/Call appointment scheduler + Local Google Maps Ads",
      ar: "موقع طبي احترافي + نظام حجز مواعيد واتساب/هاتف + إعلانات خرائط جوجل المحلية"
    },
    description: {
      en: "Build authority and acquire new patients consistently. We build a secure, trust-focused website, set up direct booking systems, and optimize your local search presence with Google Ads.",
      ar: "ابنِ سمعة عيادتك الطبية واستقطب مرضى جدد بشكل مستمر. نوفر موقعاً آمناً يعزز الثقة، نربط نظام الحجز المباشر بالواتساب، ونحسن ظهورك محلياً بإعلانات خرائط جوجل."
    },
    features: {
      en: [
        "Specialist & Doctor Profiles",
        "Medical Services Catalogue",
        "Google Local Business & Maps Ads",
        "WhatsApp Appointment Scheduling",
        "Patient Trust & Review System",
        "HIPAA-Friendly Privacy & Layout"
      ],
      ar: [
        "السيرة الذاتية للأطباء والأخصائيين",
        "دليل وتصنيف الخدمات الطبية",
        "إعداد وتفعيل إعلانات خرائط جوجل",
        "حجز المواعيد والاستشارات عبر واتساب",
        "نظام تعزيز المصداقية والتقييمات",
        "تصميم آمن وموثوق بالكامل"
      ]
    }
  },
  {
    id: "store",
    slug: "store",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/malefashion/",
    themeColor: "indigo",
    title: {
      en: "E-Commerce & Retail Sales Engine",
      ar: "محرك مبيعات المتاجر الإلكترونية"
    },
    shortDescription: {
      en: "Product catalog + conversion-optimized cart + TikTok & Instagram Shopping Ads setup",
      ar: "كتالوج المنتجات + سلة شراء محسنة + إطلاق إعلانات تسوق تيك توك وانستغرام"
    },
    description: {
      en: "Turn social media traffic into product sales. We launch a modern, ultra-fast online store, optimize the shopping cart flow, and configure target tracking ads on Instagram and TikTok.",
      ar: "حوّل زوار منصات التواصل إلى مشترين حقيقيين. نطلق متجراً إلكترونياً سريعاً جداً، نحسّن تجربة السلة لإتمام الشراء، ونضبط إعلانات المبيعات والبيكسل على تيك توك وانستغرام."
    },
    features: {
      en: [
        "Sleek Catalog & Instant Search",
        "Frictionless Cart & Checkout",
        "TikTok & Instagram Pixel Setup",
        "Social Media Shopping Ads",
        "Discount & Promo Engine",
        "WhatsApp Live Sales Support"
      ],
      ar: [
        "كتالوج أنيق مع بحث فوري",
        "سلة شراء ودفع مرنة خالية من التعقيد",
        "تثبيت وإعداد بيكسل تيك توك وميتا",
        "حملات إعلانات تسوق ذكية",
        "نظام العروض والخصومات الترويجية",
        "دعم المبيعات المباشر عبر واتساب"
      ]
    }
  },
  {
    id: "education",
    slug: "education",
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://kinder-garden-academy.vercel.app",
    themeColor: "green",
    title: {
      en: "Education Center & Courses Enrollment",
      ar: "نظام تسجيل الطلاب والمراكز التعليمية"
    },
    shortDescription: {
      en: "Course directory + enrollment forms + Meta & Google search campaigns",
      ar: "دليل الكورسات + نماذج التسجيل + حملات جوجل للتسجيل ومواقع التواصل"
    },
    description: {
      en: "Drive registrations for your classes. We create a professional educational portal, set up enrollment workflows, and launch targeted Facebook/Google search campaigns to sign up students.",
      ar: "زد عدد المشتركين في دوراتك التعليمية. ننشئ بوابة تعليمية متكاملة لبرامجك وكورساتك، نربط مسارات تسجيل الطلاب، ونطلق حملات إعلانية على فيسبوك وجوجل لجذب الطلاب."
    },
    features: {
      en: [
        "Course Catalog & Details",
        "Instructor & Teacher Bios",
        "Online Enrollment Forms",
        "Google Search Campaigns",
        "Meta Conversion Ads Setup",
        "WhatsApp Student Support"
      ],
      ar: [
        "كتالوج الكورسات والتفاصيل الدراسية",
        "سير ذاتية للمعلمين والمحاضرين",
        "نماذج تسجيل الطلاب الإلكترونية",
        "إعداد حملات إعلانية على محرك بحث جوجل",
        "إطلاق إعلانات التحويل على منصات ميتا",
        "تواصل واستفسار مباشر عبر واتساب"
      ]
    }
  },
  {
    id: "beauty",
    slug: "beauty",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://bloomandblossom.ae/?gad_source=1&gad_campaignid=23418301857&gbraid=0AAAABAk7lLmKaJpj10ZNDS43ChOGNWi-I&gclid=Cj0KCQjwh-HPBhCIARIsAC0p3cc8UYAe50fRxUidN2iZ_rQSNDlQxK3RMX9T_N2cQ81AfLMYCX1OUDQaArf2EALw_wcB",
    themeColor: "pink",
    title: {
      en: "Beauty Salon & Spa Booking Engine",
      ar: "نظام صالونات التجميل والسبا المتكامل"
    },
    shortDescription: {
      en: "Service menu + booking system + local Instagram & Google Maps campaigns",
      ar: "قائمة الخدمات + نظام حجز مواعيد + حملات انستغرام وخرائط جوجل المحلية"
    },
    description: {
      en: "Attract new clients to your beauty salon or spa. We build an elegant service list, integrate online booking calendars, and run local Instagram visual ads to fill your open slots.",
      ar: "اجذبي عميلات جديدات لصالون التجميل أو السبا الخاص بكِ. نصمم قائمة خدمات راقية، ندمج تقويم حجز المواعيد أونلاين، ونطلق حملات بصرية مميزة على انستغرام لمحيطك."
    },
    features: {
      en: [
        "Elegant Service & Pricing Catalog",
        "Live Booking & Scheduling Calendar",
        "Instagram Visual Ad Campaigns",
        "Before/After Visual Galleries",
        "Customer Reviews Board",
        "WhatsApp Booking Confirmation"
      ],
      ar: [
        "قائمة خدمات وأسعار منسقة وأنيقة",
        "تقويم تفاعلي لحجز وإدارة المواعيد",
        "حملات إعلانات بصرية جذابة على انستغرام",
        "معرض صور للأعمال وقبل/بعد",
        "لوحة تقييمات وآراء العميلات",
        "تأكيد فوري للحجوزات عبر واتساب"
      ]
    }
  },
  {
    id: "sports",
    slug: "sports",
    imageUrl: "https://images.unsplash.com/photo-1502954268779-a2e1a7cca09c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://preview.colorlib.com/theme/soccer/",
    themeColor: "orange",
    title: {
      en: "Sports Club & Facility Booking Engine",
      ar: "نظام حجز الملاعب والأندية الرياضية"
    },
    shortDescription: {
      en: "Facility booking + membership tiers + social advertising & community marketing",
      ar: "حجز الملاعب والمنشآت + باقات العضوية + التسويق عبر وسائل التواصل والشبكات"
    },
    description: {
      en: "Maximize court and academy bookings. We launch a calendar-integrated portal for facility reservations, outline membership levels, and run target ads for local sports enthusiasts.",
      ar: "ضاعف معدل إشغال ملاعبك وتسجيلات أكاديميتك. ننشئ بوابة لحجز الملاعب والمنشآت مدمجة بالتقويم، نستعرض باقات العضوية، ونطلق إعلانات لجذب الرياضيين محلياً."
    },
    features: {
      en: [
        "Facility Calendar Booking System",
        "Membership Registration & Plans",
        "Expert Team & Coach Profiles",
        "Google Maps & Local Search SEO",
        "WhatsApp Community Engagement",
        "Meta Video Ads Setup"
      ],
      ar: [
        "نظام حجز وتأكيد الملاعب في الوقت الفعلي",
        "استمارة وباقات العضوية بالنادي",
        "ملفات تعريف الأكاديمية والمدربين",
        "تهيئة الظهور على خرائط جوجل محلياً",
        "تواصل سريع وتكامل مع مجموعات واتساب",
        "إعداد حملات إعلانات فيديو على ميتا"
      ]
    }
  },
  {
    id: "construction",
    slug: "construction",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    demoUrl: "https://asaleeb-eg.com/",
    themeColor: "amber",
    title: {
      en: "Construction & Interior Design Showcase",
      ar: "منصة شركات المقاولات والديكور"
    },
    shortDescription: {
      en: "Premium design portfolio + quote calculator + high-ticket Google Search campaigns",
      ar: "سابقة أعمال وتصاميم مميزة + حاسبة تسعير + حملات جوجل للعملاء المستهدفين"
    },
    description: {
      en: "Attract premium clients looking for renovation and construction projects. Show your high-res design work, capture project scopes, and set up Google Ads targeting high-value properties.",
      ar: "اجذب عملاء يبحثون عن تشطيبات وتصاميم راقية لقصورهم وفيلاتهم. نوفر معرضاً فخماً لأعمالك، نموذج جمع تفاصيل المشاريع، وإعلانات جوجل المستهدفة للعملاء ذوي الميزانيات المرتفعة."
    },
    features: {
      en: [
        "High-Res Visual Portfolio",
        "Detailed Project Scope Forms",
        "Google Search Ads Campaign",
        "Interactive FAQ & Reviews",
        "Service Specializations Grid",
        "WhatsApp Consultation Channel"
      ],
      ar: [
        "معرض أعمال وتصاميم فوتوغرافي فخم",
        "نموذج جمع بيانات وتفاصيل المشاريع",
        "إعداد حملات إعلانية على محرك بحث جوجل",
        "قسم الأسئلة الشائعة والتقييمات",
        "عرض تفصيلي لتخصصات الخدمات",
        "قناة تواصل واستشارة عبر واتساب"
      ]
    }
  },
  {
    id: "real-estate",
    slug: "real-estate",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/homeland/",
    themeColor: "blue",
    title: {
      en: "Real Estate Property Funnel",
      ar: "نظام بيع العقارات المتكامل"
    },
    shortDescription: {
      en: "Property listings with filtering + agent lead forms + Facebook/Meta Property Ads",
      ar: "دليل عقارات تفاعلي مع فلترة + نماذج تواصل + إعلانات عقارية على فيسبوك وميتا"
    },
    description: {
      en: "Maximize lead flow for your property listings. We deploy an interactive catalog with advanced filters, build specific landing pages for hot developments, and launch meta property ads.",
      ar: "ضاعف تدفق المشترين والمهتمين بعقاراتك. نوفر دليلاً تفاعلياً بفلترة متقدمة، صفحات هبوط للمشاريع الحصرية، وإعلانات متخصصة على فيسبوك وميتا لجلب اتصالات مباشرة."
    },
    features: {
      en: [
        "Property Directory & Filters",
        "Dedicated Agent Pages",
        "Meta Real Estate Lead Ads",
        "Interactive Neighborhood Maps",
        "WhatsApp Property Inquiries",
        "High-Volume Lead Capture"
      ],
      ar: [
        "دليل العقارات مع فلترة ذكية للبحث",
        "صفحات خاصة ببيانات الوكلاء العقاريين",
        "إعداد حملات جلب العملاء المهتمين بالعقارات",
        "خرائط توضيحية تفاعلية للمواقع",
        "استفسار واتساب مخصص لكل عقار",
        "نماذج جمع بيانات عالية الأداء"
      ]
    }
  }
];
