export type Template = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  imageUrl: string;
  demoUrl: string;
  themeColor: string;
};

export const templates: Template[] = [
  {
    id: "restaurant",
    title: "Restaurant & Cafe",
    slug: "restaurant",
    description: "A perfect website for restaurants, cafes, and food delivery businesses. Allow your customers to view your menu and place online orders directly via WhatsApp.",
    shortDescription: "Menu showcase + online orders via WhatsApp",
    features: [
      "Digital Menu Integration",
      "Direct WhatsApp Ordering",
      "Business Hours & Location map",
      "Customer Reviews & Testimonials",
      "Mobile-Optimized Design",
      "Social Media Links"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://cuisine-nextjs.vercel.app/",
    themeColor: "amber"
  },
  {
    id: "gym",
    title: "Gym & Personal Trainer",
    slug: "gym",
    description: "Boost your fitness business with a dynamic website. Showcase your services, training packages, and allow clients to easily book sessions online.",
    shortDescription: "Services + packages + online booking",
    features: [
      "Class Schedules & Calendars",
      "Trainer Profiles",
      "Membership Packages Showcase",
      "Lead Capture Forms",
      "High-Energy Image Galleries",
      "WhatsApp Booking Integration"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/gymlife/",
    themeColor: "red"
  },
  {
    id: "clinic",
    title: "Medical Clinic",
    slug: "clinic",
    description: "A professional and trustworthy online presence for your clinic. Display your services, team, and let patients book appointments seamlessly.",
    shortDescription: "Services showcase + appointment booking",
    features: [
      "Doctor & Staff Profiles",
      "List of Medical Services",
      "Patient Resources & FAQs",
      "Direct WhatsApp Appointments",
      "Trust-Building Design",
      "Insurance Information Section"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/medcare/",
    themeColor: "blue"
  },
  {
    id: "store",
    title: "E-Commerce & Retail Store",
    slug: "store",
    description: "Launch your online store with a modern, user-friendly design. Showcase your products, manage inventory, and allow customers to shop seamlessly.",
    shortDescription: "Product catalog + shopping cart integration",
    features: [
      "Product Catalog & Filtering",
      "Shopping Cart Integration",
      "Secure Checkout Process",
      "Customer Account Management",
      "Promotions & Discounts",
      "WhatsApp Sales Support"
    ],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/malefashion/",
    themeColor: "indigo"
  },
  {
    id: "education",
    title: "Education Center & Courses",
    slug: "education",
    description: "An engaging platform for schools, tutoring centers, and online courses. Highlight your curriculum, instructors, and enroll students effortlessly.",
    shortDescription: "Course listings + student enrollment",
    features: [
      "Course Catalog & Details",
      "Instructor Profiles",
      "Student Enrollment Forms",
      "Event Calendars",
      "Testimonials & Success Stories",
      "WhatsApp Student Inquiries"
    ],
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://kinder-garden-academy.vercel.app",
    themeColor: "green"
  },
  {
    id: "beauty",
    title: "Beauty Center & Spa",
    slug: "beauty",
    description: "Create a relaxing and elegant online presence for your beauty salon or spa. Showcase your services and let clients book appointments with ease.",
    shortDescription: "Service menu + appointment scheduling",
    features: [
      "Service Menu & Pricing",
      "Stylist & Specialist Profiles",
      "Photo Galleries of Work",
      "Online Booking & Scheduling",
      "Customer Reviews",
      "WhatsApp Appointment Confirmation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://bloomandblossom.ae/?gad_source=1&gad_campaignid=23418301857&gbraid=0AAAABAk7lLmKaJpj10ZNDS43ChOGNWi-I&gclid=Cj0KCQjwh-HPBhCIARIsAC0p3cc8UYAe50fRxUidN2iZ_rQSNDlQxK3RMX9T_N2cQ81AfLMYCX1OUDQaArf2EALw_wcB",
    themeColor: "pink"
  },
  {
    id: "sports",
    title: "Sports Center & Club",
    slug: "sports",
    description: "A dynamic website for sports clubs, academies, and fitness centers. Share your passion, manage teams, and keep your community updated.",
    shortDescription: "Team updates + facility booking",
    features: [
      "Facility Showcase & Booking",
      "Team Roster & Profiles",
      "Match Schedules & Results",
      "News & Announcements",
      "Membership Registration",
      "WhatsApp Community Group Links"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502954268779-a2e1a7cca09c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://preview.colorlib.com/theme/soccer/",
    themeColor: "orange"
  },
  {
    id: "personal",
    title: "Personal Portfolio & Resume",
    slug: "personal",
    description: "Stand out with a professional personal website. Perfect for freelancers, creatives, and professionals looking to showcase their work and skills.",
    shortDescription: "Portfolio showcase + contact form",
    features: [
      "Project Portfolio Gallery",
      "Resume & Skills Summary",
      "Client Testimonials",
      "Blog & Articles Section",
      "Downloadable CV",
      "Direct WhatsApp Contact"
    ],
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://preview.colorlib.com/theme/rezume/",
    themeColor: "slate"
  }
];


