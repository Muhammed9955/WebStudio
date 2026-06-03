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
      en: "Restaurant & Cafe",
      ar: "المطاعم والكافيهات"
    },
    shortDescription: {
      en: "Menu showcase + online orders via WhatsApp",
      ar: "عرض قائمة الطعام + الطلب المباشر عبر واتساب"
    },
    description: {
      en: "A perfect website for restaurants, cafes, and food delivery businesses. Allow your customers to view your menu and place online orders directly via WhatsApp.",
      ar: "موقع مثالي للمطاعم والكافيهات وشركات توصيل الطعام. يتيح لزبائنك تصفح قائمة الطعام وطلب الأوردر مباشرة عبر واتساب."
    },
    features: {
      en: [
        "Digital Menu Integration",
        "Direct WhatsApp Ordering",
        "Business Hours & Location map",
        "Customer Reviews & Testimonials",
        "Mobile-Optimized Design",
        "Social Media Links"
      ],
      ar: [
        "عرض قائمة طعام رقمية تفاعلية",
        "الطلب المباشر والسريع عبر واتساب",
        "ساعات العمل وموقع الجغرافي على الخريطة",
        "آراء وتقييمات العملاء",
        "تصميم متوافق بالكامل مع الهواتف",
        "روابط التواصل الاجتماعي"
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
      en: "Gym & Personal Trainer",
      ar: "صالات الجيم والمدربين"
    },
    shortDescription: {
      en: "Services + packages + online booking",
      ar: "عرض الخدمات والاشتراكات + حجز التدريب أونلاين"
    },
    description: {
      en: "Boost your fitness business with a dynamic website. Showcase your services, training packages, and allow clients to easily book sessions online.",
      ar: "انطلق بأعمال اللياقة البدنية بموقع ديناميكي جذاب. اعرض خدماتك، باقات التدريب، واسمح للمشتركين بحجز الحصص بسهولة."
    },
    features: {
      en: [
        "Class Schedules & Calendars",
        "Trainer Profiles",
        "Membership Packages Showcase",
        "Lead Capture Forms",
        "High-Energy Image Galleries",
        "WhatsApp Booking Integration"
      ],
      ar: [
        "جدول مواعيد الحصص والتمارين",
        "الملفات التعريفية للمدربين",
        "عرض باقات واشتراكات العضوية",
        "نماذج جمع بيانات المشتركين",
        "معرض صور عالي الدقة والنشاط",
        "تكامل الحجز المباشر عبر واتساب"
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
      en: "Medical Clinic",
      ar: "العيادات والمراكز الطبية"
    },
    shortDescription: {
      en: "Services showcase + appointment booking",
      ar: "عرض الخدمات الطبية + حجز المواعيد والاستشارات"
    },
    description: {
      en: "A professional and trustworthy online presence for your clinic. Display your services, team, and let patients book appointments seamlessly.",
      ar: "حضور إلكتروني احترافي وموثوق لعيادتك. اعرض الخدمات الطبية، فريق الأطباء، ودع المرضى يحجزون مواعيدهم بسهولة."
    },
    features: {
      en: [
        "Doctor & Staff Profiles",
        "List of Medical Services",
        "Patient Resources & FAQs",
        "Direct WhatsApp Appointments",
        "Trust-Building Design",
        "Insurance Information Section"
      ],
      ar: [
        "السير الذاتية للأطباء والفريق الطبي",
        "عرض وتصنيف الخدمات الطبية",
        "قسم النصائح والأسئلة الشائعة",
        "حجز المواعيد الفوري عبر واتساب",
        "تصميم يعزز المصداقية والثقة",
        "تفاصيل شركات التأمين المتعاقد معها"
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
      en: "E-Commerce & Retail Store",
      ar: "المتاجر الإلكترونية"
    },
    shortDescription: {
      en: "Product catalog + shopping cart integration",
      ar: "كتالوج المنتجات + سلة التسوق المتكاملة"
    },
    description: {
      en: "Launch your online store with a modern, user-friendly design. Showcase your products, manage inventory, and allow customers to shop seamlessly.",
      ar: "ابدأ متجرك الإلكتروني بتصميم عصري وسهل الاستخدام. اعرض منتجاتك، وتلقى طلبات الشراء من عملائك بسلاسة."
    },
    features: {
      en: [
        "Product Catalog & Filtering",
        "Shopping Cart Integration",
        "Secure Checkout Process",
        "Customer Account Management",
        "Promotions & Discounts",
        "WhatsApp Sales Support"
      ],
      ar: [
        "كتالوج منتجات وتصنيف وفلترة ذكية",
        "تكامل سلة المشتريات بالكامل",
        "عملية دفع وتأكيد طلب سهلة",
        "إدارة حسابات وبيانات العملاء",
        "أقسام الخصومات والعروض الترويجية",
        "دعم المبيعات الفوري عبر واتساب"
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
      en: "Education Center & Courses",
      ar: "المراكز التعليمية والكورسات"
    },
    shortDescription: {
      en: "Course listings + student enrollment",
      ar: "عرض المناهج والكورسات + تسجيل الطلاب"
    },
    description: {
      en: "An engaging platform for schools, tutoring centers, and online courses. Highlight your curriculum, instructors, and enroll students effortlessly.",
      ar: "منصة تعليمية متكاملة للمدارس، مراكز التدريب، والكورسات. اعرض مناهجك، المحاضرين، واستقبل تسجيلات الطلاب بسهولة."
    },
    features: {
      en: [
        "Course Catalog & Details",
        "Instructor Profiles",
        "Student Enrollment Forms",
        "Event Calendars",
        "Testimonials & Success Stories",
        "WhatsApp Student Inquiries"
      ],
      ar: [
        "كتالوج الكورسات والتفاصيل الدراسية",
        "سير ذاتية للمعلمين والمحاضرين",
        "نماذج تسجيل الطلاب الإلكترونية",
        "تقويم الأحداث والفعاليات",
        "قصص نجاح وآراء الطلاب",
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
      en: "Beauty Center & Spa",
      ar: "مراكز التجميل والسبا"
    },
    shortDescription: {
      en: "Service menu + appointment scheduling",
      ar: "قائمة الخدمات والأسعار + حجز المواعيد"
    },
    description: {
      en: "Create a relaxing and elegant online presence for your beauty salon or spa. Showcase your services and let clients book appointments with ease.",
      ar: "اصنع حضوراً جذاباً وراقياً لصالون التجميل أو السبا الخاص بك. اعرض باقات الخدمات وسهّل على العميلات حجز المواعيد."
    },
    features: {
      en: [
        "Service Menu & Pricing",
        "Stylist & Specialist Profiles",
        "Photo Galleries of Work",
        "Online Booking & Scheduling",
        "Customer Reviews",
        "WhatsApp Appointment Confirmation"
      ],
      ar: [
        "قائمة الخدمات والأسعار المنسقة",
        "الملفات الشخصية للخبراء وأخصائيي التجميل",
        "معرض صور لتصاميم وأعمال السبا",
        "حجز وتأكيد المواعيد أونلاين",
        "آراء وتقييمات العميلات",
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
      en: "Sports Center & Club",
      ar: "الأندية والملاعب الرياضية"
    },
    shortDescription: {
      en: "Team updates + facility booking",
      ar: "أخبار النادي + حجز الملاعب والمنشآت"
    },
    description: {
      en: "A dynamic website for sports clubs, academies, and fitness centers. Share your passion, manage teams, and keep your community updated.",
      ar: "موقع ديناميكي تفاعلي للأندية والملاعب الرياضية. شارك شغفك الرياضي، اعرض جداول المباريات، وابقِ مجتمعك مطلعاً."
    },
    features: {
      en: [
        "Facility Showcase & Booking",
        "Team Roster & Profiles",
        "Match Schedules & Results",
        "News & Announcements",
        "Membership Registration",
        "WhatsApp Community Group Links"
      ],
      ar: [
        "حجز الملاعب والصالات الرياضية",
        "تشكيلة الفريق والملفات الشخصية",
        "جدول المباريات والنتائج أولاً بأول",
        "الأخبار والتحليلات الرياضية",
        "استمارة الاشتراك والعضوية بالنادي",
        "ربط سريع بمجموعات التواصل عبر واتساب"
      ]
    }
  },
  {
    id: "personal",
    slug: "personal",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/rezume/",
    themeColor: "slate",
    title: {
      en: "Personal Portfolio & Resume",
      ar: "المواقع الشخصية وسير الأعمال"
    },
    shortDescription: {
      en: "Portfolio showcase + contact form",
      ar: "معرض الأعمال والخبرات + نموذج تواصل مباشر"
    },
    description: {
      en: "Stand out with a professional personal website. Perfect for freelancers, creatives, and professionals looking to showcase their work and skills.",
      ar: "تميّز بين أقرانك بموقع شخصي احترافي. مثالي للمستقلين، المبدعين، والمهنيين لعرض أعمالهم وخبراتهم وجلب المشاريع."
    },
    features: {
      en: [
        "Project Portfolio Gallery",
        "Resume & Skills Summary",
        "Client Testimonials",
        "Blog & Articles Section",
        "Downloadable CV",
        "Direct WhatsApp Contact"
      ],
      ar: [
        "معرض صور وفيديو للمشاريع السابقة",
        "السيرة المهنية وملخص المهارات والخبرات",
        "توصيات وآراء العملاء السابقين",
        "قسم المقالات والأخبار الشخصية",
        "رابط تحميل السيرة الذاتية (PDF)",
        "تواصل مباشر وسريع عبر واتساب"
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
      en: "Construction & Interior Design",
      ar: "شركات التشطيبات والديكور"
    },
    shortDescription: {
      en: "Showcase your projects, interior designs, and request free consultations",
      ar: "عرض أعمال التشطيب والديكور وطلب الاستشارات المجانية"
    },
    description: {
      en: "A professional portfolio and lead generation platform for design and contracting companies. Show your portfolio in high-resolution, display clients' reviews, and collect project briefs.",
      ar: "منصة احترافية لعرض الأعمال وجلب العملاء لشركات المقاولات والديكور. اعرض سابقة أعمالك بدقة عالية، تقييمات العملاء، واستقبل تفاصيل المشاريع."
    },
    features: {
      en: [
        "Portfolio Gallery",
        "Custom Quote Request",
        "Service Details",
        "Client Testimonials",
        "FAQ Accordion",
        "WhatsApp Quick Chat"
      ],
      ar: [
        "معرض سابقة الأعمال بمختلف الفئات",
        "طلب عرض سعر مخصص للمشروع",
        "عرض تفاصيل خدمات التشطيب والديكور",
        "آراء وتقييمات العملاء",
        "قسم الأسئلة الشائعة التفاعلي",
        "المحادثة السريعة لطلب المعاينة عبر واتساب"
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
      en: "Real Estate Agencies",
      ar: "مكاتب العقارات"
    },
    shortDescription: {
      en: "List properties, filters, and capture purchase/rent requests",
      ar: "عرض العقارات مع فلترة وتلقي طلبات الشراء أو الإيجار"
    },
    description: {
      en: "A modern real estate platform. Showcase apartments, villas, and lands. Provide customers with advanced filtering and let them contact agents directly via WhatsApp.",
      ar: "منصة عقارية حديثة لعرض الشقق والفيلات والأراضي. تتيح للعملاء ميزة الفلترة المتقدمة والتواصل المباشر مع الوكلاء عبر واتساب."
    },
    features: {
      en: [
        "Property Catalog",
        "Advanced Filter",
        "Agent Profiles",
        "Interactive Maps",
        "WhatsApp Listing Inquiry",
        "Lead Capture Form"
      ],
      ar: [
        "دليل العقارات المتاح للبيع أو الإيجار",
        "نظام فلترة متقدم حسب السعر والمنطقة",
        "ملفات تعريف الوكلاء المسؤولين",
        "موقع العقارات التفاعلي على الخريطة",
        "استفسار واتساب مباشر لكل عقار",
        "نموذج تواصل وجمع بيانات العملاء"
      ]
    }
  },
  {
    id: "nursery",
    slug: "nursery",
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80",
    demoUrl: "https://kinder-garden-academy.vercel.app/",
    themeColor: "pink",
    title: {
      en: "Nurseries & Preschools",
      ar: "الحضانات ورياض الأطفال"
    },
    shortDescription: {
      en: "Introduce preschool curriculum, daily activities, and online registration",
      ar: "عرض مناهج الحضانة، الأنشطة اليومية والتسجيل المباشر"
    },
    description: {
      en: "A colorful, clean, and trusted web presence for nurseries and preschools. Build confidence with parent testimonials, curriculum details, and secure contact options.",
      ar: "موقع ملون وجذاب لبناء الثقة مع أولياء الأمور. يعرض تفاصيل المناهج والأنشطة اليومية، آراء الآباء، وطريقة التسجيل والتواصل الفوري."
    },
    features: {
      en: [
        "Curriculum Overview",
        "Daily Activity Feed",
        "Teachers Profiles",
        "Interactive Photo Gallery",
        "Online Registration Form",
        "WhatsApp Parent Portal"
      ],
      ar: [
        "تفاصيل المنهج الدراسي والمراحل التعليمية",
        "جدول الأنشطة اليومية والوجبات",
        "ملفات تعريف المعلمات والمشرفات",
        "معرض صور تفاعلي لحياة الأطفال اليومية",
        "استمارة تسجيل إلكترونية سهلة",
        "تواصل سريع وتنسيق عبر واتساب"
      ]
    }
  },
  {
    id: "language-center",
    slug: "language-center",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/academics/",
    themeColor: "indigo",
    title: {
      en: "Language Centers & Training Institutes",
      ar: "مراكز اللغات والكورسات"
    },
    shortDescription: {
      en: "Publish training schedules, online booking, and instructor profiles",
      ar: "نشر مواعيد الكورسات، الحجز الإلكتروني، وملفات المحاضرين"
    },
    description: {
      en: "Promote languages courses, coding bootcamps, or vocational training. Enable students to explore programs, view schedules, and register via WhatsApp.",
      ar: "منصة متكاملة لمراكز اللغات والتدريب. تتيح للطلاب استكشاف الكورسات المتاحة، معرفة مواعيد المجموعات، والتسجيل وحجز المقاعد مباشرة عبر واتساب."
    },
    features: {
      en: [
        "Course Schedule Planner",
        "Booking & Payment Info",
        "Expert Teachers Bios",
        "Student Reviews & Success Stories",
        "WhatsApp Enrollment Help"
      ],
      ar: [
        "جدول مواعيد الكورسات والورش المختلفة",
        "تفاصيل الحجز وطرق الدفع المتاحة",
        "السير الذاتية والخبرات للمدربين",
        "قصص نجاح وآراء الطلاب الملتحقين",
        "التسجيل الفوري والدعم عبر واتساب"
      ]
    }
  },
  {
    id: "gyms-academies",
    slug: "gyms-academies",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/gymlife/",
    themeColor: "red",
    title: {
      en: "Gyms & Sports Academies",
      ar: "الجيمات والأكاديميات الرياضية"
    },
    shortDescription: {
      en: "Class schedules, training program subscriptions, and trainer bookings",
      ar: "مواعيد الحصص، اشتراكات البرامج التدريبية وحجز المدربين"
    },
    description: {
      en: "A high-energy site for fitness clubs and sports academies. Showcase classes, subscription levels, personal trainers, and direct booking.",
      ar: "موقع رياضي تفاعلي مخصص للنوادي الرياضية والأكاديميات. يعرض الحصص الرياضية، باقات الاشتراك، المدربين، ويوفر الحجز المباشر عبر واتساب."
    },
    features: {
      en: [
        "Schedule & Classes Planner",
        "Membership Packages",
        "Trainers Directory",
        "Interactive Image Gallery",
        "FAQ Section",
        "WhatsApp Booking"
      ],
      ar: [
        "جدول التمارين والحصص الرياضية الأسبوعي",
        "باقات وأسعار الاشتراكات المختلفة",
        "دليل المدربين الشخصيين وخبراتهم",
        "معرض صور وفيديوهات الأكاديمية والتمارين",
        "قسم الأسئلة الشائعة التفاعلي",
        "حجز سريع ومباشر للاشتراك عبر واتساب"
      ]
    }
  }
];
